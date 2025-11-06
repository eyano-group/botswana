import React, { useState } from 'react';

const InquirySection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de soumission du formulaire
    console.log('Form submitted:', formData);
    // Réinitialiser le formulaire après soumission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  
  return (
    <section className="inquiry-section relative py-24 lg:py-32 bg-[#0c2136] overflow-hidden">
      {/* Pattern de fond */}
      <div 
        className="pattern-layer absolute inset-0 w-full h-full opacity-20"
        style={{ backgroundImage: "url(assets/images/shape/pattern-4.png)" }}
      ></div>
      
      <div className="auto-container relative z-10 max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Colonne du formulaire */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="inner-box">
              <h4 className="text-lg md:text-xl leading-7 text-white font-normal mb-2">
                Get Free Assessment Today!
              </h4>
              <h2 className="text-2xl md:text-3xl lg:text-4xl leading-10 lg:leading-[48px] font-semibold text-white mb-8">
                Fell Free To Enquire About <br />Any Questions You Got
              </h2>
              
              <form onSubmit={handleSubmit} className="inquiry-form">
                <div className="form-group mb-4">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Full Name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full h-14 bg-[#476c92] border border-[#476c92] rounded px-5 text-white placeholder-white focus:outline-none focus:border-[#0099cc] transition-all duration-500"
                  />
                </div>
                
                <div className="form-group mb-4">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Email address" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full h-14 bg-[#476c92] border border-[#476c92] rounded px-5 text-white placeholder-white focus:outline-none focus:border-[#0099cc] transition-all duration-500"
                  />
                </div>
                
                <div className="form-group mb-6">
                  <textarea 
                    name="message" 
                    placeholder="Message" 
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full h-32 bg-[#476c92] border border-[#476c92] rounded px-5 py-3 text-white placeholder-white focus:outline-none focus:border-[#0099cc] transition-all duration-500 resize-none"
                  ></textarea>
                </div>
                
                <div className="form-group">
                  <button 
                    type="submit" 
                    className="theme-btn-two inline-flex items-center text-white bg-[#0099cc] hover:bg-[#0080b3] px-8 py-3.5 rounded transition-all duration-300 transform hover:scale-105"
                  >
                    <i className="flaticon-send mr-2.5"></i>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Colonne des informations */}
          <div className="w-full lg:w-1/2 lg:pl-20">
            <div className="content-box relative max-w-sm lg:max-w-md">
              <h3 className="text-2xl md:text-3xl leading-10 text-white font-normal mb-8">
                Customer Ratings
              </h3>
              
              <ul className="rating flex mb-5">
                {[...Array(5)].map((_, i) => (
                  <li key={i} className="text-2xl md:text-3xl leading-9 text-yellow-400 mr-1">
                    <i className="fas fa-star"></i>
                  </li>
                ))}
              </ul>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[68px] text-white font-bold mb-2.5">
                4.8 / 5.0
              </h2>
              
              <span className="block text-lg md:text-xl leading-8 text-white font-light mb-12">
                By 1500+ Visa Approved Customers
              </span>
              
              <ul className="info-box">
                <li className="relative pl-16 pb-8 mb-7 border-b border-white border-opacity-20 last:border-0 last:mb-0 last:pb-0">
                  <i className="flaticon-call absolute left-0 top-1 text-4xl leading-10 text-white"></i>
                  <p className="text-white font-normal mb-0">
                    Any Questions? Call us
                  </p>
                  <h3 className="text-xl md:text-2xl leading-7 text-white font-normal">
                    <a href="tel:12463330079" className="hover:text-[#0099cc] transition-colors">
                      +1 (246) 333 0079
                    </a>
                  </h3>
                </li>
                
                <li className="relative pl-16 pb-8 mb-7 border-b border-white border-opacity-20 last:border-0 last:mb-0 last:pb-0">
                  <i className="flaticon-email absolute left-0 top-1 text-4xl leading-10 text-white"></i>
                  <p className="text-white font-normal mb-0">
                    Any Questions? Email us
                  </p>
                  <h3 className="text-xl md:text-2xl leading-7 text-white font-normal">
                    <a href="mailto:inquiry@example.com" className="hover:text-[#0099cc] transition-colors">
                      inquiry@example.com
                    </a>
                  </h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquirySection;