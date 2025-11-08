import React, { useState } from 'react';
import { Link } from '@inertiajs/react';

const Footer = () => {
  const [email, setEmail] = useState('');
  
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    // Logique de soumission de la newsletter
    setEmail(''); // Réinitialiser le champ après soumission
  };
  
  return (
    <footer className="main-footer bg-[#0c2136]">
      <div className="auto-container max-w-7xl mx-auto px-4">
        {/* Section supérieure du footer */}
        <div className="footer-top relative py-24 lg:py-28 border-b border-white border-opacity-10">
          <div className="widget-section">
            <div className="flex flex-wrap -mx-4">
              {/* Colonne du logo */}
              <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
                <div className="footer-widget logo-widget relative lg:-mr-9 lg:mt-1">
                  <figure className="footer-logo relative mb-7">
                    <Link href="/index.html">
                      <img src="/assets/logo/logo.png" alt="Botswana Logo" className="h-10 lg:h-12" />
                    </Link>
                  </figure>
                  <div className="text">
                    <p className="text-gray-400 leading-6 mb-6">
                      Integer lobortis sem consequat imperdiet In nulla viverra ut lorem ut, dapibus consectetur etur diam. Nun bibendum diet condiment sed ipsum duis lacinia.
                    </p>
                  </div>
                  <ul className="social-links flex">
                    <li className="mr-4 last:mr-0">
                      <Link href="/index.html" className="text-gray-400 text-base hover:text-[#0099cc] transition-colors duration-300">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li className="mr-4 last:mr-0">
                      <Link href="/index.html" className="text-gray-400 text-base hover:text-[#0099cc] transition-colors duration-300">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li className="mr-4 last:mr-0">
                      <Link href="/index.html" className="text-gray-400 text-base hover:text-[#0099cc] transition-colors duration-300">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li className="mr-4 last:mr-0">
                      <Link href="/index.html" className="text-gray-400 text-base hover:text-[#0099cc] transition-colors duration-300">
                        <i className="fab fa-google-plus-g"></i>
                      </Link>
                    </li>
                    <li className="mr-4 last:mr-0">
                      <Link href="/index.html" className="text-gray-400 text-base hover:text-[#0099cc] transition-colors duration-300">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Colonne Immigration */}
              <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
                <div className="footer-widget links-widget lg:ml-15">
                  <div className="widget-title relative mb-6">
                    <h3 className="text-xl lg:text-2xl font-bold text-white m-0">Immigration</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="list">
                      <li className="relative block mb-2 last:mb-0">
                        <Link href="/index.html" className="relative inline-block text-gray-400 text-sm leading-6 font-light pl-6 hover:text-white transition-colors duration-300">
                          Pre Assessment
                          <span className="absolute left-0 top-1 text-xs text-gray-400 transition-colors duration-300 hover:text-white">›</span>
                        </Link>
                      </li>
                      <li className="relative block mb-2 last:mb-0">
                        <Link href="/index.html" className="relative inline-block text-gray-400 text-sm leading-6 font-light pl-6 hover:text-white transition-colors duration-300">
                          Visa Consultation
                          <span className="absolute left-0 top-1 text-xs text-gray-400 transition-colors duration-300 hover:text-white">›</span>
                        </Link>
                      </li>
                      <li className="relative block mb-2 last:mb-0">
                        <Link href="/index.html" className="relative inline-block text-gray-400 text-sm leading-6 font-light pl-6 hover:text-white transition-colors duration-300">
                          Business Plans
                          <span className="absolute left-0 top-1 text-xs text-gray-400 transition-colors duration-300 hover:text-white">›</span>
                        </Link>
                      </li>
                      <li className="relative block mb-2 last:mb-0">
                        <Link href="/index.html" className="relative inline-block text-gray-400 text-sm leading-6 font-light pl-6 hover:text-white transition-colors duration-300">
                          Post Landing Assistant
                          <span className="absolute left-0 top-1 text-xs text-gray-400 transition-colors duration-300 hover:text-white">›</span>
                        </Link>
                      </li>
                      <li className="relative block mb-2 last:mb-0">
                        <Link href="/index.html" className="relative inline-block text-gray-400 text-sm leading-6 font-light pl-6 hover:text-white transition-colors duration-300">
                          Meet Our Agents
                          <span className="absolute left-0 top-1 text-xs text-gray-400 transition-colors duration-300 hover:text-white">›</span>
                        </Link>
                      </li>
                      <li className="relative block mb-2 last:mb-0">
                        <Link href="/index.html" className="relative inline-block text-gray-400 text-sm leading-6 font-light pl-6 hover:text-white transition-colors duration-300">
                          Visa Documentation
                          <span className="absolute left-0 top-1 text-xs text-gray-400 transition-colors duration-300 hover:text-white">›</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Colonne Quick Links */}
              <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
                <div className="footer-widget links-widget lg:ml-6">
                  <div className="widget-title relative mb-6">
                    <h3 className="text-xl lg:text-2xl font-bold text-white m-0">Quick Links</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="list">
                      <li className="relative block mb-2 last:mb-0">
                        <Link href="/index.html" className="relative inline-block text-gray-400 text-sm leading-6 font-light pl-6 hover:text-white transition-colors duration-300">
                          About Visarzo
                          <span className="absolute left-0 top-1 text-xs text-gray-400 transition-colors duration-300 hover:text-white">›</span>
                        </Link>
                      </li>
                      <li className="relative block mb-2 last:mb-0">
                        <Link href="/index.html" className="relative inline-block text-gray-400 text-sm leading-6 font-light pl-6 hover:text-white transition-colors duration-300">
                          Why Immigrate
                          <span className="absolute left-0 top-1 text-xs text-gray-400 transition-colors duration-300 hover:text-white">›</span>
                        </Link>
                      </li>
                      <li className="relative block mb-2 last:mb-0">
                        <Link href="/index.html" className="relative inline-block text-gray-400 text-sm leading-6 font-light pl-6 hover:text-white transition-colors duration-300">
                          Service Features
                          <span className="absolute left-0 top-1 text-xs text-gray-400 transition-colors duration-300 hover:text-white">›</span>
                        </Link>
                      </li>
                      <li className="relative block mb-2 last:mb-0">
                        <Link href="/index.html" className="relative inline-block text-gray-400 text-sm leading-6 font-light pl-6 hover:text-white transition-colors duration-300">
                          Study Visas
                          <span className="absolute left-0 top-1 text-xs text-gray-400 transition-colors duration-300 hover:text-white">›</span>
                        </Link>
                      </li>
                      <li className="relative block mb-2 last:mb-0">
                        <Link href="/index.html" className="relative inline-block text-gray-400 text-sm leading-6 font-light pl-6 hover:text-white transition-colors duration-300">
                          Apply As Citizenship
                          <span className="absolute left-0 top-1 text-xs text-gray-400 transition-colors duration-300 hover:text-white">›</span>
                        </Link>
                      </li>
                      <li className="relative block mb-2 last:mb-0">
                        <Link href="/index.html" className="relative inline-block text-gray-400 text-sm leading-6 font-light pl-6 hover:text-white transition-colors duration-300">
                          Immigration Resources
                          <span className="absolute left-0 top-1 text-xs text-gray-400 transition-colors duration-300 hover:text-white">›</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Colonne Newsletter */}
              <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
                <div className="footer-widget newsletter-widget lg:-ml-2.5">
                  <div className="widget-title relative mb-6">
                    <h3 className="text-xl lg:text-2xl font-bold text-white m-0">Newsletter Signup</h3>
                  </div>
                  <div className="widget-content">
                    <p className="text-gray-400 leading-6 mb-6">
                      Enter your email address to get latest updates and offers from us. Also some Discount coupons.
                    </p>
                    <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                      <div className="form-group relative">
                        <input 
                          type="email" 
                          name="email" 
                          placeholder="Email address" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full h-14 bg-[#2a3c4e] border border-[#2a3c4e] rounded text-sm font-light text-gray-400 placeholder-gray-400 px-5 pr-16 focus:outline-none focus:border-[#0099cc] transition-all duration-500"
                        />
                        <button 
                          type="submit" 
                          className="absolute top-0 right-0 w-14 h-14 bg-[#0099cc] text-white text-sm font-semibold rounded-r text-center hover:bg-[#0080b3] transition-colors duration-300"
                        >
                          <i className="flaticon-send"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Section inférieure du footer */}
        <div className="footer-bottom relative py-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="copyright text-gray-400 leading-6 mb-4 md:mb-0">
              <p>(&copy;) 2025 <Link href="/index.html" className="text-gray-400 uppercase hover:text-[#0099cc] transition-colors duration-300">Botswana</Link> Immigration & Visa Firm. All rights reserved.</p>
            </div>
            <ul className="footer-nav flex flex-wrap">
              <li className="relative inline-block mr-5 last:mr-0">
                <Link href="/index.html" className="text-gray-400 text-sm leading-6 font-light hover:text-white transition-colors duration-300">
                  Privacy Policy
                  <span className="absolute right-[-12px] top-2 w-0.5 h-4 bg-gray-600"></span>
                </Link>
              </li>
              <li className="relative inline-block mr-5 last:mr-0">
                <Link href="/index.html" className="text-gray-400 text-sm leading-6 font-light hover:text-white transition-colors duration-300">
                  Sitemap
                  <span className="absolute right-[-12px] top-2 w-0.5 h-4 bg-gray-600"></span>
                </Link>
              </li>
              <li className="relative inline-block mr-5 last:mr-0">
                <Link href="/index.html" className="text-gray-400 text-sm leading-6 font-light hover:text-white transition-colors duration-300">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;