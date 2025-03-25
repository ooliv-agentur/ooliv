
import React from 'react';
import { CalendarCheck, PenTool, Monitor, CheckCircle, RefreshCw } from 'lucide-react';

const steps = [
  {
    icon: CalendarCheck,
    number: '01',
    title: 'Strategy & Kickoff',
    description: 'We start by understanding your goals, brand tone, and doing SEO research (using Ahrefs) to ensure we're on the right track.'
  },
  {
    icon: PenTool,
    number: '02',
    title: 'Creation & Design',
    description: 'We create your content, including copy, visuals, and video — all designed for conversion and user experience.'
  },
  {
    icon: Monitor,
    number: '03',
    title: 'Review & Integration',
    description: 'You review the content, and we integrate it into your site — either directly or through your CMS.'
  },
  {
    icon: CheckCircle,
    number: '04',
    title: 'Testing & Launch',
    description: 'We ensure SEO checks, speed, and structure before we go live.'
  },
  {
    icon: RefreshCw,
    number: '05',
    title: 'Ongoing Content Support',
    description: 'After launch, we offer monthly content packages to keep your site fresh and aligned with your SEO and business goals.'
  }
];

const ContentProcess = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
          From Content Chaos to Clarity — Here's How We Work
        </h2>
        
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
          A proven process that ensures your content strategy delivers measurable business results.
        </p>
        
        <div className="overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-none md:overflow-visible">
          <div className="flex flex-nowrap gap-6 min-w-max md:grid md:grid-cols-5 md:min-w-0">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex-1 min-w-[280px] snap-center"
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
        
        {/* Scroll indicator for mobile */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {steps.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full ${i === 0 ? 'w-6 bg-brand-primary' : 'w-2 bg-gray-300'}`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentProcess;
