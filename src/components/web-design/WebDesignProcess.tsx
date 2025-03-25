
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
    title: "Strategy & Planning",
    description: "We define your goals, study your competitors, and create a clear roadmap.",
    icon: FileSearch,
    deliverables: ["Business Goals Analysis", "Competitor Research", "User Personas", "Project Roadmap"]
  },
  {
    number: "02",
    title: "Structure & Content",
    description: "We plan your pages, write the content, and map out the wireframes.",
    icon: PencilRuler,
    deliverables: ["Sitemap Creation", "Content Strategy", "Wireframes", "UX Planning"]
  },
  {
    number: "03",
    title: "Design & Development",
    description: "We build your site cleanly, responsively, and ready to scale.",
    icon: Code,
    deliverables: ["Custom Development", "Responsive Design", "Integrations", "Performance Tuning"]
  },
  {
    number: "04",
    title: "Testing & QA",
    description: "We test speed, design, SEO, and mobile experience across all devices.",
    icon: TestTube,
    deliverables: ["Browser Testing", "Mobile Checks", "Speed Tests", "Functionality Checks"]
  },
  {
    number: "05",
    title: "Launch & Support",
    description: "We go live — then stay available for updates, improvements, and scaling.",
    icon: Rocket,
    deliverables: ["Site Deployment", "Analytics Setup", "Post-Launch Support", "Ongoing Monitoring"]
  }
];

const WebDesignProcess = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
          From Strategy to Launch — Here's How We Work Together
        </h2>
        
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
          A clear, collaborative approach that turns your business objectives into a website that works.
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
                          <p className="text-xs font-medium text-brand-primary mb-2">WHAT WE DELIVER:</p>
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
