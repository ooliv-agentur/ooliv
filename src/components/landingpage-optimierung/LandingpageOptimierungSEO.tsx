import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { CheckCircle2 } from 'lucide-react';

const LandingpageOptimierungSEO = () => {
  const benefits = [
    "Kostenloses Optimierungskonzept innerhalb von 48 h",
    "Klarer Maßnahmenplan für mehr Leads",
    "Messbare Ergebnisse durch strukturierte Conversion-Analyse"
  ];

  return (
    <AnimatedSection className="py-20 bg-[#0B1C2A] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Landingpage Optimierung – mehr Leads durch Struktur und Strategie.
        </h2>
        
        <div className="prose prose-lg prose-invert mb-8">
          <p className="text-gray-300 leading-relaxed">
            Wir optimieren Ihre Landingpage für mehr Conversions – durch klare Struktur, überzeugende CTAs und datengetriebene Verbesserungen. Im Gespräch analysieren wir Ihre Seite und zeigen konkrete Maßnahmen.
          </p>
        </div>

        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-200 font-medium">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default LandingpageOptimierungSEO;
