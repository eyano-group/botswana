import React, { useState } from "react";
import { Head, Link } from "@inertiajs/react";
import {
  Search,
  CheckCircle,
  Clock,
  XCircle,
  Download,
  Loader2,
  ShieldCheck,
  ArrowRight,
  UserCog,
} from "lucide-react";
import axios from "axios";
import GuestLayout from "@/layouts/GuestLayout"; // Assuming a GuestLayout exists or using a default layout wrapper

export default function CheckStatus() {
  const [reference, setReference] = useState("");
  const [passport, setPassport] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");

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
      setError("An error occurred. Please check your details and try again.");
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
        return "text-amber-600 bg-amber-50 border-amber-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="w-16 h-16 text-green-500 mb-4" />;
      case "rejected":
        return <XCircle className="w-16 h-16 text-red-500 mb-4" />;
      default:
        return <Clock className="w-16 h-16 text-amber-500 mb-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-blue-100 selection:text-blue-900 relative overflow-hidden">
      <Head title="Check Visa Status" />

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#0099cc] to-blue-600 rounded-b-[50px] shadow-2xl overflow-hidden z-0">
        <div className="absolute inset-0 opacity-10 bg-[url('/assets/images/pattern.png')]"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-screen">
        {/* Header Section */}
        <div className="text-center mb-10 animate-fade-in-up">
          <div className="inline-flex items-center justify-center p-3 bg-white/20 backdrop-blur-md rounded-full mb-6 shadow-lg border border-white/30">
            <ShieldCheck className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-md">
            Visa Application Status
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Track your journey to Botswana. Enter your details below to see the
            current status of your application.
          </p>
        </div>

        {/* Main Card */}
        <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 animate-scale-in transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
          <div className="p-8 md:p-10">
            {!result ? (
              <form onSubmit={handleCheck} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                    Reference Number
                  </label>
                  <div className="relative group">
                    <input
                      type="text"
                      required
                      value={reference}
                      onChange={(e) => setReference(e.target.value)}
                      placeholder="e.g. BW-VISA-2026-XXXX"
                      className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-[#0099cc] outline-none transition-all font-medium text-gray-800 placeholder:text-gray-400 uppercase"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400 group-focus-within:text-[#0099cc] transition-colors">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                    Passport Number
                  </label>
                  <div className="relative group">
                    <input
                      type="text"
                      required
                      value={passport}
                      onChange={(e) => setPassport(e.target.value)}
                      placeholder="Enter passport number"
                      className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-[#0099cc] outline-none transition-all font-medium text-gray-800 placeholder:text-gray-400 uppercase"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400 group-focus-within:text-[#0099cc] transition-colors">
                      <UserCog className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {error && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm flex items-center animate-shake">
                    <XCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#0099cc] hover:bg-[#0088bb] text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center group"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-6 h-6 mr-2 animate-spin" />
                      Wait a moment...
                    </>
                  ) : (
                    <>
                      Track Status{" "}
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center animate-fade-in">
                <div className="flex flex-col items-center justify-center py-4">
                  <div className="mb-4 transform transition-all duration-500 hover:scale-110">
                    {getStatusIcon(result.status)}
                  </div>
                  <h3 className="text-2xl font-bold capitalize mb-2 text-gray-900">
                    Application {result.status}
                  </h3>
                  <div className="flex items-center justify-center space-x-2 text-gray-500 mb-6">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-mono font-medium">
                      #{reference}
                    </span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span className="text-sm">
                      Submitted {result.submitted_at}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-8 max-w-xs mx-auto">
                    {result.applicant_name}
                  </p>
                </div>

                <div
                  className={`p-6 rounded-2xl border mb-8 text-center ${getStatusColor(result.status)}`}
                >
                  <p className="font-semibold text-lg">
                    {result.status === "approved"
                      ? "Congratulations! Your visa is ready."
                      : result.status === "rejected"
                        ? "Action Required on your application."
                        : "Your application is currently being processed."}
                  </p>
                  {result.status === "approved" && (
                    <p className="text-sm mt-2 opacity-80">
                      You can download your official document below.
                    </p>
                  )}
                </div>

                {result.status === "approved" && (
                  <a
                    href={`/apply-visa/${reference}/pdf`}
                    target="_blank"
                    className="block w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold shadow-lg hover:shadow-green-200/50 transition-all flex items-center justify-center mb-4 transform hover:-translate-y-1"
                  >
                    <Download className="w-5 h-5 mr-2" /> Download Visa Document
                    (PDF)
                  </a>
                )}

                <button
                  onClick={() => setResult(null)}
                  className="text-gray-500 hover:text-[#0099cc] font-medium text-sm hover:underline transition-colors"
                >
                  Check another application
                </button>
              </div>
            )}
          </div>

          {/* Footer Area of Card */}
          <div className="bg-gray-50 p-6 border-t border-gray-100 flex justify-between items-center">
            <Link
              href="/"
              className="text-sm text-gray-500 hover:text-gray-800 font-medium flex items-center transition-colors"
            >
              <ArrowRight className="w-4 h-4 mr-1 rotate-180" /> Back to Home
            </Link>

            <Link
              href="/admin/dashboard"
              className="text-sm text-[#0099cc]/80 hover:text-[#0099cc] font-medium flex items-center transition-colors px-3 py-1.5 rounded-lg hover:bg-blue-50"
            >
              <UserCog className="w-4 h-4 mr-1.5" /> Admin Access
            </Link>
          </div>
        </div>

        <p className="mt-8 text-white/60 text-sm font-medium">
          © 2026 Republic of Botswana. All Rights Reserved.
        </p>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-fade-in { animation: fadeIn 0.5s ease-out; }
        .animate-fade-in-up { animation: fadeInUp 0.7s ease-out; }
        .animate-scale-in { animation: scaleIn 0.5s ease-out; }
        .animate-shake { animation: shake 0.4s ease-in-out; }
      `}</style>
    </div>
  );
}
