import React, { useState } from 'react';
import { Globe, Calendar, MapPin, Briefcase, GraduationCap, Plane, UserCheck, Building } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
  data: any;
  errors: any;
  setData: (field: string, value: any) => void;
}

const VISA_TYPES = [
  {
    id: 'tourist',
    label: 'Tourist',
    description: 'Leisure & sightseeing',
    icon: Plane,
    color: 'sky',
  },
  {
    id: 'business',
    label: 'Business',
    description: 'Meetings & conferences',
    icon: Briefcase,
    color: 'violet',
  },
  {
    id: 'student',
    label: 'Student',
    description: 'Academic study',
    icon: GraduationCap,
    color: 'amber',
  },
  {
    id: 'work',
    label: 'Work',
    description: 'Employment',
    icon: UserCheck,
    color: 'emerald',
  },
  {
    id: 'transit',
    label: 'Transit',
    description: 'Passing through',
    icon: Building,
    color: 'gray',
  },
];

const DYNAMIC_FIELDS: Record<string, { label: string; placeholder: string; key: string }[]> = {
  tourist: [
    { label: 'Tour Itinerary / Places to Visit', placeholder: 'e.g. Chobe, Okavango, Maun...', key: 'tour_itinerary' },
  ],
  business: [
    { label: 'Company Name', placeholder: 'Your employer / sponsoring company', key: 'company_name' },
    { label: 'Business Activity', placeholder: 'Describe the business purpose', key: 'business_activity' },
    { label: 'Local Contact / Host Company', placeholder: 'Name and address of Botswana counterpart', key: 'local_contact' },
  ],
  student: [
    { label: 'Institution Name', placeholder: 'University or college name', key: 'institution_name' },
    { label: 'Course / Programme', placeholder: 'e.g. BSc Computer Science', key: 'programme' },
    { label: 'Duration of Study', placeholder: 'e.g. 4 years', key: 'study_duration' },
  ],
  work: [
    { label: 'Employer Name', placeholder: 'Name of company in Botswana', key: 'employer_name' },
    { label: 'Job Title', placeholder: 'Your position', key: 'job_title' },
    { label: 'Work Permit Number (if applicable)', placeholder: 'e.g. WP/2025/XXXX', key: 'work_permit' },
  ],
  transit: [
    { label: 'Destination Country', placeholder: 'Final destination', key: 'destination_country' },
    { label: 'Onward Flight Number', placeholder: 'e.g. BW220', key: 'onward_flight' },
  ],
};

function InputField({ label, placeholder, value, onChange, error }: {
  label: string; placeholder: string; value: string;
  onChange: (v: string) => void; error?: string;
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        className={cn(
          'w-full px-4 py-3 rounded-xl border text-sm text-gray-900 placeholder-gray-400 outline-none transition-all',
          'focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100',
          error ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'
        )}
      />
      {error && <p className="text-xs text-red-500">⚠ {error}</p>}
    </div>
  );
}

export default function VisaDetailsStep({ data, errors, setData }: Props) {
  const selectedType = data.visa_type || 'tourist';
  const dynamicFields = DYNAMIC_FIELDS[selectedType] || [];

  return (
    <div className="space-y-7">
      <div className="text-center pb-2">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-50 rounded-2xl mb-3">
          <Globe className="w-6 h-6 text-emerald-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Visa Information</h3>
        <p className="text-sm text-gray-500 mt-1">Select your visa type — additional fields will appear automatically.</p>
      </div>

      {/* Visa type cards */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">Visa Type <span className="text-red-500">*</span></label>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {VISA_TYPES.map(vt => {
            const Icon = vt.icon;
            const isSelected = selectedType === vt.id;
            return (
              <button
                key={vt.id}
                type="button"
                onClick={() => setData('visa_type', vt.id)}
                className={cn(
                  'relative flex flex-col items-center p-4 rounded-2xl border-2 text-center transition-all duration-200 cursor-pointer group',
                  isSelected
                    ? 'border-emerald-500 bg-emerald-50 shadow-md shadow-emerald-100 scale-105'
                    : 'border-gray-200 bg-white hover:border-emerald-300 hover:bg-emerald-50/50'
                )}
              >
                <div className={cn(
                  'w-10 h-10 rounded-xl flex items-center justify-center mb-2 transition-colors',
                  isSelected ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-emerald-100 group-hover:text-emerald-600'
                )}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={cn('text-xs font-bold block', isSelected ? 'text-emerald-700' : 'text-gray-700')}>
                  {vt.label}
                </span>
                <span className="text-xs text-gray-400 mt-0.5 leading-tight">{vt.description}</span>
                {isSelected && (
                  <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-[8px] font-bold">✓</span>
                  </span>
                )}
              </button>
            );
          })}
        </div>
        {errors.visa_type && <p className="text-xs text-red-500 mt-1">⚠ {errors.visa_type}</p>}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-emerald-500" /> Intended Arrival Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            value={data.arrival_date}
            onChange={e => setData('arrival_date', e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            className={cn(
              'w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all',
              'focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100',
              errors.arrival_date ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'
            )}
          />
          {errors.arrival_date && <p className="text-xs text-red-500">⚠ {errors.arrival_date}</p>}
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-emerald-500" /> Intended Departure Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            value={data.departure_date}
            onChange={e => setData('departure_date', e.target.value)}
            min={data.arrival_date || new Date().toISOString().split('T')[0]}
            className={cn(
              'w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all',
              'focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100',
              errors.departure_date ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'
            )}
          />
          {errors.departure_date && <p className="text-xs text-red-500">⚠ {errors.departure_date}</p>}
        </div>
      </div>

      {/* Purpose */}
      <div className="space-y-1.5">
        <label className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
          <Briefcase className="w-3.5 h-3.5 text-emerald-500" /> Purpose of Visit <span className="text-red-500">*</span>
        </label>
        <textarea
          value={data.purpose}
          onChange={e => setData('purpose', e.target.value)}
          rows={3}
          placeholder="Briefly describe the purpose of your visit..."
          className={cn(
            'w-full px-4 py-3 rounded-xl border text-sm text-gray-900 placeholder-gray-400 outline-none transition-all resize-none',
            'focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100',
            errors.purpose ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'
          )}
        />
        {errors.purpose && <p className="text-xs text-red-500">⚠ {errors.purpose}</p>}
      </div>

      {/* Accommodation */}
      <div className="space-y-1.5">
        <label className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-emerald-500" /> Accommodation in Botswana <span className="text-red-500">*</span>
        </label>
        <textarea
          value={data.accommodation}
          onChange={e => setData('accommodation', e.target.value)}
          rows={2}
          placeholder="Hotel name and address, or host's name and address..."
          className={cn(
            'w-full px-4 py-3 rounded-xl border text-sm text-gray-900 placeholder-gray-400 outline-none transition-all resize-none',
            'focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100',
            errors.accommodation ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'
          )}
        />
        {errors.accommodation && <p className="text-xs text-red-500">⚠ {errors.accommodation}</p>}
      </div>

      {/* Dynamic fields per visa type */}
      {dynamicFields.length > 0 && (
        <div
          className="space-y-5 rounded-2xl border border-emerald-100 bg-emerald-50/50 p-5"
          style={{ animation: 'fadeSlideIn 0.3s ease-out' }}
        >
          <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
            Additional {selectedType} visa requirements
          </p>
          {dynamicFields.map(f => (
            <InputField
              key={f.key}
              label={f.label}
              placeholder={f.placeholder}
              value={data[f.key] || ''}
              onChange={v => setData(f.key, v)}
            />
          ))}
        </div>
      )}

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
