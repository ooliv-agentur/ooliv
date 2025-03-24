
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const cases = [
  {
    client: "Scheurich – Lifestyle Brand",
    result: "120% increase in organic traffic through strategic redesign.",
    kpis: ["120% Traffic Increase", "45% Lower Bounce Rate", "89% Mobile Conversion"],
    image: "bg-[url('/case-study-1.jpg')]"
  },
  {
    client: "COBUS – ERP Solutions",
    result: "80% more leads through targeted web optimization.",
    kpis: ["80% More Leads", "3.2s Faster Load Time", "92% User Satisfaction"],
    image: "bg-[url('/case-study-2.jpg')]"
  }
];

const WebDesignCaseStudies = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-brand-heading">
          Successful Web Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {cases.map((study, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow`}
            >
              <div className={`h-48 ${study.image} bg-cover bg-center`} />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-brand-heading">{study.client}</h3>
                <p className="text-brand-text mb-4">{study.result}</p>
                <div className="grid grid-cols-3 gap-4">
                  {study.kpis.map((kpi, kpiIndex) => (
                    <div key={kpiIndex} className="text-sm font-medium text-brand-primary">
                      {kpi}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text

-center">
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
