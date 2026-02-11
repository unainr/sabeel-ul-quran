"use client";

import { motion } from "motion/react";
import { ProgramCard } from "./program-card";
import { useState } from "react";

const categories = ["All Programs", "Quran Studies", "Arabic Language", "Islamic Studies"];

const programs = [
  {
    id: 1,
    title: "Qaida with tajweed",
    category: "Quran Studies",
    duration: "3-4 Months",
    students: 450,
    level: "Beginner",
    image: "/images/slider/slider_quran_study_1770137489630.png",
    description: "Learn the foundational Noorani Qaida with proper Tajweed rules for accurate pronunciation and recitation.",
    features: [
      "Step-by-step learning of Arabic alphabets",
      "Proper pronunciation with Tajweed basics",
      "Interactive one-on-one sessions",
      "Certificate upon completion",
    ],
    price: "PKR 3,500/mo",
  },
  {
    id: 2,
    title: "Quran with tajweed",
    category: "Quran Studies",
    duration: "6-8 Months",
    students: 520,
    level: "Beginner to Advanced",
    image: "/images/slider/slider_mosque_interior_1770137472856.png",
    description: "Master Quranic recitation with precise Tajweed application and beautiful articulation under expert guidance.",
    features: [
      "One-on-one sessions with certified Qaris",
      "Complete Tajweed rules implementation",
      "Progress tracking and assessments",
      "Flexible scheduling options",
    ],
    price: "PKR 5,000/mo",
  },
  {
    id: 3,
    title: "Quran with translation",
    category: "Quran Studies",
    duration: "8-10 Months",
    students: 380,
    level: "Intermediate",
    image: "/images/slider/slider_islamic_pattern_1770137503986.png",
    description: "Understand the divine message through Quranic recitation combined with comprehensive translation and meanings.",
    features: [
      "Word-by-word translation study",
      "Understanding context and meanings",
      "Tafseer basics included",
      "Interactive discussion sessions",
    ],
    price: "PKR 6,000/mo",
  },
  {
    id: 4,
    title: "Fiqh",
    category: "Islamic Studies",
    duration: "6 Months",
    students: 310,
    level: "Intermediate",
    image: "/images/pro.jpg",
    description: "Study Islamic jurisprudence and rulings to practice your faith with knowledge and confidence in daily life.",
    features: [
      "Comprehensive Fiqh principles",
      "Practical rulings for daily life",
      "Comparative Fiqh studies",
      "Q&A sessions with scholars",
    ],
    price: "PKR 5,500/mo",
  },
  {
    id: 5,
    title: "Surf (Arabic Grammar)",
    category: "Arabic Language",
    duration: "5 Months",
    students: 280,
    level: "Intermediate to Advanced",
    image: "/images/pro1.jpg",
    description: "Learn Arabic grammar and morphology to deepen your understanding of the Quran's linguistic beauty and structure.",
    features: [
      "Classical Arabic grammar rules",
      "Morphology and word patterns",
      "Quranic Arabic application",
      "Practice exercises and tests",
    ],
    price: "PKR 4,800/mo",
  },
  {
    id: 6,
    title: "Namaz and duas",
    category: "Islamic Studies",
    duration: "2-3 Months",
    students: 600,
    level: "All Levels",
    image: "/images/kids.jpg",
    description: "Perfect your daily prayers and learn essential supplications for spiritual connection with Allah.",
    features: [
      "Complete Salah with proper method",
      "Daily duas and supplications",
      "Sunnah prayers included",
      "Practical demonstration sessions",
    ],
    price: "PKR 3,000/mo",
  },
  {
    id: 7,
    title: "Stories of prophets & Islamic History",
    category: "Islamic Studies",
    duration: "7 Months",
    students: 420,
    level: "All Levels",
    image: "/images/banner/about-banner.jpg",
    description: "Explore inspiring stories of prophets and comprehensive Islamic history through engaging lecture series.",
    features: [
      "Stories of all 25 prophets",
      "Islamic history timeline",
      "Lessons and morals from Seerah",
      "Interactive storytelling sessions",
    ],
    price: "PKR 4,500/mo",
  },
  {
    id: 8,
    title: "Information of deen e islam",
    category: "Islamic Studies",
    duration: "4 Months",
    students: 350,
    level: "Beginner",
    image: "/images/q2.png",
    description: "Comprehensive introduction to Islamic faith, covering fundamental beliefs, practices, and essential knowledge.",
    features: [
      "Pillars of Islam and Iman",
      "Basic Islamic knowledge",
      "Halal and Haram guidelines",
      "Islamic etiquette and manners",
    ],
    price: "PKR 3,800/mo",
  },
  {
    id: 9,
    title: "Hifz e quran",
    category: "Quran Studies",
    duration: "2-4 Years",
    students: 290,
    level: "All Levels",
    image: "/images/q3.avif",
    description: "Embark on the blessed journey of memorizing the entire Quran with structured guidance and proven techniques.",
    features: [
      "Proven memorization techniques",
      "Daily revision schedules",
      "Experienced Hafiz instructors",
      "Individual attention and tracking",
    ],
    price: "PKR 8,000/mo",
  },
  {
    id: 10,
    title: "Hadith",
    category: "Islamic Studies",
    duration: "6 Months",
    students: 260,
    level: "Intermediate",
    image: "/images/q4.jpg",
    description: "Study authentic Hadith collections and understand the teachings and traditions of Prophet Muhammad (PBUH).",
    features: [
      "Study of Sahih Bukhari & Muslim",
      "Hadith sciences and terminology",
      "Authentication methods",
      "Practical application in life",
    ],
    price: "PKR 5,200/mo",
  },
  {
    id: 11,
    title: "Seerat",
    category: "Islamic Studies",
    duration: "5 Months",
    students: 390,
    level: "All Levels",
    image: "/images/q5.jpg",
    description: "Explore the blessed life of Prophet Muhammad (PBUH) and learn from his exemplary character and teachings.",
    features: [
      "Complete biography of Prophet (PBUH)",
      "Lessons from his life",
      "Character development focus",
      "Historical context and events",
    ],
    price: "PKR 4,200/mo",
  },
  {
    id: 12,
    title: "Tafseer",
    category: "Quran Studies",
    duration: "10-12 Months",
    students: 220,
    level: "Advanced",
    image: "/images/q6.jpg",
    description: "Explore the profound meanings of the Quran through classical and contemporary Tafseer with scholarly expertise.",
    features: [
      "Study of major Tafseer works",
      "Understanding Asbab al-Nuzul",
      "Thematic Quranic studies",
      "Research methodology training",
    ],
    price: "PKR 7,500/mo",
  },
];

export function ProgramsGridSection() {
  const [activeCategory, setActiveCategory] = useState("All Programs");

  const filteredPrograms = activeCategory === "All Programs" 
    ? programs 
    : programs.filter(program => program.category === activeCategory);

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
            Our Courses
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Comprehensive Islamic education programs tailored to your learning journey
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Category Filter */}
        {/* <motion.div
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
        </motion.div> */}

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredPrograms.map((program, index) => (
            <ProgramCard key={program.id} {...program} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredPrograms.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-muted-foreground text-lg">
              No programs found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
