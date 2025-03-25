
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
    title: 'Planning Your Setup',
    description: 'We define your technical needs, platforms, and features — always based on your business model.'
  },
  {
    icon: Code,
    number: '02',
    title: 'Clean Development',
    description: 'Your site is coded for speed, clarity, and scale — either CMS-based or with a full code-first structure.'
  },
  {
    icon: Database,
    number: '03',
    title: 'Backend or CMS Setup',
    description: 'If needed, we configure a CMS like WordPress — or build a lightweight backend-free solution.'
  },
  {
    icon: Activity,
    number: '04',
    title: 'Testing & QA',
    description: 'We check for speed, stability, SEO-readiness, and smooth performance across all devices.'
  },
  {
    icon: Rocket,
    number: '05',
    title: 'Launch & Support',
    description: 'We deploy your site, monitor results, and stay available for technical support and updates.'
  }
];

const WebDevProcess = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-background to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
          How We Build Websites That Last
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
