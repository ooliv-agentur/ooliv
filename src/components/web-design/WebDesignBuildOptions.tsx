
import React from 'react';
import { Code, ShoppingBag, Settings, Database } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WebDesignBuildOptions = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  const translations = {
    en: {
      title: "Built for Your Business — No Templates",
      subtitle: "Not sure what fits? Let's find the right solution.",
      options: [
        {
          icon: Settings,
          title: "Custom WordPress Websites",
          description: "Built from scratch, no prebuilt themes"
        },
        {
          icon: ShoppingBag,
          title: "WooCommerce Integration",
          description: "For shop functionality inside WordPress"
        },
        {
          icon: Code,
          title: "Custom Code (No CMS)",
          description: "HTML, CSS, JS for full control"
        },
        {
          icon: Database,
          title: "Shopify for Product-Based Businesses",
          description: "Lean, scalable, conversion-first"
        }
      ]
    },
    de: {
      title: "Websites, die zu Ihrem Unternehmen passen – ohne Kompromisse",
      subtitle: "Nicht sicher, was passt? Wir finden die richtige Lösung.",
      options: [
        {
          icon: Settings,
          title: "Individuelle WordPress-Websites",
          description: "Ohne Templates, volle Freiheit"
        },
        {
          icon: ShoppingBag,
          title: "WooCommerce Integration",
          description: "Shop-Funktionen bei Bedarf"
        },
        {
          icon: Code,
          title: "Statischer Code (ohne CMS)",
          description: "HTML/CSS/JS für maximale Kontrolle"
        },
        {
          icon: Database,
          title: "Shopify für produktfokussierte B2B-Projekte",
          description: "Schlank, skalierbar"
        }
      ]
    }
  };
  
  const t = isGerman ? translations.de : translations.en;

  return (
    <section className="py-24 bg-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
          {t.title}
        </h2>
        
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
          {t.subtitle}
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.options.map((option, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-brand-backgroundAlt mb-4">
                  <option.icon className="h-6 w-6 text-brand-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-brand-heading">{option.title}</h3>
                <p className="text-brand-text text-sm">{option.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDesignBuildOptions;
