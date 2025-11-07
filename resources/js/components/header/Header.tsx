/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { Link } from "@inertiajs/react";
import { Search } from "lucide-react";
import { 
  FileText, 
  Users, 
  Droplets, 
  Heart, 
  Shield, 
  BookOpen, 
  Award, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Calendar,
  CheckCircle,
  UserCheck,
  TrendingUp,
  BarChart3,
  Lightbulb,
  Home,
  Building,
  GraduationCap,
  Briefcase,
  Stethoscope,
  Microscope,
  TestTube,
  Activity,
  Target,
  Compass,
  DollarSign,
  Package,
  Truck,
  Factory,
  Leaf,
  TreePine,
  Fish,
  Bug,
  AlertTriangle,
  Info,
  FileCheck,
  ClipboardList
} from 'lucide-react';
import SearchPopup from "./SearchPopup";
import MobileMenu from "./MobileMenu";

// Types pour les props des composants
interface SocialLinksProps {}

interface ContactInfoProps {}

interface LogoProps {
  isScrolled: boolean;
}

interface AppointmentButtonProps {}

interface SearchButtonProps {
  onOpen: () => void;
}

interface MobileMenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

interface SupportBoxProps {}

interface ServicesSubmenuProps {}

interface ServiceLinkProps {
  href: string;
  icon: string;
  bgColor: string;
  title: string;
  subtitle: string;
}

interface ExternalServiceLinkProps {
  href: string;
  icon: string;
  bgColor: string;
  title: string;
  subtitle: string;
}

interface AboutSubmenuProps {}

interface NewsEventsSubmenuProps {}

interface NavigationItemProps {
  item: {
    name: string;
    href: string;
  };
  index: number;
}

interface MainNavigationProps {
  navItems: Array<{
    name: string;
    href: string;
  }>;
}

interface MainHeaderProps {
  isScrolled: boolean;
  navItems: Array<{
    name: string;
    href: string;
  }>;
  onSearchOpen: () => void;
  isMobileMenuOpen: boolean;
  onMobileMenuToggle: () => void;
}

interface StickyHeaderProps {
  navItems: Array<{
    name: string;
    href: string;
  }>;
  onSearchOpen: () => void;
  isMobileMenuOpen: boolean;
  onMobileMenuToggle: () => void;
}

// Composants optimisés et réutilisables
const SocialLinks: React.FC<SocialLinksProps> = React.memo(() => {
  const socialPlatforms = [
    "twitter",
    "facebook-f",
    "instagram",
    "linkedin-in",
    "google-plus-g",
  ];

  return (
    <ul className="social-links flex gap-3 sm:gap-4">
      {socialPlatforms.map((social, index) => (
        <li
          key={social}
          className="transform transition-all duration-300 hover:scale-110"
          style={{ transitionDelay: `${index * 50}ms` }}
        >
          <a
            href="/index.html"
            className="text-white hover:text-[#66d9ff] transition-all duration-300"
            aria-label={`Visit our ${social} page`}
          >
            <i className={`fab fa-${social} text-sm sm:text-base`}></i>
          </a>
        </li>
      ))}
    </ul>
  );
});

const ContactInfo: React.FC<ContactInfoProps> = React.memo(() => {
  return (
    <ul className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-6 text-white text-xs sm:text-sm">
      <li className="flex items-center group">
        <i className="flaticon-home mr-2 text-base sm:text-lg group-hover:text-[#66d9ff] transition-all duration-300"></i>
        <span className="hidden xs:inline">72 Main Drive, Calibry, FL</span>
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
        <span className="hidden xs:inline">Mon - Fri : 0900 to 1800</span>
        <span className="xs:hidden">0900-1800</span>
      </li>
    </ul>
  );
});

const Logo: React.FC<LogoProps> = React.memo(({ isScrolled }) => {
  return (
    <figure className="logo-box">
      <Link href="/index.html">
        <img
          src="/assets/logo/logo.png"
          alt="Logo"
          className={`h-8 lg:h-10 transition-all duration-300 ${isScrolled ? "hover:scale-95" : "hover:scale-105"}`}
        />
      </Link>
    </figure>
  );
});

const AppointmentButton: React.FC<AppointmentButtonProps> = React.memo(() => {
  return (
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
  );
});

const SearchButton: React.FC<SearchButtonProps> = React.memo(({ onOpen }) => {
  return (
    <button
      className="text-white focus:outline-none p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all transform hover:scale-105"
      onClick={onOpen}
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
  );
});

const MobileMenuButton: React.FC<MobileMenuButtonProps> = React.memo(({ isOpen, onToggle }) => {
  return (
    <button
      className="relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 group"
      onClick={onToggle}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      {/* Cercle de fond */}
      <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      
      {/* Icône du menu */}
      <div className="relative w-6 h-6">
        {/* Lignes du hamburger */}
        <span
          className={`absolute top-1 left-0 w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
            isOpen ? "top-3 rotate-45" : ""
          }`}
        ></span>
        <span
          className={`absolute top-3 left-0 w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`absolute top-5 left-0 w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
            isOpen ? "top-3 -rotate-45" : ""
          }`}
        ></span>
      </div>
      
      {/* Indicateur d'état */}
      <div className={`absolute -bottom-1 -right-1 w-2 h-2 rounded-full transition-all duration-300 ${
        isOpen ? "bg-red-400 scale-100" : "bg-transparent scale-0"
      }`}></div>
    </button>
  );
});

const SupportBox: React.FC<SupportBoxProps> = React.memo(() => {
  return (
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
  );
});

// Composant pour les sous-menus de Services
const ServicesSubmenu: React.FC<ServicesSubmenuProps> = React.memo(() => {
  return (
    <ul className="absolute left-[-550px] top-full w-screen max-w-6xl bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 z-50 rounded-b-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
        {/* Services Column */}
        <div className="bg-gradient-to-b from-blue-50 to-white p-6 border-r border-gray-100">
          <h3 className="text-lg font-bold text-blue-800 mb-4 flex items-center">
            <i className="fa fa-bars mr-2"></i>
            Services
          </h3>
          <div className="grid grid-cols-1 gap-2">
            <ServiceLink
              href="/agriculture"
              icon="fa-leaf"
              bgColor="green"
              title="Agriculture"
              subtitle="Farming & Resources"
            />
            <ServiceLink
              href="/benefits-payments"
              icon="fa-money"
              bgColor="purple"
              title="Benefits and Payments"
              subtitle="Financial Support"
            />
            <ServiceLink
              href="/culture-sports-tourism"
              icon="fa-futbol-o"
              bgColor="orange"
              title="Recreation & Leisure"
              subtitle="Sports & Tourism"
            />
            <ServiceLink
              href="/education-learning?txterm=110"
              icon="fa-graduation-cap"
              bgColor="blue"
              title="Education and Learning"
              subtitle="Schools & Training"
            />
            <ServiceLink
              href="/health-wellness?txterm=120"
              icon="fa-heartbeat"
              bgColor="red"
              title="Health and Wellness"
              subtitle="Medical Services"
            />
            <ServiceLink
              href="/immigration-civil-registration?txterm=97"
              icon="fa-passport"
              bgColor="indigo"
              title="Immigration and Civil Registration"
              subtitle="Citizenship & Visas"
            />
            <ServiceLink
              href="/labor-employment?txterm=132"
              icon="fa-briefcase"
              bgColor="teal"
              title="Labour and Employment"
              subtitle="Jobs & Careers"
            />
          </div>
        </div>

        {/* Second Services Column */}
        <div className="bg-gradient-to-b from-blue-50 to-white p-6 border-r border-gray-100">
          <div className="grid grid-cols-1 gap-2 mt-12">
            <ServiceLink
              href="/land-construction-housing?txterm=130"
              icon="fa-home"
              bgColor="yellow"
              title="Land, Construction and Housing"
              subtitle="Property & Development"
            />
            <ServiceLink
              href="/law-crime-Justice?txterm=155"
              icon="fa-gavel"
              bgColor="gray"
              title="Law, Crime and Justice"
              subtitle="Legal Services"
            />
            <ServiceLink
              href="/living-botswana?txterm=148"
              icon="fa-map-marker"
              bgColor="cyan"
              title="Living in Botswana"
              subtitle="Resident Information"
            />
            <ServiceLink
              href="/trade-industry?txterm=140"
              icon="fa-industry"
              bgColor="pink"
              title="Industry, Trade & Investment"
              subtitle="Business & Commerce"
            />
            <ServiceLink
              href="/natural-resources-environment?txterm=113"
              icon="fa-tree"
              bgColor="green"
              title="Natural Resources and Environment"
              subtitle="Conservation"
            />
            <ServiceLink
              href="/social-services?txterm=136"
              icon="fa-users"
              bgColor="amber"
              title="Social Services"
              subtitle="Community Support"
            />
            <ServiceLink
              href="/transport-communications?txterm=116"
              icon="fa-truck"
              bgColor="blue"
              title="Transport & Logistics"
              subtitle="Movement & Delivery"
            />
            <ServiceLink
              href="/communications-technology?txterm=117"
              icon="fa-wifi"
              bgColor="purple"
              title="Communications, Media & Radio Services"
              subtitle="Information & Technology"
            />
          </div>
        </div>

        {/* Service Links Column 1 */}
        <div className="bg-gradient-to-b from-indigo-50 to-white p-6 border-r border-gray-100">
          <h3 className="text-lg font-bold text-indigo-800 mb-4 flex items-center">
            <i className="fa fa-credit-card mr-2"></i>
            Service Links
          </h3>
          <div className="grid grid-cols-1 gap-2">
            <ExternalServiceLink
              href="https://www.justice.gov.bw"
              icon="fa-balance-scale"
              bgColor="indigo"
              title="Administration of Justice"
              subtitle="Legal System"
            />
            <ExternalServiceLink
              href="http://www.baits2.gov.bw/login"
              icon="fa-paw"
              bgColor="orange"
              title="Animal Traceability"
              subtitle="Identification System"
            />
            <ExternalServiceLink
              href="https://www.iec.gov.bw/"
              icon="fa-vote-yea"
              bgColor="blue"
              title="Independent Electoral Commission"
              subtitle="Elections"
            />
            <ExternalServiceLink
              href="http://www.elaws.gov.bw/"
              icon="fa-book"
              bgColor="green"
              title="Laws of Botswana"
              subtitle="Legal Documents"
            />
            <ExternalServiceLink
              href="https://www.finance.gov.bw/"
              icon="fa-money"
              bgColor="yellow"
              title="Finance and Economic Development"
              subtitle="Ministry"
            />
            <ExternalServiceLink
              href="https://www.parliament.gov.bw"
              icon="fa-landmark"
              bgColor="purple"
              title="Parliament of Botswana"
              subtitle="Government"
            />
          </div>
        </div>

        {/* Service Links Column 2 */}
        <div className="bg-gradient-to-b from-indigo-50 to-white p-6">
          <div className="grid grid-cols-1 gap-2 mt-12">
            <ExternalServiceLink
              href="http://www.eservices.gov.bw/Tourism/Myhome.aspx"
              icon="fa-plane"
              bgColor="cyan"
              title="Tourism Services"
              subtitle="Travel & Visits"
            />
            <ExternalServiceLink
              href="http://www.eservices.gov.bw/"
              icon="fa-shopping-cart"
              bgColor="pink"
              title="Trade and Industry"
              subtitle="Business Services"
            />
            <ExternalServiceLink
              href="https://eservices.botswanapost.co.bw/EServices/Account/Login.aspx?ReturnURL=/Eservices/VehicleLicenceRenewal/VehicleRegistrationDetails.aspx"
              icon="fa-car"
              bgColor="red"
              title="Vehicle License Renewal"
              subtitle="Transport Services"
            />
            <ExternalServiceLink
              href="https://www.rims.gov.bw/"
              icon="fa-database"
              bgColor="teal"
              title="Research Information Management"
              subtitle="Data & Analytics"
            />
            <ExternalServiceLink
              href="https://evisa.gov.bw"
              icon="fa-passport"
              bgColor="indigo"
              title="e-visa"
              subtitle="Online Application"
            />
          </div>
        </div>
      </div>
    </ul>
  );
});

const getLucideIcon = (iconName: string) => {
  const iconMap: Record<string, React.ComponentType<any>> = {
    'fa-file-text': FileText,
    'fa-users': Users,
    'fa-tint': Droplets,
    'fa-heart': Heart,
    'fa-shield-alt': Shield,
    'fa-book-open': BookOpen,
    'fa-award': Award,
    'fa-map-marker-alt': MapPin,
    'fa-phone': Phone,
    'fa-envelope': Mail,
    'fa-clock': Clock,
    'fa-calendar': Calendar,
    'fa-check-circle': CheckCircle,
    'fa-user-check': UserCheck,
    'fa-trending-up': TrendingUp,
    'fa-chart-bar': BarChart3,
    'fa-lightbulb': Lightbulb,
    'fa-home': Home,
    'fa-building': Building,
    'fa-graduation-cap': GraduationCap,
    'fa-briefcase': Briefcase,
    'fa-stethoscope': Stethoscope,
    'fa-microscope': Microscope,
    'fa-flask': TestTube,
    'fa-activity': Activity,
    'fa-bullseye': Target,
    'fa-compass': Compass,
    'fa-dollar-sign': DollarSign,
    'fa-box': Package,
    'fa-truck': Truck,
    'fa-industry': Factory,
    'fa-leaf': Leaf,
    'fa-tree': TreePine,
    'fa-fish': Fish,
    'fa-bug': Bug,
    'fa-exclamation-triangle': AlertTriangle,
    'fa-info-circle': Info,
    'fa-file-check': FileCheck,
    'fa-list-check': ClipboardList
  };
  
  return iconMap[iconName] || FileText; // Icône par défaut
};

const ServiceLink: React.FC<ServiceLinkProps> = ({ href, icon, bgColor, title, subtitle }) => {
  const IconComponent = getLucideIcon(icon);
  
  return (
    <Link
      href={href}
      className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-white hover:text-blue-600 hover:shadow-md transition-all duration-300 group/item"
    >
      <div
        className={`w-10 h-10 bg-${bgColor}-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-${bgColor}-200 transition-colors`}
      >
        <IconComponent className={`text-${bgColor}-600 w-5 h-5`} />
      </div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>
    </Link>
  );
};  

// Composant pour les liens de service externes
const ExternalServiceLink: React.FC<ExternalServiceLinkProps> = React.memo(
  ({ href, icon, bgColor, title, subtitle }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-white hover:text-indigo-600 hover:shadow-md transition-all duration-300 group/item"
      >
        <div
          className={`w-10 h-10 bg-${bgColor}-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-${bgColor}-200 transition-colors`}
        >
          <i className={`fa ${icon} text-${bgColor}-600`}></i>
        </div>
        <div>
          <p className="font-semibold">{title}</p>
          <p className="text-xs text-gray-500">{subtitle}</p>
        </div>
      </a>
    );
  }
);

// Composant pour les sous-menus About
const AboutSubmenu: React.FC<AboutSubmenuProps> = React.memo(() => {
  return (
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
  );
});

// Composant pour les sous-menus News & Events
const NewsEventsSubmenu: React.FC<NewsEventsSubmenuProps> = React.memo(() => {
  return (
    <ul className="absolute left-0 top-full w-64 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 z-50 rounded-b-lg">
      <li>
        <Link
          href="/news#latest-news"
          className="block px-6 py-3.5 text-gray-800 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300 border-b border-gray-100"
        >
          Latest News
        </Link>
      </li>
      <li>
        <Link
          href="/news#upcoming-events"
          className="block px-6 py-3.5 text-gray-800 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300 border-b border-gray-100"
        >
          Upcoming Events
        </Link>
      </li>
      <li>
        <Link
          href="/news#press-releases"
          className="block px-6 py-3.5 text-gray-800 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300 border-b border-gray-100"
        >
          Press Releases
        </Link>
      </li>
    </ul>
  );
});

// Composant pour les éléments de navigation
const NavigationItem: React.FC<NavigationItemProps> = React.memo(({ item, index }) => {
  const renderSubmenu = () => {
    if (item.name === "services") {
      return <ServicesSubmenu />;
    } else if (item.name === "about") {
      return <AboutSubmenu />;
    } else if (item.name === "news & events") {
      return <NewsEventsSubmenu />;
    }
    return null;
  };

  const hasSubmenu =
    item.name !== "contact" &&
    item.name !== "e-services" &&
    item.name !== "home";

  return (
    <li key={item.name} className="relative group">
      <Link
        href={item.href}
        className="text-white text-sm lg:text-base font-normal uppercase py-4 lg:py-6 px-2 lg:px-3 block hover:text-[#66d9ff] transition-all duration-300 relative"
        onClick={(e) => {
          if (item.href == "#") {
            e.preventDefault();
          }
        }}
      >
        {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#66d9ff] transition-all duration-300 group-hover:w-full"></span>
      </Link>

      {hasSubmenu && renderSubmenu()}
    </li>
  );
});

// Composant pour la navigation principale
const MainNavigation: React.FC<MainNavigationProps> = React.memo(({ navItems }) => {
  return (
    <nav className="main-menu hidden lg:block">
      <ul className="navigation flex">
        {navItems.map((item, index) => (
          <NavigationItem key={item.name} item={item} index={index} />
        ))}
      </ul>
    </nav>
  );
});

// Composant pour le header principal
const MainHeader: React.FC<MainHeaderProps> = React.memo(
  ({
    isScrolled,
    navItems,
    onSearchOpen,
    isMobileMenuOpen,
    onMobileMenuToggle,
  }) => {
    return (
      <div
        className={`header-upper relative w-full transition-all duration-500 ${isScrolled ? "bg-[#0099cc] bg-opacity-95 shadow-lg" : "bg-[#0099cc]"}`}
      >
        <div className="outer-container absolute left-0 top-0 right-0 w-full px-4 lg:px-24 border-b border-white border-opacity-20">
          <div className="flex flex-col lg:flex-row justify-between items-center py-2 lg:py-3">
            <div className="upper-left flex items-center mb-2 lg:mb-0 w-full lg:w-auto justify-between lg:justify-start">
              <Logo isScrolled={isScrolled} />
              <AppointmentButton />
            </div>

            <div className="menu-area flex items-center w-full lg:w-auto justify-between lg:justify-end">
              {/* Boutons à droite en mobile */}

              {/* Menu de navigation pour desktop */}
              <MainNavigation navItems={navItems} />

              <div className="menu-right-content flex items-center">
                {/* Icône de recherche - cachée en mobile, visible à partir de sm */}
                <div className="search-box-outer hidden sm:block px-2 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-5 border-l border-white border-opacity-20">
                  <button
                    className="search-toggler text-white text-lg sm:text-xl lg:text-2xl hover:text-[#66d9ff] transition-all duration-300 transform hover:scale-110"
                    onClick={onSearchOpen}
                    aria-label="Search"
                  >
                    <Search />
                  </button>
                </div>

                {/* SupportBox - caché en mobile, visible à partir de sm */}
                <div className="hidden sm:block">
                  <SupportBox />
                </div>
              </div>
              <div className="flex items-center gap-3 lg:hidden">
                <SearchButton onOpen={onSearchOpen} />
                <MobileMenuButton
                  isOpen={isMobileMenuOpen}
                  onToggle={onMobileMenuToggle}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

// Composant pour le header sticky
const StickyHeader: React.FC<StickyHeaderProps> = React.memo(
  ({ navItems, onSearchOpen, isMobileMenuOpen, onMobileMenuToggle }) => {
    return (
      <div className="sticky-header fixed left-0 top-0 w-full bg-[#0099cc] shadow-2xl transition-all duration-500 z-[999] opacity-100 visible translate-y-0">
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
              <MainNavigation navItems={navItems} />

              {/* Mobile menu button in sticky header */}
              <div className="lg:hidden flex items-center gap-3">
                <SearchButton onOpen={onSearchOpen} />
                <MobileMenuButton
                  isOpen={isMobileMenuOpen}
                  onToggle={onMobileMenuToggle}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

// Composant principal du header
const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  // Utilisation de useCallback pour optimiser les fonctions de rappel
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 100) {
      setIsSticky(true);
      setIsScrolled(true);
    } else {
      setIsSticky(false);
      setIsScrolled(false);
    }

    setLastScrollY(currentScrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const toggleItem = useCallback((item: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  }, []);

  const openSearch = useCallback(() => {
    setIsSearchOpen(true);
  }, []);

  const closeSearch = useCallback(() => {
    setIsSearchOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  // Utilisation de useMemo pour optimiser les données qui ne changent pas souvent
  const NAV_ITEMS = useMemo(
    () => [
      {
        name: "home",
        href: "/",
      },
      {
        name: "services",
        href: "#",
      },
      {
        name: "e-services",
        href: "https://1gov.gov.bw/welcome",
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
    ],
    []
  );

  return (
    <>
      {/* Popup de recherche */}
      <SearchPopup isOpen={isSearchOpen} onClose={closeSearch} />

      {/* Menu mobile */}
      <MobileMenu
        navItems={NAV_ITEMS}
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
                <ContactInfo />
              </div>
              <div className="top-right">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>

        {/* Barre de navigation principale */}
        <MainHeader
          isScrolled={isScrolled}
          navItems={NAV_ITEMS}
          onSearchOpen={openSearch}
          isMobileMenuOpen={isMobileMenuOpen}
          onMobileMenuToggle={toggleMobileMenu}
        />

        {/* Header sticky */}
        {isSticky && (
          <StickyHeader
            navItems={NAV_ITEMS}
            onSearchOpen={openSearch}
            isMobileMenuOpen={isMobileMenuOpen}
            onMobileMenuToggle={toggleMobileMenu}
          />
        )}
      </header>
    </>
  );
};

export default Header;