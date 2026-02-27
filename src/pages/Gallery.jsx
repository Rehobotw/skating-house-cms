import DashboardLayout from "../components/layout/DashboardLayout";
import PageHeader from "../components/layout/PageHeader";
import GallerySection from "../components/sections/GallerySection";

export default function Gallery() {
    return (
        <DashboardLayout>
            <PageHeader
                title="Gallery"
                subtitle="Manage Gallery"
            />
            <GallerySection />
        </DashboardLayout>
    );
}
