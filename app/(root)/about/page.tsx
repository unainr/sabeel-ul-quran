import AboutView from "@/modules/about/ui/view/about-view";
import type { Metadata } from "next";

export default function AboutPage() {
  return <AboutView />;
}

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Sabeel Ul Quran — our mission, vision, and dedicated team of expert Islamic tutors helping Muslims around the world connect with the Quran.",
  alternates: {
    canonical: "https://www.sabeel-ul-quran.com/",
  },
};