<?php

use Illuminate\Database\Seeder;
use App\Job;

class JobTableSeeder extends Seeder
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
                'status' => 'pending',
                'scheduled_for' => '2019-04-10 00:00:00'
            ],
            [
                'status' => 'pending',
                'scheduled_for' => '2019-04-10 00:00:00'
            ],
            [
                'status' => 'pending',
                'scheduled_for' => '2019-04-10 00:00:00'
            ],
            [
                'status' => 'approved',
                'scheduled_for' => '2019-04-10 00:00:00',
                'approved_date' => '2019-12-12 00:00:00',
                'service_date' => '2019-12-12 00:00:00'
            ],
            [
                'status' => 'approved',
                'scheduled_for' => '2019-04-10 00:00:00',
                'approved_date' => '2019-12-12 00:00:00',
                'service_date' => '2019-12-12 00:00:00'
            ],
            [
                'status' => 'approved',
                'scheduled_for' => '2019-04-10 00:00:00',
                'approved_date' => '2019-12-12 00:00:00',
                'service_date' => '2019-12-12 00:00:00'
            ],

        ];

        foreach ($details as $detail) {
            Job::create($detail);
        }
    }
}
