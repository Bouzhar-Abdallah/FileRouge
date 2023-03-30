<?php

namespace Database\Seeders;

use App\Models\Poste;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PosteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $posteNames = ['Goalkeeper', 'Defender', 'Midfielder', 'Forward'];
        foreach ($posteNames as $posteName) {
            Poste::create([
                'name' => $posteName,
            ]);
        }
    }
}
