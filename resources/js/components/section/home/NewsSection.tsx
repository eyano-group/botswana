import React, { useState, useEffect, useRef } from 'react';
import { Link } from '@inertiajs/react';

const NewsSection = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  
  const newsItems = [
  {
    id: 1,
    // Image: Skilpadshek / Pioneer Gate border checkpoint (Wikimedia Commons)
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Skilpadshek_Pioneer_Gate_Border_Checkpoint.JPG',
    date: 30,
    month: 'May',
    title: 'Botswana e-Visa System Restored after Short Suspension',
    author: 'Department of Immigration',
    summary:
      'After a brief suspension at the end of April 2025, Botswana’s electronic visa (e-Visa) portal has been fully restored — applicants can now submit visa forms and supporting documents online.',
    categories: ['Visas', 'Digital Services'],
    source: 'https://visasnews.com/en/botswana-electronic-visa-application-system-restored/'
  },
  {
    id: 2,
    // Image: Okavango Delta (aerial / wetlands) (Wikimedia Commons)
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Okavango_Delta%2C_Botswana_%282674373339%29.jpg',
    date: 1,
    month: 'Dec',
    title: 'Okavango Delta: State of Conservation Report and Ongoing Measures',
    author: 'UNESCO / Government of Botswana',
    summary:
      'The State Party submitted a conservation report (Dec 2024) and the World Heritage Committee continues to monitor threats to the Okavango Delta while acknowledging progress in management and community-based measures.',
    categories: ['Environment', 'Conservation'],
    source: 'https://whc.unesco.org/en/list/1432/'
  },
  {
    id: 3,
    // Image: Gaborone skyline (Wikimedia Commons)
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Gaborone_skyline.JPG',
    date: 26,
    month: 'Sep',
    title: 'Government Announces Citizenship-by-Investment Initiative',
    author: 'Reuters',
    summary:
      'The government announced the design of a citizenship-by-investment programme aimed at diversifying the national economy and attracting capital for sectors such as housing, tourism and renewable energy.',
    categories: ['Economy', 'Policy'],
    source: 'https://www.reuters.com/world/africa/botswana-launches-citizenship-program-boost-economy-beyond-diamonds-2025-09-26/'
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
    <section className="news-section relative py-24 lg:py-32" ref={sectionRef}>
      <div className="auto-container max-w-7xl mx-auto px-4">
        {/* En-tête de section */}
        <div className="top-inner relative mb-10">
          <div className="flex flex-col lg:flex-row items-start justify-between">
            <div className="w-full lg:w-5/12 mb-8 lg:mb-0">
              <div className="sec-title">
                <p className="text-sm uppercase tracking-wider text-[#0099cc] font-semibold mb-2">How we help clients</p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                  World Immigration News & Updates
                </h2>
                <div className="dotted-box relative">
                  <span className="dotted absolute w-2 h-2 bg-[#0099cc] rounded-full left-0 bottom-0"></span>
                  <span className="dotted absolute w-2 h-2 bg-[#0099cc] rounded-full left-3 bottom-0"></span>
                  <span className="dotted absolute w-2 h-2 bg-[#0099cc] rounded-full left-6 bottom-0"></span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-7/12">
              <div className="text relative pl-0 lg:pl-10 mt-8 lg:mt-10">
                <p className="text-gray-600 leading-7 md:leading-8 text-base md:text-lg">
                  Sponsoring and managing work visas parts now becoming results in experience aute irure dolor in reprehenderit cepteur sint ocae cat cupidatat non proident sunt in culpa quis.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Grille d'articles */}
        <div className="flex flex-wrap -mx-4">
          {newsItems.map((item, index) => (
            <div 
              key={item.id} 
              className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
            >
              <div 
                className={`news-block-one relative block bg-gray-100 transition-all duration-500 hover:bg-white hover:shadow-lg ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: visible ? `${index * 300}ms` : '0ms',
                  transitionDuration: '1500ms'
                }}
              >
                <div className="inner-box">
                  {/* Image avec effet de survol */}
                  <figure className="image-box relative block overflow-hidden bg-black">
                    <div className="shine-effect absolute inset-0 z-10"></div>
                    <Link to="/blog-details.html">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-64 object-cover transition-all duration-500 hover:scale-105 hover:opacity-20"
                      />
                    </Link>
                  </figure>
                  
                  {/* Contenu de l'article */}
                  <div className="lower-content relative px-8 py-10">
                    {/* Date */}
                    <div className="post-date absolute right-8 top-[-58px] w-20 h-20 bg-[#0099cc] text-center p-3 z-20 rounded">
                      <h2 className="text-3xl font-bold text-white leading-9 m-0">
                        {item.date}
                      </h2>
                      <span className="text-xs text-white uppercase leading-4 block">
                        {item.month}
                      </span>
                    </div>
                    
                    {/* Titre */}
                    <h3 className="mb-3">
                      <Link 
                        to="/blog-details.html" 
                        className="text-xl font-semibold text-gray-800 hover:text-[#0099cc] transition-colors duration-300"
                      >
                        {item.title}
                      </Link>
                    </h3>
                    
                    {/* Métadonnées */}
                    <ul className="post-info relative block pb-4 mb-7">
                      <div className="absolute left-0 bottom-0 w-10 h-0.5 bg-gray-400"></div>
                      <li className="relative inline-block text-gray-600 text-sm font-light mr-5 pr-6">
                        <Link to="/index.html" className="hover:text-[#0099cc] transition-colors">
                          {item.author}
                        </Link>
                        <div className="absolute right-[-13px] top-1.5 w-0.5 h-4 bg-gray-400"></div>
                      </li>
                      {item.categories.map((category, catIndex) => (
                        <li key={catIndex} className="relative inline-block text-gray-600 text-sm font-light mr-5 pr-6 last:mr-0 last:pr-0">
                          <Link to="/index.html" className="hover:text-[#0099cc] transition-colors">
                            {category}
                          </Link>
                          {catIndex < item.categories.length - 1 && (
                            <div className="absolute right-[-13px] top-1.5 w-0.5 h-4 bg-gray-400"></div>
                          )}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Lien */}
                    <div className="link">
                      <Link 
                        to="/blog-details.html" 
                        className="relative inline-block text-lg font-semibold text-gray-700 hover:text-[#0099cc] transition-colors duration-300"
                      >
                        Learn More
                        <i className="flaticon-send text-[#0099cc] text-base ml-2.5"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .shine-effect {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 0%;
          transform: translate(-50%, -50%);
          opacity: 0;
          width: 0;
          height: 0;
        }
        
        .news-block-one:hover .shine-effect {
          animation: circle 0.95s;
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
      `}</style>
    </section>
  );
};

export default NewsSection;