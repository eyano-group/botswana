<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/contact', function () {
    return Inertia::render('contact');
})->name('contact');

Route::get('/news', function () {
    return Inertia::render('news');
})->name('news');

Route::get('/about/{slug}', function ($slug) {
    return Inertia::render('about', [
        'slug' => $slug
    ]);
})->name('about');

Route::get('/agriculture', function () {
    return Inertia::render('agriculture');
})->name('agriculture');

Route::get('/benefits-payments', function () {
    return Inertia::render('benefits');
})->name('benefits-payments');

Route::get('/culture-sports-tourism', function () {
    return Inertia::render('recreation');
})->name('culture-sports-tourism');

Route::get('/education-learning', function () {
    return Inertia::render('education');
})->name('education-learning');

Route::get('/health-wellness', function () {
    return Inertia::render('health');
})->name('health-wellness');

Route::get('/immigration-civil-registration', function () {
    return Inertia::render('immigration');
})->name('immigration-civil-registration');

Route::get('/labor-employment', function () {
    return Inertia::render('labour');
})->name('labour-employment');

Route::get('/land-construction-housing', function () {
    return Inertia::render('land');
})->name('land-construction-housing');

Route::get('/law-crime-Justice', function () {
    return Inertia::render('law');
})->name('law-crime-justice');


// Visa Application Routes
use App\Http\Controllers\VisaApplicationController;

Route::get('/apply-visa', [VisaApplicationController::class, 'index'])->name('visa.apply');
Route::post('/apply-visa', [VisaApplicationController::class, 'store'])->name('visa.store');
Route::post('/apply-visa/upload-passport', [VisaApplicationController::class, 'uploadPassport'])->name('visa.upload-passport');
Route::post('/apply-visa/verify-passport', [VisaApplicationController::class, 'verifyPassportData'])->name('visa.verify-passport');
Route::post('/apply-visa/check-status', [VisaApplicationController::class, 'checkStatus'])->name('visa.check-status');

Route::get('/check-status', function () {
    return Inertia::render('CheckStatus');
})->name('check-status');
Route::get('/apply-visa/{reference}/pdf', [VisaApplicationController::class, 'downloadPdf'])->name('visa.download-pdf');

use App\Http\Controllers\Admin\Auth\LoginController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\ApplicationController;
use App\Http\Controllers\Admin\UserController;

// Admin Routes
Route::prefix('admin')->name('admin.')->group(function () {
    // Auth Routes
    Route::middleware('guest:admin')->group(function () {
        Route::get('login', [LoginController::class, 'create'])->name('login');
        Route::post('login', [LoginController::class, 'store'])->name('login.store');
    });

    // Protected Routes
    Route::middleware('auth:admin')->group(function () {
        Route::post('logout', [LoginController::class, 'destroy'])->name('logout');
        
        Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
        
        Route::get('applications', [ApplicationController::class, 'index'])->name('applications.index');
        Route::get('applications/{id}', [ApplicationController::class, 'show'])->name('applications.show');
        Route::post('applications/{id}/status', [ApplicationController::class, 'update'])->name('applications.update-status');

        Route::get('users', [UserController::class, 'index'])->name('users.index');
        Route::post('users/{id}', [UserController::class, 'update'])->name('users.update');
    });
});

