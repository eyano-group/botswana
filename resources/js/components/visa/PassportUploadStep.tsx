import React, { useState, useRef } from 'react';
import {
  Upload, X, CheckCircle2, AlertTriangle, XCircle,
  FileText, RotateCcw, ShieldCheck, ScanLine, Zap
} from 'lucide-react';
import axios from 'axios';
import { cn } from '@/lib/utils';

interface Props {
  data: any;
  setData: (field: string, value: any) => void;
  onVerificationComplete: (isValid: boolean) => void;
}

type VerifStatus = 'idle' | 'uploading' | 'processing' | 'verified' | 'manual_review' | 'failed';

function ConfidenceRing({ score }: { score: number }) {
  const pct = Math.round(score * 100);
  const r = 40;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;
  const color = pct >= 90 ? '#10b981' : pct >= 70 ? '#f59e0b' : '#ef4444';

  return (
    <div className="flex flex-col items-center">
      <svg width="100" height="100" className="-rotate-90">
        <circle cx="50" cy="50" r={r} fill="none" stroke="#e5e7eb" strokeWidth="8" />
        <circle
          cx="50" cy="50" r={r} fill="none"
          stroke={color} strokeWidth="8"
          strokeDasharray={`${dash} ${circ}`}
          strokeLinecap="round"
          style={{ transition: 'stroke-dasharray 1s ease' }}
        />
      </svg>
      <div className="-mt-16 flex flex-col items-center">
        <span className="text-2xl font-bold" style={{ color }}>{pct}%</span>
        <span className="text-xs text-gray-500 mt-0.5">Confidence</span>
      </div>
    </div>
  );
}

function MatchRow({ label, formVal, ocrVal, matched }: {
  label: string; formVal: string; ocrVal: string; matched: boolean;
}) {
  return (
    <div className="grid grid-cols-3 gap-2 py-2.5 border-b border-gray-100 last:border-0 text-sm">
      <span className="text-gray-500 font-medium">{label}</span>
      <span className={cn('font-mono text-center', matched ? 'text-gray-700' : 'text-red-600 line-through')}>{formVal || '—'}</span>
      <span className={cn('font-mono text-center', matched ? 'text-emerald-700' : 'text-emerald-600')}>{ocrVal || '—'}</span>
    </div>
  );
}

export default function PassportUploadStep({ data, setData, onVerificationComplete }: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [status, setStatus] = useState<VerifStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<any>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [scanPhase, setScanPhase] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const processFile = async (f: File) => {
    if (f.size > 5 * 1024 * 1024) { alert('Max file size is 5 MB'); return; }
    setFile(f);
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result as string);
    reader.readAsDataURL(f);
    await runVerification(f);
  };

  const runVerification = async (f: File) => {
    setStatus('uploading');
    setProgress(0);
    const phases = ['Uploading document...', 'Scanning with AI...', 'Extracting data fields...', 'Comparing with form data...'];
    let phase = 0;

    const phaseTimer = setInterval(() => {
      setScanPhase(phases[phase % phases.length]);
      phase++;
    }, 900);

    const fd = new FormData();
    fd.append('passport', f);

    try {
      const uploadRes = await axios.post('/apply-visa/upload-passport', fd, {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: e => {
          setProgress(Math.round((e.loaded * 100) / (e.total || 100)));
          setStatus('processing');
        },
      });

      const { temp_path, extracted_data } = uploadRes.data;
      setData('passport_file_path', temp_path);
      setData('ocr_data', extracted_data);

      const verifyRes = await axios.post('/apply-visa/verify-passport', {
        form_data: {
          first_name: data.first_name,
          last_name: data.last_name,
          passport_number: data.passport_number,
          date_of_birth: data.date_of_birth,
          nationality: data.nationality,
        },
        ocr_data: extracted_data,
      });

      clearInterval(phaseTimer);
      setResult(verifyRes.data);
      setStatus(verifyRes.data.status);
      onVerificationComplete(verifyRes.data.status === 'verified' || verifyRes.data.status === 'manual_review');
    } catch (err) {
      clearInterval(phaseTimer);
      setStatus('failed');
      setResult({ message: 'Failed to process document. Please use a clearer image.' });
      onVerificationComplete(false);
    }
  };

  const reset = () => {
    setFile(null); setPreview(null); setStatus('idle'); setResult(null);
    setData('passport_file_path', '');
    setData('ocr_data', null);
    if (fileRef.current) fileRef.current.value = '';
  };

  const statusConfig = {
    verified:      { color: 'emerald', Icon: CheckCircle2, label: 'Verified',        bg: 'bg-emerald-50 border-emerald-200' },
    manual_review: { color: 'amber',   Icon: AlertTriangle, label: 'Manual Review',  bg: 'bg-amber-50 border-amber-200' },
    failed:        { color: 'red',     Icon: XCircle,       label: 'Failed',         bg: 'bg-red-50 border-red-200' },
  }[status as 'verified' | 'manual_review' | 'failed'];

  return (
    <div className="space-y-6">
      <div className="text-center pb-2">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-50 rounded-2xl mb-3">
          <ScanLine className="w-6 h-6 text-emerald-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">AI Identity Verification</h3>
        <p className="text-sm text-gray-500 mt-1">Upload your passport bio-page — our AI will extract and verify your data.</p>
      </div>

      {!file ? (
        <div
          onDragOver={e => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={e => { e.preventDefault(); setIsDragging(false); if (e.dataTransfer.files[0]) processFile(e.dataTransfer.files[0]); }}
          onClick={() => fileRef.current?.click()}
          className={cn(
            'border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-200',
            isDragging
              ? 'border-emerald-500 bg-emerald-50 scale-[1.01]'
              : 'border-gray-300 bg-gray-50 hover:border-emerald-400 hover:bg-emerald-50/50'
          )}
        >
          <input ref={fileRef} type="file" className="hidden" accept=".jpg,.jpeg,.png,.pdf" onChange={e => e.target.files?.[0] && processFile(e.target.files[0])} />
          <div className="w-16 h-16 bg-emerald-100 text-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Upload className="w-8 h-8" />
          </div>
          <h4 className="text-base font-semibold text-gray-800">Drop your passport here</h4>
          <p className="text-sm text-gray-500 mt-1">or <span className="text-emerald-600 font-medium">browse files</span></p>
          <p className="text-xs text-gray-400 mt-3">JPEG, PNG or PDF · Max 5 MB · Clear, well-lit photo required</p>
          <div className="flex justify-center gap-4 mt-5 text-xs text-gray-400">
            <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-emerald-400" /> Instant extraction</span>
            <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-emerald-400" /> Encrypted transfer</span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left — image + progress */}
          <div className="relative rounded-2xl overflow-hidden bg-gray-100 group">
            {file.type.includes('image') ? (
              <img src={preview!} alt="Passport" className="w-full object-cover rounded-2xl" />
            ) : (
              <div className="h-52 flex flex-col items-center justify-center text-gray-400">
                <FileText className="w-16 h-16 mb-2" />
                <span className="text-sm">PDF Document</span>
              </div>
            )}
            <button onClick={reset} className="absolute top-3 right-3 p-2 bg-white/90 text-red-500 rounded-full shadow hover:bg-red-50 transition-colors">
              <X className="w-4 h-4" />
            </button>

            {/* Scanning overlay */}
            {(status === 'uploading' || status === 'processing') && (
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center rounded-2xl z-10 gap-4">
                {/* animated scan line */}
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 rounded-full border-4 border-emerald-200 animate-ping opacity-50" />
                  <div className="absolute inset-0 rounded-full border-4 border-t-emerald-500 animate-spin" />
                  <ScanLine className="absolute inset-0 m-auto w-7 h-7 text-emerald-600" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-800">{scanPhase}</p>
                  <div className="w-48 h-2 bg-gray-200 rounded-full mt-3 mx-auto overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right — result */}
          <div>
            {(status === 'verified' || status === 'manual_review' || status === 'failed') && statusConfig && result && (
              <div className={cn('rounded-2xl border p-5 space-y-5', statusConfig.bg)}>
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <statusConfig.Icon className={cn('w-5 h-5', `text-${statusConfig.color}-600`)} />
                    <span className={cn('font-bold', `text-${statusConfig.color}-800`)}>{statusConfig.label}</span>
                  </div>
                  <ConfidenceRing score={result.confidence ?? 1} />
                </div>

                <p className={cn('text-sm', `text-${statusConfig.color}-700`)}>{result.message}</p>

                {/* Match table */}
                {result.matches && Object.keys(result.matches).length > 0 && !result.is_demo && (
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="grid grid-cols-3 text-xs font-bold text-gray-400 mb-2 uppercase tracking-wide">
                      <span>Field</span><span className="text-center">You entered</span><span className="text-center">Passport read</span>
                    </div>
                    {Object.entries(result.matches).map(([key, m]: [string, any]) => (
                      <MatchRow
                        key={key}
                        label={key.replace('_', ' ')}
                        formVal={m.form_value}
                        ocrVal={m.ocr_value}
                        matched={m.match}
                      />
                    ))}
                  </div>
                )}

                {/* Demo mode indicator */}
                {result.is_demo && (
                  <div className="bg-white/60 rounded-xl p-3 text-xs text-gray-500 text-center">
                    🧪 Demo mode — all fields auto-verified
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-3">
                  {status === 'verified' && (
                    <button
                      onClick={() => onVerificationComplete(true)}
                      className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-semibold transition-colors"
                    >
                      Continue →
                    </button>
                  )}
                  {status === 'manual_review' && (
                    <button
                      onClick={() => onVerificationComplete(true)}
                      className="flex-1 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-sm font-semibold transition-colors"
                    >
                      Continue with Manual Review
                    </button>
                  )}
                  <button
                    onClick={reset}
                    className="px-4 py-2.5 border border-gray-300 text-gray-600 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Retry
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
