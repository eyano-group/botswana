import React, { useState } from 'react';
import { ClipboardList, Edit2, CheckCircle2, User, FileText, Globe, ScanLine, Paperclip, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
  data: any;
  onEdit: (step: number) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}

function Section({ title, icon: Icon, step, onEdit, children }: {
  title: string; icon: any; step: number; onEdit: (n: number) => void; children: React.ReactNode;
}) {
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3.5 bg-gray-50 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-emerald-500" />
          <span className="text-sm font-semibold text-gray-700">{title}</span>
        </div>
        <button
          type="button"
          onClick={() => onEdit(step)}
          className="flex items-center gap-1.5 text-xs text-emerald-600 hover:text-emerald-800 hover:bg-emerald-50 px-2.5 py-1.5 rounded-lg transition-colors font-medium"
        >
          <Edit2 className="w-3 h-3" /> Edit
        </button>
      </div>
      <div className="px-5 py-4 grid grid-cols-2 gap-x-8 gap-y-3">
        {children}
      </div>
    </div>
  );
}

function Item({ label, value }: { label: string; value?: string }) {
  return (
    <div>
      <p className="text-xs text-gray-400 font-medium">{label}</p>
      <p className="text-sm text-gray-800 font-semibold mt-0.5">{value || <span className="text-gray-300 font-normal">—</span>}</p>
    </div>
  );
}

const VISA_LABELS: Record<string, string> = {
  tourist: 'Tourist', business: 'Business', student: 'Student', work: 'Work', transit: 'Transit'
};

export default function ReviewStep({ data, onEdit, onSubmit, isSubmitting }: Props) {
  const [agreed, setAgreed] = useState(false);

  const fullName = [data.first_name, data.middle_name, data.last_name].filter(Boolean).join(' ');

  return (
    <div className="space-y-6">
      <div className="text-center pb-2">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-50 rounded-2xl mb-3">
          <ClipboardList className="w-6 h-6 text-emerald-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Review Your Application</h3>
        <p className="text-sm text-gray-500 mt-1">Please verify all information before submitting.</p>
      </div>

      <Section title="Personal Information" icon={User} step={1} onEdit={onEdit}>
        <Item label="Full Name" value={fullName} />
        <Item label="Date of Birth" value={data.date_of_birth} />
        <Item label="Email" value={data.email} />
        <Item label="Phone" value={data.phone} />
        <Item label="Nationality" value={data.nationality} />
      </Section>

      <Section title="Passport Details" icon={FileText} step={2} onEdit={onEdit}>
        <Item label="Passport Number" value={data.passport_number} />
        <Item label="Issuing Country" value={data.issuing_country} />
        <Item label="Issue Date" value={data.issue_date} />
        <Item label="Expiry Date" value={data.expiry_date} />
      </Section>

      <Section title="Visa Information" icon={Globe} step={3} onEdit={onEdit}>
        <Item label="Visa Type" value={VISA_LABELS[data.visa_type] || data.visa_type} />
        <Item label="Arrival Date" value={data.arrival_date} />
        <Item label="Departure Date" value={data.departure_date} />
        <Item label="Accommodation" value={data.accommodation} />
      </Section>

      <Section title="AI Verification" icon={ScanLine} step={4} onEdit={onEdit}>
        <div className="col-span-2">
          {data.passport_file_path ? (
            <div className="flex items-center gap-2 text-sm text-emerald-700">
              <CheckCircle2 className="w-4 h-4" />
              Passport scanned and verified successfully
            </div>
          ) : (
            <div className="flex items-center gap-2 text-sm text-amber-700">
              <span className="text-amber-500">⚠</span> No passport uploaded yet
            </div>
          )}
        </div>
      </Section>

      <Section title="Documents" icon={Paperclip} step={5} onEdit={onEdit}>
        <div className="col-span-2 text-sm text-gray-500">
          {data.supporting_documents?.length > 0
            ? `${data.supporting_documents.length} document(s) attached`
            : 'No additional documents uploaded (optional)'}
        </div>
      </Section>

      {/* Declaration */}
      <div className="rounded-2xl bg-gray-50 border border-gray-200 p-5">
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className={cn(
            'mt-0.5 w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-all',
            agreed ? 'bg-emerald-500 border-emerald-500' : 'border-gray-300 bg-white group-hover:border-emerald-300'
          )}>
            {agreed && <span className="text-white text-xs font-bold">✓</span>}
          </div>
          <input type="checkbox" className="sr-only" checked={agreed} onChange={e => setAgreed(e.target.checked)} />
          <p className="text-sm text-gray-600 leading-relaxed">
            I declare that all information provided in this application is <strong className="text-gray-800">true, accurate, and complete</strong> to the best of my knowledge. I understand that providing false information may result in refusal or cancellation of my visa.
          </p>
        </label>
      </div>

      <button
        type="button"
        onClick={onSubmit}
        disabled={!agreed || isSubmitting}
        className={cn(
          'w-full py-4 rounded-2xl text-white font-bold text-base transition-all duration-200 flex items-center justify-center gap-3',
          agreed && !isSubmitting
            ? 'bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-200 hover:shadow-xl hover:-translate-y-0.5'
            : 'bg-gray-300 cursor-not-allowed'
        )}
      >
        {isSubmitting
          ? <><Loader2 className="w-5 h-5 animate-spin" /> Submitting Application...</>
          : <><CheckCircle2 className="w-5 h-5" /> Submit Application</>
        }
      </button>
    </div>
  );
}
