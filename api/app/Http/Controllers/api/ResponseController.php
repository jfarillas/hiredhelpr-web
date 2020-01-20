<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller as Controller;
use Illuminate\Support\Facades\Auth;
use App\User;

class ResponseController extends Controller
{
    public function sendResponse($response, String $bearerToken = NULL)
    {
        return response()->json(['message' => $response, 'status_code' => 200])
                         ->withHeaders([
                            'Content-Type' => 'application/json',
                            'Authorization' => $bearerToken
                         ]);
    }


    public function sendError($error, Int $code = 404)  
    {
    	$response = [
            'error' => $error,
        ];
        return response()->json(['message' => $response, 'status_code' => $code]);
    }
}
