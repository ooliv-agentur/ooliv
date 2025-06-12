
import React from 'react';
import { Bot, Users, Globe, Smartphone } from 'lucide-react';

const KlickbetrugFeatures = () => {
  const features = [
    {
      icon: <Bot className="h-8 w-8 text-medico-turquoise" />,
      title: "Bots & Scripts",
      description: "Maschinenhafte Klickmuster ohne Nutzerverhalten"
    },
    {
      icon: <Users className="h-8 w-8 text-medico-turquoise" />,
      title: "Wettbewerber-Klicks",
      description: "Wiederholte IPs, ähnliche Geo-Daten, keine Conversion"
    },
    {
      icon: <Globe className="h-8 w-8 text-medico-turquoise" />,
      title: "Klickfarmen & VPNs",
      description: "Auffällige Zugriffsmuster aus Anonymisierungsnetzwerken"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-medico-turquoise" />,
      title: "Fake Traffic & Mobile Clicks",
      description: "Ungewöhnlich hohe Bounce-Rates bei mobilen Anzeigen"
    }
  ];

  return (
    <section className="py-24 bg-medico-mint">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-medico-darkGreen">
            Das erkennt unsere KI – automatisch & DSGVO-konform
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-gray-100 p-4 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="font-bold text-medico-darkGreen mb-2">{feature.title}</h3>
              <p className="text-medico-darkGreen/80 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KlickbetrugFeatures;
