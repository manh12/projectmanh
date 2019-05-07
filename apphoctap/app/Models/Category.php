<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;


class Category extends Model
{
    use Sluggable;

    //CONSTANT
    const NONE = 0;
    const TYPE = ['post' => 0];
    const STATUS = ['no_active' => false, 'active' => true];


    // FUNCTIONC PACKAGE
    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }
    protected $table = 'categories';
    protected $fillable = ['title','description','keywords','slug','name','short_content','content','images','images_thumb','type','parent_id','order','status'];


    //Relationship
    public function categoryPost() {
        return $this->hasMany('App\Models\Post');
    }
    public function childs() {
        return $this->hasMany('App\Models\Category','parent_id');
    }
}
