<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInspectionSpecsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inspection_specs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('items', 100);
            $table->string('inspection_pic');
            $table->text('description');
            $table->text('specs');
            $table->enum('yes_to_specs', ['Y', 'N']);
            $table->enum('condition', ['replace', 'good']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('inspection_specs');
    }
}
