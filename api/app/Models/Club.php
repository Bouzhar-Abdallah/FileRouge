<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Club extends Model
{
    use HasFactory;
    /* seeding */
    public $timestamps = false;

    public function Players(){
        return $this->hasMany(Player::class);
    }
    public function Standing(){
        return $this->hasOne(Standing::class);
    }
}
