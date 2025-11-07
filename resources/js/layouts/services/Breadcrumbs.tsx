// src/components/Breadcrumbs.tsx
import React from 'react';
import { Link } from '@inertiajs/react';
import { ChevronRight, Home, ChevronLeft } from 'lucide-react';
import { BreadcrumbItem } from '@/types';

interface BreadcrumbsProps {
  breadcrumbs: BreadcrumbItem[];
  currentPage?: 'home' | 'section' | 'content';
  onBackToSection?: () => void;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ 
  breadcrumbs, 
  currentPage,
  onBackToSection 
}) => {
  // Si on est sur la page d'accueil, afficher un message simple
  if (currentPage === 'home') {
    return (
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center text-sm text-gray-600">
          <Home className="w-4 h-4 mr-2 text-[#0099cc]" />
          <span className="text-gray-800 font-medium">Home</span>
        </div>
        <div className="text-sm text-gray-500">
          Welcome to Agriculture Section
        </div>
      </div>
    );
  }

  // Si on est sur une page de contenu, afficher le bouton de retour
  if (currentPage === 'content' && onBackToSection) {
    return (
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center text-sm text-gray-600">
          <button 
            onClick={onBackToSection}
            className="flex items-center text-[#0099cc] hover:underline transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Section
          </button>
        </div>
        <div className="text-sm text-gray-500">
          {breadcrumbs[breadcrumbs.length - 1]?.label}
        </div>
      </div>
    );
  }

  // Breadcrumbs normal pour les pages de section
  return (
    <div className="flex items-center text-sm text-gray-600 mb-6">
      {breadcrumbs.map((crumb, index) => (
        <React.Fragment key={index}>
          {index > 0 && <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />}
          {index === breadcrumbs.length - 1 ? (
            <span className="text-gray-800 font-medium">{crumb.label}</span>
          ) : (
            <Link href={crumb.href} className="text-[#0099cc] hover:underline transition-colors">
              {index === 0 && <Home className="w-4 h-4 mr-1 inline" />}
              {crumb.label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;