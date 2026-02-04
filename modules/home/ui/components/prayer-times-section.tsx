"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export function PrayerTimesSection() {
  const prayers = [
    { name: "Fajr", time: "4:37 AM" },
    { name: "Sunrise", time: "5:52 AM" },
    { name: "Zuhr", time: "12:10 PM" },
    { name: "Asr", time: "3:28 PM" },
    { name: "Maghrib", time: "6:20 PM" },
    { name: "Isha", time: "7:32 PM" },
  ];

  return (
    <section className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        {/* Left: Prayer Times - Gold/Orange Background */}
        <div className="relative bg-gradient-to-br from-[#d4a853] to-[#c89a3f] py-20 px-12 md:px-16 flex flex-col justify-center items-center text-center">
          
          <div className="relative z-10 w-full max-w-sm">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-white/90 font-serif text-3xl mb-6"
            >
              الله
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold text-white mb-3 font-serif uppercase tracking-wide"
            >
              PRAYER<br />TIMES
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/80 font-medium mb-12 text-lg"
            >
              Tue Feb 03 2026
            </motion.p>

            <div className="space-y-5 w-full">
              {prayers.map((prayer, index) => (
                <motion.div
                  key={prayer.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                  className="flex justify-between items-center text-white font-bold text-xl"
                >
                  <span className="text-left w-32">{prayer.name}</span>
                  <span className="text-right">{prayer.time}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Welcome Content with Mosque Background */}
        <div className="relative bg-[#f5f0e8] py-20 px-12 md:px-20 flex flex-col justify-center">
             {/* Background Mosque Image */}
             <div className="absolute right-0 top-0 bottom-0 w-full h-full opacity-20">
                <Image 
                    src="/images/slider/slider_mosque_interior_1770137472856.png" 
                    alt="Mosque Background" 
                    fill 
                    className="object-cover object-right" 
                />
             </div>

          <div className="relative z-10 max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[#d4a853] font-serif text-3xl mb-4"
            >
              الله
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-[#2d1f0f] mb-8 font-serif leading-tight uppercase"
            >
              WELCOME TO THE<br />
              ISLAMIC CENTER
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-5 text-[#6b5d4f] text-base leading-relaxed"
            >
              <p>
                The Shaha is not just a mosque for prayers rather it is a community center for all.
              </p>
              <p>
                The Center is committed to preserving an Islamic identity, building and supporting a viable Muslim community, promoting a comprehensive Islamic way of life based on the Holy Quran and the Sunnah of Prophet Muhammad.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button className="mt-10 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-6 text-base rounded-md shadow-md hover:scale-105 transition-transform">
                Read More
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
