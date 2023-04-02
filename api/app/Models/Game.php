<?php

namespace App\Models;

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
    public function Players()
    {
        return $this->homeClub->players->merge($this->awayClub->players);
    }
    
}
