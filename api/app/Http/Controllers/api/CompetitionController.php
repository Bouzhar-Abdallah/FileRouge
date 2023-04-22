<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Squad;
use Illuminate\Http\Request;

class CompetitionController extends Controller
{
    public function getCompetition(){

        $playersCount = Squad::count();
        $user = auth()->user();
        $userSelections = $user->selections;
        $selectionsPlayers = [];
        /* foreach ($userSelections as $selection){
            $selectionsPlayers['week ' .$selection->week_id] = $selection->players;
        } */
        return response()->json([
            'message' => 'test',
            'playersCount' => $playersCount,
            'userSelections' => $userSelections,
            'totalPoints' => $user->getUserTotalPoints,
        ]);
    }
}
