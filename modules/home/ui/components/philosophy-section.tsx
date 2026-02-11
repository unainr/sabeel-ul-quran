"use client";

import { Button } from "@/components/ui/button";
import { BookOpen, Heart, Users, HandHeart } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export function PhilosophySection() {
  const philosophies = [
    {
      icon: BookOpen,
      title: "KNOWLEDGE",
      description: "A critishahal component of every Muslims journey is knowledge.",
      color: "text-red-400",
      bgColor: "bg-red-50 dark:bg-red-950/20",
    },
    {
      icon: Heart,
      title: "SPIRITUALITY",
      description: "Ihsan was the way of our Messenger",
      color: "text-teal-400",
      bgColor: "bg-teal-50 dark:bg-teal-950/20",
    },
    {
      icon: Users,
      title: "COMMUNITY",
      description: "We pray together, we break our fast together, Islam is community",
      color: "text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
    },
    {
      icon: HandHeart,
      title: "SERVICE",
      description: "Being in service to others is the duty of every Muslim",
      color: "text-gold-400",
      bgColor: "bg-gold-50 dark:bg-gold-950/20",
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gold-400/5 skew-x-12 blur-3xl rounded-full -translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-gold-500 font-serif text-2xl mb-4"
          >
            الله
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-serif uppercase"
          >
            OUR PHILOSOPHY
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {philosophies.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className={`w-20 h-20 ${item.bgColor} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`h-10 w-10 ${item.color}`} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif uppercase tracking-wide text-foreground group-hover:text-gold-500 transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Link href={'/about'}>
          <Button size={'lg'} className="bg-gold-500 hover:bg-gold-600 text-black font-semibold px-10 p-6 text-base rounded-sm uppercase tracking-wide hover:scale-105 transition-transform shadow-lg">
            Learn More
          </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
