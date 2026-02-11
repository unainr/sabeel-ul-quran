"use client";

import { Heart, Users } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    id: 1,
     icon: Users,
    title: "Eid-Ul-Adha",
      description: "Eid-ul-Adha, the day starts with communal prayers. The focus is heavily on charity, community welfare, and sharing food to ensure no one goes hungry.",
  },
  {
    id: 2,
      icon: Heart,
    title: "Eid-Ul-Fitr",
      description: "Celebrated at the end of Ramadan, the holy month of fasting. It falls on the first day of Shawwal, the 10th month of the Islamic lunar calendar",
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
            Why Attend Our Events?
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Enrich your spiritual journey and connect with our vibrant community
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center space-y-4"
            >
              {/* Icon */}
              <div className="mx-auto w-20 h-20 rounded-full bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                <feature.icon className="w-10 h-10 text-gold-500" />
              </div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-bold text-foreground font-serif">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
