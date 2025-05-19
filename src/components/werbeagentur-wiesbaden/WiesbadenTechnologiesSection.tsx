
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const WiesbadenTechnologiesSection = () => {
  const technologies = [
    {
      name: "ChatGPT",
      description: "KI-gestützte Textgenerierung und Inhaltsoptimierung",
      image: "/lovable-uploads/chatgpt.png"
    },
    {
      name: "Midjourney",
      description: "Kreative Bildgenerierung für einzigartige visuelle Inhalte",
      image: "/lovable-uploads/Midjourney.png"
    },
    {
      name: "Ahrefs",
      description: "Professionelle SEO-Analyse für mehr Sichtbarkeit",
      image: "/ahrefs-logo.svg"
    },
    {
      name: "Sora",
      description: "Videogenerierung mit künstlicher Intelligenz",
      image: "/lovable-uploads/sora.png"
    }
  ];

  return (
    <section className="py-24 bg-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-heading mb-6">
              Unser Full-Service-Ansatz mit modernster Technologie
            </h2>
            <p className="text-lg text-brand-text max-w-3xl mx-auto">
              Unsere Kunden in Wiesbaden profitieren von einem umfassenden Service, der neben Design und Programmierung auch Projektmanagement, Beratung und die Entwicklung von Marketingkonzepten umfasst.
            </p>
          </div>
        </Reveal>
        
        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="p-6 bg-white rounded-xl shadow-sm flex flex-col items-center text-center"
            >
              <div className="h-16 flex items-center justify-center mb-4">
                <img 
                  src={tech.image} 
                  alt={`${tech.name} Logo`} 
                  className="h-10 object-contain" 
                />
              </div>
              <h3 className="text-lg font-bold text-brand-heading mb-2">{tech.name}</h3>
              <p className="text-sm text-brand-text">{tech.description}</p>
            </div>
          ))}
        </StaggerReveal>
        
        <div className="mt-12 text-center">
          <Button variant="outline" asChild>
            <Link to="/ki-technologien">
              KI-Potenzial für Ihr Unternehmen entdecken <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WiesbadenTechnologiesSection;
