import React, { useState, useEffect, useRef } from 'react';
import { Link } from '@inertiajs/react';

const FeatureSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  const features = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Apply Visa Online',
      description: 'Complete your visa application from the comfort of your home with our streamlined online process designed for Botswana residents.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
      delay: '0ms',
      color: '#0099cc'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Important Information',
      description: 'Access all the essential information and guidelines for your immigration journey in Botswana.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      delay: '200ms',
      color: '#0077a3'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Immigration Resources',
      description: 'Explore comprehensive resources to help you navigate the immigration process successfully in Botswana.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      delay: '400ms',
      color: '#005580'
    }
  ];

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
    <section className="feature-section relative py-20 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden" ref={sectionRef}>
      {/* Éléments décoratifs d'arrière-plan */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#0099cc]/5 rounded-full"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#0099cc]/5 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Titre de la section avec animation */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-[#0099cc]">Services</span>
          </h2> */}
          <div className="w-24 h-1 bg-[#0099cc] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive immigration services tailored to meet the unique needs of individuals and families in Botswana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className={`feature-card relative transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: feature.delay
              }}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 h-full flex flex-col relative">
                {/* Badge d'angle */}
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                    <span className="text-[#0099cc]">{feature.icon}</span>
                  </div>
                </div>
                
                {/* Image avec overlay et effet de zoom */}
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Icône au survol avec animation */}
                  <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                    hoveredCard === feature.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  }`}>
                    <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                      <span className="text-[#0099cc]">{feature.icon}</span>
                    </div>
                  </div>
                  
                  {/* Numéro de service */}
                  <div className="absolute bottom-4 left-4 z-10">
                    <div className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center font-bold text-gray-800">
                      {index + 1}
                    </div>
                  </div>
                </div>
                
                {/* Contenu avec animation au survol */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 transition-colors duration-300">
                    <Link href="/index.html" className="block group-hover:text-[#0099cc]">
                      {feature.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-5 flex-grow leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <Link 
                      href="/index.html" 
                      className="inline-flex items-center text-[#0099cc] font-medium hover:text-gray-800 transition-all duration-300 group/link"
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    
                    {/* Indicateur de progression au survol */}
                    <div className={`w-12 h-0.5 bg-gray-300 transition-all duration-500 ${
                      hoveredCard === feature.id ? 'w-20 bg-[#0099cc]' : ''
                    }`}></div>
                  </div>
                </div>
                
                {/* Lien subtil en bas de la carte */}
                <div className="h-1 bg-gradient-to-r from-transparent via-[#0099cc] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bouton d'action supplémentaire */}
        {/* <div className={`text-center mt-16 transition-all duration-1000 transform delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Link 
            href="/services.html"
            className="inline-flex items-center px-8 py-4 bg-[#0099cc] text-white font-semibold rounded-lg hover:bg-[#0077a3] transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View All Services
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default FeatureSection;