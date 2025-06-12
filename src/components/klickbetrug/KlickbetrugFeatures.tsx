
import React from 'react';
import { Bot, Users, Shield, Smartphone } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';
import { getSectionClasses, getContainerClasses, getGridClasses } from '@/styles/spacing';
import { getHeadingClasses, getBodyClasses } from '@/styles/typography';
import { Icon } from '@/components/ui/icon';

const KlickbetrugFeatures = () => {
  const features = [
    {
      icon: Bot,
      title: 'Bots & Scripts',
      description: 'Maschinenhafte Klickmuster ohne Nutzerverhalten'
    },
    {
      icon: Users,
      title: 'Wettbewerber-Klicks',
      description: 'Wiederholte IPs, ähnliche Geo-Daten, keine Conversion'
    },
    {
      icon: Shield,
      title: 'Klickfarmen & VPNs',
      description: 'Auffällige Zugriffsmuster aus Anonymisierungsnetzwerken'
    },
    {
      icon: Smartphone,
      title: 'Fake Traffic & Mobile Clicks',
      description: 'Ungewöhnlich hohe Bounce-Rates bei mobilen Anzeigen'
    }
  ];

  return (
    <section className={`${getSectionClasses('large', 'mint')} font-satoshi`}>
      <div className={getContainerClasses()}>
        <Reveal>
          <div className="text-center mb-16">
            <h2 className={getHeadingClasses('h2', 'primary', 'center')}>
              Das erkennt unsere KI – automatisch & DSGVO-konform
            </h2>
            <div className="w-20 h-1 bg-medico-turquoise mx-auto"></div>
          </div>
        </Reveal>
        
        <StaggerReveal className={getGridClasses(4, 'large')}>
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="mb-6">
                <Icon 
                  icon={feature.icon}
                  variant="round"
                  size="xl"
                  background="light"
                  className="mx-auto text-medico-turquoise group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className={`${getHeadingClasses('h4', 'primary', 'center')} mb-4`}>
                {feature.title}
              </h3>
              <p className={getBodyClasses('base', 'secondary', 'center')}>
                {feature.description}
              </p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default KlickbetrugFeatures;
