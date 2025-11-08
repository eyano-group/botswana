import AppShell from "@/layouts/AppShell";
import PageTitle from "@/components/UI/PageTitle";
import { Comment, RecentPost } from "@/types";
import SectionNavigationLayout from "@/layouts/services/SectionNavigationLayout";

export default function Benefits() {
  const pageData = {
    title: "Recreation & Leisure",
    image: "assets/images/recreation/hero-recreation.jpg",
    date: "APR 18, 2024",
    author: "Admin",
    category: "Recreation, Leisure, Agriculture",
    commentCount: 24,
    content: [
      "Discover the latest innovations in recreation and leisure that are revolutionizing the Botswana. Our comprehensive guide covers everything from sustainable farming techniques to advanced crop management strategies.",
      "Learn how modern technology is transforming traditional farming methods, increasing yields while reducing environmental impact. Expert insights from leading agricultural specialists.",
    ],
    sections: [
      {
        id: "competitions-&-sports",
        title: "Competitions & Sports",
        content: [
          {
            id: "constituency-art-competition",
            title: "Constituency Art Competition",
            content:
              "Comprehensive guidance on preparing and managing agricultural land for optimal productivity. Learn how to test soil, apply amendments, and implement effective tillage and crop rotation techniques to enhance fertility, prevent erosion, and sustain long-term soil health.",
          },
          {
            id: "constituency-sport-tournament",
            title:
              "Constituency Sport Tournament",
            content:
              "Detailed procedures and standards for laboratory testing of soil, plant materials, fertilizers, water, and animal feeds. Understand how analytical results guide nutrient management, crop planning, and safe use of agricultural inputs to achieve optimal yields.",
          },
          {
            id: "national-appeals-board",
            title: "National Appeals Board",
            content:
              "A structured approach to evaluating the viability and sustainability of agricultural business plans. Learn how to assess financial projections, resource allocation, market potential, and environmental impact before implementation.",
          },
          {
            id: "presidents-day-competitions",
            title: "President's Day Competitions",
            content:
              "Technical and financial guidance for establishing and maintaining sustainable aquaculture systems. Covers pond design, fish species selection, feeding programs, water quality management, and disease prevention strategies.",
          },
        ],
      },
      {
        id: "culture",
        title: "Culture",
        content: [
          {
            id: "national-archives-educational-tour",
            title:
              "National Archives - Educational Tour",
            content:
              "Procedures and standards for modifying or expanding poultry meat processing facilities. Ensure compliance with hygiene, safety, and environmental regulations to maintain product quality and operational efficiency.",
          },
          {
            id: "national-archives-research-enquiry",
            title: "National Archives Research Enquiry",
            content:
              "Comprehensive assistance for livestock farmers seeking fodder support and technical aid. Learn how to improve feed production, storage, and nutritional balance to promote healthy and productive animals.",
          },
        ],
      },
      {
        id: "tourism",
        title: "Tourism",
        content: [
          {
            id: "boat-registration",
            title: "Boat Registration",
            content:
              "Process for applying for farm equipment under the ISPAAD horticulture program. Includes eligibility criteria, application requirements, and guidelines for efficient use of provided machinery.",
          },
          {
            id: "group-tours-to-national-parks-game-reserves-or-campsites",
            title:
              "Group Tours to National Parks, Game Reserves or Campsites",
            content:
              "Detailed guide for accessing support on seeds, fertilizers, and other production inputs through ISPAAD. Learn how to optimize resource utilization for sustainable crop yields.",
          },
          {
            id: "guided-tours",
            title: "Guided Tours",
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
        title="Recreation & Leisure"
        backgroundImage="/assets/images/resource/recreation.png"
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Recreation & Leisure", href: "/recreation" },
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
