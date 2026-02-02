<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreVisaApplicationRequest;
use App\Http\Requests\UploadPassportRequest;
use App\Models\VisaApplication;
use App\Services\DataMatchingService;
use App\Services\PassportOcrService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class VisaApplicationController extends Controller
{
    protected PassportOcrService $ocrService;
    protected DataMatchingService $matchingService;

    public function __construct(PassportOcrService $ocrService, DataMatchingService $matchingService)
    {
        $this->ocrService = $ocrService;
        $this->matchingService = $matchingService;
    }

    /**
     * Display the visa application form.
     */
    public function index(): Response
    {
        return Inertia::render('visa-application', [
            // Pass any initial data if needed
        ]);
    }

    /**
     * Handle passport upload and OCR processing.
     */
    public function uploadPassport(UploadPassportRequest $request): JsonResponse
    {
        // 1. Process and store the file
        $file = $request->file('passport');
        
        // Use service to process (extract data)
        $result = $this->ocrService->processPassportFile($file);
        
        if (!$result['success']) {
            return response()->json([
                'message' => 'Failed to process passport image. Please try again with a clearer image.',
                'error' => $result['error'] ?? 'Unknown error'
            ], 422);
        }
        
        // 2. Return data for frontend verification
        // Note: We return the temp path to be sent back with final submission
        return response()->json([
            'message' => 'Passport processed successfully',
            'temp_path' => $result['temp_path'],
            'extracted_data' => $result['data'],
            'confidence' => $result['confidence'],
        ]);
    }

    /**
     * Verify passport data matches form input.
     */
    public function verifyPassportData(Request $request): JsonResponse
    {
        $request->validate([
            'form_data' => 'required|array',
            'ocr_data' => 'required|array',
        ]);

        $result = $this->matchingService->validateMatch(
            $request->input('form_data'),
            $request->input('ocr_data')
        );

        return response()->json($result);
    }

    /**
     * Store the visa application.
     */
    public function store(StoreVisaApplicationRequest $request)
    {
        // 1. Validate data (already handled by FormRequest)
        $validated = $request->validated();
        
        // 2. Move passport from temp to permanent storage
        $tempPath = $validated['passport_file_path'];
        $permanentPath = 'passports/' . basename($tempPath);
        
        if (Storage::disk('local')->exists($tempPath)) {
            // In a real scenario with encryption:
            // Storage::put($permanentPath, encrypt(Storage::get($tempPath)));
            // For now, just move it
            Storage::disk('local')->move($tempPath, $permanentPath);
        } else {
            // Handle edge case where file is missing (session expired?)
            // For now, assume it's there or fail gracefully
             // In production: return back()->withErrors(['passport' => 'Session expired, please upload passport again.']);
        }
        
        // 3. Create Application
        $application = VisaApplication::create([
            'first_name' => $validated['first_name'],
            'middle_name' => $validated['middle_name'],
            'last_name' => $validated['last_name'],
            'email' => $validated['email'],
            'phone' => $validated['phone'],
            'nationality' => $validated['nationality'],
            'passport_number' => $validated['passport_number'],
            'date_of_birth' => $validated['date_of_birth'],
            
            'visa_type' => $validated['visa_type'],
            'arrival_date' => $validated['arrival_date'],
            'departure_date' => $validated['departure_date'],
            'purpose' => $validated['purpose'],
            'accommodation' => $validated['accommodation'],
            
            'passport_file_path' => $permanentPath,
            'ocr_data' => $validated['ocr_data'],
            
            'status' => 'submitted',
            'submitted_at' => now(),
        ]);
        
        // 4. Log Action
        $application->logAction('created', null, ['ip' => $request->ip()]);
        $application->logAction('submitted', null);
        
        // 5. Send Email (Queue it)
        // Mail::to($application->email)->send(new VisaApplicationSubmitted($application));
        
        // 6. Return Success Response
        return redirect()->back()->with('success', [
            'message' => 'Application submitted successfully!',
            'reference_number' => $application->reference_number,
        ]);
    }

    /**
     * Download the application summary PDF.
     */
    /**
     * Download the application summary PDF.
     */
    public function downloadPdf(string $reference)
    {
        $application = VisaApplication::where('reference_number', $reference)->firstOrFail();
        
        $pdf = \Barryvdh\DomPDF\Facade\Pdf::loadView('pdf.application-summary', compact('application'));
        
        return $pdf->download('visa-application-' . $application->reference_number . '.pdf');
    }

    /**
     * Check application status (Public).
     */
    public function checkStatus(Request $request): JsonResponse
    {
        $request->validate([
            'reference_number' => 'required|string',
            'passport_number' => 'required|string',
        ]);

        $application = VisaApplication::where('reference_number', $request->reference_number)
            ->where('passport_number', $request->passport_number)
            ->first();

        if (!$application) {
            return response()->json([
                'found' => false,
                'message' => 'Application not found. Please check your reference and passport numbers.'
            ]);
        }

        return response()->json([
            'found' => true,
            'status' => $application->status,
            'applicant_name' => $application->first_name . ' ' . $application->last_name,
            'submitted_at' => $application->created_at->format('Y-m-d'),
        ]);
    }

    // --- Admin Methods ---

    /**
     * Display admin dashboard with application list.
     */
    public function dashboard(Request $request): Response
    {
        $query = VisaApplication::query();

        // Filter by status
        if ($request->has('status') && $request->status !== 'all') {
            $query->where('status', $request->status);
        }

        // Search by reference or name
        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function($q) use ($search) {
                $q->where('reference_number', 'like', "%{$search}%")
                  ->orWhere('passport_number', 'like', "%{$search}%")
                  ->orWhere('last_name', 'like', "%{$search}%");
            });
        }

        $applications = $query->latest()->paginate(10)->withQueryString();
        
        // stats for dashboard
        $stats = [
            'total' => VisaApplication::count(),
            'pending' => VisaApplication::where('status', 'submitted')->count(), // submitted = pending review
            'approved' => VisaApplication::where('status', 'approved')->count(),
            'rejected' => VisaApplication::where('status', 'rejected')->count(),
        ];

        return Inertia::render('admin/Dashboard', [
            'applications' => $applications,
            'stats' => $stats,
            'filters' => $request->only(['status', 'search']),
        ]);
    }

    /**
     * Show application details for admin review.
     */
    public function show($id): Response
    {
        $application = VisaApplication::findOrFail($id);

        return Inertia::render('admin/ApplicationReview', [
            'application' => $application,
        ]);
    }

    /**
     * Update application status (Approve/Reject).
     */
    public function updateStatus(Request $request, $id)
    {
        $request->validate([
            'status' => 'required|in:approved,rejected',
            'reason' => 'nullable|string|max:1000',
        ]);

        $application = VisaApplication::findOrFail($id);
        
        $application->update([
            'status' => $request->status,
            'reviewed_at' => now(),
            // 'reviewed_by' => auth()->id(), // in real app
            'notes' => $request->reason,
        ]);

        // Log action
        $application->logAction($request->status, null, ['reason' => $request->reason]);

        // Send Email Notification (Queue)
        // Mail::to($application->email)->send(new VisaApplicationStatusUpdate($application));

        return redirect()->back()->with('success', "Application {$request->status} successfully.");
    }
}
