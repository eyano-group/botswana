import AppShell from "@/layouts/AppShell";
import PageTitle from "@/components/UI/PageTitle";
import { Comment, RecentPost } from "@/types";
import SectionNavigationLayout from "@/layouts/services/SectionNavigationLayout";

export default function Immigration() {
  const pageData = {
    title: "immigration & civil registration",
    image: "assets/images/health/hero-health.jpg",
    date: "APR 18, 2024",
    author: "Admin",
    category: "immigration, civil registration, Agriculture",
    commentCount: 24,
    content: [
      "Discover the latest innovations in education and learning that are revolutionizing the Botswana. Our comprehensive guide covers everything from sustainable farming techniques to advanced crop management strategies.",
      "Learn how modern technology is transforming traditional farming methods, increasing yields while reducing environmental impact. Expert insights from leading agricultural specialists.",
    ],
    sections: [
      {
        id: "citizenship",
        title: "Citizenship",
        content: [
          {
            id: "citizenship-application-adopted-child",
            title: "Citizenship Application – Adopted Child",
            content:
              "Comprehensive guidance on preparing and managing agricultural land for optimal productivity. Learn how to test soil, apply amendments, and implement effective tillage and crop rotation techniques to enhance fertility, prevent erosion, and sustain long-term soil health.",
          },
          {
            id: "citizenship-application-declaration-of-intention",
            title: "Citizenship Application – Declaration of Intention",
            content:
              "Comprehensive guidance on preparing and managing agricultural land for optimal productivity. Learn how to test soil, apply amendments, and implement effective tillage and crop rotation techniques to enhance fertility, prevent erosion, and sustain long-term soil health.",
          },
          {
            id: "citizenship-application-dual-citizenship",
            title: "Citizenship Application – Dual Citizenship",
            content:
              "Comprehensive guidance on preparing and managing agricultural land for optimal productivity. Learn how to test soil, apply amendments, and implement effective tillage and crop rotation techniques to enhance fertility, prevent erosion, and sustain long-term soil health.",
          },
          {
            id: "citizenship-application-naturalization",
            title: "Citizenship Application – Naturalization",
            content:
              "Comprehensive guidance on preparing and managing agricultural land for optimal productivity. Learn how to test soil, apply amendments, and implement effective tillage and crop rotation techniques to enhance fertility, prevent erosion, and sustain long-term soil health.",
          },
          {
            id: "citizenship-application-naturalization-of-foreign-spouse",
            title: "Citizenship Application – Naturalization of Foreign Spouse",
            content:
              "Comprehensive guidance on preparing and managing agricultural land for optimal productivity. Learn how to test soil, apply amendments, and implement effective tillage and crop rotation techniques to enhance fertility, prevent erosion, and sustain long-term soil health.",
          },
          {
            id: "citizenship-application-settlement",
            title: "Citizenship Application – Settlement",
            content:
              "Comprehensive guidance on preparing and managing agricultural land for optimal productivity. Learn how to test soil, apply amendments, and implement effective tillage and crop rotation techniques to enhance fertility, prevent erosion, and sustain long-term soil health.",
          },
          {
            id: "citizenship-requirements-application-for-registration-as-a-citizen-of-botswana-to-his-excellency",
            title: "Citizenship Requirements – Application for Registration as a citizen of Botswana to His Excellency",
            content:
              "Comprehensive guidance on preparing and managing agricultural land for optimal productivity. Learn how to test soil, apply amendments, and implement effective tillage and crop rotation techniques to enhance fertility, prevent erosion, and sustain long-term soil health.",
          },
          {
            id: "citizenship-requirements-resumption-of-botswana-citizenship",
            title: "Citizenship Requirements – Resumption of Botswana Citizenship",
            content:
              "Comprehensive guidance on preparing and managing agricultural land for optimal productivity. Learn how to test soil, apply amendments, and implement effective tillage and crop rotation techniques to enhance fertility, prevent erosion, and sustain long-term soil health.",
          },
          {
            id: "renunciation-of-citizenship-by-reason-of-dual-citizenship-or-nationality",
            title: "Renunciation Of Citizenship By Reason Of Dual Citizenship Or Nationality",
            content:
              "Comprehensive guidance on preparing and managing agricultural land for optimal productivity. Learn how to test soil, apply amendments, and implement effective tillage and crop rotation techniques to enhance fertility, prevent erosion, and sustain long-term soil health.",
          },
        ],
      },
      {
        id: "civil-registration",
        title: "Civil Registration",
        content: [
          {
            id: "application-for-civil-registration-documents-abroad",
            title:
              "Application for civil registration documents abroad (Omang, National Passport, birth and death certificate, police clearance certificates, validation of driver’s licence)",
            content:
              "Procedures and standards for modifying or expanding poultry meat processing facilities. Ensure compliance with hygiene, safety, and environmental regulations to maintain product quality and operational efficiency.",
          },
          {
            id: "birth-registration",
            title:
              "Birth Registration",
            content:
              "Procedures and standards for modifying or expanding poultry meat processing facilities. Ensure compliance with hygiene, safety, and environmental regulations to maintain product quality and operational efficiency.",
          },
          {
            id: "change-of-name",
            title:
              "Change of Name",
            content:
              "Procedures and standards for modifying or expanding poultry meat processing facilities. Ensure compliance with hygiene, safety, and environmental regulations to maintain product quality and operational efficiency.",
          },
          {
            id: "charge-d-affaires",
            title:
              "Charge d'Affaires",
            content:
              "Procedures and standards for modifying or expanding poultry meat processing facilities. Ensure compliance with hygiene, safety, and environmental regulations to maintain product quality and operational efficiency.",
          },
          {
            id: "death-registration",
            title:
              "Death Registration",
            content:
              "Procedures and standards for modifying or expanding poultry meat processing facilities. Ensure compliance with hygiene, safety, and environmental regulations to maintain product quality and operational efficiency.",
          },
          {
            id: "gender-disaggregated-data",
            title:
              "Gender Disaggregated Data",
            content:
              "Procedures and standards for modifying or expanding poultry meat processing facilities. Ensure compliance with hygiene, safety, and environmental regulations to maintain product quality and operational efficiency.",
          },
          {
            id: "gender-equality",
            title:
              "Gender Equality",
            content:
              "Procedures and standards for modifying or expanding poultry meat processing facilities. Ensure compliance with hygiene, safety, and environmental regulations to maintain product quality and operational efficiency.",
          },
          {
            id: "marriage-registration",
            title:
              "Marriage Registration",
            content:
              "Procedures and standards for modifying or expanding poultry meat processing facilities. Ensure compliance with hygiene, safety, and environmental regulations to maintain product quality and operational efficiency.",
          },
          {
            id: "married-persons-property-regime",
            title:
              "Married Persons Property Regime",
            content:
              "Procedures and standards for modifying or expanding poultry meat processing facilities. Ensure compliance with hygiene, safety, and environmental regulations to maintain product quality and operational efficiency.",
          },
          {
            id: "national-identity-card-application",
            title:
              "National Identity Card Application",
            content:
              "Procedures and standards for modifying or expanding poultry meat processing facilities. Ensure compliance with hygiene, safety, and environmental regulations to maintain product quality and operational efficiency.",
          },
          {
            id: 'women-economic-empowerment-guidelines',
            title: 'Women’s Economic Empowerment Guidelines',
            content: 'Procedures and standards for modifying or expanding poultry meat processing facilities. Ensure compliance with hygiene, safety, and environmental regulations to maintain product quality and operational efficiency.'
          }
        ],
      },
      {
        id: "immigration",
        title: "Immigration",
        content: [
          {
            id: "consul-general",
            title: "Consul General",
            content:
              "Process for applying for farm equipment under the ISPAAD horticulture program. Includes eligibility criteria, application requirements, and guidelines for efficient use of provided machinery.",
          },
          {
            id: "e-passport-application",
            title:
              "E-Passport Application",
            content:
              "Detailed guide for accessing support on seeds, fertilizers, and other production inputs through ISPAAD. Learn how to optimize resource utilization for sustainable crop yields.",
          },
          {
            id: "electronic-emergency-travel-document-etd",
            title: "Electronic Emergency Travel Document (ETD)",
            content:
              "Practical manual on identifying and managing common crop pests. Covers biological, cultural, and chemical control methods for integrated pest management.",
          },
          {
            id: "emergency-assistance",
            title: "Emergency assistance",
            content:
              "Practical manual on identifying and managing common crop pests. Covers biological, cultural, and chemical control methods for integrated pest management.",
          },
          {
            id: "extension-of-days-of-visit",
            title: "Extension of days of visit",
            content:
              "Practical manual on identifying and managing common crop pests. Covers biological, cultural, and chemical control methods for integrated pest management.",
          },
          {
            id: "facilitation-of-arrival-of-new-diplomats",
            title: "Facilitation of Arrival of New Diplomats",
            content:
              "Practical manual on identifying and managing common crop pests. Covers biological, cultural, and chemical control methods for integrated pest management.",
          },
          {
            id: "registration-of-batswana-living-and-travelling-abroad",
            title: "Registration of Batswana living and travelling abroad",
            content:
              "Practical manual on identifying and managing common crop pests. Covers biological, cultural, and chemical control methods for integrated pest management.",
          },
          {
            id: "top-ten-travel-tips",
            title: "Top Ten (10) Travel Tips",
            content:
              "Practical manual on identifying and managing common crop pests. Covers biological, cultural, and chemical control methods for integrated pest management.",
          },
          {
            id: "welfare-of-batswana-in-the-diaspora",
            title: "Welfare of Batswana in the Diaspora",
            content:
              "Practical manual on identifying and managing common crop pests. Covers biological, cultural, and chemical control methods for integrated pest management.",
          },
        ],
      },
      {
        id: "residency-work",
        title: "Residency & Work",
        content: [
          {
            id: "appeal-for-work-permit",
            title: "Appeal for Work Permit",
            content:
              "Process for applying for farm equipment under the ISPAAD horticulture program. Includes eligibility criteria, application requirements, and guidelines for efficient use of provided machinery.",
          },
          {
            id: "emergency-work-permit",
            title:
              "Emergency Work Permit",
            content:
              "Detailed guide for accessing support on seeds, fertilizers, and other production inputs through ISPAAD. Learn how to optimize resource utilization for sustainable crop yields.",
          },
          {
            id: "permanent-residence-application",
            title: "Permanent Residence Application",
            content:
              "Practical manual on identifying and managing common crop pests. Covers biological, cultural, and chemical control methods for integrated pest management.",
          },
          {
            id: "residence-permit-application",
            title: "Residence Permit Application",
            content:
              "Practical manual on identifying and managing common crop pests. Covers biological, cultural, and chemical control methods for integrated pest management.",
          },
          {
            id: "work-permit-application",
            title: "Work Permit Application",
            content:
              "Practical manual on identifying and managing common crop pests. Covers biological, cultural, and chemical control methods for integrated pest management.",
          },
        ],
      },
      {
        id: "visa-applications",
        title: "VISA Applications",
        content: [
          {
            id: "facilitation-of-visa-applications-for-public-officers-on-official-travel",
            title: "Facilitation of Visa Applications for Public Officers on Official Travel",
            content:
              "Process for applying for farm equipment under the ISPAAD horticulture program. Includes eligibility criteria, application requirements, and guidelines for efficient use of provided machinery.",
          },
          {
            id: "visa-application-business-visa",
            title:
              "Visa Application – Business Visa",
            content:
              "Detailed guide for accessing support on seeds, fertilizers, and other production inputs through ISPAAD. Learn how to optimize resource utilization for sustainable crop yields.",
          },
          {
            id: "visa-application-employment-visa",
            title: "Visa Application – Employment Visa",
            content:
              "Practical manual on identifying and managing common crop pests. Covers biological, cultural, and chemical control methods for integrated pest management.",
          },
          {
            id: "visa-application-investment-visa",
            title: "Visa Application – Investment Visa",
            content:
              "Practical manual on identifying and managing common crop pests. Covers biological, cultural, and chemical control methods for integrated pest management.",
          },
          {
            id: "visa-application-study-visa",
            title: "Visa Application – Study Visa",
            content:
              "Practical manual on identifying and managing common crop pests. Covers biological, cultural, and chemical control methods for integrated pest management.",
          },
          {
            id: "visa-application-tourism-visa",
            title: "Visa Application – Tourism Visa",
            content:
              "Practical manual on identifying and managing common crop pests. Covers biological, cultural, and chemical control methods for integrated pest management.",
          },
          {
            id: "visa-application-transit-visa",
            title: "Visa Application – Transit Visa",
            content:
              "Practical manual on identifying and managing common crop pests. Covers biological, cultural, and chemical control methods for integrated pest management.",
          },
          {
            id: "visa-application-visitors-visa",
            title: "Visa Application – Visitor’s Visa",
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
        title="immigration & civil registration"
        backgroundImage="/assets/images/resource/health.png"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "immigration & civil registration", href: "/immigration-civil-registration" },
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
