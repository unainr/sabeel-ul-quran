import { HeroSection } from "../components/hero-section";
import { AboutSection } from "../components/about-section";
import { PhilosophySection } from "../components/philosophy-section";
import { FeaturesSection } from "../components/features-section";
import { PrayerTimesSection } from "../components/prayer-times-section";
import { DonationSection } from "../components/donation-section";
import { StatsSection } from "../components/stats-section";
import { NewsletterSection } from "../components/newsletter-section";
import { Footer } from "@/components/layouts/footer";

function HomeView() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <HeroSection />
      <AboutSection />
      <PhilosophySection />
      <FeaturesSection />
      <PrayerTimesSection />
      <DonationSection />
      <StatsSection />
      <NewsletterSection />
      <Footer />
    </div>
  )
}

export default HomeView