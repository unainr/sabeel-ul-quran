"use client";

import { motion } from "motion/react";
import { HelpCircle, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { WHATSAPP_NUMBER } from "@/lib/utils/whatsapp";

const faqs = [
  {
    id: 1,
    question: "How do I enroll in a program?",
    answer: "Click the 'Enroll via WhatsApp' button on any program card, and you'll be connected with our enrollment team who will guide you through the process.",
  },
  {
    id: 2,
    question: "Are the classes live or recorded?",
    answer: "We offer live interactive classes with expert instructors. Recordings are also provided for review and students who miss sessions.",
  },
  {
    id: 3,
    question: "What are the class timings?",
    answer: "We offer flexible scheduling to accommodate students worldwide. You can choose morning, afternoon, or evening slots based on your timezone.",
  },
  {
    id: 4,
    question: "Do you offer trial classes?",
    answer: "Yes! We offer a free trial class for all our programs so you can experience our teaching methodology before enrolling.",
  },
  {
    id: 5,
    question: "What qualifications do your teachers have?",
    answer: "All our instructors are certified scholars with Ijazah in Quran recitation and extensive teaching experience in Islamic education.",
  },
  {
    id: 6,
    question: "Can I switch programs after enrollment?",
    answer: "Yes, you can switch to a different program. Contact our support team via WhatsApp to discuss your options.",
  },
];

export function ProgramsFaqSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section className="py-20 md:py-28 bg-background">
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
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Find answers to common questions about our programs
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-6" />
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-gold-500/50 transition-all duration-300"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-6 py-5 flex items-start gap-4 text-left hover:bg-muted/30 transition-colors"
              >
                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                  openId === faq.id ? "bg-gold-500" : "bg-muted"
                }`}>
                  {openId === faq.id ? (
                    <CheckCircle2 className="w-4 h-4 text-black" />
                  ) : (
                    <HelpCircle className="w-4 h-4 text-muted-foreground" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {faq.question}
                  </h3>
                  {openId === faq.id && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-muted-foreground mt-2 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <button
            onClick={() => {
              const message = "Hi! I have a question about your programs that isn't covered in the FAQ.";
              const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, "_blank");
            }}
            className="px-8 py-3 bg-gold-500 hover:bg-gold-600 text-black font-semibold rounded-sm transition-all hover:scale-105"
          >
            Ask on WhatsApp
          </button>
        </motion.div>
      </div>
    </section>
  );
}
