<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Http\Controllers\ProductsController;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $mainTable = ProductsController::upload();
        foreach ($mainTable as $products){
            foreach ($products as $product){
                DB::table('products')->insert([
                    'title' => $product['title'],
                    'start_date' => $product['start_date'],
                    'end_date' => $product['end_date'],
                    'is_published' => $product['is_published'],
                    'retailer' => $product['retailer'],
                    'category' => $product['category']
                ]);
            }
        }
    }
}
