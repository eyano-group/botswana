import React from 'react';
import { CheckCircle2, Download, Copy, Mail, Clock, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  referenceNumber: string;
  applicantName?: string;
  applicantEmail?: string;
}

export default function SuccessModal({ isOpen, onClose, referenceNumber, applicantName, applicantEmail }: Props) {
  if (!isOpen) return null;

  const copyRef = () => {
    navigator.clipboard.writeText(referenceNumber).catch(() => {});
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
      style={{ animation: 'fadeIn 0.25s ease-out' }}>
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden"
        style={{ animation: 'scaleIn 0.3s ease-out' }}>

        {/* Hero header */}
        <div className="relative bg-gradient-to-br from-emerald-600 to-teal-700 px-8 py-10 text-center overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/10 rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full" />

          {/* Coat of arms placeholder */}
          <div className="relative mx-auto mb-4 w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm ring-4 ring-white/30">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>

          <p className="text-emerald-100 text-xs font-semibold uppercase tracking-widest mb-1 relative">
            Republic of Botswana
          </p>
          <h2 className="text-2xl font-bold text-white relative">
            Application Received
          </h2>
          <p className="text-emerald-200 text-sm mt-1 relative">
            Department of Immigration & Civil Registration
          </p>
        </div>

        {/* Body */}
        <div className="px-8 py-7 space-y-6">
          {applicantName && (
            <p className="text-gray-700 text-sm leading-relaxed">
              Dear <strong>{applicantName}</strong>,<br />
              Your e-Visa application has been successfully submitted and is now under review.
              {applicantEmail && <> A confirmation has been sent to <strong>{applicantEmail}</strong>.</>}
            </p>
          )}

          {/* Reference card */}
          <div className="rounded-2xl bg-gradient-to-br from-gray-50 to-emerald-50/40 border border-emerald-100 p-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Your Reference Number</p>
            <div className="flex items-center justify-between gap-3">
              <span className="text-2xl font-mono font-bold text-emerald-700 tracking-wider">{referenceNumber}</span>
              <button
                onClick={copyRef}
                title="Copy reference number"
                className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-colors"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">Keep this number to track your application status.</p>
          </div>

          {/* Next steps */}
          <div className="space-y-3">
            {[
              { icon: Mail, label: 'Confirmation email sent to your inbox', color: 'emerald' },
              { icon: Clock, label: 'Processing takes 5–7 business days', color: 'blue' },
              { icon: ArrowRight, label: 'Track status at immigration.gov.bw', color: 'violet' },
            ].map(({ icon: Icon, label, color }, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
                <div className={cn('w-8 h-8 rounded-xl flex items-center justify-center shrink-0', `bg-${color}-50`)}>
                  <Icon className={cn('w-4 h-4', `text-${color}-500`)} />
                </div>
                {label}
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 pt-1">
            <a
              href={`/apply-visa/${referenceNumber}/pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 border border-gray-200 text-gray-700 rounded-2xl text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              <Download className="w-4 h-4" /> Download Acknowledgement (PDF)
            </a>
            <button
              onClick={onClose}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl text-sm font-bold shadow-lg shadow-emerald-200 transition-all hover:-translate-y-0.5"
            >
              Return to Home
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-400">
            Government of Botswana · immigration.gov.bw · +267 368 8000
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn  { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.92) translateY(12px); } to { opacity: 1; transform: scale(1) translateY(0); } }
      `}</style>
    </div>
  );
}
