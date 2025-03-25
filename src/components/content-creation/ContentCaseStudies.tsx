
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { caseStudiesData } from '@/components/CaseStudiesSection';

const ContentCaseStudies = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  // Select content-related case studies for display (first two cases)
  const relevantCases = isGerman 
    ? caseStudiesData.de.slice(0, 2)
    : caseStudiesData.en.slice(0, 2);
  
  const translations = {
    en: {
      title: "Real Results From Real Clients",
      subtitle: "See how our content strategies drive measurable business outcomes.",
      viewFull: "View Full Case Study",
      viewAll: "View All Case Studies"
    },
    de: {
      title: "Echte Ergebnisse von echten Kunden",
      subtitle: "Sehen Sie, wie unsere Content-Strategien messbare Geschäftsergebnisse erzielen.",
      viewFull: "Vollständige Fallstudie ansehen",
      viewAll: "Alle Fallstudien ansehen"
    }
  };
  
  const t = isGerman ? translations.de : translations.en;
  const caseStudiesPath = isGerman ? "/de/case-studies" : "/case-studies";

  return (
    <section className="py-24 bg-gradient-to-br from-brand-background via-white to-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
          {t.title}
        </h2>
        
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
          {t.subtitle}
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {relevantCases.map((study, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <h3 className="text-2xl font-bold mb-2 text-brand-heading">{study.client}</h3>
              <p className="text-brand-primary text-sm font-medium mb-6">{study.industry}</p>
              
              <div className="flex gap-6 mb-6">
                {study.impact.slice(0, 2).map((result, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div>
                      <p className="text-2xl font-bold text-brand-heading">{result.split(' ')[0]}</p>
                      <p className="text-sm text-brand-text">{result.split(' ').slice(1).join(' ')}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="text-brand-text mb-6">{study.title}</p>
              
              <Button variant="outline" size="sm" className="group" asChild>
                <Link to={caseStudiesPath}>
                  {t.viewFull}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="group" asChild>
            <Link to={caseStudiesPath}>
              {t.viewAll}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContentCaseStudies;
