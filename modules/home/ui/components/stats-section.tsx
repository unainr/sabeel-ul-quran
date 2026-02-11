"use client";

import Image from "next/image";
import { Users, BookOpen, GraduationCap, Globe } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

export function StatsSection() {
  const stats = [
    {
      id: 1,
      icon: Users,
      value: 5000,
      suffix: "+",
      label: "Active Students",
    },
    {
      id: 2,
      icon: GraduationCap,
      value: 100,
      suffix: "+",
      label: "Certified Tutors",
    },
    {
      id: 3,
      icon: BookOpen,
      value: 10,
      suffix: "+",
      label: "Courses Available",
    },
    {
      id: 4,
      icon: Globe,
      value: 50,
      suffix: "+",
      label: "Countries Reached",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative py-24 bg-black overflow-hidden">
      {/* Background Image with Parallax-like effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/stats-bg.png"
          alt="Islamic Pattern Background"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col items-center group"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.2, type: "spring" }}
                className="mb-4 p-4 rounded-full bg-gold-500/10 border border-gold-500/20 group-hover:bg-gold-500/20 group-hover:border-gold-500 transition-all duration-300 transform group-hover:-translate-y-2"
              >
                <stat.icon className="h-8 w-8 text-gold-400 group-hover:text-gold-300" />
              </motion.div>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-2 font-serif">
                <AnimatedStatCounter target={stat.value} suffix={stat.suffix} isInView={isInView} delay={index * 0.15 + 0.3} />
              </h3>
              <p className="text-gold-200 uppercase tracking-widest text-xs font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Animated Stat Counter Component
function AnimatedStatCounter({ target, suffix, isInView, delay }: { target: number; suffix: string; isInView: boolean; delay: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      let start = 0;
      const duration = 2000;
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

  return <>{count.toLocaleString()}{suffix}</>;
}
