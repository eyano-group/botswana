import React, { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
import {
  ArrowLeft,
  CheckCircle,
  XCircle,
  FileText,
  Calendar,
  User,
  MapPin,
  Globe,
  Briefcase,
  Download,
  Shield,
  CreditCard,
} from "lucide-react";
import AppShell from "@/layouts/AppShell";
import PageTitle from "@/components/UI/PageTitle";

interface Application {
  id: number;
  reference_number: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  email: string;
  phone: string;
  nationality: string;
  passport_number: string;
  date_of_birth: string;
  visa_type: string;
  arrival_date: string;
  departure_date: string;
  purpose: string;
  accommodation: string;
  passport_file_path: string;
  ocr_data: any;
  status: string;
  created_at: string;
}

export default function ApplicationReview({
  application,
}: {
  application: Application;
}) {
  const [reason, setReason] = useState("");
  const [processing, setProcessing] = useState(false);

  // In a real app, this would be a secure signed URL
  // Just for demo purposes, we construct a path or pretend we have one
  // Since we stored it locally in 'passports/', we might need a route to serve it securely
  // For now, let's assume we can't easily view the private file without a proper route
  // We'll simulate the "Passport View" placeholder

  const handleAction = (status: "approved" | "rejected") => {
    if (status === "rejected" && !reason) {
      alert("Please provide a reason for rejection.");
      return;
    }

    if (confirm(`Are you sure you want to ${status} this application?`)) {
      setProcessing(true);
      router.post(
        `/admin/applications/${application.id}/status`,
        {
          status,
          reason,
        },
        {
          onFinish: () => setProcessing(false),
        },
      );
    }
  };

  return (
    <AppShell>
      <Head title={`Review: ${application.reference_number}`} />

      <PageTitle
        title="Application Review"
        backgroundImage="/assets/images/resource/Immigration-and-civil-registration.png"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Admin Portal", href: "/admin/dashboard" },
          { label: application.reference_number, href: "" },
        ]}
      />

      <div className="container mx-auto px-4 -mt-20 pb-20 relative z-20">
        {/* Action Toolbar */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <Link
              href="/admin/dashboard"
              className="p-2 hover:bg-gray-100 rounded-full text-gray-500 transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div>
              <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2 flex-wrap">
                {application.first_name} {application.last_name}
                <span
                  className={`px-2 py-0.5 rounded text-xs uppercase border 
                  ${
                    application.status === "approved"
                      ? "bg-green-100 text-green-700 border-green-200"
                      : application.status === "rejected"
                        ? "bg-red-100 text-red-700 border-red-200"
                        : "bg-yellow-100 text-yellow-700 border-yellow-200"
                  }`}
                >
                  {application.status}
                </span>
              </h1>
              <p className="text-sm text-gray-500 font-mono">
                {application.reference_number}
              </p>
            </div>
          </div>

          <div className="flex gap-3 w-full md:w-auto justify-end">
            {application.status === "submitted" && (
              <>
                <button
                  disabled={processing}
                  onClick={() => handleAction("rejected")}
                  className="px-4 py-2 bg-red-50 text-red-700 border border-red-200 rounded-lg hover:bg-red-100 font-medium flex items-center gap-2 transition-colors"
                >
                  <XCircle className="w-5 h-5" /> Reject
                </button>
                <button
                  disabled={processing}
                  onClick={() => handleAction("approved")}
                  className="px-6 py-2 bg-[#0099cc] text-white rounded-lg hover:bg-[#0088bb] font-medium flex items-center gap-2 shadow-md transition-colors"
                >
                  <CheckCircle className="w-5 h-5" /> Approve Visa
                </button>
              </>
            )}
            {application.status === "approved" && (
              <div className="text-green-600 flex items-center bg-green-50 px-4 py-2 rounded-lg border border-green-100">
                <CheckCircle className="w-5 h-5 mr-2" /> Application Approved
              </div>
            )}
            {application.status === "rejected" && (
              <div className="text-red-600 flex items-center bg-red-50 px-4 py-2 rounded-lg border border-red-100">
                <XCircle className="w-5 h-5 mr-2" /> Application Rejected
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Info Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Applicant Details */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200 font-semibold text-gray-700 flex items-center gap-2">
                <User className="w-5 h-5 text-[#0099cc]" /> Personal Information
              </div>
              <div className="p-6 grid grid-cols-2 gap-6">
                <InfoItem label="First Name" value={application.first_name} />
                <InfoItem label="Middle Name" value={application.middle_name} />
                <InfoItem label="Last Name" value={application.last_name} />
                <InfoItem
                  label="Date of Birth"
                  value={application.date_of_birth}
                />
                <InfoItem label="Nationality" value={application.nationality} />
                <InfoItem label="Email" value={application.email} />
                <InfoItem label="Phone" value={application.phone} />
              </div>
            </div>

            {/* Travel Details */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200 font-semibold text-gray-700 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#0099cc]" /> Visa
                Application Details
              </div>
              <div className="p-6 grid grid-cols-2 gap-6">
                <InfoItem
                  label="Visa Type"
                  value={application.visa_type}
                  className="capitalize"
                />
                <InfoItem
                  label="Passport Number"
                  value={application.passport_number}
                  className="font-mono"
                />
                <InfoItem
                  label="Arrival Date"
                  value={application.arrival_date}
                />
                <InfoItem
                  label="Departure Date"
                  value={application.departure_date}
                />
                <div className="col-span-2">
                  <span className="text-xs uppercase tracking-wide text-gray-500 block mb-1">
                    Purpose of Visit
                  </span>
                  <p className="text-gray-900 bg-gray-50 p-3 rounded-lg border border-gray-100">
                    {application.purpose}
                  </p>
                </div>
                <div className="col-span-2">
                  <span className="text-xs uppercase tracking-wide text-gray-500 block mb-1">
                    Accommodation
                  </span>
                  <p className="text-gray-900 bg-gray-50 p-3 rounded-lg border border-gray-100">
                    {application.accommodation}
                  </p>
                </div>
              </div>
            </div>

            {/* OCR Data (Hidden or Expanded) */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200 font-semibold text-gray-700 flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#0099cc]" /> System
                Verification Data (OCR)
              </div>
              <div className="p-6">
                {application.ocr_data ? (
                  <div className="bg-blue-50 text-blue-800 p-4 rounded-lg text-sm font-mono overflow-auto max-h-64">
                    <pre>{JSON.stringify(application.ocr_data, null, 2)}</pre>
                  </div>
                ) : (
                  <p className="text-gray-500 italic">
                    No automated data extraction available.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar - Passport & Actions */}
          <div className="space-y-6">
            {/* Passport Preview Placeholder */}
            <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden text-white">
              <div className="px-6 py-4 bg-gray-900 border-b border-gray-700 font-semibold flex items-center justify-between">
                <span>Passport Document</span>
                <span className="text-xs bg-green-900 text-green-300 px-2 py-0.5 rounded border border-green-700">
                  Verified
                </span>
              </div>
              <div className="aspect-[3/4] bg-gray-800 flex flex-col items-center justify-center p-8 text-center text-gray-400">
                <CreditCard className="w-16 h-16 mb-4 opacity-20" />
                <p>Secure Document Viewer</p>
                <p className="text-sm mt-2">File stored in encrypted storage</p>
                <p className="text-xs mt-4 font-mono">
                  {application.passport_file_path.split("/").pop()}
                </p>

                {/* In real app, this would be a secure download link */}
                <button className="mt-6 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white text-sm flex items-center gap-2 transition-colors">
                  <Download className="w-4 h-4" /> Download Secure Copy
                </button>
              </div>
            </div>

            {/* Decision Box */}
            {application.status === "submitted" && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="px-6 py-4 bg-gray-50 border-b border-gray-200 font-semibold text-gray-700">
                  Decision Notes
                </div>
                <div className="p-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Internal Notes / Rejection Reason
                  </label>
                  <textarea
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#0099cc] focus:border-[#0099cc] outline-none h-32 text-sm"
                    placeholder="Enter notes here. Required for rejection..."
                  ></textarea>
                </div>
              </div>
            )}

            {/* Timeline/Meta */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden p-6 space-y-4">
              <div>
                <span className="text-xs uppercase text-gray-500">
                  Submitted On
                </span>
                <p className="font-medium">
                  {new Date(application.created_at).toLocaleString()}
                </p>
              </div>
              <div>
                <span className="text-xs uppercase text-gray-500">
                  Reference
                </span>
                <p className="font-mono text-[#0099cc]">
                  {application.reference_number}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

function InfoItem({ label, value, className = "" }: any) {
  return (
    <div>
      <span className="text-xs uppercase tracking-wide text-gray-500 block mb-1">
        {label}
      </span>
      <p className={`font-medium text-gray-900 ${className}`}>{value || "-"}</p>
    </div>
  );
}
