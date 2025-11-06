import { useState } from 'react';
import { Building, FileText, ExternalLink, Users, MapPin, Calendar, Download, Search, ChevronRight, Globe, Award, Shield, TrendingUp } from 'lucide-react';
import SectionHeader from '../news/SectionHeader';
import PageTitle from '@/components/UI/PageTitle';

// Données enrichies pour les ministères et agences
const ministriesAndAgenciesData = [
  { id: 1, name: 'Ministry of Defence and Security', type: 'ministry', description: 'Responsible for national security and defence strategies.', website: '#', employees: '15,000+', budget: 'P7.2 billion', established: '1966' },
  { id: 2, name: 'Ministry of Education and Skills Development', type: 'ministry', description: 'Oversees the education system from primary to tertiary level.', website: '#', employees: '45,000+', budget: 'P12.5 billion', established: '1966' },
  { id: 3, name: 'Ministry of Health and Wellness', type: 'ministry', description: 'Manages public healthcare systems and wellness programs.', website: '#', employees: '38,000+', budget: 'P9.8 billion', established: '1967' },
  { id: 4, name: 'Botswana Police Service', type: 'agency', description: 'The national police force maintaining law and order.', website: '#', employees: '12,000+', budget: 'P3.5 billion', established: '1885' },
  { id: 5, name: 'Department of Immigration and Citizenship', type: 'agency', description: 'Manages immigration and citizenship services.', website: '#', employees: '2,500+', budget: 'P800 million', established: '1966' },
  { id: 6, name: 'Botswana Unified Revenue Service', type: 'agency', description: 'Collects taxes and customs duties for the government.', website: '#', employees: '3,000+', budget: 'P1.2 billion', established: '2004' },
];

// Données enrichies pour les parastatales
const parastatalsData = [
  { id: 1, name: 'Botswana Power Corporation', description: 'Generates, transmits, and distributes electricity nationwide.', logo: 'https://via.placeholder.com/80x80.png?text=BPC', employees: '3,500+', revenue: 'P5.2 billion', founded: '1970' },
  { id: 2, name: 'Water Utilities Corporation', description: 'Provides water and sanitation services across Botswana.', logo: 'https://via.placeholder.com/80x80.png?text=WUC', employees: '2,200+', revenue: 'P2.8 billion', founded: '1970' },
  { id: 3, name: 'Botswana Telecommunications Corporation', description: 'National telecommunications provider.', logo: 'https://via.placeholder.com/80x80.png?text=BTC', employees: '1,800+', revenue: 'P3.5 billion', founded: '1980' },
  { id: 4, name: 'Air Botswana', description: 'National flag carrier airline.', logo: 'https://via.placeholder.com/80x80.png?text=AB', employees: '500+', revenue: 'P800 million', founded: '1972' },
  { id: 5, name: 'Botswana Development Corporation', description: 'Investment arm of the government.', logo: 'https://via.placeholder.com/80x80.png?text=BDC', employees: '300+', revenue: 'P1.5 billion', founded: '1970' },
  { id: 6, name: 'Botswana Tourism Organisation', description: 'Promotes tourism and markets Botswana as a destination.', logo: 'https://via.placeholder.com/80x80.png?text=BTO', employees: '200+', revenue: 'P400 million', founded: '1994' },
];

// Données enrichies pour les publications
const publicationsData = [
  { id: 1, title: 'National Development Plan 12', date: '2023-09-15', type: 'Strategic Plan', downloads: '15,420', size: '12.5 MB', cover: 'https://via.placeholder.com/120x160.png?text=NDP12' },
  { id: 2, title: 'Annual Budget Speech 2024', date: '2024-02-05', type: 'Budget', downloads: '22,150', size: '8.3 MB', cover: 'https://via.placeholder.com/120x160.png?text=Budget24' },
  { id: 3, title: 'Botswana Vision 2036', date: '2023-08-20', type: 'Vision', downloads: '18,750', size: '15.7 MB', cover: 'https://via.placeholder.com/120x160.png?text=Vision2036' },
  { id: 4, title: 'Economic Recovery and Transformation Plan', date: '2023-11-10', type: 'Economic Plan', downloads: '9,830', size: '10.2 MB', cover: 'https://via.placeholder.com/120x160.png?text=ERTP' },
  { id: 5, title: 'Digital Transformation Strategy', date: '2023-12-05', type: 'Digital Strategy', downloads: '7,620', size: '6.8 MB', cover: 'https://via.placeholder.com/120x160.png?text=DTS' },
];

// Données pour les autorités locales
const localAuthoritiesData = [
  { id: 1, name: 'Gaborone City Council', type: 'City Council', population: '421,567', area: '169 km²', mayor: 'His Worship Mayor Austin Abraham', established: '1966' },
  { id: 2, name: 'Francistown City Council', type: 'City Council', population: '147,808', area: '79 km²', mayor: 'His Worship Mayor Godisang Raditladi', established: '1997' },
  { id: 3, name: 'Kweneng District Council', type: 'District Council', population: '418,068', area: '35,890 km²', councilChairman: 'Hon. Motlatsi Molapisi', established: '1966' },
  { id: 4, name: 'Southern District Council', type: 'District Council', population: '231,364', area: '28,470 km²', councilChairman: 'Hon. Mogomotsi Kaboeamodimo', established: '1966' },
  { id: 5, name: 'North-West District Council', type: 'District Council', population: '274,562', area: '129,930 km²', councilChairman: 'Hon. Itumeleng Kelebetseng', established: '1966' },
  { id: 6, name: 'Central District Council', type: 'District Council', population: '623,384', area: '147,730 km²', councilChairman: 'Hon. Peter Williams', established: '1966' },
];

// Données pour les commissions foncières
const landBoardData = [
  { id: 1, name: 'Gaborone Land Board', jurisdiction: 'Gaborone and surrounding areas', applications: '3,420', approvals: '2,876', staff: '45' },
  { id: 2, name: 'Francistown Land Board', jurisdiction: 'Francistown and surrounding areas', applications: '2,150', approvals: '1,842', staff: '38' },
  { id: 3, name: 'Kweneng Land Board', jurisdiction: 'Kweneng District', applications: '5,830', approvals: '4,925', staff: '62' },
  { id: 4, name: 'Southern Land Board', jurisdiction: 'Southern District', applications: '3,620', approvals: '3,145', staff: '41' },
  { id: 5, name: 'North-West Land Board', jurisdiction: 'North-West District', applications: '2,760', approvals: '2,320', staff: '35' },
  { id: 6, name: 'Central Land Board', jurisdiction: 'Central District', applications: '6,420', approvals: '5,876', staff: '68' },
];

const AboutGovernment = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPublication, setSelectedPublication] = useState(null);

  const filteredMinistries = ministriesAndAgenciesData.filter(item => 
    (filter === 'all' || item.type === filter) && 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <PageTitle title="About Government" backgroundImage="/assets/images/banner/banner-1.jpg" breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Government', href: '/about/about-government' },
      ]} />

      {/* Ministries and Agencies Section avec design amélioré */}
      <section id='ministries-and-agencies' className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <SectionHeader subtitle="The Executive Branch" title="Ministries and Agencies" />
          
          {/* Barre de recherche et filtres améliorés */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
            <div className="relative w-full md:w-1/2">
              <input
                type="text"
                placeholder="Search ministries and agencies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 pl-12 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            </div>
            
            <div className="inline-flex rounded-lg border border-slate-200 bg-white p-1 shadow-sm">
              {['all', 'ministry', 'agency'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-6 py-2 rounded-md font-semibold capitalize transition-all ${filter === f ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
                >
                  {f === 'all' ? 'All' : f + 's'}
                </button>
              ))}
            </div>
          </div>

          {/* Cartes améliorées avec plus d'informations et animations */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMinistries.map((item) => (
              <div key={item.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
                  <h3 className="text-xl font-bold text-white">{item.name}</h3>
                  <span className="inline-block mt-2 px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full uppercase">
                    {item.type}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 mb-4">{item.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-slate-50 rounded-lg">
                      <p className="text-xs text-slate-500">Employees</p>
                      <p className="text-lg font-bold text-slate-800">{item.employees}</p>
                    </div>
                    <div className="text-center p-3 bg-slate-50 rounded-lg">
                      <p className="text-xs text-slate-500">Budget</p>
                      <p className="text-lg font-bold text-slate-800">{item.budget}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-500">Est. {item.established}</span>
                    <a href={item.website} className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800">
                      Visit Website <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parastatals Section avec design amélioré */}
      <section id='parastatals' className="py-20 bg-slate-100">
        <div className="container mx-auto max-w-7xl px-4">
          <SectionHeader subtitle="State-Owned Enterprises" title="Parastatals" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {parastatalsData.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-20 h-20 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-50 transition-colors">
                      <img src={item.logo} alt={item.name} className="w-16 h-16 object-contain" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">{item.name}</h3>
                      <p className="text-slate-600 mb-4">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-slate-50 rounded-lg">
                      <p className="text-xs text-slate-500">Employees</p>
                      <p className="text-lg font-bold text-slate-800">{item.employees}</p>
                    </div>
                    <div className="text-center p-3 bg-slate-50 rounded-lg">
                      <p className="text-xs text-slate-500">Revenue</p>
                      <p className="text-lg font-bold text-slate-800">{item.revenue}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-500">Founded {item.founded}</span>
                    <a href="#" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800">
                      Learn More <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section avec design amélioré et modal */}
      <section id='publications' className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <SectionHeader subtitle="Official Documents" title="Publications" />
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {publicationsData.map((item) => (
                <div key={item.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer" onClick={() => setSelectedPublication(item)}>
                  <div className="h-64 bg-slate-100 flex items-center justify-center">
                    <img src={item.cover} alt={item.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-bold rounded-full uppercase">
                        {item.type}
                      </span>
                      <span className="text-sm text-slate-500">{item.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center text-sm text-slate-500">
                        <Download className="w-4 h-4 mr-1" />
                        {item.downloads} downloads
                      </div>
                      <span className="text-sm text-slate-500">{item.size}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local Authorities Section avec design amélioré */}
      <section id='local-authorities' className="py-20 bg-slate-100">
        <div className="container mx-auto max-w-7xl px-4">
          <SectionHeader subtitle="Sub-National Governance" title="Local Authorities" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {localAuthoritiesData.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-r from-green-600 to-green-700 p-4">
                  <h3 className="text-xl font-bold text-white">{item.name}</h3>
                  <span className="inline-block mt-2 px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full">
                    {item.type}
                  </span>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-slate-50 rounded-lg">
                      <p className="text-xs text-slate-500">Population</p>
                      <p className="text-lg font-bold text-slate-800">{item.population}</p>
                    </div>
                    <div className="text-center p-3 bg-slate-50 rounded-lg">
                      <p className="text-xs text-slate-500">Area</p>
                      <p className="text-lg font-bold text-slate-800">{item.area}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-slate-500 mb-1">Leadership</p>
                    <p className="text-slate-800 font-medium">
                      {item.type === 'City Council' ? item.mayor : item.councilChairman}
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-500">Est. {item.established}</span>
                    <a href="#" className="inline-flex items-center text-green-600 font-semibold hover:text-green-800">
                      Visit Website <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Land Board Section avec design amélioré */}
      <section id='land-board' className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <SectionHeader subtitle="Land Management" title="Land Boards" />
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 mb-12">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Land Management in Botswana</h3>
                  <p className="text-slate-600 max-w-2xl">
                    The Land Boards are statutory bodies that manage all tribal land in Botswana, overseeing allocations, leases, and ensuring equitable access to land for citizens and investors.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-16 h-16 text-orange-600 mb-4" />
                  <div className="text-center">
                    <p className="text-3xl font-bold text-slate-800">12</p>
                    <p className="text-sm text-slate-600">Land Boards Nationwide</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {landBoardData.map((item) => (
                <div key={item.id} className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-800">{item.name}</h3>
                    <span className="px-3 py-1 bg-orange-100 text-orange-600 text-xs font-bold rounded-full">
                      {item.staff} Staff
                    </span>
                  </div>
                  
                  <p className="text-slate-600 mb-6">{item.jurisdiction}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-slate-50 rounded-lg">
                      <p className="text-xs text-slate-500">Applications</p>
                      <p className="text-lg font-bold text-slate-800">{item.applications}</p>
                    </div>
                    <div className="text-center p-3 bg-slate-50 rounded-lg">
                      <p className="text-xs text-slate-500">Approvals</p>
                      <p className="text-lg font-bold text-slate-800">{item.approvals}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">Approval Rate</span>
                      <span className="text-sm font-bold text-green-600">
                        {Math.round((item.approvals / item.applications) * 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full" 
                        style={{ width: `${Math.round((item.approvals / item.applications) * 100)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal pour les publications */}
      {selectedPublication && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedPublication(null)}>
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-2">{selectedPublication.title}</h2>
                  <div className="flex items-center space-x-4 text-sm text-slate-500">
                    <span>{selectedPublication.type}</span>
                    <span>•</span>
                    <span>{selectedPublication.date}</span>
                    <span>•</span>
                    <span>{selectedPublication.size}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedPublication(null)}
                  className="text-slate-400 hover:text-slate-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="h-64 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
                <img src={selectedPublication.cover} alt={selectedPublication.title} className="h-full w-full object-contain" />
              </div>
              
              <p className="text-slate-600 mb-6">
                This document contains important information regarding {selectedPublication.title.toLowerCase()}. 
                It has been downloaded {selectedPublication.downloads} times since its publication on {selectedPublication.date}.
              </p>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center text-sm text-slate-500">
                  <Download className="w-4 h-4 mr-1" />
                  {selectedPublication.downloads} downloads
                </div>
                <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutGovernment;