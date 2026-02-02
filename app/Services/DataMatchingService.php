<?php

namespace App\Services;

use Illuminate\Support\Str;

class DataMatchingService
{
    /**
     * Compare form data with OCR extracted data.
     */
    public function compareData(array $formData, array $ocrData): array
    {
        // DEMO MODE BYPASS
        if (isset($ocrData['is_demo']) && $ocrData['is_demo'] === true) {
            return [
                'overall_match' => true,
                'confidence' => 1.0,
                'matches' => [],
                'mismatches' => [],
                'verified' => true,
                'is_demo' => true,
            ];
        }

        $matches = [];
        $mismatches = [];
        $overallConfidence = 0;
        $fieldCount = 0;
        
        // Compare first name
        if (isset($formData['first_name']) && isset($ocrData['first_name'])) {
            $similarity = $this->calculateSimilarity(
                $formData['first_name'],
                $ocrData['first_name']
            );
            
            $matches['first_name'] = [
                'form_value' => $formData['first_name'],
                'ocr_value' => $ocrData['first_name'],
                'similarity' => $similarity,
                'match' => $similarity >= 0.85,
            ];
            
            $overallConfidence += $similarity;
            $fieldCount++;
            
            if ($similarity < 0.85) {
                $mismatches[] = 'first_name';
            }
        }
        
        // Compare last name
        if (isset($formData['last_name']) && isset($ocrData['last_name'])) {
            $similarity = $this->calculateSimilarity(
                $formData['last_name'],
                $ocrData['last_name']
            );
            
            $matches['last_name'] = [
                'form_value' => $formData['last_name'],
                'ocr_value' => $ocrData['last_name'],
                'similarity' => $similarity,
                'match' => $similarity >= 0.85,
            ];
            
            $overallConfidence += $similarity;
            $fieldCount++;
            
            if ($similarity < 0.85) {
                $mismatches[] = 'last_name';
            }
        }
        
        // Compare passport number (must be exact match)
        if (isset($formData['passport_number']) && isset($ocrData['passport_number'])) {
            $formPassport = $this->normalizePassportNumber($formData['passport_number']);
            $ocrPassport = $this->normalizePassportNumber($ocrData['passport_number']);
            
            $match = $formPassport === $ocrPassport;
            
            $matches['passport_number'] = [
                'form_value' => $formData['passport_number'],
                'ocr_value' => $ocrData['passport_number'],
                'similarity' => $match ? 1.0 : 0.0,
                'match' => $match,
            ];
            
            $overallConfidence += $match ? 1.0 : 0.0;
            $fieldCount++;
            
            if (!$match) {
                $mismatches[] = 'passport_number';
            }
        }
        
        // Compare date of birth (must be exact match after normalization)
        if (isset($formData['date_of_birth']) && isset($ocrData['date_of_birth'])) {
            $formDate = $this->normalizeDate($formData['date_of_birth']);
            $ocrDate = $this->normalizeDate($ocrData['date_of_birth']);
            
            $match = $formDate === $ocrDate;
            
            $matches['date_of_birth'] = [
                'form_value' => $formData['date_of_birth'],
                'ocr_value' => $ocrData['date_of_birth'],
                'similarity' => $match ? 1.0 : 0.0,
                'match' => $match,
            ];
            
            $overallConfidence += $match ? 1.0 : 0.0;
            $fieldCount++;
            
            if (!$match) {
                $mismatches[] = 'date_of_birth';
            }
        }
        
        // Calculate overall confidence
        $finalConfidence = $fieldCount > 0 ? $overallConfidence / $fieldCount : 0;
        
        return [
            'overall_match' => empty($mismatches),
            'confidence' => $finalConfidence,
            'matches' => $matches,
            'mismatches' => $mismatches,
            'verified' => $finalConfidence >= 0.90,
        ];
    }

    /**
     * Calculate similarity between two strings using Levenshtein distance.
     */
    public function calculateSimilarity(string $str1, string $str2): float
    {
        // Normalize strings
        $str1 = $this->normalizeString($str1);
        $str2 = $this->normalizeString($str2);
        
        // If identical, return 1.0
        if ($str1 === $str2) {
            return 1.0;
        }
        
        // Calculate Levenshtein distance
        $maxLength = max(strlen($str1), strlen($str2));
        
        if ($maxLength === 0) {
            return 1.0;
        }
        
        $distance = levenshtein($str1, $str2);
        $similarity = 1 - ($distance / $maxLength);
        
        return max(0, $similarity);
    }

    /**
     * Normalize string for comparison.
     */
    protected function normalizeString(string $str): string
    {
        // Convert to uppercase
        $str = strtoupper($str);
        
        // Remove extra spaces
        $str = preg_replace('/\s+/', ' ', $str);
        
        // Trim
        $str = trim($str);
        
        // Remove special characters except spaces
        $str = preg_replace('/[^A-Z0-9 ]/', '', $str);
        
        return $str;
    }

    /**
     * Normalize passport number for comparison.
     */
    protected function normalizePassportNumber(string $passport): string
    {
        // Remove all spaces and special characters
        $passport = preg_replace('/[^A-Z0-9]/', '', strtoupper($passport));
        
        return $passport;
    }

    /**
     * Normalize date for comparison.
     */
    protected function normalizeDate(string $date): string
    {
        // Try to parse various date formats
        try {
            $timestamp = strtotime($date);
            
            if ($timestamp === false) {
                return $date;
            }
            
            // Return in standard format
            return date('Y-m-d', $timestamp);
        } catch (\Exception $e) {
            return $date;
        }
    }

    /**
     * Validate match result and determine if verification passes.
     */
    public function validateMatch(array $formData, array $ocrData): array
    {
        $result = $this->compareData($formData, $ocrData);
        
        // Determine verification status
        if ($result['confidence'] >= 0.90) {
            $status = 'verified';
            $message = 'Your passport information matches the details provided.';
        } elseif ($result['confidence'] >= 0.70) {
            $status = 'manual_review';
            $message = 'Some information could not be automatically verified. Please review the details below.';
        } else {
            $status = 'failed';
            $message = 'The information provided does not match the passport details.';
        }
        
        return array_merge($result, [
            'status' => $status,
            'message' => $message,
        ]);
    }
}
