<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventPoste extends Model
{
    use HasFactory;
    protected $table = 'event_poste';
    public function event()
    {
        return $this->belongsTo(Event::class);
    }
    public function poste()
    {
        return $this->belongsTo(Poste::class);
    }
}
