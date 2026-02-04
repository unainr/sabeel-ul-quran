"use client";

import { motion } from "motion/react";
import { Calendar as CalendarIcon, Clock, MapPin } from "lucide-react";

const upcomingEvents = [
  {
    id: 1,
    date: "Feb 15",
    day: "Friday",
    time: "7:00 PM",
    title: "Tafseer of Surah Al-Baqarah",
    location: "Main Hall",
  },
  {
    id: 2,
    date: "Feb 20",
    day: "Wednesday",
    time: "2:00 PM",
    title: "Tajweed Mastery Workshop",
    location: "Learning Center",
  },
  {
    id: 3,
    date: "Feb 25",
    day: "Monday",
    time: "6:30 PM",
    title: "Community Iftar Gathering",
    location: "Community Center",
  },
  {
    id: 4,
    date: "Feb 28",
    day: "Thursday",
    time: "10:00 AM",
    title: "Charity Drive for Orphans",
    location: "Multiple Locations",
  },
];

export function EventsCalendarSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-gold-950/10 via-background to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground font-serif mb-4">
            Event Calendar
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Mark your calendar for these upcoming spiritual gatherings
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Calendar Timeline */}
        <div className="max-w-4xl mx-auto">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex gap-6 md:gap-8 mb-8 group"
            >
              {/* Date Badge */}
              <div className="flex-shrink-0 w-24 md:w-32">
                <div className="bg-card border-2 border-gold-500/30 rounded-lg p-4 text-center group-hover:border-gold-500 group-hover:shadow-lg group-hover:shadow-gold-500/20 transition-all duration-300">
                  <div className="text-gold-500 text-sm font-semibold uppercase mb-1">
                    {event.day}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground">
                    {event.date.split(" ")[0]}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase">
                    {event.date.split(" ")[1]}
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div className="flex-1 bg-card border border-border rounded-lg p-6 group-hover:border-gold-500/50 group-hover:shadow-xl group-hover:shadow-gold-500/10 transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-bold text-foreground font-serif mb-3 group-hover:text-gold-500 transition-colors">
                  {event.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gold-500" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gold-500" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>

              {/* Connector Line */}
              {index < upcomingEvents.length - 1 && (
                <div className="absolute left-12 md:left-16 top-24 w-0.5 h-8 bg-gradient-to-b from-gold-500/50 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Want to stay updated on all our events?
          </p>
          <button className="px-8 py-3 bg-gold-500 hover:bg-gold-600 text-black font-semibold rounded-sm transition-all hover:scale-105">
            Subscribe to Calendar
          </button>
        </motion.div> */}
      </div>
    </section>
  );
}
