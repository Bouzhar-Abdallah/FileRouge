<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;
    public $timestamps = false;
    public function eventPoste()
    {
        return $this->hasMany(EventPoste::class);
    }
    public function points()
    {
        return $this->hasMany(Point::class);
    }
    public function gamePlayerEvents()
    {
        return $this->hasMany(GamePlayerEvent::class);
    }
}
