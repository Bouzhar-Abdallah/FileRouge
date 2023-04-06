<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    /* public function __construct()
    {
        $this->middleware('auth:sanctum')->only('user');
    }

    public function user(Request $request)
    {
        return $request->user();
        
    } */

    public function register(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|confirmed'
        ]);

        $user = new User([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'password' => bcrypt($fields['password'])
        ]);

        $user->save();

        //$token = $user->createToken('myapptoken')->plainTextToken;
        //$token expires in 5 seconds
        $token = $user->createToken('myapptoken',['*'] , now()->addDays(1))->plainTextToken;
        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);
    }
}
