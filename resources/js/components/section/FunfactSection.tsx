import React, { useState, useEffect, useRef } from 'react';

const FunFactSection = () => {
  const [counters, setCounters] = useState([
    { id: 1, count: 0, target: 560, suffix: '', title: 'We Have Worked With Clients' },
    { id: 2, count: 0, target: 99, suffix: '%', title: 'Successfull Visa Process Rate' },
    { id: 3, count: 0, target: 42, suffix: 'hrs', title: 'Application Approval Time We Follow' }
  ]);
  
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  
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
  
  useEffect(() => {
    if (visible) {
      const interval = setInterval(() => {
        setCounters(prevCounters => 
          prevCounters.map(counter => {
            const increment = Math.ceil(counter.target / 30); // Compléter en 30 étapes
            const newCount = Math.min(counter.count + increment, counter.target);
            return { ...counter, count: newCount };
          })
        );
      }, 50);
      
      return () => clearInterval(interval);
    }
  }, [visible]);
  
  return (
    <section className="funfact-section relative py-16 md:py-20 lg:py-24 bg-[#0c2136]" ref={sectionRef}>
      <div className="auto-container max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {counters.map((counter, index) => (
            <div 
              key={counter.id} 
              className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 lg:mb-0"
            >
              <div 
                className={`counter-block-one relative block ${
                  index === 0 ? 'border-l border-gray-700' : ''
                } border-r border-gray-700 py-20 lg:py-24 px-4 md:px-8 lg:px-16 transition-all duration-1000 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: visible ? `${index * 200}ms` : '0ms',
                  transitionDuration: '1500ms'
                }}
              >
                <div className="inner-box text-center">
                  <div className="count-outer count-box relative block text-5xl md:text-6xl lg:text-7xl leading-none font-light text-[#0099cc] mb-4">
                    <span className="count-text">{counter.count}</span>
                    {counter.suffix && <span>{counter.suffix}</span>}
                  </div>
                  <h3 className="text-white text-lg md:text-xl leading-7 font-normal">
                    {counter.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFactSection;