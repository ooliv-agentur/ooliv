
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, TrendingUp, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const WiesbadenLeistungen = () => {
  const solutions = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Website-Strategie",
      description: "Datenbasierte Konzepte für Ihre Wiesbadener Zielgruppe mit klaren Conversion-Zielen.",
      features: ["Zielgruppenbestimmung", "Wettbewerbsanalyse", "User Journey Mapping", "KPI-Definition"]
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Professionelles Design",
      description: "Responsive Webdesign, das Vertrauen schafft und Ihre Marke in Wiesbaden stärkt.",
      features: ["Mobile-First Design", "Brand Guidelines", "UI/UX Optimierung", "Accessibility Standards"]
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Technische Umsetzung",
      description: "Schnelle, sichere Websites mit modernster Technologie für nachhaltigen Erfolg.",
      features: ["Custom Development", "CMS Integration", "Performance Optimierung", "Sicherheitsstandards"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lokale SEO",
      description: "Optimierung für bessere Sichtbarkeit in Wiesbaden und dem Rhein-Main-Gebiet.",
      features: ["Local SEO", "Google My Business", "Regionale Keywords", "Content Marketing"]
    }
  ];

  return (
    <section className="py-20 bg-medico-mint font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-medico-darkGreen mb-6">
              Unsere Leistungen für Wiesbadener Unternehmen
            </h2>
            <p className="text-xl text-accent-primary max-w-4xl mx-auto" style={{ lineHeight: '1.6' }}>
              Digitale Lösungen, die Ihr Unternehmen in Wiesbaden messbar voranbringen
            </p>
          </div>
        </Reveal>

        <StaggerReveal className="grid md:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-accent-primary flex items-center justify-center mr-4">
                  <div style={{ color: 'white' }}>
                    {solution.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">{solution.title}</h3>
              </div>
              <p className="text-gray-600 mb-6 text-lg" style={{ lineHeight: '1.6' }}>
                {solution.description}
              </p>
              <ul className="space-y-3">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-accent-primary mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </StaggerReveal>

        <Reveal>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-medico-darkGreen mb-6">
              Bereit für Ihren digitalen Erfolg in Wiesbaden?
            </h3>
            <p className="text-xl text-accent-primary mb-8 max-w-3xl mx-auto" style={{ lineHeight: '1.6' }}>
              Lassen Sie uns in einem unverbindlichen Gespräch klären, wie wir Ihr Unternehmen digital voranbringen können.
            </p>
            <Button variant="primary" size="lg" className="group" asChild>
              <Link to="/kontakt">
                Strategiegespräch vereinbaren
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default WiesbadenLeistungen;
