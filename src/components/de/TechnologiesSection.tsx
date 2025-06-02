
import React from 'react';
import { Code2, Database, Smartphone, Zap, Shield, Globe } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const TechnologiesSection = () => {
  const technologies = [
    {
      icon: <Code2 className="h-8 w-8 text-brand-mint-600" />,
      title: "React & TypeScript",
      description: "Moderne Frontend-Entwicklung für skalierbare Anwendungen"
    },
    {
      icon: <Database className="h-8 w-8 text-brand-mint-600" />,
      title: "WordPress & Headless CMS",
      description: "Flexible Content-Management-Systeme für einfache Pflege"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-brand-mint-600" />,
      title: "Mobile-First Design",
      description: "Responsive Designs, die auf allen Geräten perfekt funktionieren"
    },
    {
      icon: <Zap className="h-8 w-8 text-brand-mint-600" />,
      title: "Performance-Optimierung",
      description: "Schnelle Ladezeiten durch optimierte Bilder und Code"
    },
    {
      icon: <Shield className="h-8 w-8 text-brand-mint-600" />,
      title: "Sicherheit & SSL",
      description: "Höchste Sicherheitsstandards für Ihre Website und Daten"
    },
    {
      icon: <Globe className="h-8 w-8 text-brand-mint-600" />,
      title: "SEO & Analytics",
      description: "Optimierung für Suchmaschinen und detaillierte Erfolgsmesung"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-6">
              Moderne Technologien für zukunftssichere Websites
            </h2>
            <p className="text-xl text-brand-text max-w-3xl mx-auto">
              Wir setzen auf bewährte und innovative Technologien, um Ihre Website technisch auf dem neuesten Stand zu halten.
            </p>
          </div>
        </Reveal>

        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-brand-mint-50 to-white p-6 rounded-xl border border-brand-mint-200 hover:shadow-mint transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 p-3 rounded-full bg-brand-mint-500/10 inline-flex">
                {tech.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-heading">{tech.title}</h3>
              <p className="text-brand-text">{tech.description}</p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default TechnologiesSection;
