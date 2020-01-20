<?php

use Illuminate\Database\Seeder;
use App\Issue;

class IssueTableSeeder extends Seeder
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
                'no' => str_pad('25', 5, '0', STR_PAD_LEFT),
                'issue' => 'Electrical Timer Box',
                'issue_pic' => 'issue-fix-img img1',
                'fix_pic' => 'issue-fix-img img2',
                'description' => 'Timer box was malfunctioning. It is broken.',
                'action' => 'Replace',
                'cost' => 150.00,
                'date_submitted' => '1970-01-02 00:00:00',
                'amount_paid' => 150.00,
                'payment_date' => '2019-05-07 00:00:00',
                'status' => 'paid',
                'download' => 'btn btn-download',
                'next_steps' => 'Accept',
                'is_fixed' => 'Y',
                'fixed_date' => '2019-04-07 00:00:00',
                'parentable_id' => 1,
                'parentable_type' => 'App\Company'
            ],
            [
                'no' => str_pad('25', 5, '0', STR_PAD_LEFT),
                'issue' => 'Power is off',
                'issue_pic' => 'issue-fix-img',
                'fix_pic' => 'issue-fix-img',
                'description' => 'The power is off so the inspection could not be completed. A $50 penalty fee has been charged to your account. Please turn power on and then click the button above to continue servicing. - HiredHelpr staff',
                'action' => 'Turn on',
                'cost' => 50.00,
                'date_submitted' => '1970-01-02 00:00:00',
                'amount_paid' => 150.00,
                'payment_date' => '2019-05-07 00:00:00',
                'status' => 'paid',
                'download' => 'btn btn-download',
                'next_steps' => 'Power Is On',
                'is_fixed' => 'Y',
                'fixed_date' => '2019-04-07 00:00:00',
                'parentable_id' => 1,
                'parentable_type' => 'App\Company'
            ]
        ];

        foreach ($details as $detail) {
            Issue::create($detail);
        }
    }
}
