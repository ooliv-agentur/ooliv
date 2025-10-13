import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { CheckCircle2 } from 'lucide-react';

const KostenlosesKonzeptSEO = () => {
  const benefits = [
    "Kostenlose Website-Analyse innerhalb von 48 h",
    "Klare Handlungsempfehlungen für Inhalte, Struktur und UX",
    "Steigerung von Leads und Conversion-Rate durch gezielte Optimierung"
  ];

  return (
    <AnimatedSection className="py-20 bg-[#0B1C2A] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Website optimieren lassen – für mehr Anfragen und bessere Ergebnisse.
        </h2>
        
        <div className="prose prose-lg prose-invert max-w-none mb-8">
          <p className="leading-relaxed mb-6">
            Eine professionelle Website ist heute unverzichtbar – doch viele Unternehmen haben Websites, die technisch funktionieren, aber keine Anfragen generieren. Der Grund: fehlende Strategie, unklare Nutzerführung oder veraltete Inhalte.
          </p>
          <p className="leading-relaxed mb-6">
            Mit einer gezielten Website-Optimierung können Sie Ihre Online-Präsenz auf das nächste Level heben. Wir analysieren Ihre Website ganzheitlich – von der technischen Performance über die Content-Struktur bis zur User Experience. Das Ergebnis: eine klare Roadmap für mehr Sichtbarkeit, bessere Conversion-Raten und messbare Geschäftsergebnisse.
          </p>
          <p className="leading-relaxed">
            Unser kostenloses Website-Konzept bietet Ihnen den perfekten Einstieg: Sie erhalten eine individuelle Analyse Ihrer Website mit konkreten Handlungsempfehlungen – ohne Risiko und unverbindlich. So können Sie fundiert entscheiden, welche Optimierungen den größten Impact für Ihr Unternehmen haben.
          </p>
        </div>

        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
              <p className="text-lg leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default KostenlosesKonzeptSEO;
