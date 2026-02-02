<x-mail::message>
# Application Status Update

Dear {{ $application->first_name }} {{ $application->last_name }},

The status of your visa application ({{ $application->reference_number }}) has been updated.

**New Status:** {{ strtoupper(str_replace('_', ' ', $application->status)) }}

@if($application->status === 'approved')
Congratulations! Your visa application has been approved. please verify the attached document for more details.
@elseif($application->status === 'rejected')
We regret to inform you that your application has been declined.
@endif

@if($application->notes)
**Comments from Officer:**
{{ $application->notes }}
@endif

<x-mail::button :url="route('home')">
Check Status
</x-mail::button>

Best regards,<br>
{{ config('app.name') }}
</x-mail::message>
