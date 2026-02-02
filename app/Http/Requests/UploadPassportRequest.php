<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UploadPassportRequest extends FormRequest
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
            'passport' => [
                'required',
                'file',
                'mimes:jpeg,png,jpg,pdf',
                'max:5120', // 5MB
            ],
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
            'passport.required' => 'Please upload a passport document.',
            'passport.file' => ' The uploaded file is invalid.',
            'passport.mimes' => 'Only JPEG, PNG, and PDF formats are allowed.',
            'passport.max' => 'The file size must not exceed 5MB.',
        ];
    }
}
