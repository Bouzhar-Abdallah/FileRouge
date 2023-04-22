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
            users.id AS user_id,
            SUM(event_poste.points) AS total_points
            FROM
            users
            JOIN user_selections ON user_selections.user_id = users.id
            JOIN player_user_selection ON player_user_selection.user_selection_id = user_selections.id
            JOIN players ON players.id = player_user_selection.player_id
            JOIN game_player_events ON game_player_events.player_id = players.id
            JOIN event_poste ON event_poste.event_id = game_player_events.event_id AND event_poste.poste_id = players.poste_id
            GROUP BY
            users.id;

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
