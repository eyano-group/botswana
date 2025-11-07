import AppShell from "@/layouts/AppShell";
import PageTitle from "@/components/UI/PageTitle";
import { Comment, RecentPost } from "@/types";
import SectionNavigationLayout from "@/layouts/services/SectionNavigationLayout";

export default function Agriculture() {
  const pageData = {
    title: "Agriculture Best Practices 2024",
    image: "assets/images/agriculture/hero-agriculture.jpg",
    date: "APR 18, 2024",
    author: "Admin",
    category: "Agriculture, Farming",
    commentCount: 24,
    content: [
      "Discover the latest innovations in agricultural practices that are revolutionizing the farming industry. Our comprehensive guide covers everything from sustainable farming techniques to advanced crop management strategies.",
      "Learn how modern technology is transforming traditional farming methods, increasing yields while reducing environmental impact. Expert insights from leading agricultural specialists."
    ],
    sections: [
      {
        id: 'crop-management',
        title: 'Crop Management',
        content: [
          {
            id: 'soil-preparation',
            title: 'Soil Preparation',
            content: 'Detailed guide on preparing soil for optimal crop growth, including testing, amendment, and tillage techniques that maximize yield potential. Learn about pH balancing, nutrient management, and organic matter incorporation for sustainable soil health.'
          },
          {
            id: 'irrigation-systems',
            title: 'Irrigation Systems',
            content: 'Comprehensive overview of modern irrigation technologies, from drip irrigation to smart water management systems that conserve resources while improving crop health. Discover water-efficient techniques, scheduling strategies, and automated irrigation solutions.'
          },
          {
            id: 'harvesting-techniques',
            title: 'Harvesting Techniques',
            content: 'Master the art and science of efficient harvesting with our detailed guidelines on timing, methods, and post-harvest handling. Learn about mechanical vs manual harvesting, storage solutions, and quality preservation techniques.'
          }
        ]
      },
      {
        id: 'livestock-integration',
        title: 'Livestock Integration',
        content: [
          {
            id: 'sustainable-practices',
            title: 'Sustainable Practices',
            content: 'Learn how to integrate livestock with crop production sustainably, creating diversified farm operations that maximize profitability and environmental stewardship. Discover rotational grazing, manure management, and integrated pest management.'
          },
          {
            id: 'animal-health',
            title: 'Animal Health',
            content: 'Comprehensive guide to maintaining optimal animal health through proper nutrition, preventive care, and humane treatment practices. Learn about vaccination schedules, disease prevention, and welfare standards.'
          }
        ]
      },
      {
        id: 'organic-farming',
        title: 'Organic Farming',
        content: [
          {
            id: 'certification-process',
            title: 'Certification Process',
            content: 'Step-by-step guide to obtaining organic certification, including requirements, documentation, and inspection processes. Learn about different certification bodies and standards compliance.'
          },
          {
            id: 'organic-methods',
            title: 'Organic Methods',
            content: 'Detailed techniques for organic farming including natural pest control, composting, crop rotation, and soil fertility management without synthetic inputs.'
          }
        ]
      }
    ]
  };

  const comments: Comment[] = [
    {
      id: 1,
      author: "John Farmer",
      date: "May 23, 2024 at 12:00 PM",
      content: "This guide has been incredibly helpful for our farm. The soil preparation techniques alone increased our yield by 20%!",
      avatar: "assets/images/avatars/farmer1.jpg"
    },
    {
      id: 2,
      author: "Maria Agriculture",
      date: "May 22, 2024 at 10:30 AM",
      content: "The irrigation systems section is exactly what we needed. Smart water management has cut our water usage by 30%.",
      avatar: "assets/images/avatars/farmer2.jpg"
    }
  ];

  const recentPosts: RecentPost[] = [
    {
      id: 1,
      title: "Organic Farming Certification Guide",
      date: "May 15, 2024",
      image: "assets/images/posts/organic-farming.jpg"
    },
    {
      id: 2,
      title: "Smart Agriculture Technologies",
      date: "May 10, 2024",
      image: "assets/images/posts/smart-agriculture.jpg"
    },
    {
      id: 3,
      title: "Sustainable Crop Rotation Methods",
      date: "May 5, 2024",
      image: "assets/images/posts/crop-rotation.jpg"
    }
  ];


  return (
    <AppShell>
      <PageTitle title="Agriculture" backgroundImage="/assets/images/resource/agriculture.png" breadcrumbItems={[
        {label: "Home", href: "/"},
        {label: "Agriculture", href: '/agriculture'}
      ]} />
      <SectionNavigationLayout
        pageData={pageData}
        comments={comments}
        recentPosts={recentPosts}
      >
        {/* Contenu spécifique à cette page peut être ajouté ici si nécessaire */}
      </SectionNavigationLayout>
    </AppShell>
  );
}
