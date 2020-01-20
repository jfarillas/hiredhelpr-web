<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RemoveParentableDetailsFromJobsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('jobs', function (Blueprint $table) {
            $table->dropColumn([
                'parentable_type',
                'parentable_id',
                'parentable_job_service_type',
                'parentable_job_service_id' 
            ]);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('jobs', function (Blueprint $table) {
            $table->string([
                'parentable_type',
                'parentable_id',
                'parentable_job_service_type',
                'parentable_job_service_id' 
            ]);
        });
    }
}
