<?php

namespace Database\Seeders;

use App\Models\Club;
use App\Models\Game;
use App\Models\Week;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GameSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
 /*    public function run()
    {
        $clubs = Club::all();
        $totalClubs = $clubs->count();
        $totalWeeks = ($totalClubs - 1) * 2; // Each team plays other teams twice
    
        for ($weekNumber = 1; $weekNumber <= $totalWeeks; $weekNumber++) {
            $week = Week::find($weekNumber);
    
            // Split the clubs into two groups
            $groupA = $clubs->splice(0, $totalClubs / 2);
            $groupB = $clubs;
    
            for ($game = 1; $game <= $totalClubs / 2; $game++) {
                $homeClub = $groupA[$game - 1];
                $awayClub = $groupB[$game - 1];
    
                // Swap home and away clubs for half of the weeks to ensure they play each other twice
                if ($weekNumber > $totalClubs - 1) {
                    list($homeClub, $awayClub) = [$awayClub, $homeClub];
                }
    
                
            }
    
            // Rotate the clubs to create new match pairings for the next week
            $groupB->prepend($groupA->pop());
            $groupA->push($groupB->shift());
        }
    } */
    public function run()
    {
        $clubs = Club::all();
        $numClubs = $clubs->count();
        $numWeeks = ($numClubs - 1) * 2;
        $hour = ['14:00', '15:00', '16:00', '18:00', '19:00', '20:00', '21:00'];
        if ($numClubs % 2 != 0) {
            $clubs->push(null);
            $numClubs += 1;
        }
    
        for ($weekNumber = 1; $weekNumber <= $numWeeks; $weekNumber++) {
            $week = Week::find($weekNumber);
    
            for ($i = 0; $i < $numClubs / 2; $i++) {
                $homeClub = $clubs[$i];
                $awayClub = $clubs[$numClubs - 1 - $i];
    
                if ($weekNumber > $numClubs - 1) {
                    list($homeClub, $awayClub) = array($awayClub, $homeClub);
                }
    
                if ($homeClub !== null && $awayClub !== null) {
                    $week->games()->create([
                        'home_club_id' => $homeClub->id,
                        'away_club_id' => $awayClub->id,
                        'time' => $hour[array_rand($hour)],
                    ]);
                }
            }
    //rotating the club order for each round of fixtures
            $clubs = $clubs->slice(0, 1)->concat($clubs->slice(-1, 1))->concat($clubs->slice(1, $numClubs - 2));
        }
    }
    
}
