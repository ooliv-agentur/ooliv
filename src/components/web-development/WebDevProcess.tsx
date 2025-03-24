
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const steps = [
  {
    number: "01",
    title: "Requirements Analysis",
    description: "We thoroughly analyze your business needs, technical requirements, and user expectations to create a comprehensive development roadmap."
  },
  {
    number: "02",
    title: "Architecture Planning",
    description: "Our experts design a robust technical architecture, selecting the optimal technologies and frameworks for your specific project goals."
  },
  {
    number: "03",
    title: "Agile Development",
    description: "Using iterative development cycles, we build your application with continuous integration and regular client feedback throughout the process."
  },
  {
    number: "04",
    title: "Quality Assurance",
    description: "Rigorous testing across devices, browsers, and user scenarios ensures a bug-free, secure, and optimized final product."
  },
  {
    number: "05",
    title: "Deployment & Support",
    description: "Smooth launch with comprehensive documentation, training, and ongoing technical support to ensure continued success."
  }
];

const WebDevProcess = () => {
  return (
    <section className="py-24 bg-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-brand-heading">
          Our Development Methodology
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {steps.map((step, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
                  <div className="bg-white rounded-lg p-6 h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                        {step.number}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-brand-heading">{step.title}</h3>
                        <p className="text-brand-text">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default WebDevProcess;
