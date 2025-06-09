
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layout, FileText, Target, PenTool } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WebDesignStructureFirst = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  const translations = {
    en: {
      title: "Structure Before Style – Our First Step",
      subtitle: "Effective webdesign begins with planning. We help map your structure, define your messaging, and shape a clear UX strategy.",
      points: [
        {
          icon: Layout,
          title: "Sitemap & Page Structure",
          description: "Clear user journeys and strategic navigation flow for intuitive browsing."
        },
        {
          icon: FileText,
          title: "Keyword-Driven Content Planning",
          description: "Research-based content strategy that speaks directly to your target audience."
        },
        {
          icon: Target,
          title: "Conversion-Focused Wireframes",
          description: "Strategic layouts designed to guide visitors toward actions that matter."
        }
      ],
      boxTitle: "Also included in this phase:",
      boxItems: [
        "Wireframes for every key page",
        "Keyword-based content planning",
        "Conversion copy that fits your tone",
        "Visual storytelling elements"
      ],
      linkText: "Learn more about our content creation process"
    },
    de: {
      title: "Struktur vor Stil – so starten wir jedes Projekt",
      subtitle: "Erfolgreiches Webdesign beginnt mit Strategie, nicht mit Farben. Wir entwickeln klare Strukturen, zielgerichtete Inhalte und eine durchdachte Nutzerführung.",
      points: [
        {
          icon: Layout,
          title: "Sitemap & Seitenstruktur",
          description: "Klar definierte Nutzerreisen und strategische Navigation."
        },
        {
          icon: FileText,
          title: "Content-Strategie auf Basis von Keywords",
          description: "Recherchierte Inhalte, die direkt zu Ihrer Zielgruppe sprechen."
        },
        {
          icon: Target,
          title: "Wireframes mit Fokus auf Conversion",
          description: "Strategische Layouts für mehr Anfragen und bessere Ergebnisse."
        }
      ],
      boxTitle: "Ebenfalls in dieser Phase enthalten:",
      boxItems: [
        "Wireframes für Schlüsselseiten",
        "Content Map basierend auf Keywords",
        "Textstrategie mit Conversion-Fokus",
        "Visuelle Storytelling-Elemente"
      ],
      linkText: "Mehr über Content-Erstellung erfahren"
    }
  };
  
  const t = isGerman ? translations.de : translations.en;
  const contentCreationPath = isGerman ? "/de/content-erstellung" : "/content-creation";

  return (
    <section className="py-24" style={{ backgroundColor: '#0A1E2C' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4" style={{ color: '#FFFFFF' }}>
          {t.title}
        </h2>
        
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto" style={{ color: '#F4F4F4' }}>
          {t.subtitle}
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {t.points.map((point, index) => (
            <div key={index} className="p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300" style={{ backgroundColor: '#003347', border: '1px solid rgba(255, 229, 0, 0.2)' }}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: 'rgba(255, 229, 0, 0.1)' }}>
                  <point.icon className="h-6 w-6" style={{ color: '#FFE500' }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#FFFFFF' }}>
                    {point.title}
                  </h3>
                  <p style={{ color: '#F4F4F4' }}>{point.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-8 rounded-lg" style={{ backgroundColor: '#003347', border: '1px solid rgba(255, 229, 0, 0.2)' }}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h4 className="text-lg font-bold mb-2" style={{ color: '#FFFFFF' }}>{t.boxTitle}</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                {t.boxItems.map((item, index) => (
                  <li key={index} className="flex items-center" style={{ color: '#F4F4F4' }}>
                    <div className="h-1.5 w-1.5 rounded-full mr-2" style={{ backgroundColor: '#FFE500' }}></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Link 
              to={contentCreationPath} 
              className="inline-flex items-center hover:underline font-medium"
              style={{ color: '#FFE500' }}
            >
              {t.linkText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDesignStructureFirst;
