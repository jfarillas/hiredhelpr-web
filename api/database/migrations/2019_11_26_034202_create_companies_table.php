<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('address', 255)->nullable();
            $table->string('owner', 100)->nullable();
            $table->string('phone_no', 20)->nullable();
            $table->enum('status', ['active', 'inactive']);
            $table->morphs('parentable');
            /* $table->unsignedBigInteger('type_services_id')->nullable();
            $table->unsignedBigInteger('inspection_id')->nullable();
            $table->unsignedBigInteger('maintenances_id')->nullable();
            $table->unsignedBigInteger('services_id')->nullable(); */
            $table->timestamps();
        });

        /* Schema::table('companies', function($table) {
            $table->foreign('type_services_id')
                ->references('id')
                ->on('type_services')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->foreign('inspection_id')
                ->references('id')
                ->on('inspection')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->foreign('maintenances_id')
                ->references('id')
                ->on('maintenances')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->foreign('services_id')
                ->references('id')
                ->on('services')
                ->onDelete('cascade')
                ->onUpdate('cascade');
        }); */
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('companies');
    }
}
