<?php

namespace Database\Seeders;

use App\Models\Player;
use App\Models\UserSelection;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SelectedPlayersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $userSelections = UserSelection::all();
        $players = Player::all();

        foreach ($userSelections as $userSelection) {
            //select random 2 players with poste name = 'Goalkeeper'
            $goalkeepers = $players->where('poste.name', 'Goalkeeper')->random(1);

            //select random 5 players with poste name = 'Defender'
            $defenders = $players->where('poste.name', 'Defender')->random(4);

            //select random 5 players with poste name = 'Midfielder'
            $midfielders = $players->where('poste.name', 'Midfielder')->random(4);

            //select random 4 players with poste name = 'Forward'
            $forwards = $players->where('poste.name', 'Forward')->random(2);

            // Merge all selected players into a single collection
            $selectedPlayers = $goalkeepers->merge($defenders)->merge($midfielders)->merge($forwards);
            $userSelection->players()->sync($selectedPlayers);
        }
    }
}
