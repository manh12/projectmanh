<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class cate_document extends Model
{
    protected $table = "cate_documents";
    protected $fillable = ['name'];
    public function document(){
        return $this->hasMany('App\document');
    }
}
