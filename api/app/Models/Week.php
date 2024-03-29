<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Week extends Model
{
    use HasFactory;
    public $timestamps = false;

    public function games()
    {
        return $this->hasMany(Game::class);
    }
    public function selections()
    {
        return $this->hasMany(UserSelection::class);
    }
    // app/Models/Week.php

/*     public function gameResults()
    {
        return $this->hasMany(GamesResult::class, 'week_id');
    } */
}
