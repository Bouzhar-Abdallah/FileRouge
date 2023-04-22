<?php

namespace Database\Seeders;

use App\Models\Event;
use App\Models\Game;
use App\Models\GamePlayerEvent;
use App\Models\Player;
use App\Models\Week;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GamePlayerEventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //seed first 10 weeks games
        /* $games = Week::where('week_number', '<=', 10)->get()->flatMap(function ($week) {
            return $week->games;
        }); */
        //seed only first week games
        $week = Week::first();
        $games = $week->games;

        $events = Event::all();

        foreach ($games as $game) {
            $game->is_played = true;
            $game->save();
            $awayPlayers = $game->awayClub->players->random(11);
            $homePlayers= $game->homeClub->players->random(11);
            $players = $awayPlayers->merge($homePlayers);
            foreach ($players as $player) {
                $eventCount = rand(0,2); // Randomly select 0, 1 or 2 events for each player
                $selectedEvents = $events->random($eventCount);

                foreach ($selectedEvents as $event) {
                    $gamePlayerEvent = new GamePlayerEvent;
                    $gamePlayerEvent->game()->associate($game);
                    $gamePlayerEvent->player()->associate($player);
                    $gamePlayerEvent->event()->associate($event);
                    $gamePlayerEvent->save();
                }
            }
        }
    }
}
