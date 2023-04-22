<?php

namespace Database\Seeders;

use App\Models\Week;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class WeekSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // seed 32 weeks, week_number starts at 1 and ends at 32
        // date_limit is the date limit to make picks for that week, 7 days between each week number
        //date_limit starts at 2023-08-01
        for ($i = 1; $i <= 32; $i++) {
            $date_limit = date('Y-m-d', strtotime('2023-04-29 +'.($i - 1).' week'));
            Week::create([
                'week_number' => $i,
                'date_limit' => $date_limit,
            ]);
        }
    }
}
