"use client";

import { motion } from "motion/react";
import { Lightbulb, Shield, Globe, GraduationCap } from "lucide-react";

const values = [
  {
    id: 1,
    icon: Lightbulb,
    title: "Knowledge",
    description:
      "We believe in the transformative power of authentic Quranic knowledge, passed down through generations with precision and care.",
  },
  {
    id: 2,
    icon: Shield,
    title: "Integrity",
    description:
      "We uphold the highest standards of Islamic ethics and honesty in all our teachings and interactions with students.",
  },
  {
    id: 3,
    icon: Globe,
    title: "Accessibility",
    description:
      "We strive to make Quranic education accessible to everyone, regardless of location, background, or financial circumstances.",
  },
  {
    id: 4,
    icon: GraduationCap,
    title: "Excellence",
    description:
      "We are committed to excellence in teaching methodology, student support, and continuous improvement of our programs.",
  },
];

export function ValuesSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
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
            Our Core Values
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            The principles that guide our mission and shape our community
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-card border border-border rounded-lg p-6 md:p-8 hover:border-gold-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/10 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500/20 group-hover:scale-110 transition-all duration-300">
                  <value.icon className="w-8 h-8 text-gold-500" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-bold text-foreground font-serif mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>

              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gold-500/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
