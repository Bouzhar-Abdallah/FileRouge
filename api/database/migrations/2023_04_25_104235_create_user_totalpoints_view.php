<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        DB::statement('DROP VIEW IF EXISTS user_total_points');
        DB::statement("
        CREATE VIEW user_total_points AS
        SELECT
            user_id,
            SUM(total_points) AS total_points
        FROM
            user_weekly_total_points
        GROUP BY
            user_id;
        

        ");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::statement('DROP VIEW IF EXISTS user_total_points');
    }
};
