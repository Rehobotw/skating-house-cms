import DashboardLayout from "../components/layout/DashboardLayout";
import PageHeader from "../components/layout/PageHeader";
import ContactSection from "../components/sections/ContactSection";

export default function Contact() {
    return (
        <DashboardLayout>
            <PageHeader
                title="Contact"
                subtitle="Manage contact information and social links"
            />
            <ContactSection />
        </DashboardLayout>
    );
}
