// src/components/ContactForm.js
import React, { useState } from 'react';
import { Send } from 'lucide-react'; // Icône pour le bouton

const ContactForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Logique de soumission...
  };

  return (
    <div className="bg-white p-8 md:p-12 shadow-2xl rounded-2xl border border-slate-100">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Your Name *"
            required
            className="w-full h-14 px-5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email address *"
            required
            className="w-full h-14 px-5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone No."
            className="w-full h-14 px-5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject *"
            required
            className="w-full h-14 px-5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>

        <div className="relative">
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full h-14 px-5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-pointer"
          >
            <option value="" disabled selected>Select Service Required</option>
            <option value="1">Working Visas</option>
            <option value="2">Study Visas</option>
            <option value="3">Business Visas</option>
            <option value="4">Tourist Visas</option>
          </select>
          {/* Flèche personnalisée pour le select */}
          <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
            <svg className="w-5 h-5 text-slate-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="6"
          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
        ></textarea>
        
        <div className="text-center pt-4">
          <button
            type="submit"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <Send className="mr-3 w-5 h-5" />
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;