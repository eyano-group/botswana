<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('visa_applications', function (Blueprint $table) {
            $table->string('issuing_country')->nullable()->after('passport_number');
            $table->date('issue_date')->nullable()->after('issuing_country');
            $table->date('expiry_date')->nullable()->after('issue_date');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('visa_applications', function (Blueprint $table) {
            //
        });
    }
};
