import { PageBanner } from "@/components/layouts/page-banner";
import { ProgramsGridSection } from "../components/programs-grid-section";
import { ProgramsFeaturesSection } from "../components/programs-features-section";
import { Footer } from "@/components/layouts/footer";

function ProgramsView() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <PageBanner
        title="Courses"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Courses" },
        ]}
        backgroundImage="/images/slider/slider_quran_study_1770137489630.png"
        height="md"
      />
      <ProgramsGridSection />
      <ProgramsFeaturesSection />
      <Footer />
    </div>
  );
}

export default ProgramsView;
