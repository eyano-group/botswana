import React, { useState, useEffect, useRef } from 'react';
import { Link } from '@inertiajs/react';

const ApplySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="apply-section relative py-20 lg:py-24 overflow-hidden" ref={sectionRef}>
      <div className="auto-container relative z-10 max-w-7xl mx-auto px-4">
        <div className="inner-box relative lg:pl-0 lg:pl-[380px]">
          {/* Image avec effet de brillance amélioré */}
          <figure className={`image-box absolute block overflow-hidden left-0 top-0 w-full lg:w-auto lg:max-w-md h-64 md:h-80 lg:h-auto z-0 rounded-lg lg:rounded-none shadow-2xl transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="shine-effect absolute inset-0 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Apply for visa" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            
            {/* Overlay subtil pour améliorer la lisibilité du texte */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </figure>
          
          {/* Contenu avec fond de couleur principale et design amélioré */}
          <div className={`content-box relative overflow-hidden bg-gradient-to-br from-[#0099cc] to-[#0077a3] p-8 md:p-12 lg:p-16 lg:pl-20 lg:pr-20 ml-0 lg:ml-10 mt-64 md:mt-80 lg:mt-0 rounded-lg lg:rounded-none lg:rounded-l-lg shadow-xl transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            {/* Icônes décoratives améliorées avec animation */}
            <div className="icon-box absolute">
              <div className="icon icon-1 absolute w-48 h-48 md:w-64 md:h-64 lg:w-[255px] lg:h-[255px] bg-white bg-opacity-10 rounded-full left-[-70px] bottom-[-75px] animate-pulse"></div>
              <div className="icon icon-2 absolute w-48 h-48 md:w-64 md:h-64 lg:w-[255px] lg:h-[255px] bg-white bg-opacity-10 rounded-full top-[-70px] right-[-190px] animate-pulse"></div>
            </div>
            
            {/* Badge d'information */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <svg className="w-4 h-4 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-white text-sm font-medium">Fast Processing</span>
            </div>
            
            {/* Titres et bouton avec animation d'apparition */}
            <h4 className={`block text-lg md:text-xl leading-8 text-white font-normal mb-2 transition-all duration-700 delay-300 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              Get Free Online Visa Assessment Today!
            </h4>
            <h2 className={`block text-2xl md:text-3xl lg:text-4xl leading-10 lg:leading-[50px] font-semibold text-white mb-8 transition-all duration-700 delay-500 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              Top Rated By Customers & Immigration Firms With 100% Success Rate.
            </h2>
            
            {/* Points forts avec icônes */}
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 transition-all duration-700 delay-700 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-white mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white text-sm">Expert Guidance</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-white mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white text-sm">Fast Processing</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-white mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white text-sm">100% Success Rate</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-white mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white text-sm">24/7 Support</span>
              </div>
            </div>
            
            {/* Bouton avec icône SVG et animation améliorée */}
            <Link 
              href="/index.html" 
              className={`theme-btn-one inline-flex items-center text-white border-2 border-white px-6 md:px-8 py-3 rounded-md transition-all duration-300 hover:bg-white hover:text-[#0099cc] transform hover:scale-105 shadow-lg group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '900ms' }}
            >
              {/* Remplacement de l'icône Flaticon par une icône SVG */}
              <svg className="w-5 h-5 mr-2 md:mr-3 transition-all duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              Apply Visa Now
            </Link>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .shine-effect {
          background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0) 100%);
          transform: skewX(-25deg);
          left: -100%;
          width: 50%;
          height: 100%;
        }
        
        .image-box:hover .shine-effect {
          animation: shine 1.5s;
        }
        
        @keyframes shine {
          100% {
            left: 150%;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
          }
        }
      `}</style>
    </section>
  );
};

export default ApplySection;