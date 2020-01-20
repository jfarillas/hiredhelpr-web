<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;


class PermissionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       $permissions = [
           'user-list',
           'user-create',
           'user-edit',
           'user-delete',
           'pending-jobs-list',
           'pending-jobs-create',
           'pending-jobs-edit',
           'pending-jobs-delete',
           'jobs-needing-approval-list',
           'jobs-needing-approval-create',
           'jobs-needing-approval-edit',
           'jobs-needing-approval-delete',
           'jobs-approved-list',
           'jobs-approved-create',
           'jobs-approved-edit',
           'jobs-approved-delete',
           'maintenance-list',
           'maintenance-create',
           'maintenance-edit',
           'maintenance-delete',
           'inspection-list',
           'inspection-create',
           'inspection-edit',
           'inspection-delete',
           'service-list',
           'service-create',
           'service-edit',
           'service-delete'
        ];


        foreach ($permissions as $permission) {
             Permission::create(['name' => $permission]);
        }
    }
}