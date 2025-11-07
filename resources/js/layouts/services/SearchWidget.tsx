// src/components/widgets/SearchWidget.tsx
import React from 'react';
import { Search } from 'lucide-react';

const SearchWidget: React.FC = () => {
  return (
    <div className="sidebar-widget sidebar-search">
      <form action="#" method="post" className="search-form relative">
        <div className="form-group relative">
          <input 
            type="search" 
            name="search-field" 
            placeholder="Search Blog" 
            required 
            className="w-full h-14 bg-[#0c2136] text-white px-6 pr-16 rounded-lg focus:outline-none placeholder-gray-300"
          />
          <button 
            type="submit" 
            className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white hover:text-[#0099cc] transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchWidget;