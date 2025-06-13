import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { caseStudiesData } from '@/components/CaseStudiesSection';
import Reveal from '@/components/animations/Reveal';
import OptimizedImage from '@/components/OptimizedImage';

const WebDevCaseStudies = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  // Use all 5 case studies instead of just selected ones
  const relevantCases = isGerman 
    ? caseStudiesData.de
    : caseStudiesData.en;
  
  const translations = {
    en: {
      title: "Development That Moves the Needle",
      subtitle: "Real-world results from custom development projects.",
      viewFull: "View Full Case Study",
      viewAll: "View All Case Studies",
      services: "SERVICES:"
    },
    de: {
      title: "Entwicklung, die wirklich etwas bewirkt",
      subtitle: "Echte Ergebnisse aus maßgeschneiderten Entwicklungsprojekten.",
      viewFull: "Vollständige Fallstudie ansehen",
      viewAll: "Alle Fallstudien ansehen",
      services: "LEISTUNGEN:"
    }
  };
  
  const t = isGerman ? translations.de : translations.en;
  const caseStudiesPath = isGerman ? "/case-studies" : "/en/case-studies";
  
  // Adapt case studies data for web development display format
  const cases = relevantCases.map(study => ({
    client: study.client,
    industry: study.industry,
    summary: study.headline,
    services: [
      isGerman ? "WordPress-Entwicklung" : "WordPress Development", 
      "ERP Integration", 
      isGerman ? "Performance-Optimierung" : "Performance Optimization"
    ], 
    kpis: study.impact.map(impact => impact.split(' ')[0]),
    image: study.image
  }));

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
            {t.title}
          </h2>
          
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
            {t.subtitle}
          </p>
        </Reveal>
        
        <Reveal delay={0.2}>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {cases.map((study, index) => (
                <CarouselItem key={index} className="md:basis-full">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="relative w-full aspect-[16/9]">
                      <OptimizedImage
                        src={study.image}
                        alt={`${study.client} development case study`}
                        width={600}
                        height={338}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        priority={index === 0}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 600px"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-sm font-medium text-brand-primary mb-1 block">{study.industry}</span>
                      <h3 className="text-xl font-bold mb-3 text-brand-heading">{study.client}</h3>
                      
                      <p className="text-brand-text mb-5">{study.summary}</p>
                      
                      <div className="mb-5">
                        <h4 className="text-xs font-bold text-brand-heading mb-2">{t.services}</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.services.map((service, sidx) => (
                            <span key={sidx} className="text-xs bg-gray-100 py-1 px-2 rounded-full text-brand-text">
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2 mb-5">
                        {study.kpis.map((kpi, kpiIndex) => (
                          <div key={kpiIndex} className="text-xs font-medium text-brand-primary bg-brand-backgroundAlt p-2 rounded-md text-center">
                            {kpi}
                          </div>
                        ))}
                      </div>
                      
                      <Link 
                        to={caseStudiesPath} 
                        className="text-sm font-medium text-brand-primary hover:underline inline-flex items-center"
                      >
                        {t.viewFull} <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <CarouselPrevious className="relative static transform-none mx-2" />
              <CarouselNext className="relative static transform-none mx-2" />
            </div>
          </Carousel>
        </Reveal>
        
        <Reveal delay={0.3}>
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link to={caseStudiesPath}>
                {t.viewAll} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default WebDevCaseStudies;
