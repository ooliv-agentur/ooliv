
import React from 'react';
import { Settings, Shield, Edit3, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WebDevBenefits = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  const benefits = [
    {
      icon: Settings,
      title: isGerman ? "Individuell mit System" : "Custom with System",
      description: isGerman 
        ? "Keine Templates – jede Seite entsteht auf Basis Ihrer Inhalte und Ziele. Mit Elementor, WPBakery oder individuellem Code: Wir arbeiten flexibel, aber nie von der Stange."
        : "No templates – each page is created based on your content and goals. With Elementor, WPBakery or custom code: We work flexibly, but never off-the-shelf."
    },
    {
      icon: Shield,
      title: isGerman ? "Schnell, sicher, skalierbar" : "Fast, secure, scalable",
      description: isGerman
        ? "Ihre Website lädt blitzschnell, läuft stabil und wächst mit Ihrem Business – dank durchdachter Technik, Hosting-Optimierung und sauberem Code."
        : "Your website loads lightning fast, runs stable and grows with your business – thanks to thoughtful technology, hosting optimization and clean code."
    },
    {
      icon: Edit3,
      title: isGerman ? "Einfach pflegbar" : "Easy to maintain",
      description: isGerman
        ? "Mit oder ohne CMS: Wir entwickeln so, dass Sie Inhalte selbst bearbeiten können – ob mit Elementor, Gutenberg oder individuellem Backend."
        : "With or without CMS: We develop so that you can edit content yourself – whether with Elementor, Gutenberg or a custom backend."
    },
    {
      icon: TrendingUp,
      title: isGerman ? "Für die Zukunft gebaut" : "Built for the future",
      description: isGerman
        ? "Internationalisierung, Integrationen und Erweiterbarkeit: Ihre Website ist bereit für morgen – durch skalierbare Struktur und klare Schnittstellen."
        : "Internationalization, integrations and extensibility: Your website is ready for tomorrow – through scalable structure and clear interfaces."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-white to-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-heading mb-4">
            {isGerman 
              ? "Warum Unternehmen ooliv für Webentwicklung wählen" 
              : "Why Businesses Choose ooliv for Web Development"}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              role="region"
              aria-label={benefit.title}
            >
              <div className="mb-4 text-brand-primary">
                <benefit.icon className="h-10 w-10" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-heading">{benefit.title}</h3>
              <p className="text-brand-text">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDevBenefits;
