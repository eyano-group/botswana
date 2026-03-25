<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\VisaApplication;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ApplicationController extends Controller
{
    /**
     * Display listing of applications.
     */
    public function index(Request $request): Response
    {
        \Illuminate\Support\Facades\Gate::authorize('manage-applications');

        $query = VisaApplication::query();

        if ($request->has('status') && $request->status !== 'all') {
            $query->where('status', '=', $request->status);
        }
        
        if ($request->has('date')) {
            // e.g., filter by date range if provided
        }

        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function($q) use ($search) {
                $q->where('reference_number', 'like', "%{$search}%")
                  ->orWhere('passport_number', 'like', "%{$search}%")
                  ->orWhere('last_name', 'like', "%{$search}%");
            });
        }

        $applications = $query->latest()->paginate(15)->withQueryString();

        return Inertia::render('Admin/Applications/Index', [
            'applications' => $applications,
            'filters' => $request->only(['status', 'search', 'date']),
        ]);
    }

    /**
     * Show application details for admin review.
     */
    public function show($id): Response
    {
        \Illuminate\Support\Facades\Gate::authorize('manage-applications');
        $application = VisaApplication::findOrFail($id);

        return Inertia::render('Admin/Applications/Show', [
            'application' => $application,
        ]);
    }

    /**
     * Update application status (Approve/Reject).
     */
    public function update(Request $request, $id)
    {
        \Illuminate\Support\Facades\Gate::authorize('manage-applications');
        $request->validate([
            'status' => 'required|in:approved,rejected',
            'reason' => 'nullable|string|max:1000',
        ]);

        $application = VisaApplication::findOrFail($id);
        
        $application->update([
            'status' => $request->status,
            'reviewed_at' => now(),
            // 'reviewed_by' => auth('admin')->id(),
            'notes' => $request->reason,
        ]);

        $application->logAction($request->status, null, ['reason' => $request->reason]);

        return redirect()->back()->with('success', "Application {$request->status} successfully.");
    }
}
