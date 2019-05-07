<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    //CONSTANT
    const NONE = 0;
    const STATUS = ['no_active' => false, 'active' => true];
    const TYPE = ['post' => 0, 'category' => 1, 'custom' => 2];
    const POSITION = ['custom' => -1,'top' => 0, 'main' => 1, 'footer' => 2, 'mobile' => 3];

    protected $table = 'menus';
    protected $fillable = ['name','slug','style_id','style_class','icon_menu','position','order','type','parent_id','status'];
    public $timestamps = false;

    public function childs()
    {
        return $this->hasMany('App\Models\Menu', 'parent_id');
    }

}
