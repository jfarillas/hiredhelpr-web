<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(PermissionTableSeeder::class);
        $this->call(CompanyTableSeeder::class);
        $this->call(JobTableSeeder::class);
        $this->call(InspectionsTableSeeder::class);
        $this->call(CleaningsTableSeeder::class);
        $this->call(IssueTableSeeder::class);
        $this->call(MaintenanceTableSeeder::class);
    }
}
