"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Users, Award, Heart, Star } from "lucide-react";

const team = [
  {
    id: 1,
    name: "Sheikh Ahmed Al-Mansoor",
    role: "Chief Islamic Scholar",
    image: "/images/slider/slider_quran_study_1770137489630.png",
    description: "25+ years of Quranic teaching experience",
  },
  {
    id: 2,
    name: "Dr. Fatima Hassan",
    role: "Director of Education",
    image: "/images/slider/slider_mosque_interior_1770137472856.png",
    description: "PhD in Islamic Studies from Al-Azhar",
  },
  {
    id: 3,
    name: "Ustadh Ibrahim Khan",
    role: "Head of Tajweed Department",
    image: "/images/slider/slider_islamic_pattern_1770137503986.png",
    description: "Expert in Quranic recitation and Tajweed",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Aisha Rahman",
    role: "Student",
    content: "The personalized attention and expert guidance I received transformed my Quranic journey. Alhamdulillah!",
    rating: 5,
  },
  {
    id: 2,
    name: "Mohammed Ali",
    role: "Parent",
    content: "My children have developed a deep connection with the Quran. The tutors are patient and knowledgeable.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah Ahmed",
    role: "Student",
    content: "Flexible scheduling and professional teaching made it easy to balance my studies with Quranic education.",
    rating: 5,
  },
];

export function TeamTestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground font-serif mb-4">
            Meet Our Scholars
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Learn from experienced Islamic scholars dedicated to your spiritual growth
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-gold-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/10"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-foreground font-serif mb-2">
                  {member.name}
                </h3>
                <p className="text-gold-500 font-semibold mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 mt-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground font-serif mb-4">
            What Our Students Say
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Real experiences from our community of learners
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-card border border-border rounded-lg p-8 hover:border-gold-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/10"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-gold-500/20 text-6xl font-serif">"</div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                {testimonial.content}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-gold-500" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
