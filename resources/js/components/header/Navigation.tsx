import { useState, useEffect, useRef } from 'react';
import { Link } from '@inertiajs/react';
import { FaBars, FaTimes, FaChevronDown, FaChevronRight } from 'react-icons/fa';

const Navigation = ({ NAV_ITEMS }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [openServiceColumn, setOpenServiceColumn] = useState(null);
  const menuRef = useRef(null);

  // Fermer le menu lors du clic à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setOpenSubmenu(null);
        setOpenServiceColumn(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setOpenSubmenu(null);
      setOpenServiceColumn(null);
    }
  };

  const toggleSubmenu = (menuName) => {
    if (openSubmenu === menuName) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(menuName);
      setOpenServiceColumn(null);
    }
  };

  const toggleServiceColumn = (columnName) => {
    if (openServiceColumn === columnName) {
      setOpenServiceColumn(null);
    } else {
      setOpenServiceColumn(columnName);
    }
  };

  return (
    <>
      {/* Menu Mobile - Bouton Burger */}
      <div className="lg:hidden flex items-center justify-between p-4">
        <div className="text-white font-bold text-xl">Botswana Gov</div>
        <button
          onClick={toggleMobileMenu}
          className="text-white hover:text-blue-300 focus:outline-none transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Menu Mobile - Navigation */}
      <div
        ref={menuRef}
        className={`lg:hidden fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          <div className="flex items-center justify-between p-4 border-b border-blue-800">
            <div className="text-white font-bold text-xl">Botswana Gov</div>
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-blue-300 focus:outline-none transition-colors duration-300"
              aria-label="Close menu"
            >
              <FaTimes size={24} />
            </button>
          </div>

          <nav className="flex-1">
            <ul className="py-4">
              {NAV_ITEMS.map((item, index) => (
                <li key={item.name} className="border-b border-blue-800">
                  {item.name !== "contact" &&
                  item.name !== "e-services" &&
                  item.name !== "home" ? (
                    <div>
                      <button
                        onClick={() => toggleSubmenu(item.name)}
                        className="flex items-center justify-between w-full text-left text-white py-4 px-6 hover:bg-blue-800 focus:outline-none transition-colors duration-300"
                      >
                        <span>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</span>
                        <FaChevronDown
                          className={`transform transition-transform duration-300 ${
                            openSubmenu === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {/* Sous-menu Mobile */}
                      {openSubmenu === item.name && (
                        <div className="bg-blue-800">
                          {item.name === "news & events" && (
                            <ul>
                              <li>
                                <Link
                                  href={`${item.href}#latest-news`}
                                  className="block text-blue-200 py-3 px-6 pl-10 hover:bg-blue-700 focus:outline-none transition-colors duration-300"
                                >
                                  Latest News
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href={`${item.href}#upcoming-events`}
                                  className="block text-blue-200 py-3 px-6 pl-10 hover:bg-blue-700 focus:outline-none transition-colors duration-300"
                                >
                                  Upcoming Events
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href={`${item.href}#press-releases`}
                                  className="block text-blue-200 py-3 px-6 pl-10 hover:bg-blue-700 focus:outline-none transition-colors duration-300"
                                >
                                  Press Releases
                                </Link>
                              </li>
                            </ul>
                          )}

                          {item.name === "about" && (
                            <ul>
                              <li>
                                <button
                                  onClick={() => toggleServiceColumn('about-botswana')}
                                  className="flex items-center justify-between w-full text-left text-blue-200 py-3 px-6 pl-10 hover:bg-blue-700 focus:outline-none transition-colors duration-300"
                                >
                                  <span>About Botswana</span>
                                  <FaChevronRight
                                    className={`transform transition-transform duration-300 ${
                                      openServiceColumn === 'about-botswana' ? 'rotate-90' : ''
                                    }`}
                                  />
                                </button>
                                {openServiceColumn === 'about-botswana' && (
                                  <ul className="bg-blue-700">
                                    <li>
                                      <Link
                                        href="/about/about-botswana#our-country"
                                        className="block text-blue-100 py-2 px-6 pl-16 hover:bg-blue-600 focus:outline-none transition-colors duration-300"
                                      >
                                        Our Country
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="/about/about-botswana#public-holidays"
                                        className="block text-blue-100 py-2 px-6 pl-16 hover:bg-blue-600 focus:outline-none transition-colors duration-300"
                                      >
                                        Public Holidays
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="/about/about-botswana#school-terms"
                                        className="block text-blue-100 py-2 px-6 pl-16 hover:bg-blue-600 focus:outline-none transition-colors duration-300"
                                      >
                                        School Terms
                                      </Link>
                                    </li>
                                  </ul>
                                )}
                              </li>
                              <li>
                                <button
                                  onClick={() => toggleServiceColumn('about-government')}
                                  className="flex items-center justify-between w-full text-left text-blue-200 py-3 px-6 pl-10 hover:bg-blue-700 focus:outline-none transition-colors duration-300"
                                >
                                  <span>About Government</span>
                                  <FaChevronRight
                                    className={`transform transition-transform duration-300 ${
                                      openServiceColumn === 'about-government' ? 'rotate-90' : ''
                                    }`}
                                  />
                                </button>
                                {openServiceColumn === 'about-government' && (
                                  <ul className="bg-blue-700">
                                    <li>
                                      <Link
                                        href="/about/about-government#ministries-and-agencies"
                                        className="block text-blue-100 py-2 px-6 pl-16 hover:bg-blue-600 focus:outline-none transition-colors duration-300"
                                      >
                                        Ministries and Agencies
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="/about/about-government#parastatals"
                                        className="block text-blue-100 py-2 px-6 pl-16 hover:bg-blue-600 focus:outline-none transition-colors duration-300"
                                      >
                                        Parastatals
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="/about/about-government#publications"
                                        className="block text-blue-100 py-2 px-6 pl-16 hover:bg-blue-600 focus:outline-none transition-colors duration-300"
                                      >
                                        Publications
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="/about/about-government#local-authorities"
                                        className="block text-blue-100 py-2 px-6 pl-16 hover:bg-blue-600 focus:outline-none transition-colors duration-300"
                                      >
                                        Local Authorities
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="/about/about-government#land-board"
                                        className="block text-blue-100 py-2 px-6 pl-16 hover:bg-blue-600 focus:outline-none transition-colors duration-300"
                                      >
                                        Land Board
                                      </Link>
                                    </li>
                                  </ul>
                                )}
                              </li>
                            </ul>
                          )}

                          {item.name === "services" && (
                            <ul>
                              <li>
                                <button
                                  onClick={() => toggleServiceColumn('services')}
                                  className="flex items-center justify-between w-full text-left text-blue-200 py-3 px-6 pl-10 hover:bg-blue-700 focus:outline-none transition-colors duration-300"
                                >
                                  <span>Services</span>
                                  <FaChevronRight
                                    className={`transform transition-transform duration-300 ${
                                      openServiceColumn === 'services' ? 'rotate-90' : ''
                                    }`}
                                  />
                                </button>
                                {openServiceColumn === 'services' && (
                                  <ul className="bg-blue-700">
                                    <li>
                                      <Link
                                        href="/agriculture?txterm=128"
                                        className="block text-blue-100 py-2 px-6 pl-16 hover:bg-blue-600 focus:outline-none transition-colors duration-300"
                                      >
                                        Agriculture
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="/benefits-payments?txterm=98"
                                        className="block text-blue-100 py-2 px-6 pl-16 hover:bg-blue-600 focus:outline-none transition-colors duration-300"
                                      >
                                        Benefits and Payments
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="/culture-sports-tourism?txterm=107"
                                        className="block text-blue-100 py-2 px-6 pl-16 hover:bg-blue-600 focus:outline-none transition-colors duration-300"
                                      >
                                        Recreation & Leisure
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="/education-learning?txterm=110"
                                        className="block text-blue-100 py-2 px-6 pl-16 hover:bg-blue-600 focus:outline-none transition-colors duration-300"
                                      >
                                        Education and Learning
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="/health-wellness?txterm=120"
                                        className="block text-blue-100 py-2 px-6 pl-16 hover:bg-blue-600 focus:outline-none transition-colors duration-300"
                                      >
                                        Health and Wellness
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="/immigration-civil-registration?txterm=97"
                                        className="block text-blue-100 py-2 px-6 pl-16 hover:bg-blue-600 focus:outline-none transition-colors duration-300"
                                      >
                                        Immigration and Civil Registration
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="/labor-employment?txterm=132"
                                        className="block text-blue-100 py-2 px-6 pl-16 hover:bg-blue-600 focus:outline-none transition-colors duration-300"
                                      >
                                        Labour and Employment
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="/land-construction-housing?txterm=130"
                                        className="block text-blue-100 py-2 px-6 pl-16 hover:bg-blue-600 focus:outline-none transition-colors duration-300"
                                      >
                                        Land, Construction and Housing
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="/law-crime-Justice?txterm=155"
                                        className="block text-blue-100 py-2 px-6 pl-16 hover:bg-blue-600 focus:outline-none transition-colors duration-300"
                                      >
                                        Law, Crime and Justice
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="/living-botswana?txterm=148"
                                        className="block text-blue-100 py-2 px-6 pl-16 hover:bg-blue-600 focus:outline-none transition-colors duration-300"
                                      >
                                        Living in Botswana
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="/trade-industry?txterm=140"
                                        className="block text-blue-100 py-2 px-6 pl-16 hover:bg-blue-600 focus:outline-none transition-colors duration-300"
                                      >
                                        Industry, Trade & Investment
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="/natural-resources-environment?txterm=113"
                                        className="block text-blue-100 py-2 px-6 pl-16 hover:bg-blue-600 focus:outline-none transition-colors duration-300"
                                      >
                                        Natural Resources and Environment
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="/social-services?txterm=136"
                                        className="block text-blue-100 py-2 px-6 pl-16 hover:bg-blue-600 focus:outline-none transition-colors duration-300"
                                      >
                                        Social Services
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="/transport-communications?txterm=116"
                                        className="block text-blue-100 py-2 px-6 pl-16 hover:bg-blue-600 focus:outline-none transition-colors duration-300"
                                      >
                                        Transport & Logistics
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        href="/communications-technology?txterm=117"
                                        className="block text-blue-100 py-2 px-6 pl-16 hover:bg-blue-600 focus:outline-none transition-colors duration-300"
                                      >
                                        Communications, Media & Radio Services
                                      </Link>
                                    </li>
                                  </ul>
                                )}
                              </li>
                              <li>
                                <button
                                  onClick={() => toggleServiceColumn('service-links')}
                                  className="flex items-center justify-between w-full text-left text-blue-200 py-3 px-6 pl-10 hover:bg-blue-700 focus:outline-none transition-colors duration-300"
                                >
                                  <span>Service Links</span>
                                  <FaChevronRight
                                    className={`transform transition-transform duration-300 ${
                                      openServiceColumn === 'service-links' ? 'rotate-90' : ''
                                    }`}
                                  />
                                </button>
                                {openServiceColumn === 'service-links' && (
                                  <ul className="bg-blue-700">
                                    <li>
                                      <a
                                        href="https://www.justice.gov.bw"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block text-blue-100 py-2 px-6 pl-16 hover:bg-blue-600 focus:outline-none transition-colors duration-300"
                                      >
                                        Administration of Justice
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="http://www.baits2.gov.bw/login"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block text-blue-100 py-2 px-6 pl-16 hover:bg-blue-600 focus:outline-none transition-colors duration-300"
                                      >
                                        Animal Traceability and Identification
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="https://www.iec.gov.bw/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block text-blue-100 py-2 px-6 pl-16 hover:bg-blue-600 focus:outline-none transition-colors duration-300"
                                      >
                                        Independent Electoral Commission
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="http://www.elaws.gov.bw/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block text-blue-100 py-2 px-6 pl-16 hover:bg-blue-600 focus:outline-none transition-colors duration-300"
                                      >
                                        Laws of Botswana
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="https://www.finance.gov.bw/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block text-blue-100 py-2 px-6 pl-16 hover:bg-blue-600 focus:outline-none transition-colors duration-300"
                                      >
                                        Ministry of Finance and Economic Development
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="https://www.parliament.gov.bw"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block text-blue-100 py-2 px-6 pl-16 hover:bg-blue-600 focus:outline-none transition-colors duration-300"
                                      >
                                        Parliament of Botswana
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="http://www.eservices.gov.bw/Tourism/Myhome.aspx"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block text-blue-100 py-2 px-6 pl-16 hover:bg-blue-600 focus:outline-none transition-colors duration-300"
                                      >
                                        Tourism Services
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="http://www.eservices.gov.bw/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block text-blue-100 py-2 px-6 pl-16 hover:bg-blue-600 focus:outline-none transition-colors duration-300"
                                      >
                                        Trade and Industry
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="https://eservices.botswanapost.co.bw/EServices/Account/Login.aspx?ReturnURL=/Eservices/VehicleLicenceRenewal/VehicleRegistrationDetails.aspx"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block text-blue-100 py-2 px-6 pl-16 hover:bg-blue-600 focus:outline-none transition-colors duration-300"
                                      >
                                        Vehicle License Renewal
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="https://www.rims.gov.bw/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block text-blue-100 py-2 px-6 pl-16 hover:bg-blue-600 focus:outline-none transition-colors duration-300"
                                      >
                                        RESEARCH INFORMATION MANAGEMENT SYSTEM
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="https://evisa.gov.bw"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block text-blue-100 py-2 px-6 pl-16 hover:bg-blue-600 focus:outline-none transition-colors duration-300"
                                      >
                                        e-visa
                                      </a>
                                    </li>
                                  </ul>
                                )}
                              </li>
                            </ul>
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-white py-4 px-6 hover:bg-blue-800 focus:outline-none transition-colors duration-300"
                    >
                      {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Menu Desktop */}
      <nav className="hidden lg:block bg-blue-900 shadow-lg">
        <div className="container mx-auto">
          <ul className="navigation flex">
            {NAV_ITEMS.map((item, index) => (
              <li key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="text-white text-sm lg:text-base font-normal uppercase py-4 lg:py-6 px-2 lg:px-3 block hover:text-[#66d9ff] transition-all duration-300 relative"
                >
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#66d9ff] transition-all duration-300 group-hover:w-full"></span>
                </Link>

                {/* Sous-menu Desktop */}
                {item.name !== "contact" &&
                  item.name !== "e-services" &&
                  item.name !== "home" &&
                  (item.name === "news & events" ? (
                    <ul className="absolute left-0 top-full w-64 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 z-50 rounded-b-lg">
                      <li>
                        <Link
                          href={`${item.href}#latest-news`}
                          className="flex items-center px-6 py-3.5 text-gray-800 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300 border-b border-gray-100"
                        >
                          <i className="fa fa-newspaper-o mr-3 text-blue-600"></i>
                          Latest News
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={`${item.href}#upcoming-events`}
                          className="flex items-center px-6 py-3.5 text-gray-800 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300 border-b border-gray-100"
                        >
                          <i className="fa fa-calendar mr-3 text-blue-600"></i>
                          Upcoming Events
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={`${item.href}#press-releases`}
                          className="flex items-center px-6 py-3.5 text-gray-800 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300"
                        >
                          <i className="fa fa-file-text-o mr-3 text-blue-600"></i>
                          Press Releases
                        </Link>
                      </li>
                    </ul>
                  ) : item.name === "about" ? (
                    <ul className="absolute left-0 top-full w-64 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 z-50 rounded-b-lg">
                      {/* About Botswana Submenu */}
                      <li className="relative group/submenu-botswana">
                        <div className="flex items-center justify-between px-6 py-3.5 text-gray-800 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300 border-b border-gray-100 cursor-pointer">
                          <span className="flex items-center">
                            <i className="fa fa-globe mr-3 text-blue-600"></i>
                            About Botswana
                          </span>
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
                              className="flex items-center px-6 py-3 text-gray-700 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300 border-b border-gray-100"
                            >
                              <i className="fa fa-info-circle mr-3 text-blue-500"></i>
                              Our Country
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/about/about-botswana#public-holidays"
                              className="flex items-center px-6 py-3 text-gray-700 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300 border-b border-gray-100"
                            >
                              <i className="fa fa-calendar-check-o mr-3 text-blue-500"></i>
                              Public Holidays
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/about/about-botswana#school-terms"
                              className="flex items-center px-6 py-3 text-gray-700 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300"
                            >
                              <i className="fa fa-graduation-cap mr-3 text-blue-500"></i>
                              School Terms
                            </Link>
                          </li>
                        </ul>
                      </li>

                      {/* About Government Submenu */}
                      <li className="relative group/submenu-government">
                        <div className="flex items-center justify-between px-6 py-3.5 text-gray-800 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300 border-b border-gray-100 cursor-pointer">
                          <span className="flex items-center">
                            <i className="fa fa-university mr-3 text-blue-600"></i>
                            About Government
                          </span>
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
                              className="flex items-center px-6 py-3 text-gray-700 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300 border-b border-gray-100"
                            >
                              <i className="fa fa-building mr-3 text-blue-500"></i>
                              Ministries and Agencies
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/about/about-government#parastatals"
                              className="flex items-center px-6 py-3 text-gray-700 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300 border-b border-gray-100"
                            >
                              <i className="fa fa-industry mr-3 text-blue-500"></i>
                              Parastatals
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/about/about-government#publications"
                              className="flex items-center px-6 py-3 text-gray-700 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300 border-b border-gray-100"
                            >
                              <i className="fa fa-file-pdf-o mr-3 text-blue-500"></i>
                              Publications
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/about/about-government#local-authorities"
                              className="flex items-center px-6 py-3 text-gray-700 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300 border-b border-gray-100"
                            >
                              <i className="fa fa-users mr-3 text-blue-500"></i>
                              Local Authorities
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/about/about-government#land-board"
                              className="flex items-center px-6 py-3 text-gray-700 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300"
                            >
                              <i className="fa fa-map-o mr-3 text-blue-500"></i>
                              Land Board
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  ) : item.name === "services" ? (
                    <ul className="absolute left-0 top-full w-screen max-w-6xl bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 z-50 rounded-b-lg">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
                        {/* Services Column */}
                        <div className="bg-gradient-to-b from-blue-50 to-white p-6 border-r border-gray-100">
                          <h3 className="text-lg font-bold text-blue-800 mb-4 flex items-center">
                            <i className="fa fa-bars mr-2"></i>
                            Services
                          </h3>
                          <div className="grid grid-cols-1 gap-2">
                            <Link
                              href="/agriculture?txterm=128"
                              className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-white hover:text-blue-600 hover:shadow-md transition-all duration-300 group/item"
                            >
                              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-green-200 transition-colors">
                                <i className="fa fa-leaf text-green-600"></i>
                              </div>
                              <div>
                                <p className="font-semibold">Agriculture</p>
                                <p className="text-xs text-gray-500">Farming & Resources</p>
                              </div>
                            </Link>
                            <Link
                              href="/benefits-payments?txterm=98"
                              className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-white hover:text-blue-600 hover:shadow-md transition-all duration-300 group/item"
                            >
                              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-purple-200 transition-colors">
                                <i className="fa fa-money text-purple-600"></i>
                              </div>
                              <div>
                                <p className="font-semibold">Benefits and Payments</p>
                                <p className="text-xs text-gray-500">Financial Support</p>
                              </div>
                            </Link>
                            <Link
                              href="/culture-sports-tourism?txterm=107"
                              className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-white hover:text-blue-600 hover:shadow-md transition-all duration-300 group/item"
                            >
                              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-orange-200 transition-colors">
                                <i className="fa fa-futbol-o text-orange-600"></i>
                              </div>
                              <div>
                                <p className="font-semibold">Recreation & Leisure</p>
                                <p className="text-xs text-gray-500">Sports & Tourism</p>
                              </div>
                            </Link>
                            <Link
                              href="/education-learning?txterm=110"
                              className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-white hover:text-blue-600 hover:shadow-md transition-all duration-300 group/item"
                            >
                              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-blue-200 transition-colors">
                                <i className="fa fa-graduation-cap text-blue-600"></i>
                              </div>
                              <div>
                                <p className="font-semibold">Education and Learning</p>
                                <p className="text-xs text-gray-500">Schools & Training</p>
                              </div>
                            </Link>
                            <Link
                              href="/health-wellness?txterm=120"
                              className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-white hover:text-blue-600 hover:shadow-md transition-all duration-300 group/item"
                            >
                              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-red-200 transition-colors">
                                <i className="fa fa-heartbeat text-red-600"></i>
                              </div>
                              <div>
                                <p className="font-semibold">Health and Wellness</p>
                                <p className="text-xs text-gray-500">Medical Services</p>
                              </div>
                            </Link>
                            <Link
                              href="/immigration-civil-registration?txterm=97"
                              className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-white hover:text-blue-600 hover:shadow-md transition-all duration-300 group/item"
                            >
                              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-indigo-200 transition-colors">
                                <i className="fa fa-passport text-indigo-600"></i>
                              </div>
                              <div>
                                <p className="font-semibold">Immigration and Civil Registration</p>
                                <p className="text-xs text-gray-500">Citizenship & Visas</p>
                              </div>
                            </Link>
                            <Link
                              href="/labor-employment?txterm=132"
                              className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-white hover:text-blue-600 hover:shadow-md transition-all duration-300 group/item"
                            >
                              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-teal-200 transition-colors">
                                <i className="fa fa-briefcase text-teal-600"></i>
                              </div>
                              <div>
                                <p className="font-semibold">Labour and Employment</p>
                                <p className="text-xs text-gray-500">Jobs & Careers</p>
                              </div>
                            </Link>
                          </div>
                        </div>

                        {/* Second Services Column */}
                        <div className="bg-gradient-to-b from-blue-50 to-white p-6 border-r border-gray-100">
                          <div className="grid grid-cols-1 gap-2 mt-12">
                            <Link
                              href="/land-construction-housing?txterm=130"
                              className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-white hover:text-blue-600 hover:shadow-md transition-all duration-300 group/item"
                            >
                              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-yellow-200 transition-colors">
                                <i className="fa fa-home text-yellow-600"></i>
                              </div>
                              <div>
                                <p className="font-semibold">Land, Construction and Housing</p>
                                <p className="text-xs text-gray-500">Property & Development</p>
                              </div>
                            </Link>
                            <Link
                              href="/law-crime-Justice?txterm=155"
                              className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-white hover:text-blue-600 hover:shadow-md transition-all duration-300 group/item"
                            >
                              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-gray-200 transition-colors">
                                <i className="fa fa-gavel text-gray-600"></i>
                              </div>
                              <div>
                                <p className="font-semibold">Law, Crime and Justice</p>
                                <p className="text-xs text-gray-500">Legal Services</p>
                              </div>
                            </Link>
                            <Link
                              href="/living-botswana?txterm=148"
                              className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-white hover:text-blue-600 hover:shadow-md transition-all duration-300 group/item"
                            >
                              <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-cyan-200 transition-colors">
                                <i className="fa fa-map-marker text-cyan-600"></i>
                              </div>
                              <div>
                                <p className="font-semibold">Living in Botswana</p>
                                <p className="text-xs text-gray-500">Resident Information</p>
                              </div>
                            </Link>
                            <Link
                              href="/trade-industry?txterm=140"
                              className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-white hover:text-blue-600 hover:shadow-md transition-all duration-300 group/item"
                            >
                              <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-pink-200 transition-colors">
                                <i className="fa fa-industry text-pink-600"></i>
                              </div>
                              <div>
                                <p className="font-semibold">Industry, Trade & Investment</p>
                                <p className="text-xs text-gray-500">Business & Commerce</p>
                              </div>
                            </Link>
                            <Link
                              href="/natural-resources-environment?txterm=113"
                              className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-white hover:text-blue-600 hover:shadow-md transition-all duration-300 group/item"
                            >
                              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-green-200 transition-colors">
                                <i className="fa fa-tree text-green-600"></i>
                              </div>
                              <div>
                                <p className="font-semibold">Natural Resources and Environment</p>
                                <p className="text-xs text-gray-500">Conservation</p>
                              </div>
                            </Link>
                            <Link
                              href="/social-services?txterm=136"
                              className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-white hover:text-blue-600 hover:shadow-md transition-all duration-300 group/item"
                            >
                              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-amber-200 transition-colors">
                                <i className="fa fa-users text-amber-600"></i>
                              </div>
                              <div>
                                <p className="font-semibold">Social Services</p>
                                <p className="text-xs text-gray-500">Community Support</p>
                              </div>
                            </Link>
                            <Link
                              href="/transport-communications?txterm=116"
                              className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-white hover:text-blue-600 hover:shadow-md transition-all duration-300 group/item"
                            >
                              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-blue-200 transition-colors">
                                <i className="fa fa-truck text-blue-600"></i>
                              </div>
                              <div>
                                <p className="font-semibold">Transport & Logistics</p>
                                <p className="text-xs text-gray-500">Movement & Delivery</p>
                              </div>
                            </Link>
                            <Link
                              href="/communications-technology?txterm=117"
                              className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-white hover:text-blue-600 hover:shadow-md transition-all duration-300 group/item"
                            >
                              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-purple-200 transition-colors">
                                <i className="fa fa-wifi text-purple-600"></i>
                              </div>
                              <div>
                                <p className="font-semibold">Communications, Media & Radio Services</p>
                                <p className="text-xs text-gray-500">Information & Technology</p>
                              </div>
                            </Link>
                          </div>
                        </div>

                        {/* Service Links Column 1 */}
                        <div className="bg-gradient-to-b from-indigo-50 to-white p-6 border-r border-gray-100">
                          <h3 className="text-lg font-bold text-indigo-800 mb-4 flex items-center">
                            <i className="fa fa-credit-card mr-2"></i>
                            Service Links
                          </h3>
                          <div className="grid grid-cols-1 gap-2">
                            <a
                              href="https://www.justice.gov.bw"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-white hover:text-indigo-600 hover:shadow-md transition-all duration-300 group/item"
                            >
                              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-indigo-200 transition-colors">
                                <i className="fa fa-balance-scale text-indigo-600"></i>
                              </div>
                              <div>
                                <p className="font-semibold">Administration of Justice</p>
                                <p className="text-xs text-gray-500">Legal System</p>
                              </div>
                            </a>
                            <a
                              href="http://www.baits2.gov.bw/login"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-white hover:text-indigo-600 hover:shadow-md transition-all duration-300 group/item"
                            >
                              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-orange-200 transition-colors">
                                <i className="fa fa-paw text-orange-600"></i>
                              </div>
                              <div>
                                <p className="font-semibold">Animal Traceability</p>
                                <p className="text-xs text-gray-500">Identification System</p>
                              </div>
                            </a>
                            <a
                              href="https://www.iec.gov.bw/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-white hover:text-indigo-600 hover:shadow-md transition-all duration-300 group/item"
                            >
                              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-blue-200 transition-colors">
                                <i className="fa fa-vote-yea text-blue-600"></i>
                              </div>
                              <div>
                                <p className="font-semibold">Independent Electoral Commission</p>
                                <p className="text-xs text-gray-500">Elections</p>
                              </div>
                            </a>
                            <a
                              href="http://www.elaws.gov.bw/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-white hover:text-indigo-600 hover:shadow-md transition-all duration-300 group/item"
                            >
                              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-green-200 transition-colors">
                                <i className="fa fa-book text-green-600"></i>
                              </div>
                              <div>
                                <p className="font-semibold">Laws of Botswana</p>
                                <p className="text-xs text-gray-500">Legal Documents</p>
                              </div>
                            </a>
                            <a
                              href="https://www.finance.gov.bw/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-white hover:text-indigo-600 hover:shadow-md transition-all duration-300 group/item"
                            >
                              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-yellow-200 transition-colors">
                                <i className="fa fa-money text-yellow-600"></i>
                              </div>
                              <div>
                                <p className="font-semibold">Finance and Economic Development</p>
                                <p className="text-xs text-gray-500">Ministry</p>
                              </div>
                            </a>
                            <a
                              href="https://www.parliament.gov.bw"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-white hover:text-indigo-600 hover:shadow-md transition-all duration-300 group/item"
                            >
                              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-purple-200 transition-colors">
                                <i className="fa fa-landmark text-purple-600"></i>
                              </div>
                              <div>
                                <p className="font-semibold">Parliament of Botswana</p>
                                <p className="text-xs text-gray-500">Government</p>
                              </div>
                            </a>
                          </div>
                        </div>

                        {/* Service Links Column 2 */}
                        <div className="bg-gradient-to-b from-indigo-50 to-white p-6">
                          <div className="grid grid-cols-1 gap-2 mt-12">
                            <a
                              href="http://www.eservices.gov.bw/Tourism/Myhome.aspx"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-white hover:text-indigo-600 hover:shadow-md transition-all duration-300 group/item"
                            >
                              <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-cyan-200 transition-colors">
                                <i className="fa fa-plane text-cyan-600"></i>
                              </div>
                              <div>
                                <p className="font-semibold">Tourism Services</p>
                                <p className="text-xs text-gray-500">Travel & Visits</p>
                              </div>
                            </a>
                            <a
                              href="http://www.eservices.gov.bw/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-white hover:text-indigo-600 hover:shadow-md transition-all duration-300 group/item"
                            >
                              <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-pink-200 transition-colors">
                                <i className="fa fa-shopping-cart text-pink-600"></i>
                              </div>
                              <div>
                                <p className="font-semibold">Trade and Industry</p>
                                <p className="text-xs text-gray-500">Business Services</p>
                              </div>
                            </a>
                            <a
                              href="https://eservices.botswanapost.co.bw/EServices/Account/Login.aspx?ReturnURL=/Eservices/VehicleLicenceRenewal/VehicleRegistrationDetails.aspx"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-white hover:text-indigo-600 hover:shadow-md transition-all duration-300 group/item"
                            >
                              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-red-200 transition-colors">
                                <i className="fa fa-car text-red-600"></i>
                              </div>
                              <div>
                                <p className="font-semibold">Vehicle License Renewal</p>
                                <p className="text-xs text-gray-500">Transport Services</p>
                              </div>
                            </a>
                            <a
                              href="https://www.rims.gov.bw/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-white hover:text-indigo-600 hover:shadow-md transition-all duration-300 group/item"
                            >
                              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-teal-200 transition-colors">
                                <i className="fa fa-database text-teal-600"></i>
                              </div>
                              <div>
                                <p className="font-semibold">Research Information Management</p>
                                <p className="text-xs text-gray-500">Data & Analytics</p>
                              </div>
                            </a>
                            <a
                              href="https://evisa.gov.bw"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-white hover:text-indigo-600 hover:shadow-md transition-all duration-300 group/item"
                            >
                              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-indigo-200 transition-colors">
                                <i className="fa fa-passport text-indigo-600"></i>
                              </div>
                              <div>
                                <p className="font-semibold">e-visa</p>
                                <p className="text-xs text-gray-500">Online Application</p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </ul>
                  ) : null
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;