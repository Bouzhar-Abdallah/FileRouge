<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
      DB::statement("DROP VIEW IF EXISTS standings");
        DB::statement("
        CREATE VIEW standings AS
        SELECT
          club_id,
          COUNT(*) AS games_played,
          SUM(goals_for) AS goals_for,
          SUM(goals_against) AS goals_against,
          SUM(points) AS points
        FROM (
          SELECT
            home_club_id AS club_id,
            home_goals AS goals_for,
            away_goals AS goals_against,
            CASE
              WHEN home_goals > away_goals THEN 3
              WHEN home_goals = away_goals THEN 1
              ELSE 0
            END AS points
          FROM
            game_results
          UNION ALL
          SELECT
            away_club_id AS club_id,
            away_goals AS goals_for,
            home_goals AS goals_against,
            CASE
              WHEN away_goals > home_goals THEN 3
              WHEN away_goals = home_goals THEN 1
              ELSE 0
            END AS points
          FROM
            game_results
        ) AS club_games
        GROUP BY
          club_id;
    ");
    }

    public function down()
    {
        DB::statement("DROP VIEW IF EXISTS standings");
    }
};
