import AppShell from "@/layouts/AppShell";
import ContactSection from "@/components/section/contact/ContactSection";
import PageTitle from "@/components/UI/PageTitle";

export default function Contact() {
    return (
        <AppShell>
            <PageTitle title="Contact" backgroundImage="/assets/images/breadcrumb/page-title-6.jpg" breadcrumbItems={[
                { label: "Home", href: "/" },
                { label: "Contact" },
            ]} />
            <ContactSection />
        </AppShell>
    );
}