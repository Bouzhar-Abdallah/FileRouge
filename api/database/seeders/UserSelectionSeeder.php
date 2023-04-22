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
        $users = User::whereHas('role', function ($query) {
            $query->where('name', 'user');
        })->get();

        //seed first 10 weeks selections
        //$weeks = Week::where('week_number', '<=', 10)->get();
        //seed only first week selections
        $weeks = Week::where('week_number', '<=', 1)->get();
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
