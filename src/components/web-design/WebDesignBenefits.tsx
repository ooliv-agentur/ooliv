
import React from 'react';
import { Target, ArrowRight, Zap, PhoneCall } from 'lucide-react';
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
        },
        {
          icon: PhoneCall,
          title: "Long-Term Support",
          description: "We stay involved – optimizing, supporting, and scaling with you for continued success."
        }
      ]
    },
    de: {
      title: "Das bekommen Sie von uns (nicht was andere versprechen)",
      features: [
        {
          icon: Target,
          title: "Klare Strategie, kein Bauchgefühl",
          description: "Sie bekommen eine Website mit klarem Ziel: Mehr Sichtbarkeit, mehr Anfragen, mehr Wachstum. Individuell entwickelt, nicht aus der Schublade."
        },
        {
          icon: ArrowRight,
          title: "Besucher werden zu Kunden",
          description: "Sie bekommen eine Nutzerführung, die funktioniert – klare Struktur, gute Lesbarkeit, überzeugende Calls-to-Action. Conversion statt Dekoration."
        },
        {
          icon: Zap,
          title: "SEO-ready & superschnell",
          description: "Sie bekommen eine Website, die auf allen Geräten perfekt läuft – und von Google geliebt wird. Weil sie technisch sauber gebaut ist."
        },
        {
          icon: PhoneCall,
          title: "Langfristige Betreuung",
          description: "Sie bekommen keine 'Fire and Forget'-Lösung. Wir bleiben an Ihrer Seite – mit Analysen, Updates und allem, was Ihre Website erfolgreich hält."
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
        
        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
