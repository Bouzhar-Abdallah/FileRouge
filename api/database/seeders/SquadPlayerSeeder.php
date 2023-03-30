<?php

namespace Database\Seeders;

use App\Models\Player;
use App\Models\Squad;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SquadPlayerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Get all squads
        $squads = Squad::all();

        // Get all players
        $players = Player::all();

        // Iterate through each squad
        foreach ($squads as $squad) {

            //select random 2 players with poste name = 'Goalkeeper'
            $goalkeepers = $players->where('poste.name', 'Goalkeeper')->random(2);

            //select random 5 players with poste name = 'Defender'
            $defenders = $players->where('poste.name', 'Defender')->random(5);

            //select random 5 players with poste name = 'Midfielder'
            $midfielders = $players->where('poste.name', 'Midfielder')->random(5);

            //select random 4 players with poste name = 'Forward'
            $forwards = $players->where('poste.name', 'Forward')->random(4);

            // Merge all selected players into a single collection
            $selectedPlayers = $goalkeepers->merge($defenders)->merge($midfielders)->merge($forwards);

            // Attach the 16 selected players to the current squad
            $squad->players()->attach($selectedPlayers->pluck('id')->toArray());
        }
    }
}
