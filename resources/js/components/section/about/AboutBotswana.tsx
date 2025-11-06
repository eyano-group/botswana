import React, { useState } from 'react';
import { MapPin, Calendar, ChevronDown, ChevronUp, Sun, CloudRain, Globe, Users, Briefcase, BookOpen, Trophy, TreePine, Camera, Heart, TrendingUp, DollarSign, Award, Clock } from 'lucide-react';
import SectionHeader from '../news/SectionHeader';
import PageTitle from '@/components/UI/PageTitle';

// Données enrichies pour les vacances
const holidaysData = [
  { 
    quarter: 'Q1', 
    holidays: [
      { name: 'New Year\'s Day', date: 'January 1', type: 'Public', description: 'Celebration of the New Year' }, 
      { name: 'Good Friday', date: 'April 7', type: 'Religious', description: 'Christian religious holiday' },
      { name: 'Easter Monday', date: 'April 10', type: 'Religious', description: 'Christian religious holiday' }
    ] 
  },
  { 
    quarter: 'Q2', 
    holidays: [
      { name: 'Labour Day', date: 'May 1', type: 'Public', description: 'International Workers\' Day' }, 
      { name: 'Ascension Day', date: 'May 18', type: 'Religious', description: 'Christian religious holiday' },
      { name: 'Sir Seretse Khama Day', date: 'July 1', type: 'Public', description: 'Commemoration of Botswana\'s first president' }
    ] 
  },
  { 
    quarter: 'Q3', 
    holidays: [
      { name: 'President\'s Day', date: 'July 19', type: 'Public', description: 'Honoring the current President' }, 
      { name: 'Botswana Day', date: 'September 30', type: 'Public', description: 'Celebration of independence' },
      { name: 'Botswana Day (Following Day)', date: 'October 1', type: 'Public', description: 'Continuation of independence celebrations' }
    ] 
  },
  { 
    quarter: 'Q4', 
    holidays: [
      { name: 'Christmas Day', date: 'December 25', type: 'Religious', description: 'Christian religious holiday' }, 
      { name: 'Boxing Day', date: 'December 26', type: 'Public', description: 'Traditional holiday following Christmas' }
    ] 
  },
];

// Données enrichies pour les termes scolaires
const schoolTermsData = [
  { 
    term: 'Term 1', 
    start: 'January 10', 
    end: 'April 7', 
    break: 'April 8 - May 8',
    weeks: '13 weeks',
    exams: 'March 28 - April 6'
  },
  { 
    term: 'Term 2', 
    start: 'May 9', 
    end: 'August 11', 
    break: 'August 12 - September 5',
    weeks: '14 weeks',
    exams: 'August 1 - August 10'
  },
  { 
    term: 'Term 3', 
    start: 'September 6', 
    end: 'December 15', 
    break: 'December 16 - January 9',
    weeks: '15 weeks',
    exams: 'December 5 - December 14'
  },
];

// Données pour la section économie
const economyData = [
  { sector: 'Mining', contribution: '25%', growth: '+3.2%', icon: Trophy, color: 'blue' },
  { sector: 'Tourism', contribution: '12%', growth: '+5.7%', icon: Camera, color: 'green' },
  { sector: 'Agriculture', contribution: '8%', growth: '+2.1%', icon: TreePine, color: 'amber' },
  { sector: 'Manufacturing', contribution: '5%', growth: '+4.3%', icon: Briefcase, color: 'purple' },
  { sector: 'Services', contribution: '45%', growth: '+6.8%', icon: Users, color: 'indigo' },
  { sector: 'Financial', contribution: '5%', growth: '+7.2%', icon: DollarSign, color: 'emerald' },
];

// Données pour la section culture
const cultureData = [
  { 
    title: 'Traditional Music', 
    description: 'Botswana\'s traditional music is characterized by the use of drums, rattles, and string instruments. The most famous traditional dance is the Setapa.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  { 
    title: 'Cuisine', 
    description: 'Traditional Botswana cuisine includes Seswaa (pounded meat), Morogo (wild spinach), and Bogobe (porridge). These dishes reflect the country\'s agricultural heritage.',
    image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  { 
    title: 'Arts and Crafts', 
    description: 'Botswana is renowned for its basketry, pottery, and traditional textiles. The San people are particularly known for their rock art dating back thousands of years.',
    image: 'https://images.unsplash.com/photo-1618449840667-8e0154935c32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  { 
    title: 'Languages', 
    description: 'English is the official language, while Setswana is the national language. There are also numerous minority languages spoken across the country.',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
];

// Données pour les statistiques du pays
const countryStats = [
  { label: 'Population', value: '2.4 Million', icon: Users },
  { label: 'Capital', value: 'Gaborone', icon: MapPin },
  { label: 'Area', value: '581,730 km²', icon: Globe },
  { label: 'Independence', value: '1966', icon: Award },
  { label: 'Currency', value: 'Pula (BWP)', icon: DollarSign },
  { label: 'Official Languages', value: 'English, Setswana', icon: BookOpen },
];

const AboutBotswana = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [openAccordion, setOpenAccordion] = useState(null);
  const [selectedCultureItem, setSelectedCultureItem] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <>
      {/* Hero Section améliorée avec animation et design plus riche */}
      {/* <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" alt="Botswana Landscape" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">About Botswana</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">A land of unparalleled beauty, vibrant culture, and robust economic growth.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#our-country" className="inline-block px-8 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all transform hover:scale-105">
              Explore More
            </a>
            <a href="#statistics" className="inline-block px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition-all">
              View Statistics
            </a>
          </div>
        </div>
      </section> */}
      <PageTitle title="About Botswana" backgroundImage="/assets/images/breadcrumb/page-title-6.jpg" breadcrumbItems={[{ label: 'Home', href: '/' }, { label: 'About', href: '/' }, { label: 'About Botswana', href: '/about/about-botswana' }]} />

      {/* Section des statistiques du pays */}
      <section id="statistics" className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {countryStats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <p className="text-sm text-slate-600 mb-1">{stat.label}</p>
                <p className="text-lg font-bold text-slate-800">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Country Section with Tabs */}
      <section id="our-country" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader subtitle="Discover" title="Our Country" />
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12 border-b border-slate-200">
            {['overview', 'geography', 'culture', 'economy'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-semibold text-lg capitalize transition-all ${activeTab === tab ? 'text-blue-600 border-b-4 border-blue-600 -mb-[1px]' : 'text-slate-600 hover:text-blue-500'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-w-5xl mx-auto">
            {activeTab === 'overview' && (
              <div className="grid md:grid-cols-2 gap-12 items-center animate-fadeIn">
                <div>
                  <h3 className="text-3xl font-bold text-slate-800 mb-4">A Beacon of Stability</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">Botswana, officially the Republic of Botswana, is a landlocked country in Southern Africa. It has a landscape defined by the Kalahari Desert and the Okavango Delta, one of the world's largest inland deltas.</p>
                  <p className="text-slate-600 leading-relaxed mb-6">Since gaining independence in 1966, it has been one of Africa's most stable economies, built largely on diamond mining, tourism, and cattle ranching.</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-blue-600 font-semibold mb-1">Independence</p>
                      <p className="text-2xl font-bold text-slate-800">1966</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm text-green-600 font-semibold mb-1">Capital City</p>
                      <p className="text-2xl font-bold text-slate-800">Gaborone</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-600">Botswana is renowned for its commitment to democracy, good governance, and conservation, with over 40% of its land dedicated to national parks and wildlife reserves.</p>
                </div>
                <div className="relative">
                  <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" alt="Elephant in Okavango" className="rounded-2xl shadow-xl" />
                  <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                    <p className="text-sm text-slate-500 mb-1">National Animal</p>
                    <p className="text-xl font-bold text-slate-800">African Elephant</p>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'geography' && (
              <div className="animate-fadeIn">
                <h3 className="text-3xl font-bold text-slate-800 mb-6">Geography & Climate</h3>
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="bg-slate-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                    <Sun className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                    <h4 className="font-bold text-xl mb-2">Climate</h4>
                    <p className="text-slate-600">Semi-arid. Distinct wet and dry seasons. Warm winters and hot summers.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                    <Globe className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                    <h4 className="font-bold text-xl mb-2">Terrain</h4>
                    <p className="text-slate-600">Predominantly flat to gently rolling tableland. The Kalahari Desert covers 70%.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                    <MapPin className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <h4 className="font-bold text-xl mb-2">Location</h4>
                    <p className="text-slate-600">Landlocked in Southern Africa, bordered by South Africa, Namibia, Zambia, and Zimbabwe.</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
                  <h4 className="text-2xl font-bold text-slate-800 mb-6">Natural Wonders</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <TreePine className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h5 className="font-bold text-lg text-slate-800 mb-2">Okavango Delta</h5>
                        <p className="text-slate-600">One of the Seven Natural Wonders of Africa, this vast inland delta is a UNESCO World Heritage Site and home to diverse wildlife.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h5 className="font-bold text-lg text-slate-800 mb-2">Makgadikgadi Pans</h5>
                        <p className="text-slate-600">One of the largest salt flats in the world, these vast pans transform into a vibrant ecosystem during the rainy season.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'culture' && (
              <div className="animate-fadeIn">
                <h3 className="text-3xl font-bold text-slate-800 mb-6">Rich Cultural Heritage</h3>
                <p className="text-slate-600 max-w-3xl mx-auto mb-12 text-center">Botswana's culture is a vibrant tapestry of traditions, languages, and customs that reflect its diverse ethnic groups and rich history.</p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {cultureData.map((item, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer" onClick={() => setSelectedCultureItem(item)}>
                      <div className="h-48 overflow-hidden">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h4>
                        <p className="text-slate-600 line-clamp-3">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
                  <h4 className="text-2xl font-bold text-slate-800 mb-6">Cultural Values</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                      <h5 className="font-bold text-lg text-slate-800 mb-2">Botho</h5>
                      <p className="text-slate-600">The concept of respect, humanity, and compassion towards others.</p>
                    </div>
                    <div className="text-center">
                      <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                      <h5 className="font-bold text-lg text-slate-800 mb-2">Community</h5>
                      <p className="text-slate-600">Strong emphasis on collective well-being and mutual support.</p>
                    </div>
                    <div className="text-center">
                      <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                      <h5 className="font-bold text-lg text-slate-800 mb-2">Heritage</h5>
                      <p className="text-slate-600">Deep respect for traditions and preservation of cultural identity.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'economy' && (
              <div className="animate-fadeIn">
                <h3 className="text-3xl font-bold text-slate-800 mb-6">Economic Overview</h3>
                <p className="text-slate-600 max-w-3xl mx-auto mb-12 text-center">Botswana has one of Africa's most stable economies, characterized by consistent growth, prudent fiscal management, and diverse sectors.</p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {economyData.map((item, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 bg-${item.color}-100 rounded-lg flex items-center justify-center`}>
                          <item.icon className={`w-6 h-6 text-${item.color}-600`} />
                        </div>
                        <span className={`text-sm font-bold text-${item.color}-600`}>{item.growth}</span>
                      </div>
                      <h4 className="font-bold text-lg text-slate-800 mb-2">{item.sector}</h4>
                      <p className="text-slate-600 mb-4">Contribution to GDP</p>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div 
                          className={`bg-${item.color}-600 h-2 rounded-full`} 
                          style={{ width: item.contribution }}
                        ></div>
                      </div>
                      <p className="text-sm text-slate-500 mt-2">{item.contribution}</p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
                  <h4 className="text-2xl font-bold text-slate-800 mb-6">Economic Achievements</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h5 className="font-bold text-lg text-slate-800 mb-2">Consistent Growth</h5>
                        <p className="text-slate-600">Botswana has maintained an average annual GDP growth rate of 4.5% over the past decade.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h5 className="font-bold text-lg text-slate-800 mb-2">Credit Rating</h5>
                        <p className="text-slate-600">Consistently awarded high credit ratings by international agencies for fiscal discipline.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Public Holidays Section with Accordion */}
      <section id="public-holidays" className="py-20 bg-slate-100">
        <div className="container mx-auto px-4">
          <SectionHeader subtitle="Plan Ahead" title="Public Holidays" />
          <div className="max-w-4xl mx-auto">
            {holidaysData.map((quarter, index) => (
              <div key={quarter.quarter} className="mb-4 bg-white rounded-xl shadow-md overflow-hidden">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
                >
                  <span className="text-xl font-bold text-slate-800">{quarter.quarter} Holidays</span>
                  {openAccordion === index ? <ChevronUp className="w-5 h-5 text-slate-600" /> : <ChevronDown className="w-5 h-5 text-slate-600" />}
                </button>
                <div className={`transition-all duration-500 ease-in-out ${openAccordion === index ? 'max-h-96' : 'max-h-0'} overflow-hidden`}>
                  <div className="p-6 pt-0 space-y-3">
                    {quarter.holidays.map((holiday) => (
                      <div key={holiday.name} className="p-4 bg-slate-50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-slate-700">{holiday.name}</span>
                          <div className="flex items-center space-x-2">
                            <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                              holiday.type === 'Public' ? 'bg-blue-100 text-blue-600' : 'bg-purple-100 text-purple-600'
                            }`}>
                              {holiday.type}
                            </span>
                            <span className="text-slate-500">{holiday.date}</span>
                          </div>
                        </div>
                        <p className="text-sm text-slate-600">{holiday.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Terms Section */}
      <section id="school-terms" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader subtitle="Academic Calendar" title="School Terms" />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {schoolTermsData.map((term) => (
              <div key={term.term} className="bg-white border-2 border-slate-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 text-center">
                  <h3 className="text-2xl font-bold">{term.term}</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-sm text-slate-500 font-semibold">Start Date</p>
                    <p className="text-lg font-bold text-slate-800">{term.start}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-semibold">End Date</p>
                    <p className="text-lg font-bold text-slate-800">{term.end}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-semibold">Duration</p>
                    <p className="text-lg font-bold text-slate-800">{term.weeks}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-semibold">Exam Period</p>
                    <p className="text-lg font-bold text-slate-800">{term.exams}</p>
                  </div>
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-sm text-slate-500 font-semibold">Holiday Break</p>
                    <p className="text-slate-700">{term.break}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal pour les éléments culturels */}
      {selectedCultureItem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedCultureItem(null)}>
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <div className="h-64 overflow-hidden">
              <img src={selectedCultureItem.image} alt={selectedCultureItem.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{selectedCultureItem.title}</h3>
              <p className="text-slate-600 mb-6">{selectedCultureItem.description}</p>
              <button 
                onClick={() => setSelectedCultureItem(null)}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutBotswana;