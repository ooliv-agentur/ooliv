
import React from 'react';
import { Quote } from 'lucide-react';

const AboutTestimonials = () => {
  const testimonials = [
    {
      quote: "Mit ooliv haben wir einen Partner gefunden, der uns nicht nur technisch, sondern auch strategisch entscheidend voranbringt.",
      author: "Thomas Meyer",
      company: "TechSolutions GmbH",
      role: "Geschäftsführer"
    },
    {
      quote: "Die direkte Kommunikation mit dem Team hat komplexe Prozesse erheblich vereinfacht. Keine Zwischeninstanzen, keine Verzögerungen.",
      author: "Claudia Wagner",
      company: "IndustriePartner AG",
      role: "Marketing Direktorin"
    },
    {
      quote: "Wer bei B2B-Webprojekten Wert auf Qualität, Expertise und messbare Ergebnisse legt, ist bei ooliv genau richtig.",
      author: "Stefan Becker",
      company: "Global Industries",
      role: "Head of Digital"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-brand-heading">Das sagen unsere Kunden</h2>
          <p className="text-lg max-w-3xl mx-auto text-brand-text">
            Erfahren Sie aus erster Hand, wie wir mit unseren B2B-Kunden zusammenarbeiten.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-brand-background p-6 rounded-lg">
              <Quote className="h-10 w-10 text-brand-primary opacity-30 mb-4" />
              <blockquote className="mb-6 text-lg italic text-brand-text">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-bold text-brand-heading">{testimonial.author}</p>
                <p className="text-brand-primary">{testimonial.role}</p>
                <p className="text-sm text-brand-text">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTestimonials;
