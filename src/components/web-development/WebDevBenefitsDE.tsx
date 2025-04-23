import React from 'react';
import { Settings, Shield, Edit3, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Settings,
    title: "Individuell mit System",
    description: "Keine Templates – jede Seite entsteht auf Basis Ihrer Inhalte und Ziele. Mit Elementor, WPBakery oder individuellem Code: Wir arbeiten flexibel, aber nie von der Stange."
  },
  {
    icon: Shield,
    title: "Schnell, sicher, skalierbar",
    description: "Ihre Website lädt schnell, läuft stabil und wächst mit Ihrem Business."
  },
  {
    icon: Edit3,
    title: "Einfach pflegbar",
    description: "Mit oder ohne CMS – Sie behalten die Kontrolle."
  },
  {
    icon: TrendingUp,
    title: "Für die Zukunft gebaut",
    description: "Internationalisierung, Integrationen, Erweiterbarkeit – von Anfang an mitgedacht."
  }
];

const WebDevBenefitsDE = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-white to-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-heading mb-4">
            Warum Unternehmen ooliv für Webentwicklung wählen
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4 text-brand-primary">
                <benefit.icon className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-heading">{benefit.title}</h3>
              <p className="text-brand-text">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDevBenefitsDE;
