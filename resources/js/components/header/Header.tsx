import React, { useState, useEffect, useRef } from 'react';
import { Link } from '@inertiajs/react';

// Composant pour la popup de recherche
const SearchPopup = ({ isOpen, onClose }) => {
  const [searchInput, setSearchInput] = useState('');
  const searchRef = useRef(null);
  
  const recentSearches = ['Finance', 'Idea', 'Service', 'Growth', 'Plan'];
  
  useEffect(() => {
    if (isOpen && searchRef.current) {
      setTimeout(() => {
        searchRef.current.focus();
      }, 300);
    }
  }, [isOpen]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchInput);
    onClose();
  };
  
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };
  
  if (!isOpen) return null;
  
  return (
    <div 
      className={`fixed inset-0 z-[99999] bg-black transition-all duration-700 ${isOpen ? 'bg-opacity-90 opacity-100 visible' : 'bg-opacity-0 opacity-0 invisible'}`}
      onKeyDown={handleKeyDown}
    >
      <div className="overlay-layer absolute inset-0" onClick={onClose}></div>
      
      <button 
        className="close-search absolute right-6 top-6 text-white text-2xl z-10 transition-all duration-500 hover:text-gray-300 hover:rotate-90"
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
            <input 
              ref={searchRef}
              type="search" 
              className="form-control w-full h-20 px-8 pr-64 bg-white text-2xl text-gray-800 focus:outline-none transition-all duration-300"
              placeholder="Search Here"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              required
            />
            <button 
              type="submit" 
              className="absolute right-0 top-0 w-56 h-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xl font-semibold transition-all duration-500 hover:from-blue-700 hover:to-blue-800 transform hover:scale-105"
            >
              Search Now!
            </button>
          </fieldset>
        </form>
        
        <div className={`transition-all duration-700 ${isOpen ? 'opacity-100 translate-y-0 mt-8' : 'opacity-0 -translate-y-4 mt-0'}`}>
          <h3 className="text-xl font-semibold text-white text-center uppercase tracking-wider mb-5">
            Recent Search Keywords
          </h3>
          
          <ul className="recent-searches flex flex-wrap justify-center gap-2">
            {recentSearches.map((term, index) => (
              <li key={index} className="transform transition-all duration-300 hover:scale-105">
                <Link 
                  to="/index.html" 
                  className="block px-4 py-2 border border-white text-white rounded-md transition-all duration-300 hover:bg-white hover:text-black"
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

// Composant pour le menu mobile
const MobileMenu = ({ isOpen, onClose }) => {
  const [expandedItems, setExpandedItems] = useState({});
  
  const toggleItem = (item) => {
    setExpandedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };
  
  if (!isOpen) return null;
  
  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black transition-all duration-700 z-[99999] ${isOpen ? 'opacity-70 visible' : 'opacity-0 invisible'}`}
        onClick={onClose}
      ></div>
      
      {/* Menu Panel */}
      <div className={`fixed right-0 top-0 h-full w-full max-w-xs bg-gray-900 z-[999999] transition-all duration-700 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col">
          {/* Close Button */}
          <div className="flex justify-between items-center p-6 border-b border-gray-800">
            <Link to="/index.html" onClick={onClose}>
              <img src="assets/images/logo.png" alt="Logo" className="h-10" />
            </Link>
            <button 
              className="text-white text-xl transition-all duration-500 hover:rotate-90"
              onClick={onClose}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto">
            <ul className="py-2">
              <li className="border-t border-gray-800">
                <div className="flex items-center justify-between">
                  <Link to="/index.html" className="block py-3 px-6 text-white text-sm font-medium uppercase hover:bg-gray-800 transition-colors" onClick={onClose}>
                    Home
                  </Link>
                  <button 
                    className="w-8 h-8 flex items-center justify-center mr-4 text-white hover:bg-gray-800 rounded transition-all"
                    onClick={() => toggleItem('home')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform duration-300 ${expandedItems.home ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${expandedItems.home ? 'max-h-96' : 'max-h-0'}`}>
                  <ul className="bg-gray-800">
                    <li><Link to="/index.html" className="block py-2 px-6 pl-10 text-white text-sm hover:bg-gray-700 transition-colors" onClick={onClose}>Home Page 01</Link></li>
                    <li><Link to="/index-2.html" className="block py-2 px-6 pl-10 text-white text-sm hover:bg-gray-700 transition-colors" onClick={onClose}>Home Page 02</Link></li>
                    <li><Link to="/index-rtl.html" className="block py-2 px-6 pl-10 text-white text-sm hover:bg-gray-700 transition-colors" onClick={onClose}>Home RTL</Link></li>
                    <li><Link to="/index-onepage.html" className="block py-2 px-6 pl-10 text-white text-sm hover:bg-gray-700 transition-colors" onClick={onClose}>Home OnePage</Link></li>
                  </ul>
                </div>
              </li>
              
              <li className="border-t border-gray-800">
                <div className="flex items-center justify-between">
                  <Link to="/index.html" className="block py-3 px-6 text-white text-sm font-medium uppercase hover:bg-gray-800 transition-colors" onClick={onClose}>
                    About
                  </Link>
                  <button 
                    className="w-8 h-8 flex items-center justify-center mr-4 text-white hover:bg-gray-800 rounded transition-all"
                    onClick={() => toggleItem('about')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform duration-300 ${expandedItems.about ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${expandedItems.about ? 'max-h-96' : 'max-h-0'}`}>
                  <ul className="bg-gray-800">
                    <li><Link to="/about.html" className="block py-2 px-6 pl-10 text-white text-sm hover:bg-gray-700 transition-colors" onClick={onClose}>About Us</Link></li>
                    <li><Link to="/team.html" className="block py-2 px-6 pl-10 text-white text-sm hover:bg-gray-700 transition-colors" onClick={onClose}>Our Team</Link></li>
                    <li><Link to="/faq.html" className="block py-2 px-6 pl-10 text-white text-sm hover:bg-gray-700 transition-colors" onClick={onClose}>Faq's</Link></li>
                    <li><Link to="/error.html" className="block py-2 px-6 pl-10 text-white text-sm hover:bg-gray-700 transition-colors" onClick={onClose}>404</Link></li>
                  </ul>
                </div>
              </li>
              
              <li className="border-t border-gray-800">
                <div className="flex items-center justify-between">
                  <Link to="/index.html" className="block py-3 px-6 text-white text-sm font-medium uppercase hover:bg-gray-800 transition-colors" onClick={onClose}>
                    Coaching
                  </Link>
                  <button 
                    className="w-8 h-8 flex items-center justify-center mr-4 text-white hover:bg-gray-800 rounded transition-all"
                    onClick={() => toggleItem('coaching')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform duration-300 ${expandedItems.coaching ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${expandedItems.coaching ? 'max-h-96' : 'max-h-0'}`}>
                  <ul className="bg-gray-800">
                    <li><Link to="/coaching.html" className="block py-2 px-6 pl-10 text-white text-sm hover:bg-gray-700 transition-colors" onClick={onClose}>Our Coaching</Link></li>
                    <li><Link to="/coaching-details.html" className="block py-2 px-6 pl-10 text-white text-sm hover:bg-gray-700 transition-colors" onClick={onClose}>Take IELTS</Link></li>
                    <li><Link to="/coaching-details-2.html" className="block py-2 px-6 pl-10 text-white text-sm hover:bg-gray-700 transition-colors" onClick={onClose}>PTE Coaching</Link></li>
                    <li><Link to="/coaching-details-3.html" className="block py-2 px-6 pl-10 text-white text-sm hover:bg-gray-700 transition-colors" onClick={onClose}>Citizenship Test</Link></li>
                    <li><Link to="/coaching-details-4.html" className="block py-2 px-6 pl-10 text-white text-sm hover:bg-gray-700 transition-colors" onClick={onClose}>TOEFL</Link></li>
                    <li><Link to="/coaching-details-5.html" className="block py-2 px-6 pl-10 text-white text-sm hover:bg-gray-700 transition-colors" onClick={onClose}>SAT Coaching</Link></li>
                    <li><Link to="/coaching-details-6.html" className="block py-2 px-6 pl-10 text-white text-sm hover:bg-gray-700 transition-colors" onClick={onClose}>Skills Exam</Link></li>
                  </ul>
                </div>
              </li>
              
              <li className="border-t border-gray-800">
                <div className="flex items-center justify-between">
                  <Link to="/index.html" className="block py-3 px-6 text-white text-sm font-medium uppercase hover:bg-gray-800 transition-colors" onClick={onClose}>
                    Services
                  </Link>
                  <button 
                    className="w-8 h-8 flex items-center justify-center mr-4 text-white hover:bg-gray-800 rounded transition-all"
                    onClick={() => toggleItem('services')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform duration-300 ${expandedItems.services ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${expandedItems.services ? 'max-h-96' : 'max-h-0'}`}>
                  <ul className="bg-gray-800">
                    <li><Link to="/service.html" className="block py-2 px-6 pl-10 text-white text-sm hover:bg-gray-700 transition-colors" onClick={onClose}>Service Page 01</Link></li>
                    <li><Link to="/service-2.html" className="block py-2 px-6 pl-10 text-white text-sm hover:bg-gray-700 transition-colors" onClick={onClose}>Service Page 02</Link></li>
                    <li><Link to="/service-details.html" className="block py-2 px-6 pl-10 text-white text-sm hover:bg-gray-700 transition-colors" onClick={onClose}>Business Visa</Link></li>
                    <li><Link to="/service-details-2.html" className="block py-2 px-6 pl-10 text-white text-sm hover:bg-gray-700 transition-colors" onClick={onClose}>Students Visa</Link></li>
                    <li><Link to="/service-details-3.html" className="block py-2 px-6 pl-10 text-white text-sm hover:bg-gray-700 transition-colors" onClick={onClose}>Immigration Visa</Link></li>
                    <li><Link to="/service-details-4.html" className="block py-2 px-6 pl-10 text-white text-sm hover:bg-gray-700 transition-colors" onClick={onClose}>Transit Visa</Link></li>
                    <li><Link to="/service-details-5.html" className="block py-2 px-6 pl-10 text-white text-sm hover:bg-gray-700 transition-colors" onClick={onClose}>Tourists Visa</Link></li>
                    <li><Link to="/service-details-6.html" className="block py-2 px-6 pl-10 text-white text-sm hover:bg-gray-700 transition-colors" onClick={onClose}>Diplomatic Visa</Link></li>
                  </ul>
                </div>
              </li>
              
              <li className="border-t border-gray-800">
                <div className="flex items-center justify-between">
                  <Link to="/index.html" className="block py-3 px-6 text-white text-sm font-medium uppercase hover:bg-gray-800 transition-colors" onClick={onClose}>
                    Elements
                  </Link>
                  <button 
                    className="w-8 h-8 flex items-center justify-center mr-4 text-white hover:bg-gray-800 rounded transition-all"
                    onClick={() => toggleItem('elements')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform duration-300 ${expandedItems.elements ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${expandedItems.elements ? 'max-h-96' : 'max-h-0'}`}>
                  <ul className="bg-gray-800">
                    <li><Link to="/about-element-1.html" className="block py-2 px-6 pl-10 text-white text-sm hover:bg-gray-700 transition-colors" onClick={onClose}>About 01</Link></li>
                    <li><Link to="/about-element-2.html" className="block py-2 px-6 pl-10 text-white text-sm hover:bg-gray-700 transition-colors" onClick={onClose}>About 02</Link></li>
                    <li><Link to="/feature-element-1.html" className="block py-2 px-6 pl-10 text-white text-sm hover:bg-gray-700 transition-colors" onClick={onClose}>Feature 01</Link></li>
                    <li><Link to="/feature-element-2.html" className="block py-2 px-6 pl-10 text-white text-sm hover:bg-gray-700 transition-colors" onClick={onClose}>Feature 02</Link></li>
                    <li><Link to="/feature-element-3.html" className="block py-2 px-6 pl-10 text-white text-sm hover:bg-gray-700 transition-colors" onClick={onClose}>Feature 03</Link></li>
                    <li><Link to="/feature-element-4.html" className="block py-2 px-6 pl-10 text-white text-sm hover:bg-gray-700 transition-colors" onClick={onClose}>Feature 04</Link></li>
                    <li><Link to="/counter-element-1.html" className="block py-2 px-6 pl-10 text-white text-sm hover:bg-gray-700 transition-colors" onClick={onClose}>Fun Fact 01</Link></li>
                    <li><Link to="/counter-element-2.html" className="block py-2 px-6 pl-10 text-white text-sm hover:bg-gray-700 transition-colors" onClick={onClose}>Fun Fact 02</Link></li>
                  </ul>
                </div>
              </li>
              
              <li className="border-t border-gray-800">
                <div className="flex items-center justify-between">
                  <Link to="/index.html" className="block py-3 px-6 text-white text-sm font-medium uppercase hover:bg-gray-800 transition-colors" onClick={onClose}>
                    Blog
                  </Link>
                  <button 
                    className="w-8 h-8 flex items-center justify-center mr-4 text-white hover:bg-gray-800 rounded transition-all"
                    onClick={() => toggleItem('blog')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform duration-300 ${expandedItems.blog ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${expandedItems.blog ? 'max-h-96' : 'max-h-0'}`}>
                  <ul className="bg-gray-800">
                    <li><Link to="/blog.html" className="block py-2 px-6 pl-10 text-white text-sm hover:bg-gray-700 transition-colors" onClick={onClose}>Blog Grid</Link></li>
                    <li><Link to="/blog-2.html" className="block py-2 px-6 pl-10 text-white text-sm hover:bg-gray-700 transition-colors" onClick={onClose}>Blog List</Link></li>
                    <li><Link to="/blog-details.html" className="block py-2 px-6 pl-10 text-white text-sm hover:bg-gray-700 transition-colors" onClick={onClose}>Blog Details</Link></li>
                  </ul>
                </div>
              </li>
              
              <li className="border-t border-gray-800 border-b">
                <Link to="/contact.html" className="block py-3 px-6 text-white text-sm font-medium uppercase hover:bg-gray-800 transition-colors" onClick={onClose}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          
          {/* Contact Info */}
          <div className="p-6 border-t border-gray-800 bg-gray-800 bg-opacity-50">
            <h4 className="text-white text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-blue-400"></i>
                <span>Chicago 12, Melborne City, USA</span>
              </li>
              <li className="text-gray-300 text-sm flex items-center">
                <i className="fas fa-phone mt-1 mr-3 text-blue-400"></i>
                <Link to="tel:+8801682648101" className="hover:text-white transition-colors">+88 01682648101</Link>
              </li>
              <li className="text-gray-300 text-sm flex items-center">
                <i className="fas fa-envelope mt-1 mr-3 text-blue-400"></i>
                <Link to="mailto:info@example.com" className="hover:text-white transition-colors">info@example.com</Link>
              </li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div className="p-6 border-t border-gray-800">
            <ul className="flex justify-center space-x-4">
              <li>
                <Link to="/index.html" className="text-white text-xl hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
                  <i className="fab fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link to="/index.html" className="text-white text-xl hover:text-blue-600 transition-all duration-300 transform hover:scale-110">
                  <i className="fab fa-facebook-square"></i>
                </Link>
              </li>
              <li>
                <Link to="/index.html" className="text-white text-xl hover:text-red-600 transition-all duration-300 transform hover:scale-110">
                  <i className="fab fa-pinterest-p"></i>
                </Link>
              </li>
              <li>
                <Link to="/index.html" className="text-white text-xl hover:text-pink-600 transition-all duration-300 transform hover:scale-110">
                  <i className="fab fa-instagram"></i>
                </Link>
              </li>
              <li>
                <Link to="/index.html" className="text-white text-xl hover:text-red-600 transition-all duration-300 transform hover:scale-110">
                  <i className="fab fa-youtube"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

// Composant principal du header
const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsSticky(true);
        setIsScrolled(true);
      } else {
        setIsSticky(false);
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleItem = (item) => {
    setExpandedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };
  
  return (
    <>
      {/* Popup de recherche */}
      <SearchPopup isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      
      {/* Menu mobile */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      
      {/* Header principal */}
      <header className={`main-header relative left-0 top-0 z-[999] w-full transition-all duration-500 ${isSticky ? 'fixed-header' : ''}`}>
        {/* Barre supérieure */}
        <div className={`header-top bg-blue-900 transition-all duration-500 ${isScrolled ? 'py-2' : 'py-4'} px-4 lg:px-24`}>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
              <div className="top-left">
                <ul className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-6 text-white text-xs sm:text-sm">
                  <li className="flex items-center group">
                    <i className="flaticon-home mr-2 text-base sm:text-lg group-hover:text-blue-300 transition-colors"></i>
                    <span className="hidden xs:inline">72 Main Drive, Calibry, FL</span>
                    <span className="xs:hidden">Calibry, FL</span>
                  </li>
                  <li className="flex items-center group">
                    <i className="flaticon-open-email-message mr-2 text-base sm:text-lg group-hover:text-blue-300 transition-colors"></i>
                    <a href="mailto:inquiry@example.com" className="hover:text-blue-300 transition-colors">inquiry@example.com</a>
                  </li>
                  <li className="flex items-center group">
                    <i className="flaticon-clock mr-2 text-base sm:text-lg group-hover:text-blue-300 transition-colors"></i>
                    <span className="hidden xs:inline">Mon - Fri : 0900 to 1800</span>
                    <span className="xs:hidden">0900-1800</span>
                  </li>
                </ul>
              </div>
              <div className="top-right">
                <ul className="social-links flex gap-3 sm:gap-4">
                  <li>
                    <a href="/index.html" className="text-white hover:text-blue-300 transition-all duration-300 transform hover:scale-110">
                      <i className="fab fa-twitter text-sm sm:text-base"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/index.html" className="text-white hover:text-blue-300 transition-all duration-300 transform hover:scale-110">
                      <i className="fab fa-facebook-f text-sm sm:text-base"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/index.html" className="text-white hover:text-blue-300 transition-all duration-300 transform hover:scale-110">
                      <i className="fab fa-instagram text-sm sm:text-base"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/index.html" className="text-white hover:text-blue-300 transition-all duration-300 transform hover:scale-110">
                      <i className="fab fa-linkedin-in text-sm sm:text-base"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/index.html" className="text-white hover:text-blue-300 transition-all duration-300 transform hover:scale-110">
                      <i className="fab fa-google-plus-g text-sm sm:text-base"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Barre de navigation principale */}
        <div className={`header-upper relative w-full transition-all duration-500 ${isScrolled ? 'bg-blue-900 bg-opacity-95' : 'bg-blue-800'}`}>
          <div className="outer-container absolute left-0 top-0 right-0 w-full px-4 lg:px-24 border-b border-white border-opacity-20">
            <div className="flex flex-col lg:flex-row justify-between items-center py-4 lg:py-6">
              <div className="upper-left flex items-center mb-4 lg:mb-0 w-full lg:w-auto justify-between lg:justify-start">
                <figure className="logo-box">
                  <Link to="/index.html">
                    <img src="assets/images/logo.png" alt="Logo" className="h-10 lg:h-12 transition-all duration-300 hover:scale-105" />
                  </Link>
                </figure>
                <div className="btn-box lg:ml-6">
                  <Link to="/index.html" className="theme-btn-one bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg inline-flex items-center text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg">
                    <span className="hidden sm:inline">Appointment</span>
                    <span className="sm:hidden">Book</span>
                    <i className="flaticon-send ml-2"></i>
                  </Link>
                </div>
              </div>
              
              <div className="menu-area flex items-center">
                {/* Bouton pour ouvrir le menu mobile */}
                <div className="mobile-nav-toggler lg:hidden mr-4">
                  <button 
                    className="text-white focus:outline-none p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all"
                    onClick={() => setIsMobileMenuOpen(true)}
                    aria-label="Open menu"
                  >
                    <div className="w-6 flex flex-col gap-1.5">
                      <span className={`block h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                      <span className={`block h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                      <span className={`block h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </div>
                  </button>
                </div>
                
                {/* Menu de navigation pour desktop */}
                <nav className="main-menu hidden lg:block">
                  <ul className="navigation flex">
                    <li className="relative group">
                      <Link to="/index.html" className="text-white text-base lg:text-lg font-normal uppercase py-6 lg:py-9 px-3 lg:px-4.5 block hover:text-blue-300 transition-all duration-300 relative">
                        Home
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                      <ul className="absolute left-0 top-full w-64 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 z-50 rounded-b-lg">
                        <li><Link to="/index.html" className="block px-6 py-3.5 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 border-b border-gray-100">Home Page 01</Link></li>
                        <li><Link to="/index-2.html" className="block px-6 py-3.5 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 border-b border-gray-100">Home Page 02</Link></li>
                        <li><Link to="/index-rtl.html" className="block px-6 py-3.5 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 border-b border-gray-100">Home RTL</Link></li>
                        <li><Link to="/index-onepage.html" className="block px-6 py-3.5 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 border-b border-gray-100">Home OnePage</Link></li>
                        <li className="relative group/submenu">
                          <Link to="/index.html" className="block px-6 py-3.5 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300">
                            Header Style
                            <i className="fas fa-angle-right float-right mt-1 text-xs"></i>
                          </Link>
                          <ul className="absolute left-full top-0 w-56 bg-white shadow-xl opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-500 transform translate-y-4 group-hover/submenu:translate-y-0 z-50 rounded-b-lg">
                            <li><Link to="/index.html" className="block px-6 py-3.5 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 border-b border-gray-100">Header Style 01</Link></li>
                            <li><Link to="/index-2.html" className="block px-6 py-3.5 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300">Header Style 02</Link></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    
                    <li className="relative group">
                      <Link to="/index.html" className="text-white text-base lg:text-lg font-normal uppercase py-6 lg:py-9 px-3 lg:px-4.5 block hover:text-blue-300 transition-all duration-300 relative">
                        About
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                      <ul className="absolute left-0 top-full w-64 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 z-50 rounded-b-lg">
                        <li><Link to="/about.html" className="block px-6 py-3.5 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 border-b border-gray-100">About Us</Link></li>
                        <li><Link to="/team.html" className="block px-6 py-3.5 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 border-b border-gray-100">Our Team</Link></li>
                        <li><Link to="/faq.html" className="block px-6 py-3.5 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 border-b border-gray-100">Faq's</Link></li>
                        <li><Link to="/error.html" className="block px-6 py-3.5 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300">404</Link></li>
                      </ul>
                    </li>
                    
                    <li className="relative group">
                      <Link to="/index.html" className="text-white text-base lg:text-lg font-normal uppercase py-6 lg:py-9 px-3 lg:px-4.5 block hover:text-blue-300 transition-all duration-300 relative">
                        Coaching
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                      <ul className="absolute left-0 top-full w-64 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 z-50 rounded-b-lg">
                        <li><Link to="/coaching.html" className="block px-6 py-3.5 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 border-b border-gray-100">Our Coaching</Link></li>
                        <li><Link to="/coaching-details.html" className="block px-6 py-3.5 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 border-b border-gray-100">Take IELTS</Link></li>
                        <li><Link to="/coaching-details-2.html" className="block px-6 py-3.5 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 border-b border-gray-100">PTE Coaching</Link></li>
                        <li><Link to="/coaching-details-3.html" className="block px-6 py-3.5 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 border-b border-gray-100">Citizenship Test</Link></li>
                        <li><Link to="/coaching-details-4.html" className="block px-6 py-3.5 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 border-b border-gray-100">TOEFL</Link></li>
                        <li><Link to="/coaching-details-5.html" className="block px-6 py-3.5 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 border-b border-gray-100">SAT Coaching</Link></li>
                        <li><Link to="/coaching-details-6.html" className="block px-6 py-3.5 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300">Skills Exam</Link></li>
                      </ul>
                    </li>
                    
                    <li className="relative group">
                      <Link to="/index.html" className="text-white text-base lg:text-lg font-normal uppercase py-6 lg:py-9 px-3 lg:px-4.5 block hover:text-blue-300 transition-all duration-300 relative">
                        Services
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                      <ul className="absolute left-0 top-full w-64 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 z-50 rounded-b-lg">
                        <li><Link to="/service.html" className="block px-6 py-3.5 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 border-b border-gray-100">Service Page 01</Link></li>
                        <li><Link to="/service-2.html" className="block px-6 py-3.5 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 border-b border-gray-100">Service Page 02</Link></li>
                        <li><Link to="/service-details.html" className="block px-6 py-3.5 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 border-b border-gray-100">Business Visa</Link></li>
                        <li><Link to="/service-details-2.html" className="block px-6 py-3.5 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 border-b border-gray-100">Students Visa</Link></li>
                        <li><Link to="/service-details-3.html" className="block px-6 py-3.5 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 border-b border-gray-100">Immigration Visa</Link></li>
                        <li><Link to="/service-details-4.html" className="block px-6 py-3.5 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 border-b border-gray-100">Transit Visa</Link></li>
                        <li><Link to="/service-details-5.html" className="block px-6 py-3.5 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 border-b border-gray-100">Tourists Visa</Link></li>
                        <li><Link to="/service-details-6.html" className="block px-6 py-3.5 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300">Diplomatic Visa</Link></li>
                      </ul>
                    </li>
                    
                    <li className="relative group">
                      <Link to="/index.html" className="text-white text-base lg:text-lg font-normal uppercase py-6 lg:py-9 px-3 lg:px-4.5 block hover:text-blue-300 transition-all duration-300 relative">
                        Elements
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                      <div className="megamenu absolute left-1/2 top-full w-screen max-w-5xl bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 -translate-x-1/2 z-50 rounded-b-lg">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-6 p-6">
                          <div>
                            <h4 className="text-gray-800 font-semibold mb-4 pb-2 border-b border-gray-200">Elements 1</h4>
                            <ul className="space-y-1">
                              <li><Link to="/about-element-1.html" className="block py-2 px-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all duration-300">About 01</Link></li>
                              <li><Link to="/about-element-2.html" className="block py-2 px-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all duration-300">About 02</Link></li>
                              <li><Link to="/feature-element-1.html" className="block py-2 px-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all duration-300">Feature 01</Link></li>
                              <li><Link to="/feature-element-2.html" className="block py-2 px-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all duration-300">Feature 02</Link></li>
                              <li><Link to="/feature-element-3.html" className="block py-2 px-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all duration-300">Feature 03</Link></li>
                              <li><Link to="/feature-element-4.html" className="block py-2 px-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all duration-300">Feature 04</Link></li>
                              <li><Link to="/counter-element-1.html" className="block py-2 px-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all duration-300">Fun Fact 01</Link></li>
                              <li><Link to="/counter-element-2.html" className="block py-2 px-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all duration-300">Fun Fact 02</Link></li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-gray-800 font-semibold mb-4 pb-2 border-b border-gray-200">Elements 2</h4>
                            <ul className="space-y-1">
                              <li><Link to="/news-element-1.html" className="block py-2 px-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all duration-300">News 01</Link></li>
                              <li><Link to="/news-element-2.html" className="block py-2 px-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all duration-300">News 02</Link></li>
                              <li><Link to="/apply-element.html" className="block py-2 px-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all duration-300">Apply Process</Link></li>
                              <li><Link to="/team-element-1.html" className="block py-2 px-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all duration-300">Team 01</Link></li>
                              <li><Link to="/team-element-2.html" className="block py-2 px-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all duration-300">Team 02</Link></li>
                              <li><Link to="/testimonial-element-1.html" className="block py-2 px-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all duration-300">Testimonial 01</Link></li>
                              <li><Link to="/testimonial-element-2.html" className="block py-2 px-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all duration-300">Testimonial 02</Link></li>
                              <li><Link to="/clients-element.html" className="block py-2 px-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all duration-300">Clients</Link></li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-gray-800 font-semibold mb-4 pb-2 border-b border-gray-200">Elements 3</h4>
                            <ul className="space-y-1">
                              <li><Link to="/service-element-1.html" className="block py-2 px-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all duration-300">Service 01</Link></li>
                              <li><Link to="/service-element-2.html" className="block py-2 px-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all duration-300">Service 02</Link></li>
                              <li><Link to="/training-element.html" className="block py-2 px-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all duration-300">Training Block</Link></li>
                              <li><Link to="/inquiry-element.html" className="block py-2 px-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all duration-300">Inquiry Block</Link></li>
                              <li><Link to="/contact-element.html" className="block py-2 px-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all duration-300">Contact Form</Link></li>
                              <li><Link to="/faq-element.html" className="block py-2 px-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all duration-300">Faq Block</Link></li>
                              <li><Link to="/choose-element.html" className="block py-2 px-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all duration-300">Choose Block</Link></li>
                              <li><Link to="/footer-element.html" className="block py-2 px-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all duration-300">Footer</Link></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    
                    <li className="relative group">
                      <Link to="/index.html" className="text-white text-base lg:text-lg font-normal uppercase py-6 lg:py-9 px-3 lg:px-4.5 block hover:text-blue-300 transition-all duration-300 relative">
                        Blog
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                      <ul className="absolute left-0 top-full w-64 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 z-50 rounded-b-lg">
                        <li><Link to="/blog.html" className="block px-6 py-3.5 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 border-b border-gray-100">Blog Grid</Link></li>
                        <li><Link to="/blog-2.html" className="block px-6 py-3.5 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 border-b border-gray-100">Blog List</Link></li>
                        <li><Link to="/blog-details.html" className="block px-6 py-3.5 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300">Blog Details</Link></li>
                      </ul>
                    </li>
                    
                    <li className="relative group">
                      <Link to="/contact.html" className="text-white text-base lg:text-lg font-normal uppercase py-6 lg:py-9 px-3 lg:px-4.5 block hover:text-blue-300 transition-all duration-300 relative">
                        Contact
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    </li>
                  </ul>
                </nav>
                
                <div className="menu-right-content flex items-center">
                  <div className="search-box-outer px-3 sm:px-6 py-5 sm:py-8 border-l border-white border-opacity-20">
                    <button 
                      className="search-toggler text-white text-xl sm:text-2xl hover:text-blue-300 transition-all duration-300 transform hover:scale-110"
                      onClick={() => setIsSearchOpen(true)}
                      aria-label="Search"
                    >
                      <i className="flaticon-search-1"></i>
                    </button>
                  </div>
                  
                  <div className="support-box px-2 sm:px-4 lg:px-8 py-4 sm:py-5 lg:py-6 relative">
                    <i className="fas fa-phone-volume absolute left-3 sm:left-6 lg:left-10 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white text-sm sm:text-base lg:text-xl"></i>
                    <div className="ml-12 sm:ml-16 lg:ml-20">
                      <p className="text-white text-xs sm:text-sm font-normal mb-1">Any Questions? Call us</p>
                      <h3 className="text-white text-sm sm:text-base lg:text-xl xl:text-2xl font-bold">
                        <a href="tel:12463330079" className="hover:underline transition-all">+1 (246) 333 0079</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Header sticky */}
        <div className={`sticky-header fixed left-0 top-0 w-full bg-blue-900 shadow-2xl transition-all duration-500 z-0 ${isSticky ? 'opacity-100 visible z-[999] translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-3">
              <div className="logo-box">
                <Link to="/index.html">
                  <img src="assets/images/small-logo.png" alt="Logo" className="h-8 sm:h-10 transition-all duration-300 hover:scale-105" />
                </Link>
              </div>
              <div className="menu-area">
                <nav className="main-menu hidden lg:block">
                  <ul className="navigation flex">
                    <li className="px-2 sm:px-3">
                      <Link to="/index.html" className="text-white text-sm sm:text-base font-normal uppercase py-4 block hover:text-blue-300 transition-all duration-300">
                        Home
                      </Link>
                    </li>
                    <li className="px-2 sm:px-3">
                      <Link to="/index.html" className="text-white text-sm sm:text-base font-normal uppercase py-4 block hover:text-blue-300 transition-all duration-300">
                        About
                      </Link>
                    </li>
                    <li className="px-2 sm:px-3">
                      <Link to="/index.html" className="text-white text-sm sm:text-base font-normal uppercase py-4 block hover:text-blue-300 transition-all duration-300">
                        Coaching
                      </Link>
                    </li>
                    <li className="px-2 sm:px-3">
                      <Link to="/index.html" className="text-white text-sm sm:text-base font-normal uppercase py-4 block hover:text-blue-300 transition-all duration-300">
                        Services
                      </Link>
                    </li>
                    <li className="px-2 sm:px-3">
                      <Link to="/index.html" className="text-white text-sm sm:text-base font-normal uppercase py-4 block hover:text-blue-300 transition-all duration-300">
                        Elements
                      </Link>
                    </li>
                    <li className="px-2 sm:px-3">
                      <Link to="/index.html" className="text-white text-sm sm:text-base font-normal uppercase py-4 block hover:text-blue-300 transition-all duration-300">
                        Blog
                      </Link>
                    </li>
                    <li className="px-2 sm:px-3">
                      <Link to="/contact.html" className="text-white text-sm sm:text-base font-normal uppercase py-4 block hover:text-blue-300 transition-all duration-300">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
                
                {/* Mobile menu button in sticky header */}
                <div className="lg:hidden">
                  <button 
                    className="text-white focus:outline-none p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all"
                    onClick={() => setIsMobileMenuOpen(true)}
                    aria-label="Open menu"
                  >
                    <div className="w-6 flex flex-col gap-1.5">
                      <span className={`block h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                      <span className={`block h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                      <span className={`block h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;