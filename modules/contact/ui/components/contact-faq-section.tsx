"use client";

import { motion } from "motion/react";
import { HelpCircle, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "How quickly will I receive a response?",
    answer: "We typically respond to all inquiries within 2-4 hours during business hours (9 AM - 6 PM, Monday-Friday). For urgent matters, use the WhatsApp button for instant communication.",
  },
  {
    id: 2,
    question: "Can I schedule a call instead of using the form?",
    answer: "Absolutely! Click the WhatsApp button and request a call. Our team will schedule a convenient time to discuss your needs.",
  },
  {
    id: 3,
    question: "Do you offer in-person consultations?",
    answer: "Yes, we offer in-person consultations at our main office. Contact us via WhatsApp to schedule an appointment.",
  },
  {
    id: 4,
    question: "What information should I include in my message?",
    answer: "Please include your name, the program or service you're interested in, and any specific questions. The more details you provide, the better we can assist you.",
  },
  {
    id: 5,
    question: "Is my information secure?",
    answer: "Yes, all information shared through our contact form and WhatsApp is kept strictly confidential and used only to respond to your inquiry.",
  },
];

export function ContactFaqSection() {
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
            Contact FAQ
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Quick answers about reaching out to us
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
      </div>
    </section>
  );
}
