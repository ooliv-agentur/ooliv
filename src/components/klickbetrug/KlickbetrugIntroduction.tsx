
import React from 'react';
import { Check } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const KlickbetrugIntroduction = () => {
  const bulletPoints = [
    'Künstlicher Traffic: Klicks ohne echtes Nutzerinteresse',
    'Wettbewerbsmanipulation: Konkurrenten leeren Ihr Tagesbudget',
    'Unnütze Ausgaben: Kein ROI, trotz hoher Klickzahlen',
    'Verfälschte Daten: Conversion-Raten und KPIs verlieren Aussagekraft'
  ];

  return (
    <section className="py-20 bg-white font-satoshi">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-medico-darkGreen mb-8 leading-tight">
              Was ist Klickbetrug – und warum betrifft er auch Ihre Kampagnen?
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-medico-darkGreen mb-12" style={{ lineHeight: '1.6' }}>
                Klickbetrug (englisch „Click Fraud") bezeichnet künstlich erzeugte Klicks auf Ihre Google Ads – meist ohne echtes Interesse an Ihrem Angebot. Diese Klicks stammen von Bots, Konkurrenten oder Klickfarmen und treiben Ihre Werbekosten in die Höhe, ohne dass daraus Kunden werden. Das Problem: Google erkennt diese Angriffe nur unzureichend – und Sie bezahlen trotzdem.
              </p>
            </div>
          </div>
        </Reveal>
        
        <StaggerReveal className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {bulletPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                  <Check className="h-4 w-4 text-white" />
                </div>
              </div>
              <p className="text-lg text-medico-darkGreen" style={{ lineHeight: '1.5' }}>
                {point}
              </p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default KlickbetrugIntroduction;
