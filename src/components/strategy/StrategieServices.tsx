
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';
import { Button } from '@/components/ui/button';

const StrategieServices = () => {
  const services = [
    {
      title: "Strategische Analyse & Roadmap",
      description: "Von der Bestandsaufnahme zur klaren Roadmap – damit Sie wissen, was als nächstes zu tun ist.",
      link: "/kontakt"
    },
    {
      title: "UX-Optimierung & Customer Journeys",
      description: "Wir entwickeln Nutzerführungen, die konvertieren – datenbasiert und auf Ihre Ziele zugeschnitten.",
      link: "/webdesign"
    },
    {
      title: "KI-Integration für Ihr Business",
      description: "Konkrete KI-Anwendungsfälle für effizientere Workflows und intelligentere Prozesse.",
      link: "/ki-technologien"
    },
    {
      title: "Umsetzungsbegleitung",
      description: "Wir koordinieren alle Beteiligten und begleiten Sie von der Planung bis zum erfolgreichen Go-Live.",
      link: "/website-relaunch"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Wie wir Ihnen helfen
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Von der Analyse Ihrer Situation bis zur erfolgreichen Umsetzung – mit klaren Schritten und messbaren Ergebnissen.
            </p>
          </div>
        </Reveal>
        
        <StaggerReveal className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 flex flex-col"
            >
              <h3 className="text-xl font-bold mb-4 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed flex-1 mb-6">
                {service.description}
              </p>
              <Link to={service.link}>
                <Button variant="outline" className="w-full">
                  Im Gespräch mehr erfahren
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          ))}
        </StaggerReveal>

        <div className="mt-16 bg-muted/30 p-8 rounded-xl border border-border text-center">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Was Sie am Ende haben
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Eine klare Strategie mit konkreten nächsten Schritten, messbare KPIs zur Erfolgskontrolle und – wenn gewünscht – Begleitung bei der Umsetzung mit <Link to="/webdesign" className="text-primary hover:underline font-medium">professionellem Webdesign</Link> und <Link to="/webentwicklung" className="text-primary hover:underline font-medium">technischer Webentwicklung</Link> bis zum Go-Live.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StrategieServices;
