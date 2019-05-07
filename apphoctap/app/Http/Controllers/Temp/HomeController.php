<?php

namespace App\Http\Controllers\Temp;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{
//    public function __construct($template = "path1") {
//        $this->template = $template;
//
//    }
    public function homePage() {
        return view('temp.path1.pages.home_page');
    }
}
