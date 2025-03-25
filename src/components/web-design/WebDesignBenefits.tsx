
import React from 'react';
import { Target, ArrowRight, Zap, PhoneCall } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WebDesignBenefits = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  const translations = {
    en: {
      title: "Why Companies Choose ooliv for Web Design",
      features: [
        {
          icon: Target,
          title: "Business Goals First",
          description: "Every design starts with your goals — more leads, stronger brand, better results."
        },
        {
          icon: ArrowRight,
          title: "Built for Action",
          description: "Our designs guide visitors toward the next step — from click to contact."
        },
        {
          icon: Zap,
          title: "Fast, Mobile, and SEO-Ready",
          description: "We build for performance — fast load times, mobile-first, easy to find on Google."
        },
        {
          icon: PhoneCall,
          title: "We're Still There After Launch",
          description: "We support, optimize, and grow with you beyond the launch."
        }
      ]
    },
    de: {
      title: "Warum Unternehmen sich für ooliv entscheiden",
      features: [
        {
          icon: Target,
          title: "Strategisch vor Design",
          description: "Jede Website basiert auf klaren Zielen – Leads, Sichtbarkeit, Conversion."
        },
        {
          icon: ArrowRight,
          title: "Für Aktion gebaut",
          description: "UX-optimierte Strukturen führen gezielt zur Anfrage."
        },
        {
          icon: Zap,
          title: "Schnell, mobil & SEO-bereit",
          description: "Technisch sauber, mobiloptimiert, Google-ready."
        },
        {
          icon: PhoneCall,
          title: "Auch nach dem Launch für Sie da",
          description: "Kontinuierliche Betreuung & Optimierung."
        }
      ]
    }
  };
  
  const t = isGerman ? translations.de : translations.en;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-brand-heading">
          {t.title}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-brand-backgroundAlt">
                  <feature.icon className="h-5 w-5 text-brand-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-brand-heading">{feature.title}</h3>
                  <p className="text-brand-text text-sm">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDesignBenefits;
