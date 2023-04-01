<?php

use App\Models\Game;
use App\Models\Player;
use App\Models\Week;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    //return view('welcome');

    $game = Game::find(1); // Replace 1 with the desired game ID
    $player = Player::find(1); // Replace 1 with the desired player ID

    $points = $player->getPointsForGame($game->id);
    echo "Player {$player->id} has {$points} points in Game {$game->id}\n";
    /* $players = $game->playerEvents;
    
    foreach ($players as $player) {
        $points = $player->getPointsForGame($game->id);
        echo "Player {$player->id} has {$points} points in Game {$game->id}\n";
    }     */
});
