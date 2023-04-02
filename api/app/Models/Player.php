<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Player extends Model
{
    use HasFactory;
    /* seeding */
    public $timestamps = false;
    public function Poste()
    {
        return $this->belongsTo(Poste::class);
    }

    public function Club()
    {
        return $this->belongsTo(Club::class);
    }
    public function eventPosts()
    {
        return $this->hasManyThrough(
            EventPoste::class,
            GamePlayerEvent::class,
            'player_id', // Foreign key on game_player_events table
            'id', // Foreign key on event_posts table
            'id', // Local key on players table
            'event_poste_id' // Local key on game_player_events table
        );
    }
    public function gameEvents()
    {
        return $this->hasMany(GamePlayerEvent::class);
    }
    public function getPointsForGame($game_id)
    {
        return $this->gamePlayerEvents()
            ->where('game_id', $game_id)
            ->get()
            ->map(function ($gamePlayerEvent) {
                $eventPost = EventPoste::where('event_id', $gamePlayerEvent->event_id)
                    ->where('poste_id', $this->poste_id)
                    ->first();
                return $eventPost ? $eventPost->points : 0;
            })
            ->sum();
    }
    public function getWeeklyPoints()
    {
        return $this->games()
            ->with('gamePlayerEvents')
            ->get()
            ->groupBy('week_id')
            ->map(function ($games) {
                return $games->flatMap(function ($game) {
                    return $game->gamePlayerEvents->map(function ($gamePlayerEvent) {
                        $eventPost = EventPoste::where('event_id', $gamePlayerEvent->event_id)
                            ->where('poste_id', $this->poste_id)
                            ->first();
                        return $eventPost ? $eventPost->points : 0;
                    });
                })->sum();
            });
    }
}
