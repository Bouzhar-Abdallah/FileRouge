<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Week;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSelectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::all();
        $weeks = Week::all();

        foreach ($users as $user) {
            foreach ($weeks as $week) {
                $user->selections()->create([
                    'week_id' => $week->id,
                    'user_id' => $user->id,
                ]);
            }
        }
    }
}