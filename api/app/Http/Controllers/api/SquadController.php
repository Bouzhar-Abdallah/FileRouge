<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SquadController extends Controller
{
    public function squad()
    {
        $squad = auth()->user()->Squad;
        if ($squad) {
            
            $squad->load('players', 'players.poste', 'players.club');
            
            return response()->json([
                'message' => 'Squad retrieved successfully',
                'squad' => $squad
            ]);
        }else{
            return response()->json([
                'message' => 'Squad not found',
                'squad' => null
            ]);
        }
    }
}
