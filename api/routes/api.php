<?php

use App\Http\Controllers\api\ClubsController;
use App\Http\Controllers\api\CompetitionController;
use App\Http\Controllers\api\GameController;
use App\Http\Controllers\api\PlayerController;
use App\Http\Controllers\api\SquadController;
use App\Http\Controllers\api\StandingsController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\api\SelectionController;
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

Route::apiResource('standings', StandingsController::class);
Route::get('fixtures', [GameController::class, 'fixtures']);
Route::get('results', [GameController::class, 'results']);


Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

Route::middleware(['auth:api'])->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/checkLogin', [AuthController::class, 'checkLogin']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/checkLogin', [AuthController::class, 'checkLogin']);
});

// Routes that require the 'user' role
Route::middleware(['auth:api', 'role:user'])->group(function () {
    Route::get('players', [PlayerController::class, 'players']);
    Route::get('squad', [SquadController::class, 'squad']);
    Route::post('saveNewSquad', [SquadController::class, 'saveNewSquad']);
    Route::get('getLogos', [SquadController::class, 'getLogos']);
    Route::post('saveSelectedPlayers', [SquadController::class, 'saveSelectedPlayers']);
    Route::get('competition', [CompetitionController::class, 'getCompetition']);
    Route::get('selection', [SelectionController::class, 'getSelection']);
    
});

Route::get('getClubs', [ClubsController::class, 'getClubs']);
/* Route::get('players', [PlayerController::class, 'players']);
Route::get('squad', [SquadController::class, 'squad']);
Route::post('saveNewSquad', [SquadController::class, 'saveNewSquad']);
Route::get('getLogos', [SquadController::class, 'getLogos']); */


/* // Routes that require the 'admin' role
Route::middleware(['auth:api', 'role:admin'])->group(function () {
});

 */



Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::apiResource('games', GameController::class);
    //Route::post('logout', [AuthController::class,'logout']);
});
/* Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('games', GameController::class);

Route::post('login', [AuthController::class,'login']); */
/* Route::get('generate-token/{id}', function ($id) {
    $user = User::find($id);
    
    return response()->json(['token' => $token]);
});
 */