
import React from 'react';
import { TrendingUp, Zap, Handshake, BarChart3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const DeutscherAboutSection = () => {
  const benefits = [
    {
      title: "C-Level Strategic Clarity",
      description: "Von der Opportunity Map bis zur messbaren Roadmap – strategische Entscheidungsgrundlagen für Ihre digitale Transformation.",
      icon: <TrendingUp className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/ueber-uns",
      linkText: "Mehr über unseren Ansatz"
    },
    {
      title: "AI-Enabled Workflows",
      description: "Strategische Integration von LLMs, Automation und AI-Pipelines für messbare Effizienzgewinne und datengetriebene Entscheidungen.",
      icon: <Zap className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/ueber-uns",
      linkText: "AI-Expertise kennenlernen"
    },
    {
      title: "16+ Jahre Digital Transformation",
      description: "100+ Projekte geleitet, internationale Teams geführt, komplexe digitale Ökosysteme transformiert. Senior-Level Expertise für Ihr Business.",
      icon: <Handshake className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/kontakt",
      linkText: "Erfahrung kennenlernen"
    },
    {
      title: "End-to-End Strategic Leadership",
      description: "Von der Vision über UX-Strategie bis zur Technical Direction – strategische Führung durch den gesamten Transformationsprozess.",
      icon: <BarChart3 className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/ueber-uns",
      linkText: "Unsere Methodik"
    }
  ];

  return (
    <section className="py-20 bg-white font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-16 text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-brand-primary/10 rounded-full">
              <span className="text-sm font-semibold text-brand-primary">Strategic Digital Advisory · AI-Enabled Transformation · Product & UX Strategy</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Senior Digital Strategy Lead
            </h2>
            <p className="text-xl text-turquoise max-w-4xl mx-auto mb-6" style={{ lineHeight: '1.5' }}>
              Strategische Transformation für B2B-Unternehmen – von der C-Level Vision bis zur messbaren Umsetzung.
            </p>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8" style={{ lineHeight: '1.5' }}>
              16+ Jahre Erfahrung in der Führung digitaler Transformationen. 100+ Projekte geleitet, internationale Teams koordiniert, komplexe Ökosysteme transformiert. Keine Standard-Agentur-Lösungen, sondern maßgeschneiderte strategische Führung.
            </p>
          </div>
        </Reveal>
        
        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group border border-gray-100 cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-turquoise flex items-center justify-center mb-6 transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground mb-6 text-base" style={{ lineHeight: '1.5' }}>
                {benefit.description}
              </p>
              <div>
                <Link 
                  to={benefit.link}
                  className="text-turquoise hover:text-foreground underline transition-colors duration-300 font-bold text-lg"
                >
                  {benefit.linkText}
                </Link>
              </div>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default DeutscherAboutSection;
