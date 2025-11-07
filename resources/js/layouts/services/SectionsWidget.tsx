// src/components/widgets/SectionsWidget.tsx
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Section } from '@/types';

interface SectionsWidgetProps {
  sections: Section[];
  selectedSection: string;
  onSelectSection: (sectionId: string) => void;
  onSelectContent: (contentId: string) => void;
}

const SectionsWidget: React.FC<SectionsWidgetProps> = ({ sections, selectedSection, onSelectSection, onSelectContent }) => {
  return (
    <div className="sidebar-widget sidebar-categories-2 bg-white border border-gray-200 rounded-lg p-6">
      <div className="widget-title mb-6">
        <h3 className="text-xl font-bold text-gray-800">Sections</h3>
        <div className="dotted-box flex items-center gap-2 mt-2">
          <span className="dotted w-8 h-0.5 bg-gray-300"></span>
          <span className="dotted w-8 h-0.5 bg-gray-300"></span>
          <span className="dotted w-8 h-0.5 bg-gray-300"></span>
        </div>
      </div>
      <div className="widget-content">
        <ul className="categories-list space-y-3">
          {sections.map(section => (
            <li key={section.id}>
              <button 
                onClick={() => {
                  onSelectSection(section.id);
                  onSelectContent(null);
                }}
                className={`w-full text-left p-3 rounded-md transition-colors flex items-center justify-between ${
                  selectedSection === section.id 
                    ? 'bg-[#0099cc] text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {section.title}
                {selectedSection === section.id && <ChevronRight className="w-4 h-4" />}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SectionsWidget;