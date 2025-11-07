// src/components/EventCard.js
import React from 'react';
import { MapPin, Clock, ArrowRight } from 'lucide-react';

const EventCard = ({ title, date, time, location, description }: { title: string; date: string; time: string; location: string; description: string }) => {
  return (
    <div className="flex bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      {/* Badge de date */}
      <div className="flex-shrink-0 w-32 bg-gradient-to-br from-[#0099cc] to-[#0099cc] text-white p-4 text-center flex flex-col justify-center items-center">
        <span className="text-sm font-bold tracking-wider">{date.split(' ')[0]}</span>
        <span className="text-4xl font-bold">{date.split(' ')[1]}</span>
      </div>
      
      {/* Contenu de l'événement */}
      <div className="flex-grow p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-[#0099cc] transition-colors">
            {title}
          </h3>
          <p className="text-slate-600 text-sm mb-4">{description}</p>
          <div className="space-y-1 text-sm text-slate-500">
            <p className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-[#0099cc]" />
              {time}
            </p>
            <p className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-[#0099cc]" />
              {location}
            </p>
          </div>
        </div>
        <a href="#" className="inline-flex items-center text-[#0099cc] font-semibold hover:text-[#0099cc] mt-4 transition-colors">
          Learn More <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default EventCard;