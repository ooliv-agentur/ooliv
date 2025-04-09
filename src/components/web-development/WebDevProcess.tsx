
import React from 'react';
import { Lightbulb, Code, Database, Activity, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Lightbulb,
    number: '01',
    title: 'Strategy & Setup',
    description: 'Technical goals, platform selection, feature planning – all based on your business model.'
  },
  {
    icon: Code,
    number: '02',
    title: 'Development',
    description: 'Structured, scalable, SEO-ready code.'
  },
  {
    icon: Database,
    number: '03',
    title: 'CMS or Backend (if needed)',
    description: 'As a WordPress development agency, we offer flexible CMS setups – or we go backend-free for maximum performance.'
  },
  {
    icon: Activity,
    number: '04',
    title: 'Testing & QA',
    description: 'Speed, stability, SEO – across all devices.'
  },
  {
    icon: Rocket,
    number: '05',
    title: 'Launch & Support',
    description: 'Go-live with tracking setup, technical support, and ongoing optimization.'
  }
];

const WebDevProcess = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-background to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-brand-heading">
          Our Web Development Process
        </h2>
        
        {/* Desktop Timeline View */}
        <div className="hidden lg:flex flex-col relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-brand-backgroundAlt"></div>
          
          {steps.map((step, index) => (
            <div key={index} className={`flex mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              {/* Content Side */}
              <div className="w-5/12">
                <div className={`p-6 bg-white rounded-lg shadow-sm border border-gray-100 
                              ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                  <h3 className="text-xl font-bold mb-2 text-brand-heading">
                    {step.title}
                  </h3>
                  <p className="text-brand-text">{step.description}</p>
                </div>
              </div>
              
              {/* Middle Icon */}
              <div className="w-2/12 flex justify-center">
                <div className="relative">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                                w-14 h-14 rounded-full bg-brand-primary flex items-center justify-center 
                                z-10 shadow-md">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-10 mb-2">
                    <span className="bg-brand-primary text-white text-sm font-bold py-1 px-2 rounded-full">
                      {index + 1}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Empty Side */}
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
        
        {/* Mobile Cards View */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="absolute top-0 right-0 h-12 w-12 bg-brand-primary rounded-bl-lg flex items-center justify-center">
                <span className="text-white font-bold">{index + 1}</span>
              </div>
              
              <div className="flex items-start mt-4">
                <div className="p-3 rounded-full bg-brand-backgroundAlt mr-4">
                  <step.icon className="h-6 w-6 text-brand-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-brand-heading">{step.title}</h3>
                  <p className="text-brand-text">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDevProcess;
