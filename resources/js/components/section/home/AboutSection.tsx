import React from 'react';
import { Link } from '@inertiajs/react';

const AboutSection = () => {
  return (
    <section className="about-section relative py-28 md:py-32 lg:py-40 px-4 mb-[-246px] overflow-hidden">
      {/* Pattern de fond */}
      <div 
        className="pattern-layer absolute inset-0 w-full h-full opacity-10 z-0"
        style={{ backgroundImage: "url(/assets/images/shape/pattern-1.png)" }}
      ></div>
      
      <div className="auto-container relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Colonne image */}
          <div className="w-full lg:w-1/2 md:w-full sm:w-full mb-12 lg:mb-0 lg:pr-8">
            <div id="image_block_1" className="relative">
              <div className="image-box relative lg:mr-16">
                {/* Image principale avec effet de brillance */}
                <figure className="image relative block overflow-hidden rounded-lg shadow-xl">
                  <div className="shine-effect absolute inset-0 z-10"></div>
                  <img 
                    src="/assets/images/resource/about-1.jpg" 
                    alt="About us" 
                    className="w-full h-auto object-cover"
                  />
                </figure>
                
                {/* Boîte d'informations - CORRIGÉ */}
                <div className="box absolute bottom-[-70px] left-8 sm:left-12 lg:left-20 w-[calc(100%-80px)] sm:w-[calc(100%-120px)] lg:w-[calc(100%-160px)] bg-white p-2.5 z-30 rounded-lg shadow-2xl">
                  <div className="inner relative block overflow-hidden w-full bg-white border-8 border-[#2d5883] p-6 sm:p-8 lg:p-10">
                    <span className="relative block text-xs sm:text-sm leading-5 text-gray-800 uppercase mb-6 font-semibold">
                      America's Leading Visa & Immigration lawyers with
                    </span>
                    <h1 className="relative block text-5xl sm:text-6xl lg:text-7xl font-bold leading-[50px] sm:leading-[60px] lg:leading-[70px] mb-0 text-gray-900">
                      24
                    </h1>
                    <p className="text-sm sm:text-base font-medium text-gray-800">
                      Years Of Experience
                    </p>
                    
                    {/* Icônes décoratives */}
                    <div className="icon-box absolute pointer-events-none">
                      <div className="icon icon-1 absolute w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] lg:w-[171px] lg:h-[171px] bg-[#edf6ff] rounded-full left-[-20px] bottom-[-20px] opacity-60"></div>
                      <div className="icon icon-2 absolute w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] lg:w-[171px] lg:h-[171px] bg-[#edf6ff] rounded-full right-[-60px] sm:right-[-75px] lg:right-[-90px] top-[-100px] sm:top-[-120px] lg:top-[-135px] opacity-60"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Colonne contenu */}
          <div className="w-full lg:w-1/2 md:w-full sm:w-full lg:pl-4">
            <div id="content_block_1">
              <div className="content-box relative lg:ml-[-30px] bg-white bg-opacity-90 p-6 sm:p-8 rounded-lg shadow-lg">
                {/* Titre de section */}
                <div className="sec-title mb-6">
                  <p className="text-sm uppercase tracking-wider text-[#0099cc] font-semibold mb-2">who are visarzo</p>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Not Just Traditional Visa & Immigration Firm
                  </h2>
                  <div className="dotted-box relative h-3">
                    <span className="dotted absolute w-2 h-2 bg-[#0099cc] rounded-full left-0 bottom-0"></span>
                    <span className="dotted absolute w-2 h-2 bg-[#0099cc] rounded-full left-3 bottom-0"></span>
                    <span className="dotted absolute w-2 h-2 bg-[#0099cc] rounded-full left-6 bottom-0"></span>
                  </div>
                </div>
                
                {/* Texte en gras */}
                <div className="bold-text mb-4">
                  <p className="relative block text-lg sm:text-xl md:text-2xl leading-7 sm:leading-8 md:leading-9 font-normal text-gray-700">
                    Sponsoring and managing work visas parts now becoming results in experience.
                  </p>
                </div>
                
                {/* Texte normal */}
                <div className="text mb-8">
                  <p className="text-gray-600 leading-6 sm:leading-7">
                    Nunc quam arcu, pretium quis quam sed, laoreet efficitur leo. Aliquam era volutpat. lobortis sem consequat consequat imperdiet. In nulla sed viverraut loremut dapib es tetur diam nunc bibendum imperdiets.
                  </p>
                </div>
                
                {/* Bouton */}
                <div className="btn-box">
                  <Link 
                    to="/index.html" 
                    className="theme-btn-two inline-flex items-center text-white bg-[#0099cc] hover:bg-[#0080b3] px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Learn More
                    <i className="flaticon-send ml-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .shine-effect {
          background: linear-gradient(to right, rgba(0, 153, 204, 0) 0%, rgba(0, 153, 204, 0.3) 100%);
          transform: skewX(-25deg);
          left: -75%;
          width: 50%;
          height: 100%;
        }
        
        .image-box:hover .shine-effect {
          animation: shine 1s;
        }
        
        @keyframes shine {
          100% {
            left: 125%;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;