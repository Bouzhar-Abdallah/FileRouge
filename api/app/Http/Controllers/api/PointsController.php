<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Event;
use App\Models\EventPoste;
use Illuminate\Http\Request;

class PointsController extends Controller
{
    public function getEventsPoints(){

        $events = Event::all()->load('eventPoste','eventPoste.poste');
        
        return response()->json($events);

    }
    public function updatePostePoint(Request $request){
        $event = EventPoste::find($request->id);
        
        $event->points = $request->newPoints;
        $event->save();
        return response()->json($event);
    }
}
