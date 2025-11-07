// src/layouts/SectionNavigationLayout.tsx
import React, { useState } from 'react';
import { Comment, Section, BreadcrumbItem } from '@/types';
import Breadcrumbs from './Breadcrumbs';
import ContentDetailView from './ContentDetailView';
import ContentCardsView from './ContentCardsView';
import MainArticleView from './MainArticleView';
import CommentsSection from './CommentsSection';
import Sidebar from './Sidebar';

interface SectionNavigationLayoutProps {
  pageData: {
    title: string;
    image: string;
    date: string;
    author: string;
    category: string;
    commentCount: number;
    content: string[];
    sections: Section[];
  };
  comments: Comment[];
  recentPosts: RecentPost[];
}

const SectionNavigationLayout: React.FC<SectionNavigationLayoutProps> = ({ 
  pageData, 
  comments, 
  recentPosts 
}) => {
  const [selectedSection, setSelectedSection] = useState<string>(pageData.sections[0]?.id || '');
  const [selectedContent, setSelectedContent] = useState<string | null>(null);
  
  // Obtenir le contenu de la section sélectionnée
  const getSelectedSectionContent = () => {
    if (!selectedSection) return [];
    const section = pageData.sections.find(s => s.id === selectedSection);
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
  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const breadcrumbs: BreadcrumbItem[] = [{ label: 'Home', href: '/' }];
    
    if (selectedSection) {
      const section = pageData.sections.find(s => s.id === selectedSection);
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
      const section = pageData.sections.find(s => s.id === selectedSection);
      return `Comments on ${section?.title}`;
    } else {
      return 'Blog Comments';
    }
  };

  return (
    <div className="blog-details-page bg-slate-50 py-20 lg:py-32">
      <div className="auto-container max-w-7xl mx-auto px-4">
        {/* Breadcrumbs */}
        <Breadcrumbs breadcrumbs={getBreadcrumbs()} />

        <div className="flex flex-wrap -mx-4">
          {/* Contenu principal */}
          <div className="w-full lg:w-2/3 px-4">
            <div className="blog-details-content">
              {/* Afficher le contenu détaillé si un élément est sélectionné */}
              {selectedContent ? (
                <ContentDetailView 
                  title={getSelectedSectionContent().find(c => c.id === selectedContent)?.title || ''}
                  content={getSelectedContentDetail() || ''}
                  onClose={() => setSelectedContent(null)}
                />
              ) : (
                <>
                  {/* Afficher les cartes de contenu si une section est sélectionnée */}
                  {selectedSection ? (
                    <ContentCardsView 
                      section={pageData.sections.find(s => s.id === selectedSection)}
                      content={getSelectedSectionContent()}
                      onSelectContent={setSelectedContent}
                    />
                  ) : (
                    /* Afficher l'article principal si aucune section n'est sélectionnée */
                    <MainArticleView pageData={pageData} />
                  )}

                  {/* Section des commentaires - toujours visible */}
                  <CommentsSection 
                    title={getCommentsTitle()}
                    comments={comments}
                  />
                </>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3 px-4">
            <Sidebar 
              sections={pageData.sections}
              selectedSection={selectedSection}
              selectedContent={selectedContent}
              onSelectSection={(sectionId) => {
                setSelectedSection(sectionId);
                setSelectedContent(null);
              }}
              onSelectContent={setSelectedContent}
              selectedSectionContent={getSelectedSectionContent()}
              recentPosts={recentPosts}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionNavigationLayout;