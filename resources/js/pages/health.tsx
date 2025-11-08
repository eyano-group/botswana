import AppShell from "@/layouts/AppShell";
import PageTitle from "@/components/UI/PageTitle";
import { Comment, RecentPost } from "@/types";
import SectionNavigationLayout from "@/layouts/services/SectionNavigationLayout";

export default function Benefits() {
  const pageData = {
    title: "Health & Wellness",
    image: "assets/images/health/hero-health.jpg",
    date: "APR 18, 2024",
    author: "Admin",
    category: "Health, Wellness, Agriculture",
    commentCount: 24,
    content: [
      "Discover the latest innovations in education and learning that are revolutionizing the Botswana. Our comprehensive guide covers everything from sustainable farming techniques to advanced crop management strategies.",
      "Learn how modern technology is transforming traditional farming methods, increasing yields while reducing environmental impact. Expert insights from leading agricultural specialists.",
    ],
    sections: [
      {
        id: "accreditation-of-professionals",
        title: "Accreditation of Professionals",
        content: [
          {
            id: "registration-of-private-health-professionals",
            title: "Registration of Private Health Professionals",
            content:
              "Comprehensive guidance on preparing and managing agricultural land for optimal productivity. Learn how to test soil, apply amendments, and implement effective tillage and crop rotation techniques to enhance fertility, prevent erosion, and sustain long-term soil health.",
          },
        ],
      },
      {
        id: "disease-prevention-&-control",
        title: "Disease Prevention & Control",
        content: [
          {
            id: "national-arv-program",
            title:
              "National ARV Program",
            content:
              "Procedures and standards for modifying or expanding poultry meat processing facilities. Ensure compliance with hygiene, safety, and environmental regulations to maintain product quality and operational efficiency.",
          },
          {
            id: "national-hiv-testing-services",
            title:
              "National HIV Testing Services",
            content:
              "Procedures and standards for modifying or expanding poultry meat processing facilities. Ensure compliance with hygiene, safety, and environmental regulations to maintain product quality and operational efficiency.",
          },
          {
            id: "safe-male-circumcision-smc",
            title:
              "Safe Male Circumcision (SMC)",
            content:
              "Procedures and standards for modifying or expanding poultry meat processing facilities. Ensure compliance with hygiene, safety, and environmental regulations to maintain product quality and operational efficiency.",
          },
          {
            id: "yellow-fever-vaccination",
            title:
              "Yellow Fever Vaccination",
            content:
              "Procedures and standards for modifying or expanding poultry meat processing facilities. Ensure compliance with hygiene, safety, and environmental regulations to maintain product quality and operational efficiency.",
          },
        ],
      },
      {
        id: "public-health-services",
        title: "Public Health Services",
        content: [
          {
            id: "blood-transfusion",
            title: "Blood Transfusion",
            content:
              "Process for applying for farm equipment under the ISPAAD horticulture program. Includes eligibility criteria, application requirements, and guidelines for efficient use of provided machinery.",
          },
          {
            id: "conveyance-of-corpse",
            title:
              "Conveyance of Corpse",
            content:
              "Detailed guide for accessing support on seeds, fertilizers, and other production inputs through ISPAAD. Learn how to optimize resource utilization for sustainable crop yields.",
          },
          {
            id: "emergency-medical-services-ambulance-services",
            title: "Emergency Medical Services (Ambulance Services)",
            content:
              "Practical manual on identifying and managing common crop pests. Covers biological, cultural, and chemical control methods for integrated pest management.",
          },
          {
            id: "immunization-letter",
            title: "Immunization Letter",
            content:
              "Practical manual on identifying and managing common crop pests. Covers biological, cultural, and chemical control methods for integrated pest management.",
          },
          {
            id: "oral-health-services",
            title: "Oral Health Services",
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
        title="Health & Wellness"
        backgroundImage="/assets/images/resource/health.png"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Health & Wellness", href: "/health-welness" },
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
