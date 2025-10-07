
import React from 'react';
import { Bot, MapPin, Clock, Shield } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';
import { getSectionClasses, getContainerClasses, getGridClasses } from '@/styles/spacing';
import { getHeadingClasses, getBodyClasses } from '@/styles/typography';

const KlickbetrugFeatures = () => {
  const features = [
    {
      icon: Bot,
      title: 'Bot-Klicks',
      description: 'Kein Mausverlauf, 0 Sekunden Verweildauer',
      detail: 'Erkennung automatisierter Klicks durch fehlende natürliche Nutzermuster'
    },
    {
      icon: MapPin,
      title: 'VPN-Nutzer',
      description: 'Geolocation-Abweichung zwischen IP und Zielregion',
      detail: 'Identifikation von Proxy-Servern und anonymisierten Verbindungen'
    },
    {
      icon: Clock,
      title: 'Wiederholungsklicks',
      description: 'Zeitintervallanalyse identischer IPs oder Geräte',
      detail: 'Mustererkennung bei verdächtig regelmäßigen Klicksequenzen'
    },
    {
      icon: Shield,
      title: 'Wettbewerber-Angriffe',
      description: 'Auffällige Klickmuster aus Konkurrenz-Regionen',
      detail: 'Schutz vor gezielten Attacken auf Ihr Werbebudget'
    }
  ];

  return (
    <section className={`${getSectionClasses('large', 'mint')} font-satoshi`}>
      <div className={getContainerClasses()}>
        <Reveal>
          <div className="text-left mb-16">
            <h2 className={`${getHeadingClasses('h2', 'primary', 'left')} mb-6`}>
              Unsere KI erkennt Muster – bevor sie teuer werden
            </h2>
            <p className={`${getBodyClasses('large', 'secondary', 'left')} max-w-3xl`}>
              Moderne Klickbetrug-Methoden sind raffiniert – unsere Erkennung ist noch raffinierter.
            </p>
          </div>
        </Reveal>
        
        <StaggerReveal className={getGridClasses(4, 'large')}>
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 text-left group hover:transform hover:scale-105">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4 group-hover:bg-accent-primary/10 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-gray-600 group-hover:text-accent-primary transition-colors duration-300" />
                </div>
              </div>
              <h3 className={`${getHeadingClasses('h4', 'primary', 'left')} mb-3`}>
                {feature.title}
              </h3>
              <p className={`${getBodyClasses('base', 'accent', 'left')} font-semibold mb-3`}>
                {feature.description}
              </p>
              <p className={getBodyClasses('small', 'secondary', 'left')}>
                {feature.detail}
              </p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default KlickbetrugFeatures;
