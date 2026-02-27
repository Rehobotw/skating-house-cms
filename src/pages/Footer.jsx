import DashboardLayout from "../components/layout/DashboardLayout";
import PageHeader from "../components/layout/PageHeader";
import FooterSection from "../components/sections/FooterSection";

export default function Footer() {
    return (
        <DashboardLayout>
            <PageHeader
                title="Footer"
                subtitle="Manage Footer section"
            />
            <FooterSection />
        </DashboardLayout>
    );
}
