
import React from 'react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const WiesbadenAboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-brand-heading">
                Werbeagentur ooliv steht für innovative und digitale Lösungen im Raum Wiesbaden-Mainz
              </h2>
              <p className="text-lg mb-6 text-brand-text">
                Seit über einem Jahrzehnt gestalten wir beeindruckende Webauftritte und unterstützen Unternehmen mit individuellen Strategien, um ihre Marken nachhaltig zu stärken.
              </p>
              <h3 className="text-xl font-semibold mb-4 text-brand-heading">
                Ihre erfahrene Werbeagentur für Wiesbaden
              </h3>
              <p className="text-brand-text mb-6">
                Seit 2008 ist ooliv als zuverlässige Werbeagentur im Rhein-Main-Gebiet tätig. Mit unserem Standort im Raum Wiesbaden-Mainz betreuen wir Kunden aus unterschiedlichsten Branchen – von kleinen Start-ups bis hin zu etablierten Unternehmen.
              </p>
              <p className="text-brand-text">
                Unser Fokus liegt auf kreativen, digitalen Projekten und innovativen Webdesigns, die nicht nur optisch begeistern, sondern auch funktional überzeugen.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="bg-brand-backgroundAlt rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-brand-heading">
                Unser Ansatz: Innovativ, individuell, erfolgreich
              </h3>
              
              <p className="mb-6 text-brand-text">
                Bei unserer Arbeit kombinieren wir modernste Technologien mit unserer Leidenschaft für Webdesign und Online-Marketing. Jede Website, die wir gestalten, ist einzigartig und auf die Bedürfnisse unserer Kunden abgestimmt.
              </p>
              
              <StaggerReveal className="space-y-4" stagger={0.1}>
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-semibold text-brand-heading mb-2">Individuelle Wordpress Websites</h4>
                  <p className="text-sm text-brand-text">Maßgeschneiderte und skalierbare Lösungen für Ihr Unternehmen</p>
                </div>
                
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-semibold text-brand-heading mb-2">Entwicklung von Markenstrategien</h4>
                  <p className="text-sm text-brand-text">Umfassende Konzepte für einen starken Markenauftritt</p>
                </div>
                
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-semibold text-brand-heading mb-2">Online-Marketing-Konzepte</h4>
                  <p className="text-sm text-brand-text">Effektive Strategien für mehr Sichtbarkeit und Reichweite</p>
                </div>
              </StaggerReveal>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default WiesbadenAboutSection;
