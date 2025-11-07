// src/components/ContentDetailView.tsx
import React from 'react';
import { X } from 'lucide-react';

interface ContentDetailViewProps {
  title: string;
  content: string;
  onClose: () => void;
}

const ContentDetailView: React.FC<ContentDetailViewProps> = ({ title, content, onClose }) => {
  return (
    <div className="content-detail mb-16">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="prose max-w-none text-gray-700">
          {content}
        </div>
      </div>
    </div>
  );
};

export default ContentDetailView;