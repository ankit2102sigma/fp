<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class carrier extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'description',
        'stream',
        'interest',
        'link',
        'more',
    ];
    public $timestamps = false;
};



