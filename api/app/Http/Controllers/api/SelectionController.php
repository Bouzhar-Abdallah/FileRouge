<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Week;
use Illuminate\Http\Request;

class SelectionController extends Controller
{
    public function getSelection()
    {
        $user = auth()->user();
        $week = Week::where('date_limit', '>', now())->orderBy('week_number', 'asc')->first();
        $userSelection = $user->selections()
                ->where('week_id', $week->id)
                ->with('players.poste', 'players.club')
                ->first();

        if (!$userSelection) {
            return response()->json([
                'message' => 'User has no selection for this week',
                'week' => $week,
                'hasSelection' => false,
                'selectedPlayers' => [],
            ], 200);
        } else {
            
            return response()->json([
                'message' => 'Selections retrieved successfully',
                'week' => $week,
                'hasSelection' => true,
                'selectedPlayers' => $userSelection->players,
            ], 200);
        };

        /* return response()->json([
            'message' => 'Selections retrieved successfully',
            'selection' => $userSelection
        ], 200); */
    }
    public function saveSelection(Request $request){
        $user = auth()->user();
        $ids = $request->all();
        $week = Week::where('date_limit', '>', now())->orderBy('week_number', 'asc')->first();
        
        $userSelection = $user->selections()->create([
            'week_id' => $week->id
        ]);
        $userSelection->players()->attach($ids);

        return response()->json([
            'message' => 'Selection saved successfully',
            'selection' => $request->all()
        ], 200);
    }
}
