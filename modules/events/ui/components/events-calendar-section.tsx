"use client";

import { motion } from "motion/react";
import { Calendar as CalendarIcon, Clock, MapPin } from "lucide-react";

const upcomingEvents = [
  {
    id: 1,
    date: "15 Shaban",
    day: "Islamic",
    time: "After Maghrib",
    title: "Shab-e-Baraat",
    location: "Main Hall",
  },
  {
    id: 2,
    date: "27 Rajab",
    day: "Islamic",
    time: "After Maghrib",
    title: "Shab-e-Miraj",
    location: "Main Hall",
  },
  {
    id: 3,
    date: "10 Muharram",
    day: "Islamic",
    time: "6:00 PM",
    title: "Waqaya Qarbala",
    location: "Community Center",
  },
  {
    id: 4,
    date: "12 Rabi-ul-Awwal",
    day: "Islamic",
    time: "7:00 PM",
    title: "Rabi-ul-awal",
    location: "Main Hall",
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
              className="relative mb-6 group"
            >
              {/* Event Card */}
              <div className="bg-gradient-to-br from-card to-card/50 border-2 border-gold-500/30 rounded-xl p-8 md:p-10 group-hover:border-gold-500 group-hover:shadow-2xl group-hover:shadow-gold-500/20 transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-gold-500 font-serif group-hover:text-gold-400 transition-colors">
                    {event.title}
                  </h3>
                  <div className="text-lg md:text-xl font-semibold text-muted-foreground">
                    {event.date}
                  </div>
                </div>
              </div>

              {/* Connector Line */}
              {index < upcomingEvents.length - 1 && (
                <div className="flex justify-center my-4">
                  <div className="w-0.5 h-6 bg-gradient-to-b from-gold-500/50 to-transparent" />
                </div>
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
