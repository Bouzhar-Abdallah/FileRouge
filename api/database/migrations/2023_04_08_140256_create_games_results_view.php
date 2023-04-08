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
    public function up()
    {
        DB::statement("DROP VIEW IF EXISTS game_results");
        DB::statement("
        CREATE VIEW game_results AS
        SELECT
          g.id AS game_id,
          g.home_club_id,
          g.away_club_id,
          SUM(CASE WHEN e.name = 'goal-scored' AND p.club_id = g.home_club_id THEN 1 ELSE 0 END) AS home_goals,
          SUM(CASE WHEN e.name = 'goal-scored' AND p.club_id = g.away_club_id THEN 1 ELSE 0 END) AS away_goals
        FROM
          games g
          INNER JOIN game_player_events gpe ON gpe.game_id = g.id
          INNER JOIN players p ON p.id = gpe.player_id
          INNER JOIN events e ON e.id = gpe.event_id
        WHERE
          g.is_played = 1
        GROUP BY
          g.id,
          g.home_club_id,
          g.away_club_id;
    ");
    }

    public function down()
    {
        DB::statement("DROP VIEW IF EXISTS game_results");
    }
};
