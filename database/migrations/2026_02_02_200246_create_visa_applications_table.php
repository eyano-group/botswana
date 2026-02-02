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
        Schema::create('visa_applications', function (Blueprint $table) {
            $table->id();
            
            // Reference number (unique identifier for applicants)
            $table->string('reference_number', 50)->unique();
            
            // Personal Information
            $table->string('first_name', 100);
            $table->string('middle_name', 100)->nullable();
            $table->string('last_name', 100);
            $table->string('email', 255);
            $table->string('phone', 50);
            $table->string('nationality', 100);
            $table->string('passport_number', 50);
            $table->date('date_of_birth');
            
            // Visa Details
            $table->enum('visa_type', ['tourist', 'business', 'student', 'work', 'transit']);
            $table->date('arrival_date');
            $table->date('departure_date');
            $table->text('purpose');
            $table->text('accommodation')->nullable();
            
            // Passport File (encrypted path)
            $table->string('passport_file_path', 500)->nullable();
            
            // OCR Data (JSON)
            $table->json('ocr_data')->nullable();
            
            // Verification Status
            $table->enum('verification_status', ['pending', 'verified', 'failed'])->default('pending');
            
            // Application Status
            $table->enum('status', ['draft', 'submitted', 'under_review', 'approved', 'rejected'])->default('draft');
            
            // Timestamps for workflow
            $table->timestamp('submitted_at')->nullable();
            $table->timestamp('reviewed_at')->nullable();
            $table->foreignId('reviewed_by')->nullable()->constrained('users')->nullOnDelete();
            
            // Admin notes
            $table->text('notes')->nullable();
            
            $table->timestamps();
            
            // Indexes for performance
            $table->index('reference_number');
            $table->index('email');
            $table->index('passport_number');
            $table->index('status');
            $table->index('created_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('visa_applications');
    }
};
