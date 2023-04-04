<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Standing extends Model
{
    use HasFactory;
    protected $table = 'standings';
    public $timestamps = false;
    protected $primaryKey = 'club_id';
    protected $fillable = [
        'club_id',
        'club_name',
        'points',
        'goals_for',
        'goals_against',
        'goal_difference',
    ];

    public function club()
    {
        return $this->belongsTo(Club::class, 'club_id');
    }
}
