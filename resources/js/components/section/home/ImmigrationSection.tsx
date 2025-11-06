import React, { useState, useEffect, useRef } from 'react';
import { Link } from '@inertiajs/react';

const ImmigrationSection = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  
  const countries = [
    { id: 1, name: 'United States', image: '/assets/images/resource/immigration-1.jpg' },
    { id: 2, name: 'Canada', image: '/assets/images/resource/immigration-2.jpg' },
    { id: 3, name: 'Australia', image: '/assets/images/resource/immigration-3.jpg' },
    { id: 4, name: 'NewZealand', image: '/assets/images/resource/immigration-4.jpg' },
    { id: 5, name: 'Europe', image: '/assets/images/resource/immigration-5.jpg' },
    { id: 6, name: 'United Kingdom', image: '/assets/images/resource/immigration-6.jpg' }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);
  
  return (
    <section className="immigration-section relative py-24 lg:py-32 bg-[#eff2f5]" ref={sectionRef}>
      <div className="auto-container max-w-7xl mx-auto px-4">
        {/* Titre de section */}
        <div className="sec-title text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-[#0099cc] font-semibold mb-2">countries we offer support</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Immigration & Visa Services <br />Following Countries
          </h2>
          <div className="dotted-box relative inline-block">
            <span className="dotted absolute w-2 h-2 bg-[#0099cc] rounded-full left-0 bottom-0"></span>
            <span className="dotted absolute w-2 h-2 bg-[#0099cc] rounded-full left-3 bottom-0"></span>
            <span className="dotted absolute w-2 h-2 bg-[#0099cc] rounded-full left-6 bottom-0"></span>
          </div>
        </div>
        
        {/* Grille de pays */}
        <div className="flex flex-wrap -mx-4">
          {countries.map((country, index) => (
            <div 
              key={country.id} 
              className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
            >
              <div 
                className={`immigration-block-one relative block overflow-hidden text-center transition-all duration-1000 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: visible ? `${(index % 3) * 200}ms` : '0ms',
                  transitionDuration: '1500ms'
                }}
              >
                <div className="inner-box relative">
                  {/* Image avec overlay sombre */}
                  <figure className="image-box relative block overflow-hidden">
                    <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                    <img 
                      src={country.image} 
                      alt={country.name} 
                      className="w-full h-64 object-cover transition-all duration-500 hover:scale-105"
                    />
                  </figure>
                  
                  {/* Titre centré sur l'image */}
                  <div className="text absolute left-1/2 top-1/2 w-full p-8 z-20 transform -translate-x-1/2 -translate-y-1/2">
                    <h3>
                      <Link 
                        to="/index.html" 
                        className="text-white text-xl md:text-2xl font-semibold hover:underline transition-all duration-300"
                      >
                        {country.name}
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Texte de conclusion */}
        <div className="more-text relative block text-center mt-12">
          <h3 className="text-lg md:text-xl font-normal text-gray-700">
            Visarzo is clearly your best partner at Immigration & Visa success. 
            <Link 
              to="/index.html" 
              className="inline-flex items-center ml-2 group"
            >
              <span className="inline-block leading-6 border-b border-transparent transition-all duration-500 group-hover:border-[#0099cc] group-hover:text-[#0099cc]">
                Get In Touch
              </span>
              <i className="flaticon-send text-[#0099cc] text-sm font-semibold ml-2.5 -top-0.5 relative"></i>
            </Link>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default ImmigrationSection;