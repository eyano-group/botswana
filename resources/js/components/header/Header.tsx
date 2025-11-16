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
  ClipboardList,
  Twitter, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Plus 
} from "lucide-react";
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
    { name: "twitter", icon: Twitter },
    { name: "facebook-f", icon: Facebook },
    { name: "instagram", icon: Instagram },
    { name: "linkedin-in", icon: Linkedin },
    { name: "google-plus-g", icon: Plus },
  ];

  return (
    <ul className="social-links flex gap-2 sm:gap-3 md:gap-4">
      {socialPlatforms.map((social, index) => {
        const IconComponent = social.icon;
        return (
          <li
            key={social.name}
            className="transform transition-all duration-300 hover:scale-110"
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <a
              href="/"
              className="text-white hover:text-[#66d9ff] transition-all duration-300 flex items-center justify-center w-8 h-8 sm:w-auto sm:h-auto"
              aria-label={`Visit our ${social.name} page`}
            >
              <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </li>
        );
      })}
    </ul>
  );
});

const ContactInfo: React.FC<ContactInfoProps> = React.memo(() => {
  return (
    <ul className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4 md:gap-6 text-white text-xs sm:text-sm">
      <li className="flex items-center group">
        <i className="flaticon-home mr-1 sm:mr-2 text-sm sm:text-base md:text-lg group-hover:text-[#66d9ff] transition-all duration-300"></i>
        <span className="hidden md:inline">
          Private Bag 001, Gaborone, Botswana
        </span>
        <span className="hidden sm:inline md:hidden">Gaborone, Botswana</span>
        <span className="inline sm:hidden">Gaborone</span>
      </li>
      <li className="flex items-center group">
        <i className="flaticon-open-email-message mr-1 sm:mr-2 text-sm sm:text-base md:text-lg group-hover:text-[#66d9ff] transition-all duration-300"></i>
        <a
          href="mailto:bgcis@gov.bw"
          className="hover:text-[#66d9ff] transition-all duration-300"
        >
          <span className="hidden sm:inline">bgcis@gov.bw</span>
          <span className="inline sm:hidden">Email</span>
        </a>
      </li>
      <li className="flex items-center group">
        <i className="flaticon-clock mr-1 sm:mr-2 text-sm sm:text-base md:text-lg group-hover:text-[#66d9ff] transition-all duration-300"></i>
        <span className="hidden md:inline">Mon - Fri : 0900 to 1800</span>
        <span className="hidden sm:inline md:hidden">Mon-Fri: 0900-1800</span>
        <span className="inline sm:hidden">0900-1800</span>
      </li>
    </ul>
  );
});

const Logo: React.FC<LogoProps> = React.memo(({ isScrolled }) => {
  return (
    <figure className="logo-box">
      <Link href="/">
        <img
          src="/assets/logo/logo.png"
          alt="Logo"
          className={`h-7 sm:h-8 md:h-9 lg:h-10 transition-all duration-300 ${isScrolled ? "hover:scale-95" : "hover:scale-105"}`}
        />
      </Link>
    </figure>
  );
});

const SearchButton: React.FC<SearchButtonProps> = React.memo(({ onOpen }) => {
  return (
    <button
      className="text-white focus:outline-none p-1.5 sm:p-2 lg:p-1.5 xl:p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all transform hover:scale-105"
      onClick={onOpen}
      aria-label="Search"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 sm:h-5 sm:w-5 lg:h-4 lg:w-4 xl:h-5 xl:w-5"
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

const MobileMenuButton: React.FC<MobileMenuButtonProps> = React.memo(
  ({ isOpen, onToggle }) => {
    return (
      <button
        className="relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full transition-all duration-300 group"
        onClick={onToggle}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {/* Cercle de fond */}
        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

        {/* Icône du menu */}
        <div className="relative w-5 h-5 sm:w-6 sm:h-6">
          {/* Lignes du hamburger */}
          <span
            className={`absolute top-0.5 sm:top-1 left-0 w-5 h-0.5 sm:w-6 bg-white transition-all duration-300 ease-in-out ${
              isOpen ? "top-2 sm:top-3 rotate-45" : ""
            }`}
          ></span>
          <span
            className={`absolute top-2 sm:top-3 left-0 w-5 h-0.5 sm:w-6 bg-white transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`absolute top-3.5 sm:top-5 left-0 w-5 h-0.5 sm:w-6 bg-white transition-all duration-300 ease-in-out ${
              isOpen ? "top-2 sm:top-3 -rotate-45" : ""
            }`}
          ></span>
        </div>

        {/* Indicateur d'état */}
        <div
          className={`absolute -bottom-1 -right-1 w-2 h-2 rounded-full transition-all duration-300 ${
            isOpen ? "bg-red-400 scale-100" : "bg-transparent scale-0"
          }`}
        ></div>
      </button>
    );
  }
);

const SupportBox: React.FC<SupportBoxProps> = React.memo(() => {
  return (
    <div className="support-box px-2 sm:px-3 md:px-3 lg:px-4 xl:px-3 py-2 sm:py-2.5 md:py-3 lg:py-4 xl:py-3 relative">
      <div className="absolute left-2 sm:left-3 md:left-3 lg:left-4 xl:left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-8 xl:h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
        <Phone className="text-[#0099cc] w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-4 xl:h-4" />
      </div>
      <div className="ml-8 sm:ml-9 md:ml-10 lg:ml-12 xl:ml-10">
        <p className="text-white text-xs sm:text-xs md:text-sm lg:text-sm xl:text-xs font-normal mb-1">
          <span className="hidden lg:inline xl:inline">
            Any Questions? Call us
          </span>
          <span className="inline lg:hidden xl:hidden">Call Us</span>
        </p>
        <h3 className="text-white text-xs sm:text-xs md:text-sm lg:text-base xl:text-sm font-bold">
          <a
            href="tel:12463330791"
            className="hover:underline transition-all duration-300"
          >
            <span className="hidden sm:inline">+1 (246) 333 0791</span>
            <span className="inline sm:hidden">+12463330791</span>
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
        <div className="bg-gradient-to-b from-blue-50 to-white p-4 sm:p-6 border-r border-gray-100">
          <h3 className="text-base sm:text-lg font-bold text-blue-800 mb-3 sm:mb-4 flex items-center">
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
              href="/education-learning"
              icon="fa-graduation-cap"
              bgColor="blue"
              title="Education and Learning"
              subtitle="Schools & Training"
            />
            <ServiceLink
              href="/health-wellness"
              icon="fa-heartbeat"
              bgColor="red"
              title="Health and Wellness"
              subtitle="Medical Services"
            />
            <ServiceLink
              href="/immigration-civil-registration"
              icon="fa-passport"
              bgColor="indigo"
              title="Immigration and Civil Registration"
              subtitle="Citizenship & Visas"
            />
            <ServiceLink
              href="/labor-employment"
              icon="fa-briefcase"
              bgColor="teal"
              title="Labour and Employment"
              subtitle="Jobs & Careers"
            />
          </div>
        </div>

        {/* Second Services Column */}
        <div className="bg-gradient-to-b from-blue-50 to-white p-4 sm:p-6 border-r border-gray-100">
          <div className="grid grid-cols-1 gap-2 mt-8 sm:mt-12">
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
            {/* <ServiceLink
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
            /> */}
          </div>
        </div>

        {/* Service Links Column 1 */}
        <div className="bg-gradient-to-b from-indigo-50 to-white p-4 sm:p-6 border-r border-gray-100">
          <h3 className="text-base sm:text-lg font-bold text-indigo-800 mb-3 sm:mb-4 flex items-center">
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
        <div className="bg-gradient-to-b from-indigo-50 to-white p-4 sm:p-6">
          <div className="grid grid-cols-1 gap-2 mt-8 sm:mt-12">
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
    "fa-file-text": FileText,
    "fa-users": Users,
    "fa-tint": Droplets,
    "fa-heart": Heart,
    "fa-shield-alt": Shield,
    "fa-book-open": BookOpen,
    "fa-award": Award,
    "fa-map-marker-alt": MapPin,
    "fa-phone": Phone,
    "fa-envelope": Mail,
    "fa-clock": Clock,
    "fa-calendar": Calendar,
    "fa-check-circle": CheckCircle,
    "fa-user-check": UserCheck,
    "fa-trending-up": TrendingUp,
    "fa-chart-bar": BarChart3,
    "fa-lightbulb": Lightbulb,
    "fa-home": Home,
    "fa-building": Building,
    "fa-graduation-cap": GraduationCap,
    "fa-briefcase": Briefcase,
    "fa-stethoscope": Stethoscope,
    "fa-microscope": Microscope,
    "fa-flask": TestTube,
    "fa-activity": Activity,
    "fa-bullseye": Target,
    "fa-compass": Compass,
    "fa-dollar-sign": DollarSign,
    "fa-box": Package,
    "fa-truck": Truck,
    "fa-industry": Factory,
    "fa-leaf": Leaf,
    "fa-tree": TreePine,
    "fa-fish": Fish,
    "fa-bug": Bug,
    "fa-exclamation-triangle": AlertTriangle,
    "fa-info-circle": Info,
    "fa-file-check": FileCheck,
    "fa-list-check": ClipboardList,
  };

  return iconMap[iconName] || FileText; // Icône par défaut
};

const ServiceLink: React.FC<ServiceLinkProps> = ({
  href,
  icon,
  bgColor,
  title,
  subtitle,
}) => {
  const IconComponent = getLucideIcon(icon);

  return (
    <Link
      href={href}
      className="flex items-center p-2 sm:p-3 rounded-lg text-gray-700 hover:bg-white hover:text-blue-600 hover:shadow-md transition-all duration-300 group/item"
    >
      <div
        className={`w-8 h-8 sm:w-10 sm:h-10 bg-${bgColor}-100 rounded-lg flex items-center justify-center mr-2 sm:mr-3 group-hover/item:bg-${bgColor}-200 transition-colors`}
      >
        <IconComponent
          className={`text-${bgColor}-600 w-4 h-4 sm:w-5 sm:h-5`}
        />
      </div>
      <div>
        <p className="font-semibold text-sm sm:text-base">{title}</p>
        <p className="text-xs text-gray-500 hidden sm:block">{subtitle}</p>
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
        className="flex items-center p-2 sm:p-3 rounded-lg text-gray-700 hover:bg-white hover:text-indigo-600 hover:shadow-md transition-all duration-300 group/item"
      >
        <div
          className={`w-8 h-8 sm:w-10 sm:h-10 bg-${bgColor}-100 rounded-lg flex items-center justify-center mr-2 sm:mr-3 group-hover/item:bg-${bgColor}-200 transition-colors`}
        >
          <i
            className={`fa ${icon} text-${bgColor}-600 text-sm sm:text-base`}
          ></i>
        </div>
        <div>
          <p className="font-semibold text-sm sm:text-base">{title}</p>
          <p className="text-xs text-gray-500 hidden sm:block">{subtitle}</p>
        </div>
      </a>
    );
  }
);

// Composant pour les sous-menus About
const AboutSubmenu: React.FC<AboutSubmenuProps> = React.memo(() => {
  return (
    <ul className="absolute left-0 top-full w-56 sm:w-64 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 z-50 rounded-b-lg">
      {/* About Botswana Submenu with its own sections */}
      <li className="relative group/submenu-botswana">
        <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3.5 text-gray-800 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300 border-b border-gray-100 cursor-pointer">
          <span className="text-sm sm:text-base">About Botswana</span>
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4"
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
        <ul className="absolute left-full top-0 w-48 sm:w-56 bg-white shadow-xl opacity-0 invisible group-hover/submenu-botswana:opacity-100 group-hover/submenu-botswana:visible transition-all duration-300 transform translate-x-4 group-hover/submenu-botswana:translate-x-0 z-50 rounded-lg">
          <li>
            <Link
              href="/about/about-botswana#our-country"
              className="block px-4 sm:px-6 py-2 sm:py-3 text-gray-700 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300 border-b border-gray-100 text-sm sm:text-base"
            >
              Our Country
            </Link>
          </li>
          <li>
            <Link
              href="/about/about-botswana#public-holidays"
              className="block px-4 sm:px-6 py-2 sm:py-3 text-gray-700 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300 border-b border-gray-100 text-sm sm:text-base"
            >
              Public Holidays
            </Link>
          </li>
          <li>
            <Link
              href="/about/about-botswana#school-terms"
              className="block px-4 sm:px-6 py-2 sm:py-3 text-gray-700 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300 text-sm sm:text-base"
            >
              School Terms
            </Link>
          </li>
        </ul>
      </li>

      {/* About Government Submenu with its own sections */}
      <li className="relative group/submenu-government">
        <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3.5 text-gray-800 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300 border-b border-gray-100 cursor-pointer">
          <span className="text-sm sm:text-base">About Government</span>
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4"
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
        <ul className="absolute left-full top-0 w-48 sm:w-56 bg-white shadow-xl opacity-0 invisible group-hover/submenu-government:opacity-100 group-hover/submenu-government:visible transition-all duration-300 transform translate-x-4 group-hover/submenu-government:translate-x-0 z-50 rounded-lg">
          <li>
            <Link
              href="/about/about-government#ministries-and-agencies"
              className="block px-4 sm:px-6 py-2 sm:py-3 text-gray-700 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300 border-b border-gray-100 text-sm sm:text-base"
            >
              Ministries and Agencies
            </Link>
          </li>
          <li>
            <Link
              href="/about/about-government#parastatals"
              className="block px-4 sm:px-6 py-2 sm:py-3 text-gray-700 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300 border-b border-gray-100 text-sm sm:text-base"
            >
              Parastatals
            </Link>
          </li>
          <li>
            <Link
              href="/about/about-government#publications"
              className="block px-4 sm:px-6 py-2 sm:py-3 text-gray-700 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300 border-b border-gray-100 text-sm sm:text-base"
            >
              Publications
            </Link>
          </li>
          <li>
            <Link
              href="/about/about-government#local-authorities"
              className="block px-4 sm:px-6 py-2 sm:py-3 text-gray-700 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300 border-b border-gray-100 text-sm sm:text-base"
            >
              Local Authorities
            </Link>
          </li>
          <li>
            <Link
              href="/about/about-government#land-board"
              className="block px-4 sm:px-6 py-2 sm:py-3 text-gray-700 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300 text-sm sm:text-base"
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
    <ul className="absolute left-0 top-full w-56 sm:w-64 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 z-50 rounded-b-lg">
      <li>
        <Link
          href="/news#latest-news"
          className="block px-4 sm:px-6 py-2.5 sm:py-3.5 text-gray-800 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300 border-b border-gray-100 text-sm sm:text-base"
        >
          Latest News
        </Link>
      </li>
      <li>
        <Link
          href="/news#upcoming-events"
          className="block px-4 sm:px-6 py-2.5 sm:py-3.5 text-gray-800 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300 border-b border-gray-100 text-sm sm:text-base"
        >
          Upcoming Events
        </Link>
      </li>
      <li>
        <Link
          href="/news#press-releases"
          className="block px-4 sm:px-6 py-2.5 sm:py-3.5 text-gray-800 hover:bg-[#f0f9ff] hover:text-[#0099cc] transition-all duration-300 border-b border-gray-100 text-sm sm:text-base"
        >
          Press Releases
        </Link>
      </li>
    </ul>
  );
});

// Composant pour les éléments de navigation
const NavigationItem: React.FC<NavigationItemProps> = React.memo(
  ({ item, index }) => {
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
          className="text-white text-xs sm:text-sm md:text-base lg:text-base font-normal uppercase py-3 sm:py-4 lg:py-6 px-1 sm:px-2 lg:px-3 block hover:text-[#66d9ff] transition-all duration-300 relative"
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
  }
);

// Composant pour la navigation principale
const MainNavigation: React.FC<MainNavigationProps> = React.memo(
  ({ navItems }) => {
    return (
      <nav className="main-menu hidden xl:block">
        <ul className="navigation flex">
          {navItems.map((item, index) => (
            <NavigationItem key={item.name} item={item} index={index} />
          ))}
        </ul>
      </nav>
    );
  }
);

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
        <div className="outer-container absolute left-0 top-0 right-0 w-full px-3 sm:px-4 md:px-6 lg:px-24 border-b border-white border-opacity-20">
          <div className="flex flex-col lg:flex-row justify-between items-center py-1.5 sm:py-2 lg:py-3">
            <div className="upper-left flex items-center mb-1 lg:mb-0 w-full lg:w-auto justify-between lg:justify-start">
              <Logo isScrolled={isScrolled} />
            </div>

            <div className="menu-area flex items-center w-full lg:w-auto justify-between lg:justify-end">
              {/* Boutons à droite en mobile */}

              {/* Menu de navigation pour desktop */}
              <MainNavigation navItems={navItems} />

              <div className="menu-right-content flex items-center">
                {/* Icône de recherche - cachée en mobile, visible à partir de sm */}
                <div className="search-box-outer hidden sm:block px-1 sm:px-2 md:px-3 lg:px-4 xl:px-3 py-2 sm:py-2.5 md:py-3 lg:py-4 xl:py-3 border-l border-white border-opacity-20">
                  <button
                    className="search-toggler text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-lg hover:text-[#66d9ff] transition-all duration-300 transform hover:scale-110 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:w-10 xl:h-10"
                    onClick={onSearchOpen}
                    aria-label="Search"
                  >
                    <Search className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-5 xl:h-5" />
                  </button>
                </div>

                {/* SupportBox - caché en mobile, visible à partir de md */}
                <div className="hidden md:block">
                  <SupportBox />
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 xl:hidden">
                <div className="block sm:hidden">
                  <SearchButton onOpen={onSearchOpen} />
                </div>
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
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex justify-between items-center py-1.5 sm:py-2">
            <div className="logo-box">
              <Link href="/">
                <img
                  src="/assets/logo/logo.png"
                  alt="Logo"
                  className="h-6 sm:h-7 md:h-8 lg:h-10 transition-all duration-300 hover:scale-105"
                />
              </Link>
            </div>
            <div className="menu-area">
              <MainNavigation navItems={navItems} />

              {/* Mobile menu button in sticky header */}
              <div className="xl:hidden flex items-center gap-2 sm:gap-3">
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
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {}
  );

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
        href: "/about/about-botswana",
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
          className={`header-top bg-[#0099cc] transition-all duration-500 ${isScrolled ? "py-0.5 opacity-90" : "py-1 sm:py-2 opacity-100"} px-3 sm:px-4 md:px-6 lg:px-24 hidden md:block`}
        >
          <div className="max-w-9xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3">
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
