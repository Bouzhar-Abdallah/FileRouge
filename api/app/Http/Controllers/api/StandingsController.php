<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Standing;
use Illuminate\Http\Request;

class StandingsController extends Controller
{
    public function index()
    {
        $standings = Standing::join('clubs', 'standings.club_id', '=', 'clubs.id')
        ->select('standings.*', 'clubs.name as club_name', 'clubs.*')
        ->orderBy('points', 'desc')
        ->orderByRaw('(goals_for - goals_against) desc')
        ->orderBy('goals_for', 'desc')
        ->get();
        return response()->json($standings);
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
