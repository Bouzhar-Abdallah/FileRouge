<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;

class ArticlesController extends Controller
{
    public function articles()
    {
        $articles = Article::all()->load('clubs');

        return response()->json([
            'success' => true,
            'data' => $articles,
        ]);
    }
}
