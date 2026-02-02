<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Visa Application Summary - {{ $application->reference_number }}</title>
    <style>
        body {
            font-family: 'Helvetica', 'Arial', sans-serif;
            color: #333;
            line-height: 1.6;
        }
        .header {
            text-align: center;
            border-bottom: 2px solid #1e3a8a;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        .header h1 {
            color: #1e3a8a;
            margin: 0;
            font-size: 24px;
            text-transform: uppercase;
        }
        .header h2 {
            font-size: 16px;
            color: #666;
            margin: 5px 0 0;
        }
        .reference-box {
            background-color: #f0f9ff;
            border: 1px solid #bae6fd;
            color: #0c4a6e;
            padding: 15px;
            text-align: center;
            margin-bottom: 30px;
            border-radius: 5px;
        }
        .reference-number {
            font-size: 24px;
            font-weight: bold;
            display: block;
            margin-top: 5px;
        }
        .section {
            margin-bottom: 25px;
        }
        .section-title {
            background-color: #1e3a8a;
            color: white;
            padding: 8px 15px;
            font-size: 14px;
            font-weight: bold;
            text-transform: uppercase;
            margin-bottom: 15px;
        }
        .grid {
            width: 100%;
            border-collapse: collapse;
        }
        .grid td {
            width: 50%;
            vertical-align: top;
            padding-bottom: 10px;
        }
        .label {
            font-size: 11px;
            color: #666;
            text-transform: uppercase;
            display: block;
            margin-bottom: 2px;
        }
        .value {
            font-size: 14px;
            font-weight: bold;
        }
        .footer {
            margin-top: 50px;
            text-align: center;
            font-size: 12px;
            color: #999;
            border-top: 1px solid #ddd;
            padding-top: 20px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Republic of Botswana</h1>
        <h2>e-Visa Application Summary</h2>
    </div>

    <div class="reference-box">
        Application Reference Number:
        <span class="reference-number">{{ $application->reference_number }}</span>
    </div>

    <div class="section">
        <div class="section-title">Personal Information</div>
        <table class="grid">
            <tr>
                <td>
                    <span class="label">Full Name</span>
                    <span class="value">{{ $application->first_name }} {{ $application->middle_name }} {{ $application->last_name }}</span>
                </td>
                <td>
                    <span class="label">Nationality</span>
                    <span class="value">{{ $application->nationality }}</span>
                </td>
            </tr>
            <tr>
                <td>
                    <span class="label">Date of Birth</span>
                    <span class="value">{{ $application->date_of_birth->format('d M Y') }}</span>
                </td>
                <td>
                    <span class="label">Passport Number</span>
                    <span class="value">{{ $application->passport_number }}</span>
                </td>
            </tr>
            <tr>
                <td>
                    <span class="label">Email Address</span>
                    <span class="value">{{ $application->email }}</span>
                </td>
                <td>
                    <span class="label">Phone Number</span>
                    <span class="value">{{ $application->phone }}</span>
                </td>
            </tr>
        </table>
    </div>

    <div class="section">
        <div class="section-title">Visa Details</div>
        <table class="grid">
            <tr>
                <td>
                    <span class="label">Visa Type</span>
                    <span class="value">{{ ucfirst($application->visa_type) }}</span>
                </td>
                <td>
                    <span class="label">Purpose of Visit</span>
                    <span class="value">{{ $application->purpose }}</span>
                </td>
            </tr>
            <tr>
                <td>
                    <span class="label">Expected Arrival</span>
                    <span class="value">{{ $application->arrival_date->format('d M Y') }}</span>
                </td>
                <td>
                    <span class="label">Expected Departure</span>
                    <span class="value">{{ $application->departure_date->format('d M Y') }}</span>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <span class="label">Accommodation Address</span>
                    <span class="value">{{ $application->accommodation }}</span>
                </td>
            </tr>
        </table>
    </div>

    <div class="section">
        <div class="section-title">Application Status</div>
        <table class="grid">
            <tr>
                <td>
                    <span class="label">Submitted On</span>
                    <span class="value">{{ $application->submitted_at->format('d M Y H:i') }}</span>
                </td>
                <td>
                    <span class="label">Current Status</span>
                    <span class="value" style="color: green;">{{ ucfirst($application->status) }}</span>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <span class="label">Identity Verification</span>
                    <span class="value">
                        @if($application->verification_status === 'verified')
                            <span style="color: green;">Verified</span>
                        @else
                            <span>{{ ucfirst($application->verification_status) }}</span>
                        @endif
                    </span>
                </td>
            </tr>
        </table>
    </div>

    <div class="footer">
        <p>This document is an application summary only and does not constitute a visa.</p>
        <p>Generated on {{ now()->format('d M Y H:i:s') }}</p>
    </div>
</body>
</html>
