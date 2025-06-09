
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
      title: "Warum ooliv die richtige Wahl für Webdesign in Mainz ist",
      features: [
        {
          icon: Target,
          title: "Strategie statt Standard",
          description: "Wir entwickeln Websites, die auf Ihre Ziele einzahlen: Sichtbarkeit, Anfragen und Wachstum. Keine vorgefertigten Lösungen – alles individuell und auf Ihr Unternehmen zugeschnitten."
        },
        {
          icon: ArrowRight,
          title: "Conversion im Fokus",
          description: "Eine Website ist nur dann gut, wenn sie Besucher überzeugt. Wir legen Wert auf eine klare Struktur, gute Lesbarkeit und eine Benutzerführung, die Anfragen generiert."
        },
        {
          icon: Zap,
          title: "SEO-ready & mobil optimiert",
          description: "Ihre Website funktioniert auf allen Geräten – vom Smartphone bis zum Desktop – und ist technisch sauber umgesetzt, damit sie bei Google gut gefunden wird."
        },
        {
          icon: PhoneCall,
          title: "Langfristiger Support",
          description: "Nach dem Livegang lassen wir Sie nicht allein. Wir begleiten Sie auch danach weiter – mit Analysen, Updates und allem, was Ihre Website braucht, um erfolgreich zu bleiben."
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
