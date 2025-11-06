// src/components/ContactInfo.js
import React from 'react';

const ContactInfo = ({ Icon, title, content }) => {
  return (
    <div className="group">
      <div className="h-full bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out border border-slate-100">
        <div className="flex flex-col items-center text-center">
          {/* Icône dans un cercle coloré avec une animation de zoom au survol */}
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
            <Icon className="w-10 h-10 text-blue-600" strokeWidth={1.5} />
          </div>
          
          <h3 className="text-2xl font-bold text-slate-800 mb-4">{title}</h3>
          
          {/* Le contenu est maintenant plus aéré et lisible */}
          <p className="text-base leading-relaxed text-slate-600 font-normal">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;