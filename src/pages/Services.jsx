import DashboardLayout from "../components/layout/DashboardLayout";
import PageHeader from "../components/layout/PageHeader";
import ServiceSection from "../components/sections/ServiceSection";

export default function Services() {
    return (
        <DashboardLayout>
            <PageHeader
                title="Services"
                subtitle="Manage services section content"
            />
            <ServiceSection />
        </DashboardLayout>
    );
}
