"use client";

import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Courses", href: "/programs" },
    { label: "Tutors", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const courses = [
    { label: "Qaida with tajweed", href: "/programs" },
    { label: "Quran with tajweed", href: "/programs" },
    { label: "Hifz e quran", href: "/programs" },
    { label: "Fiqh", href: "/programs" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/1QAH77RbXT/", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/sabeelulquranacademy?igsh=NnkxNG5pMjVxMXA1", label: "Instagram" },
    { icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ), href: "https://www.tiktok.com/@sabeelulquran.aca?_t=ZS-90cmmDyXZpJ&_r=1", label: "TikTok" },
  ];

  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold font-serif mb-4 text-gold-400">Sabeel Ul Quran</h3>
            <p className="text-white/60 leading-relaxed mb-6">
              Dedicated to providing high-quality Quranic education to students worldwide through professional tutors and personalized learning.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-gold-500 rounded-full flex items-center justify-center transition-colors"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold-400 transition-colors inline-flex items-center group"
                  >
                    <span className="mr-2 group-hover:translate-x-1 transition-transform">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Our Courses</h4>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index}>
                  <Link
                    href={course.href}
                    className="text-white/60 hover:text-gold-400 transition-colors inline-flex items-center group"
                  >
                    <span className="mr-2 group-hover:translate-x-1 transition-transform">→</span>
                    {course.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60">
                <MapPin className="h-5 w-5 text-gold-400 shrink-0 mt-1" />
                <span>Plot 58 F,Block 2,Ground Floor,PECHS,Karachi</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Phone className="h-5 w-5 text-gold-400 shrink-0" />
                <a href="tel:+923710087431" className="hover:text-gold-400 transition-colors">
                 +447853148468
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Mail className="h-5 w-5 text-gold-400 shrink-0" />
                <a href="mailto:sabeelulquranonline@gmail.com" className="hover:text-gold-400 transition-colors">
                  sabeelulquranonline@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>© {new Date().getFullYear()} Sabeel Ul Quran. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-gold-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-gold-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
