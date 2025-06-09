
import React from 'react';
import { Code, ShoppingBag, Settings, Database } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const WebDesignBuildOptions = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  const translations = {
    en: {
      title: "Webdesign Tailored to Your Business",
      subtitle: "Not sure what fits? Let's find the right solution for your business.",
      options: [
        {
          icon: Settings,
          title: "Custom WordPress Builds",
          description: "Professional websites with full content control"
        },
        {
          icon: ShoppingBag,
          title: "WooCommerce Integration",
          description: "E-commerce functionality within WordPress"
        },
        {
          icon: Code,
          title: "Fully Custom (No CMS)",
          description: "Pure HTML/CSS/JS for maximum performance"
        },
        {
          icon: Database,
          title: "Shopify for Product-Driven Brands",
          description: "Streamlined e-commerce for B2B businesses"
        }
      ]
    },
    de: {
      title: "Webdesign Mainz – maßgeschneidert statt vorgefertigt",
      subtitle: "Gemeinsam finden wir die passende Lösung für Ihr Unternehmen.",
      options: [
        {
          icon: Settings,
          title: "Individuelles WordPress-Setup",
          description: "Professionelle Websites mit voller Inhaltskontrolle"
        },
        {
          icon: ShoppingBag,
          title: "WooCommerce für kleinere Shops",
          description: "E-Commerce-Funktionalität innerhalb von WordPress"
        },
        {
          icon: Code,
          title: "Statische Website mit HTML/CSS/JS",
          description: "Reiner Code für maximale Performance"
        },
        {
          icon: Database,
          title: "Shopify für ausgewählte B2B-Projekte",
          description: "Optimierter E-Commerce für produktbasierte Unternehmen"
        }
      ]
    }
  };
  
  const t = isGerman ? translations.de : translations.en;

  return (
    <section className="py-24" style={{ backgroundColor: '#0A1E2C' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold text-center mb-4" style={{ color: '#FFFFFF' }}>
            {t.title}
          </h2>
          
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto" style={{ color: '#F4F4F4' }}>
            {t.subtitle}
          </p>
        </Reveal>
        
        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.options.map((option, index) => (
            <div key={index} className="p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300" style={{ backgroundColor: '#003347', border: '1px solid rgba(255, 229, 0, 0.2)' }}>
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full mb-4" style={{ backgroundColor: 'rgba(255, 229, 0, 0.1)' }}>
                  <option.icon className="h-6 w-6" style={{ color: '#FFE500' }} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#FFFFFF' }}>{option.title}</h3>
                <p className="text-sm" style={{ color: '#F4F4F4' }}>{option.description}</p>
              </div>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default WebDesignBuildOptions;
