import { PageBanner } from "@/components/layouts/page-banner";
import { MissionVisionSection } from "../components/mission-vision-section";
import { ValuesSection } from "../components/values-section";
import { StorySection } from "../components/story-section";
import { TeamTestimonialsSection } from "../components/team-testimonials-section";
import { AboutCtaSection } from "../components/about-cta-section";
import { Footer } from "@/components/layouts/footer";

function AboutView() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <PageBanner
        title="About Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
        backgroundImage="/images/slider/slider_mosque_interior_1770137472856.png"
        height="md"
      />
      <MissionVisionSection />
      <ValuesSection />
      <StorySection />
      <TeamTestimonialsSection />
      <AboutCtaSection />
      <Footer />
    </div>
  );
}

export default AboutView;
