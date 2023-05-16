<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthCheck
{
    public function handle(Request $request, Closure $next)
    {
        if (Auth::check()) {
            return $next($request);
        } else {
            // User is not authenticated, so redirect to login page
            return response()->json(['success' => false, 'message' => 'Unauthorized']);
        }
    }
}





