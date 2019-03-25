<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class image extends Model
{
    protected $table = "images";
    protected $fillable =['image','document_id'];
    public $timestamps = false;
    public function document(){
        return $this->belongsTo('App\document');

    }
}
