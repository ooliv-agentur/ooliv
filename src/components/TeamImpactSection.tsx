
import React from 'react';
import { ArrowRight, FileText, Palette, BarChart2, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const TeamImpactSection = () => {
  const services = [
    {
      title: "Strategy & UX",
      description: "Clear structures, data-backed decisions, B2B-ready",
      icon: BarChart2
    },
    {
      title: "Content & SEO",
      description: "Keyword-driven, multilingual, and AI-supported",
      icon: FileText
    },
    {
      title: "Design & Development",
      description: "Custom-coded, conversion-optimized, built to scale",
      icon: Palette
    },
    {
      title: "Direct Communication",
      description: "You speak directly with the CEO—no middle layers",
      icon: MessageCircle
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Small Team. Big Impact.
          </h2>
          <p className="text-xl text-center mb-12 text-brand-text/80">
            At ooliv, you don't get passed around. Every project is led directly by the CEO—and executed by a focused team of experts in strategy, content, design, and development. One point of contact. Full in-house precision.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-brand-background rounded-lg hover:shadow-md transition-all duration-300">
                <div className="flex items-center mb-3">
                  <div className="mr-4 p-2 bg-brand-primary/10 rounded-full">
                    <service.icon className="h-5 w-5 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-brand-text/80">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/about-ooliv" className="inline-flex items-center text-brand-primary font-medium hover:underline">
              Meet the team behind the results <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamImpactSection;
