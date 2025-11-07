// src/components/SectionHeader.js
import React from 'react';

const SectionHeader = ({ subtitle, title }: { subtitle: string; title: string }) => {
  return (
    <div className="text-center mb-16">
      <p className="text-sm font-bold text-[#0099cc] uppercase tracking-wider mb-3">{subtitle}</p>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{title}</h2>
      {/* Ligne décorative modernisée */}
      <div className="flex items-center justify-center mt-6">
        <span className="h-0.5 w-16 bg-[#0099cc] rounded-full"></span>
        <span className="w-2 h-2 bg-[#0099cc] rounded-full mx-2"></span>
        <span className="w-2 h-2 bg-[#0099cc] rounded-full"></span>
        <span className="w-2 h-2 bg-[#0099cc] rounded-full mr-2"></span>
        <span className="h-0.5 w-16 bg-[#0099cc] rounded-full"></span>
      </div>
    </div>
  );
};

export default SectionHeader;