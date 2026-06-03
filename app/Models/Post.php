<?php

namespace App\Models;

use Database\Factories\PostFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Post extends Model
{
    /** @use HasFactory<PostFactory> */
    use HasFactory;

    protected $fillable = [
        '_id',
        'category',
        'title',
        'description',
        'image',
    ];

    protected static function booted()
    {
        static::creating(function ($model) {
            if (! $model->_id) {
                $model->_id = (string) Str::uuid();
            }
        });
    }
}
