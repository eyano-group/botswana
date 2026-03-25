import React from 'react';
import { Check, User, FileText, Globe, ScanLine, Paperclip, ClipboardList } from 'lucide-react';
import { cn } from '@/lib/utils';

const STEP_META = [
  { label: 'Personal Info',    icon: User },
  { label: 'Passport',         icon: FileText },
  { label: 'Visa Details',     icon: Globe },
  { label: 'AI Verification',  icon: ScanLine },
  { label: 'Documents',        icon: Paperclip },
  { label: 'Review',           icon: ClipboardList },
];

interface Props {
  currentStep: number; // 1-indexed
  steps: string[];
}

export default function StepIndicator({ currentStep, steps }: Props) {
  return (
    <div className="w-full">
      {/* Desktop: horizontal row */}
      <div className="hidden sm:flex items-center justify-between relative">
        {/* connector line */}
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200 z-0" />
        <div
          className="absolute top-5 left-0 h-0.5 bg-emerald-500 z-0 transition-all duration-700"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        />

        {steps.map((_, i) => {
          const stepNum = i + 1;
          const Icon = STEP_META[i]?.icon || Check;
          const isDone = currentStep > stepNum;
          const isActive = currentStep === stepNum;
          return (
            <div key={i} className="flex flex-col items-center z-10">
              <div
                className={cn(
                  'w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ring-4 transition-all duration-300',
                  isDone   && 'bg-emerald-500 text-white ring-emerald-100',
                  isActive && 'bg-white text-emerald-600 ring-emerald-300 shadow-lg shadow-emerald-100 scale-110',
                  !isDone && !isActive && 'bg-white text-gray-400 ring-gray-100'
                )}
              >
                {isDone ? <Check className="w-5 h-5" /> : <Icon className="w-4 h-4" />}
              </div>
              <span
                className={cn(
                  'mt-2 text-xs font-medium transition-colors',
                  isActive && 'text-emerald-700',
                  isDone   && 'text-emerald-500',
                  !isDone && !isActive && 'text-gray-400'
                )}
              >
                {STEP_META[i]?.label || steps[i]}
              </span>
            </div>
          );
        })}
      </div>

      {/* Mobile: compact pill */}
      <div className="sm:hidden flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center text-white text-sm font-bold shrink-0">
          {currentStep}
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-gray-800">
            Step {currentStep} of {steps.length}: {STEP_META[currentStep - 1]?.label}
          </p>
          <div className="mt-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 rounded-full transition-all duration-500"
              style={{ width: `${(currentStep / steps.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
