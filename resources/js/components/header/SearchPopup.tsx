/* eslint-disable react-hooks/set-state-in-effect */
import { Link } from "@inertiajs/react";
import { useState, useEffect, useRef } from "react";

const SearchPopup = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [searchInput, setSearchInput] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [searchProgress, setSearchProgress] = useState(0);
  const searchRef = useRef(null);
  
  const recentSearches = ['Finance', 'Idea', 'Service', 'Growth', 'Plan'];
  
  useEffect(() => {
    if (isOpen && searchRef.current) {
      setIsAnimating(true);
      setTimeout(() => {
        searchRef.current.focus();
        setIsAnimating(false);
      }, 300);
    }
  }, [isOpen]);
  
  // Animation de la barre de progression
  useEffect(() => {
    if (searchInput.length > 0) {
      setSearchProgress(Math.min((searchInput.length / 20) * 100, 100));
    } else {
      setSearchProgress(0);
    }
  }, [searchInput]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchInput);
    setIsAnimating(true);
    setTimeout(() => {
      onClose();
      setSearchInput('');
      setSearchProgress(0);
      setIsAnimating(false);
    }, 300);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsAnimating(true);
      setTimeout(() => {
        onClose();
        setSearchInput('');
        setSearchProgress(0);
        setIsAnimating(false);
      }, 100);
    }
  };
  
  if (!isOpen) return null;
  
  return (
    <div 
      className={`fixed inset-0 z-[99999] transition-all duration-700 ${isOpen ? 'bg-opacity-90 opacity-100 visible' : 'bg-opacity-0 opacity-0 invisible'}`}
      onKeyDown={handleKeyDown}
    >
      <div 
        className="overlay-layer absolute inset-0 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <button 
        className="close-search absolute right-6 top-6 text-white text-2xl z-10 transition-all duration-500 hover:text-gray-300 hover:rotate-90 transform hover:scale-110"
        onClick={onClose}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <div 
        ref={searchRef}
        className={`search-form relative px-4 max-w-4xl mx-auto transition-all duration-900 ${isOpen ? 'mt-36 mb-24 opacity-100' : 'mt-48 mb-0 opacity-0'}`}
      >
        <form onSubmit={handleSubmit}>
          <fieldset className="relative rounded-xl overflow-hidden shadow-2xl">
            <div className="relative">
              <input 
                ref={searchRef}
                type="search" 
                className={`form-control w-full h-20 px-8 pr-64 bg-white text-2xl text-gray-800 focus:outline-none transition-all duration-300 ${isAnimating ? 'animate-pulse' : ''}`}
                placeholder="Search Here"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                required
              />
              <div 
                className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#0099cc] to-[#0080b3] transition-all duration-500"
                style={{ width: `${searchProgress}%` }}
              ></div>
            </div>
            <button 
              type="submit" 
              className="absolute right-0 top-0 w-56 h-20 bg-gradient-to-r from-[#0099cc] to-[#0080b3] text-white text-xl font-semibold transition-all duration-500 hover:from-[#0080b3] hover:to-[#006699] transform hover:scale-105"
            >
              <span className="relative z-10">Search Now!</span>
              <div className="absolute inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </fieldset>
        </form>
        
        <div className={`transition-all duration-700 ${isOpen ? 'opacity-100 translate-y-0 mt-8' : 'opacity-0 -translate-y-4 mt-0'}`}>
          <h3 className="text-xl font-semibold text-white text-center uppercase tracking-wider mb-5">
            Recent Search Keywords
          </h3>
          
          <ul className="recent-searches flex flex-wrap justify-center gap-2">
            {recentSearches.map((term, index) => (
              <li 
                key={index} 
                className="transform transition-all duration-300 hover:scale-105"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <Link 
                  href="/index.html" 
                  className="block px-4 py-2 border border-white text-white rounded-md transition-all duration-300 hover:bg-white hover:text-[#0099cc] hover:shadow-lg"
                  onClick={onClose}
                >
                  {term}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;