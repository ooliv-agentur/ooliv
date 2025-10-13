import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { Star } from 'lucide-react';

const WebsiteRelaunchProof = () => {
  const caseStudies = [
    {
      title: "B2B SaaS Platform",
      result: "+180% qualified leads",
      image: "/lovable-uploads/43cb7284-8e75-4a51-9784-67c81a6fe8c6.png"
    },
    {
      title: "Healthcare Provider",
      result: "+220% appointment bookings",
      image: "/lovable-uploads/43cb7284-8e75-4a51-9784-67c81a6fe8c6.png"
    },
    {
      title: "E-Commerce Brand",
      result: "+95% conversion rate",
      image: "/lovable-uploads/43cb7284-8e75-4a51-9784-67c81a6fe8c6.png"
    }
  ];

  return (
    <AnimatedSection className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm text-muted-foreground mb-4">
            Vertrauen Sie auf mehrfach ausgezeichnete Projekte.
          </p>
          <div className="flex justify-center items-center mb-6">
            <img 
              src="/lovable-uploads/567e9c1f-f8db-451c-9eb4-3f5865307084.png" 
              alt="Sortlist Badge"
              className="h-16 opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Erfolgreiche Relaunch-Projekte unserer Kunden.
          </h2>
          <div className="flex items-center justify-center gap-2 mt-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-accent text-accent" />
            ))}
            <span className="ml-2 text-muted-foreground">
              Bewertungen auf{" "}
              <a 
                href="https://www.sortlist.de/agency/ooliv" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Sortlist
              </a>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
            >
              <div className="aspect-video bg-gray-100 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {study.title}
                </h3>
                <p className="text-primary font-bold text-xl">
                  {study.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default WebsiteRelaunchProof;
