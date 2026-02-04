"use client";

import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram, Youtube } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/utils/whatsapp";

const contactInfo = [
  {
    id: 1,
    icon: Phone,
    title: "Phone",
    details: ["+92 3710087431"],
    link: "tel:+923710087431",
  },
  {
    id: 2,
    icon: Mail,
    title: "Email",
    details: ["sabeelulquranonline@gmail.com"],
    link: "mailto:sabeelulquranonline@gmail.com",
  },
  {
    id: 3,
    icon: MapPin,
    title: "Address",
    details: ["123 Islamic Center Drive", "City, State 12345, USA"],
    link: "#",
  },
  {
    id: 4,
    icon: Clock,
    title: "Office Hours",
    details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM"],
    link: "#",
  },
];

const socialLinks = [
  { id: 1, icon: MessageCircle, name: "WhatsApp", link: `https://wa.me/${WHATSAPP_NUMBER}`, color: "hover:text-green-500" },
  { id: 2, icon: Facebook, name: "Facebook", link: "#", color: "hover:text-blue-500" },
  { id: 3, icon: Instagram, name: "Instagram", link: "#", color: "hover:text-pink-500" },
  { id: 4, icon: Youtube, name: "YouTube", link: "#", color: "hover:text-red-500" },
];

export function ContactInfoSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground font-serif mb-4">
            Contact Information
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Multiple ways to reach us - choose what works best for you
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.id}
              href={info.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card border border-border rounded-lg p-6 hover:border-gold-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/10 hover:-translate-y-2 text-center"
            >
              {/* Icon */}
              <div className="mx-auto w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500/20 group-hover:scale-110 transition-all duration-300 mb-4">
                <info.icon className="w-8 h-8 text-gold-500" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground font-serif mb-3">
                {info.title}
              </h3>

              {/* Details */}
              <div className="space-y-1">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-sm text-muted-foreground">
                    {detail}
                  </p>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-foreground font-serif mb-6">
            Connect With Us
          </h3>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-14 h-14 rounded-full bg-card border-2 border-border flex items-center justify-center transition-all duration-300 hover:border-gold-500 hover:scale-110 ${social.color}`}
                aria-label={social.name}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
