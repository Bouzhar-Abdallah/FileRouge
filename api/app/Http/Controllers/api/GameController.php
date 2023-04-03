<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Game;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class GameController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $games = Game::with('homeClub', 'awayClub')
            ->orderBy('week_id')
            ->get();

        // Group games by week_id
        $groupedGames = $games->groupBy('week_id');

        // Create an array of weeks with their games
        $weeks = $groupedGames->map(function (Collection $games, $week_id) {
            return [
                'week' => $week_id,
                'games' => $games->toArray(),
            ];
        })->values();

        return response()->json($weeks);
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
