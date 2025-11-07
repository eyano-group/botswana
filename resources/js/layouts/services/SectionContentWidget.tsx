



// src/components/widgets/SectionContentWidget.tsx
import React from 'react';
import { X } from 'lucide-react';
import { Section, ContentItem } from '@/types';

interface SectionContentWidgetProps {
  section: Section | undefined;
  content: ContentItem[];
  selectedContent: string | null;
  onSelectContent: (contentId: string) => void;
  onClose: () => void;
}

const SectionContentWidget: React.FC<SectionContentWidgetProps> = ({ 
  section, 
  content, 
  selectedContent, 
  onSelectContent, 
  onClose 
}) => {
  return (
    <div className="sidebar-widget sidebar-section-content bg-white border border-gray-200 rounded-lg p-6">
      <div className="widget-title mb-6 flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-800">
          {section?.title}
        </h3>
        <button 
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      <div className="dotted-box flex items-center gap-2 mb-6">
        <span className="dotted w-8 h-0.5 bg-gray-300"></span>
        <span className="dotted w-8 h-0.5 bg-gray-300"></span>
        <span className="dotted w-8 h-0.5 bg-gray-300"></span>
      </div>
      <div className="widget-content">
        <div className="space-y-4">
          {content.map(item => (
            <div 
              key={item.id}
              onClick={() => onSelectContent(item.id)}
              className={`p-4 rounded-lg border cursor-pointer transition-all ${
                selectedContent === item.id 
                  ? 'border-[#0099cc] bg-blue-50' 
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600 line-clamp-3">
                {item.content.substring(0, 100)}...
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionContentWidget;