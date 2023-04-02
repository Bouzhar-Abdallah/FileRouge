<?php

namespace Database\Seeders;

use App\Models\Event;
use App\Models\Game;
use App\Models\GamePlayerEvent;
use App\Models\Player;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GamePlayerEventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $games = Game::all();
        $players = Player::all();
        $events = Event::all();

        foreach ($games as $game) {
            foreach ($players as $player) {
                $eventCount = rand(1, 3); // Randomly select 1, 2, or 3 events for each player
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
