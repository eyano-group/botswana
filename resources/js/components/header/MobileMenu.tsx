import { Link } from "@inertiajs/react";
import { useState, useEffect } from "react";

const MobileMenu = ({ isOpen, onClose }) => {
  const [expandedItems, setExpandedItems] = useState({});
  const [isAnimating, setIsAnimating] = useState(false);
  
  const toggleItem = (item) => {
    setExpandedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };
  
  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);
  
  if (!isOpen) return null;
  
  return (
    <>
      {/* Backdrop avec effet de flou doux */}
      <div 
        className={`fixed inset-0 bg-black transition-all duration-700 z-[99999] ${isOpen ? 'opacity-70 visible backdrop-blur-md' : 'opacity-0 invisible backdrop-blur-0'}`}
        onClick={onClose}
      ></div>
      
      {/* Menu Panel avec animation de glissement ultra-doux */}
      <div className={`fixed right-0 top-0 h-full w-full max-w-xs bg-gray-900 z-[999999] transition-all duration-700 ease-out transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <div className="h-full flex flex-col">
          {/* Close Button avec animation douce */}
          <div className="flex justify-between items-center p-6 border-b border-gray-800 bg-gray-900">
            <Link href="/index.html" onClick={onClose}>
              <img src="/assets/logo/logo.png" alt="Logo" className="h-10 transition-transform duration-300 hover:scale-105" />
            </Link>
            <button 
              className="text-white text-xl transition-all duration-500 hover:rotate-90 transform hover:scale-110 p-2 rounded-lg hover:bg-gray-800"
              onClick={onClose}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Navigation avec animation d'apparition douce */}
          <nav className={`flex-1 overflow-y-auto transition-all duration-500 ${isAnimating ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
            <ul className="py-2">
              {['home', 'about', 'coaching', 'services', 'elements', 'blog'].map((item, index) => (
                <li key={item} className="border-t border-gray-800 transition-all duration-300" style={{ transitionDelay: `${index * 50}ms` }}>
                  <div className="flex items-center justify-between">
                    <Link 
                      href="/index.html" 
                      className="block py-4 px-6 text-white text-sm font-medium uppercase hover:bg-gray-800 transition-all duration-300 transform hover:translate-x-2"
                      onClick={onClose}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                    <button 
                      className="w-10 h-10 flex items-center justify-center mr-2 text-white hover:bg-gray-800 rounded-lg transition-all duration-300 transform hover:scale-110"
                      onClick={() => toggleItem(item)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform duration-500 ${expandedItems[item] ? 'rotate-90 text-[#66d9ff]' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  <div className={`overflow-hidden transition-all duration-700 ease-in-out ${expandedItems[item] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <ul className="bg-gray-800">
                      <li>
                        <Link href="/index.html" className="block py-3 px-6 pl-12 text-white text-sm hover:bg-gray-700 transition-all duration-300 transform hover:translate-x-2" onClick={onClose}>
                          Page 01
                        </Link>
                      </li>
                      <li>
                        <Link href="/index.html" className="block py-3 px-6 pl-12 text-white text-sm hover:bg-gray-700 transition-all duration-300 transform hover:translate-x-2" onClick={onClose}>
                          Page 02
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              ))}
              <li className="border-t border-gray-800 border-b transition-all duration-300" style={{ transitionDelay: '300ms' }}>
                <Link href="/contact.html" className="block py-4 px-6 text-white text-sm font-medium uppercase hover:bg-gray-800 transition-all duration-300 transform hover:translate-x-2" onClick={onClose}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          
          {/* Contact Info avec animation douce */}
          <div className={`p-6 border-t border-gray-800 bg-gray-800 bg-opacity-50 transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            <h4 className="text-white text-lg font-bold mb-4 transition-all duration-300">Contact Info</h4>
            <ul className="space-y-3">
              <li className="text-gray-300 text-sm flex items-start transition-all duration-300 hover:text-white">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-[#0099cc]"></i>
                <span>Chicago 12, Melborne City, USA</span>
              </li>
              <li className="text-gray-300 text-sm flex items-center transition-all duration-300 hover:text-white">
                <i className="fas fa-phone mt-1 mr-3 text-[#0099cc]"></i>
                <Link href="tel:+8801682648101" className="hover:text-white transition-all duration-300">+88 01682648101</Link>
              </li>
              <li className="text-gray-300 text-sm flex items-center transition-all duration-300 hover:text-white">
                <i className="fas fa-envelope mt-1 mr-3 text-[#0099cc]"></i>
                <Link href="mailto:info@example.com" className="hover:text-white transition-all duration-300">info@example.com</Link>
              </li>
            </ul>
          </div>
          
          {/* Social Links avec animation douce */}
          <div className={`p-6 border-t border-gray-800 transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            <ul className="flex justify-center space-x-4">
              {['twitter', 'facebook-square', 'pinterest-p', 'instagram', 'youtube'].map((social, index) => (
                <li key={social} className="transform transition-all duration-300 hover:scale-110" style={{ transitionDelay: `${index * 50 + 300}ms` }}>
                  <Link href="/index.html" className="text-white text-xl hover:text-[#0099cc] transition-all duration-300 p-2 rounded-lg hover:bg-gray-800 block">
                    <i className={`fab fa-${social}`}></i>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;