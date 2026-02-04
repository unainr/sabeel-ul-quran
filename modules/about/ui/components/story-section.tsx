"use client";

import { motion } from "motion/react";
import Image from "next/image";

const story = {
  title: "Our Story",
  subtitle: "A Journey of Faith and Knowledge",
  content: [
    "Sabeel Ul Quran was founded with a simple yet profound vision: to make authentic Quranic education accessible to Muslims worldwide. What began as a small initiative has grown into a thriving community of learners and scholars.",
    "Our journey started when a group of dedicated Islamic scholars recognized the need for quality online Quranic education that combines traditional teaching methods with modern technology. Today, we serve thousands of students across the globe.",
    "Through dedication, innovation, and unwavering commitment to Islamic principles, we continue to expand our reach while maintaining the highest standards of teaching excellence.",
  ],
  stats: [
    { number: "10,000+", label: "Students Taught" },
    { number: "50+", label: "Expert Tutors" },
    { number: "100+", label: "Countries Reached" },
    { number: "15+", label: "Years Experience" },
  ],
};

export function StorySection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center max-w-7xl mx-auto">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <p className="text-gold-500 font-semibold text-sm md:text-base uppercase tracking-wider mb-2">
                {story.subtitle}
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground font-serif">
                {story.title}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-transparent mt-4" />
            </div>

            <div className="space-y-4">
              {story.content.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-muted-foreground leading-relaxed text-base md:text-lg"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              {story.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-center p-4 bg-muted/30 rounded-lg border border-border hover:border-gold-500/50 transition-colors"
                >
                  <div className="text-2xl md:text-3xl font-bold text-gold-500 font-serif mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/about.png"
                alt="Our Story"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gold-500/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
