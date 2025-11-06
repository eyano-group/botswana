// src/pages/NewsEventsMain.js
import React from 'react';
import SectionHeader from './SectionHeader';
import NewsCard from './NewsCard';
import EventCard from './EventCard';
import PressReleaseItem from './PressReleaseItem';

const NewsEventsSection = () => {
  // Données d'exemple
  const newsData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      category: "Immigration",
      title: "New Visa Policies Announced for 2024",
      excerpt: "The government has just announced a series of updates to visa application processes, aimed at streamlining and improving efficiency for applicants worldwide.",
      date: "Oct 15, 2023",
      author: "Jane Doe"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80",
      category: "Business",
      title: "Success Story: From Applicant to Resident",
      excerpt: "Meet John, who successfully navigated the complex business visa process with our help and is now a thriving entrepreneur.",
      date: "Oct 10, 2023",
      author: "John Smith"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80",
      category: "Study",
      title: "Top 5 Universities for International Students",
      excerpt: "We've compiled a list of the best universities that offer outstanding programs and support for international students.",
      date: "Oct 5, 2023",
      author: "Emily White"
    }
  ];

  const eventsData = [
    {
      id: 1,
      title: "Free Webinar: US Student Visa Application",
      date: "Nov 15",
      time: "03:00 PM - 04:30 PM EST",
      location: "Online (Zoom)",
      description: "Join our experts for a comprehensive guide on filling out your US student visa application without errors."
    },
    {
      id: 2,
      title: "Workshop: Path to Canadian Permanent Residency",
      date: "Nov 22",
      time: "10:00 AM - 01:00 PM EST",
      location: "New York Office, 72 MainSail Drive",
      description: "An in-depth workshop covering the Express Entry system, provincial nominee programs, and more."
    }
  ];

  const pressReleasesData = [
    { title: "Firm Expands Services to Include European Immigration", date: "Oct 20, 2023", pdfLink: "#" },
    { title: "Partnership with Leading University for Student Programs", date: "Oct 1, 2023", pdfLink: "#" },
    { title: "CEO Named Top Immigration Lawyer of the Year", date: "Sep 15, 2023", pdfLink: "#" }
  ];

  return (
    <main className="bg-slate-50 py-20 lg:py-32">
      <div className="container mx-auto max-w-7xl px-4">
        
        {/* Section: Press Releases */}
        <section className="mb-24" id='press-releases'>
          <SectionHeader subtitle="Official Announcements" title="Press Releases" />
          <div className="max-w-4xl mx-auto space-y-4">
            {pressReleasesData.map(item => (
              <PressReleaseItem key={item.title} {...item} />
            ))}
          </div>
        </section>

        {/* Section: Latest News */}
        <section className="mb-24" id='latest-news'>
          <SectionHeader subtitle="From Our Blog" title="Latest News & Insights" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map(item => (
              <NewsCard key={item.id} {...item} />
            ))}
          </div>
        </section>

        {/* Section: Upcoming Events */}
        <section id='upcoming-events'>
          <SectionHeader subtitle="Join Us" title="Upcoming Events" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {eventsData.map(item => (
              <EventCard key={item.id} {...item} />
            ))}
          </div>
        </section>

      </div>
    </main>
  );
};

export default NewsEventsSection;