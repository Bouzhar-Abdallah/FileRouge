<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\Club;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $clubs = Club::all();
        
        
        $articles =Article::factory()
            ->count(10)
            ->create();

        foreach ($articles as $article) {
            $article->clubs()->attach($clubs->random(rand(1, 3)));
        }
    }
}
