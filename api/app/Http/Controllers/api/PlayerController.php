<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Player;
use Illuminate\Http\Request;

class PlayerController extends Controller
{
    public function players()
    {
        $players = Player::all();
        $players->load('club', 'poste');
        return response()->json([
            'message' => 'Players retrieved successfully',
            'players' => $players
        ]);
    }
}
