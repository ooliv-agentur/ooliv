
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const WiesbadenAboutSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal className="space-y-6">
            <h2 className="text-3xl font-bold text-brand-heading">
              Ihre erfahrene Werbeagentur für Wiesbaden
            </h2>
            
            <p className="text-lg text-brand-text">
              Seit 2008 ist ooliv als zuverlässige Werbeagentur im Rhein-Main-Gebiet tätig. Mit unserem Standort im Raum Wiesbaden-Mainz betreuen wir Kunden aus unterschiedlichsten Branchen – von kleinen Start-ups bis hin zu etablierten Unternehmen.
            </p>
            
            <p className="text-lg text-brand-text">
              Unser Fokus liegt auf kreativen, digitalen Projekten und innovativen Webdesigns, die nicht nur optisch begeistern, sondern auch funktional überzeugen.
            </p>
            
            <div>
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new Event('open-lead-form'));
                }}
                className="inline-flex items-center text-brand-primary font-medium hover:underline"
              >
                Kostenfreies Strategiegespräch vereinbaren <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </Reveal>
          
          <StaggerReveal className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="rounded-lg bg-brand-backgroundAlt p-6">
                <h3 className="text-lg font-semibold text-brand-heading mb-2">Erfahrung & Expertise</h3>
                <p className="text-brand-text">Seit über 15 Jahren erfolgreich im Rhein-Main-Gebiet tätig.</p>
              </div>
              
              <div className="rounded-lg bg-brand-backgroundAlt p-6">
                <h3 className="text-lg font-semibold text-brand-heading mb-2">Kreativität trifft Technologie</h3>
                <p className="text-brand-text">Innovative Lösungen, die modernes Design mit den neuesten Webtechnologien verbinden.</p>
              </div>
            </div>
            
            <div className="space-y-6 mt-6 sm:mt-0">
              <div className="rounded-lg bg-brand-backgroundAlt p-6">
                <h3 className="text-lg font-semibold text-brand-heading mb-2">Persönliche Betreuung</h3>
                <p className="text-brand-text">Wir arbeiten eng mit unseren Kunden zusammen und sind erst zufrieden, wenn Sie begeistert sind.</p>
              </div>
              
              <div className="rounded-lg bg-brand-backgroundAlt p-6">
                <h3 className="text-lg font-semibold text-brand-heading mb-2">Regional und nahbar</h3>
                <p className="text-brand-text">Als Werbeagentur in Wiesbaden kennen wir die Bedürfnisse lokaler Unternehmen und bieten maßgeschneiderte Lösungen.</p>
              </div>
            </div>
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
};

export default WiesbadenAboutSection;
