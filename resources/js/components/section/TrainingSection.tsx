import React, { useState, useRef, useEffect } from 'react';
import { Link } from '@inertiajs/react';

const TrainingSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  
  const trainings = [
    {
      id: 1,
      image: '/assets/images/resource/training-1.jpg',
      title: 'Citizenship Test',
      description: 'Integer lobortis se conseqat nulla viverra lorem dapibus prodent diam ipsum ...'
    },
    {
      id: 2,
      image: '/assets/images/resource/training-2.jpg',
      title: 'TOEFL',
      description: 'Integer lobortis se conseqat nulla viverra lorem dapibus prodent diam ipsum ...'
    },
    {
      id: 3,
      image: '/assets/images/resource/training-3.jpg',
      title: 'Take IELTS',
      description: 'Integer lobortis se conseqat nulla viverra lorem dapibus prodent diam ipsum ...'
    },
    {
      id: 4,
      image: '/assets/images/resource/training-4.jpg',
      title: 'PTE Coaching',
      description: 'Integer lobortis se conseqat nulla viverra lorem dapibus prodent diam ipsum ...'
    }
  ];
  
  // Fonctions pour la navigation du carrousel
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === trainings.length - 4 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? trainings.length - 4 : prev - 1));
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
    <section className="training-section relative py-24 lg:py-28 bg-[#0c2136] overflow-hidden">
      {/* Pattern de fond */}
      <div 
        className="pattern-layer absolute inset-0 w-full h-full opacity-20"
        style={{ backgroundImage: "url(assets/images/shape/pattern-2.png)" }}
      ></div>
      
      <div className="auto-container relative z-10 max-w-7xl mx-auto px-4">
        {/* En-tête de section */}
        <div className="top-inner relative mb-12">
          <div className="flex flex-col lg:flex-row items-start justify-between">
            <div className="w-full lg:w-5/12 mb-8 lg:mb-0">
              <div className="sec-title light">
                <p className="text-sm uppercase tracking-wider text-[#0099cc] font-semibold mb-2">How we help clients</p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                  Get The Immigration Training You Deserve
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
                <p className="text-base md:text-lg leading-7 md:leading-8 text-white">
                  Sponsoring and managing work visas parts now becoming results in experience aute irure dolor in reprehenderit cepteur sint ocae cat cupidatat non proident sunt in culpa quis.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Carrousel de formations */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100 / visibleItems)}%)` }}
            >
              {trainings.map((training) => (
                <div 
                  key={training.id} 
                  className="w-full md:w-1/2 lg:w-1/4 px-3 flex-shrink-0"
                >
                  <div className="training-block-one relative block overflow-hidden group">
                    <div className="inner-box">
                      {/* Contenu principal */}
                      <div className="content-box relative block">
                        {/* Image avec ombre intérieure */}
                        <figure className="image-box relative block">
                          <div className="absolute inset-0 z-10 shadow-inner-black"></div>
                          <img 
                            src={training.image} 
                            alt={training.title} 
                            className="w-full h-64 object-cover"
                          />
                        </figure>
                        
                        {/* Titre en bas de l'image */}
                        <div className="text absolute left-0 bottom-0 w-full text-center p-4 z-20 opacity-100 transition-opacity duration-500 group-hover:opacity-0">
                          <h4 className="text-xl font-semibold text-white">
                            {training.title}
                          </h4>
                        </div>
                      </div>
                      
                      {/* Overlay au survol */}
                      <div className="overlay-box absolute left-0 top-12 w-full h-full text-center z-30 p-10 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:top-0">
                        <div className="text absolute left-1/2 top-1/2 w-full p-4 transform -translate-x-1/2 -translate-y-1/2">
                          <h4 className="text-xl font-semibold text-white mb-3">
                            {training.title}
                          </h4>
                          <p className="text-sm leading-6 mb-4 text-white">
                            {training.description}
                          </p>
                          <Link 
                            to="/index.html" 
                            className="relative inline-block text-white font-semibold text-sm uppercase"
                          >
                            <span className="inline-block border-b border-white">Read More</span>
                            <i className="flaticon-send ml-2.5"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Boutons de navigation */}
          <div className="flex justify-center mt-16 space-x-2">
            <button 
              onClick={prevSlide}
              className="relative inline-block text-white font-bold text-2xl w-12 h-12 leading-10 border-2 border-gray-600 bg-transparent rounded-full text-center mx-1.5 cursor-pointer transition-all duration-500 hover:border-[#0099cc] hover:bg-[#0099cc]"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="relative inline-block text-white font-bold text-2xl w-12 h-12 leading-10 border-2 border-gray-600 bg-transparent rounded-full text-center mx-1.5 cursor-pointer transition-all duration-500 hover:border-[#0099cc] hover:bg-[#0099cc]"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .shadow-inner-black {
          box-shadow: inset 0px -130px 40px -70px rgba(0, 0, 0, 0.9);
        }
      `}</style>
    </section>
  );
};

export default TrainingSection;