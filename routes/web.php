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

