
import React from 'react';
import { Check } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';
import { getSectionClasses, getContainerClasses } from '@/styles/spacing';
import { getHeadingClasses, getBodyClasses } from '@/styles/typography';
import { Icon } from '@/components/ui/icon';

const KlickbetrugIntroduction = () => {
  const bulletPoints = [
    'Künstlicher Traffic: Klicks ohne echtes Nutzerinteresse',
    'Wettbewerbsmanipulation: Konkurrenten leeren Ihr Tagesbudget',
    'Unnütze Ausgaben: Kein ROI, trotz hoher Klickzahlen',
    'Verfälschte Daten: Conversion-Raten und KPIs verlieren Aussagekraft'
  ];

  return (
    <section className={`${getSectionClasses('large', 'white')} font-satoshi`}>
      <div className={getContainerClasses()}>
        <Reveal>
          <div className="text-left mb-16">
            <h2 className={`${getHeadingClasses('h2', 'primary', 'left')} mb-6`}>
              Was ist Klickbetrug – und warum betrifft er auch Ihre Kampagnen?
            </h2>
            
            <p className={`${getBodyClasses('large', 'primary', 'left')} mb-12 max-w-4xl`}>
              Klickbetrug (englisch „Click Fraud") bezeichnet künstlich erzeugte Klicks auf Ihre Google Ads – meist ohne echtes Interesse an Ihrem Angebot. Diese Klicks stammen von Bots, Konkurrenten oder Klickfarmen und treiben Ihre Werbekosten in die Höhe, ohne dass daraus Kunden werden. Das Problem: Google erkennt diese Angriffe nur unzureichend – und Sie bezahlen trotzdem.
            </p>
          </div>
        </Reveal>
        
        <StaggerReveal className="grid md:grid-cols-2 gap-8 max-w-5xl">
          {bulletPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-4 group">
              <div className="mt-1 flex-shrink-0">
                <Icon 
                  icon={Check}
                  variant="round"
                  size="md"
                  background="light"
                  className="text-medico-turquoise group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className={`${getBodyClasses('base', 'primary')} group-hover:text-medico-turquoise transition-colors duration-300`}>
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
