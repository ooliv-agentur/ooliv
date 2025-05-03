
import React from 'react';
import { Award, Bolt, BrainCircuit, Gauge, Lock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WebDevBenefits = () => {
  const { language } = useLanguage();
  
  const benefitsDE = [
    {
      icon: Gauge,
      title: 'Performance & Geschwindigkeit',
      description: 'Schnelle Ladezeiten auf allen Geräten, Google PageSpeed optimiert'
    },
    {
      icon: BrainCircuit,
      title: 'Clean Code',
      description: 'Wartbarer, hochwertiger Code, der mit Ihrem Business skaliert'
    },
    {
      icon: Award,
      title: 'SEO-freundlich',
      description: 'Technische Basics von Tag eins an für optimale Suchmaschinen-Sichtbarkeit'
    },
    {
      icon: Lock,
      title: 'Sicherheit & Stabilität',
      description: 'Alle Security Best Practices implementiert, regelmäßige Updates'
    },
    {
      icon: Bolt,
      title: 'Effektive Entwicklung',
      description: 'Schlanke Prozesse, technologie-agnostischer Ansatz, flexible Lösungen'
    }
  ];
  
  const benefitsEN = [
    {
      icon: Gauge,
      title: 'Performance & Speed',
      description: 'Fast loading pages on all devices, Google PageSpeed optimized'
    },
    {
      icon: BrainCircuit,
      title: 'Clean Code',
      description: 'Maintainable, high-quality code that scales with your business'
    },
    {
      icon: Award,
      title: 'SEO-Friendly',
      description: 'Technical basics implemented from day one for optimal search engine visibility'
    },
    {
      icon: Lock,
      title: 'Security & Stability',
      description: 'All security best practices implemented, regular updates'
    },
    {
      icon: Bolt,
      title: 'Effective Development',
      description: 'Lean processes, technology-agnostic approach, flexible solutions'
    }
  ];

  const benefits = language === 'de' ? benefitsDE : benefitsEN;
  
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-brand-heading">
            {language === 'de' 
              ? 'Warum Unternehmen ooliv für Webentwicklung wählen'
              : 'Why Businesses Choose ooliv for Web Development'}
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-brand-text">
            {language === 'de'
              ? 'Sauberer, skalierbarer Code – optimiert für Nutzer, Suchmaschinen und Ihr Business'
              : 'Clean, scalable code – optimized for users, search engines, and your business'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-brand-backgroundAlt inline-flex">
                  <benefit.icon className="h-6 w-6 text-brand-primary" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-brand-heading">
                {benefit.title}
              </h3>
              <p className="text-sm text-brand-text">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDevBenefits;
