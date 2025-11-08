import React, { useState, useEffect, useRef } from "react";
import { Link } from "@inertiajs/react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const intervalRef = useRef(null);

  const slides = [
    {
      id: 1,
      image: "/assets/images/banner/banner-1.webp",
      title: "A Streamlined Path to Your Immigration Journey",
      description:
        "Experience a transparent, efficient, and citizen-focused immigration process designed to serve individuals, families, and businesses with excellence and integrity.",
      hasDescription: true,
    },
    {
      id: 2,
      image: "/assets/images/banner/banner-2.webp",
      topText: "Trusted Immigration Services",
      title: "Building a Modern, Accessible, and Secure Immigration System",
      hasDescription: false,
    },
    {
      id: 3,
      image: "/assets/images/banner/banner-3.webp",
      topText: "Empowering People, Strengthening Communities",
      title: "Your Gateway to a Seamless Immigration Experience in Botswana",
      hasDescription: false,
    },
  ];

  useEffect(() => {
    // Démarrer le carrousel automatique
    intervalRef.current = setInterval(() => {
      handleNextSlide();
    }, 6000);
    
    // Marquer le composant comme chargé pour déclencher les animations initiales
    setIsLoaded(true);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [currentSlide]);

  const handleNextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        setIsAnimating(false);
      }, 500);
    }
  };

  const handlePrevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
        setIsAnimating(false);
      }, 500);
    }
  };

  const handleSlideClick = (index) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsAnimating(false);
      }, 500);
    }
  };

  return (
    <section className="banner-section relative overflow-hidden">
      <div className="relative h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-screen">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide-item absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            {/* Image de fond avec effet de zoom */}
            <div
              className={`image-layer absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] ease-linear ${index === currentSlide ? "scale-110" : "scale-100"}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>

            {/* Overlay sombre avec gradient amélioré */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10"></div>

            {/* Contenu */}
            <div className="auto-container relative z-20 h-full flex items-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="row">
                  <div className="col-xl-7 col-lg-9 col-md-10 content-column">
                    <div
                      className={`content-box ${index === currentSlide && isLoaded ? "animate-content" : ""}`}
                    >
                      {slide.topText && (
                        <span
                          className={`top-text inline-block text-white text-sm sm:text-base md:text-lg mb-4 border-b border-white/80 pb-1 tracking-wider ${index === currentSlide && isLoaded ? "animate-top-text" : ""}`}
                        >
                          {slide.topText}
                        </span>
                      )}

                      <div
                        className={`title-text relative pb-6 mb-6 ${index === currentSlide && isLoaded ? "animate-title" : ""}`}
                      >
                        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-0">
                          {slide.title}
                        </h1>
                        <div className="absolute bottom-0 left-0 w-10 h-0.5 bg-white"></div>
                        <div className="dotted-box absolute bottom-0 left-10">
                          <span className="dotted absolute w-0.5 h-0.5 bg-white bottom-0 left-0"></span>
                          <span className="dotted absolute w-0.5 h-0.5 bg-white bottom-0 left-1.5"></span>
                          <span className="dotted absolute w-0.5 h-0.5 bg-white bottom-0 left-3"></span>
                        </div>
                      </div>

                      {slide.hasDescription && (
                        <p
                          className={`text-white/90 text-base sm:text-lg md:text-xl leading-7 md:leading-8 font-medium mb-8 max-w-xl ${index === currentSlide && isLoaded ? "animate-description" : ""}`}
                        >
                          {slide.description}
                        </p>
                      )}

                      <div
                        className={`btn-box ${index === currentSlide && isLoaded ? "animate-button" : ""}`}
                      >
                        <Link
                          href="/about/about-botswana"
                          className="theme-btn-one inline-flex items-center text-white border-2 border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
                        >
                          <i className="flaticon-send mr-2"></i>
                          Discover Solutions
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Boutons de navigation - Cachés sur mobile */}
        <div className="owl-nav absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-30 px-4 hidden md:block">
          <button
            className="owl-prev absolute left-4 md:left-8 w-12 h-12 md:w-14 md:h-14 text-white text-xl md:text-2xl border-2 border-white/60 rounded-full opacity-60 hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm"
            onClick={handlePrevSlide}
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="owl-next absolute right-4 md:right-8 w-12 h-12 md:w-14 md:h-14 text-white text-xl md:text-2xl border-2 border-white/60 rounded-full opacity-60 hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm"
            onClick={handleNextSlide}
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Indicateurs de slide avec design amélioré */}
        <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white w-8" : "bg-white/50 w-2"}`}
              onClick={() => handleSlideClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-top-text {
          animation: slideInFromTop 0.7s ease forwards;
        }

        .animate-title {
          animation: slideInFromRight 1s ease forwards;
        }

        .animate-description {
          animation: slideInFromLeft 1.3s ease forwards;
        }

        .animate-button {
          animation: slideInFromBottom 1.6s ease forwards;
        }

        .duration-6000 {
          transition-duration: 6000ms;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;