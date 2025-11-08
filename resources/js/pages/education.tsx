import AppShell from "@/layouts/AppShell";
import PageTitle from "@/components/UI/PageTitle";
import { Comment, RecentPost } from "@/types";
import SectionNavigationLayout from "@/layouts/services/SectionNavigationLayout";

export default function Benefits() {
  const pageData = {
    title: "Education & Learning",
    image: "assets/images/education/hero-education.jpg",
    date: "APR 18, 2024",
    author: "Admin",
    category: "Education, Learning, Agriculture",
    commentCount: 24,
    content: [
      "Discover the latest innovations in education and learning that are revolutionizing the Botswana. Our comprehensive guide covers everything from sustainable farming techniques to advanced crop management strategies.",
      "Learn how modern technology is transforming traditional farming methods, increasing yields while reducing environmental impact. Expert insights from leading agricultural specialists.",
    ],
    sections: [
      {
        id: "bursaries-&-scholarships",
        title: "Bursaries & Scholarships",
        content: [
          {
            id: "tertiary-education-students-sponsorship",
            title: "Tertiary Education Students Sponsorship",
            content:
              "Comprehensive guidance on preparing and managing agricultural land for optimal productivity. Learn how to test soil, apply amendments, and implement effective tillage and crop rotation techniques to enhance fertility, prevent erosion, and sustain long-term soil health.",
          },
        ],
      },
      {
        id: "institutions",
        title: "Institutions",
        content: [
          {
            id: "national-archives-educational-tour",
            title:
              "School Registration",
            content:
              "Procedures and standards for modifying or expanding poultry meat processing facilities. Ensure compliance with hygiene, safety, and environmental regulations to maintain product quality and operational efficiency.",
          },
        ],
      },
      {
        id: "learning-teaching",
        title: "Learning & Teaching",
        content: [
          {
            id: "application-for-research-permit",
            title: "Application for Research Permit",
            content:
              "Process for applying for farm equipment under the ISPAAD horticulture program. Includes eligibility criteria, application requirements, and guidelines for efficient use of provided machinery.",
          },
          {
            id: "application-for-research-permit-with-basic-education",
            title:
              "Application for Research Permit with Basic Education",
            content:
              "Detailed guide for accessing support on seeds, fertilizers, and other production inputs through ISPAAD. Learn how to optimize resource utilization for sustainable crop yields.",
          },
          {
            id: "diagnostic-assessment-for-learners-with-special-educational-needs",
            title: "Diagnostic Assessment for Learners with Special Educational needs",
            content:
              "Practical manual on identifying and managing common crop pests. Covers biological, cultural, and chemical control methods for integrated pest management.",
          },
          {
            id: "guidelines-for-registration-of-entry-level-teachers",
            title: "Guidelines for Registration of Entry Level Teachers",
            content:
              "Practical manual on identifying and managing common crop pests. Covers biological, cultural, and chemical control methods for integrated pest management.",
          },
          {
            id: "guidelines-for-student-admissions-re-admissions-and-transfers",
            title: "Guidelines for Student Admissions, Re-admissions and Transfers",
            content:
              "Practical manual on identifying and managing common crop pests. Covers biological, cultural, and chemical control methods for integrated pest management.",
          },
          {
            id: "health-guidelines-for-ports-of-entry",
            title: "Health Guidelines for Ports of Entry",
            content:
              "Practical manual on identifying and managing common crop pests. Covers biological, cultural, and chemical control methods for integrated pest management.",
          },
          {
            id: "how-to-access-results",
            title: "How to Access Results",
            content:
              "Practical manual on identifying and managing common crop pests. Covers biological, cultural, and chemical control methods for integrated pest management.",
          },
          {
            id: "isbn-issn-registration",
            title: "ISBN/ISSN – Registration",
            content:
              "Practical manual on identifying and managing common crop pests. Covers biological, cultural, and chemical control methods for integrated pest management.",
          },
          {
            id: "library-membership",
            title: "Library Membership",
            content:
              "Practical manual on identifying and managing common crop pests. Covers biological, cultural, and chemical control methods for integrated pest management.",
          },
          {
            id: "parliament-guided-tours",
            title: "Parliament Guided Tours",
            content:
              "Practical manual on identifying and managing common crop pests. Covers biological, cultural, and chemical control methods for integrated pest management.",
          },
          {
            id: "primary-school-student-registration-standard-one",
            title: "Primary School Student Registration - Standard One",
            content:
              "Practical manual on identifying and managing common crop pests. Covers biological, cultural, and chemical control methods for integrated pest management.",
          },
          {
            id: "research-permit-application",
            title: "Research Permit Application",
            content:
              "Practical manual on identifying and managing common crop pests. Covers biological, cultural, and chemical control methods for integrated pest management.",
          },
          {
            id: "special-education-services",
            title: "Special Education Services",
            content:
              "Practical manual on identifying and managing common crop pests. Covers biological, cultural, and chemical control methods for integrated pest management.",
          },
          {
            id: "teaching-permit-application",
            title: "Teaching Permit Application",
            content:
              "Practical manual on identifying and managing common crop pests. Covers biological, cultural, and chemical control methods for integrated pest management.",
          },
          {
            id: "training-in-road-design-construction-maintenance",
            title: "Training in Road Design, Construction & Maintenance",
            content:
              "Practical manual on identifying and managing common crop pests. Covers biological, cultural, and chemical control methods for integrated pest management.",
          },
          {
            id: "vocational-education-training",
            title: "Vocational Education Training",
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
        title="Education & Learning"
        backgroundImage="/assets/images/resource/education.png"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Education & Learning", href: "/education" },
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
