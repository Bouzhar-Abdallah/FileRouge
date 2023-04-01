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
        $clubs = ["FAR Rabat", "Wydad", "FUS Rabat", "Raja Casablanca", "Safi", "Berkane", "Maghreb Fez", "Union Touarga", "Jeunesse Sportive Soualem", "Chabab Mohammedia", "Moghreb Tetouan", "Difaa El Jadidi", "Mouloudia Oujda", "Agadir", "Khouribga", "Tanger"];
        foreach ($clubs as $club) {
            Club::factory()->create([
                'name' => $club,
            ]);
        }
    }
}
