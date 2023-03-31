<?php

namespace Database\Seeders;

use App\Models\Club;
use App\Models\Player;
use App\Models\Poste;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PlayerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $postes = Poste::all()->pluck('name')->toArray();
        $clubs = Club::all()->pluck('name')->toArray();

        //for each club seed 3 golkeepers, 8 defenders, 8 midfielders and 6 forwards
        foreach ($clubs as $club) {
            foreach ($postes as $poste) {
                switch ($poste) {
                    case 'Goalkeeper':
                        $count = 3;
                        break;
                    case 'Defender':
                        $count = 8;
                        break;
                    case 'Midfielder':
                        $count = 8;
                        break;
                    case 'Forward':
                        $count = 6;
                        break;
                    default:
                        $count = 0;
                        break;
                }
                Player::factory()
                    ->count($count)
                    ->create([
                        'club_id' => Club::where('name', $club)->first()->id,
                        'poste_id' => Poste::where('name', $poste)->first()->id,
                    ]);
            }
        }
    }
}
