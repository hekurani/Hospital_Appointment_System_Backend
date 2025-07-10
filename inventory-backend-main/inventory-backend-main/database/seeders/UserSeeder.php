<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Role;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin   = Role::where('name','Admin')->first();
        $manager = Role::where('name','Manager')->first();
        $client   = Role::where('name','Client')->first();

        // one known admin
        User::factory()->create([
            'name'=>'Admin User',
            'email'=>'admin@example.com',
            'role_id'=>$admin->id,
            'password'=>bcrypt('password'),
        ]);

        // some managers
        User::factory(3)->create(['role_id'=>$manager->id]);

        // some clients
        User::factory(5)->create(['role_id'=>$client->id]);
    }
}
