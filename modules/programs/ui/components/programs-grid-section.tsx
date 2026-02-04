"use client";

import { motion } from "motion/react";
import { ProgramCard } from "./program-card";
import { useState } from "react";

const categories = ["All Programs", "Quran Studies", "Arabic Language", "Islamic Studies"];

const programs = [
  {
    id: 1,
    title: "Quran Recitation with Tajweed",
    category: "Quran Studies",
    duration: "6 Months",
    students: 500,
    level: "Beginner to Advanced",
    image: "/images/slider/slider_quran_study_1770137489630.png",
    description: "Master the art of Quranic recitation with proper Tajweed rules under expert guidance.",
    features: [
      "One-on-one sessions with certified Qaris",
      "Flexible scheduling to fit your routine",
      "Progress tracking and regular assessments",
      "Certificate upon completion",
    ],
    price: "PKR 5,000/mo",
  },
  {
    id: 2,
    title: "Quran Memorization (Hifz)",
    category: "Quran Studies",
    duration: "2-4 Years",
    students: 300,
    level: "All Levels",
    image: "/images/slider/slider_mosque_interior_1770137472856.png",
    description: "Embark on the blessed journey of memorizing the entire Quran with structured guidance.",
    features: [
      "Proven memorization techniques",
      "Daily revision schedules",
      "Experienced Hafiz instructors",
      "Small group or individual classes",
    ],
    price: "PKR 8,000/mo",
  },
  {
    id: 3,
    title: "Arabic Language Fundamentals",
    category: "Arabic Language",
    duration: "4 Months",
    students: 250,
    level: "Beginner",
    image: "/images/slider/slider_islamic_pattern_1770137503986.png",
    description: "Learn Arabic from scratch to understand the Quran in its original language.",
    features: [
      "Interactive lessons with native speakers",
      "Reading, writing, and speaking practice",
      "Quranic Arabic focus",
      "Digital learning materials included",
    ],
    price: "PKR 4,500/mo",
  },
  {
    id: 4,
    title: "Islamic Studies Comprehensive",
    category: "Islamic Studies",
    duration: "12 Months",
    students: 400,
    level: "Intermediate",
    image: "/images/pro.jpg",
    description: "Deep dive into Islamic theology, jurisprudence, and history with scholarly expertise.",
    features: [
      "Aqeedah, Fiqh, and Seerah modules",
      "Live Q&A sessions with scholars",
      "Access to extensive digital library",
      "Community discussion forums",
    ],
    price: "PKR 6,000/mo",
  },
  {
    id: 5,
    title: "Tafseer & Quranic Sciences",
    category: "Quran Studies",
    duration: "8 Months",
    students: 180,
    level: "Advanced",
    image: "/images/pro1.jpg",
    description: "Explore the profound meanings of the Quran through classical and contemporary Tafseer.",
    features: [
      "Study of major Tafseer works",
      "Understanding Asbab al-Nuzul",
      "Thematic Quranic studies",
      "Research methodology training",
    ],
    price: "PKR 7,000/mo",
  },
  {
    id: 6,
    title: "Kids Quran Program",
    category: "Quran Studies",
    duration: "Ongoing",
    students: 600,
    level: "Children (5-12)",
    image: "/images/kids.jpg",
    description: "Fun and engaging Quran learning program designed specifically for children.",
    features: [
      "Age-appropriate teaching methods",
      "Interactive games and activities",
      "Patient and caring instructors",
      "Parent progress reports",
    ],
    price: "PKR 4,000/mo",
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
            Our Programs
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Comprehensive Islamic education programs tailored to your learning journey
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
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
        </motion.div>

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
