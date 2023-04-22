<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserRankings extends Model
{
    use HasFactory;
    protected $table = 'user_rankings';
    public $timestamps = false;
}
