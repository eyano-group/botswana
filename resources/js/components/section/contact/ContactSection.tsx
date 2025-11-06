// src/components/ContactSection.js
import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import GoogleMap from './GoogleMap';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    // Fond très léger pour faire ressortir les cartes blanches
    <section className="relative bg-slate-50 py-20 lg:py-32">
      <div className="container mx-auto max-w-7xl px-4">
        
        {/* En-tête de la section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <p className="text-lg font-semibold text-blue-600 uppercase tracking-wider mb-3">How we help clients</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Got Immigration or Visa Problems?
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We are always ready to help customers with any difficulty. Our team of experts is here to guide you through every step of the process.
          </p>
          {/* Ligne décorative */}
          <div className="flex items-center justify-center mt-8">
            <span className="h-0.5 w-12 bg-blue-600 rounded-full"></span>
            <span className="w-2 h-2 bg-blue-600 rounded-full mx-2"></span>
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            <span className="h-0.5 w-12 bg-blue-600 rounded-full"></span>
          </div>
        </div>

        {/* Carte Google Map */}
        <div className="mb-20">
            <GoogleMap />
        </div>

        {/* Section des informations de contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <ContactInfo 
            Icon={MapPin}
            title="Office Address"
            content="72 MainSail Drive, St. 12/B Calibry, Florida 25502 - USA"
          />
          <ContactInfo 
            Icon={Phone}
            title="Phone Us"
            content={
              <>
                Hotline: <a href="tel:080060020" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">0800 60020</a><br />
                Mobile: <a href="tel:12463330791" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">+1 (246) 333 0791</a>
              </>
            }
          />
          <ContactInfo 
            Icon={Mail}
            title="Send Message"
            content={
              <>
                <a href="mailto:info@example.net" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">info@example.net</a><br />
                <a href="mailto:support@thedomain.com" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">support@thedomain.com</a>
              </>
            }
          />
        </div>

        {/* Section du formulaire de contact */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Let's Start a Conversation Today!</h2>
            <div className="flex items-center justify-center">
              <span className="h-0.5 w-12 bg-blue-600 rounded-full"></span>
              <span className="w-2 h-2 bg-blue-600 rounded-full mx-2"></span>
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              <span className="h-0.5 w-12 bg-blue-600 rounded-full"></span>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;