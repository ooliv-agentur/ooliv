
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const cases = [
  {
    client: "Scheurich – Manufacturing Brand",
    industry: "Manufacturing & Industrial",
    result: "Increased lead generation by 120% through strategic web redesign and user experience optimization.",
    kpis: ["120% More Leads", "45% Lower Bounce Rate", "89% Mobile Conversion"],
    image: "bg-[url('/case-study-1.jpg')]"
  },
  {
    client: "COBUS – Enterprise Software",
    industry: "B2B SaaS & Technology",
    result: "80% higher qualified sales opportunities and improved product demonstration process.",
    kpis: ["80% More Qualified Leads", "3.2s Faster Load Time", "92% User Satisfaction"],
    image: "bg-[url('/case-study-2.jpg')]"
  }
];

const WebDesignCaseStudies = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
          Web Design Success Stories
        </h2>
        
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
          Real results we've delivered for B2B clients through strategic web design and development.
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
                <p className="text-brand-text mb-4 text-sm">{study.result}</p>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {study.kpis.map((kpi, kpiIndex) => (
                    <div key={kpiIndex} className="text-sm font-medium text-brand-primary bg-brand-backgroundAlt p-2 rounded-md text-center">
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
