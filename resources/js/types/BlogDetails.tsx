// src/pages/BlogDetail.tsx
import React, { useState } from 'react';
import { Link, useForm } from '@inertiajs/react';
import { 
  Search, Calendar, User, MessageSquare, Share2, Tag, 
  Phone, Mail, Send, ChevronRight, Clock, MapPin, 
  Quote, Facebook, Twitter, Linkedin, ChevronDown, FileText, X, Home, ChevronLeft
} from 'lucide-react';

interface Comment {
  id: number;
  author: string;
  date: string;
  content: string;
  avatar: string;
}

interface RecentPost {
  id: number;
  title: string;
  date: string;
  image: string;
}

interface ContentItem {
  id: string;
  title: string;
  content: string;
}

interface Section {
  id: string;
  title: string;
  content: ContentItem[];
}

const BlogDetail = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [commentText, setCommentText] = useState('');
  const [selectedSection, setSelectedSection] = useState<string>('agriculture'); // Première section active par défaut
  const [selectedContent, setSelectedContent] = useState<string | null>(null);
  
  // Données d'exemple pour les sections
  const sections: Section[] = [
    {
      id: 'agriculture',
      title: 'Agriculture',
      content: [
        {
          id: 'crop-management',
          title: 'Crop Management',
          content: 'Effective crop management is essential for maximizing yield and ensuring food security. Our comprehensive guidelines cover everything from soil preparation to harvesting techniques. These practices are designed to improve productivity while maintaining environmental sustainability. Farmers can learn about modern irrigation methods, pest control strategies, and crop rotation systems that enhance soil fertility and reduce dependency on chemical inputs.'
        },
        {
          id: 'livestock-care',
          title: 'Livestock Care',
          content: 'Proper livestock care is fundamental to productive animal husbandry. Our guidelines cover nutrition, housing, disease prevention, and humane treatment practices. These standards ensure that animals are raised in conditions that promote their well-being while maximizing productivity. Following these practices not only improves animal health but also enhances quality of animal products for consumers.'
        },
        {
          id: 'sustainable-farming',
          title: 'Sustainable Farming',
          content: 'Sustainable farming practices balance economic viability with environmental stewardship. Our approach includes organic farming techniques, water conservation methods, and biodiversity preservation. These methods help farmers reduce their environmental impact while maintaining profitability. Long-term sustainability is achieved through soil health improvement, reduced chemical usage, and ecosystem preservation.'
        }
      ]
    },
    {
      id: 'animal-husbandry',
      title: 'Animal Husbandry',
      content: [
        {
          id: 'breeding-programs',
          title: 'Breeding Programs',
          content: 'Responsible breeding programs are essential for maintaining genetic diversity and improving livestock quality. Our guidelines address selection criteria, breeding techniques, and record-keeping requirements. These programs aim to enhance desirable traits while preventing the spread of genetic disorders, ensuring the long-term health and productivity of animal populations.'
        },
        {
          id: 'animal-nutrition',
          title: 'Animal Nutrition',
          content: 'Proper nutrition is critical for animal health and productivity. Our comprehensive guidelines cover feed formulation, nutritional requirements at different life stages, and supplementation strategies. These recommendations are based on scientific research and practical experience, helping farmers optimize feed efficiency while maintaining animal health and reducing costs.'
        },
        {
          id: 'disease-prevention',
          title: 'Disease Prevention',
          content: 'Preventive healthcare is more effective and economical than treating diseases after they occur. Our guidelines cover vaccination schedules, biosecurity measures, and early detection methods. These practices help minimize disease outbreaks, reduce mortality rates, and decrease the need for antibiotic treatments, resulting in healthier animals and safer products.'
        }
      ]
    },
    {
      id: 'immigration',
      title: 'Immigration',
      content: [
        {
          id: 'visa-applications',
          title: 'Visa Applications',
          content: 'Navigating visa applications can be complex, but our comprehensive guidelines simplify the process. We provide detailed instructions for different visa categories, required documentation, and common pitfalls to avoid. These resources are regularly updated to reflect current policies, ensuring applicants have the most accurate information to successfully complete their applications.'
        },
        {
          id: 'citizenship',
          title: 'Citizenship',
          content: 'The path to citizenship involves several important steps and requirements. Our guidelines outline eligibility criteria, application processes, language requirements, and civic knowledge needed. We also provide resources to help applicants prepare for citizenship tests and interviews, making the journey to naturalization as smooth as possible.'
        },
        {
          id: 'work-permits',
          title: 'Work Permits',
          content: 'Work permits enable foreign nationals to work legally in a host country. Our guidelines cover different types of work permits, eligibility requirements, application procedures, and renewal processes. We also provide information on rights and responsibilities of work permit holders, helping them navigate employment opportunities while complying with local regulations.'
        }
      ]
    },
    {
      id: 'education',
      title: 'Education',
      content: [
        {
          id: 'student-visas',
          title: 'Student Visas',
          content: 'Student visas provide opportunities for international education, and our guidelines cover various options available. We detail application requirements, work permissions, and post-graduation opportunities. These resources help students make informed decisions about their educational journey and understand their rights and responsibilities while studying abroad.'
        },
        {
          id: 'scholarships',
          title: 'Scholarships',
          content: 'Scholarships can make education more accessible, and our comprehensive database lists opportunities across various fields and levels of study. We provide guidance on application strategies, essay writing, and meeting deadlines. These resources aim to help students secure funding to pursue their educational goals without financial burden.'
        },
        {
          id: 'educational-institutions',
          title: 'Educational Institutions',
          content: 'Choosing the right educational institution is crucial for academic success. Our guidelines provide information on different types of institutions, accreditation standards, and program offerings. We also offer advice on application processes, admission requirements, and factors to consider when selecting an institution that best fits your educational goals and career aspirations.'
        }
      ]
    }
  ];
  
  // Données d'exemple pour les commentaires
  const comments: Comment[] = [
    {
      id: 1,
      author: "James Thomas",
      date: "May 23, 2020 at 12:00 AM",
      content: "Imperdiet in nulla sed viverraut loremut dapib estetur Lorem ipsum dolor sit amet eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eniy minim sed exe ullamco laboris nisi ut aliquip cepteur sint occaecaty.",
      avatar: "assets/images/news/comment-1.jpg"
    },
    {
      id: 2,
      author: "Jhon Camaron",
      date: "May 22, 2020 at 12:00 AM",
      content: "Imperdiet in nulla sed viverraut loremut dapib estetur Lorem ipsum dolor sit amet eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eniy minim sed exe ullamco laboris nisi ut aliquip cepteur sint occaecaty.",
      avatar: "assets/images/news/comment-2.jpg"
    }
  ];

  // Données d'exemple pour les articles récents
  const recentPosts: RecentPost[] = [
    {
      id: 1,
      title: "Covid-19 And Its Impact On USA Immigration",
      date: "April 13, 2020",
      image: "assets/images/news/post-1.jpg"
    },
    {
      id: 2,
      title: "Country To Offer Point-Based Immigrations",
      date: "April 12, 2020",
      image: "assets/images/news/post-2.jpg"
    },
    {
      id: 3,
      title: "Your Visa Approval With Easy Steps",
      date: "April 11, 2020",
      image: "assets/images/news/post-3.jpg"
    }
  ];

  // Obtenir le contenu de la section sélectionnée
  const getSelectedSectionContent = () => {
    if (!selectedSection) return [];
    const section = sections.find(s => s.id === selectedSection);
    return section ? section.content : [];
  };

  // Obtenir le contenu détaillé de l'élément sélectionné
  const getSelectedContentDetail = () => {
    if (!selectedContent) return null;
    const contentItems = getSelectedSectionContent();
    const content = contentItems.find(c => c.id === selectedContent);
    return content ? content.content : null;
  };

  // Générer les breadcrumbs
  const getBreadcrumbs = () => {
    const breadcrumbs = [];
    breadcrumbs.push({ label: 'Home', href: '/' });
    
    if (selectedSection) {
      const section = sections.find(s => s.id === selectedSection);
      breadcrumbs.push({ label: section?.title || '', href: '#' });
      
      if (selectedContent) {
        const content = getSelectedSectionContent().find(c => c.id === selectedContent);
        breadcrumbs.push({ label: content?.title || '', href: '#' });
      }
    }
    
    return breadcrumbs;
  };

  // Obtenir le titre pour la section des commentaires
  const getCommentsTitle = () => {
    if (selectedContent) {
      const content = getSelectedSectionContent().find(c => c.id === selectedContent);
      return `Comments on ${content?.title}`;
    } else if (selectedSection) {
      const section = sections.find(s => s.id === selectedSection);
      return `Comments on ${section?.title}`;
    } else {
      return 'Blog Comments';
    }
  };

  // Formulaire de commentaire
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    website: '',
    message: ''
  });

  const submitComment = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('comments.store'), {
      onSuccess: () => reset(),
    });
  };

  // Formulaire d'évaluation
  const { data: assessmentData, setData: setAssessmentData, post: submitAssessment, processing: assessmentProcessing } = useForm({
    name: '',
    email: '',
    phone: '',
    visaType: '',
    message: ''
  });

  const submitAssessmentForm = (e: React.FormEvent) => {
    e.preventDefault();
    submitAssessment(route('assessment.store'));
  };

  return (
    <div className="blog-details-page bg-slate-50 py-20 lg:py-32">
      <div className="auto-container max-w-7xl mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm text-gray-600 mb-6">
          {getBreadcrumbs().map((crumb, index) => (
            <React.Fragment key={index}>
              {index > 0 && <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />}
              {index === getBreadcrumbs().length - 1 ? (
                <span className="text-gray-800 font-medium">{crumb.label}</span>
              ) : (
                <Link href={crumb.href} className="text-[#0099cc] hover:underline">
                  {index === 0 && <Home className="w-4 h-4 mr-1 inline" />}
                  {crumb.label}
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="flex flex-wrap -mx-4">
          {/* Contenu principal */}
          <div className="w-full lg:w-2/3 px-4">
            <div className="blog-details-content">
              {/* Afficher le contenu détaillé si un élément est sélectionné */}
              {selectedContent ? (
                <div className="content-detail mb-16">
                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-3xl font-bold text-gray-800">
                        {getSelectedSectionContent().find(c => c.id === selectedContent)?.title}
                      </h2>
                      <button 
                        onClick={() => setSelectedContent(null)}
                        className="text-gray-500 hover:text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="prose max-w-none text-gray-700">
                      {getSelectedContentDetail()}
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {/* Afficher les cartes de contenu si une section est sélectionnée */}
                  {selectedSection ? (
                    <div className="content-cards mb-16">
                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">
                          {sections.find(s => s.id === selectedSection)?.title} Content
                        </h2>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {getSelectedSectionContent().map(item => (
                          <div 
                            key={item.id}
                            onClick={() => setSelectedContent(item.id)}
                            className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-all hover:scale-105 border border-gray-200"
                          >
                            <div className="flex items-center mb-4">
                              <div className="w-12 h-12 bg-[#0099cc] rounded-lg flex items-center justify-center mr-4">
                                <FileText className="w-6 h-6 text-white" />
                              </div>
                              <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                            </div>
                            <p className="text-gray-600 line-clamp-3">
                              {item.content.substring(0, 150)}...
                            </p>
                            <div className="mt-4 text-right">
                              <span className="text-[#0099cc] font-medium inline-flex items-center">
                                Read More
                                <ChevronRight className="w-4 h-4 ml-1" />
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    /* Afficher l'article principal si aucune section n'est sélectionnée */
                    <>
                      <div className="news-block-one mb-16">
                        <div className="inner-box bg-white rounded-lg shadow-lg overflow-hidden relative">
                          <figure className="image-box h-80 overflow-hidden">
                            <img 
                              src="assets/images/news/news-14.jpg" 
                              alt="Country To Offer Point-Based Immigrations" 
                              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                          </figure>
                          <div className="lower-content p-6 md:p-12">
                            <div className="post-date absolute left-12 -top-8 w-40 h-12 bg-[#0099cc] rounded flex items-center justify-center">
                              <h5 className="text-white text-sm font-bold uppercase">APR 18, 2020</h5>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                              Country To Offer Point-Based Immigrations
                            </h2>
                            <ul className="post-info flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
                              <li className="flex items-center">
                                <User className="w-4 h-4 mr-1" />
                                By Admin
                              </li>
                              <li className="flex items-center">
                                <Tag className="w-4 h-4 mr-1" />
                                Study Visa, Work
                              </li>
                              <li className="flex items-center">
                                <MessageSquare className="w-4 h-4 mr-1" />
                                5 Comments
                              </li>
                            </ul>
                            <div className="text text-gray-700 space-y-6">
                              <p>
                                Nunc quam arcu, pretium quis quam sed, laoreet efficitur leo. Aliquam era volutpat lobortis sem consequat imperdiet. In nulla sed viverraut loremut dapib estetur Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                              </p>
                              <p>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
                              </p>
                              <blockquote className="relative bg-gray-100 p-8 md:p-12 my-10 rounded-lg">
                                <Quote className="absolute right-8 bottom-6 text-5xl text-[#0099cc] opacity-20" />
                                <p className="text-lg mb-4 italic">
                                  Sponsoring and managing work visas parts now becoming results experience aute irure dolor in reprehenderit cepteur sint ocae cat cupidatat non proident sunt in culpa quis.
                                </p>
                                <h5 className="font-bold text-gray-800">James Thomas</h5>
                              </blockquote>
                              <p>
                                Imperdiet. In nulla sed viverraut loremut dapib estetur Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip qui officia deserunt mollit anim id est laborum.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Section en deux colonnes */}
                      <div className="two-column mb-16">
                        <div className="flex flex-wrap items-center -mx-4">
                          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                            <div className="text">
                              <h3 className="text-2xl font-bold mb-4 text-gray-800">Rules: How To Apply For Visa</h3>
                              <p className="mb-6 text-gray-700">
                                Nunc quam arcu, pretium quis quam sed, laore us consequat imperdiet. In nulla sed viverraut loremut ipsum dolor sit amet, consectetur.
                              </p>
                              <ul className="list space-y-3 text-gray-700">
                                <li className="flex items-start">
                                  <ChevronRight className="w-4 h-4 mr-2 mt-1 text-[#0099cc] flex-shrink-0" />
                                  Nunc quam arcu, pretium quis quam
                                </li>
                                <li className="flex items-start">
                                  <ChevronRight className="w-4 h-4 mr-2 mt-1 text-[#0099cc] flex-shrink-0" />
                                  Laoreet efficitur leo liquam era
                                </li>
                                <li className="flex items-start">
                                  <ChevronRight className="w-4 h-4 mr-2 mt-1 text-[#0099cc] flex-shrink-0" />
                                  Consequat imperdiet nula sed viverraut
                                </li>
                                <li className="flex items-start">
                                  <ChevronRight className="w-4 h-4 mr-2 mt-1 text-[#0099cc] flex-shrink-0" />
                                  Ipsum dolor sit amet conse adipisicing
                                </li>
                                <li className="flex items-start">
                                  <ChevronRight className="w-4 h-4 mr-2 mt-1 text-[#0099cc] flex-shrink-0" />
                                  Sed do eiusmod tempor incididunt
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="w-full md:w-1/2 px-4">
                            <figure className="image-box rounded-lg overflow-hidden">
                              <img 
                                src="assets/images/news/news-15.jpg" 
                                alt="Visa Application" 
                                className="w-full transition-transform duration-700 hover:scale-105"
                              />
                            </figure>
                          </div>
                        </div>
                        <div className="lower-box mt-12">
                          <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Capabilities For Visa & Immigration</h3>
                          <p className="mb-6 text-gray-700">
                            Nunc quam arcu, pretium quis quam sed, laoreet efficitur leo. Aliquam era volutpat lobortis sem consequat imperdiet. In nulla sed viverraut loremut dapib estetur Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          </p>
                          <p className="text-gray-700">
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
                          </p>
                        </div>
                      </div>

                      {/* Options de partage */}
                      <div className="post-share-option flex flex-wrap justify-between items-center bg-gray-100 p-6 rounded-lg mb-16">
                        <ul className="tags flex items-center gap-2">
                          <li className="font-bold text-gray-800">TAGS:</li>
                          <li>
                            <Link href="#" className="text-[#0099cc] hover:underline">Family Visa</Link>
                          </li>
                          <span>,</span>
                          <li>
                            <Link href="#" className="text-[#0099cc] hover:underline">Immigration</Link>
                          </li>
                          <span>,</span>
                          <li>
                            <Link href="#" className="text-[#0099cc] hover:underline">Sponsor</Link>
                          </li>
                        </ul>
                        <ul className="social-links flex items-center gap-2">
                          <li className="font-bold text-gray-800">SHARE</li>
                          <li>
                            <a href="#" className="text-[#0099cc] hover:text-[#007aa3] transition-colors">
                              <Twitter className="w-5 h-5" />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-[#0099cc] hover:text-[#007aa3] transition-colors">
                              <Facebook className="w-5 h-5" />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-[#0099cc] hover:text-[#007aa3] transition-colors">
                              <Linkedin className="w-5 h-5" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </>
                  )}

                  {/* Section des commentaires - toujours visible avec titre dynamique */}
                  <div className="comments-area mb-16">
                    <div className="group-title mb-10">
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">{getCommentsTitle()}</h2>
                      <div className="dotted-box flex items-center gap-2">
                        <span className="dotted w-8 h-0.5 bg-gray-300"></span>
                        <span className="dotted w-8 h-0.5 bg-gray-300"></span>
                        <span className="dotted w-8 h-0.5 bg-gray-300"></span>
                      </div>
                    </div>
                    <div className="comment-box space-y-6">
                      {comments.map(comment => (
                        <div key={comment.id} className="comment flex gap-6">
                          <figure className="thumb-box w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                            <img src={comment.avatar} alt={comment.author} className="w-full h-full object-cover" />
                          </figure>
                          <div className="comment-inner flex-1 border border-gray-200 p-6 rounded-lg">
                            <div className="comment-info mb-3">
                              <h5 className="text-lg font-bold text-gray-800">{comment.author}</h5>
                              <span className="comment-time text-sm text-gray-500 italic">{comment.date}</span>
                            </div>
                            <p className="mb-4 text-gray-700">{comment.content}</p>
                            <a href="#" className="inline-flex items-center text-sm font-bold text-[#0099cc] hover:text-[#007aa3] transition-colors">
                              reply
                              <Send className="w-3 h-3 ml-2" />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Formulaire de commentaire */}
                  <div className="comments-form-area">
                    <div className="group-title mb-10">
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">Leave a Reply</h2>
                      <p className="text-gray-600 mb-4">Note: We'll not publish your email anyway, you're safe!</p>
                      <div className="dotted-box flex items-center gap-2">
                        <span className="dotted w-8 h-0.5 bg-gray-300"></span>
                        <span className="dotted w-8 h-0.5 bg-gray-300"></span>
                        <span className="dotted w-8 h-0.5 bg-gray-300"></span>
                      </div>
                    </div>
                    <form onSubmit={submitComment} className="comment-form space-y-4">
                      <div className="form-group">
                        <textarea 
                          name="message" 
                          placeholder="Your Comment" 
                          value={data.message}
                          onChange={e => setData('message', e.target.value)}
                          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0099cc] focus:border-transparent resize-none h-40"
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                      </div>
                      <div className="form-group">
                        <input 
                          type="text" 
                          name="name" 
                          placeholder="Your Name" 
                          value={data.name}
                          onChange={e => setData('name', e.target.value)}
                          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0099cc] focus:border-transparent"
                          required 
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                      </div>
                      <div className="form-group">
                        <input 
                          type="email" 
                          name="email" 
                          placeholder="Email address" 
                          value={data.email}
                          onChange={e => setData('email', e.target.value)}
                          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0099cc] focus:border-transparent"
                          required 
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>
                      <div className="form-group">
                        <input 
                          type="text" 
                          name="website" 
                          placeholder="Website" 
                          value={data.website}
                          onChange={e => setData('website', e.target.value)}
                          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0099cc] focus:border-transparent"
                        />
                      </div>
                      <div className="form-group message-btn">
                        <button 
                          type="submit" 
                          disabled={processing}
                          className="theme-btn-two bg-[#0099cc] text-white px-6 py-3 rounded-lg hover:bg-[#007aa3] transition-colors inline-flex items-center"
                        >
                          <Send className="w-4 h-4 mr-2" />
                          Post Comment
                        </button>
                      </div>
                    </form>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3 px-4">
            <div className="sidebar blog-sidebar space-y-8">
              {/* Widget de recherche */}
              <div className="sidebar-widget sidebar-search">
                <form action="#" method="post" className="search-form relative">
                  <div className="form-group relative">
                    <input 
                      type="search" 
                      name="search-field" 
                      placeholder="Search Blog" 
                      required 
                      className="w-full h-14 bg-[#0c2136] text-white px-6 pr-16 rounded-lg focus:outline-none placeholder-gray-300"
                    />
                    <button 
                      type="submit" 
                      className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white hover:text-[#0099cc] transition-colors"
                    >
                      <Search className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              </div>

              {/* Widget de sections */}
              <div className="sidebar-widget sidebar-categories-2 bg-white border border-gray-200 rounded-lg p-6">
                <div className="widget-title mb-6">
                  <h3 className="text-xl font-bold text-gray-800">Sections</h3>
                  <div className="dotted-box flex items-center gap-2 mt-2">
                    <span className="dotted w-8 h-0.5 bg-gray-300"></span>
                    <span className="dotted w-8 h-0.5 bg-gray-300"></span>
                    <span className="dotted w-8 h-0.5 bg-gray-300"></span>
                  </div>
                </div>
                <div className="widget-content">
                  <ul className="categories-list space-y-3">
                    {sections.map(section => (
                      <li key={section.id}>
                        <button 
                          onClick={() => {
                            setSelectedSection(section.id);
                            setSelectedContent(null);
                          }}
                          className={`w-full text-left p-3 rounded-md transition-colors flex items-center justify-between ${
                            selectedSection === section.id 
                              ? 'bg-[#0099cc] text-white' 
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {section.title}
                          {selectedSection === section.id && <ChevronRight className="w-4 h-4" />}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Widget du contenu de la section sélectionnée */}
              {selectedSection && (
                <div className="sidebar-widget sidebar-section-content bg-white border border-gray-200 rounded-lg p-6">
                  <div className="widget-title mb-6 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-800">
                      {sections.find(s => s.id === selectedSection)?.title}
                    </h3>
                    <button 
                      onClick={() => {
                        setSelectedSection(null);
                        setSelectedContent(null);
                      }}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="dotted-box flex items-center gap-2 mb-6">
                    <span className="dotted w-8 h-0.5 bg-gray-300"></span>
                    <span className="dotted w-8 h-0.5 bg-gray-300"></span>
                    <span className="dotted w-8 h-0.5 bg-gray-300"></span>
                  </div>
                  <div className="widget-content">
                    <div className="space-y-4">
                      {getSelectedSectionContent().map(item => (
                        <div 
                          key={item.id}
                          onClick={() => setSelectedContent(item.id)}
                          className={`p-4 rounded-lg border cursor-pointer transition-all ${
                            selectedContent === item.id 
                              ? 'border-[#0099cc] bg-blue-50' 
                              : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                          <p className="text-sm text-gray-600 line-clamp-3">
                            {item.content.substring(0, 100)}...
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Widget des articles récents */}
              <div className="sidebar-widget sidebar-post bg-white border border-gray-200 rounded-lg p-6">
                <div className="widget-title mb-6">
                  <h3 className="text-xl font-bold text-gray-800">Recent Posts</h3>
                  <div className="dotted-box flex items-center gap-2 mt-2">
                    <span className="dotted w-8 h-0.5 bg-gray-300"></span>
                    <span className="dotted w-8 h-0.5 bg-gray-300"></span>
                    <span className="dotted w-8 h-0.5 bg-gray-300"></span>
                  </div>
                </div>
                <div className="post-inner space-y-6">
                  {recentPosts.map(post => (
                    <div key={post.id} className="post flex gap-4">
                      <figure className="post-thumb w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <Link href="#">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          />
                        </Link>
                      </figure>
                      <div className="flex-1">
                        <h5 className="text-base font-bold mb-2">
                          <Link href="#" className="text-gray-800 hover:text-[#0099cc] transition-colors">{post.title}</Link>
                        </h5>
                        <span className="post-date text-sm text-[#0099cc]">{post.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Widget de support */}
              <div className="sidebar-widget sidebar-support bg-[#2d5883] rounded-lg overflow-hidden">
                <div className="widget-content">
                  <figure className="image-box">
                    <img src="assets/images/news/support-1.jpg" alt="Support" className="w-full" />
                  </figure>
                  <ul className="content-box p-6 space-y-6">
                    <li className="flex items-start gap-4 pb-6 border-b border-white/20">
                      <Phone className="w-8 h-8 text-white flex-shrink-0" />
                      <div>
                        <p className="text-white/70 text-sm">Any Questions? Call us</p>
                        <h3 className="text-xl font-bold">
                          <a href="tel:12463330079" className="text-white hover:underline">+1 (246) 333 0079</a>
                        </h3>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <Mail className="w-8 h-8 text-white flex-shrink-0" />
                      <div>
                        <p className="text-white/70 text-sm">Any Questions? Email us</p>
                        <h3 className="text-xl font-bold">
                          <a href="mailto:info@example.com" className="text-white hover:underline">info@example.com</a>
                        </h3>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Widget d'évaluation gratuite */}
              <div className="sidebar-widget sidebar-assessment bg-white border border-gray-200 rounded-lg p-6">
                <div className="widget-title mb-6">
                  <h3 className="text-xl font-bold text-gray-800">Free Online Assessment</h3>
                  <div className="dotted-box flex items-center gap-2 mt-2">
                    <span className="dotted w-8 h-0.5 bg-gray-300"></span>
                    <span className="dotted w-8 h-0.5 bg-gray-300"></span>
                    <span className="dotted w-8 h-0.5 bg-gray-300"></span>
                  </div>
                </div>
                <div className="widget-content">
                  <form onSubmit={submitAssessmentForm} className="assessment-form space-y-4">
                    <div className="form-group">
                      <input 
                        type="text" 
                        name="name" 
                        placeholder="Full Name" 
                        value={assessmentData.name}
                        onChange={e => setAssessmentData('name', e.target.value)}
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0099cc] focus:border-transparent"
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <input 
                        type="email" 
                        name="email" 
                        placeholder="Email address" 
                        value={assessmentData.email}
                        onChange={e => setAssessmentData('email', e.target.value)}
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0099cc] focus:border-transparent"
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <input 
                        type="text" 
                        name="phone" 
                        placeholder="Phone" 
                        value={assessmentData.phone}
                        onChange={e => setAssessmentData('phone', e.target.value)}
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0099cc] focus:border-transparent"
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <div className="select-box relative">
                        <select 
                          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0099cc] focus:border-transparent appearance-none bg-white text-gray-900"
                          value={assessmentData.visaType}
                          onChange={e => setAssessmentData('visaType', e.target.value)}
                        >
                          <option value="" className="text-gray-900">Select Visa Type</option>
                          <option value="1" className="text-gray-900">Working Visas</option>
                          <option value="2" className="text-gray-900">Study Visas</option>
                          <option value="3" className="text-gray-900">Business Visas</option>
                          <option value="4" className="text-gray-900">Tourist Visas</option>
                        </select>
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                          <ChevronDown className="w-4 h-4 text-gray-500" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <textarea 
                        name="message" 
                        placeholder="Message" 
                        value={assessmentData.message}
                        onChange={e => setAssessmentData('message', e.target.value)}
                        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0099cc] focus:border-transparent resize-none h-32"
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <button 
                        type="submit" 
                        disabled={assessmentProcessing}
                        className="theme-btn-two w-full bg-[#0099cc] text-white px-6 py-3 rounded-lg hover:bg-[#007aa3] transition-colors inline-flex items-center justify-center"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;