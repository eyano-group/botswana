import React, { useState } from "react";
import {
  Search,
  X,
  CheckCircle,
  Clock,
  XCircle,
  FileText,
  Loader2,
  Download,
} from "lucide-react";
import axios from "axios";

interface StatusCheckModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function StatusCheckModal({
  isOpen,
  onClose,
}: StatusCheckModalProps) {
  const [reference, setReference] = useState("");
  const [passport, setPassport] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await axios.post("/apply-visa/check-status", {
        reference_number: reference,
        passport_number: passport,
      });

      if (response.data.found) {
        setResult(response.data);
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError("An error occurred while checking status. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "text-green-600 bg-green-50 border-green-200";
      case "rejected":
        return "text-red-600 bg-red-50 border-red-200";
      default:
        return "text-yellow-600 bg-yellow-50 border-yellow-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="w-12 h-12 text-green-500 mb-2" />;
      case "rejected":
        return <XCircle className="w-12 h-12 text-red-500 mb-2" />;
      default:
        return <Clock className="w-12 h-12 text-yellow-500 mb-2" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-scale-in relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Check Visa Status
            </h2>
            <p className="text-gray-500 mt-1">
              Enter your application details below
            </p>
          </div>

          {!result ? (
            <form onSubmit={handleCheck} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Reference Number
                </label>
                <input
                  type="text"
                  required
                  value={reference}
                  onChange={(e) => setReference(e.target.value)}
                  placeholder="e.g. BW-VISA-2026-XXXX"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0099cc] focus:border-[#0099cc] outline-none transition-all uppercase placeholder:normal-case"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Passport Number
                </label>
                <input
                  type="text"
                  required
                  value={passport}
                  onChange={(e) => setPassport(e.target.value)}
                  placeholder="Enter passport number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0099cc] focus:border-[#0099cc] outline-none transition-all uppercase placeholder:normal-case"
                />
              </div>

              {error && (
                <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm flex items-start">
                  <XCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-[#0099cc] hover:bg-[#0088bb] text-white rounded-lg font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />{" "}
                    Checking...
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5 mr-2" /> Check Status
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="text-center">
              <div className="flex flex-col items-center justify-center py-6">
                {getStatusIcon(result.status)}
                <h3 className="text-xl font-bold capitalize mt-2 text-gray-900">
                  Application{" "}
                  {result.status === "submitted" ? "Pending" : result.status}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  {result.applicant_name}
                </p>
                <p className="text-xs text-gray-400">
                  Submitted on {result.submitted_at}
                </p>
              </div>

              <div
                className={`p-4 rounded-xl border mb-6 ${getStatusColor(result.status)}`}
              >
                <p className="text-sm font-medium">
                  {result.status === "approved"
                    ? "Congratulations! Your visa has been approved."
                    : result.status === "rejected"
                      ? "We regret to inform you that your application was not successful."
                      : "Your application is currently under review by our officers."}
                </p>
              </div>

              {result.status === "approved" && (
                <a
                  href={`/apply-visa/${reference}/pdf`}
                  target="_blank"
                  className="block w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold shadow-md transition-all flex items-center justify-center mb-3"
                >
                  <Download className="w-5 h-5 mr-2" /> Download Visa PDF
                </a>
              )}

              <button
                onClick={() => setResult(null)}
                className="text-gray-500 hover:text-gray-700 font-medium text-sm hover:underline"
              >
                Check another application
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
