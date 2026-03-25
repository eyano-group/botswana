<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Visa Application Received — Government of Botswana</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Segoe UI', Arial, sans-serif; background: #f4f6f9; color: #1a1a2e; }
    a { color: #006633; text-decoration: none; }
    .wrapper { max-width: 620px; margin: 32px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,.08); }
    .header { background: linear-gradient(135deg, #006633 0%, #004d26 100%); padding: 36px 40px; text-align: center; position: relative; }
    .header::before { content: ''; position: absolute; inset: 0; background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); }
    .header-shield { width: 64px; height: 64px; background: rgba(255,255,255,.18); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; border: 2px solid rgba(255,255,255,.35); font-size: 30px; position: relative; }
    .header h1 { font-size: 22px; font-weight: 700; color: #ffffff; position: relative; letter-spacing: .3px; }
    .header .subtitle { font-size: 12px; color: rgba(255,255,255,.75); margin-top: 4px; text-transform: uppercase; letter-spacing: 1.2px; position: relative; }
    .header .dept { font-size: 13px; color: rgba(255,255,255,.9); margin-top: 8px; position: relative; }
    .divider { height: 4px; background: linear-gradient(90deg, #006633, #c8a017, #006633); }
    .body { padding: 36px 40px; }
    .greeting { font-size: 16px; color: #1a1a2e; margin-bottom: 18px; line-height: 1.6; }
    .ref-card { background: linear-gradient(135deg, #f0f9f4, #e8f5ee); border: 1.5px solid #a8d5b7; border-radius: 10px; padding: 20px 24px; margin: 24px 0; text-align: center; }
    .ref-label { font-size: 11px; font-weight: 700; color: #006633; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 8px; }
    .ref-number { font-size: 26px; font-family: 'Courier New', monospace; font-weight: 700; color: #004d26; letter-spacing: 3px; }
    .ref-note { font-size: 12px; color: #4a7c59; margin-top: 8px; }
    .section { margin: 28px 0; }
    .section-title { font-size: 14px; font-weight: 700; color: #006633; text-transform: uppercase; letter-spacing: .8px; border-bottom: 2px solid #e8f5ee; padding-bottom: 8px; margin-bottom: 16px; }
    .info-table { width: 100%; border-collapse: collapse; }
    .info-table tr td { padding: 9px 0; font-size: 14px; border-bottom: 1px solid #f0f0f0; }
    .info-table tr:last-child td { border-bottom: none; }
    .info-table td:first-child { color: #6b7280; font-weight: 500; min-width: 160px; }
    .info-table td:last-child { color: #1a1a2e; font-weight: 600; }
    .steps { counter-reset: steps; }
    .step { display: flex; gap: 14px; margin-bottom: 14px; align-items: flex-start; }
    .step-num { min-width: 28px; height: 28px; background: #006633; color: #fff; border-radius: 50%; font-size: 12px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px; }
    .step-text { font-size: 14px; color: #374151; line-height: 1.5; }
    .step-text strong { color: #1a1a2e; }
    .notice { background: #fffbeb; border: 1px solid #fcd34d; border-left: 4px solid #f59e0b; border-radius: 6px; padding: 14px 16px; font-size: 13px; color: #78350f; line-height: 1.5; margin: 24px 0; }
    .cta { text-align: center; margin: 28px 0; }
    .cta a { display: inline-block; background: #006633; color: #ffffff; padding: 14px 32px; border-radius: 8px; font-weight: 700; font-size: 14px; letter-spacing: .3px; }
    .footer { background: #f4f6f9; border-top: 1px solid #e5e7eb; padding: 24px 40px; }
    .footer-logo { font-weight: 800; color: #006633; font-size: 15px; margin-bottom: 4px; }
    .footer p { font-size: 12px; color: #9ca3af; line-height: 1.6; margin-top: 4px; }
    .footer .secure { display: inline-flex; align-items: center; gap: 6px; font-size: 11px; color: #6b7280; margin-top: 10px; }
  </style>
</head>
<body>
<div class="wrapper">

  <!-- Header -->
  <div class="header">
    <div class="header-shield">🦎</div>
    <div class="subtitle">Republic of Botswana</div>
    <h1>e-Visa Application — Confirmation</h1>
    <div class="dept">Department of Immigration &amp; Civil Registration</div>
  </div>
  <div class="divider"></div>

  <!-- Body -->
  <div class="body">

    <p class="greeting">
      Dear <strong>{{ $application->first_name }} {{ $application->last_name }}</strong>,<br /><br />
      We are pleased to confirm that your application for a Botswana e-Visa has been <strong>successfully received</strong>
      and registered in our system. This email serves as your official acknowledgement of receipt.
    </p>

    <!-- Reference -->
    <div class="ref-card">
      <div class="ref-label">Application Reference Number</div>
      <div class="ref-number">{{ $application->reference_number }}</div>
      <div class="ref-note">Please retain this number for all future correspondence regarding your application.</div>
    </div>

    <!-- Application Summary -->
    <div class="section">
      <div class="section-title">Application Summary</div>
      <table class="info-table">
        <tr>
          <td>Full Name</td>
          <td>{{ $application->first_name }} {{ $application->middle_name ? $application->middle_name.' ' : '' }}{{ $application->last_name }}</td>
        </tr>
        <tr>
          <td>Passport Number</td>
          <td>{{ $application->passport_number }}</td>
        </tr>
        <tr>
          <td>Nationality</td>
          <td>{{ $application->nationality }}</td>
        </tr>
        <tr>
          <td>Visa Type</td>
          <td style="text-transform: capitalize;">{{ $application->visa_type }}</td>
        </tr>
        <tr>
          <td>Intended Arrival</td>
          <td>{{ $application->arrival_date ? \Carbon\Carbon::parse($application->arrival_date)->format('d F Y') : '—' }}</td>
        </tr>
        <tr>
          <td>Intended Departure</td>
          <td>{{ $application->departure_date ? \Carbon\Carbon::parse($application->departure_date)->format('d F Y') : '—' }}</td>
        </tr>
        <tr>
          <td>Date Submitted</td>
          <td>{{ $application->created_at->format('d F Y, H:i') }} (UTC)</td>
        </tr>
        <tr>
          <td>Application Status</td>
          <td><span style="color:#006633; font-weight:800;">Under Review</span></td>
        </tr>
      </table>
    </div>

    <!-- What happens next -->
    <div class="section">
      <div class="section-title">What Happens Next?</div>
      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-text"><strong>Document Review</strong> — Our immigration officers will verify your submitted documents and passport data.</div>
        </div>
        <div class="step">
          <div class="step-num">2</div>
          <div class="step-text"><strong>Background Checks</strong> — Standard security and eligibility assessments will be conducted.</div>
        </div>
        <div class="step">
          <div class="step-num">3</div>
          <div class="step-text"><strong>Decision Notification</strong> — You will receive an email notification once a decision has been made. Processing typically takes <strong>5–7 business days</strong>.</div>
        </div>
      </div>
    </div>

    <!-- Warning -->
    <div class="notice">
      ⚠ <strong>Important:</strong> Receipt of this confirmation does not guarantee visa approval. Do not make non-refundable travel arrangements until you have received official approval. If additional documentation is required, you will be contacted at this email address.
    </div>

    <!-- CTA -->
    <div class="cta">
      <a href="{{ config('app.url') }}/check-status">Track Application Status</a>
    </div>

    <p style="font-size:13px; color:#6b7280; line-height:1.6;">
      If you believe you have received this email in error, or if you have any questions regarding your application,
      please contact our helpdesk quoting your reference number:<br />
      📧 <a href="mailto:evisa@gov.bw">evisa@gov.bw</a> &nbsp;|&nbsp; 📞 +267 368 8000
    </p>

  </div>

  <!-- Footer -->
  <div class="footer">
    <div class="footer-logo">🇧🇼 Government of Botswana</div>
    <p>
      Department of Immigration &amp; Civil Registration<br />
      Private Bag 00396, Gaborone, Botswana<br />
      <a href="http://www.immigration.gov.bw">www.immigration.gov.bw</a>
    </p>
    <p class="secure">🔒 This is an automated system-generated email. Please do not reply directly to this message.</p>
  </div>

</div>
</body>
</html>
