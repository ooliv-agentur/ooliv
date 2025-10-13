import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';

const LandingpageOptimierungWhy = () => {
  return (
    <AnimatedSection className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Warum ooliv
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Wir kombinieren datengetriebene Analyse mit klarem Design-System. Jede Optimierung basiert auf echten Nutzererkenntnissen, nicht auf Bauchgefühl.
            </p>
            <p className="text-sm text-primary font-semibold mb-3">
              Mehr als 100 optimierte Seiten – von B2B bis E-Commerce.
            </p>
            <p className="text-base text-muted-foreground">
              Wir messen, testen und optimieren jede Landingpage auf Basis realer Nutzerdaten.
            </p>
          </div>
          
          <div className="relative">
            <img
              src="/lovable-uploads/6e8f3f4b-5d3f-4be8-8fb7-7ae3bb59e55f.png"
              alt="ooliv Team bei der Arbeit"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default LandingpageOptimierungWhy;
