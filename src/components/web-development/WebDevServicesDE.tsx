
import React from 'react';
import { Code, Box, ShoppingCart, Server, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const services = [
  {
    icon: Code,
    title: "Custom Code (kein CMS)",
    description: "HTML, CSS, JS – schnell, flexibel, wartungsarm"
  },
  {
    icon: Box,
    title: "WordPress Entwicklung",
    description: "Sauber programmiert, redaktionell nutzbar, skalierbar"
  },
  {
    icon: ShoppingCart,
    title: "WooCommerce Integration",
    description: "Produkte oder Services direkt integrieren"
  },
  {
    icon: Server,
    title: "API & Schnittstellen",
    description: "Drittanbieter-Tools integrieren, eigene Features entwickeln"
  },
  {
    icon: Gift,
    title: "Shopify (ausgewählte Projekte)",
    description: "Für fokussierte B2B-Shops mit klarer Struktur"
  }
];

const WebDevServicesDE = () => {
  const { language } = useLanguage();
  const contactPath = language === 'de' ? "/kontakt" : "/en/contact";
  
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-heading mb-4">
              Technologien & Lösungen
            </h2>
          </div>
        </Reveal>
        
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4 text-brand-primary">
                <service.icon className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-heading">{service.title}</h3>
              <p className="text-brand-text">{service.description}</p>
            </div>
          ))}
        </StaggerReveal>
        
        <Reveal delay={0.3}>
          <div className="text-center mt-12">
            <p className="text-lg text-brand-text mb-6">
              <strong>Nicht sicher, was passt?</strong> ➝ Lassen Sie uns darüber sprechen.
            </p>
            <Button asChild>
              <Link to={contactPath}>Beratungsgespräch vereinbaren</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default WebDevServicesDE;
