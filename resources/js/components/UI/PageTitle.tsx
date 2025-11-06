import React from 'react';
import Breadcrumb from './Breadcrumb';

const PageTitle = ({ 
  title, 
  backgroundImage, 
  breadcrumbItems,
  className = "" 
}) => {
  return (
    <section 
      className={`relative block w-full bg-cover bg-no-repeat bg-center py-56 ${className}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="content-box">
          <div className="title-box relative block mb-8 pb-4">
            <h1 className="relative block text-5xl md:text-6xl leading-tight text-white font-bold mb-0">
              {title}
            </h1>
            
            {/* Decorative line and dots */}
            <div className="absolute bottom-0 left-0 flex items-center">
              <div className="w-10 h-0.5 bg-white"></div>
              <div className="flex ml-2">
                <span className="w-0.5 h-0.5 bg-white mr-1.5"></span>
                <span className="w-0.5 h-0.5 bg-white mr-1.5"></span>
                <span className="w-0.5 h-0.5 bg-white"></span>
              </div>
            </div>
          </div>
          
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>
    </section>
  );
};

export default PageTitle;