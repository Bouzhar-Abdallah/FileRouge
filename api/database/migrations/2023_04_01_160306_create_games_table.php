<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('games', function (Blueprint $table) {
            $table->id();
            $table->foreignId('week_id')->constrained();
            $table->foreignId('home_club_id')->constrained('clubs');
            $table->foreignId('away_club_id')->constrained('clubs');
            $table->integer('home_club_score')->nullable();
            $table->integer('away_club_score')->nullable();
            $table->unique(['home_club_id', 'away_club_id']);
            $table->unique(['away_club_id', 'home_club_id']);
            $table->unique(['week_id', 'home_club_id']);
            $table->unique(['week_id', 'away_club_id']);
            $table->boolean('is_played')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('games');
    }
};