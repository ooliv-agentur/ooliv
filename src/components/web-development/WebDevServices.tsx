
import React from 'react';
import { Code, Box, ShoppingCart, Server, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const services = [
  {
    icon: Code,
    title: "Custom Code (no CMS)",
    description: "HTML, CSS, JS – fast, flexible, low-maintenance"
  },
  {
    icon: Box,
    title: "WordPress Development",
    description: "Cleanly programmed, editorially usable, scalable"
  },
  {
    icon: ShoppingCart,
    title: "WooCommerce Integration",
    description: "Integrate products or services directly"
  },
  {
    icon: Server,
    title: "APIs & Interfaces",
    description: "Integrate third-party tools, develop custom features"
  },
  {
    icon: Gift,
    title: "Shopify (selected projects)",
    description: "For focused B2B shops with clear structure"
  }
];

const WebDevServices = () => {
  const { language } = useLanguage();
  const contactPath = language === 'de' ? "/kontakt" : "/en/contact";
  
  return (
    <section className="py-16 bg-gradient-to-br from-brand-background to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-heading mb-4">
            Technologies & Solutions
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-brand-text mb-6">
            <strong>Not sure what fits?</strong> ➝ Let's talk about it.
          </p>
          <Button asChild>
            <Link to={contactPath}>Schedule a Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WebDevServices;
