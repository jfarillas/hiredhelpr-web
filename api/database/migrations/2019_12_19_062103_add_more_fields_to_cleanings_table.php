<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddMoreFieldsToCleaningsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('cleanings', function (Blueprint $table) {
            $table->dropForeign('cleanings_maintenances_id_foreign');
            $table->dropColumn([
                'items',
                'inspection_pic',
                'description',
                'specs',
                'yes_to_specs',
                'maintenances_id' 
            ]);
            $table->string('no', 255);
            $table->dateTime('cleaning_date');
            $table->decimal('amount_paid',9,2);
            $table->dateTime('payment_date');
            $table->enum('status', ['paid', 'pending']);
            $table->string('download', 255);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('cleanings', function (Blueprint $table) {
            $table->string([
                'items',
                'inspection_pic',
                'description',
                'specs',
                'yes_to_specs',
                'maintenances_id' 
            ]);
        });
    }
}
