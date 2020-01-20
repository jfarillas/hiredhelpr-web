<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateIssuesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('issues', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('no', 255);
            $table->string('issue', 100);
            $table->string('issue_pic');
            $table->string('fix_pic');
            $table->text('description');
            $table->string('action');
            $table->decimal('cost',9,2);
            $table->dateTime('date_submitted');
            $table->decimal('amount_paid',9,2);
            $table->dateTime('payment_date');
            $table->enum('status', ['paid', 'pending']);
            $table->string('download', 255);
            $table->string('next_steps');
            $table->enum('is_fixed', ['Y', 'N']);
            $table->dateTime('fixed_date');
            $table->timestamps();
            $table->index('no');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('issues');
    }
}
