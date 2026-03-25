import React, { useState, useRef } from 'react';
import { Paperclip, Upload, X, FileText, Image, CheckCircle2, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DocFile {
  id: string;
  file: File;
  preview?: string;
  name: string;
  size: string;
}

const REQUIRED_DOCS = [
  { id: 'bank_statement', label: 'Bank Statement', hint: 'Last 3 months' },
  { id: 'invitation',     label: 'Invitation Letter', hint: 'If applicable' },
  { id: 'travel_itinerary', label: 'Travel Itinerary', hint: 'Flight bookings' },
  { id: 'photo',          label: 'Passport Photo', hint: '35×45mm, white background' },
];

function formatBytes(b: number): string {
  return b < 1024 * 1024 ? `${(b / 1024).toFixed(0)} KB` : `${(b / (1024 * 1024)).toFixed(1)} MB`;
}

function FileCard({ doc, onRemove }: { doc: DocFile; onRemove: () => void }) {
  const isImg = doc.file.type.startsWith('image/');
  return (
    <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-3 group">
      {isImg && doc.preview ? (
        <img src={doc.preview} alt="" className="w-10 h-10 rounded-lg object-cover shrink-0 border border-gray-100" />
      ) : (
        <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
          <FileText className="w-5 h-5 text-gray-400" />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-800 truncate">{doc.name}</p>
        <p className="text-xs text-gray-400">{doc.size}</p>
      </div>
      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
      <button onClick={onRemove} className="opacity-0 group-hover:opacity-100 p-1 text-red-400 hover:bg-red-50 rounded-lg transition-all">
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}

interface Props {
  data: any;
  setData: (field: string, value: any) => void;
}

export default function DocumentsStep({ data, setData }: Props) {
  const [docs, setDocs] = useState<DocFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const addFiles = (files: FileList | null) => {
    if (!files) return;
    Array.from(files).forEach(file => {
      if (file.size > 10 * 1024 * 1024) { alert(`${file.name} exceeds 10 MB`); return; }
      const id = Math.random().toString(36).substring(2);
      const newDoc: DocFile = { id, file, name: file.name, size: formatBytes(file.size) };
      if (file.type.startsWith('image/')) {
        const r = new FileReader();
        r.onloadend = () => {
          setDocs(prev => [...prev, { ...newDoc, preview: r.result as string }]);
        };
        r.readAsDataURL(file);
      } else {
        setDocs(prev => [...prev, newDoc]);
      }
    });
    // store file names in form data
    setData('supporting_documents', Array.from(files).map(f => f.name));
  };

  const removeDoc = (id: string) => setDocs(prev => prev.filter(d => d.id !== id));

  return (
    <div className="space-y-6">
      <div className="text-center pb-2">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-50 rounded-2xl mb-3">
          <Paperclip className="w-6 h-6 text-emerald-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Supporting Documents</h3>
        <p className="text-sm text-gray-500 mt-1">Upload your supporting files. All documents are encrypted in transit.</p>
      </div>

      {/* Required documents checklist */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {REQUIRED_DOCS.map(req => {
          const uploaded = docs.some(d => d.name.toLowerCase().includes(req.id.replace('_', '')));
          return (
            <div key={req.id} className={cn(
              'rounded-xl border p-3 text-center transition-all',
              uploaded ? 'bg-emerald-50 border-emerald-200' : 'bg-gray-50 border-gray-200'
            )}>
              {uploaded
                ? <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto mb-1" />
                : <AlertCircle className="w-5 h-5 text-gray-300 mx-auto mb-1" />
              }
              <p className={cn('text-xs font-semibold', uploaded ? 'text-emerald-700' : 'text-gray-600')}>{req.label}</p>
              <p className="text-xs text-gray-400 mt-0.5">{req.hint}</p>
            </div>
          );
        })}
      </div>

      {/* Drop zone */}
      <div
        onDragOver={e => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={e => { e.preventDefault(); setIsDragging(false); addFiles(e.dataTransfer.files); }}
        onClick={() => inputRef.current?.click()}
        className={cn(
          'border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition-all duration-200',
          isDragging ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200 bg-gray-50 hover:border-emerald-300 hover:bg-emerald-50/40'
        )}
      >
        <input ref={inputRef} type="file" multiple className="hidden" accept=".jpg,.jpeg,.png,.pdf,.doc,.docx" onChange={e => addFiles(e.target.files)} />
        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
        <p className="text-sm font-medium text-gray-700">Drop files here or <span className="text-emerald-600">browse</span></p>
        <p className="text-xs text-gray-400 mt-1">PDF, JPEG, PNG, DOC · Max 10 MB per file</p>
      </div>

      {/* Uploaded files */}
      {docs.length > 0 && (
        <div className="space-y-2">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{docs.length} file{docs.length > 1 ? 's' : ''} uploaded</p>
          {docs.map(d => <FileCard key={d.id} doc={d} onRemove={() => removeDoc(d.id)} />)}
        </div>
      )}

      <div className="rounded-xl bg-blue-50 border border-blue-100 p-4 text-sm text-blue-700">
        💡 This step is optional for initial submission, but documents may be required for processing. You can always submit additional documents later via the application portal.
      </div>
    </div>
  );
}
