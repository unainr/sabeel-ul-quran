"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/utils/whatsapp";

const sliderData = [
  {
    id: 1,
    image: "/images/slider/slider_mosque_interior_1770137472856.png",
    title: "Welcome to Sabeel Ul Quran",
    subtitle: "The Path of Quran - Illuminated by Knowledge",
  },
  {
    id: 2,
    image: "/images/slider/slider_quran_study_1770137489630.png",
    title: "Learn with Excellence",
    subtitle: "Professional Tutors & Personalized Learning",
  },
  {
    id: 3,
    image: "/images/slider/slider_islamic_pattern_1770137503986.png",
    title: "Spiritual Growth",
    subtitle: "Connect with the Divine Words of Allah",
  },
];

export function HeroSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleJoinClick = () => {
    const message = "Hi! I'm interested in joining Sabeel Ul Quran. Please provide me with more information.";
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-black group">
      <Carousel
        setApi={setApi}
        className="w-full h-full"
        plugins={[
          Autoplay({
            delay: 6000,
            stopOnInteraction: false,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {sliderData.map((slide, index) => (
            <CarouselItem key={slide.id} className="relative w-full h-[600px] md:h-[800px]">
              <div className="relative w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className="object-cover opacity-70 animate-ken-burns"
                />
                
                {/* Advanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
                
                {/* Content Container */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 max-w-5xl mx-auto">
                  <AnimatePresence mode="wait">
                    {current === index + 1 && (
                      <motion.div
                        key={`slide-${slide.id}`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8"
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className="inline-block"
                        >
                          <span className="px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-950/30 backdrop-blur-sm text-gold-400 font-serif text-sm md:text-base tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(234,179,8,0.2)]">
                            {slide.subtitle}
                          </span>
                        </motion.div>

                        <motion.h1
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight font-serif drop-shadow-2xl leading-tight"
                        >
                          {slide.title}
                        </motion.h1>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.5 }}
                          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
                        >
                          <Button 
                            size="lg" 
                            onClick={handleJoinClick}
                            className="bg-gold-500 hover:bg-gold-400 text-black border-none font-bold px-8 py-7 text-lg rounded-sm hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] min-w-[200px] group/btn"
                          >
                            <MessageCircle className="w-5 h-5 mr-2 group-hover/btn:rotate-12 transition-transform" />
                            Join Now
                          </Button>
                          
                          <Link href="/contact" passHref>
                            <Button 
                              size="lg" 
                              variant="outline"
                              className="border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-black px-8 py-7 text-lg rounded-sm hover:scale-105 transition-all duration-300 backdrop-blur-sm bg-black/20 min-w-[200px] group/btn"
                            >
                              Contact Us
                              <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation Dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                index + 1 === current 
                  ? "w-12 bg-gold-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]" 
                  : "w-3 bg-white/40 hover:bg-white/80"
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <CarouselPrevious className="left-8 border-gold-500/30 bg-black/20 text-gold-400 hover:bg-gold-500 hover:text-black hover:border-gold-500 h-12 w-12" />
            <CarouselNext className="right-8 border-gold-500/30 bg-black/20 text-gold-400 hover:bg-gold-500 hover:text-black hover:border-gold-500 h-12 w-12" />
        </div>
      </Carousel>
      
      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
