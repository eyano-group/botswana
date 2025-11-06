import React, { useState, useEffect, useRef } from "react";
import { Link } from "@inertiajs/react";
import SearchPopup from "./SearchPopup";
import MobileMenu from "./MobileMenu";

// Composant pour la popup de recherche avec animations ultra-fluides

// Composant pour le menu mobile avec animations ultra-douces

// Composant principal du header avec animations fluides
const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [expandedItems, setExpandedItems] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        setIsSticky(true);
        setIsScrolled(true);
      } else {
        setIsSticky(false);
        setIsScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleItem = (item) => {
    setExpandedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const NAV_ITEMS = [
    {
      name: "home",
      href: "/home",
    },
    {
      name: "coaching",
      href: "/coaching",
    },
    {
      name: "services",
      href: "/services",
    },
    {
      name: "elements",
      href: "/elements",
    },
    {
      name: "about",
      href: "/about",
    },
    {
      name: "news & events",
      href: "/news",
    },
    {
      name: "contact",
      href: "/contact",
    },
  ];

  return (
    <>
      {/* Popup de recherche */}
      <SearchPopup
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Menu mobile */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Header principal avec animations fluides */}
      <header
        className={`main-header relative left-0 top-0 z-[999] w-full transition-all duration-500 ${isSticky ? "fixed-header" : ""}`}
      >
        {/* Barre supérieure avec animation de réduction douce */}
        <div
          className={`header-top bg-[#0099cc] transition-all duration-500 ${isScrolled ? "py-1 opacity-90" : "py-2 opacity-100"} px-4 lg:px-24 hidden md:block`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
              <div className="top-left">
                <ul className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-6 text-white text-xs sm:text-sm">
                  <li className="flex items-center group">
                    <i className="flaticon-home mr-2 text-base sm:text-lg group-hover:text-[#66d9ff] transition-all duration-300"></i>
                    <span className="hidden xs:inline">
                      72 Main Drive, Calibry, FL
                    </span>
                    <span className="xs:hidden">Calibry, FL</span>
                  </li>
                  <li className="flex items-center group">
                    <i className="flaticon-open-email-message mr-2 text-base sm:text-lg group-hover:text-[#66d9ff] transition-all duration-300"></i>
                    <a
                      href="mailto:inquiry@example.com"
                      className="hover:text-[#66d9ff] transition-all duration-300"
                    >
                      inquiry@example.com
                    </a>
                  </li>
                  <li className="flex items-center group">
                    <i className="flaticon-clock mr-2 text-base sm:text-lg group-hover:text-[#66d9ff] transition-all duration-300"></i>
                    <span className="hidden xs:inline">
                      Mon - Fri : 0900 to 1800
                    </span>
                    <span className="xs:hidden">0900-1800</span>
                  </li>
                </ul>
              </div>
              <div className="top-right">
                <ul className="social-links flex gap-3 sm:gap-4">
                  {[
                    "twitter",
                    "facebook-f",
                    "instagram",
                    "linkedin-in",
                    "google-plus-g",
                  ].map((social, index) => (
                    <li
                      key={social}
                      className="transform transition-all duration-300 hover:scale-110"
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <a
                        href="/index.html"
                        className="text-white hover:text-[#66d9ff] transition-all duration-300"
                      >
                        <i
                          className={`fab fa-${social} text-sm sm:text-base`}
                        ></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Barre de navigation principale avec animation de changement de couleur */}
        <div
          className={`header-upper relative w-full transition-all duration-500 ${isScrolled ? "bg-[#0099cc] bg-opacity-95 shadow-lg" : "bg-[#0099cc]"}`}
        >
          <div className="outer-container absolute left-0 top-0 right-0 w-full px-4 lg:px-24 border-b border-white border-opacity-20">
            <div className="flex flex-col lg:flex-row justify-between items-center py-2 lg:py-3">
              <div className="upper-left flex items-center mb-2 lg:mb-0 w-full lg:w-auto justify-between lg:justify-start">
                <figure className="logo-box">
                  <Link href="/index.html">
                    <img
                      src="/assets/logo/logo.png"
                      alt="Logo"
                      className={`h-8 lg:h-10 transition-all duration-300 ${isScrolled ? "hover:scale-95" : "hover:scale-105"}`}
                    />
                  </Link>
                </figure>
                <div className="btn-box lg:ml-6 hidden sm:block">
                  <Link
                    href="/index.html"
                    className="theme-btn-one inline-flex items-center px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 rounded-md font-semibold transition-all duration-300 transform hover:scale-105 border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#0099cc] shadow-lg relative overflow-hidden group"
                  >
                    <span className="relative z-10 transition-colors duration-300 flex items-center">
                      <span className="hidden sm:inline">Appointment</span>
                      <span className="sm:hidden">Book</span>
                      <i className="flaticon-send ml-2"></i>
                    </span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </Link>
                </div>
              </div>

              <div className="menu-area flex items-center w-full lg:w-auto justify-between lg:justify-end">
                {/* Boutons à droite en mobile */}
                <div className="flex items-center gap-3 lg:hidden">
                  {/* Bouton Search à gauche du numéro en mobile */}
                  <button
                    className="text-white focus:outline-none p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all transform hover:scale-105"
                    onClick={() => setIsSearchOpen(true)}
                    aria-label="Search"
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
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>

                  {/* Hamburger amélioré */}
                  <button
                    className="text-white focus:outline-none p-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300 transform hover:scale-105 relative group"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Open menu"
                  >
                    <div className="w-6 h-6 flex flex-col justify-between relative">
                      <span
                        className={`block h-0.5 bg-white transition-all duration-500 ease-out transform ${isMobileMenuOpen ? "rotate-45 translate-y-2.5" : ""} group-hover:bg-[#66d9ff]`}
                      ></span>
                      <span
                        className={`block h-0.5 bg-white transition-all duration-300 ease-out ${isMobileMenuOpen ? "opacity-0" : "opacity-100"} group-hover:bg-[#66d9ff]`}
                      ></span>
                      <span
                        className={`block h-0.5 bg-white transition-all duration-500 ease-out transform ${isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""} group-hover:bg-[#66d9ff]`}
                      ></span>
                    </div>
                  </button>
                </div>

                {/* Menu de navigation pour desktop */}
                <nav className="main-menu hidden lg:block">
                  <ul className="navigation flex">
                    {NAV_ITEMS.map((item, index) => (
                      <li key={item.name} className="relative group">
                        <Link
                          href={item.href}
                          className="text-white text-sm lg:text-base font-normal uppercase py-4 lg:py-6 px-2 lg:px-3 block hover:text-[#66d9ff] transition-all duration-300 relative"
                        >
                          {item.name.charAt(0).toUpperCase() +
                            item.name.slice(1)}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#66d9ff] transition-all duration-300 group-hover:w-full"></span>
                        </Link>

                        {/* Sous-menu */}
                        {item.name !== "contact" &&
                          item.name !== "home" &&
                          (item.name === "news & events" ? (
                            <ul className="absolute left-0 top-full w-64 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 z-50 rounded-b-lg">
                              <li>
                                <Link
                                  href={`${item.href}#latest-news`}
                                  className="block px-6 py-3.5 text-gray-800 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300 border-b border-gray-100"
                                >
                                  Latest News
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href={`${item.href}#upcoming-events`}
                                  className="block px-6 py-3.5 text-gray-800 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300 border-b border-gray-100"
                                >
                                  Upcoming Events
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href={`${item.href}#press-releases`}
                                  className="block px-6 py-3.5 text-gray-800 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300 border-b border-gray-100"
                                >
                                  Press Releases
                                </Link>
                              </li>
                            </ul>
                          ) : item.name === "about" ? (
                            <ul className="absolute left-0 top-full w-64 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 z-50 rounded-b-lg">
                              {/* About Botswana Submenu with its own sections */}
                              <li className="relative group/submenu-botswana">
                                <div className="flex items-center justify-between px-6 py-3.5 text-gray-800 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300 border-b border-gray-100 cursor-pointer">
                                  <span>About Botswana</span>
                                  <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 5l7 7-7 7"
                                    />
                                  </svg>
                                </div>
                                <ul className="absolute left-full top-0 w-56 bg-white shadow-xl opacity-0 invisible group-hover/submenu-botswana:opacity-100 group-hover/submenu-botswana:visible transition-all duration-300 transform translate-x-4 group-hover/submenu-botswana:translate-x-0 z-50 rounded-lg">
                                  <li>
                                    <Link
                                      href="/about/about-botswana#our-country"
                                      className="block px-6 py-3 text-gray-700 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300 border-b border-gray-100"
                                    >
                                      Our Country
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/about/about-botswana#public-holidays"
                                      className="block px-6 py-3 text-gray-700 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300 border-b border-gray-100"
                                    >
                                      Public Holidays
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/about/about-botswana#school-terms"
                                      className="block px-6 py-3 text-gray-700 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300"
                                    >
                                      School Terms
                                    </Link>
                                  </li>
                                </ul>
                              </li>

                              {/* About Government Submenu with its own sections */}
                              <li className="relative group/submenu-government">
                                <div className="flex items-center justify-between px-6 py-3.5 text-gray-800 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300 border-b border-gray-100 cursor-pointer">
                                  <span>About Government</span>
                                  <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 5l7 7-7 7"
                                    />
                                  </svg>
                                </div>
                                <ul className="absolute left-full top-0 w-56 bg-white shadow-xl opacity-0 invisible group-hover/submenu-government:opacity-100 group-hover/submenu-government:visible transition-all duration-300 transform translate-x-4 group-hover/submenu-government:translate-x-0 z-50 rounded-lg">
                                  <li>
                                    <Link
                                      href="/about/about-government#ministries-and-agencies"
                                      className="block px-6 py-3 text-gray-700 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300 border-b border-gray-100"
                                    >
                                      Ministries and Agencies
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/about/about-government#parastatals"
                                      className="block px-6 py-3 text-gray-700 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300 border-b border-gray-100"
                                    >
                                      Parastatals
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/about/about-government#publications"
                                      className="block px-6 py-3 text-gray-700 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300 border-b border-gray-100"
                                    >
                                      Publications
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/about/about-government#local-authorities"
                                      className="block px-6 py-3 text-gray-700 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300 border-b border-gray-100"
                                    >
                                      Local Authorities
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      href="/about/about-government#land-board"
                                      className="block px-6 py-3 text-gray-700 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300"
                                    >
                                      Land Board
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          ) : (
                            <ul className="absolute left-0 top-full w-64 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 z-50 rounded-b-lg">
                              <li>
                                <Link
                                  href="/index.html"
                                  className="block px-6 py-3.5 text-gray-800 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300 border-b border-gray-100"
                                >
                                  Page 01
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/index.html"
                                  className="block px-6 py-3.5 text-gray-800 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300 border-b border-gray-100"
                                >
                                  Page 02
                                </Link>
                              </li>
                            </ul>
                          ))}
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="menu-right-content flex items-center">
                  {/* Icône de recherche à gauche du numéro en desktop */}
                  <div className="search-box-outer px-2 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-5 border-l border-white border-opacity-20">
                    <button
                      className="search-toggler text-white text-lg sm:text-xl lg:text-2xl hover:text-[#66d9ff] transition-all duration-300 transform hover:scale-110"
                      onClick={() => setIsSearchOpen(true)}
                      aria-label="Search"
                    >
                      <i className="flaticon-search-1"></i>
                    </button>
                  </div>

                  {/* Support box */}
                  <div className="support-box px-2 sm:px-3 lg:px-6 py-3 sm:py-4 lg:py-5 relative">
                    <i className="fas fa-phone-volume absolute left-2 sm:left-4 lg:left-8 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white text-sm sm:text-base lg:text-lg"></i>
                    <div className="ml-10 sm:ml-12 lg:ml-16">
                      <p className="text-white text-xs sm:text-sm font-normal mb-1">
                        Any Questions? Call us
                      </p>
                      <h3 className="text-white text-sm sm:text-base lg:text-lg xl:text-xl font-bold">
                        <a
                          href="tel:12463330079"
                          className="hover:underline transition-all duration-300"
                        >
                          +1 (246) 333 0079
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Header sticky */}
        <div
          className={`sticky-header fixed left-0 top-0 w-full bg-[#0099cc] shadow-2xl transition-all duration-500 z-0 ${isSticky ? "opacity-100 visible z-[999] translate-y-0" : "opacity-0 invisible -translate-y-4"}`}
        >
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-2">
              <div className="logo-box">
                <Link href="/index.html">
                  <img
                    src="/assets/logo/logo.png"
                    alt="Logo"
                    className="h-7 sm:h-8 lg:h-10 transition-all duration-300 hover:scale-105"
                  />
                </Link>
              </div>
              <div className="menu-area">
                <nav className="main-menu hidden lg:block">
                  <ul className="navigation flex">
                    {[
                      "home",
                      "about",
                      "coaching",
                      "services",
                      "elements",
                      "blog",
                      "contact",
                    ].map((item, index) => (
                      <li key={item} className="px-2 sm:px-3">
                        <Link
                          href="/index.html"
                          className="text-white text-sm sm:text-base font-normal uppercase py-3 block hover:text-[#66d9ff] transition-all duration-300"
                        >
                          {item.charAt(0).toUpperCase() + item.slice(1)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Mobile menu button in sticky header */}
                <div className="lg:hidden flex items-center gap-3">
                  <button
                    className="text-white focus:outline-none p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all transform hover:scale-105"
                    onClick={() => setIsSearchOpen(true)}
                    aria-label="Search"
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
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>

                  <button
                    className="text-white focus:outline-none p-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300 transform hover:scale-105 relative group"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Open menu"
                  >
                    <div className="w-6 h-6 flex flex-col justify-between relative">
                      <span
                        className={`block h-0.5 bg-white transition-all duration-500 ease-out transform ${isMobileMenuOpen ? "rotate-45 translate-y-2.5" : ""} group-hover:bg-[#66d9ff]`}
                      ></span>
                      <span
                        className={`block h-0.5 bg-white transition-all duration-300 ease-out ${isMobileMenuOpen ? "opacity-0" : "opacity-100"} group-hover:bg-[#66d9ff]`}
                      ></span>
                      <span
                        className={`block h-0.5 bg-white transition-all duration-500 ease-out transform ${isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""} group-hover:bg-[#66d9ff]`}
                      ></span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
