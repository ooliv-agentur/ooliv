
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FileSearch, PencilRuler, Code, TestTube, Rocket } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We analyze your business goals, target audience, and competitive landscape to create a strategic foundation for your web project.",
    icon: FileSearch,
    deliverables: ["Business Goals Analysis", "Competitor Research", "User Persona Development", "Project Roadmap"]
  },
  {
    number: "02",
    title: "UX Design & Wireframing",
    description: "We design intuitive user flows and information architecture that guide visitors toward your business objectives.",
    icon: PencilRuler,
    deliverables: ["Sitemap Creation", "User Flow Mapping", "Wireframing", "Interactive Prototypes"]
  },
  {
    number: "03",
    title: "Development & Integration",
    description: "We build your website with clean, efficient code and integrate all necessary systems and third-party tools.",
    icon: Code,
    deliverables: ["Frontend Development", "CMS Implementation", "API Integrations", "Performance Optimization"]
  },
  {
    number: "04",
    title: "Testing & Quality Assurance",
    description: "We rigorously test your website across devices, browsers, and user scenarios to ensure flawless performance.",
    icon: TestTube,
    deliverables: ["Cross-Browser Testing", "Mobile Responsiveness", "Load Speed Optimization", "Security Checks"]
  },
  {
    number: "05",
    title: "Launch & Continuous Improvement",
    description: "We deploy your website and implement ongoing analytics and optimization to continuously improve performance.",
    icon: Rocket,
    deliverables: ["Site Deployment", "Analytics Setup", "Post-Launch Support", "Performance Monitoring"]
  }
];

const WebDesignProcess = () => {
  return (
    <section className="py-24 bg-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
          Our Results-Driven Web Design Process
        </h2>
        
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
          A systematic approach that turns your business objectives into measurable digital results.
        </p>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {steps.map((step, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <div className="p-1">
                  <div className="bg-white rounded-lg p-6 h-full shadow-sm">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                        {step.number}
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <step.icon className="h-5 w-5 text-brand-primary mr-2" />
                          <h3 className="text-xl font-bold text-brand-heading">{step.title}</h3>
                        </div>
                        <p className="text-brand-text text-sm mb-4">{step.description}</p>
                        
                        <div className="bg-brand-backgroundAlt p-3 rounded-md">
                          <p className="text-xs font-medium text-brand-primary mb-2">DELIVERABLES:</p>
                          <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                            {step.deliverables.map((deliverable, idx) => (
                              <li key={idx} className="text-xs text-brand-text flex items-center">
                                <div className="h-1 w-1 rounded-full bg-brand-primary mr-1.5"></div>
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="mr-2" />
            <CarouselNext className="ml-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default WebDesignProcess;
