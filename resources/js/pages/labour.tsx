import AppShell from "@/layouts/AppShell";
import PageTitle from "@/components/UI/PageTitle";
import { Comment, RecentPost } from "@/types";
import SectionNavigationLayout from "@/layouts/services/SectionNavigationLayout";

export default function Benefits() {
  const pageData = {
    title: "Labour & Employment",
    image: "assets/images/labour/hero-labour.jpg",
    date: "APR 18, 2024",
    author: "Admin",
    category: "Labour & Employment",
    commentCount: 24,
    content: [
      "Discover the latest innovations in education and learning that are revolutionizing the Botswana. Our comprehensive guide covers everything from sustainable farming techniques to advanced crop management strategies.",
      "Learn how modern technology is transforming traditional farming methods, increasing yields while reducing environmental impact. Expert insights from leading agricultural specialists.",
    ],
    sections: [
      {
        id: "employment-apprentice",
        title: "Employment & Apprentice",
        content: [
          {
            id: "botswana-national-service-programme-tirelo-sechaba",
            title: "Botswana National Service Programme (Tirelo Sechaba)",
            content:
              "Comprehensive guidance on preparing and managing agricultural land for optimal productivity. Learn how to test soil, apply amendments, and implement effective tillage and crop rotation techniques to enhance fertility, prevent erosion, and sustain long-term soil health.",
          },
          {
            id: "national-internship-program",
            title: "National Internship Program",
            content:
              "Comprehensive guidance on preparing and managing agricultural land for optimal productivity. Learn how to test soil, apply amendments, and implement effective tillage and crop rotation techniques to enhance fertility, prevent erosion, and sustain long-term soil health.",
          },
          {
            id: "recruitment-officer-cadet",
            title: "Recruitment - Officer Cadet",
            content:
              "Comprehensive guidance on preparing and managing agricultural land for optimal productivity. Learn how to test soil, apply amendments, and implement effective tillage and crop rotation techniques to enhance fertility, prevent erosion, and sustain long-term soil health.",
          },
          {
            id: "recruitment-recruit-private",
            title: "Recruitment - Recruit Private",
            content:
              "Comprehensive guidance on preparing and managing agricultural land for optimal productivity. Learn how to test soil, apply amendments, and implement effective tillage and crop rotation techniques to enhance fertility, prevent erosion, and sustain long-term soil health.",
          },
        ],
      },
      {
        id: "labour-administration",
        title: "Labour Administration",
        content: [
          {
            id: "application-for-civil-registration-documents-abroad",
            title:
              "Application for Certificate of Exemption",
            content:
              "Procedures and standards for modifying or expanding poultry meat processing facilities. Ensure compliance with hygiene, safety, and environmental regulations to maintain product quality and operational efficiency.",
          },
          {
            id: "labour-inspection",
            title:
              "Labour Inspection",
            content:
              "Procedures and standards for modifying or expanding poultry meat processing facilities. Ensure compliance with hygiene, safety, and environmental regulations to maintain product quality and operational efficiency.",
          },
          {
            id: "recruiter-permit",
            title:
              "Recruiter’s Permit",
            content:
              "Procedures and standards for modifying or expanding poultry meat processing facilities. Ensure compliance with hygiene, safety, and environmental regulations to maintain product quality and operational efficiency.",
          },
          {
            id: "registration-of-employers-organisation",
            title:
              "Registration of Employers’ Organisation",
            content:
              "Procedures and standards for modifying or expanding poultry meat processing facilities. Ensure compliance with hygiene, safety, and environmental regulations to maintain product quality and operational efficiency.",
          },
          {
            id: "registration-of-federation-of-trade-unions",
            title:
              "Registration of Federation of Trade Unions",
            content:
              "Procedures and standards for modifying or expanding poultry meat processing facilities. Ensure compliance with hygiene, safety, and environmental regulations to maintain product quality and operational efficiency.",
          },
          {
            id: "requirements-for-labour-exemption-certificates-for-permanent-residents",
            title:
              "Requirements for Labour Exemption Certificates for Permanent Residents",
            content:
              "Procedures and standards for modifying or expanding poultry meat processing facilities. Ensure compliance with hygiene, safety, and environmental regulations to maintain product quality and operational efficiency.",
          },
          {
            id: "societies-registration",
            title:
              "Societies Registration",
            content:
              "Procedures and standards for modifying or expanding poultry meat processing facilities. Ensure compliance with hygiene, safety, and environmental regulations to maintain product quality and operational efficiency.",
          },
          {
            id: "trade-dispute-arbitration",
            title:
              "Trade Dispute - Arbitration",
            content:
              "Procedures and standards for modifying or expanding poultry meat processing facilities. Ensure compliance with hygiene, safety, and environmental regulations to maintain product quality and operational efficiency.",
          },
          {
            id: "trade-dispute-mediation",
            title:
              "Trade Dispute - Mediation",
            content:
              "Procedures and standards for modifying or expanding poultry meat processing facilities. Ensure compliance with hygiene, safety, and environmental regulations to maintain product quality and operational efficiency.",
          },
          {
            id: "trade-unions-registration",
            title:
              "Trade Unions Registration",
            content:
              "Procedures and standards for modifying or expanding poultry meat processing facilities. Ensure compliance with hygiene, safety, and environmental regulations to maintain product quality and operational efficiency.",
          },
        ],
      },
      {
        id: "occupational-health-safety",
        title: "Occupational Health & Safety",
        content: [
          {
            id: "examination-of-cranes-and-other-lifting-equipment",
            title: "Examination of Cranes and Other Lifting Equipment",
            content:
              "Process for applying for farm equipment under the ISPAAD horticulture program. Includes eligibility criteria, application requirements, and guidelines for efficient use of provided machinery.",
          },
          {
            id: "examination-of-steam-boilers-under-normal-pressure",
            title:
              "Examination of Steam Boilers Under Normal Pressure",
            content:
              "Detailed guide for accessing support on seeds, fertilizers, and other production inputs through ISPAAD. Learn how to optimize resource utilization for sustainable crop yields.",
          },
          {
            id: "examination-of-steam-boilers-when-cold",
            title: "Examination of Steam Boilers When Cold",
            content:
              "Practical manual on identifying and managing common crop pests. Covers biological, cultural, and chemical control methods for integrated pest management.",
          },
          {
            id: "examination-of-steam-or-air-receiver-normal-pressure-supplementary-report",
            title: "Examination of Steam or Air Receiver Normal Pressure - Supplementary Report",
            content:
              "Practical manual on identifying and managing common crop pests. Covers biological, cultural, and chemical control methods for integrated pest management.",
          },
          {
            id: "examination-of-steam-receivers",
            title: "Examination of Steam Receivers",
            content:
              "Practical manual on identifying and managing common crop pests. Covers biological, cultural, and chemical control methods for integrated pest management.",
          },
          {
            id: "factory-registration",
            title: "Factory Registration",
            content:
              "Practical manual on identifying and managing common crop pests. Covers biological, cultural, and chemical control methods for integrated pest management.",
          },
          {
            id: "general-register",
            title: "General Register",
            content:
              "Practical manual on identifying and managing common crop pests. Covers biological, cultural, and chemical control methods for integrated pest management.",
          },
          {
            id: "workers-compensation",
            title: "Workers Compensation",
            content:
              "Practical manual on identifying and managing common crop pests. Covers biological, cultural, and chemical control methods for integrated pest management.",
          },
          {
            id: "workplace-accident-reporting-and-investigation",
            title: "Workplace Accident Reporting and Investigation",
            content:
              "Practical manual on identifying and managing common crop pests. Covers biological, cultural, and chemical control methods for integrated pest management.",
          },
        ],
      },
    ],
  };

  const comments: Comment[] = [
    {
      id: 1,
      author: "John Farmer",
      date: "May 23, 2024 at 12:00 PM",
      content:
        "This guide has been incredibly helpful for our farm. The soil preparation techniques alone increased our yield by 20%!",
      avatar: "assets/images/avatars/farmer1.jpg",
    },
    {
      id: 2,
      author: "Maria Agriculture",
      date: "May 22, 2024 at 10:30 AM",
      content:
        "The irrigation systems section is exactly what we needed. Smart water management has cut our water usage by 30%.",
      avatar: "assets/images/avatars/farmer2.jpg",
    },
  ];

  const recentPosts: RecentPost[] = [
    {
      id: 1,
      title: "Organic Farming Certification Guide",
      date: "May 15, 2024",
      image: "assets/images/posts/organic-farming.jpg",
    },
    {
      id: 2,
      title: "Smart Agriculture Technologies",
      date: "May 10, 2024",
      image: "assets/images/posts/smart-agriculture.jpg",
    },
    {
      id: 3,
      title: "Sustainable Crop Rotation Methods",
      date: "May 5, 2024",
      image: "assets/images/posts/crop-rotation.jpg",
    },
  ];

  return (
    <AppShell>
      <PageTitle
        title="Labour & Employment"
        backgroundImage="/assets/images/resource/labour.png"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Labour & Employment", href: "/labour" },
        ]}
      />
      <SectionNavigationLayout
        pageData={pageData}
        comments={comments}
        recentPosts={recentPosts}
      >
        
      </SectionNavigationLayout>
    </AppShell>
  );
}
