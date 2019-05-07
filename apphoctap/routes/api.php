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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
//Route::group(['prefix' => 'v1','namespace' => 'Admin'], function () {
//    Route::resource('user', 'UserController');
//});
Route::resource('user', 'Admin\UserController');
Route::resource('slider','Admin\ImageController');
Route::resource('page','Admin\PageController');
