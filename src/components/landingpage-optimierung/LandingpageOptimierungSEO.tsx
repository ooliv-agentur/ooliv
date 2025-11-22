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
          <p className="text-gray-300 leading-relaxed mb-6">
            Eine professionelle Landingpage-Optimierung steigert Ihre Conversion-Rate messbar. Durch gezielte UX-Tests, optimiertes Call-to-Action-Design und strategisch platzierte Vertrauenselemente verwandeln wir Ihre Besucher in Kunden. Wir analysieren den kompletten Conversion-Pfad – von der ersten Interaktion bis zum finalen Lead.
          </p>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Unsere datengetriebene Methode kombiniert Heatmap-Analysen, User-Journey-Optimierung und A/B-Testing, um Schwachstellen zu identifizieren. Dabei fokussieren wir uns auf messbare KPIs: Bounce-Rate-Reduktion, höhere Verweildauer und vor allem mehr qualifizierte Anfragen. Jede Optimierung basiert auf echten Nutzerdaten, nicht auf Annahmen.
          </p>
          
          <p className="text-gray-300 leading-relaxed">
            Von der Optimierung der Informationsarchitektur über die Verbesserung der visuellen Hierarchie bis zur Implementierung psychologischer Trigger – wir entwickeln einen klaren Maßnahmenplan. Das Ergebnis: Eine Landingpage, die Vertrauen schafft, klar kommuniziert und systematisch mehr Leads generiert. Erfahren Sie mehr über unser <a href="/kostenloses-website-konzept" className="text-accent hover:underline">kostenloses Website-Konzept</a>.
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
