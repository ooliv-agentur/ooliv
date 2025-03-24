
import React from 'react';
import { CalendarCheck, PenTool, Monitor, CheckCircle, RefreshCw } from 'lucide-react';

const steps = [
  {
    icon: CalendarCheck,
    number: '01',
    title: 'Kickoff & Content Planning',
    description: 'We define goals, tone of voice, and formats – aligned with SEO and user journey.'
  },
  {
    icon: PenTool,
    number: '02',
    title: 'Content Design & Production',
    description: 'Text, images, videos, illustrations: Everything is created modularly and on-brand.'
  },
  {
    icon: Monitor,
    number: '03',
    title: 'Approval & Integration',
    description: 'Direct implementation in the CMS or by our dev team – technically clean & visually consistent.'
  },
  {
    icon: CheckCircle,
    number: '04',
    title: 'Launch Check',
    description: 'Final testing: Responsiveness, SEO, loading times, accessibility.'
  },
  {
    icon: RefreshCw,
    number: '05',
    title: 'Ongoing Support',
    description: 'Continuous maintenance, optimization & expansion. Optionally with monthly content package.'
  }
];

const ContentProcess = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
          Our Content Process
        </h2>
        
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
          From strategy to publication—how we create content that drives results.
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

export default ContentProcess;
