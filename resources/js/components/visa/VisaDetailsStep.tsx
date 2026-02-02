import React from "react";
import { Calendar, MapPin, Briefcase } from "lucide-react";

interface VisaDetailsStepProps {
  data: any;
  errors: any;
  setData: (field: string, value: any) => void;
}

export default function VisaDetailsStep({
  data,
  errors,
  setData,
}: VisaDetailsStepProps) {
  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Visa Type */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-[#0099cc] flex items-center">
          <Briefcase className="w-4 h-4 mr-2 text-[#0099cc]" />
          Visa Type <span className="text-red-500 ml-1">*</span>
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["tourist", "business", "student", "work", "transit"].map((type) => (
            <div
              key={type}
              onClick={() => setData("visa_type", type)}
              className={`cursor-pointer rounded-lg border-2 p-4 flex items-center justify-center capitalize font-medium transition-all
                                ${
                                  data.visa_type === type
                                    ? "border-[#0099cc] bg-sky-50 text-[#0099cc] shadow-md transform scale-105"
                                    : "border-gray-200 text-gray-500 hover:border-[#0099cc] hover:bg-sky-50"
                                }
                            `}
            >
              {type} Visa
            </div>
          ))}
        </div>
        {errors.visa_type && (
          <p className="text-xs text-red-500 mt-1">{errors.visa_type}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Arrival Date */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#0099cc] flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-[#0099cc]" />
            Intended Arrival Date <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="date"
            value={data.arrival_date}
            onChange={(e) => setData("arrival_date", e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#0099cc] outline-none transition-all
                            ${errors.arrival_date ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-[#0099cc]"}
                        `}
          />
          {errors.arrival_date && (
            <p className="text-xs text-red-500 mt-1">{errors.arrival_date}</p>
          )}
        </div>

        {/* Departure Date */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#0099cc] flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-[#0099cc]" />
            Intended Departure Date <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="date"
            value={data.departure_date}
            onChange={(e) => setData("departure_date", e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#0099cc] outline-none transition-all
                            ${errors.departure_date ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-[#0099cc]"}
                        `}
          />
          {errors.departure_date && (
            <p className="text-xs text-red-500 mt-1">{errors.departure_date}</p>
          )}
        </div>
      </div>

      {/* Purpose */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-[#0099cc] flex items-center">
          <FileTextIcon className="w-4 h-4 mr-2 text-[#0099cc]" />
          Purpose of Visit <span className="text-red-500 ml-1">*</span>
        </label>
        <textarea
          value={data.purpose}
          onChange={(e) => setData("purpose", e.target.value)}
          rows={4}
          className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#0099cc] outline-none transition-all
                        ${errors.purpose ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-[#0099cc]"}
                    `}
          placeholder="Please describe the purpose of your visit in detail..."
        ></textarea>
        {errors.purpose && (
          <p className="text-xs text-red-500 mt-1">{errors.purpose}</p>
        )}
      </div>

      {/* Accommodation */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-[#0099cc] flex items-center">
          <MapPin className="w-4 h-4 mr-2 text-[#0099cc]" />
          Accommodation Details <span className="text-red-500 ml-1">*</span>
        </label>
        <textarea
          value={data.accommodation}
          onChange={(e) => setData("accommodation", e.target.value)}
          rows={3}
          className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#0099cc] outline-none transition-all
                        ${errors.accommodation ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-[#0099cc]"}
                    `}
          placeholder="Hotel name and address, or host details..."
        ></textarea>
        {errors.accommodation && (
          <p className="text-xs text-red-500 mt-1">{errors.accommodation}</p>
        )}
      </div>
    </div>
  );
}

// Icon helper
function FileTextIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  );
}
