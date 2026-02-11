"use client";

import { motion } from "motion/react";
import { EventCard } from "./event-card";
import { useState } from "react";

const categories = ["All", "Lectures", "Workshops", "Community", "Charity"];

const events = [
  {
    id: 1,
    title: "Shab-e-Baraat",
    date: "15 Shaban",
    time: "After Maghrib - Fajr",
    location: "Main Hall & Online",
    category: "Lectures",
    image: "/images/slider/slider_quran_study_1770137489630.png",
    attendees: 200,
    description: "The Night of Forgiveness - Special prayers, Quran recitation, and spiritual gathering.",
  },
  {
    id: 2,
    title: "Shab-e-Miraj",
    date: "27 Rajab",
    time: "After Maghrib - Fajr",
    location: "Main Hall & Online",
    category: "Lectures",
    image: "/images/slider/slider_mosque_interior_1770137472856.png",
    attendees: 180,
    description: "Commemorating the miraculous Night Journey of Prophet Muhammad (PBUH).",
  },
  {
    id: 3,
    title: "Waqaya Qarbala",
    date: "10 Muharram",
    time: "6:00 PM - 9:00 PM",
    location: "Community Center",
    category: "Community",
    image: "/images/slider/slider_islamic_pattern_1770137503986.png",
    attendees: 250,
    description: "Remembering the sacrifice of Imam Hussain (RA) and the martyrs of Karbala.",
  },
  {
    id: 4,
    title: "Rabi-ul-awal",
    date: "12 Rabi-ul-Awwal",
    time: "7:00 PM - 10:00 PM",
    location: "Main Hall & Online",
    category: "Lectures",
    image: "/images/image2.jpg",
    attendees: 300,
    description: "Celebrating the birth of Prophet Muhammad (PBUH) with Seerah lectures and Nasheed.",
  },
  {
    id: 5,
    title: "Eid-Ul-Adha",
    date: "10 Dhul Hijjah",
    time: "8:00 AM - 12:00 PM",
    location: "Eid Ground",
    category: "Community",
    image: "/images/banner/about-banner.jpg",
    attendees: 500,
    description: "Eid prayers, Qurbani arrangements, and community celebration of sacrifice.",
  },
  {
    id: 6,
    title: "Eid-Ul-Fitr",
    date: "1 Shawwal",
    time: "8:00 AM - 12:00 PM",
    location: "Eid Ground",
    category: "Community",
    image: "/images/slider3.jpg",
    attendees: 500,
    description: "Celebrating the end of Ramadan with Eid prayers and community festivities.",
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
