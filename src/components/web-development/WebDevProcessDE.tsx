
import React from 'react';
import { Compass, Code, Database, CheckCircle, LifeBuoy } from 'lucide-react';

const steps = [
  {
    icon: Compass,
    number: '01',
    title: 'Strategie & Setup',
    description: 'Technische Ziele, Plattformwahl, Feature-Definition – auf Basis Ihres Geschäftsmodells.'
  },
  {
    icon: Code,
    number: '02',
    title: 'Entwicklung',
    description: 'Klar strukturierter Code – skalierbar, SEO-ready, sauber programmiert.'
  },
  {
    icon: Database,
    number: '03',
    title: 'CMS oder Backend (wenn nötig)',
    description: 'Als WordPress Agentur in Mainz setzen wir Ihr CMS so auf, dass Sie Inhalte flexibel pflegen können – oder wir entwickeln eine backendfreie Lösung mit klarem Code und maximaler Performance.'
  },
  {
    icon: CheckCircle,
    number: '04',
    title: 'Testing & Qualitätssicherung',
    description: 'Speed, SEO, Stabilität – auf allen Geräten.'
  },
  {
    icon: LifeBuoy,
    number: '05',
    title: 'Launch & Betreuung',
    description: 'Go-live mit Setup von Tracking, Support & laufender Optimierung.'
  }
];

const WebDevProcessDE = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
          Unser Webentwicklungs-Prozess – von der Idee bis zum Livegang
        </h2>
        
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

export default WebDevProcessDE;
