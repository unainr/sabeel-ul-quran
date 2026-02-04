"use client";

import { motion } from "motion/react";
import { EventCard } from "./event-card";
import { useState } from "react";

const categories = ["All", "Lectures", "Workshops", "Community", "Charity"];

const events = [
  {
    id: 1,
    title: "Tafseer of Surah Al-Baqarah",
    date: "15 Feb",
    time: "7:00 PM - 9:00 PM",
    location: "Main Hall & Online",
    category: "Lectures",
    image: "/images/slider/slider_quran_study_1770137489630.png",
    attendees: 150,
    description: "Deep dive into the meanings and lessons of Surah Al-Baqarah with Sheikh Ahmed Al-Mansoor.",
  },
  {
    id: 2,
    title: "Tajweed Mastery Workshop",
    date: "20 Feb",
    time: "2:00 PM - 5:00 PM",
    location: "Learning Center",
    category: "Workshops",
    image: "/images/slider/slider_mosque_interior_1770137472856.png",
    attendees: 45,
    description: "Hands-on workshop to perfect your Quranic recitation with expert guidance on Tajweed rules.",
  },
  {
    id: 3,
    title: "Community Iftar Gathering",
    date: "25 Feb",
    time: "6:30 PM - 8:30 PM",
    location: "Community Center",
    category: "Community",
    image: "/images/slider/slider_islamic_pattern_1770137503986.png",
    attendees: 200,
    description: "Join us for a blessed Iftar meal and strengthen bonds within our community.",
  },
  {
    id: 4,
    title: "Charity Drive for Orphans",
    date: "28 Feb",
    time: "10:00 AM - 4:00 PM",
    location: "Multiple Locations",
    category: "Charity",
    image: "/images/image2.jpg",
    attendees: 80,
    description: "Participate in our charity initiative to support orphans and underprivileged children.",
  },
  {
    id: 5,
    title: "Islamic History Lecture Series",
    date: "5 Mar",
    time: "6:00 PM - 8:00 PM",
    location: "Auditorium & Online",
    category: "Lectures",
    image: "/images/banner/about-banner.jpg",
    attendees: 120,
    description: "Explore the rich history of Islam and learn from the lives of the righteous predecessors.",
  },
  {
    id: 6,
    title: "Arabic Language Basics",
    date: "10 Mar",
    time: "3:00 PM - 6:00 PM",
    location: "Classroom 101",
    category: "Workshops",
    image: "/images/slider3.jpg",
    attendees: 35,
    description: "Beginner-friendly workshop to learn Arabic fundamentals for better Quran understanding.",
  },
];

export function EventsGridSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredEvents = activeCategory === "All" 
    ? events 
    : events.filter(event => event.category === activeCategory);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground font-serif mb-4">
            Upcoming Events
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Join us for inspiring lectures, workshops, and community gatherings
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gold-500 text-black shadow-lg shadow-gold-500/30"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredEvents.map((event, index) => (
            <EventCard key={event.id} {...event} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-muted-foreground text-lg">
              No events found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
