
import React from 'react';
import { Target, ArrowRight, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const WebDesignBenefits = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  const translations = {
    en: {
      title: "Why Companies Choose ooliv for Webdesign",
        features: [
          {
            icon: Target,
            title: "Strategy Before Design",
            description: "Every project starts with your goals – leads, visibility, results that matter for growth."
          },
          {
            icon: ArrowRight,
            title: "Built to Convert",
            description: "UX design that guides visitors toward action and transforms clicks into customers."
          },
          {
            icon: Zap,
            title: "Mobile-First & SEO-Ready",
            description: "Fast loading, responsive design that's search engine friendly and user-focused."
          }
        ]
    },
    de: {
      title: "Das bekommen Sie von uns (nicht was andere versprechen)",
      features: [
        {
          icon: Target,
          title: "Strategie vor Design",
          description: "Jede Website beginnt mit Ihren Zielen – nicht mit Templates."
        },
        {
          icon: ArrowRight,
          title: "Besucher werden zu Kunden",
          description: "Nutzerführung, die funktioniert – klare Struktur und überzeugende Calls-to-Action."
        },
        {
          icon: Zap,
          title: "SEO-ready & superschnell",
          description: "Technisch sauber gebaut – für Google und Ihre Besucher."
        }
      ]
    }
  };
  
  const t = isGerman ? translations.de : translations.en;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-heading">
            {t.title}
          </h2>
        </Reveal>
        
        <StaggerReveal className="grid md:grid-cols-3 gap-8">
          {t.features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 h-full flex flex-col">
              <div className="flex flex-col items-start text-left h-full">
                <div className="p-3 rounded-full bg-brand-backgroundAlt mb-4">
                  <feature.icon className="h-6 w-6 text-brand-primary" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-brand-heading">{feature.title}</h3>
                <p className="text-brand-text text-sm leading-relaxed flex-grow">{feature.description}</p>
              </div>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default WebDesignBenefits;
