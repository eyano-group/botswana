// src/components/NewsCard.js
import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const NewsCard = ({ image, category, title, excerpt, date, author }) => {
  return (
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 cursor-pointer">
      <div className="relative overflow-hidden h-48">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <span className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-wide">
          {category}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-slate-500 mb-3">
          <Calendar className="w-4 h-4 mr-1" />
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>by {author}</span>
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 text-sm mb-4 line-clamp-3">{excerpt}</p>
        <a href="#" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors">
          Read More <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default NewsCard;