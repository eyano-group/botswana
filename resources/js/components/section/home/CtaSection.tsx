import React from 'react';

const CtaSection = () => {
  return (
    <section className="cta-section bg-[#0099cc] relative py-24 md:py-32 lg:py-44 px-4 text-center -mt-20 lg:-mt-24">
      <div className="auto-container max-w-7xl mx-auto">
        <div className="inner-box">
          <h2 className="relative block text-3xl md:text-4xl lg:text-5xl leading-tight text-white mb-3 font-bold">
            Unparalleled Consultancy from Experienced Lawyers
          </h2>
          
          <div className="text relative inline-block px-8 sm:px-12 md:px-20 lg:px-24">
            <p className="relative block text-lg md:text-xl lg:text-2xl leading-8 text-white">
              Dolor emque laudantium totam rem aperiam eaque ipsa quae ventore
            </p>
            
            {/* Lignes décoratives */}
            <div className="absolute left-5 sm:left-6 md:left-8 lg:left-12 bottom-3 w-10 h-0.5 bg-white"></div>
            <div className="absolute right-5 sm:right-6 md:right-8 lg:right-12 bottom-3 w-10 h-0.5 bg-white"></div>
            
            {/* Points décoratifs */}
            <div className="dotted-box">
              <div className="dotted absolute w-1 h-1 bg-white rounded-full left-4 sm:left-5 md:left-7 lg:left-11 bottom-3"></div>
              <div className="dotted absolute w-1 h-1 bg-white rounded-full left-2.5 sm:left-3 md:left-5 lg:left-9 bottom-3"></div>
              <div className="dotted absolute w-1 h-1 bg-white rounded-full left-1 sm:left-1 md:left-3 lg:left-7 bottom-3"></div>
              <div className="dotted absolute w-1 h-1 bg-white rounded-full right-4 sm:right-5 md:right-7 lg:right-11 bottom-3"></div>
              <div className="dotted absolute w-1 h-1 bg-white rounded-full right-2.5 sm:right-3 md:right-5 lg:right-9 bottom-3"></div>
              <div className="dotted absolute w-1 h-1 bg-white rounded-full right-1 sm:right-1 md:right-3 lg:right-7 bottom-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;