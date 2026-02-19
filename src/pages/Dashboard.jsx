import DashboardLayout from "../components/layout/DashboardLayout";
import PageHeader from "../components/layout/PageHeader";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection"

export default function Dashboard() {
    return (
        <DashboardLayout>
            <PageHeader
                title="Content Management"
                subtitle="Edit site section with bilingual support (English/Amharic)"
            />
            <HeroSection />
            <AboutSection />
        </DashboardLayout>
    );
}