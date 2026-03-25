<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    /**
     * Display a listing of the users.
     */
    public function index(Request $request): Response
    {
        \Illuminate\Support\Facades\Gate::authorize('manage-users');

        $query = User::query();

        if ($request->has('role') && $request->role !== 'all') {
            $query->where('role', '=', $request->role);
        }

        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%");
            });
        }

        $users = $query->latest()->paginate(15)->withQueryString();

        return Inertia::render('Admin/Users/Index', [
            'users' => $users,
            'filters' => $request->only(['role', 'search']),
        ]);
    }

    /**
     * Update user role or status.
     */
    public function update(Request $request, $id)
    {
        \Illuminate\Support\Facades\Gate::authorize('manage-users');
        $user = User::findOrFail($id);

        $validated = $request->validate([
            'role' => 'sometimes|in:Admin,Agent,Applicant',
            'is_active' => 'sometimes|boolean',
        ]);

        // Prevent admin from deactivating/changing role of themselves
        if ($user->id === auth('admin')->id()) {
            return redirect()->back()->withErrors(['message' => 'You cannot modify your own profile here.']);
        }

        $user->update($validated);

        return redirect()->back()->with('success', 'User updated successfully.');
    }
}
