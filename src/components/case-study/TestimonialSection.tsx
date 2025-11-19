import React from 'react';
import { Quote } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import { CaseStudyData } from '@/data/caseStudiesData';

interface TestimonialSectionProps {
  testimonial: CaseStudyData['testimonial'];
}

const TestimonialSection = ({ testimonial }: TestimonialSectionProps) => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="bg-card p-10 md:p-12 rounded-2xl border border-border relative">
            <Quote className="w-12 h-12 text-primary/20 absolute top-6 left-6" />
            
            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                {testimonial.image && (
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                )}
                
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default TestimonialSection;
