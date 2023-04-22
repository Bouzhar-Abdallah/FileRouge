<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use PHPOpenSourceSaver\JWTAuth\Contracts\JWTSubject;




class User extends Authenticatable implements JWTSubject
{
    use /* HasApiTokens, */ HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role_id',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'email_verified_at',
        'created_at',
        'updated_at',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */

     protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }
    
    public function getJWTCustomClaims()
    {
        return [];
    }
    public function role()
    {
        return $this->belongsTo(Role::class);
    }
    public function Squad(){

        return $this->hasOne(Squad::class);
    }
    public function selections()
    {
        return $this->hasMany(UserSelection::class);
    }
    public function totalPoints()
    {
        return $this->hasOne(UserTotalPoints::class, 'user_id');
    }
    public function ranking()
    {
        return $this->hasOne(UserRankings::class, 'user_id');
    }
}


  
