
import React from 'react';
import { ArrowRight, Globe, PenTool, LineChart, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const WiesbadenSolutionSection = () => {
  const solutions = [
    {
      icon: Globe,
      title: "Strategie",
      description: "Wir entwickeln maßgeschneiderte Markenstrategien für Unternehmen aus Wiesbaden, die sich klar positionieren wollen.",
      link: "/webdesign"
    },
    {
      icon: PenTool,
      title: "Content",
      description: "Unsere Content-Spezialisten erstellen überzeugende Texte, die informieren, begeistern und konvertieren.",
      link: "/content-erstellung"
    },
    {
      icon: LineChart,
      title: "Entwicklung",
      description: "Von WordPress bis Shopify entwickeln wir skalierbare Lösungen, die technisch und visuell überzeugen.",
      link: "/webentwicklung"
    },
    {
      icon: MessageSquare,
      title: "Kommunikation",
      description: "Wir sorgen für einen klaren Dialog und nachvollziehbaren Projektfortschritt – transparent und ohne Umwege.",
      link: "/kontakt"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-heading mb-6">
              Unser Ansatz: Innovativ, individuell, erfolgreich
            </h2>
            <p className="text-lg text-brand-text max-w-3xl mx-auto">
              Bei unserer Arbeit kombinieren wir modernste Technologien mit unserer Leidenschaft für Webdesign und Online-Marketing. Jede Website, die wir gestalten, ist einzigartig und auf die Bedürfnisse unserer Kunden abgestimmt.
            </p>
          </div>
        </Reveal>
        
        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 bg-brand-background rounded-xl shadow-sm"
            >
              <div className="w-12 h-12 bg-brand-backgroundAlt rounded-full flex items-center justify-center mb-4">
                <solution.icon className="h-6 w-6 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-brand-heading mb-3">{solution.title}</h3>
              <p className="text-brand-text mb-4 flex-grow">{solution.description}</p>
              <Link 
                to={solution.link} 
                className="text-brand-primary font-medium inline-flex items-center hover:underline"
              >
                Mehr erfahren <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </StaggerReveal>
        
        <div className="text-center mt-12">
          <Button 
            onClick={() => window.dispatchEvent(new Event('open-lead-form'))}
            variant="outline"
            className="group"
          >
            Alle Leistungen entdecken <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WiesbadenSolutionSection;
