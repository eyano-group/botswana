<?php

namespace App\Services;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class PassportOcrService
{
    /**
     * Extract data from passport image using OCR.
     */
    public function extractData(string $filePath): array
    {
        // DEMO MODE: Return simulated success with dummy data
        // This allows the wizard to proceed without a real OCR API key
        return [
            'success' => true,
            'confidence' => 1.0,
            'data' => [
                'first_name' => 'DEMO',
                'last_name' => 'USER',
                'passport_number' => 'A12345678',
                'date_of_birth' => '1990-01-01',
                'nationality' => 'BWA',
                'expiry_date' => '2030-01-01',
                'is_demo' => true, // Flag for DataMatchingService
            ],
            'raw_text' => "P<BWADEMO<<USER<<<<<<<<<<<<<<<<<<<<<<\nA123456784BWA9001014M3001013<<<<<<<<<<<<<<00",
        ];
    }

    /**
     * Parse MRZ (Machine Readable Zone) from passport.
     */
    protected function parseMRZ(string $text): array
    {
        $data = [];
        
        // MRZ is typically 2 or 3 lines at the bottom of passport
        // Format: P<COUNTRY<<<LASTNAME<<FIRSTNAME<<<<<<<<<<<<<
        //         PASSPORTNUMBER<NATIONALITY<BIRTHDATE<SEX<EXPIRYDATE
        
        $lines = explode("\n", $text);
        
        foreach ($lines as $line) {
            // Look for MRZ pattern (starts with P< for passport)
            if (preg_match('/^P<([A-Z]{3})/', $line)) {
                // Parse first line
                $data['nationality'] = substr($line, 2, 3);
                
                // Extract name (between <<< separators)
                $namePart = substr($line, 5);
                $names = explode('<<', $namePart);
                
                if (count($names) >= 2) {
                    $data['last_name'] = str_replace('<', ' ', trim($names[0]));
                    $data['first_name'] = str_replace('<', ' ', trim($names[1]));
                }
            }
            
            // Parse second line (passport number, DOB, expiry)
            if (preg_match('/^([A-Z0-9]{9})/', $line)) {
                $data['passport_number'] = substr($line, 0, 9);
                $data['date_of_birth'] = $this->parseMRZDate(substr($line, 13, 6));
                $data['expiry_date'] = $this->parseMRZDate(substr($line, 21, 6));
            }
        }
        
        return $data;
    }

    /**
     * Parse MRZ date format (YYMMDD) to standard date.
     */
    protected function parseMRZDate(string $mrzDate): ?string
    {
        if (strlen($mrzDate) !== 6) {
            return null;
        }
        
        $year = substr($mrzDate, 0, 2);
        $month = substr($mrzDate, 2, 2);
        $day = substr($mrzDate, 4, 2);
        
        // Determine century (assume < 30 is 2000s, >= 30 is 1900s)
        $fullYear = (int)$year < 30 ? "20{$year}" : "19{$year}";
        
        return "{$fullYear}-{$month}-{$day}";
    }

    /**
     * Validate extracted data quality.
     */
    public function validateExtractedData(array $data): array
    {
        $issues = [];
        
        if (empty($data['first_name'])) {
            $issues[] = 'First name not detected';
        }
        
        if (empty($data['last_name'])) {
            $issues[] = 'Last name not detected';
        }
        
        if (empty($data['passport_number']) || strlen($data['passport_number']) < 6) {
            $issues[] = 'Invalid passport number';
        }
        
        if (empty($data['date_of_birth'])) {
            $issues[] = 'Date of birth not detected';
        }
        
        return [
            'valid' => empty($issues),
            'issues' => $issues,
            'confidence' => empty($issues) ? 1.0 : (1.0 - (count($issues) * 0.2)),
        ];
    }

    /**
     * Process uploaded passport file.
     */
    public function processPassportFile(UploadedFile $file): array
    {
        // Store file temporarily
        $tempPath = $file->store('temp/passports', 'local');
        $fullPath = Storage::disk('local')->path($tempPath);
        
        // Extract data
        $result = $this->extractData($fullPath);
        
        // Clean up temp file if extraction failed
        if (!$result['success']) {
            Storage::disk('local')->delete($tempPath);
        }
        
        return array_merge($result, [
            'temp_path' => $result['success'] ? $tempPath : null,
        ]);
    }
}
