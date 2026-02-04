"use client";

import { motion } from "motion/react";
import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Send, Loader2 } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/utils/whatsapp";

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format message for WhatsApp
    const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Subject:* ${formData.subject}%0A%0A*Message:*%0A${formData.message}`;

    // WhatsApp number (replace with your actual number)
    const whatsappNumber = WHATSAPP_NUMBER;

    // Redirect to WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    // Small delay for better UX
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 max-w-7xl mx-auto">
          {/* Left: Form Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground font-serif mb-4">
                Get in Touch
              </h2>
              <p className="text-muted-foreground text-lg">
                Have questions about our programs? We're here to help you on your spiritual journey.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-transparent mt-6" />
            </div>

            <div className="space-y-4 pt-6">
              <div className="bg-muted/30 rounded-lg p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-2">📧 Quick Response</h3>
                <p className="text-muted-foreground text-sm">
                  Fill out the form and we'll get back to you within 24 hours via WhatsApp.
                </p>
              </div>

              <div className="bg-muted/30 rounded-lg p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-2">💬 Direct Contact</h3>
                <p className="text-muted-foreground text-sm">
                  Your message will be sent directly to our WhatsApp for instant communication.
                </p>
              </div>

              <div className="bg-muted/30 rounded-lg p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-2">🔒 Privacy First</h3>
                <p className="text-muted-foreground text-sm">
                  Your information is secure and will only be used to respond to your inquiry.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border rounded-lg p-8 shadow-xl">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all text-foreground"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all text-foreground"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all text-foreground"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all text-foreground"
                >
                  <option value="">Select a subject</option>
                  <option value="Program Inquiry">Program Inquiry</option>
                  <option value="Enrollment">Enrollment</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="General Question">General Question</option>
                  <option value="Feedback">Feedback</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all text-foreground resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold-500 hover:bg-gold-600 text-black border-none font-semibold py-6 text-lg rounded-sm group"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                    Sending to WhatsApp...
                  </>
                ) : (
                  <>
                    Send via WhatsApp
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you'll be redirected to WhatsApp to complete your message.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
