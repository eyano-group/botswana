import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ClientsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  
  const clients = [
    {
      id: 1,
      logo: 'assets/images/clients/clients-logo-1.png',
      name: 'Client 1'
    },
    {
      id: 2,
      logo: 'assets/images/clients/clients-logo-2.png',
      name: 'Client 2'
    },
    {
      id: 3,
      logo: 'assets/images/clients/clients-logo-3.png',
      name: 'Client 3'
    },
    {
      id: 4,
      logo: 'assets/images/clients/clients-logo-4.png',
      name: 'Client 4'
    }
  ];
  
  // Fonctions pour la navigation du carrousel
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === clients.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? clients.length - 1 : prev - 1));
  };
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  
  // Configuration du carrousel responsive
  const getVisibleItems = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 4; // lg
      if (window.innerWidth >= 768) return 2; // md
      return 1; // sm
    }
    return 4; // Valeur par défaut pour le SSR
  };
  
  const [visibleItems, setVisibleItems] = useState(getVisibleItems());
  
  useEffect(() => {
    const handleResize = () => {
      setVisibleItems(getVisibleItems());
      setCurrentSlide(0); // Réinitialiser la position lors du redimensionnement
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Auto-défilement du carrousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change de slide toutes les 3 secondes
    
    return () => clearInterval(interval);
  }, [currentSlide]);
  
  return (
    <section className="clients-section relative pb-24 lg:pb-28">
      <div className="auto-container max-w-7xl mx-auto px-4">
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100 / visibleItems)}%)` }}
            >
              {clients.map((client) => (
                <div 
                  key={client.id} 
                  className="w-full md:w-1/2 lg:w-1/4 px-4 flex-shrink-0"
                >
                  <figure className="logo-image block">
                    <Link 
                      to="/index.html" 
                      className="block group"
                    >
                      <img 
                        src={client.logo} 
                        alt={client.name} 
                        className="block w-full h-auto max-w-full mx-auto transition-all duration-500 filter grayscale hover:grayscale-0 hover:scale-105"
                      />
                    </Link>
                  </figure>
                </div>
              ))}
            </div>
          </div>
          
          {/* Boutons de navigation */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg text-[#0099cc] hover:bg-[#0099cc] hover:text-white transition-all duration-300"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg text-[#0099cc] hover:bg-[#0099cc] hover:text-white transition-all duration-300"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Indicateurs de pagination */}
        <div className="flex justify-center mt-8 space-x-2">
          {clients.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-5 bg-[#0099cc]' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;