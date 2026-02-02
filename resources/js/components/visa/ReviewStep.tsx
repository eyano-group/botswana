import React from "react";
import { Check, Edit2 } from "lucide-react";

interface ReviewStepProps {
  data: any;
  onEdit: (step: number) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}

export default function ReviewStep({
  data,
  onEdit,
  onSubmit,
  isSubmitting,
}: ReviewStepProps) {
  const [confirmed, setConfirmed] = React.useState(false);

  return (
    <div className="space-y-8 animate-fade-in-up">
      <div className="text-center space-y-2">
        <h3 className="text-lg font-semibold text-[#0099cc]">
          Step 4: Review Application
        </h3>
        <p className="text-sm text-gray-500">
          Please review all information before submitting.
        </p>
      </div>

      {/* Personal Info Review */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h4 className="font-semibold text-[#0099cc]">Personal Information</h4>
          <button
            onClick={() => onEdit(1)}
            className="text-[#0099cc] hover:text-[#0088bb] text-sm flex items-center"
          >
            <Edit2 className="w-3 h-3 mr-1" /> Edit
          </button>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
          <ReviewItem
            label="Full Name"
            value={`${data.first_name} ${data.middle_name || ""} ${data.last_name}`}
          />
          <ReviewItem label="Date of Birth" value={data.date_of_birth} />
          <ReviewItem label="Passport Number" value={data.passport_number} />
          <ReviewItem label="Nationality" value={data.nationality} />
          <ReviewItem label="Email" value={data.email} />
          <ReviewItem label="Phone" value={data.phone} />
        </div>
      </div>

      {/* Passport Verification Status */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h4 className="font-semibold text-[#0099cc]">
            Identification Document
          </h4>
          <button
            onClick={() => onEdit(2)}
            className="text-[#0099cc] hover:text-[#0088bb] text-sm flex items-center"
          >
            <Edit2 className="w-3 h-3 mr-1" /> Edit
          </button>
        </div>
        <div className="p-6 flex items-center">
          <div className="bg-green-100 text-green-600 p-2 rounded-full mr-4">
            <Check className="w-6 h-6" />
          </div>
          <div>
            <p className="font-medium text-gray-900">
              Passport Verified Successfully
            </p>
            <p className="text-sm text-gray-500">
              AI verification matched your passport details.
            </p>
          </div>
        </div>
      </div>

      {/* Visa Details Review */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h4 className="font-semibold text-[#0099cc]">Visa Details</h4>
          <button
            onClick={() => onEdit(3)}
            className="text-[#0099cc] hover:text-[#0088bb] text-sm flex items-center"
          >
            <Edit2 className="w-3 h-3 mr-1" /> Edit
          </button>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
          <ReviewItem
            label="Visa Type"
            value={data.visa_type}
            className="capitalize"
          />
          <ReviewItem label="Arrival Date" value={data.arrival_date} />
          <ReviewItem label="Departure Date" value={data.departure_date} />
          <div className="col-span-1 md:col-span-2">
            <ReviewItem label="Purpose of Visit" value={data.purpose} />
          </div>
          <div className="col-span-1 md:col-span-2">
            <ReviewItem label="Accommodation" value={data.accommodation} />
          </div>
        </div>
      </div>

      {/* Declaration */}
      <div className="bg-sky-50 rounded-xl p-6 flex items-start">
        <input
          type="checkbox"
          id="declaration"
          checked={confirmed}
          onChange={(e) => setConfirmed(e.target.checked)}
          className="mt-1 w-5 h-5 text-[#0099cc] rounded focus:ring-[#0099cc] border-gray-300"
        />
        <label htmlFor="declaration" className="ml-3 text-sm text-[#0099cc]">
          I declare that the information provided in this application is true
          and complete to the best of my knowledge. I understand that any false
          statement may result in the rejection of my visa application.
        </label>
      </div>

      {/* Submit Button */}
      <button
        onClick={onSubmit}
        disabled={!confirmed || isSubmitting}
        className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg transition-all transform
                    ${
                      !confirmed || isSubmitting
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-[#0099cc] hover:bg-[#0088bb] text-white hover:scale-[1.01] hover:shadow-xl"
                    }
                `}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Submitting Application...
          </span>
        ) : (
          "Submit Application"
        )}
      </button>
    </div>
  );
}

function ReviewItem({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className="flex flex-col">
      <span className="text-xs text-gray-500 uppercase tracking-wider">
        {label}
      </span>
      <span className={`font-medium text-gray-900 mt-1 ${className}`}>
        {value || "-"}
      </span>
    </div>
  );
}
