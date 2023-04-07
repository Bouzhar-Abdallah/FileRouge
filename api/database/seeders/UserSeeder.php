<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $adminRole = Role::where('name', 'admin')->first();
        $userRole = Role::where('name', 'user')->first();

        //seed one admin and one user ADD ROLE IDs TOO
        User::factory()
            ->count(1)
            ->state([
                'name' => 'admin',
                'email' => 'admin@admin.com',
                'password' => bcrypt('admin'),
                'role_id' => $adminRole->id,
            ])

            ->create();
        User::factory()
            ->count(1)
            ->hasSquad(1)
            ->state([
                'name' => 'user',
                'email' => 'user@user.com',
                'password' => bcrypt('user'),
                'role_id' => $userRole->id,
            ])
            ->create();
    }
}
