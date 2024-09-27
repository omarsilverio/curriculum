<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('index');
})->name('index');

Route::get('/blog', function () {
    return view('blog');
})->name('blog');

Route::get('/curriculum', function () {
    return view('curriculum');
})->name('curriculum');

Route::get('/contact-us', function () {
    return view('contact-us');
})->name('contact-us');
