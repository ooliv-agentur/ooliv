
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const cases = [
  {
    client: "TechSolutions GmbH",
    result: "65% faster performance with custom React application",
    kpis: ["65% Speed Increase", "99.9% Uptime", "40% More User Engagement"],
    image: "bg-[url('/case-study-3.jpg')]"
  },
  {
    client: "LogistikPro AG",
    result: "Streamlined operations with integrated ERP platform",
    kpis: ["30% Cost Reduction", "85% Process Automation", "3.8x ROI"],
    image: "bg-[url('/case-study-4.jpg')]"
  }
];

const WebDevCaseStudies = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-brand-heading">
          Development Success Stories
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
        
        <div className="text-center">
          <Button variant="outline" asChild>
            <Link to="/case-studies">
              View All Development Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WebDevCaseStudies;
