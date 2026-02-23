import EventsView from "@/modules/events/ui/view/events-view";
import type { Metadata } from "next";

export default function EventsPage() {
  return <EventsView />;
}

export const metadata: Metadata = {
  title: "Events",
  description:
    "Stay updated with Sabeel Ul Quran's upcoming online Islamic events, webinars, Quran competitions, and special programs for the Muslim community worldwide.",
  alternates: {
    canonical: "https://www.sabeel-ul-quran.com/",
  },
};