
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const cases = [
  {
    client: "Scheurich – Manufacturing Brand",
    industry: "Manufacturing & Industrial",
    before: "Old website with poor lead generation and high bounce rate on mobile devices.",
    after: "Strategic redesign with clear user journeys and mobile-optimized experience.",
    result: "120% increase in qualified leads and 45% lower bounce rate.",
    services: ["Web Design", "UX Optimization", "Mobile Redesign", "CMS Implementation"],
    kpis: ["120% More Leads", "45% Lower Bounce Rate", "89% Mobile Conversion"],
    image: "bg-[url('/case-study-1.jpg')]"
  },
  {
    client: "COBUS – Enterprise Software",
    industry: "B2B SaaS & Technology",
    before: "Complex product demonstration process with low conversion from demo to sale.",
    after: "Streamlined website with clearer product positioning and demo request flow.",
    result: "80% more qualified sales opportunities and significantly improved user satisfaction.",
    services: ["Website Redesign", "Content Strategy", "UX Research", "CRM Integration"],
    kpis: ["80% More Qualified Leads", "3.2s Faster Load Time", "92% User Satisfaction"],
    image: "bg-[url('/case-study-2.jpg')]"
  }
];

const WebDesignCaseStudies = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
          Success Stories
        </h2>
        
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
          Real results we've delivered for businesses through strategic web design and development.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {cases.map((study, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
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
          ))}
        </div>
        
        <div className="text-center">
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

export default WebDesignCaseStudies;
