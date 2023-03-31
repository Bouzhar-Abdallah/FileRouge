<?php

namespace Database\Seeders;

use App\Models\Event;
use App\Models\EventPoste;
use App\Models\Poste;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EventPosteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    protected $table = 'event_poste';
    public function run(): void
    {
        $eventNames = Event::all()->pluck('name')->toArray();
        $posteNames = Poste::all()->pluck('name')->toArray();
        
        
        $pointsMatrix = [
            'goal-scored' => [
                'Forward' => 4,
                'Midfielder' => 5,
                'Defender' => 6,
                'Goalkeeper' => 6,
            ],
            'own-goal' => [
                'Forward' => -2,
                'Midfielder' => -2,
                'Defender' => -2,
                'Goalkeeper' => -2,
            ],
            'yellow-card' => [
                'Forward' => -1,
                'Midfielder' => -1,
                'Defender' => -1,
                'Goalkeeper' => -1,
            ],
            'red-card' => [
                'Forward' => -3,
                'Midfielder' => -3,
                'Defender' => -3,
                'Goalkeeper' => -3,
            ],
            'in-pitch' => [
                'Forward' => 1,
                'Midfielder' => 1,
                'Defender' => 1,
                'Goalkeeper' => 1,
            ],
            'Dessesive-goal' => [
                'Forward' => 6,
                'Midfielder' => 6,
                'Defender' => 6,
                'Goalkeeper' => 6,
            ],
            'clean-sheet' => [
                'Forward' => 3,
                'Midfielder' => 4,
                'Defender' => 5,
                'Goalkeeper' => 6,
            ],
            'assist' => [
                'Forward' => 3,
                'Midfielder' => 3,
                'Defender' => 3,
                'Goalkeeper' => 3,
            ],
            'penalty-missed' => [
                'Forward' => -3,
                'Midfielder' => -3,
                'Defender' => -3,
                'Goalkeeper' => -3,
            ],
            'penalty-saved' => [
                'Forward' => 5,
                'Midfielder' => 5,
                'Defender' => 5,
                'Goalkeeper' => 5,
            ],
            'goal-conceded' => [
                'Forward' => -1,
                'Midfielder' => -1,
                'Defender' => -1,
                'Goalkeeper' => -1,
            ],
            'penalty-commited' => [
                'Forward' => -2,
                'Midfielder' => -2,
                'Defender' => -2,
                'Goalkeeper' => -2,
            ],
        ];
        // Define the points for each event and poste combination.
        foreach ($eventNames as $eventName) {
            $event = Event::where('name', $eventName)->first();

            foreach ($posteNames as $posteName) {
                $poste = Poste::where('name', $posteName)->first();
                // Set default points to 0 if not defined in $pointsMatrix
                $points = $pointsMatrix[$eventName][$posteName] ?? 0; 

                EventPoste::create([
                    'event_id' => $event->id,
                    'poste_id' => $poste->id,
                    'points' => $points,
                ]);
            }
        }
        
    }
}
