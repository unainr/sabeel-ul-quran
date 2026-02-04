"use client";

import { motion } from "motion/react";
import { BookOpen, Heart, Users, Target } from "lucide-react";

const missionData = {
  title: "Our Mission & Vision",
  mission: {
    title: "Our Mission",
    description:
      "To provide accessible, high-quality Quranic education that illuminates hearts and minds, fostering a deep connection with the divine words of Allah. We strive to make learning the Quran a transformative spiritual journey for every student.",
    icon: Target,
  },
  vision: {
    title: "Our Vision",
    description:
      "To become a global beacon of Quranic knowledge, where students from all walks of life can embark on their spiritual journey with confidence, guided by expert tutors and a supportive community.",
    icon: BookOpen,
  },
};

export function MissionVisionSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
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
            {missionData.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" />
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative bg-card border border-border rounded-lg p-8 md:p-10 hover:border-gold-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/10"
          >
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                <missionData.mission.icon className="w-10 h-10 text-gold-500" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground font-serif">
                {missionData.mission.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                {missionData.mission.description}
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group relative bg-card border border-border rounded-lg p-8 md:p-10 hover:border-gold-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/10"
          >
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                <missionData.vision.icon className="w-10 h-10 text-gold-500" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground font-serif">
                {missionData.vision.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                {missionData.vision.description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
