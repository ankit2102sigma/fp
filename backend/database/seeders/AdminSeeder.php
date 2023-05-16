<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'name' => 'Ankit Arora',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('Ankit@123'),
            'is_admin' => true
        ]);
    }
}
