<?php

namespace App\Mail;

use App\Models\VisaApplication;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class VisaApplicationStatusUpdate extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public function __construct(
        public VisaApplication $application
    ) {}

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        $status = ucfirst(str_replace('_', ' ', $this->application->status));
        
        return new Envelope(
            subject: "Visa Application Update: {$status} - " . $this->application->reference_number,
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            markdown: 'emails.visa.status-update',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
