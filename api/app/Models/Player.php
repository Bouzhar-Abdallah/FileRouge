<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Player extends Model
{
    use HasFactory;
    /* seeding */
    public $timestamps = false;
    public function Poste(){
        return $this->belongsTo(Poste::class);
    }

    public function Club(){
        return $this->belongsTo(Club::class);
    }
}
