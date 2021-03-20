<?php

use App\Models\Products;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductsController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::get('/getProducts', [ProductsController::class, 'getProducts']);
Route::get('/getProductsByCategory/{category}', function ($category) {
    $category = str_replace('%20',' ',$category);
    $products = Products::where('category',$category)->limit(30)->offset(30)->get();
    return response()->json($products);
});

