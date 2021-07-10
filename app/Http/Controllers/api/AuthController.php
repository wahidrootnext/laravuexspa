<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller {
    public function index() {
        return view("app");
    }

    public function registration(Request $request) {
        $request->validate([
            'name'                  => 'required|string|max:255',
            'email'                 => 'required|string|email|max:255|unique:users,email',
            'password'              => 'required|string|min:6',
            'password_confirmation' => 'same:password',
        ]);

        $user = User::create([
            'name'          => $request->name,
            'email'         => $request->email,
            'password'      => Hash::make($request->password),
        ]);

        return response()->json([
            'access_token'  => $user->createToken('auth_token')->plainTextToken,
            'token_type'    => 'Bearer',
        ]);
    }

    public function login(Request $request) {
        $request->validate([
            'email'         => 'required|string|email|max:255',
            'password'      => 'required|string|min:6',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        return response()->json([
            'access_token'  => $user->createToken($request->email)->plainTextToken,
            'token_type'    => 'Bearer',
            'user'          => $user,
        ]);
    }

    public function logout(Request $request) {
        return $request->user()->currentAccessToken()->delete();
    }

    public function me(Request $request) {
        return $request->user();
    }
}
