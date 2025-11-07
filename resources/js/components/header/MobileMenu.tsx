import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { X, ChevronRight, Phone, Mail, MapPin, Clock } from "lucide-react";

const MobileMenu = ({ isOpen, onClose, navItems }) => {
  const [expandedItems, setExpandedItems] = useState({});
  const [isAnimating, setIsAnimating] = useState(false);
  
  const toggleItem = (item) => {
    setExpandedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  // Gérer l'état d'animation
  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
  }, [isOpen]);
  
  // Reset expanded items when menu closes
  useEffect(() => {
    if (!isOpen) {
      setExpandedItems({});
      // Délai pour permettre à l'animation de se terminer
      setTimeout(() => setIsAnimating(false), 500);
    }
  }, [isOpen]);
  
  if (!isOpen && !isAnimating) return null;
  
  return (
    <>
      <div 
        className={`fixed inset-0 bg-black transition-all duration-700 z-[99998] ${isOpen ? 'opacity-70 visible backdrop-blur-sm' : 'opacity-0 invisible'}`}
        onClick={onClose}
      ></div>
      
      <div className={`fixed right-0 top-0 h-full w-full max-w-sm bg-gradient-to-b from-gray-900 to-gray-800 z-[99999] transition-all duration-700 ease-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} shadow-2xl`}>
        <div className="h-full flex flex-col">
          <div className="flex justify-between items-center p-4 border-b border-gray-700 bg-gray-900/50 backdrop-blur">
            <Link href="/" onClick={onClose}>
              <img 
                src="/assets/logo/logo.png" 
                alt="Logo" 
                className="h-8"
              />
            </Link>
            <button 
              className="text-white hover:text-[#0099cc] transition-all duration-300 hover:rotate-90 transform p-2 rounded-lg hover:bg-gray-700"
              onClick={onClose}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1">
              {navItems.map((item, index) => (
                <li 
                  key={item.name} 
                  className="border-b border-gray-700/30 overflow-hidden"
                  style={{
                    animation: isOpen ? `fadeInUp 0.5s ease-out ${index * 0.1}s both` : 'none'
                  }}
                >
                  <div className="flex items-center justify-between">
                    <Link 
                      href={item.href}
                      className="flex-1 py-4 px-6 text-white text-sm font-medium uppercase hover:bg-gray-700/50 transition-all duration-300"
                      onClick={(e) => {
                        if (item.name === "services" || item.name === "about" || item.name === "news & events") {
                          e.preventDefault();
                          toggleItem(item.name);
                        } else {
                          onClose();
                        }
                      }}
                    >
                      {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                    </Link>
                    {(item.name === "services" || item.name === "about" || item.name === "news & events") && (
                      <button 
                        className="px-4 py-4 text-white hover:text-[#0099cc] transition-colors"
                        onClick={() => toggleItem(item.name)}
                      >
                        <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${expandedItems[item.name] ? 'rotate-90' : ''}`} />
                      </button>
                    )}
                  </div>
                  
                  {/* Sous-menus pour mobile avec animation en cascade */}
                  {(item.name === "services" || item.name === "about" || item.name === "news & events") && (
                    <div className={`overflow-hidden transition-all duration-700 ease-in-out ${expandedItems[item.name] ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <ul className="bg-gray-800/30 pb-2">
                        {/* Contenu des sous-menus adapté pour mobile */}
                        {item.name === "news & events" && (
                          <>
                            <li 
                              className="border-b border-gray-700/20"
                              style={{
                                animation: expandedItems[item.name] ? `fadeInLeft 0.4s ease-out 0.1s both` : 'none'
                              }}
                            >
                              <Link 
                                href="/news#latest-news"
                                className="block py-3 px-6 pl-10 text-gray-300 text-sm hover:bg-gray-700/30 hover:text-white transition-all duration-300"
                                onClick={onClose}
                              >
                                Latest News
                              </Link>
                            </li>
                            <li 
                              className="border-b border-gray-700/20"
                              style={{
                                animation: expandedItems[item.name] ? `fadeInLeft 0.4s ease-out 0.2s both` : 'none'
                              }}
                            >
                              <Link 
                                href="/news#upcoming-events"
                                className="block py-3 px-6 pl-10 text-gray-300 text-sm hover:bg-gray-700/30 hover:text-white transition-all duration-300"
                                onClick={onClose}
                              >
                                Upcoming Events
                              </Link>
                            </li>
                            <li 
                              style={{
                                animation: expandedItems[item.name] ? `fadeInLeft 0.4s ease-out 0.3s both` : 'none'
                              }}
                            >
                              <Link 
                                href="/news#press-releases"
                                className="block py-3 px-6 pl-10 text-gray-300 text-sm hover:bg-gray-700/30 hover:text-white transition-all duration-300"
                                onClick={onClose}
                              >
                                Press Releases
                              </Link>
                            </li>
                          </>
                        )}
                        
                        {item.name === "about" && (
                          <>
                            <li 
                              className="border-b border-gray-700/20"
                              style={{
                                animation: expandedItems[item.name] ? `fadeInLeft 0.4s ease-out 0.1s both` : 'none'
                              }}
                            >
                              <button 
                                className="w-full text-left py-3 px-6 pl-10 text-gray-300 text-sm hover:bg-gray-700/30 transition-all duration-300 flex items-center justify-between"
                                onClick={() => toggleItem('about-botswana')}
                              >
                                <span>About Botswana</span>
                                <ChevronRight className={`w-3 h-3 transition-transform duration-300 ${expandedItems['about-botswana'] ? 'rotate-90' : ''}`} />
                              </button>
                              <div className={`overflow-hidden transition-all duration-700 ${expandedItems['about-botswana'] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <ul className="bg-gray-900/30">
                                  <li>
                                    <Link 
                                      href="/about/about-botswana#our-country"
                                      className="block py-2.5 px-6 pl-14 text-gray-400 text-xs hover:bg-gray-700/30 hover:text-white transition-all duration-300"
                                      onClick={onClose}
                                    >
                                      Our Country
                                    </Link>
                                  </li>
                                  <li>
                                    <Link 
                                      href="/about/about-botswana#public-holidays"
                                      className="block py-2.5 px-6 pl-14 text-gray-400 text-xs hover:bg-gray-700/30 hover:text-white transition-all duration-300"
                                      onClick={onClose}
                                    >
                                      Public Holidays
                                    </Link>
                                  </li>
                                  <li>
                                    <Link 
                                      href="/about/about-botswana#school-terms"
                                      className="block py-2.5 px-6 pl-14 text-gray-400 text-xs hover:bg-gray-700/30 hover:text-white transition-all duration-300"
                                      onClick={onClose}
                                    >
                                      School Terms
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            
                            <li 
                              style={{
                                animation: expandedItems[item.name] ? `fadeInLeft 0.4s ease-out 0.2s both` : 'none'
                              }}
                            >
                              <button 
                                className="w-full text-left py-3 px-6 pl-10 text-gray-300 text-sm hover:bg-gray-700/30 transition-all duration-300 flex items-center justify-between"
                                onClick={() => toggleItem('about-government')}
                              >
                                <span>About Government</span>
                                <ChevronRight className={`w-3 h-3 transition-transform duration-300 ${expandedItems['about-government'] ? 'rotate-90' : ''}`} />
                              </button>
                              <div className={`overflow-hidden transition-all duration-700 ${expandedItems['about-government'] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <ul className="bg-gray-900/30">
                                  <li>
                                    <Link 
                                      href="/about/about-government#ministries-and-agencies"
                                      className="block py-2.5 px-6 pl-14 text-gray-400 text-xs hover:bg-gray-700/30 hover:text-white transition-all duration-300"
                                      onClick={onClose}
                                    >
                                      Ministries and Agencies
                                    </Link>
                                  </li>
                                  <li>
                                    <Link 
                                      href="/about/about-government#parastatals"
                                      className="block py-2.5 px-6 pl-14 text-gray-400 text-xs hover:bg-gray-700/30 hover:text-white transition-all duration-300"
                                      onClick={onClose}
                                    >
                                      Parastatals
                                    </Link>
                                  </li>
                                  <li>
                                    <Link 
                                      href="/about/about-government#publications"
                                      className="block py-2.5 px-6 pl-14 text-gray-400 text-xs hover:bg-gray-700/30 hover:text-white transition-all duration-300"
                                      onClick={onClose}
                                    >
                                      Publications
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </>
                        )}
                        
                        {item.name === "services" && (
                          <>
                            {/* Catégorie Services */}
                            <li 
                              className="border-b border-gray-700/20"
                              style={{
                                animation: expandedItems[item.name] ? `fadeInLeft 0.4s ease-out 0.1s both` : 'none'
                              }}
                            >
                              <button 
                                className="w-full text-left py-3 px-6 pl-10 text-gray-300 text-sm hover:bg-gray-700/30 transition-all duration-300 flex items-center justify-between"
                                onClick={() => toggleItem('services-category')}
                              >
                                <span>Services</span>
                                <ChevronRight className={`w-3 h-3 transition-transform duration-300 ${expandedItems['services-category'] ? 'rotate-90' : ''}`} />
                              </button>
                              <div className={`overflow-hidden transition-all duration-700 ${expandedItems['services-category'] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <ul className="bg-gray-900/30">
                                  {[
                                    { href: "/agriculture?txterm=128", label: "Agriculture" },
                                    { href: "/benefits-payments?txterm=98", label: "Benefits and Payments" },
                                    { href: "/culture-sports-tourism?txterm=107", label: "Recreation & Leisure" },
                                    { href: "/education-learning?txterm=110", label: "Education and Learning" },
                                    { href: "/health-wellness?txterm=120", label: "Health and Wellness" },
                                    { href: "/immigration-civil-registration?txterm=97", label: "Immigration and Civil Registration" },
                                    { href: "/labor-employment?txterm=132", label: "Labour and Employment" },
                                    { href: "/land-construction-housing?txterm=130", label: "Land, Construction and Housing" },
                                    { href: "/law-crime-Justice?txterm=155", label: "Law, Crime and Justice" },
                                    { href: "/living-botswana?txterm=148", label: "Living in Botswana" },
                                    { href: "/trade-industry?txterm=140", label: "Industry, Trade & Investment" },
                                    { href: "/natural-resources-environment?txterm=113", label: "Natural Resources and Environment" },
                                    { href: "/social-services?txterm=136", label: "Social Services" },
                                    { href: "/transport-communications?txterm=116", label: "Transport & Logistics" },
                                    { href: "/communications-technology?txterm=117", label: "Communications, Media & Radio Services" }
                                  ].map((service, serviceIndex) => (
                                    <li key={service.href}>
                                      <Link 
                                        href={service.href}
                                        className="block py-2.5 px-6 pl-14 text-gray-400 text-xs hover:bg-gray-700/30 hover:text-white transition-all duration-300"
                                        onClick={onClose}
                                      >
                                        {service.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </li>
                            
                            {/* Catégorie Service Links */}
                            <li 
                              style={{
                                animation: expandedItems[item.name] ? `fadeInLeft 0.4s ease-out 0.2s both` : 'none'
                              }}
                            >
                              <button 
                                className="w-full text-left py-3 px-6 pl-10 text-gray-300 text-sm hover:bg-gray-700/30 transition-all duration-300 flex items-center justify-between"
                                onClick={() => toggleItem('services-links')}
                              >
                                <span>Service Links</span>
                                <ChevronRight className={`w-3 h-3 transition-transform duration-300 ${expandedItems['services-links'] ? 'rotate-90' : ''}`} />
                              </button>
                              <div className={`overflow-hidden transition-all duration-700 ${expandedItems['services-links'] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <ul className="bg-gray-900/30">
                                  {[
                                    { href: "https://www.justice.gov.bw", label: "Administration of Justice" },
                                    { href: "http://www.baits2.gov.bw/login", label: "Animal Traceability" },
                                    { href: "https://www.iec.gov.bw/", label: "Independent Electoral Commission" },
                                    { href: "http://www.elaws.gov.bw/", label: "Laws of Botswana" },
                                    { href: "https://www.finance.gov.bw/", label: "Finance and Economic Development" },
                                    { href: "https://www.parliament.gov.bw", label: "Parliament of Botswana" },
                                    { href: "http://www.eservices.gov.bw/Tourism/Myhome.aspx", label: "Tourism Services" },
                                    { href: "http://www.eservices.gov.bw/", label: "Trade and Industry" },
                                    { href: "https://eservices.botswanapost.co.bw/EServices/Account/Login.aspx?ReturnURL=/Eservices/VehicleLicenceRenewal/VehicleRegistrationDetails.aspx", label: "Vehicle License Renewal" },
                                    { href: "https://www.rims.gov.bw/", label: "Research Information Management" },
                                    { href: "https://evisa.gov.bw", label: "e-visa" }
                                  ].map((link, linkIndex) => (
                                    <li key={link.href}>
                                      <a 
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block py-2.5 px-6 pl-14 text-gray-400 text-xs hover:bg-gray-700/30 hover:text-white transition-all duration-300"
                                        onClick={onClose}
                                      >
                                        {link.label}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </li>
                          </>
                        )}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          
          <div 
            className="p-6 border-t border-gray-700 bg-gray-900/30"
            style={{
              animation: isOpen ? `fadeInUp 0.5s ease-out 0.6s both` : 'none'
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#0099cc] rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white text-xs">Any Questions?</p>
                <a href="tel:+12463330079" className="text-white text-sm font-bold hover:text-[#66d9ff] transition-colors">
                  +1 (246) 333 0079
                </a>
              </div>
            </div>
            
            <Link
              href="/appointment"
              className="w-full px-4 py-3 rounded-lg font-semibold text-sm border-2 border-white text-white hover:bg-white hover:text-[#0099cc] transition-all duration-300 mb-4 block text-center"
              onClick={onClose}
            >
              Make Appointment
            </Link>
            
            <ul className="space-y-2 text-xs">
              <li className="text-gray-400 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0099cc] flex-shrink-0 mt-0.5" />
                <span>72 Main Drive, Calibry, FL</span>
              </li>
              <li className="text-gray-400 flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0099cc] flex-shrink-0" />
                <a href="mailto:inquiry@example.com" className="hover:text-white transition-colors">inquiry@example.com</a>
              </li>
              <li className="text-gray-400 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#0099cc] flex-shrink-0" />
                <span>Mon - Fri : 0900 to 1800</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Styles pour les animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default MobileMenu;