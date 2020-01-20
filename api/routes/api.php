<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('v1')->group(function() {
    Route::group(['middleware' => ['guest:api']], function () {
        Route::post('login', 'api\AuthController@login');
        Route::post('signup', 'api\AuthController@signup');
        Route::resource('role', 'api\RoleController');
    });
    Route::group(['middleware' => 'auth:api'], function() {
        Route::get('logout', 'api\AuthController@logout');
        Route::get('user', 'api\AuthController@getUser');
        Route::get('overview', 'api\OverviewController@index');
        Route::resource('maintenance', 'api\MaintenanceController');
        Route::get('jobs/{status}', [
            'as' => 'jobs.status',
            'uses' => 'api\JobsController@status'
        ]);
        Route::get('jobs/{status}/count', [
            'as' => 'jobs.status.count',
            'uses' => 'api\JobsController@statusCount'
        ]);
        /* Route::get('jobs/{approved}', [
            'as' => 'jobs.approved',
            'uses' => 'api\JobsController@approved'
        ]); */
        Route::resource('jobs', 'api\JobsController', [
            'except' => [
                'status',
                'statusCount'
            ]
        ]);
    });
    /* Route::get('list', 'api\ListController@index');
    Route::get('list/{category}', 'api\ListController@category');
    Route::post('login', 'api\AuthController@login');
    Route::post('register', 'api\AuthController@register');
    Route::group(['middleware' => 'auth:api'], function() {
        Route::post('getUser', 'api\AuthController@getUser');
    }); */
});

/* Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
}); */
