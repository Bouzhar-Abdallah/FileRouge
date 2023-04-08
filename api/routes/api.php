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
/* Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
}); */
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

Route::middleware(['auth:api'])->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'me']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
});

Route::middleware(['auth:api'])->group(function () {
    //checks if logged in returns who is logged in
    Route::get('/me', [AuthController::class, 'me']);
});
/* // Routes that require the 'admin' role
Route::middleware(['auth:api', 'role:admin'])->group(function () {
});

// Routes that require the 'user' role
Route::middleware(['auth:api', 'role:user'])->group(function () {
    Route::get('user', [AuthController::class, 'userProfile']);
});
 */



Route::group(['middleware' => ['auth:sanctum']],function(){
    Route::apiResource('games', GameController::class);
    //Route::post('logout', [AuthController::class,'logout']);
});
/* Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('games', GameController::class);
Route::apiResource('standings', StandingsController::class);

Route::post('login', [AuthController::class,'login']); */
/* Route::get('generate-token/{id}', function ($id) {
    $user = User::find($id);
    
    return response()->json(['token' => $token]);
});
 */