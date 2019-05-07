<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use Sluggable;

    //CONSTANT
    const NONE = 0;
    const TYPE = ['post' => 0,'page' => 1];
    const STATUS = ['no_active' => 0, 'active' => 1];

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
                'source' => 'title',
            ],
        ];
    }
    protected $table = 'posts';
    protected $fillable = ['title','description','keywords','slug','name','short_content','content','images','thumbnail','post_id','type','status'];

    //Relationship
    public function postCategory() {
        return $this->belongsTo('App\Models\Category', 'post_id', 'id');

    }
}
