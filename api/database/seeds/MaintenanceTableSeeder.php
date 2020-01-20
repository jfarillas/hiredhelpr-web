<?php

use Illuminate\Database\Seeder;
use App\Maintenance;

class MaintenanceTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $details = [
            [
                'issues_id' => 1,
                'no' => str_pad('24', 5, '0', STR_PAD_LEFT),
                'maintenance_date' => '2019-04-11 00:00:00'
            ],
            [
                'issues_id' => 2,
                'no' => str_pad('1', 5, '0', STR_PAD_LEFT),
                'maintenance_date' => '2019-03-11 00:00:00'
            ],
            [
                'issues_id' => 1,
                'no' => str_pad('2', 5, '0', STR_PAD_LEFT),
                'maintenance_date' => '2019-02-11 00:00:00'
            ],
        ];

        foreach ($details as $detail) {
            Maintenance::create($detail);
        }
    }
}
