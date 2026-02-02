import React from "react";
import { User, Mail, Phone, Calendar, Globe, CreditCard } from "lucide-react";

interface PersonalInfoStepProps {
  data: any;
  errors: any;
  setData: (field: string, value: any) => void;
}

export default function PersonalInfoStep({
  data,
  errors,
  setData,
}: PersonalInfoStepProps) {
  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Name */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#0099cc] flex items-center">
            <User className="w-4 h-4 mr-2 text-[#0099cc]" />
            First Name <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="text"
            value={data.first_name}
            onChange={(e) => setData("first_name", e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#0099cc] outline-none transition-all
                            ${errors.first_name ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-[#0099cc]"}
                        `}
            placeholder="e.g. John"
          />
          {errors.first_name && (
            <p className="text-xs text-red-500 mt-1">{errors.first_name}</p>
          )}
        </div>

        {/* Middle Name */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-blue-900">
            Middle Name (Optional)
          </label>
          <input
            type="text"
            value={data.middle_name}
            onChange={(e) => setData("middle_name", e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0099cc] focus:ring-2 focus:ring-[#0099cc] outline-none transition-all"
            placeholder="e.g. David"
          />
        </div>

        {/* Last Name */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#0099cc] flex items-center">
            <User className="w-4 h-4 mr-2 text-[#0099cc]" />
            Last Name <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="text"
            value={data.last_name}
            onChange={(e) => setData("last_name", e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#0099cc] outline-none transition-all
                            ${errors.last_name ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-[#0099cc]"}
                        `}
            placeholder="e.g. Doe"
          />
          {errors.last_name && (
            <p className="text-xs text-red-500 mt-1">{errors.last_name}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#0099cc] flex items-center">
            <Mail className="w-4 h-4 mr-2 text-[#0099cc]" />
            Email Address <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => setData("email", e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#0099cc] outline-none transition-all
                            ${errors.email ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-[#0099cc]"}
                        `}
            placeholder="john.doe@example.com"
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#0099cc] flex items-center">
            <Phone className="w-4 h-4 mr-2 text-[#0099cc]" />
            Phone Number <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => setData("phone", e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#0099cc] outline-none transition-all
                            ${errors.phone ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-[#0099cc]"}
                        `}
            placeholder="+1 234 567 8900"
          />
          {errors.phone && (
            <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Nationality */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#0099cc] flex items-center">
            <Globe className="w-4 h-4 mr-2 text-[#0099cc]" />
            Nationality <span className="text-red-500 ml-1">*</span>
          </label>
          <select
            value={data.nationality}
            onChange={(e) => setData("nationality", e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#0099cc] outline-none transition-all bg-white
                            ${errors.nationality ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-[#0099cc]"}
                        `}
          >
            <option value="">Select Country</option>
            <option value="USA">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="Canada">Canada</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
            <option value="China">China</option>
            <option value="India">India</option>
            <option value="South Africa">South Africa</option>
            {/* Add more countries as needed */}
          </select>
          {errors.nationality && (
            <p className="text-xs text-red-500 mt-1">{errors.nationality}</p>
          )}
        </div>

        {/* Passport Number */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#0099cc] flex items-center">
            <CreditCard className="w-4 h-4 mr-2 text-[#0099cc]" />
            Passport Number <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="text"
            value={data.passport_number}
            onChange={(e) =>
              setData("passport_number", e.target.value.toUpperCase())
            }
            className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#0099cc] outline-none transition-all font-mono uppercase
                            ${errors.passport_number ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-[#0099cc]"}
                        `}
            placeholder="A12345678"
          />
          {errors.passport_number && (
            <p className="text-xs text-red-500 mt-1">
              {errors.passport_number}
            </p>
          )}
        </div>

        {/* Date of Birth */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#0099cc] flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-[#0099cc]" />
            Date of Birth <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="date"
            value={data.date_of_birth}
            onChange={(e) => setData("date_of_birth", e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#0099cc] outline-none transition-all
                            ${errors.date_of_birth ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-[#0099cc]"}
                        `}
          />
          {errors.date_of_birth && (
            <p className="text-xs text-red-500 mt-1">{errors.date_of_birth}</p>
          )}
        </div>
      </div>

      <div className="bg-sky-50 p-4 rounded-lg border border-sky-100 flex items-start">
        <div className="p-1 bg-sky-100 rounded-full mr-3 text-[#0099cc]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-[#0099cc]">
            Important Information
          </h4>
          <p className="text-xs text-[#0077aa] mt-1">
            Please ensure all fields match your passport exactly. You will be
            asked to upload your passport in the next step for verification.
          </p>
        </div>
      </div>
    </div>
  );
}
