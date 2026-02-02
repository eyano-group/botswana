import React, { useState } from "react";
import { useForm, Head } from "@inertiajs/react";
// Layouts
import AppShell from "@/layouts/AppShell";
import PageTitle from "@/components/UI/PageTitle";
// Components
import StepIndicator from "@/components/visa/StepIndicator";
import PersonalInfoStep from "@/components/visa/PersonalInfoStep";
import PassportUploadStep from "@/components/visa/PassportUploadStep";
import VisaDetailsStep from "@/components/visa/VisaDetailsStep";
import ReviewStep from "@/components/visa/ReviewStep";
import SuccessModal from "@/components/visa/SuccessModal";

export default function VisaApplication() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successRef, setSuccessRef] = useState("");

  const { data, setData, post, processing, errors, setError, clearErrors } =
    useForm({
      // Personal Info
      first_name: "",
      middle_name: "",
      last_name: "",
      email: "",
      phone: "",
      nationality: "",
      passport_number: "",
      date_of_birth: "",

      // Visa Details
      visa_type: "tourist",
      arrival_date: "",
      departure_date: "",
      purpose: "",
      accommodation: "",

      // Files & Verification
      passport_file_path: "",
      ocr_data: null,
    });

  const steps = [
    "Personal Information",
    "Passport Verification",
    "Visa Details",
    "Review & Submit",
  ];

  const validateStep1 = () => {
    clearErrors();
    let isValid = true;

    if (!data.first_name) {
      setError("first_name", "First name is required");
      isValid = false;
    }
    if (!data.last_name) {
      setError("last_name", "Last name is required");
      isValid = false;
    }
    if (!data.email) {
      setError("email", "Email is required");
      isValid = false;
    }
    if (!data.phone) {
      setError("phone", "Phone number is required");
      isValid = false;
    }
    if (!data.nationality) {
      setError("nationality", "Nationality is required");
      isValid = false;
    }
    if (!data.passport_number) {
      setError("passport_number", "Passport number is required");
      isValid = false;
    }
    if (!data.date_of_birth) {
      setError("date_of_birth", "Date of birth is required");
      isValid = false;
    }

    return isValid;
  };

  const validateStep3 = () => {
    clearErrors();
    let isValid = true;

    if (!data.visa_type) {
      setError("visa_type", "Visa type is required");
      isValid = false;
    }
    if (!data.arrival_date) {
      setError("arrival_date", "Arrival date is required");
      isValid = false;
    }
    if (!data.departure_date) {
      setError("departure_date", "Departure date is required");
      isValid = false;
    }
    if (!data.purpose) {
      setError("purpose", "Purpose of visit is required");
      isValid = false;
    }
    if (!data.accommodation) {
      setError("accommodation", "Accommodation details are required");
      isValid = false;
    }

    return isValid;
  };

  const nextStep = () => {
    if (currentStep === 1) {
      if (!validateStep1()) {
        return;
      }
    }

    if (currentStep === 2) {
      if (!data.passport_file_path) {
        alert("Please upload and verify your passport first.");
        return;
      }
    }

    if (currentStep === 3) {
      if (!validateStep3()) {
        return;
      }
    }

    setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handlePassportVerification = (isValid: boolean) => {
    if (isValid) {
      // Auto advance after short delay
      setTimeout(() => {
        nextStep();
      }, 1000);
    }
  };

  const handleSubmit = () => {
    post("/apply-visa", {
      onSuccess: (page) => {
        // Extract ref number from flash message if available
        // For now, assume it's passed or just show generic
        const flash = page.props.flash as any;
        if (flash?.success?.reference_number) {
          setSuccessRef(flash.success.reference_number);
        } else {
          setSuccessRef("PENDING");
        }
        setShowSuccess(true);
      },
      onError: (errors) => {
        console.error(errors);
        // Also handle displaying errors in specific steps
      },
    });
  };

  return (
    <AppShell>
      <Head title="Apply for Visa" />

      <PageTitle
        title="Visa Application"
        backgroundImage="/assets/images/resource/Immigration-and-civil-registration.png"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Immigration", href: "/immigration-civil-registration" },
          { label: "Apply for Visa", href: "" },
        ]}
      />

      <section className="py-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-[#0099cc] px-8 py-6 text-white text-center">
              <h2 className="text-2xl font-bold">
                Botswana e-Visa Application
              </h2>
              <p className="text-white/90 opacity-90 mt-1">
                Complete the steps below to apply for your visa
              </p>
            </div>

            {/* Progress Bar */}
            <div className="px-8 pt-6">
              <StepIndicator currentStep={currentStep} steps={steps} />
            </div>

            {/* Form Content */}
            <div className="p-8 md:p-12">
              {currentStep === 1 && (
                <PersonalInfoStep
                  data={data}
                  errors={errors}
                  setData={setData}
                />
              )}

              {currentStep === 2 && (
                <PassportUploadStep
                  data={data}
                  setData={setData}
                  onVerificationComplete={handlePassportVerification}
                />
              )}

              {currentStep === 3 && (
                <VisaDetailsStep
                  data={data}
                  errors={errors}
                  setData={setData}
                />
              )}

              {currentStep === 4 && (
                <ReviewStep
                  data={data}
                  onEdit={(step) => setCurrentStep(step)}
                  onSubmit={handleSubmit}
                  isSubmitting={processing}
                />
              )}
            </div>

            {/* Footer Controls */}
            {currentStep !== 2 && ( // Step 2 (Upload) has its own controls usually, or handled by logic
              <div className="bg-gray-50 px-8 py-6 border-t border-gray-100 flex justify-between items-center">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    currentStep === 1
                      ? "text-gray-300 cursor-not-allowed"
                      : "text-gray-600 hover:text-[#0099cc] hover:bg-gray-200"
                  }
                                    `}
                >
                  Previous
                </button>

                {currentStep < 4 ? (
                  <button
                    onClick={nextStep}
                    className="px-8 py-3 bg-gold-500 hover:bg-gold-600 text-white rounded-lg font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                  >
                    Next Step
                  </button>
                ) : (
                  <span className="text-sm text-gray-500 italic">
                    Please confirm details above
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <SuccessModal
        isOpen={showSuccess}
        onClose={() => (window.location.href = "/")}
        referenceNumber={successRef}
      />
    </AppShell>
  );
}
