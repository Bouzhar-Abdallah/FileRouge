<?php

use App\Http\Controllers\api\GameController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Tymon\JWTAuth\Facades\JWTAuth;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Route::apiResource('games', GameController::class);
Route::middleware(['jwt'])->get('games', function () {
    return response()->json(['games' => 'Your favorite games']);
});

Route::get('generate-token/{id}', function ($id) {
    $user = User::find($id);
    $token = JWTAuth::fromUser($user);
    return response()->json(['token' => $token]);
});
