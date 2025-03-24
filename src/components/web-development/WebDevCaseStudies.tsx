
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
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
    client: "ERP Manufacturer Site",
    industry: "Manufacturing & Industrial",
    before: "Slow-loading legacy website with poor mobile experience and complex backend.",
    after: "Optimized WordPress setup with custom ERP integration and responsive design.",
    result: "Performance and admin efficiency significantly improved while maintaining complex functionality.",
    services: ["WordPress Development", "ERP Integration", "Performance Optimization", "Custom Admin"],
    kpis: ["+80% page speed", "-42% technical support tickets", "+3x admin efficiency"],
    image: "bg-[url('/case-study-1.jpg')]"
  },
  {
    client: "Multisite Setup for Franchise Brand",
    industry: "Retail & Franchise",
    before: "Multiple disconnected websites with inconsistent branding and duplicate content management.",
    after: "Unified WordPress multisite setup with central control and local customization options.",
    result: "Centralized content management with significant improvements in SEO performance.",
    services: ["WordPress Multisite", "Content Migration", "SEO Strategy", "Custom User Roles"],
    kpis: ["1 CMS, 17 local sites", "+55% faster content rollout", "+200% SEO visibility growth"],
    image: "bg-[url('/case-study-2.jpg')]"
  }
];

const WebDevCaseStudies = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
          Real Results Through Custom Development
        </h2>
        
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
          See how our development solutions have transformed businesses and improved key metrics.
        </p>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {cases.map((study, index) => (
              <CarouselItem key={index} className="md:basis-full">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className={`h-56 ${study.image} bg-cover bg-center`} />
                  <div className="p-6">
                    <span className="text-sm font-medium text-brand-primary mb-1 block">{study.industry}</span>
                    <h3 className="text-xl font-bold mb-3 text-brand-heading">{study.client}</h3>
                    
                    <div className="mb-4 grid grid-cols-2 gap-4">
                      <div className="bg-brand-backgroundAlt p-3 rounded-md">
                        <h4 className="text-xs font-bold text-brand-primary mb-1">BEFORE:</h4>
                        <p className="text-xs text-brand-text">{study.before}</p>
                      </div>
                      <div className="bg-brand-backgroundAlt p-3 rounded-md">
                        <h4 className="text-xs font-bold text-brand-primary mb-1">AFTER:</h4>
                        <p className="text-xs text-brand-text">{study.after}</p>
                      </div>
                    </div>
                    
                    <p className="text-brand-text mb-3 text-sm font-medium">{study.result}</p>
                    
                    <div className="mb-3">
                      <h4 className="text-xs font-bold text-brand-heading mb-2">WHAT WE DID:</h4>
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
