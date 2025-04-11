
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { caseStudiesData } from '@/components/CaseStudiesSection';

// Use the actual case studies data instead of hardcoded values
const getWebDesignCases = (language: 'en' | 'de') => {
  const allCases = caseStudiesData[language];
  // Select 2 case studies that have good web design examples
  return allCases.slice(0, 2);
};

const WebDesignCaseStudies = () => {
  const { language } = useLanguage();
  const displayCases = getWebDesignCases(language as 'en' | 'de');
  
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

  // Transform case studies data to match the WebDesignCaseStudies format
  const cases = displayCases.map((study) => ({
    client: study.client,
    industry: study.industry,
    before: "Old website with poor lead generation and high bounce rate on mobile devices.",
    after: "Strategic webdesign with clear user journeys and mobile-optimized experience.",
    result: study.quote,
    services: study.impact.slice(0, 4),
    kpis: ["80% More Leads", "45% Lower Bounce Rate", "92% User Satisfaction"],
    image: study.image,
    logo: study.logo
  }));

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
          {cases.map((study, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-56 bg-cover bg-center" style={{ backgroundImage: `url(${study.image})` }} />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {study.logo && (
                    <div className="h-10 w-auto mr-3">
                      <AspectRatio ratio={3/1} className="h-10 w-auto">
                        <img 
                          src={study.logo} 
                          alt={`${study.client} logo`}
                          className="h-10 w-auto object-contain object-left"
                        />
                      </AspectRatio>
                    </div>
                  )}
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
                  to={language === 'de' ? "/de/fallstudien" : "/case-studies"} 
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
            <Link to={language === 'de' ? "/de/fallstudien" : "/case-studies"}>
              {t.viewAll} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WebDesignCaseStudies;
