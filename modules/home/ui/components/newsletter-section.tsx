"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "motion/react";

export function NewsletterSection() {
  return (
    <section className="relative w-full py-28 overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/slider3.jpg"
          alt="Newsletter Background"
          fill
          className="object-cover" 
        />
        <div className="absolute inset-0 bg-black/85" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#d4a853] font-serif text-3xl mb-6"
        >
          الله
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-7xl font-bold text-white mb-3 font-serif uppercase tracking-widest"
        >
          NEWSLETTER
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/50 text-base mb-12 italic"
        >
          Subscribe to our mailing list
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto shadow-2xl overflow-hidden"
        >
          <Input 
            type="email" 
            placeholder="Your Email" 
            className="h-14 bg-[#1a1a1a] border-none text-white placeholder:text-white/30 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none px-6 text-base flex-1"
          />
          <Button className="h-14 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-10 text-base rounded-none uppercase tracking-wide whitespace-nowrap hover:scale-105 transition-transform">
            Sign Up
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
