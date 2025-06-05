
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const cases = {
  en: [
    {
      client: "Scheurich – Manufacturing Brand",
      industry: "Manufacturing & Industrial",
      before: "Old website with poor lead generation and high bounce rate on mobile devices.",
      after: "Strategic webdesign with clear user journeys and mobile-optimized experience.",
      result: "120% increase in qualified leads and 45% lower bounce rate.",
      services: ["Webdesign", "UX Optimization", "Mobile Redesign", "CMS Implementation"],
      kpis: ["120% More Leads", "45% Lower Bounce Rate", "89% Mobile Conversion"],
      image: "bg-[url('/case-study-1.jpg')]",
      logo: "/lovable-uploads/37da8d9c-7991-413d-beba-789d86fe08c8.png"
    },
    {
      client: "COBUS – Enterprise Software",
      industry: "B2B SaaS & Technology",
      before: "Complex product demonstration process with low conversion from demo to sale.",
      after: "Streamlined website with clearer product positioning and demo request flow.",
      result: "80% more qualified sales opportunities and significantly improved user satisfaction.",
      services: ["Website Redesign", "Content Strategy", "UX Research", "CRM Integration"],
      kpis: ["80% More Qualified Leads", "3.2s Faster Load Time", "92% User Satisfaction"],
      image: "bg-[url('/case-study-2.jpg')]",
      logo: "/lovable-uploads/567e9c1f-f8db-451c-9eb4-3f5865307084.png"
    }
  ],
  de: [
    {
      client: "Scheurich – Keramik & Lifestyle",
      industry: "Fertigung & Industrie",
      before: "Alte Website mit geringer Lead-Generierung und hoher Absprungrate auf Mobilgeräten.",
      after: "Strategisches Webdesign mit klaren Nutzerführungen und mobiloptimierter Erfahrung.",
      result: "120% mehr qualifizierte Leads und 45% niedrigere Absprungrate.",
      services: ["Webdesign", "UX-Optimierung", "Mobile Redesign", "CMS-Implementierung"],
      kpis: ["120% mehr Leads", "45% weniger Absprünge", "89% Mobile Conversion"],
      image: "bg-[url('/case-study-1.jpg')]",
      logo: "/lovable-uploads/37da8d9c-7991-413d-beba-789d86fe08c8.png"
    },
    {
      client: "COBUS – Enterprise Software",
      industry: "B2B SaaS & Technologie",
      before: "Komplexer Produktdemonstrationsprozess mit geringer Konversion von Demo zu Verkauf.",
      after: "Optimierte Website mit klarerer Produktpositionierung und Demo-Anfrage-Fluss.",
      result: "80% mehr qualifizierte Verkaufschancen und deutlich verbesserte Nutzerzufriedenheit.",
      services: ["Website-Redesign", "Content-Strategie", "UX-Research", "CRM-Integration"],
      kpis: ["80% mehr qualifizierte Leads", "3,2s schnellere Ladezeit", "92% Nutzerzufriedenheit"],
      image: "bg-[url('/case-study-2.jpg')]",
      logo: "/lovable-uploads/567e9c1f-f8db-451c-9eb4-3f5865307084.png"
    }
  ]
};

const WebDesignCaseStudies = () => {
  const { language } = useLanguage();
  const displayCases = cases[language as 'en' | 'de'] || cases.en;
  
  const translations = {
    en: {
      title: "Webdesign Success Stories",
      subtitle: "Real results we've delivered for businesses through strategic webdesign and development.",
      viewFull: "View Full Case Study",
      viewAll: "View All Case Studies",
      before: "BEFORE:",
      after: "AFTER:",
      whatWeDid: "WHAT WE DID:"
    },
    de: {
      title: "Webdesign Erfolgsgeschichten",
      subtitle: "Echte Ergebnisse, die wir für Unternehmen durch strategisches Webdesign und Entwicklung erzielt haben.",
      viewFull: "Vollständige Fallstudie ansehen",
      viewAll: "Alle Fallstudien ansehen",
      before: "VORHER:",
      after: "NACHHER:",
      whatWeDid: "WAS WIR GEMACHT HABEN:"
    }
  };
  
  const t = translations[language as 'en' | 'de'] || translations.en;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
          {t.title}
        </h2>
        
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
          {t.subtitle}
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {displayCases.map((study, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className={`h-56 ${study.image} bg-cover bg-center`} />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="flex-shrink-0 w-16 h-10 mr-4">
                    <AspectRatio ratio={16/10} className="h-full">
                      <img 
                        src={study.logo} 
                        alt={`${study.client} logo`} 
                        className="h-full w-full object-contain"
                      />
                    </AspectRatio>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-brand-primary block">{study.industry}</span>
                    <h3 className="text-xl font-bold text-brand-heading">{study.client}</h3>
                  </div>
                </div>
                
                <div className="mb-4 grid grid-cols-2 gap-4">
                  <div className="bg-brand-backgroundAlt p-3 rounded-md">
                    <h4 className="text-xs font-bold text-brand-primary mb-1">{t.before}</h4>
                    <p className="text-xs text-brand-text">{study.before}</p>
                  </div>
                  <div className="bg-brand-backgroundAlt p-3 rounded-md">
                    <h4 className="text-xs font-bold text-brand-primary mb-1">{t.after}</h4>
                    <p className="text-xs text-brand-text">{study.after}</p>
                  </div>
                </div>
                
                <p className="text-brand-text mb-3 text-sm font-medium">{study.result}</p>
                
                <div className="mb-3">
                  <h4 className="text-xs font-bold text-brand-heading mb-2">{t.whatWeDid}</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.services.map((service, sidx) => (
                      <span key={sidx} className="text-xs bg-gray-100 py-1 px-2 rounded-full text-brand-text">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {study.kpis.map((kpi, kpiIndex) => (
                    <div key={kpiIndex} className="text-xs font-medium text-brand-primary bg-brand-backgroundAlt p-2 rounded-md text-center">
                      {kpi}
                    </div>
                  ))}
                </div>
                
                <Link 
                  to={language === 'de' ? "/referenzen" : "/en/case-studies"} 
                  className="text-sm font-medium text-brand-primary hover:underline inline-flex items-center"
                >
                  {t.viewFull} <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" asChild>
            <Link to={language === 'de' ? "/referenzen" : "/en/case-studies"}>
              {t.viewAll} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WebDesignCaseStudies;
