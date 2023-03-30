<?php

namespace Database\Seeders;

use App\Models\Club;
use Database\Factories\ClubFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ClubSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Club::factory()
            ->count(16)
            ->hasPlayers(23)
            ->create();
    }
}
