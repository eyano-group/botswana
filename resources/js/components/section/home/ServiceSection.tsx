import React, { useState, useRef, useEffect } from 'react';
import { Link } from '@inertiajs/react';

const ServiceSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  
  const services = [
    {
      id: 1,
      icon: 'flaticon-manager',
      category: 'visa types',
      title: 'Working Visas',
      description: 'Nunc quam arc pretium quis lobortis sem consequat conse tetur diam nunc bibend.'
    },
    {
      id: 2,
      icon: 'flaticon-flight',
      category: 'visa types',
      title: 'Study Visas',
      description: 'Nunc quam arc pretium quis lobortis sem consequat conse tetur diam nunc bibend.'
    },
    {
      id: 3,
      icon: 'flaticon-airport',
      category: 'visa types',
      title: 'Business Visas',
      description: 'Nunc quam arc pretium quis lobortis sem consequat conse tetur diam nunc bibend.'
    },
    {
      id: 4,
      icon: 'flaticon-bus-stop',
      category: 'visa types',
      title: 'Tourist Visas',
      description: 'Nunc quam arc pretium quis lobortis sem consequat conse tetur diam nunc bibend.'
    },
    {
      id: 5,
      icon: 'flaticon-manager',
      category: 'visa types',
      title: 'Working Visas',
      description: 'Nunc quam arc pretium quis lobortis sem consequat conse tetur diam nunc bibend.'
    },
    {
      id: 6,
      icon: 'flaticon-flight',
      category: 'visa types',
      title: 'Study Visas',
      description: 'Nunc quam arc pretium quis lobortis sem consequat conse tetur diam nunc bibend.'
    },
    {
      id: 7,
      icon: 'flaticon-airport',
      category: 'visa types',
      title: 'Business Visas',
      description: 'Nunc quam arc pretium quis lobortis sem consequat conse tetur diam nunc bibend.'
    },
    {
      id: 8,
      icon: 'flaticon-bus-stop',
      category: 'visa types',
      title: 'Tourist Visas',
      description: 'Nunc quam arc pretium quis lobortis sem consequat conse tetur diam nunc bibend.'
    }
  ];
  
  // Fonctions pour la navigation du carrousel
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === services.length - 4 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? services.length - 4 : prev - 1));
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
  
  return (
    <section className="service-section relative py-20 md:py-24 lg:py-28 overflow-hidden">
      {/* Fond gris pour la partie inférieure */}
      <div className="absolute left-0 right-0 bg-gray-100 h-96 lg:h-[660px] top-72 lg:top-[510px]"></div>
      
      <div className="auto-container relative z-10 max-w-7xl mx-auto px-4">
        {/* En-tête de section */}
        <div className="top-inner relative mb-4">
          <div className="flex flex-col lg:flex-row items-start justify-between">
            <div className="w-full lg:w-5/12 mb-8 lg:mb-0">
              <div className="sec-title">
                <p className="text-sm uppercase tracking-wider text-[#0099cc] font-semibold mb-2">How we help clients</p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                  Level With Great Visa Serving Policies
                </h2>
                <div className="dotted-box relative">
                  <span className="dotted absolute w-2 h-2 bg-[#0099cc] rounded-full left-0 bottom-0"></span>
                  <span className="dotted absolute w-2 h-2 bg-[#0099cc] rounded-full left-3 bottom-0"></span>
                  <span className="dotted absolute w-2 h-2 bg-[#0099cc] rounded-full left-6 bottom-0"></span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-7/12">
              <div className="text relative pl-0 lg:pl-10 mt-8 lg:mt-10">
                <p className="text-base md:text-lg leading-7 md:leading-8 text-gray-600">
                  Sponsoring and managing work visas parts now becoming results in experience aute irure dolor in reprehenderit cepteur sint ocae cat cupidatat non proident sunt in culpa quis.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Carrousel de services */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100 / visibleItems)}%)` }}
            >
              {services.map((service) => (
                <div 
                  key={service.id} 
                  className="w-full md:w-1/2 lg:w-1/4 px-3 flex-shrink-0"
                >
                  <div className="service-block-one relative">
                    <div className="inner-box relative block bg-white text-center py-12 lg:py-16 px-4 mb-16 mt-8 border-b-2 border-[#0099cc] transition-all duration-500 hover:mb-[-30px] hover:py-20 hover:shadow-xl group">
                      {/* Ligne colorée animée */}
                      <div className="absolute left-0 right-0 h-0.5 bg-[#0099cc] bottom-[-2px] transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
                      
                      {/* Icône */}
                      <div className="icon-box relative block text-6xl lg:text-7xl text-[#0099cc] mb-6 transition-all duration-500">
                        <i className={service.icon}></i>
                      </div>
                      
                      {/* Catégorie */}
                      <span className="relative block text-xs text-gray-500 uppercase mb-2">
                        {service.category}
                      </span>
                      
                      {/* Titre */}
                      <h3 className="mb-4">
                        <Link 
                          to="/service-details.html" 
                          className="text-xl font-semibold text-gray-800 hover:text-[#0099cc] transition-colors duration-300"
                        >
                          {service.title}
                        </Link>
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 mb-0">
                        {service.description}
                      </p>
                      
                      {/* Lien avec animation */}
                      <div className="link absolute w-full text-center left-0 bottom-10 opacity-0 invisible transition-all duration-500 delay-150 group-hover:opacity-100 group-hover:visible">
                        <Link 
                          to="/service-details.html" 
                          className="relative inline-block text-base text-[#0099cc] hover:text-[#0080b3] transition-colors duration-300"
                        >
                          <i className="flaticon-send"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
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
          {Array.from({ length: Math.ceil(services.length / visibleItems) }).map((_, index) => (
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

export default ServiceSection;