
import React from 'react';
import { Lightbulb, Code, Database, Activity, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Lightbulb,
    number: '01',
    title: 'Technical Planning & Stack Selection',
    description: 'Together we define what your site should do—and choose the best tools to make it happen.'
  },
  {
    icon: Code,
    number: '02',
    title: 'Modular Development',
    description: 'Scalable codebase that allows for future expansions, integrations, and updates.'
  },
  {
    icon: Database,
    number: '03',
    title: 'CMS & Integrations',
    description: 'We set up intuitive CMS solutions and integrate tools like CRMs, PIMs, or ERP systems.'
  },
  {
    icon: Activity,
    number: '04',
    title: 'Testing & Optimization',
    description: 'Speed, SEO, browser compatibility, security—we fine-tune every part before launch.'
  },
  {
    icon: Rocket,
    number: '05',
    title: 'Deployment & Ongoing Support',
    description: 'Launch-ready—and built for the long run. We support updates, performance, and technical needs.'
  }
];

const WebDevProcess = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-background to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
          How We Build Your Website – Our Development Process
        </h2>
        
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
          A structured approach that delivers reliable, scalable, and maintainable websites.
        </p>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 relative"
            >
              <div className="text-xs font-bold text-brand-primary absolute top-4 right-4">
                {step.number}
              </div>
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-brand-backgroundAlt inline-flex">
                  <step.icon className="h-6 w-6 text-brand-primary" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-brand-heading text-center">
                {step.title}
              </h3>
              <p className="text-sm text-brand-text text-center">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                  <div className="h-0.5 w-6 bg-brand-primary"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDevProcess;
