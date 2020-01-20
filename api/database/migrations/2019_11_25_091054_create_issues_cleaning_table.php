<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateIssuesCleaningTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('issues_cleaning', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('no');
            $table->string('address', 255);
            $table->dateTime('cleaning_date');
            $table->decimal('amount_paid',9,3);
            $table->dateTime('payment_date');
            $table->enum('status', ['paid', 'pending']);
            $table->string('download', 255);
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
        Schema::dropIfExists('issues_cleaning');
    }
}
