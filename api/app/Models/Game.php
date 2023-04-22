<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    use HasFactory;

    public function homeClub()
    {
        return $this->belongsTo(Club::class, 'home_club_id');
    }

    public function awayClub()
    {
        return $this->belongsTo(Club::class, 'away_club_id');
    }
    public function playerEvents()
    {
        return $this->hasMany(GamePlayerEvent::class);
    }
    public function players()
    {
        return $this->homeClub->players->merge($this->awayClub->players);
    }
    public function gameResults()
    {
        return $this->hasOne(GamesResult::class);
    }
    public function gamePlayerEvents()
    {
        return $this->hasMany(GamePlayerEvent::class);
    }
    public static function getGamesGroupedByWeek()
    {
        /* $weeks = Week::with(
            'games.homeClub', 
            'games.awayClub',
        )
        //->where('id', '1')
        ->get();
         */
        $weeks = Week::with([
            'games' => function ($query) {
                $query->where('is_played', false);
            },
            'games.homeClub', 
            'games.awayClub',
            ])
        ->get();
        return $weeks;
    }
    public static function getResultsGroupedByWeek()
    {
        $weeks = Week::with([
            'games' => function ($query) {
                $query->where('is_played', true);
            },
            'games.homeClub', 
            'games.awayClub',
            'games.gameResults',
            ])
        ->get();
        return $weeks;
    }
}
