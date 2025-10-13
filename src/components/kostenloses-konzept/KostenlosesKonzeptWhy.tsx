import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';

const KostenlosesKonzeptWhy = () => {
  return (
    <AnimatedSection className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Strategisch denken, digital umsetzen.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Als Agentur für strategisches Webdesign entwickeln wir Websites, die nicht nur schön aussehen, sondern messbar funktionieren. Unser Fokus liegt auf Struktur, Klarheit und Nutzererlebnis.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Mit unserem kostenlosen Website-Konzept erhalten Sie einen klaren Überblick über Optimierungspotenziale – von der Content-Struktur bis zur technischen Performance.
            </p>
            <button
              onClick={() => window.dispatchEvent(new Event('open-lead-form'))}
              className="inline-flex items-center justify-center px-6 py-3 bg-accent hover:bg-accent/90 text-foreground font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-md"
            >
              Jetzt Analyse starten →
            </button>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/lovable-uploads/43cb7284-8e75-4a51-9784-67c81a6fe8c6.png"
                alt="ooliv Team bei der Strategiearbeit"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default KostenlosesKonzeptWhy;
