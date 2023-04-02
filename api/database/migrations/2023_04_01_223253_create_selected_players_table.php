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
        Schema::create('player_user_selection', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_selection_id')->constrained();
            $table->foreignId('player_id')->constrained();
            $table->unique(['user_selection_id', 'player_id']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('player_user_selection');
    }
};
