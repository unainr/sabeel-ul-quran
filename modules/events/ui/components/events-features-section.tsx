"use client";

import { motion } from "motion/react";

const features = [
  {
    id: 1,
    title: "Eid-Ul-Adha",
  },
  {
    id: 2,
    title: "Eid-Ul-Fitr",
  },
];

export function EventsFeaturesSection() {
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
            More About Islamic Occasions
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Enrich your spiritual journey and connect with our vibrant community
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center bg-gradient-to-br from-card to-card/50 border-2 border-gold-500/30 rounded-xl p-12 hover:border-gold-500 hover:shadow-2xl hover:shadow-gold-500/20 transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-gold-500 font-serif">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
