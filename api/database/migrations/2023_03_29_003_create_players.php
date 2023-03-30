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
        Schema::create('players', function (Blueprint $table) {
            $table->string('name');
            //$table->unsignedBigInteger('poste_id');
            //$table->foreign('poste_id')->references('id')->on('postes');
            $table->foreignId('poste_id')->constrained()->onUpdate('cascade');
            $table->foreignId('club_id')->constrained()->onUpdate('cascade');
            $table->unsignedInteger('price')->nullable(false);
            $table->id();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('players');
    }
};
