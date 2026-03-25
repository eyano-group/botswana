import React, { useState, useEffect } from 'react';
import { useForm, usePage, Head } from '@inertiajs/react';
import { AlertTriangle } from 'lucide-react';
import AppShell from '@/layouts/AppShell';
import PageTitle from '@/components/UI/PageTitle';

import StepIndicator from '@/components/visa/StepIndicator';
import PersonalInfoStep from '@/components/visa/PersonalInfoStep';
import PassportDetailsStep from '@/components/visa/PassportDetailsStep';
import VisaDetailsStep from '@/components/visa/VisaDetailsStep';
import PassportUploadStep from '@/components/visa/PassportUploadStep';
import DocumentsStep from '@/components/visa/DocumentsStep';
import ReviewStep from '@/components/visa/ReviewStep';
import SuccessModal from '@/components/visa/SuccessModal';

const STEPS = [
  'Personal Info',
  'Passport',
  'Visa Details',
  'AI Verification',
  'Documents',
  'Review & Submit',
];

const DRAFT_KEY = 'evisa_draft';

export default function VisaApplication() {
  const [step, setStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successRef, setSuccessRef] = useState('');
  const [successName, setSuccessName] = useState('');
  const [successEmail, setSuccessEmail] = useState('');
  const [passportVerified, setPassportVerified] = useState(false);
  const [direction, setDirection] = useState<'forward' | 'back'>('forward');

  const { data, setData, post, processing, errors, setError, clearErrors } = useForm({
    // Step 1 — Personal Info
    first_name: '',
    middle_name: '',
    last_name: '',
    email: '',
    phone: '',
    nationality: '',
    date_of_birth: '',
    // Step 2 — Passport Details
    passport_number: '',
    issuing_country: '',
    issue_date: '',
    expiry_date: '',
    // Step 3 — Visa Details
    visa_type: 'tourist',
    arrival_date: '',
    departure_date: '',
    purpose: '',
    accommodation: '',
    // Dynamic visa-type fields
    tour_itinerary: '',
    company_name: '',
    business_activity: '',
    local_contact: '',
    institution_name: '',
    programme: '',
    study_duration: '',
    employer_name: '',
    job_title: '',
    work_permit: '',
    destination_country: '',
    onward_flight: '',
    // Step 4 — AI verification
    passport_file_path: '',
    ocr_data: null as any,
    // Step 5 — Documents
    supporting_documents: [] as string[],
  });

  useEffect(() => {
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify(data));
    } catch (_) {}
  }, [data]);

  // Handle passportVerified status on data change (especially for draft restore)
  useEffect(() => {
    if (data.passport_file_path && data.ocr_data) {
      setPassportVerified(true);
    }
  }, [data.passport_file_path, data.ocr_data]);

  // Restore draft on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(DRAFT_KEY);
      if (saved) {
        const draft = JSON.parse(saved);
        Object.entries(draft).forEach(([k, v]) => setData(k as any, v));
      }
    } catch (_) {}
  }, []);

const { props } = usePage();
  const flash = props.flash as any;

  // Watch for flash success (from redirect back)
  useEffect(() => {
    if (flash?.success) {
      setSuccessRef(flash.success.reference_number || 'PENDING');
      setSuccessName(flash.success.applicant_name || '');
      setSuccessEmail(flash.success.applicant_email || '');
      setShowSuccess(true);
      localStorage.removeItem(DRAFT_KEY);
    }
  }, [flash?.success]);
  const navigate = (target: number) => {
    setDirection(target > step ? 'forward' : 'back');
    setStep(target);
  };

  // --- Validators ---
  const validateStep1 = () => {
    clearErrors();
    let ok = true;
    const req: Array<[keyof typeof data, string]> = [
      ['first_name', 'First name is required'],
      ['last_name', 'Last name is required'],
      ['email', 'Email is required'],
      ['phone', 'Phone number is required'],
      ['nationality', 'Nationality is required'],
      ['date_of_birth', 'Date of birth is required'],
    ];
    req.forEach(([f, msg]) => { if (!data[f]) { setError(f, msg); ok = false; } });
    return ok;
  };

  const validateStep2 = () => {
    clearErrors();
    let ok = true;
    if (!data.passport_number) { setError('passport_number', 'Passport number is required'); ok = false; }
    if (!data.expiry_date) { setError('expiry_date', 'Expiry date is required'); ok = false; }
    return ok;
  };

  const validateStep3 = () => {
    clearErrors();
    let ok = true;
    if (!data.arrival_date) { setError('arrival_date', 'Arrival date is required'); ok = false; }
    if (!data.departure_date) { setError('departure_date', 'Departure date is required'); ok = false; }
    if (!data.purpose) { setError('purpose', 'Purpose of visit is required'); ok = false; }
    if (!data.accommodation) { setError('accommodation', 'Accommodation details are required'); ok = false; }
    return ok;
  };

  const next = () => {
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !validateStep2()) return;
    if (step === 3 && !validateStep3()) return;
    if (step === 4 && !passportVerified) {
      alert('Please complete the AI verification step before continuing.');
      return;
    }
    navigate(step + 1);
  };

  const prev = () => navigate(step - 1);

  const handleSubmit = () => {
    post('/apply-visa', {
      onSuccess: (page) => {
        const flash = (page.props as any).flash;
        setSuccessRef(flash?.success?.reference_number || 'PENDING');
        setSuccessName(flash?.success?.applicant_name || '');
        setSuccessEmail(flash?.success?.applicant_email || '');
        setShowSuccess(true);
        localStorage.removeItem(DRAFT_KEY);
      },
    });
  };

  const isLastStep = step === STEPS.length;

  return (
    <AppShell>
      <Head title="Apply for Visa — Botswana e-Visa" />

      <PageTitle
        title="Botswana e-Visa Application"
        backgroundImage="/assets/images/resource/Immigration-and-civil-registration.png"
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Immigration', href: '/immigration-civil-registration' },
          { label: 'Apply for Visa', href: '' },
        ]}
      />

      <section className="py-16 bg-gradient-to-b from-gray-50 to-white min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

            {/* Card */}
            <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/60 overflow-hidden border border-gray-100">

              {/* Card header */}
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold">Botswana e-Visa Portal</h2>
                    <p className="text-emerald-100 text-sm mt-0.5">Secure online application</p>
                  </div>
                  {/* Draft indicator */}
                  <div className="text-xs text-emerald-200 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full animate-pulse" />
                    Draft auto-saved
                  </div>
                </div>
              </div>
              {/* Error Summary */}
              {Object.keys(errors).length > 0 && (
                <div className="mx-8 mt-6 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                    <AlertTriangle className="text-red-600 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-red-800">Please correct the following: {Object.keys(errors).length} error(s)</h4>
                    <ul className="text-xs text-red-600 mt-1 list-disc list-inside">
                      {Object.values(errors).map((err, i) => <li key={i}>{err}</li>)}
                    </ul>
                  </div>
                </div>
              )}
              {/* Step indicator */}
              <div className="px-8 pt-7 pb-2">
                <StepIndicator currentStep={step} steps={STEPS} />
              </div>

              {/* Step content */}
              <div key={step} className="p-8 md:p-10" style={{ animation: 'stepIn 0.3s ease-out' }}>
                {step === 1 && <PersonalInfoStep data={data} errors={errors} setData={setData} />}
                {step === 2 && <PassportDetailsStep data={data} errors={errors} setData={setData} />}
                {step === 3 && <VisaDetailsStep data={data} errors={errors} setData={setData} />}
                {step === 4 && (
                  <PassportUploadStep
                    data={data}
                    setData={setData}
                    onVerificationComplete={(ok) => setPassportVerified(ok)}
                  />
                )}
                {step === 5 && <DocumentsStep data={data} setData={setData} />}
                {step === 6 && (
                  <ReviewStep
                    data={data}
                    onEdit={(s) => navigate(s)}
                    onSubmit={handleSubmit}
                    isSubmitting={processing}
                  />
                )}
              </div>

              {/* Navigation footer (not shown on Review step — it has its own submit) */}
              {step < 6 && (
                <div className="border-t border-gray-100 bg-gray-50 px-8 py-5 flex items-center justify-between">
                  <button
                    onClick={prev}
                    disabled={step === 1}
                    className="px-5 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  >
                    ← Back
                  </button>

                  <span className="text-xs text-gray-400">Step {step} of {STEPS.length}</span>

                  {step === 4 && !passportVerified ? (
                    <span className="text-xs text-amber-600 font-medium">Complete verification to continue</span>
                  ) : (
                    <button
                      onClick={next}
                      className="px-7 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold shadow-sm shadow-emerald-200 hover:shadow-md transition-all hover:-translate-y-0.5"
                    >
                      Continue →
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Trust icons */}
            <div className="flex justify-center gap-8 mt-6 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">🔒 256-bit SSL</span>
              <span className="flex items-center gap-1.5">🏛 Official Portal</span>
              <span className="flex items-center gap-1.5">✉️ Email confirmation</span>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        @keyframes stepIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <SuccessModal
        isOpen={!!flash?.success || showSuccess}
        onClose={() => {
          setShowSuccess(false);
          window.location.href = '/';
        }}
        referenceNumber={flash?.success?.reference_number || successRef}
        applicantName={flash?.success?.applicant_name || successName}
        applicantEmail={flash?.success?.applicant_email || successEmail}
      />
    </AppShell>
  );
}
