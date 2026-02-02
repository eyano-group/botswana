import React from "react";
import { Check, X, Download } from "lucide-react";
import { Dialog, DialogContent } from "@radix-ui/react-dialog";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  referenceNumber: string;
}

export default function SuccessModal({
  isOpen,
  onClose,
  referenceNumber,
}: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-scale-in">
        {/* Header */}
        <div className="bg-green-600 p-6 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
            <Check className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white">
            Application Submitted!
          </h2>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          <div className="text-center space-y-2">
            <p className="text-gray-600">
              Your visa application has been successfully received.
            </p>
            <div className="bg-gray-100 py-3 rounded-lg border border-gray-200">
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Reference Number
              </p>
              <p className="text-xl font-mono font-bold text-[#0099cc]">
                {referenceNumber}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900 border-b pb-2">
              What happens next?
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-600 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                  1
                </span>
                You will receive a confirmation email shortly.
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-600 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                  2
                </span>
                Our immigration officers will review your application.
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-600 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                  3
                </span>
                Processing usually takes{" "}
                <span className="font-semibold">5-7 business days</span>.
              </li>
            </ul>
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <a
              href={`/apply-visa/${referenceNumber}/pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-medium transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4 mr-2" /> Download Summary
            </a>
            <button
              onClick={onClose}
              className="w-full px-4 py-3 bg-[#0099cc] hover:bg-[#0088bb] text-white rounded-lg font-medium transition-colors"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
