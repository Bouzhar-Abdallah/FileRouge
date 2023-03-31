<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Poste extends Model
{
    use HasFactory;
    /* seeding */

    public $timestamps = false;
    public function Player(){
        return $this->hasMany(Player::class);
    }
    public function EventPoste(){
        return $this->hasMany(EventPoste::class);
    }
    
}
