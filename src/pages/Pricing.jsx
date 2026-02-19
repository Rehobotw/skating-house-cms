import DashboardLayout from "../components/layout/DashboardLayout";
import PageHeader from "../components/layout/PageHeader";
import PricingSection from "../components/sections/PricingSection";

export default function Pricing() {
    return (
        <DashboardLayout>
            <PageHeader
                title="Pricing"
                subtitle="Manage pricing plans and content"
            />
            <PricingSection />
        </DashboardLayout>
    );
}
