import React, { useState, useRef, useEffect } from 'react';

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  
  const testimonials = [
    {
      id: 1,
      name: 'James Thomas',
      location: 'California, USA',
      image: '/assets/images/resource/testimonial-1.png',
      service: 'Green Card Approved',
      text: 'Dolor sitam consectetur sed adipisicing eiusmod tempor cididunt laboret dolors magn aliquat enim sed minim veniam eu nostrud lorem ipsum dolor.'
    },
    {
      id: 2,
      name: 'Tanya Benson',
      location: 'California, USA',
      image: '/assets/images/resource/testimonial-2.png',
      service: 'Canada Immigration',
      text: 'Dolor sitam consectetur sed adipisicing eiusmod tempor cididunt laboret dolors magn aliquat enim sed minim veniam eu nostrud lorem ipsum dolor.'
    },
    {
      id: 3,
      name: 'James Thomas',
      location: 'California, USA',
      image: '/assets/images/resource/testimonial-1.png',
      service: 'Green Card Approved',
      text: 'Dolor sitam consectetur sed adipisicing eiusmod tempor cididunt laboret dolors magn aliquat enim sed minim veniam eu nostrud lorem ipsum dolor.'
    },
    {
      id: 4,
      name: 'Tanya Benson',
      location: 'California, USA',
      image: '/assets/images/resource/testimonial-2.png',
      service: 'Canada Immigration',
      text: 'Dolor sitam consectetur sed adipisicing eiusmod tempor cididunt laboret dolors magn aliquat enim sed minim veniam eu nostrud lorem ipsum dolor.'
    },
    {
      id: 5,
      name: 'James Thomas',
      location: 'California, USA',
      image: '/assets/images/resource/testimonial-1.png',
      service: 'Green Card Approved',
      text: 'Dolor sitam consectetur sed adipisicing eiusmod tempor cididunt laboret dolors magn aliquat enim sed minim veniam eu nostrud lorem ipsum dolor.'
    },
    {
      id: 6,
      name: 'Tanya Benson',
      location: 'California, USA',
      image: '/assets/images/resource/testimonial-2.png',
      service: 'Canada Immigration',
      text: 'Dolor sitam consectetur sed adipisicing eiusmod tempor cididunt laboret dolors magn aliquat enim sed minim veniam eu nostrud lorem ipsum dolor.'
    }
  ];
  
  // Fonctions pour la navigation du carrousel
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 2 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 2 : prev - 1));
  };
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  
  // Configuration du carrousel responsive
  const getVisibleItems = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 2; // lg
      if (window.innerWidth >= 768) return 1; // md
      return 1; // sm
    }
    return 2; // Valeur par défaut pour le SSR
  };
  
  const [visibleItems, setVisibleItems] = useState(getVisibleItems());
  
  useEffect(() => {
    const handleResize = () => {
      setVisibleItems(getVisibleItems());
      setCurrentSlide(0); // Réinitialiser la position lors du redimensionnement
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <section className="testimonial-section relative py-24 lg:py-32">
      <div className="auto-container max-w-7xl mx-auto px-4">
        {/* Titre de section */}
        <div className="sec-title text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-[#0099cc] font-semibold mb-2">clients testimonials</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            What Customers <br />Saying About Visarzo
          </h2>
          <div className="dotted-box relative inline-block">
            <span className="dotted absolute w-2 h-2 bg-[#0099cc] rounded-full left-0 bottom-0"></span>
            <span className="dotted absolute w-2 h-2 bg-[#0099cc] rounded-full left-3 bottom-0"></span>
            <span className="dotted absolute w-2 h-2 bg-[#0099cc] rounded-full left-6 bottom-0"></span>
          </div>
        </div>
        
        {/* Carrousel de témoignages */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100 / visibleItems)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full md:w-1/2 lg:w-1/2 px-3 flex-shrink-0"
                >
                  <div className="testimonial-block-one relative block border border-gray-300 p-6 md:p-8 lg:p-12 lg:px-12 lg:py-12 lg:pl-12 lg:pr-8 transition-all duration-500 hover:border-[#0099cc]">
                    <div className="inner-box relative pl-36 lg:pl-44">
                      {/* Informations de l'auteur */}
                      <div className="author-inner absolute left-0 top-3 lg:top-3 text-center">
                        <figure className="image-box relative inline-block w-16 h-16 rounded-full overflow-hidden mb-2">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover rounded-full"
                          />
                        </figure>
                        <h5 className="text-lg leading-7 font-semibold mb-0">
                          {testimonial.name}
                        </h5>
                        <span className="designation text-sm leading-5 text-gray-700 italic font-normal block">
                          {testimonial.location}
                        </span>
                      </div>
                      
                      {/* Contenu du témoignage */}
                      <div className="content-inner">
                        <div className="rating-box relative block mb-1">
                          <h6 className="text-sm leading-7 font-semibold text-[#0099cc] inline-block mr-3">
                            {testimonial.service}
                          </h6>
                          <ul className="rating relative inline-block">
                            {[...Array(5)].map((_, i) => (
                              <li key={i} className="relative inline-block text-xs leading-7 text-yellow-400">
                                <i className="fas fa-star"></i>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="text">
                          <p className="text-gray-600 leading-7">
                            {testimonial.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Boutons de navigation */}
          <div className="flex justify-center mt-14 space-x-2">
            {Array.from({ length: Math.ceil(testimonials.length / visibleItems) }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-5 bg-[#0099cc]' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;