import AppShell from "@/layouts/AppShell";
import HeroSection from "@/components/section/home/HeroSection";
import AboutSection from "@/components/section/home/AboutSection";
import FeatureSection from "@/components/section/home/FeatureSection";
import CtaSection from "@/components/section/home/CtaSection";
import ServiceSection from "@/components/section/home/ServiceSection";
import ApplySection from "@/components/section/home/ApplySection";
import FunFactSection from "@/components/section/home/FunfactSection";
import TrainingSection from "@/components/section/home/TrainingSection";
import ImmigrationSection from "@/components/section/home/ImmigrationSection";
import ChooseSection from "@/components/section/home/ChooseSection";
import TestimonialSection from "@/components/section/home/TestimonialSection";
import InquirySection from "@/components/section/home/InquirySection";
import NewsSection from "@/components/section/home/NewsSection";
import ClientsSection from "@/components/section/home/ClientsSection";

export default function Welcome() {
    return (
        <AppShell>
            <HeroSection />
            {/* <AboutSection /> */}
            <FeatureSection />
            <CtaSection />
            <ServiceSection />
            <ApplySection />
            {/* <FunFactSection /> */}
            {/* <TrainingSection /> */}
            {/* <ImmigrationSection /> */}
            {/* <ChooseSection /> */}
            {/* <TestimonialSection /> */}
            {/* <InquirySection /> */}
            <NewsSection />
            {/* <ClientsSection /> */}
        </AppShell>
    );
}