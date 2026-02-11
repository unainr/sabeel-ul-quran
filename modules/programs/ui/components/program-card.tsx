"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { BookOpen, Clock, Users, Award, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_NUMBER } from "@/lib/utils/whatsapp";

interface ProgramCardProps {
  id: number;
  title: string;
  category: string;
  duration: string;
  students: number;
  level: string;
  image: string;
  description: string;
  features: string[];
  price: string;
  index?: number;
}

export function ProgramCard({
  title,
  category,
  duration,
  students,
  level,
  image,
  description,
  features,
  price,
  index = 0,
}: ProgramCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-gold-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/10 flex flex-col h-full"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-gold-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
          {category}
        </div>

        {/* Level Badge */}
        {/* <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm border border-gold-500/30">
          {level}
        </div> */}

        {/* Price */}
        {/* <div className="absolute bottom-4 left-4">
          <div className="text-gold-400 text-sm font-semibold mb-1">Starting from</div>
          <div className="text-3xl font-bold text-white">{price}</div>
        </div> */}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-foreground font-serif group-hover:text-gold-500 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm line-clamp-2">
          {description}
        </p>

        {/* Meta Information */}
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground pb-4 border-b border-border">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gold-500" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-gold-500" />
            <span>{students}+ Students</span>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-2">
          {features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <Button
          onClick={() => {
            const message = `Hi! I'm interested in enrolling in the *${title}* program. Can you provide more details about the curriculum, schedule, and enrollment process?`;
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, "_blank");
          }}
          className="w-full bg-gold-500 hover:bg-gold-600 text-black border-none font-semibold group/btn mt-auto"
        >
          Enroll via WhatsApp
          <Award className="ml-2 w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
        </Button>
      </div>
    </motion.div>
  );
}
