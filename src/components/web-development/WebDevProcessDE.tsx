
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const steps = [
  {
    number: '01',
    title: 'Strategie & Setup',
    description: 'Technische Ziele, Plattformwahl, Feature-Definition – auf Basis Ihres Geschäftsmodells.'
  },
  {
    number: '02',
    title: 'Entwicklung',
    description: 'Klar strukturierter Code – skalierbar, SEO-ready, sauber programmiert.'
  },
  {
    number: '03',
    title: 'CMS oder Backend (wenn nötig)',
    description: 'Als WordPress Agentur in Mainz setzen wir Ihr CMS so auf, dass Sie Inhalte flexibel pflegen können – oder wir entwickeln eine backendfreie Lösung mit klarem Code und maximaler Performance.'
  },
  {
    number: '04',
    title: 'Testing & Qualitätssicherung',
    description: 'Speed, SEO, Stabilität – auf allen Geräten.'
  },
  {
    number: '05',
    title: 'Launch & Betreuung',
    description: 'Go-live mit Setup von Tracking, Support & laufender Optimierung.'
  }
];

const WebDevProcessDE = () => {
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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 text-brand-heading">
          Unser Webentwicklungs-Prozess – von der Idee bis zum Livegang
        </h2>
        
        {/* Desktop Timeline View */}
        <div ref={timelineRef} className="hidden lg:block relative opacity-0 transition-all duration-700 mb-12">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-brand-backgroundAlt"></div>
          
          <div className="space-y-5"> {/* Further reduced vertical spacing between steps */}
            {steps.map((step, index) => (
              <div 
                key={index}
                ref={(el) => (stepRefs.current[index] = el)}
                className="opacity-0 transition-all duration-500 delay-[var(--delay)]"
                style={{ '--delay': `${(index + 1) * 150}ms` } as React.CSSProperties}
              >
                <div className="relative flex items-center">
                  {/* Content boxes with number circles aligned vertically centered to each box */}
                  {index % 2 === 0 ? (
                    <div className="grid grid-cols-2 w-full">
                      {/* Left side (even steps) */}
                      <div className="pr-10 flex justify-end">
                        <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 max-w-md transform transition-all duration-500 hover:shadow-lg relative">
                          <h3 className="text-xl font-bold mb-2 text-brand-primary text-right">
                            {step.title}
                          </h3>
                          <p className="text-brand-text text-right">{step.description}</p>
                        </div>
                      </div>
                      <div className="pl-10"></div>

                      {/* Number circle positioned vertically centered to the box */}
                      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className="w-10 h-10 rounded-full bg-[#333333] flex items-center justify-center shadow-sm">
                          <span className="text-white text-sm font-medium">{step.number}</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 w-full">
                      {/* Right side (odd steps) */}
                      <div className="pr-10"></div>
                      <div className="pl-10">
                        <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 max-w-md transform transition-all duration-500 hover:shadow-lg relative">
                          <h3 className="text-xl font-bold mb-2 text-brand-primary">
                            {step.title}
                          </h3>
                          <p className="text-brand-text">{step.description}</p>
                        </div>
                      </div>

                      {/* Number circle positioned vertically centered to the box */}
                      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className="w-10 h-10 rounded-full bg-[#333333] flex items-center justify-center shadow-sm">
                          <span className="text-white text-sm font-medium">{step.number}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile Cards View */}
        <div className="lg:hidden space-y-5"> {/* Reduced spacing for mobile */}
          {steps.map((step, index) => (
            <div 
              key={index}
              ref={(el) => (stepRefs.current[index + steps.length] = el)}
              className="relative bg-white p-6 rounded-lg shadow-md border border-gray-100 opacity-0 transition-all duration-500 mt-8"
              style={{ '--delay': `${(index + 1) * 150}ms` } as React.CSSProperties}
            >
              {/* Number placed at the top center of each box */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-5 h-9 w-9 bg-[#333333] rounded-full flex items-center justify-center shadow-sm">
                <span className="text-white text-sm font-medium">{step.number}</span>
              </div>
              
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold mb-2 text-brand-primary">{step.title}</h3>
                <p className="text-brand-text">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDevProcessDE;
