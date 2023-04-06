<?php

use App\Http\Controllers\api\GameController;
use App\Http\Controllers\api\StandingsController;
use App\Http\Controllers\AuthController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


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
//Route::apiResource('standings', StandingsController::class);

Route::group(['middleware' => ['auth:sanctum']],function(){
    Route::apiResource('games', GameController::class);
    Route::post('logout', [AuthController::class,'logout']);
});

Route::post('login', [AuthController::class,'login']);
/* Route::get('generate-token/{id}', function ($id) {
    $user = User::find($id);
    
    return response()->json(['token' => $token]);
});
 */