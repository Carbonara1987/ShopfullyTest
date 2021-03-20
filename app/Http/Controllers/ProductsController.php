<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;
use Mtownsend\XmlToArray\XmlToArray;

class ProductsController extends Controller
{
    public static function upload(){

        $xmlFile = file_get_contents('./data/flyers_data.xml');

        $products = XmlToArray::convert($xmlFile);

        return $products;
    }

    public static function getProducts(){
        $products = Products::limit(30)->offset(30)->get();
        return response()->json($products);
    }

    public static function getProductsByCategory($category){
        $products = Products::where('category',$category);
        return response()->json($products);
    }

}
