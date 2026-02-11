"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

export function DonationSection() {
  const goals = [
    { label: "No Age Limit", percent: 100 },
    { label: "No gender Issue", percent: 100 },
    { label: "Trial Classes", percent: 100 },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative bg-[#0a0a0a] py-24 overflow-hidden text-white min-h-[700px] flex items-center">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/slider4.jpg"
          alt="Man Reading Quran"
          fill
          className="object-cover object-center"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/50" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="max-w-3xl">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="text-[#d4a853] font-serif text-3xl mb-4">الله</div>
            <h2 className="text-5xl md:text-6xl font-bold mb-12 font-serif uppercase leading-tight">
              FEEL FREE TO <br /> JOIN
            </h2>
          </motion.div>

          {/* Circular Progress Bars with Animated Percentages */}
          <div className="flex flex-wrap gap-8 md:gap-12 mb-12 justify-start">
            {goals.map((goal, index) => (
              <motion.div
                key={goal.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-center"
              >
                <div className="relative w-32 h-32 mb-5">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="transparent" stroke="#333" strokeWidth="3" />
                    <motion.circle 
                      cx="50" 
                      cy="50" 
                      r="45" 
                      fill="transparent" 
                      stroke="#d4a853" 
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray={283}
                      initial={{ strokeDashoffset: 283 }}
                      animate={isInView ? { strokeDashoffset: 283 - (283 * goal.percent) / 100 } : {}}
                      transition={{ duration: 1.5, delay: index * 0.15, ease: "easeOut" }}
                    />
                  </svg>
                  <AnimatedCounter target={goal.percent} isInView={isInView} delay={index * 0.15} />
                </div>
                <span className="font-semibold text-base uppercase tracking-wider text-white/90 text-center">{goal.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.blockquote
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/70 italic text-lg leading-relaxed max-w-2xl"
          >
            May Allah bless you.
          </motion.blockquote>


        </div>
      </div>
    </section>
  );
}

// Animated Counter Component
function AnimatedCounter({ target, isInView, delay }: { target: number; isInView: boolean; delay: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      let start = 0;
      const duration = 1500;
      const increment = target / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, target, delay]);

  return (
    <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
      {count}%
    </span>
  );
}
