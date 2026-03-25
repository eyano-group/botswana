<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        \Illuminate\Support\Facades\Gate::define('view-admin', function (\App\Models\User $user) {
            return in_array($user->role, ['Admin', 'Agent']);
        });

        \Illuminate\Support\Facades\Gate::define('manage-users', function (\App\Models\User $user) {
            return $user->role === 'Admin';
        });

        \Illuminate\Support\Facades\Gate::define('manage-applications', function (\App\Models\User $user) {
            return in_array($user->role, ['Admin', 'Agent']);
        });
    }
}
