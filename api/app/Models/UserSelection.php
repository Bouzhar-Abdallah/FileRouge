<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserSelection extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'user_id',
        'week_id',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function week()
    {
        return $this->belongsTo(Week::class);
    }
    public function players()
    {
        return $this->belongsToMany(Player::class);
    }
}
