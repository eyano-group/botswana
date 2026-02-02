<x-mail::message>
# Application Received

Dear {{ $application->first_name }} {{ $application->last_name }},

We have received your visa application for the Republic of Botswana.

**Reference Number:** {{ $application->reference_number }}
**Date Submitted:** {{ $application->submitted_at->format('d M Y, H:i') }}

### Application Summary
- **Visa Type:** {{ ucfirst($application->visa_type) }} Visa
- **Passport Number:** {{ $application->passport_number }}
- **Arrival Date:** {{ $application->arrival_date->format('d M Y') }}

### Next Steps
Your application is currently being reviewed by our immigration officers. The standard processing time is **5-7 business days**.

You will receive another email once a decision has been made on your application.

<x-mail::button :url="route('home')">
Visit Website
</x-mail::button>

If you have any questions, please reply to this email or contact our support team.

Best regards,<br>
{{ config('app.name') }}
</x-mail::message>
