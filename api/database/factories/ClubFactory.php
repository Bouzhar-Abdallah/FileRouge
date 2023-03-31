<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ClubFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $nameLength = fake()->numberBetween(5, 10);
        return [
            'name' => 'club_' .fake()->text($nameLength),
            'primary_color' => fake()->rgbaCssColor(),
            'secondary_color' => fake()->rgbaCssColor(),
        ];
    }
}
