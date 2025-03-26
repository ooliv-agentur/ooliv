
import React from 'react';
import { FileSearch, Wrench, FileEdit, Link as LinkIcon, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: FileSearch,
    number: '01',
    title: 'Audit & Strategy',
    description: 'Initial SEO audit + customized roadmap based on your business goals'
  },
  {
    icon: Wrench,
    number: '02',
    title: 'Fix & Structure',
    description: 'Resolve technical issues and build SEO-ready site structure'
  },
  {
    icon: FileEdit,
    number: '03',
    title: 'Keywords & Content',
    description: 'Create or optimize content around high-potential keywords'
  },
  {
    icon: LinkIcon,
    number: '04',
    title: 'Authority Building',
    description: 'Implement internal link structure and run backlink campaigns'
  },
  {
    icon: BarChart3,
    number: '05',
    title: 'Tracking & Scaling',
    description: 'Use tools like Ahrefs & Search Console to refine and scale SEO efforts'
  }
];

const SEOProcess = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
          🔁 Our SEO Process — From Audit to Authority
        </h2>
        
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
          Our Mainz-based SEO experts follow a systematic approach to improve your organic performance
        </p>
        
        <div className="overflow-x-auto pb-6">
          <div className="flex flex-col md:flex-row gap-6 min-w-max md:min-w-0">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex-1 min-w-[280px]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="p-3 rounded-full bg-brand-backgroundAlt">
                      <step.icon className="h-6 w-6 text-brand-primary" />
                    </div>
                    <div className="h-full w-0.5 bg-brand-backgroundAlt mt-2 mb-2 hidden md:block"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-brand-heading flex items-center gap-2">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-primary text-white text-sm">
                        {step.number.split('')[1]}
                      </span>
                      {step.title}
                    </h3>
                    <p className="text-brand-text">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOProcess;
