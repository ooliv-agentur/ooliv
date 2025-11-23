import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
}

export const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  testimonials,
  autoPlay = false,
  interval = 5000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  React.useEffect(() => {
    if (autoPlay && testimonials.length > 1) {
      const timer = setInterval(nextTestimonial, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, testimonials.length]);

  const current = testimonials[currentIndex];

  const slideVariants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  return (
    <div className="relative bg-[#F5F7F7] rounded-lg p-6 sm:p-8 lg:p-12 border border-[#E5E8E8]">
      {/* Quote Icon */}
      <div className="flex items-center justify-center w-16 h-16 bg-[#0BC3C3] text-white rounded-full mx-auto mb-6">
        <Quote className="w-8 h-8" />
      </div>

      {/* Testimonial Content */}
      <div className="max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <blockquote className="text-lg sm:text-xl lg:text-2xl text-[#0A0A0A] font-medium mb-6 leading-relaxed">
              "{current.quote}"
            </blockquote>

            <div className="flex flex-col items-center gap-2">
              {current.image && (
                <img 
                  src={current.image} 
                  alt={current.author}
                  className="w-16 h-16 rounded-full object-cover mb-2"
                />
              )}
              <cite className="not-italic">
                <div className="font-bold text-[#0A0A0A]">{current.author}</div>
                <div className="text-sm text-[#555555]">
                  {current.role} • {current.company}
                </div>
              </cite>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      {testimonials.length > 1 && (
        <>
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="secondary"
              size="sm"
              onClick={prevTestimonial}
              className="rounded-full w-11 h-11 sm:w-10 sm:h-10 p-0"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-[#0BC3C3] w-8' 
                      : 'bg-[#E5E8E8] hover:bg-[#0BC3C3]/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="secondary"
              size="sm"
              onClick={nextTestimonial}
              className="rounded-full w-11 h-11 sm:w-10 sm:h-10 p-0"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
