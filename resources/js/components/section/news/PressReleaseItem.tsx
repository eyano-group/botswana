// src/components/PressReleaseItem.js
import React from 'react';
import { FileText } from 'lucide-react';

const PressReleaseItem = ({ title, date, pdfLink }) => {
  return (
    <a href={pdfLink} target="_blank" rel="noopener noreferrer" className="block group">
      <div className="flex items-start justify-between p-5 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300">
        <div className="flex items-start">
          <FileText className="w-6 h-6 text-slate-400 mr-4 mt-1 flex-shrink-0" />
          <div>
            <h4 className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
              {title}
            </h4>
            <p className="text-sm text-slate-500 mt-1">Official Press Release</p>
          </div>
        </div>
        <span className="text-sm text-slate-500 font-medium whitespace-nowrap ml-4">
          {date}
        </span>
      </div>
    </a>
  );
};

export default PressReleaseItem;