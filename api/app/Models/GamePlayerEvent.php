<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Pivot;

class GamePlayerEvent extends Pivot
{
    use HasFactory;
    protected $table = 'game_player_events';
    public function game()
    {
        return $this->belongsTo(Game::class);
    }
    public function player()
    {
        return $this->belongsTo(Player::class);
    }
    public function event()
    {
        return $this->belongsTo(Event::class);
    }
}
