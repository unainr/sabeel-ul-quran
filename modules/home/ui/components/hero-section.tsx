"use client";

import * as React from "react";
import Image from "next/image";
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

  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-black">
      <Carousel
        setApi={setApi}
        className="w-full h-full"
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {sliderData.map((slide) => (
            <CarouselItem key={slide.id} className="relative w-full h-[600px] md:h-[800px]">
              <div className="relative w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={slide.id === 1}
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`slide-${slide.id}`}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.8 }}
                      className="space-y-6"
                    >
                      <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-gold-400 font-serif text-lg md:text-2xl tracking-widest uppercase"
                      >
                        {slide.subtitle}
                      </motion.h2>
                      <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-4xl md:text-7xl font-bold text-white tracking-tight font-serif drop-shadow-lg"
                      >
                        {slide.title}
                      </motion.h1>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex gap-4 justify-center"
                      >
                        <Button 
                          size="lg" 
                          className="bg-gold-500 hover:bg-gold-600 text-black border-none font-semibold px-8 py-6 text-lg rounded-sm hover:scale-105 transition-transform"
                        >
                          Join Now
                        </Button>
                        <Button 
                          size="lg" 
                          variant="outline"
                          className="border-gold-500 text-gold-400 hover:bg-gold-500/10 hover:text-gold-300 px-8 py-6 text-lg rounded-sm hover:scale-105 transition-transform"
                        >
                          Contact Us
                        </Button>
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={`h-2 transition-all duration-300 rounded-full ${
                index + 1 === current ? "w-8 bg-gold-500" : "w-2 bg-white/50 hover:bg-white"
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="hidden md:block">
            <CarouselPrevious className="left-8 border-gold-500/50 text-gold-400 hover:bg-gold-950/50 hover:text-white" />
            <CarouselNext className="right-8 border-gold-500/50 text-gold-400 hover:bg-gold-950/50 hover:text-white" />
        </div>
      </Carousel>
    </section>
  );
}
