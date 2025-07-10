<?php

// use Illuminate\Http\Request;

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\RoleController;
use Illuminate\Http\Request;

Route::post('register', [AuthController::class,'register']);
Route::post('login',    [AuthController::class,'login']);
Route::post('forgot-password', [AuthController::class,'forgotPassword']);
Route::post('reset-password',  [AuthController::class,'resetPassword']);

Route::middleware('auth:sanctum')->group(function(){
    Route::post('logout', [AuthController::class,'logout']);
    Route::apiResource('users',    UserController::class)->except(['store']);
});