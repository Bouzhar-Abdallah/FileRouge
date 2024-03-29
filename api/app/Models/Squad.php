<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Squad extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'logo_id'];
    protected $hidden = ['user_id', 'created_at', 'updated_at'];
    public function User(){
        return $this->belongsTo(User::class);
    }
    public function players(){
        return $this->belongsToMany(Player::class);
    }
    public function logo(){
        return $this->belongsTo(Logo::class);
    }
}
