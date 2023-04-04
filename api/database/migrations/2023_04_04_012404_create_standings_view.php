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
        DB::statement($this->createView());
    }

    public function down()
    {
        DB::statement($this->dropView());
    }

    private function createView(): string
    {
    return <<<SQL
    CREATE VIEW standings AS
    SELECT
        club_id,
        club_name,
        COALESCE(SUM(points), 0) AS points,
        COALESCE(SUM(goals_for), 0) AS goals_for,
        COALESCE(SUM(goals_against), 0) AS goals_against,
        COALESCE((SUM(goals_for) - SUM(goals_against)), 0) AS goal_difference
    FROM (
        SELECT
            home_club_id AS club_id,
            home_club.name AS club_name,
            CASE
                WHEN home_club_score > away_club_score THEN 3
                WHEN home_club_score = away_club_score THEN 1
                ELSE 0
            END AS points,
            home_club_score AS goals_for,
            away_club_score AS goals_against
        FROM games
        JOIN clubs AS home_club ON home_club.id = games.home_club_id
    
        UNION ALL
    
        SELECT
            away_club_id AS club_id,
            away_club.name AS club_name,
            CASE
                WHEN away_club_score > home_club_score THEN 3
                WHEN away_club_score = home_club_score THEN 1
                ELSE 0
            END AS points,
            away_club_score AS goals_for,
            home_club_score AS goals_against
        FROM games
        JOIN clubs AS away_club ON away_club.id = games.away_club_id
    ) AS club_points
    GROUP BY club_id, club_name
    ORDER BY points DESC, goal_difference DESC, goals_for DESC;
    SQL;
    }

    private function dropView(): string
    {
        return 'DROP VIEW IF EXISTS standings';
    }
};
