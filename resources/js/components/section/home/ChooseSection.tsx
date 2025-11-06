import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const ChooseSection = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  
  const benefits = [
    {
      id: 1,
      icon: 'flaticon-air-freight',
      title: 'Legal Immigration Success',
      description: 'Kaoreet efficitur leo. Aliquam era volutpat. lobortis sem consequat consequat imperdiet. In nulla sed viverraut loremut.'
    },
    {
      id: 2,
      icon: 'flaticon-report',
      title: 'Required Documents Support',
      description: 'Kaoreet efficitur leo. Aliquam era volutpat. lobortis sem consequat consequat imperdiet. In nulla sed viverraut loremut.'
    }
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
    <section className="choose-section relative py-24 lg:py-32 bg-[#eff2f5] overflow-hidden" ref={sectionRef}>
      {/* Pattern de fond */}
      <div 
        className="pattern-layer absolute inset-0 w-full h-full opacity-20"
        style={{ backgroundImage: "url(assets/images/shape/pattern-3.png)" }}
      ></div>
      
      {/* Image à droite - SEULEMENT SUR DESKTOP */}
      <figure 
        className={`hidden lg:block image-layer absolute top-[-60px] right-0 z-10 transition-all duration-1500 ${
          visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
        }`}
      >
        <img 
          src="/assets/images/resource/choose-1.jpg" 
          alt="Why choose us" 
          className="w-auto h-auto max-w-full"
        />
      </figure>
      
      <div className="auto-container relative z-20 max-w-7xl mx-auto px-4">
        <div id="content_block_2" className="flex flex-col items-center lg:items-start">
          <div className="content-box relative block w-full lg:max-w-[590px]">
            {/* Titre de section */}
            <div className="sec-title mb-8 text-center lg:text-left">
              <p className="text-sm uppercase tracking-wider text-[#0099cc] font-semibold mb-2">why choose visarzo</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Countless Benefits & Easy Processing
              </h2>
              <div className="dotted-box relative inline-block lg:block">
                <span className="dotted absolute w-2 h-2 bg-[#0099cc] rounded-full left-0 bottom-0"></span>
                <span className="dotted absolute w-2 h-2 bg-[#0099cc] rounded-full left-3 bottom-0"></span>
                <span className="dotted absolute w-2 h-2 bg-[#0099cc] rounded-full left-6 bottom-0"></span>
              </div>
            </div>
            
            {/* Texte d'introduction */}
            <div className="text relative mb-10">
              <p className="text-gray-600 leading-7 text-center lg:text-left">
                Nunc quam arcu, pretium quis quam sed, laoreet efficitur leo. Aliquam era volutpat. lobortis sem consequat consequat imperdiet. In nulla sed viverraut loremut dapib es tetur diam nunc bibendum imperdiets.
              </p>
            </div>
            
            {/* Liste des avantages */}
            <div className="inner-box">
              {benefits.map((benefit) => (
                <div 
                  key={benefit.id} 
                  className="single-item relative pl-28 mb-10 last:mb-0"
                >
                  {/* Icône */}
                  <div className="icon-box absolute left-0 top-1 w-16 h-16 lg:w-[70px] lg:h-[70px] leading-16 lg:leading-[70px] text-4xl lg:text-5xl text-black bg-white text-center shadow-lg rounded-full transition-all duration-500 hover:text-[#0099cc] hover:bg-[#0099cc]">
                    <i className={benefit.icon}></i>
                  </div>
                  
                  {/* Contenu */}
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-6">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseSection;