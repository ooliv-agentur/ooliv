
import React from 'react';
import { CheckCircle, Target, BarChart3, Zap } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const GermanSolutionSection = () => {
  const solutions = [
    {
      icon: <Target className="h-12 w-12 text-brand-mint-600" />,
      title: "Strategische Positionierung",
      description: "Wir analysieren Ihre Zielgruppe, Mitbewerber und USPs, um eine klare digitale Strategie zu entwickeln, die Ihr Business voranbringt."
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-brand-mint-600" />,
      title: "Conversion-optimiertes Design",
      description: "Jedes Element Ihrer Website ist darauf ausgelegt, Besucher zu Kunden zu machen – durch durchdachte UX und zielgerichtete Call-to-Actions."
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-brand-mint-600" />,
      title: "SEO & Content-Marketing",
      description: "Wir sorgen dafür, dass Ihre Website bei Google gefunden wird und durch hochwertigen Content Vertrauen und Expertise vermittelt."
    },
    {
      icon: <Zap className="h-12 w-12 text-brand-mint-600" />,
      title: "Technische Exzellenz",
      description: "Schnelle Ladezeiten, mobile Optimierung und sauberer Code – für eine Website, die technisch auf höchstem Niveau performt."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white to-brand-mint-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-6">
              Unsere Lösung für Ihr Wachstum
            </h2>
            <p className="text-xl text-brand-text max-w-3xl mx-auto">
              Wir entwickeln maßgeschneiderte Websites, die nicht nur gut aussehen, sondern messbare Ergebnisse liefern.
            </p>
          </div>
        </Reveal>

        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-mint hover:shadow-mintHover transition-all duration-300 hover:-translate-y-2 border border-brand-mint-100"
            >
              <div className="mb-6 p-4 rounded-full bg-brand-mint-100 inline-flex">
                {solution.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-heading">{solution.title}</h3>
              <p className="text-brand-text leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default GermanSolutionSection;
