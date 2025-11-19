
import React from 'react';
import { TrendingUp, Zap, Handshake, BarChart3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const DeutscherAboutSection = () => {
  const benefits = [
    {
      title: "Klare Strategien, die funktionieren",
      description: "Sie bekommen keine abstrakten Konzepte, sondern konkrete Maßnahmen mit priorisierten Schritten – damit Sie wissen, was als nächstes zu tun ist.",
      icon: <TrendingUp className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/ueber-uns",
      linkText: "Mehr über meine Arbeitsweise"
    },
    {
      title: "KI, wo es wirklich Sinn macht",
      description: "Ich finde konkrete KI-Anwendungsfälle für Ihr Business – von Chatbots über Content-Automation bis zu effizienten Workflows. Keine Buzzwords, sondern echte Lösungen.",
      icon: <Zap className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/ki-technologien",
      linkText: "KI-Integration erkunden"
    },
    {
      title: "16+ Jahre Erfahrung für Sie",
      description: "Über 100 erfolgreiche Projekte, messbare Ergebnisse (+60-240% Conversions im Schnitt) und echte Expertise statt Junior-Berater.",
      icon: <Handshake className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/ueber-uns",
      linkText: "Track Record ansehen"
    },
    {
      title: "Von der Analyse bis zur Umsetzung",
      description: "Sie bekommen nicht nur einen Plan, sondern auch Begleitung bei der Umsetzung – damit es wirklich passiert, nicht nur in der Schublade landet.",
      icon: <BarChart3 className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/methodik",
      linkText: "Methodik kennenlernen"
    }
  ];

  return (
    <section className="py-20 bg-white font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-16 text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-brand-primary/10 rounded-full">
              <span className="text-sm font-semibold text-brand-primary">Digital-Strategie · Website & UX · KI-Integration</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Ihr Digital-Berater für messbare Ergebnisse
            </h2>
            <p className="text-xl text-turquoise max-w-4xl mx-auto mb-6" style={{ lineHeight: '1.5' }}>
              Ich helfe B2B-Unternehmen, digital besser zu werden – mit klaren Strategien, durchdachter UX und KI-Lösungen, die wirklich funktionieren.
            </p>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8" style={{ lineHeight: '1.5' }}>
              16+ Jahre Erfahrung, über 100 erfolgreiche Projekte, messbare Ergebnisse. Sie bekommen keine Standard-Agentur-Lösungen, sondern maßgeschneiderte Strategien für Ihr Business.
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
