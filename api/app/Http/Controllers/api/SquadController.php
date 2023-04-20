<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Logo;
use App\Models\Player;
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
                'squad' => $squad,
                'logo' => $squad->logo,
                'logos' => Logo::all(),
                //'hasSquad' => auth()->user()->has_squad
            ]);
        }else{
            return response()->json([
                'message' => 'Squad not found',
                'squad' => null,
                'logos' => Logo::all(),
                //'hasSquad' => auth()->user()->has_squad
            ]);
        }
    }
    public function getLogos(){
        $logos = Logo::all();
        return response()->json([
            'message' => 'Logos retrieved successfully',
            'logos' => $logos
        ]);
    }
    public function saveNewSquad(Request $request){

        $request->validate([
            'name' => 'required|string|max:255',
            'logo_id' => 'required|integer'
        ]);

        $logo = Logo::find($request->logo_id);
        if (!$logo) {
            return response()->json([
                'message' => 'Logo not found',
            ], 401);
        }
        $user = auth()->user();
        if ($user->Squad) {
            $user->Squad()->update([
                'name' => $request->name,
                'logo_id' => $request->logo_id,
            ]);
            return response()->json([
                'message' => 'Squad updated successfully',
                'squad' => $user->Squad
            ], 201);
        }
        $squad = $user->Squad()->create([
            'name' => $request->name,
            'logo_id' => $request->logo_id,
        ]);
        return response()->json([
            'message' => 'Squad saved successfully',
            'squad' => $squad
        ], 201);
    }
    public function saveSelectedPlayers(Request $request){
        $ids = $request->all();
        $players = Player::find($ids);
        $sum = 0;
        foreach ($players as $key => $player) {
            $sum += $player->price;
        }
        if ($players->count() != 16 ) {
            return response()->json([
                'message' => 'selected players count should be 16',
            ], 422);
        }
        if ($sum > 10000) {
            return response()->json([
                'message' => 'selected players total value exeeds the allowed value',
            ], 422);
        }

        $user = auth()->user();
        $user->Squad->players()->sync($ids);
        return response()->json([
            'message' => 'Squad saved successfully',
            'squad' => $user->Squad
        ], 201);
    }
}
