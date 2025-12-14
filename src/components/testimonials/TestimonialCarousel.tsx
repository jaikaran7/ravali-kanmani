"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  name: string;
  quote: string;
  rating: number;
  photo: string;
  details?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlayInterval?: number;
}

export function TestimonialCarousel({ 
  testimonials, 
  autoPlayInterval = 5000 
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      rotateY: direction > 0 ? 90 : -90,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      rotateY: direction < 0 ? 90 : -90,
      opacity: 0,
      scale: 0.8
    })
  };

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) newIndex = testimonials.length - 1;
      if (newIndex >= testimonials.length) newIndex = 0;
      return newIndex;
    });
  }, [testimonials.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [paginate, autoPlayInterval]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative min-h-[400px] flex items-center justify-center px-16">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              rotateY: { type: "spring", stiffness: 170, damping: 20 },
              opacity: { duration: 0.6 },
              scale: { duration: 0.5 }
            }}
            className="w-full"
            style={{ perspective: 1000 }}
          >
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="flex flex-col items-center text-center">
                <img
                  src={currentTestimonial.photo}
                  alt={currentTestimonial.name}
                  className="w-24 h-24 rounded-full object-cover mb-6 ring-4 ring-primary/20"
                />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl text-card-foreground mb-6 italic font-light leading-relaxed">
                  "{currentTestimonial.quote}"
                </blockquote>

                <p className="text-lg font-semibold text-primary mb-1">
                  {currentTestimonial.name}
                </p>
                
                {currentTestimonial.details && (
                  <p className="text-sm text-muted-foreground">
                    {currentTestimonial.details}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full h-12 w-12 shadow-lg hover:scale-110 transition-transform"
        onClick={() => paginate(-1)}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full h-12 w-12 shadow-lg hover:scale-110 transition-transform"
        onClick={() => paginate(1)}
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex 
                ? "w-8 bg-primary" 
                : "w-2 bg-muted-foreground/30"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
