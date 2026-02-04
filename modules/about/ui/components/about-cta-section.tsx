"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function AboutCtaSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-black via-gold-950/20 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(212, 175, 55) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          {/* Title */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white font-serif">
              Begin Your Quranic Journey Today
            </h2>
            <p className="text-gold-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Join thousands of students worldwide who have transformed their lives through authentic Quranic education
            </p>
          </div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            
            <Link href="/contact">  
            <Button
              size="lg"
              variant="outline"
              className="border-gold-500 text-gold-400 hover:bg-gold-500/10 hover:text-gold-300 px-8 py-6 text-lg rounded-sm hover:scale-105 transition-transform"
              >
              Contact Us
            </Button>
              </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 pt-8 text-gold-400/80 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gold-500 rounded-full" />
              <span>Certified Tutors</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gold-500 rounded-full" />
              <span>Flexible Schedule</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gold-500 rounded-full" />
              <span>Free Trial Available</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
    </section>
  );
}
