<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    //CONSTANT
    const TYPE = ['slider'=> 0];
    const STATUS = ['no_active' => false, 'active' => true];
    protected $table = 'images';
    protected $fillable = ['title','description','link','images','images_thumb','type','status'];
    public $timestamps = false;

}
