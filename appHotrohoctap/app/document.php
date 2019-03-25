<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class document extends Model
{
    protected  $table = "documents";
    protected $fillable = ['name','image','user_id','caste_id'];
    public function cate_dos(){
        return $this->belongsTo('App\cate_document');
    }
    public  function  user(){
        return $this->belongsTo('App\User');
    }
    public function image(){
        return $this->hasMany('App\image');
    }
}
