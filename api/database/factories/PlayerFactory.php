<?php

namespace Database\Factories;

use App\Models\Club;
use App\Models\Poste;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class PlayerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'price' => fake()->numberBetween(50,1000),
            'poste_id' => Poste::inRandomOrder()->first()->id,
            'club_id' => Club::inRandomOrder()->first()->id,
        ];
    }
}
