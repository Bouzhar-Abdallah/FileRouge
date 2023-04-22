<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Game;
use App\Models\Squad;
use App\Models\UserTotalpoints;
use Illuminate\Http\Request;

class CompetitionController extends Controller
{
    public function getCompetition()
    {

        $playersCount = Squad::count();
        $user = auth()->user();
        $userSelections = $user->selections->load('players');


        //detailed version :
        $detailedweeklyPointsPerSelection = $userSelections->map(function ($userSelection) {
            return [
                'week_id' => $userSelection->week_id,
                'players' => $userSelection->players->map(function ($player) use ($userSelection) {
                    $games = Game::where('week_id', $userSelection->week_id)->get();
                    $weeklyPoints = $games->sum(function ($game) use ($player) {
                        return $player->getPointsForGame($game->id);
                    });

                    return [
                        'player_id' => $player->id,
                        'player_name' => $player->name,
                        'weekly_points' => $weeklyPoints,
                    ];
                }),
            ];
        });

        //less detailed version :
        $weeklyPointsPerSelection = $userSelections->map(function ($userSelection) {
            $totalPoints = $userSelection->players->sum(function ($player) use ($userSelection) {
                $games = Game::where('week_id', $userSelection->week_id)->get();
                return $games->sum(function ($game) use ($player) {
                    return $player->getPointsForGame($game->id);
                });
            });

            return [
                'week_id' => $userSelection->week_id,
                'total_points' => $totalPoints,
            ];
        });

        
        $totalPoints = $user->totalPoints->total_points;
        $overAllRanking = $user->ranking->ranking;
        return response()->json([
            'playersCount' => $playersCount,
            'detailedweeklyPointsPerSelection' => $detailedweeklyPointsPerSelection,
            'weeklyPointsPerSelection' => $weeklyPointsPerSelection,
            'totalPoints' => $totalPoints,
            'overAllRanking' => $overAllRanking,
        ]);
    }
}
