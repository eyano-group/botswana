<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;

class VisaApplication extends Model
{
    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'reference_number',
        'first_name',
        'middle_name',
        'last_name',
        'email',
        'phone',
        'nationality',
        'passport_number',
        'issuing_country',
        'issue_date',
        'expiry_date',
        'date_of_birth',
        'visa_type',
        'arrival_date',
        'departure_date',
        'purpose',
        'accommodation',
        'passport_file_path',
        'ocr_data',
        'verification_status',
        'status',
        'submitted_at',
        'reviewed_at',
        'reviewed_by',
        'notes',
    ];

    /**
     * The attributes that should be cast.
     */
    protected $casts = [
        'date_of_birth' => 'date',
        'issue_date' => 'date',
        'expiry_date' => 'date',
        'arrival_date' => 'date',
        'departure_date' => 'date',
        'ocr_data' => 'array',
        'submitted_at' => 'datetime',
        'reviewed_at' => 'datetime',
    ];

    /**
     * Boot the model.
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($application) {
            if (empty($application->reference_number)) {
                $application->reference_number = self::generateReferenceNumber();
            }
        });
    }

    /**
     * Generate a unique reference number.
     */
    public static function generateReferenceNumber(): string
    {
        do {
            $reference = 'BW-VISA-' . date('Y') . '-' . strtoupper(Str::random(6));
        } while (self::where('reference_number', $reference)->exists());

        return $reference;
    }

    /**
     * Get the full name of the applicant.
     */
    public function getFullNameAttribute(): string
    {
        $parts = array_filter([
            $this->first_name,
            $this->middle_name,
            $this->last_name,
        ]);

        return implode(' ', $parts);
    }

    /**
     * Get the reviewer who reviewed this application.
     */
    public function reviewer(): BelongsTo
    {
        return $this->belongsTo(User::class, 'reviewed_by');
    }

    /**
     * Get all logs for this application.
     */
    public function logs(): HasMany
    {
        return $this->hasMany(VisaApplicationLog::class);
    }

    /**
     * Log an action on this application.
     */
    public function logAction(string $action, ?int $userId = null, array $metadata = []): void
    {
        $this->logs()->create([
            'action' => $action,
            'user_id' => $userId,
            'ip_address' => request()->ip(),
            'user_agent' => request()->userAgent(),
            'metadata' => $metadata,
        ]);
    }

    /**
     * Scope to filter by status.
     */
    public function scopeByStatus($query, string $status)
    {
        return $query->where('status', $status);
    }

    /**
     * Scope to filter by verification status.
     */
    public function scopeByVerificationStatus($query, string $status)
    {
        return $query->where('verification_status', $status);
    }

    /**
     * Scope to get submitted applications.
     */
    public function scopeSubmitted($query)
    {
        return $query->whereNotNull('submitted_at');
    }

    /**
     * Check if the application is verified.
     */
    public function isVerified(): bool
    {
        return $this->verification_status === 'verified';
    }

    /**
     * Check if the application is submitted.
     */
    public function isSubmitted(): bool
    {
        return $this->status !== 'draft' && $this->submitted_at !== null;
    }

    /**
     * Mark the application as submitted.
     */
    public function markAsSubmitted(): void
    {
        $this->update([
            'status' => 'submitted',
            'submitted_at' => now(),
        ]);

        $this->logAction('submitted');
    }

    /**
     * Mark the application as verified.
     */
    public function markAsVerified(array $ocrData): void
    {
        $this->update([
            'verification_status' => 'verified',
            'ocr_data' => $ocrData,
        ]);

        $this->logAction('verification_success', null, ['ocr_data' => $ocrData]);
    }

    /**
     * Mark the application as verification failed.
     */
    public function markAsVerificationFailed(array $ocrData, string $reason): void
    {
        $this->update([
            'verification_status' => 'failed',
            'ocr_data' => $ocrData,
        ]);

        $this->logAction('verification_failed', null, [
            'ocr_data' => $ocrData,
            'reason' => $reason,
        ]);
    }
}
