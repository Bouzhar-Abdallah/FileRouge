<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserTotalpoints extends Model
{
    use HasFactory;
    protected $table = 'user_total_points';
    public $timestamps = false;
}
