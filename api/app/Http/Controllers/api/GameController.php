<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Game;
use App\Models\GamesResult;
use Illuminate\Http\Request;

class GameController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json('index');
    }

    public function fixtures()
    {
        $fixtures = game::getGamesGroupedByWeek();
        return response()->json($fixtures);
    }
    public function results()
    {
        $results = game::getResultsGroupedByWeek();
        /* $results = GamesResult::join('clubs as home', 'game_results.home_club_id', '=', 'home.id')
            ->join('clubs as away', 'game_results.away_club_id', '=', 'away.id')
            ->select(
                'game_results.*', 
                'home.name as home_name', 
                'home.icon_logo_url as home_logo', 
                'away.name as away_name',
                'away.icon_logo_url as away_logo'
            )
            ->get(); */
        return response()->json($results);
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Game $game)
    {
        return response()->json($game);
    }

    /**
     * Display the specified resource.
     */
    public function show(Game $game)
    {
        $game->load(
            'homeClub',
            'awayClub'
        );
        return response()->json($game);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
