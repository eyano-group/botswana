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

