import PageTitle from "@/components/UI/PageTitle";
import AppShell from "@/layouts/AppShell";
import NewsEventsSection from "@/components/section/news/NewsEventsSection";

export default function News() {
    return (
        <AppShell>
            <PageTitle title="News" backgroundImage="/assets/images/banner/banner-1.jpg" breadcrumbItems={[
                { label: "Home", href: "/" },
                { label: "News" },
            ]} />
            <NewsEventsSection />
        </AppShell>
    );
}   