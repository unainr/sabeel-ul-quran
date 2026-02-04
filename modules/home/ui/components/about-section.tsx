"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function AboutSection() {
  const features = [
    "Certified & Qualified Tutors",
    "Flexible Learning Schedule",
    "Interactive One-on-One Classes",
    "Comprehensive Curriculum",
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden" id="about">
        {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold-400/5 -skew-x-12 blur-3xl rounded-full translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative group"
          >
             <div className="absolute -inset-4 bg-gradient-to-r from-gold-500 to-gold-300 rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition duration-1000" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gold-500/20">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/about.png"
                  alt="Islamic Scholar Teaching"
                  fill
                  className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                 {/* Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
              </div>
              
               <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/80 backdrop-blur-md rounded-xl border-l-4 border-gold-500">
                  <p className="text-gold-400 font-serif italic text-lg">
                    "The best among you is the one who learns the Quran and teaches it."
                  </p>
               </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="lg:pl-8">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-2"
            >
              Who We Are
            </motion.h4>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-serif leading-tight"
            >
              Illuminating Hearts with the <span className="text-gold-400">Light of Quran</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg mb-8 leading-relaxed"
            >
              At Sabeel Ul Quran, we are dedicated to providing high-quality Quranic education to students worldwide. 
              Our mission is to bridge the gap between digital learning and spiritual connection, offering a platform 
              where tradition meets technology.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-gold-500 shrink-0" />
                  <span className="text-foreground/90 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Button className="bg-gold-500 hover:bg-gold-600 text-black font-semibold px-8 py-6 text-lg rounded-sm group hover:scale-105 transition-transform">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
