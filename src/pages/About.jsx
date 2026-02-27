import DashboardLayout from "../components/layout/DashboardLayout";
import PageHeader from "../components/layout/PageHeader";
import AboutSection from "../components/sections/AboutSection"

export default function About() {
    return (
        <DashboardLayout>
            <PageHeader
                title="About"
                subtitle="Edit site section with bilingual support (English/Amharic)"
            />
            <AboutSection />
        </DashboardLayout>
    );
}