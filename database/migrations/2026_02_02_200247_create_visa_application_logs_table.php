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
        Schema::create('visa_application_logs', function (Blueprint $table) {
            $table->id();
            
            // Related application
            $table->foreignId('visa_application_id')->constrained()->cascadeOnDelete();
            
            // Action details
            $table->enum('action', [
                'created',
                'updated',
                'submitted',
                'passport_uploaded',
                'verification_success',
                'verification_failed',
                'viewed',
                'approved',
                'rejected',
                'notes_added'
            ]);
            
            // User who performed the action (nullable for public submissions)
            $table->foreignId('user_id')->nullable()->constrained()->nullOnDelete();
            
            // Request metadata
            $table->string('ip_address', 45);
            $table->text('user_agent')->nullable();
            
            // Additional context
            $table->json('metadata')->nullable();
            
            $table->timestamps();
            
            // Indexes
            $table->index('visa_application_id');
            $table->index('action');
            $table->index('created_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('visa_application_logs');
    }
};
