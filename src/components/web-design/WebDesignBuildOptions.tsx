
import React from 'react';
import { Code, ShoppingBag, Settings, Database, FileText, Building2, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
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
      title: "Design für jede digitale Lösung",
      subtitle: "Egal ob Onepager, Unternehmenswebsite oder E-Commerce – wir entwickeln das passende Design für Ihre Anforderungen. Auf dieser Basis realisieren wir später Ihre Website mit WordPress, Shopify oder anderen Lösungen. Mehr zur technischen Umsetzung erfahren Sie auf unserer Seite ",
      webdevLinkText: "Webentwicklung",
      options: [
        {
          icon: FileText,
          title: "Onepager und Landingpages",
          description: "Design für kleine, fokussierte Websites mit klarem Ziel."
        },
        {
          icon: Building2,
          title: "Unternehmenswebsites",
          description: "Strukturierte Designs für wachsende B2B-Unternehmen."
        },
        {
          icon: ShoppingBag,
          title: "E-Commerce-Designs",
          description: "Konzepte für Online-Shops, die verkaufen – später realisiert mit WordPress/WooCommerce oder Shopify."
        },
        {
          icon: Globe,
          title: "Individuelle Webanwendungen",
          description: "Designs für maßgeschneiderte Webanwendungen und komplexe Plattformen."
        }
      ]
    }
  };
  
  const t = isGerman ? translations.de : translations.en;
  const webdevPath = isGerman ? "/webentwicklung" : "/en/web-development";

  return (
    <section className="py-24 bg-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
            {t.title}
          </h2>
          
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
            {t.subtitle}
            {isGerman && (
              <>
                <Link 
                  to={webdevPath} 
                  className="text-brand-primary hover:underline font-medium"
                >
                  {t.webdevLinkText}
                </Link>
                .
              </>
            )}
          </p>
        </Reveal>
        
        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        </StaggerReveal>
      </div>
    </section>
  );
};

export default WebDesignBuildOptions;
