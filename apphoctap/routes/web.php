<?php

Route::get('/admin', 'Admin\MasterController');
Route::group(['namespace' => 'Temp'], function () {
    Route::get('/', 'HomeController@homePage')->name('homePage');
    
});
