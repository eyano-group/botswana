<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\VisaApplication;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    /**
     * Display admin dashboard with application stats.
     */
    public function index(Request $request): Response
    {
        // Authorize
        \Illuminate\Support\Facades\Gate::authorize('view-admin');

        $query = VisaApplication::query();

        // Filter by status
        if ($request->has('status') && $request->status !== 'all') {
            $query->where('status', '=', $request->status);
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
            'pending' => VisaApplication::where('status', '=', 'submitted')->count(),
            'approved' => VisaApplication::where('status', '=', 'approved')->count(),
            'rejected' => VisaApplication::where('status', '=', 'rejected')->count(),
        ];

        return Inertia::render('Admin/Dashboard', [
            'applications' => $applications,
            'stats' => $stats,
            'filters' => $request->only(['status', 'search']),
        ]);
    }
}
