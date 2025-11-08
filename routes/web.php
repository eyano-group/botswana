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

Route::get('/recreation', function () {
    return Inertia::render('recreation');
})->name('recreation');
