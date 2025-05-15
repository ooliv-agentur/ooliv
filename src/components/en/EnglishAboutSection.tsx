
import React from 'react';
import { LayoutGrid, Sparkles, Code, PhoneCall } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const EnglishAboutSection = () => {
  // Define the 4 pillars of service
  const services = [
    {
      title: "Strategy & UX",
      description: "Clear structure, data-driven decisions, B2B-ready.",
      icon: <LayoutGrid className="h-6 w-6 text-brand-primary" />
    },
    {
      title: "Content & SEO",
      description: "Keyword-driven, multilingual, AI-assisted.",
      icon: <Sparkles className="h-6 w-6 text-brand-primary" />
    },
    {
      title: "Design & Development",
      description: "Custom-coded, conversion-focused, scalable.",
      icon: <Code className="h-6 w-6 text-brand-primary" />
    },
    {
      title: "Direct Communication",
      description: "You always speak directly to the CEO – no middlemen.",
      icon: <PhoneCall className="h-6 w-6 text-brand-primary" />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-brand-heading mb-4 text-center">
              Where Strategy Meets Implementation – In Mainz.
            </h2>
            <p className="text-xl text-brand-text max-w-3xl mx-auto text-center">
              We are a specialized digital agency based in Mainz. Since 2008, we've been developing websites that capture the essence of your business – strategically planned, content-rich, and technologically measurable.
            </p>
          </div>
        </Reveal>
        
        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {services.map((service, index) => (
            <div key={index} className="bg-brand-background/50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-4 p-3 rounded-full bg-brand-primary/10 inline-flex">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-heading">{service.title}</h3>
              <p className="text-brand-text">{service.description}</p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default EnglishAboutSection;
