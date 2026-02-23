import ContactView from "@/modules/contact/ui/view/contact-view";
import type { Metadata } from "next";

export default function ContactPage() {
  return <ContactView />;
}

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Sabeel Ul Quran. We're available worldwide to answer your questions about our online Quran and Islamic Studies courses.",
  alternates: {
    canonical: "https://www.sabeel-ul-quran.com/",
  },
};