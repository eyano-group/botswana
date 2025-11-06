// src/pages/AboutPage.js
import React from 'react';
import AboutBotswana from '../components/section/about/AboutBotswana';
import AboutGovernment from '../components/section/about/AboutGovernment';
import AppShell from '@/layouts/AppShell';
// Un composant d'erreur 404 simple

const About = ({ slug }: { slug: string }) => {
  const renderContent = () => {
    switch (slug) {
      case 'about-botswana':
        return <AboutBotswana />;
      case 'about-government':
        return <AboutGovernment />;
      default:
        return <>Not Found</>;
    }
  };

  return (
    <AppShell>
        <main className="min-h-screen">
        {renderContent()}
        </main>
    </AppShell>
  );
};

export default About;