
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const SEOCaseStudies = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  // Define case studies data locally to match the structure from CaseStudiesSection
  const caseStudiesData = {
    en: [
      {
        client: "Scheurich – Manufacturing Brand",
        industry: "Manufacturing & Industrial",
        headline: "Strategic webdesign with clear user journeys and mobile-optimized experience.",
        impact: ["120% More Leads", "45% Lower Bounce Rate", "89% Mobile Conversion"],
        logo: "/lovable-uploads/37da8d9c-7991-413d-beba-789d86fe08c8.png"
      },
      {
        client: "COBUS – Enterprise Software",
        industry: "B2B SaaS & Technology", 
        headline: "Streamlined website with clearer product positioning and demo request flow.",
        impact: ["80% More Qualified Leads", "3.2s Faster Load Time", "92% User Satisfaction"],
        logo: "/lovable-uploads/567e9c1f-f8db-451c-9eb4-3f5865307084.png"
      }
    ],
    de: [
      {
        client: "Scheurich – Keramik & Lifestyle",
        industry: "Fertigung & Industrie",
        headline: "Strategisches Webdesign mit klaren Nutzerführungen und mobiloptimierter Erfahrung.",
        impact: ["120% mehr Leads", "45% weniger Absprünge", "89% Mobile Conversion"],
        logo: "/lovable-uploads/37da8d9c-7991-413d-beba-789d86fe08c8.png"
      },
      {
        client: "COBUS – Enterprise Software", 
        industry: "B2B SaaS & Technologie",
        headline: "Optimierte Website mit klarerer Produktpositionierung und Demo-Anfrage-Fluss.",
        impact: ["80% mehr qualifizierte Leads", "3,2s schnellere Ladezeit", "92% Nutzerzufriedenheit"],
        logo: "/lovable-uploads/567e9c1f-f8db-451c-9eb4-3f5865307084.png"
      }
    ]
  };
  
  const relevantCases = isGerman 
    ? caseStudiesData.de
    : caseStudiesData.en;
  
  const translations = {
    en: {
      title: "Real SEO Results for Real Businesses",
      subtitle: "See how our Mainz-based SEO strategies drive measurable business outcomes.",
      viewFull: "View Full Case Study",
      viewAll: "View All Case Studies"
    },
    de: {
      title: "Echte SEO-Ergebnisse für echte Unternehmen",
      subtitle: "Sehen Sie, wie unsere SEO-Strategien aus Mainz messbare Geschäftsergebnisse erzielen.",
      viewFull: "Vollständige Fallstudie ansehen",
      viewAll: "Alle Fallstudien ansehen"
    }
  };
  
  const t = isGerman ? translations.de : translations.en;
  const caseStudiesPath = isGerman ? "/referenzen" : "/en/case-studies";

  return (
    <section className="py-24 bg-medico-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 text-medico-darkGreen" style={{ lineHeight: '1.3' }}>
          {t.title}
        </h2>
        <div className="w-20 h-1 bg-medico-turquoise mx-auto mb-8"></div>
        
        <p className="text-center text-lg md:text-xl mb-12 max-w-3xl mx-auto text-medico-darkGreen/80" style={{ lineHeight: '1.6' }}>
          {t.subtitle}
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {relevantCases.map((study, index) => (
            <div 
              key={index}
              className="bg-medico-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-medico-turquoise/10"
            >
              <div className="flex items-center mb-4">
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
                  <h3 className="text-xl font-bold mb-1 text-medico-darkGreen">{study.client}</h3>
                  <p className="text-medico-turquoise text-sm font-medium">{study.industry}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2 mb-6">
                {study.impact.slice(0, 2).map((result, idx) => (
                  <div key={idx} className="text-xs font-medium text-medico-turquoise bg-medico-mint/20 p-2 rounded-md text-center">
                    {result}
                  </div>
                ))}
              </div>
              
              <p className="text-medico-darkGreen/80 mb-6 text-sm">{study.headline}</p>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="rounded-full border-2 border-medico-turquoise text-medico-turquoise hover:bg-medico-turquoise hover:text-medico-white font-medium transition-all duration-300"
                asChild
              >
                <Link to={caseStudiesPath}>
                  {t.viewFull}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full border-2 border-medico-turquoise text-medico-turquoise hover:bg-medico-turquoise hover:text-medico-white font-medium px-8 py-3 transition-all duration-300"
            asChild
          >
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

export default SEOCaseStudies;
