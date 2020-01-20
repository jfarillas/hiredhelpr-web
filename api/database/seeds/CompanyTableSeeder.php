<?php

use Illuminate\Database\Seeder;
use App\Company;

class CompanyTableSeeder extends Seeder
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
                'address' => '1234 Austin Drive, Austin TX 77001',
                'owner' => 'Bobby Marcus',
                'phone_no' => '234-343-5687',
                'status' => 'active',
                'email' => 'bobby.marcus1@poolsofamerica.com',
                'fullname' => 'Bobby Marcus',
                'city' => 'Austin, TX',
                'parentable_id' => 1,
                'parentable_type' => 'App\Maintenance',
                'parentable_jobs_type' => 'App\Job',
                'parentable_jobs_id' => 1,
                'parentable_clean_type' => 'App\Cleaning',
                'parentable_clean_id' => 0,
                'parentable_insp_type' => 'App\Inspection',
                'parentable_insp_id' => 1
            ],
            [
                'address' => '4321 Bobby Lane, Austin TX 77001',
                'owner' => 'Bobby Marcus',
                'phone_no' => '234-343-5687',
                'status' => 'active',
                'email' => 'bobby.marcus2@poolsofamerica.com',
                'fullname' => 'Bobby Marcus',
                'city' => 'Austin, TX',
                'parentable_id' => 2,
                'parentable_type' => 'App\Maintenance',
                'parentable_jobs_type' => 'App\Job',
                'parentable_jobs_id' => 2,
                'parentable_clean_type' => 'App\Cleaning',
                'parentable_clean_id' => 1,
                'parentable_insp_type' => 'App\Inspection',
                'parentable_insp_id' => 0
            ],
            [
                'address' => '5678 Longand Blvd, Austin TX 77001',
                'owner' => 'Bobby Marcus',
                'phone_no' => '234-343-5687',
                'status' => 'active',
                'email' => 'bobby.marcus3@poolsofamerica.com',
                'fullname' => 'Bobby Marcus',
                'city' => 'Austin, TX',
                'parentable_id' => 1,
                'parentable_type' => 'App\Maintenance',
                'parentable_jobs_type' => 'App\Job',
                'parentable_jobs_id' => 3,
                'parentable_clean_type' => 'App\Cleaning',
                'parentable_clean_id' => 1,
                'parentable_insp_type' => 'App\Inspection',
                'parentable_insp_id' => 0
            ]

        ];

        foreach ($details as $detail) {
            Company::create($detail);
        }
    }
}
