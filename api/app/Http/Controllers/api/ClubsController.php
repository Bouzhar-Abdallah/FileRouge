<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Club;
use Illuminate\Http\Request;

class ClubsController extends Controller
{
    public function getClubs()
    {
        $clubs = Club::all();
        return response()->json($clubs);
    }
}
