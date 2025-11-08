import React, { useState, useEffect, useRef } from 'react';
import { Link } from '@inertiajs/react';

const CtaSection = () => {
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
    <section className="cta-section relative py-20 md:py-24 lg:py-32 overflow-hidden" ref={sectionRef}>
      {/* Arrière-plan avec motif amélioré */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0099cc] to-[#0077a3]"></div>
      
      {/* Motifs décoratifs améliorés */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border-4 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 border-4 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border-4 border-white rounded-full"></div>
        
        {/* Ajout de motifs supplémentaires pour un meilleur effet visuel */}
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/3 w-16 h-16 border-2 border-white rounded-full"></div>
      </div>
      
      {/* Overlay subtil pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`max-w-4xl mx-auto text-center text-white transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-20 translate-y-10'
        }`}>
          {/* Icône décorative en haut */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Unparalleled Consultancy from Experienced Lawyers
          </h2>
          
          {/* Ligne décorative sous le titre */}
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          
          <div className="relative inline-block mb-10">
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto">
              Get expert guidance for your immigration journey with our team of experienced professionals dedicated to making your process seamless and successful.
            </p>
            
            {/* Éléments décoratifs améliorés */}
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
              <div className="flex items-center">
                <div className="w-16 h-0.5 bg-white"></div>
                <div className="flex ml-2">
                  <span className="w-2 h-2 bg-white rounded-full mx-1"></span>
                  <span className="w-2 h-2 bg-white rounded-full mx-1"></span>
                  <span className="w-2 h-2 bg-white rounded-full mx-1"></span>
                </div>
              </div>
            </div>
            
            <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
              <div className="flex items-center">
                <div className="flex mr-2">
                  <span className="w-2 h-2 bg-white rounded-full mx-1"></span>
                  <span className="w-2 h-2 bg-white rounded-full mx-1"></span>
                  <span className="w-2 h-2 bg-white rounded-full mx-1"></span>
                </div>
                <div className="w-16 h-0.5 bg-white"></div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0099cc] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {/* Remplacement de l'icône Flaticon par une icône SVG */}
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Get Started Today
            </Link>
            <Link 
              href="/about/about-government"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#0099cc] transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
          
          {/* Éléments décoratifs en bas */}
          <div className="flex justify-center mt-12 space-x-2">
            <span className="w-2 h-2 bg-white/60 rounded-full"></span>
            <span className="w-2 h-2 bg-white/40 rounded-full"></span>
            <span className="w-2 h-2 bg-white/20 rounded-full"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;