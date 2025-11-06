import AppShell from "@/layouts/AppShell";
import HeroSection from "@/components/section/HeroSection";
import AboutSection from "@/components/section/AboutSection";
import FeatureSection from "@/components/section/FeatureSection";
import CtaSection from "@/components/section/CtaSection";
import ServiceSection from "@/components/section/ServiceSection";
import ApplySection from "@/components/section/ApplySection";
import FunFactSection from "@/components/section/FunfactSection";
import TrainingSection from "@/components/section/TrainingSection";
import ImmigrationSection from "@/components/section/ImmigrationSection";
import ChooseSection from "@/components/section/ChooseSection";
import TestimonialSection from "@/components/section/TestimonialSection";
import InquirySection from "@/components/section/InquirySection";
import NewsSection from "@/components/section/NewsSection";
import ClientsSection from "@/components/section/ClientsSection";

export default function Welcome() {
    return (
        <AppShell>
            <HeroSection />
            <AboutSection />
            <FeatureSection />
            <CtaSection />
            <ServiceSection />
            <ApplySection />
            <FunFactSection />
            <TrainingSection />
            <ImmigrationSection />
            <ChooseSection />
            <TestimonialSection />
            <InquirySection />
            <NewsSection />
            <ClientsSection />
        </AppShell>
    );
}