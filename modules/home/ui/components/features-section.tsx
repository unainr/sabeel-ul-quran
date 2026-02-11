"use client";

import { Button } from "@/components/ui/button";
import { BookOpen, User, Video, Calendar, ShieldCheck, HeartHandshake } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export function FeaturesSection() {
    const courses = [
        {
            icon: BookOpen,
            title: "Qaida with tajweed",
            description: "Learn the foundational Noorani Qaida with proper Tajweed rules for accurate pronunciation.",
        },
        {
            icon: Video,
            title: "Quran with tajweed",
            description: "Master Quranic recitation with precise Tajweed application and beautiful articulation.",
        },
        {
            icon: HeartHandshake,
            title: "Quran with translation",
            description: "Understand the divine message through Quranic recitation combined with comprehensive translation.",
        },
        {
            icon: ShieldCheck,
            title: "Fiqh",
            description: "Study Islamic jurisprudence and rulings to practice your faith with knowledge and confidence.",
        },
        {
            icon: User,
            title: "Surf",
            description: "Learn Arabic grammar and morphology to deepen your understanding of the Quran's linguistic beauty.",
        },
        {
            icon: Calendar,
            title: "Namaz and duas",
            description: "Perfect your daily prayers and learn essential supplications for spiritual connection.",
        },
    ];

  return (
    <section className="py-24 bg-muted/30" id="courses">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-gold-600 font-bold uppercase tracking-widest text-sm mb-3"
          >
            Our Courses & Features
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-serif"
          >
            Comprehensive <span className="text-gold-500">Islamic Education</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            We offer a diverse range of courses designed to cater to students of all ages and levels, 
            providing a spiritual journey through knowledge.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative bg-background p-8 pb-10 rounded-xl shadow-sm border border-border/50 hover:border-gold-500/50 hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/5 rounded-bl-[100px] transition-all group-hover:bg-gold-500/10" />
                    
                    <div className="relative z-10 flex flex-col flex-1">
                        <div className="w-14 h-14 bg-gold-100 dark:bg-gold-900/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                             <course.icon className="h-7 w-7 text-gold-600 dark:text-gold-400 group-hover:text-white transition-colors" />
                        </div>
                        
                        <h3 className="text-xl font-bold mb-3 font-serif group-hover:text-gold-600 transition-colors">{course.title}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                            {course.description}
                        </p>
                        
                        <Link href="/programs" className="inline-flex items-center text-sm font-semibold text-gold-500 hover:text-gold-600 uppercase tracking-wider mt-auto">
                            Enroll Now <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </div>
                </motion.div>
            ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
             <Link href="/programs">
                <Button className="bg-black text-white hover:bg-gold-950 border border-gold-500/30 px-8 py-6 text-lg rounded-sm hover:scale-105 transition-transform">
                   View All Courses
                </Button>
             </Link>
        </motion.div>
      </div>
    </section>
  );
}
