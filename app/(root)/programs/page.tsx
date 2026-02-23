import ProgramsView from "@/modules/programs/ui/view/programs-view";
import type { Metadata } from "next";

export default function ProgramsPage() {
  return <ProgramsView />;
}


export const metadata: Metadata = {
  title: "Courses",
  description:
    "Explore our online Islamic courses — Quran recitation, Tajweed, Hifz, Arabic language, and Islamic Studies. Flexible schedules for students worldwide.",
  alternates: {
    canonical: "https://www.sabeel-ul-quran.com/",
  },
  keywords: [
    "online quran courses",
    "tajweed course online",
    "hifz program online",
    "arabic language course",
    "islamic studies course",
    "quran for beginners",
  ],
};