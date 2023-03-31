<?php

namespace Database\Seeders;

use App\Models\Event;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $eventNames = ['goal-scored', 'own-goal', 'yellow-card', 'red-card', 'in-pitch', 'Dessesive-goal','clean-sheet','assist','penalty-missed','penalty-saved','goal-conceded','penalty-commited'];

        foreach ($eventNames as $eventName) {
            Event::create([
                'name' => $eventName,
            ]);
        }
    }
}
