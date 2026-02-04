"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_NUMBER } from "@/lib/utils/whatsapp";

interface EventCardProps {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  image: string;
  attendees?: number;
  description: string;
  index?: number;
}

export function EventCard({
  title,
  date,
  time,
  location,
  category,
  image,
  attendees,
  description,
  index = 0,
}: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-gold-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/10"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-gold-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
          {category}
        </div>

        {/* Date Badge */}
        <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-center border border-gold-500/30">
          <div className="text-2xl font-bold">{date.split(" ")[0]}</div>
          <div className="text-xs uppercase">{date.split(" ")[1]}</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-foreground font-serif group-hover:text-gold-500 transition-colors line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm line-clamp-2">
          {description}
        </p>

        {/* Meta Information */}
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gold-500" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gold-500" />
            <span>{location}</span>
          </div>
          {attendees && (
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-gold-500" />
              <span>{attendees} Attendees</span>
            </div>
          )}
        </div>

        {/* Action Button */}
        <Button
          onClick={() => {
            const message = `Hi! I'd like to learn more about the *${title}* event on ${date}. Can you provide registration details?`;
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, "_blank");
          }}
          className="w-full bg-gold-500 hover:bg-gold-600 text-black border-none font-semibold group/btn"
        >
          Register via WhatsApp
          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </div>
    </motion.div>
  );
}
