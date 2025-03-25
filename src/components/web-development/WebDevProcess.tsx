
import React from 'react';
import { Lightbulb, Code, Database, Activity, Rocket } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from '@/components/ui/carousel';

const steps = [
  {
    icon: Lightbulb,
    number: '01',
    title: 'Technical Planning',
    description: 'Tech stack selection, feature scoping, and success definition'
  },
  {
    icon: Code,
    number: '02',
    title: 'Modular Development',
    description: 'Clean, scalable codebase built to evolve over time'
  },
  {
    icon: Database,
    number: '03',
    title: 'CMS Setup & Integrations',
    description: 'Easy-to-use backend with smart integrations (CRM, PIM, etc.)'
  },
  {
    icon: Activity,
    number: '04',
    title: 'Testing & QA',
    description: 'Speed, SEO, and cross-device testing to ensure stability'
  },
  {
    icon: Rocket,
    number: '05',
    title: 'Launch & Support',
    description: 'Live deployment, monitoring, and proactive performance optimization'
  }
];

const WebDevProcess = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-background to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
          From Planning to Post-Launch—We Build for Longevity
        </h2>
        
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
          A proven approach that ensures your new website runs fast, scales well, and delivers long-term business value.
        </p>
        
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6">
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
                <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                  <div className="h-0.5 w-6 bg-brand-primary"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="block md:hidden mt-6">
          <Carousel className="w-full">
            <CarouselContent>
              {steps.map((step, index) => (
                <CarouselItem key={index} className="basis-4/5">
                  <div 
                    className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 relative"
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
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="mx-2 static" />
              <CarouselNext className="mx-2 static" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default WebDevProcess;
