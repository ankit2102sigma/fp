<?php

namespace App\Http\Middleware;

use Closure;

class Authenticate
{
    public function handle($request, Closure $next)
    {
        if (!session('userid')) {
            return redirect()->route('login'); // or return a response indicating that the user is not authenticated
        }

        return $next($request);
    }
}
