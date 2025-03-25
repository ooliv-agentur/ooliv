
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';

const cases = [
  {
    client: "ERP Manufacturer",
    industry: "Manufacturing & Industrial",
    summary: "Slow legacy site with complex ERP needs transformed into a fast, optimized WordPress setup with custom integration.",
    services: ["WordPress Development", "ERP Integration", "Performance Optimization"],
    kpis: ["+80% page speed", "-42% support tickets", "+3x admin efficiency"],
    image: "bg-[url('/case-study-1.jpg')]"
  },
  {
    client: "Franchise Brand",
    industry: "Retail & Franchise",
    summary: "Multiple disconnected websites consolidated into a centralized WordPress multisite setup for 17 locations.",
    services: ["WordPress Multisite", "Content Migration", "SEO Strategy"],
    kpis: ["1 CMS → 17 sites", "+55% faster rollout", "+200% SEO visibility"],
    image: "bg-[url('/case-study-2.jpg')]"
  }
];

const WebDevCaseStudies = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
          Development That Moves the Needle
        </h2>
        
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
          Real-world results from custom development projects.
        </p>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {cases.map((study, index) => (
              <CarouselItem key={index} className="md:basis-full">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className={`h-48 ${study.image} bg-cover bg-center`} />
                  <div className="p-6">
                    <span className="text-sm font-medium text-brand-primary mb-1 block">{study.industry}</span>
                    <h3 className="text-xl font-bold mb-3 text-brand-heading">{study.client}</h3>
                    
                    <p className="text-brand-text mb-5">{study.summary}</p>
                    
                    <div className="mb-5">
                      <h4 className="text-xs font-bold text-brand-heading mb-2">SERVICES:</h4>
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
                      to="/case-studies" 
                      className="text-sm font-medium text-brand-primary hover:underline inline-flex items-center"
                    >
                      View Full Case Study <ArrowRight className="ml-1 h-3 w-3" />
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
        
        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <Link to="/case-studies">
              View All Case Studies <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WebDevCaseStudies;
