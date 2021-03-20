<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use Illuminate\Http\Request;

class CategoriesController extends Controller
{
    public function getCategories(){
        $categories = Categories::all();
        return response()->json($categories);
    }

    public function getCategory($title){
        $products = Categories::where('title',$title);
        return response()->json($categories);
    }

}
