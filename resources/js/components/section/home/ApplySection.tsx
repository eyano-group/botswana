import React from 'react';
import { Link } from '@inertiajs/react';

const ApplySection = () => {
  return (
    <section className="apply-section relative py-20 lg:py-24 overflow-hidden">
      <div className="auto-container relative z-10 max-w-7xl mx-auto px-4">
        <div className="inner-box relative lg:pl-0 lg:pl-[380px]">
          {/* Image avec effet de brillance */}
          <figure className="image-box absolute block overflow-hidden left-0 top-0 w-full lg:w-auto lg:max-w-md h-64 md:h-80 lg:h-auto z-0">
            <div className="shine-effect absolute inset-0 z-10"></div>
            <img 
              src="/assets/images/resource/apply-1.jpg" 
              alt="Apply for visa" 
              className="w-full h-full object-cover"
            />
          </figure>
          
          {/* Contenu avec fond de couleur principale */}
          <div className="content-box relative overflow-hidden bg-[#0099cc] p-8 md:p-12 lg:p-16 lg:pl-20 lg:pr-20 ml-0 lg:ml-10 mt-64 md:mt-80 lg:mt-0 rounded-lg lg:rounded-none lg:rounded-l-lg shadow-xl">
            {/* Icônes décoratives */}
            <div className="icon-box absolute">
              <div className="icon icon-1 absolute w-48 h-48 md:w-64 md:h-64 lg:w-[255px] lg:h-[255px] bg-white bg-opacity-10 rounded-full left-[-70px] bottom-[-75px]"></div>
              <div className="icon icon-2 absolute w-48 h-48 md:w-64 md:h-64 lg:w-[255px] lg:h-[255px] bg-white bg-opacity-10 rounded-full top-[-70px] right-[-190px]"></div>
            </div>
            
            {/* Titres et bouton */}
            <h4 className="block text-lg md:text-xl leading-8 text-white font-normal mb-2">
              Get Free Online Visa Assessment Today!
            </h4>
            <h2 className="block text-2xl md:text-3xl lg:text-4xl leading-10 lg:leading-[50px] font-semibold text-white mb-8">
              Top Rated By Customers & Immigration Firms With 100% Success Rate.
            </h2>
            
            <Link 
              href="/index.html" 
              className="theme-btn-one inline-flex items-center text-white border-2 border-white px-6 md:px-8 py-3 rounded-md transition-all duration-300 hover:bg-white hover:text-[#0099cc] transform hover:scale-105"
            >
              <i className="flaticon-send mr-2 md:mr-3 transition-all duration-300"></i>
              Apply Visa Now
            </Link>
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

export default ApplySection;