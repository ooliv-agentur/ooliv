
import React from 'react';
import { FileSearch, Wrench, FileEdit, Link as LinkIcon, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: FileSearch,
    number: '01',
    title: 'Audit & Strategy',
    description: 'We start with a full SEO audit and define a tailored roadmap based on your KPIs.'
  },
  {
    icon: Wrench,
    number: '02',
    title: 'Fix & Structure',
    description: 'We clean up technical issues and restructure your site for Google and users alike.'
  },
  {
    icon: FileEdit,
    number: '03',
    title: 'Keyword & Content',
    description: 'We revise or create content around relevant keywords and semantic structures.'
  },
  {
    icon: LinkIcon,
    number: '04',
    title: 'Authority Building',
    description: 'We implement internal linking strategies and coordinate backlink campaigns.'
  },
  {
    icon: BarChart3,
    number: '05',
    title: 'Monitoring & Scaling',
    description: 'Using tools like Ahrefs and Google Search Console, we track results and refine your strategy.'
  }
];

const SEOProcess = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
          From Audit to Authority — Our Proven SEO Flow
        </h2>
        
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
          Our SEO experts in Mainz follow a systematic approach to improve your organic performance
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
