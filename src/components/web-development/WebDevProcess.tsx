
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const steps = [
  {
    number: '01',
    title: 'Strategy & Setup',
    description: 'Technical goals, platform selection, feature planning – all based on your business model.'
  },
  {
    number: '02',
    title: 'Development',
    description: 'Structured, scalable, SEO-ready code.'
  },
  {
    number: '03',
    title: 'CMS or Backend (if needed)',
    description: 'As a WordPress development agency, we offer flexible CMS setups – or we go backend-free for maximum performance.'
  },
  {
    number: '04',
    title: 'Testing & QA',
    description: 'Speed, stability, SEO – across all devices.'
  },
  {
    number: '05',
    title: 'Launch & Support',
    description: 'Go-live with tracking setup, technical support, and ongoing optimization.'
  }
];

const WebDevProcess = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in', 'opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    stepRefs.current.forEach((step) => {
      if (step) {
        observer.observe(step);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-brand-background to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 text-brand-heading">
          Our Web Development Process
        </h2>
        
        {/* Desktop Timeline View */}
        <div ref={timelineRef} className="hidden lg:block relative opacity-0 transition-all duration-700">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-brand-backgroundAlt"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div 
                key={index}
                ref={(el) => (stepRefs.current[index] = el)}
                className="opacity-0 transition-all duration-500 delay-[var(--delay)]"
                style={{ '--delay': `${(index + 1) * 150}ms` } as React.CSSProperties}
              >
                <div className="relative flex">
                  {/* Step Number (centered on timeline) */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-14 h-14 rounded-full bg-brand-primary flex items-center justify-center shadow-md">
                      <span className="text-white text-xl font-bold">{step.number}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 w-full">
                    {/* Left Side (even steps) */}
                    {index % 2 === 0 ? (
                      <>
                        <div className="pr-12 flex justify-end">
                          <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 max-w-md transform transition-all duration-500 hover:shadow-lg">
                            <h3 className="text-xl font-bold mb-2 text-brand-heading text-right">
                              {step.title}
                            </h3>
                            <p className="text-brand-text text-right">{step.description}</p>
                          </div>
                        </div>
                        <div className="pl-12"></div>
                      </>
                    ) : (
                      <>
                        <div className="pr-12"></div>
                        <div className="pl-12">
                          <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 max-w-md transform transition-all duration-500 hover:shadow-lg">
                            <h3 className="text-xl font-bold mb-2 text-brand-heading">
                              {step.title}
                            </h3>
                            <p className="text-brand-text">{step.description}</p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile Cards View */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              ref={(el) => (stepRefs.current[index + steps.length] = el)}
              className="relative bg-white p-6 rounded-lg shadow-md border border-gray-100 opacity-0 transition-all duration-500"
              style={{ '--delay': `${(index + 1) * 150}ms` } as React.CSSProperties}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-5 h-10 w-10 bg-brand-primary rounded-full flex items-center justify-center shadow-md">
                <span className="text-white font-bold">{step.number}</span>
              </div>
              
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold mb-2 text-brand-heading">{step.title}</h3>
                <p className="text-brand-text">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDevProcess;
