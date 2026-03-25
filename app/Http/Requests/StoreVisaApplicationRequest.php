<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreVisaApplicationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            // Personal Info
            'first_name' => ['required', 'string', 'max:100'],
            'middle_name' => ['nullable', 'string', 'max:100'],
            'last_name' => ['required', 'string', 'max:100'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['required', 'string', 'max:50'], // Frontend handles country code
            'nationality' => ['required', 'string', 'max:100'],
            'passport_number' => ['required', 'string', 'min:6', 'max:20'],
            'issuing_country' => ['required', 'string', 'max:100'],
            'issue_date' => ['required', 'date', 'before:today'],
            'expiry_date' => ['required', 'date', 'after:today'],
            'date_of_birth' => ['required', 'date', 'before:today'],
            
            // Visa Details
            'visa_type' => ['required', 'in:tourist,business,student,work,transit'],
            'arrival_date' => ['required', 'date', 'after:today'],
            'departure_date' => ['required', 'date', 'after:arrival_date'],
            'purpose' => ['required', 'string', 'min:20', 'max:1000'],
            'accommodation' => ['required', 'string', 'max:1000'],
            
            // Files & Verification
            'passport_file_path' => ['required', 'string'],
            'ocr_data' => ['required', 'array'],
        ];
    }
    
    /**
     * Get custom messages for validator errors.
     *
     * @return array
     */
    public function messages(): array
    {
        return [
            'date_of_birth.before' => 'You must be born in the past.',
            'arrival_date.after' => 'Arrival date must be in the future.',
            'departure_date.after' => 'Departure date must be after arrival date.',
            'passport_number.min' => 'Passport number seems too short.',
            'purpose.min' => 'Please provide more details about your visit (at least 20 characters).',
        ];
    }
}
