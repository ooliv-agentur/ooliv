
import React from 'react';
import { Code, Box, ShoppingCart, Server, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const WebDevServices = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  const contactPath = isGerman ? "/kontakt" : "/en/contact";
  
  const services = [
    {
      icon: Code,
      title: isGerman ? "Custom Code (kein CMS)" : "Custom Code (No CMS)",
      description: isGerman ? "HTML, CSS, JS – schnell, flexibel, wartungsarm" : "HTML, CSS, JS – fast, flexible, low-maintenance"
    },
    {
      icon: Box,
      title: isGerman ? "WordPress Entwicklung" : "WordPress Development",
      description: isGerman ? "Sauber programmiert, redaktionell nutzbar, skalierbar" : "Clean-coded, editorially usable, scalable"
    },
    {
      icon: ShoppingCart,
      title: isGerman ? "WooCommerce Integration" : "WooCommerce Integration",
      description: isGerman ? "Produkte oder Services direkt integrieren" : "Integrate products or services directly"
    },
    {
      icon: Server,
      title: isGerman ? "API & Schnittstellen" : "API & Interfaces",
      description: isGerman ? "Drittanbieter-Tools integrieren, eigene Features entwickeln" : "Integrate third-party tools, develop custom features"
    },
    {
      icon: Gift,
      title: isGerman ? "Shopify (ausgewählte Projekte)" : "Shopify (Selected Projects)",
      description: isGerman ? "Für fokussierte B2B-Shops mit klarer Struktur" : "For focused B2B shops with clear structure"
    }
  ];
  
  return (
    <section className="py-16 bg-gradient-to-br from-brand-background to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-heading mb-4">
            {isGerman ? "Technologien & Lösungen" : "Technologies & Solutions"}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              role="region"
              aria-label={service.title}
            >
              <div className="mb-4 text-brand-primary">
                <service.icon className="h-10 w-10" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-heading">{service.title}</h3>
              <p className="text-brand-text">
                {service.title === (isGerman ? "WordPress Entwicklung" : "WordPress Development") ? (
                  <>
                    {isGerman ? "Sauber programmiert, redaktionell nutzbar, skalierbar – perfekt integriert mit unserem " : "Clean-coded, editorially usable, scalable – perfectly integrated with our "}
                    <Link to={isGerman ? "/webdesign" : "/en/web-design"} className="text-brand-primary hover:underline font-medium">
                      {isGerman ? "Webdesign" : "Web Design"}
                    </Link>
                    {isGerman ? "." : "."}
                  </>
                ) : (
                  service.description
                )}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-brand-text mb-6">
            <strong>{isGerman ? "Nicht sicher, was passt?" : "Not sure what fits?"}</strong> ➝ {isGerman ? "Lassen Sie uns darüber sprechen." : "Let's talk about it."}
          </p>
          <Button asChild>
            <Link to={contactPath} aria-label={isGerman ? "Beratungsgespräch vereinbaren" : "Schedule a Strategy Call"}>
              {isGerman ? "Beratungsgespräch vereinbaren" : "Schedule a Strategy Call"}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WebDevServices;
