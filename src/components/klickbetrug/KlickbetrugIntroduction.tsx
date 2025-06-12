
import React from 'react';
import { AlertTriangle, Users, TrendingDown, BarChart3 } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';
import { getSectionClasses, getContainerClasses } from '@/styles/spacing';
import { getHeadingClasses, getBodyClasses } from '@/styles/typography';
import { Icon } from '@/components/ui/icon';

const KlickbetrugIntroduction = () => {
  const fraudTypes = [
    {
      icon: AlertTriangle,
      title: 'Künstlicher Traffic',
      description: 'Klicks ohne echtes Nutzerinteresse'
    },
    {
      icon: Users,
      title: 'Wettbewerbsmanipulation',
      description: 'Konkurrenten leeren Ihr Tagesbudget'
    },
    {
      icon: TrendingDown,
      title: 'Unnütze Ausgaben',
      description: 'Kein ROI, trotz hoher Klickzahlen'
    },
    {
      icon: BarChart3,
      title: 'Verfälschte Daten',
      description: 'Conversion-Raten und KPIs verlieren Aussagekraft'
    }
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
          {fraudTypes.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="text-center mb-6">
                <Icon 
                  icon={item.icon}
                  variant="round"
                  size="lg"
                  background="light"
                  className="mx-auto text-gray-500 group-hover:text-medico-turquoise transition-colors duration-300"
                />
              </div>
              <h3 className={`${getHeadingClasses('h4', 'primary', 'center')} mb-4`}>
                {item.title}
              </h3>
              <p className={`${getBodyClasses('base', 'secondary', 'center')}`}>
                {item.description}
              </p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default KlickbetrugIntroduction;
