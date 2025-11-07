// src/components/ContentCardsView.tsx
import React from 'react';
import { ChevronRight, FileText } from 'lucide-react';
import { Section, ContentItem } from '@/types';

interface ContentCardsViewProps {
  section: Section | undefined;
  content: ContentItem[];
  onSelectContent: (contentId: string) => void;
}

const ContentCardsView: React.FC<ContentCardsViewProps> = ({ section, content, onSelectContent }) => {
  return (
    <div className="content-cards mb-16">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {section?.title} Content
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {content.map(item => (
          <div 
            key={item.id}
            onClick={() => onSelectContent(item.id)}
            className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-all hover:scale-105 border border-gray-200"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#0099cc] rounded-lg flex items-center justify-center mr-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
            </div>
            <p className="text-gray-600 line-clamp-3">
              {item.content.substring(0, 150)}...
            </p>
            <div className="mt-4 text-right">
              <span className="text-[#0099cc] font-medium inline-flex items-center">
                Read More
                <ChevronRight className="w-4 h-4 ml-1" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentCardsView;