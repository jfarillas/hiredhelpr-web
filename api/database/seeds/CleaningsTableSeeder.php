<?php

use Illuminate\Database\Seeder;
use App\Cleaning;

class CleaningsTableSeeder extends Seeder
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
                'no' => str_pad('34', 5, '0', STR_PAD_LEFT),
                'cleaning_date' => '2019-04-07 00:00:00',
                'amount_paid' => 400.00,
                'payment_date' => '2019-05-07 00:00:00',
                'status' => 'pending',
                'download' => 'btn btn-download',
                'parentable_jobs_id' => 3,
                'parentable_jobs_type' => 'App\Job'
            ],
            [
                'no' => str_pad('21', 5, '0', STR_PAD_LEFT),
                'cleaning_date' => '2019-04-07 00:00:00',
                'amount_paid' => 150.00,
                'payment_date' => '2019-05-07 00:00:00',
                'status' => 'paid',
                'download' => 'btn btn-download',
                'parentable_jobs_id' => 4,
                'parentable_jobs_type' => 'App\Job'
            ],
        ];

        foreach ($details as $detail) {
            Cleaning::create($detail);
        }
    }
}
