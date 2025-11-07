// src/components/Sidebar.tsx
import React from 'react';
import { Search, X, ChevronRight, FileText, Phone, Mail, Send, ChevronDown } from 'lucide-react';
import { useForm } from '@inertiajs/react';
import { Section, ContentItem, RecentPost } from '@/types';
import SearchWidget from './SearchWidget';
import SectionsWidget from './SectionsWidget';
import SectionContentWidget from './SectionContentWidget';

interface SidebarProps {
  sections: Section[];
  selectedSection: string;
  selectedContent: string | null;
  onSelectSection: (sectionId: string) => void;
  onSelectContent: (contentId: string) => void;
  selectedSectionContent: ContentItem[];
  recentPosts: RecentPost[];
}

const Sidebar: React.FC<SidebarProps> = ({ 
  sections, 
  selectedSection, 
  selectedContent, 
  onSelectSection, 
  onSelectContent, 
  selectedSectionContent,
  recentPosts 
}) => {
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
    <div className="sidebar blog-sidebar space-y-8">
      {/* Widget de recherche */}
      <SearchWidget />

      {/* Widget de sections */}
      <SectionsWidget 
        sections={sections}
        selectedSection={selectedSection}
        onSelectSection={onSelectSection}
        onSelectContent={onSelectContent}
      />

      {/* Widget du contenu de la section sélectionnée */}
      {selectedSection && (
        <SectionContentWidget 
          section={sections.find(s => s.id === selectedSection)}
          content={selectedSectionContent}
          selectedContent={selectedContent}
          onSelectContent={onSelectContent}
          onClose={() => {
            onSelectSection('');
            onSelectContent(null);
          }}
        />
      )}

      {/* <RecentPostsWidget posts={recentPosts} />

      <SupportWidget />

      <AssessmentWidget 
        data={assessmentData}
        setData={setAssessmentData}
        onSubmit={submitAssessmentForm}
        processing={assessmentProcessing}
      /> */}
    </div>
  );
};

export default Sidebar;