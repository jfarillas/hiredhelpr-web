<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOverviewTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('overview', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('total_pending_jobs');
            $table->bigInteger('total_jobs_approved_needing_approval');
            $table->bigInteger('total_jobs_approved');
            $table->bigInteger('total_pool_needing_maintenance');
            $table->bigInteger('total_issues');
            $table->unsignedBigInteger('maintenances_id');
            $table->timestamps();
        });

        Schema::table('overview', function($table) {
            $table->foreign('maintenances_id')
                ->references('id')
                ->on('maintenances')
                ->onDelete('cascade')
                ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('overview');
    }
}
