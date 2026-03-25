import React from 'react';
import { User, Mail, Phone, Flag, CreditCard, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
  data: any;
  errors: any;
  setData: (field: string, value: any) => void;
}

function Field({
  label, icon: Icon, error, children
}: {
  label: string; icon?: any; error?: string; children: React.ReactNode
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-gray-700 flex items-center gap-1.5">
        {Icon && <Icon className="w-3.5 h-3.5 text-emerald-500" />}
        {label} <span className="text-red-500">*</span>
      </label>
      {children}
      {error && <p className="text-xs text-red-500 flex items-center gap-1">⚠ {error}</p>}
    </div>
  );
}

function Input({ error, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { error?: string }) {
  return (
    <input
      {...props}
      className={cn(
        'w-full px-4 py-3 rounded-xl border text-sm text-gray-900 placeholder-gray-400 outline-none transition-all duration-200',
        'focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100',
        error ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white hover:border-gray-300'
      )}
    />
  );
}

const NATIONALITIES = [
  'Afghan','Albanian','Algerian','American','Angolan','Argentine',
  'Australian','Austrian','Bangladeshi','Belgian','Botswanan','Brazilian',
  'British','Canadian','Chinese','Colombian','Congolese','Croatian',
  'Danish','Dutch','Egyptian','Ethiopian','Finnish','French','German',
  'Ghanaian','Greek','Hungarian','Indian','Indonesian','Iranian','Iraqi',
  'Irish','Israeli','Italian','Japanese','Kenyan','Korean','Lebanese',
  'Malawian','Malaysian','Mexican','Moroccan','Mozambican','Namibian',
  'Nigerian','Norwegian','Pakistani','Peruvian','Philippine','Polish',
  'Portuguese','Romanian','Russian','Saudi','Senegalese','South African',
  'Spanish','Sri Lankan','Sudanese','Swedish','Swiss','Tanzanian',
  'Thai','Tunisian','Turkish','Ugandan','Ukrainian','Zimbabwean',
].sort();

export default function PersonalInfoStep({ data, errors, setData }: Props) {
  return (
    <div className="space-y-6">
      <div className="text-center pb-2">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-50 rounded-2xl mb-3">
          <User className="w-6 h-6 text-emerald-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Personal Information</h3>
        <p className="text-sm text-gray-500 mt-1">Enter your details exactly as they appear on your travel document.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="First Name" icon={User} error={errors.first_name}>
          <Input
            type="text"
            placeholder="John"
            value={data.first_name}
            onChange={e => setData('first_name', e.target.value)}
            error={errors.first_name}
          />
        </Field>

        <Field label="Middle Name (Optional)" icon={User}>
          <Input
            type="text"
            placeholder="Michael"
            value={data.middle_name}
            onChange={e => setData('middle_name', e.target.value)}
          />
        </Field>

        <Field label="Last Name" icon={User} error={errors.last_name}>
          <Input
            type="text"
            placeholder="Doe"
            value={data.last_name}
            onChange={e => setData('last_name', e.target.value)}
            error={errors.last_name}
          />
        </Field>

        <Field label="Date of Birth" icon={Calendar} error={errors.date_of_birth}>
          <Input
            type="date"
            value={data.date_of_birth}
            onChange={e => setData('date_of_birth', e.target.value)}
            error={errors.date_of_birth}
          />
        </Field>

        <Field label="Email Address" icon={Mail} error={errors.email}>
          <Input
            type="email"
            placeholder="john@example.com"
            value={data.email}
            onChange={e => setData('email', e.target.value)}
            error={errors.email}
          />
        </Field>

        <Field label="Phone Number" icon={Phone} error={errors.phone}>
          <Input
            type="tel"
            placeholder="+267 71 234 567"
            value={data.phone}
            onChange={e => setData('phone', e.target.value)}
            error={errors.phone}
          />
        </Field>
      </div>

      <Field label="Nationality" icon={Flag} error={errors.nationality}>
        <select
          value={data.nationality}
          onChange={e => setData('nationality', e.target.value)}
          className={cn(
            'w-full px-4 py-3 rounded-xl border text-sm text-gray-900 outline-none transition-all duration-200',
            'focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100',
            errors.nationality ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'
          )}
        >
          <option value="">Select nationality...</option>
          {NATIONALITIES.map(n => <option key={n} value={n}>{n}</option>)}
        </select>
      </Field>

      <div className="rounded-xl bg-blue-50 border border-blue-100 p-4 flex gap-3">
        <div className="text-blue-400 text-lg mt-0.5">ℹ</div>
        <p className="text-sm text-blue-700">Names must match <strong>exactly</strong> as written in your passport. In the next step you'll enter your passport number and expiry date.</p>
      </div>
    </div>
  );
}
