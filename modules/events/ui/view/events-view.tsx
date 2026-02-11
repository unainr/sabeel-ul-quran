import { PageBanner } from "@/components/layouts/page-banner";
import { EventsCalendarSection } from "../components/events-calendar-section";
import { EventsGridSection } from "../components/events-grid-section";
import { EventsFeaturesSection } from "../components/events-features-section";
import { Footer } from "@/components/layouts/footer";

function EventsView() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <PageBanner
        title="Our Events"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Events" },
        ]}
        backgroundImage="/images/slider/slider_islamic_pattern_1770137503986.png"
        height="md"
      />
      <EventsCalendarSection />
      {/* <EventsGridSection /> */}
      <EventsFeaturesSection />
      <Footer />
    </div>
  );
}

export default EventsView;
