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
        DB::statement('DROP VIEW IF EXISTS user_rankings');
        DB::statement("
        CREATE VIEW user_rankings AS
SELECT
  user_total_points.user_id,
  user_total_points.total_points,
  RANK() OVER (ORDER BY user_total_points.total_points DESC) AS ranking
FROM
  user_total_points;

        ");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::statement('DROP VIEW IF EXISTS user_rankings');
    }
};
