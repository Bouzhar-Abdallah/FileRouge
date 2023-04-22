<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Game;
use App\Models\Squad;
use App\Models\UserTotalpoints;
use App\Models\Week;
use Exception;
use Illuminate\Http\Request;

class CompetitionController extends Controller
{
    public function getCompetition()
    {

        $playersCount = Squad::count();
        $user = auth()->user();
        $userSelections = $user->selections->load('players');


        //detailed version :
        /* $detailedweeklyPointsPerSelection = $userSelections->map(function ($userSelection) {
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
        }); */

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

        try {
            $totalPoints = $user->totalPoints->total_points;
        } catch (Exception $th) {
            $totalPoints = 0;
        }
        try {

            $overAllRanking = $user->ranking->ranking;
        } catch (Exception $th) {
            $overAllRanking = 'not ranked';
        }
/* ************* */

        //get the week with date_limit < now() and the highest week_id
        $week = Week::where('date_limit', '>', now())->orderBy('week_number', 'asc')->first();
        $userSelection = $user->selections->where('week_id', $week->id)->first()->load('players.poste', 'players.club');

        return response()->json([
            'playersCount' => $playersCount,
            'weeklyPointsPerSelection' => $weeklyPointsPerSelection,
            'totalPoints' => $totalPoints,
            'overAllRanking' => $overAllRanking,
            'week' => $week,
            'userSelection' => $userSelection,
        ]);
    }

}
