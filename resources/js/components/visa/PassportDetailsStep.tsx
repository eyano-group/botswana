import React from 'react';
import { FileText, Hash, Globe, Calendar, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
  data: any;
  errors: any;
  setData: (field: string, value: any) => void;
}

function Field({ label, icon: Icon, error, hint, children }: {
  label: string; icon?: any; error?: string; hint?: string; children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-gray-700 flex items-center gap-1.5">
        {Icon && <Icon className="w-3.5 h-3.5 text-emerald-500" />}
        {label} <span className="text-red-500">*</span>
      </label>
      {children}
      {hint && !error && <p className="text-xs text-gray-400">{hint}</p>}
      {error && <p className="text-xs text-red-500">⚠ {error}</p>}
    </div>
  );
}

function Input({ error, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { error?: string }) {
  return (
    <input
      {...props}
      className={cn(
        'w-full px-4 py-3 rounded-xl border text-sm text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 uppercase tracking-wide',
        'focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100',
        error ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white hover:border-gray-300'
      )}
    />
  );
}

const COUNTRIES = [
  'Afghanistan','Albania','Algeria','Angola','Argentina','Australia','Austria',
  'Bangladesh','Belgium','Botswana','Brazil','Canada','China','Colombia',
  'Congo','Croatia','Denmark','Egypt','Ethiopia','Finland','France','Germany',
  'Ghana','Greece','Hungary','India','Indonesia','Iran','Iraq','Ireland',
  'Israel','Italy','Japan','Kenya','South Korea','Lebanon','Malawi','Malaysia',
  'Mexico','Morocco','Mozambique','Namibia','Nigeria','Norway','Pakistan',
  'Peru','Philippines','Poland','Portugal','Romania','Russia','Saudi Arabia',
  'Senegal','South Africa','Spain','Sri Lanka','Sudan','Sweden','Switzerland',
  'Tanzania','Thailand','Tunisia','Turkey','Uganda','Ukraine','United Kingdom',
  'United States','Zimbabwe',
].sort();

export default function PassportDetailsStep({ data, errors, setData }: Props) {
  return (
    <div className="space-y-6">
      <div className="text-center pb-2">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-50 rounded-2xl mb-3">
          <FileText className="w-6 h-6 text-emerald-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Passport Details</h3>
        <p className="text-sm text-gray-500 mt-1">Enter details from your passport bio-data page.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field
          label="Passport Number"
          icon={Hash}
          error={errors.passport_number}
          hint="Usually 6–9 alphanumeric characters"
        >
          <Input
            type="text"
            placeholder="A12345678"
            value={data.passport_number}
            onChange={e => setData('passport_number', e.target.value.toUpperCase())}
            error={errors.passport_number}
          />
        </Field>

        <Field label="Issuing Country" icon={Globe} error={errors.issuing_country}>
          <select
            value={data.issuing_country || ''}
            onChange={e => setData('issuing_country', e.target.value)}
            className={cn(
              'w-full px-4 py-3 rounded-xl border text-sm text-gray-900 outline-none transition-all duration-200',
              'focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100',
              errors.issuing_country ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'
            )}
          >
            <option value="">Select country...</option>
            {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </Field>

        <Field label="Date of Issue" icon={Calendar} error={errors.issue_date}>
          <Input
            type="date"
            value={data.issue_date || ''}
            onChange={e => setData('issue_date', e.target.value)}
            error={errors.issue_date}
            className="normal-case tracking-normal"
          />
        </Field>

        <Field
          label="Expiry Date"
          icon={Calendar}
          error={errors.expiry_date}
          hint="Passport must be valid for at least 6 months"
        >
          <Input
            type="date"
            value={data.expiry_date || ''}
            onChange={e => setData('expiry_date', e.target.value)}
            error={errors.expiry_date}
            min={new Date().toISOString().split('T')[0]}
            className="normal-case tracking-normal"
          />
        </Field>
      </div>

      {/* Validity check */}
      {data.expiry_date && (() => {
        const months = (new Date(data.expiry_date).getTime() - Date.now()) / (1000 * 60 * 60 * 24 * 30);
        if (months < 6) return (
          <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 flex gap-3">
            <span className="text-amber-500 text-lg">⚠</span>
            <div>
              <p className="text-sm font-semibold text-amber-800">Passport expires soon</p>
              <p className="text-xs text-amber-700 mt-0.5">
                Your passport expires in approximately {Math.round(months)} months. Botswana requires at least 6 months validity.
              </p>
            </div>
          </div>
        );
        return null;
      })()}

      <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-4 flex gap-3">
        <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
        <p className="text-sm text-emerald-800">
          This information will be automatically verified against your uploaded passport in the AI Verification step.
        </p>
      </div>
    </div>
  );
}
