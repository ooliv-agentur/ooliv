
import React from 'react';
import { ArrowRight, FileText, Palette, BarChart2, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const TeamImpactSection = () => {
  const services = [
    {
      title: "Strategy & UX",
      description: "Clear structure, user journeys, and measurable goals",
      icon: BarChart2
    },
    {
      title: "Content & SEO",
      description: "Keyword-driven, multilingual, and AI-supported",
      icon: FileText
    },
    {
      title: "Design & Development",
      description: "Custom-built, clean-coded, and performance-focused",
      icon: Palette
    },
    {
      title: "Collaboration",
      description: "Fast, transparent, and reliable—since day one",
      icon: Users
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
            We're not a big agency with layers of project managers. We're a tight-knit team of strategists, designers, and developers who work closely across disciplines. Everything your website needs—nothing it doesn't.
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
              Meet the team <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamImpactSection;
