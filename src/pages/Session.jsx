import DashboardLayout from "../components/layout/DashboardLayout";
import PageHeader from "../components/layout/PageHeader";
import SessionSection from "../components/sections/SessionSection";

export default function Session() {
    return (
        <DashboardLayout>
            <PageHeader
                title="Session"
                subtitle="Manage Session section content"
            />
            <SessionSection />
        </DashboardLayout>
    );
}