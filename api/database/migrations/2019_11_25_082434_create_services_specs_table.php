<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateServicesSpecsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('services_specs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('items', 100);
            $table->string('inspection_pic');
            $table->text('description');
            $table->text('specs');
            $table->enum('yes_to_specs', ['Y', 'N']);
            $table->unsignedBigInteger('maintenances_id');
            $table->timestamps();
        });

        Schema::table('services_specs', function($table) {
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
        Schema::dropIfExists('services_specs');
    }
}
