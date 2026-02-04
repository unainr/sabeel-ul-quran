"use client";

import { motion } from "motion/react";
import { GraduationCap, Video, FileText, Headphones, Trophy, Users2 } from "lucide-react";

const features = [
  {
    id: 1,
    icon: Video,
    title: "Live Interactive Classes",
    description: "Real-time sessions with expert instructors for personalized learning",
  },
  {
    id: 2,
    icon: FileText,
    title: "Comprehensive Curriculum",
    description: "Structured courses designed by Islamic scholars and educators",
  },
  {
    id: 3,
    icon: Headphones,
    title: "24/7 Support",
    description: "Get help whenever you need it from our dedicated support team",
  },
  {
    id: 4,
    icon: Trophy,
    title: "Certification",
    description: "Earn recognized certificates upon successful program completion",
  },
  {
    id: 5,
    icon: Users2,
    title: "Community Learning",
    description: "Connect with fellow students in a supportive learning environment",
  },
  {
    id: 6,
    icon: GraduationCap,
    title: "Expert Instructors",
    description: "Learn from qualified scholars with years of teaching experience",
  },
];

export function ProgramsFeaturesSection() {
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
            Why Choose Our Programs?
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Experience excellence in Islamic education with our comprehensive approach
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-card border border-border rounded-lg p-8 hover:border-gold-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/10 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500/20 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-gold-500" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-bold text-foreground font-serif mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
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
