import React from 'react';
import { Quote } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  industry?: string;
}

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

const TestimonialsSection = ({ testimonials: customTestimonials }: TestimonialsSectionProps = {}) => {
  const defaultTestimonials = [
    {
      quote: "Die strategische Transformation hat unsere digitale Präsenz komplett verändert. ooliv hat nicht nur eine Website gebaut, sondern unsere Positionierung neu definiert.",
      author: "Michael Klaiber",
      role: "Geschäftsführer",
      company: "KLAIBER Steuerberatung",
      industry: "Steuerberatung"
    },
    {
      quote: "Uli hat unsere komplexe AI-Technologie so kommuniziert, dass sie sofort verständlich ist. Die Demo-Requests sind um 320% gestiegen.",
      author: "Dr. Stefan Wagner",
      role: "CEO",
      company: "IconPro GmbH",
      industry: "KI-Software"
    },
    {
      quote: "Von 2% zu 12% Trial-Conversion in 3 Monaten. Das beste Investment, das wir je gemacht haben.",
      author: "Sarah Meyer",
      role: "Head of Marketing",
      company: "Enterprise SaaS",
      industry: "B2B Software"
    }
  ];

  const testimonials = customTestimonials || defaultTestimonials;

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Was unsere Kunden über die Zusammenarbeit mit ooliv sagen
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Messbare Ergebnisse und zufriedene Partner im DACH-Raum
            </p>
          </div>
        </Reveal>

        <StaggerReveal className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-6" />
              
              <p className="text-lg text-foreground mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </div>
              </div>

              {testimonial.industry && (
                <div className="mt-4 pt-4 border-t border-border">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {testimonial.industry}
                  </span>
                </div>
              )}
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;
