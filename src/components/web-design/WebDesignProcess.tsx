
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
    title: "Strategy & Planning",
    description: "We align your business goals with strategic web solutions, selecting the optimal platform for your needs."
  },
  {
    number: "02",
    title: "Custom Design & UX",
    description: "User-centric designs that capture attention, simplify navigation, and increase conversions."
  },
  {
    number: "03",
    title: "Tailored Development",
    description: "Robust, secure, and scalable website builds customized for your business workflows."
  },
  {
    number: "04",
    title: "Quality Assurance & Testing",
    description: "Comprehensive testing to ensure flawless functionality across all devices and browsers."
  },
  {
    number: "05",
    title: "Launch & Ongoing Support",
    description: "Continuous support and optimization to keep your website performing at its best."
  }
];

const WebDesignProcess = () => {
  return (
    <section className="py-24 bg-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-brand-heading">
          How We Create Websites That Drive Results
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

export default WebDesignProcess;
