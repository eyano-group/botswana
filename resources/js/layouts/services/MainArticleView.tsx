// src/components/MainArticleView.tsx
import React from 'react';
import { User, MessageSquare, Tag, Facebook, Twitter, Linkedin, ChevronRight } from 'lucide-react';
import { PageData } from '@/types';

interface MainArticleViewProps {
  pageData: PageData;
}

const MainArticleView: React.FC<MainArticleViewProps> = ({ pageData }) => {
  return (
    <>
      <div className="news-block-one mb-16">
        <div className="inner-box bg-white rounded-lg shadow-lg overflow-hidden relative">
          <figure className="image-box h-80 overflow-hidden">
            <img 
              src={pageData.image} 
              alt={pageData.title} 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </figure>
          <div className="lower-content p-6 md:p-12">
            <div className="post-date absolute left-12 -top-8 w-40 h-12 bg-[#0099cc] rounded flex items-center justify-center">
              <h5 className="text-white text-sm font-bold uppercase">{pageData.date}</h5>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
              {pageData.title}
            </h2>
            <ul className="post-info flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
              <li className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                By {pageData.author}
              </li>
              <li className="flex items-center">
                <Tag className="w-4 h-4 mr-1" />
                {pageData.category}
              </li>
              <li className="flex items-center">
                <MessageSquare className="w-4 h-4 mr-1" />
                {pageData.commentCount} Comments
              </li>
            </ul>
            <div className="text text-gray-700 space-y-6">
              {pageData.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
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
      </div>

      {/* Options de partage */}
      <div className="post-share-option flex flex-wrap justify-between items-center bg-gray-100 p-6 rounded-lg mb-16">
        <ul className="tags flex items-center gap-2">
          <li className="font-bold text-gray-800">TAGS:</li>
          <li>
            <a href="#" className="text-[#0099cc] hover:underline">Family Visa</a>
          </li>
          <span>,</span>
          <li>
            <a href="#" className="text-[#0099cc] hover:underline">Immigration</a>
          </li>
          <span>,</span>
          <li>
            <a href="#" className="text-[#0099cc] hover:underline">Sponsor</a>
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
  );
};

export default MainArticleView;