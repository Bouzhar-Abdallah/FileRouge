<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, ...$roles)
    {
        $user = Auth::user();
    
        // Check if the user is logged in and has a role within the allowed roles
        if (!$user || !in_array($user->role->name, $roles)) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }
    
        return $next($request);
    }
}
