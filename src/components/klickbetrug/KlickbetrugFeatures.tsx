
import React from 'react';
import { Bot, Users, Shield, Smartphone } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

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
    <section className="py-20 bg-medico-mint font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-medico-darkGreen mb-6 leading-tight">
              Das erkennt unsere KI – automatisch & DSGVO-konform
            </h2>
          </div>
        </Reveal>
        
        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center mx-auto mb-6">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-medico-darkGreen mb-4">
                {feature.title}
              </h3>
              <p className="text-medico-darkGreen/80" style={{ lineHeight: '1.5' }}>
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
