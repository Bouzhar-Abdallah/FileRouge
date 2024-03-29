<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        
        $this->call([
            LogoSeeder::class,
            RoleSeeder::class,
            PosteSeeder::class,
            ClubSeeder::class,
            PlayerSeeder::class,
            UserSeeder::class,
            EventSeeder::class,
            EventPosteSeeder::class,
            SquadPlayerSeeder::class,
            WeekSeeder::class,
            GameSeeder::class,
            UserSelectionSeeder::class,
            SelectedPlayersSeeder::class,
            //GamePlayerEventSeeder::class,
            ArticleSeeder::class,
        ]);
    }
}
