<?php

namespace App\Models;
use Orchid\Screen\AsSource;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use AsSource;

    /**
    * @var array
    */
    protected $fillable = [
        'title',
        'description',
        'body',
        'author'
    ];
}
