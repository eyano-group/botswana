import React from 'react';
import { Link } from '@inertiajs/react';

const FeatureSection = () => {
  const features = [
    {
      id: 1,
      image: '/assets/images/resource/feature-1.jpg',
      title: 'Apply Visa Online',
      delay: '0ms'
    },
    {
      id: 2,
      image: '/assets/images/resource/feature-2.jpg',
      title: 'Important Information',
      delay: '300ms'
    },
    {
      id: 3,
      image: '/assets/images/resource/feature-3.jpg',
      title: 'Immigration Resources',
      delay: '600ms'
    }
  ];

  return (
    <section className="feature-section py-16 md:py-20 lg:py-24">
      <div className="auto-container max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {features.map((feature, index) => (
            <div key={feature.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div 
                className="feature-block-one relative z-10 opacity-0 animate-fadeInUp"
                style={{ 
                  animationDelay: feature.delay,
                  animationDuration: '1500ms',
                  animationFillMode: 'forwards'
                }}
              >
                <div className="inner-box relative block bg-white text-center shadow-xl rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
                  {/* Image avec effet de survol */}
                  <figure className="image-box relative block overflow-hidden h-48 md:h-56 lg:h-64">
                    <div className="circle-overlay absolute top-1/2 left-1/2 z-20 w-0 h-0 bg-[#0099cc] bg-opacity-20 rounded-full transform -translate-x-1/2 -translate-y-1/2 opacity-0"></div>
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                  </figure>
                  
                  {/* Titre */}
                  <div className="text relative py-8 px-4">
                    <h3 className="relative block text-xl md:text-2xl leading-8 font-semibold transition-all duration-500">
                      <Link 
                        href="/index.html" 
                        className="inline-block text-gray-800 hover:text-[#0099cc] transition-colors duration-300"
                      >
                        {feature.title}
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes circle {
          0% {
            opacity: 1;
          }
          40% {
            opacity: 1;
          }
          100% {
            width: 200%;
            height: 200%;
            opacity: 0;
          }
        }
        
        .animate-fadeInUp {
          animation-name: fadeInUp;
        }
        
        .feature-block-one:hover .circle-overlay {
          animation: circle 0.75s;
        }
        
        .feature-block-one:hover img {
          transform: scale(1.03);
        }
      `}</style>
    </section>
  );
};

export default FeatureSection;