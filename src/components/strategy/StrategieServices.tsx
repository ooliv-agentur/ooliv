
import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';
import { Button } from '@/components/ui/button';

const StrategieServices = () => {
  const services = [
    {
      title: "Strategische Analyse & Roadmap",
      features: [
        "Wir analysieren Ihre aktuelle Situation (Website, Daten, Wettbewerb)",
        "Identifizieren die größten Potenziale für Verbesserungen",
        "Ich entwickle gemeinsam mit Ihnen eine klare Strategie mit priorisierten Maßnahmen",
        "Wir definieren realistische Meilensteine, KPIs und Timelines für 6-12 Monate"
      ],
      link: "/kontakt"
    },
    {
      title: "UX-Optimierung & Customer Journeys",
      features: [
        "Wir entwickeln gemeinsam mit Ihnen User Journeys, die konvertieren",
        "Optimieren die Website-Struktur für messbar bessere Conversions",
        "Ich verbessere Navigation und Nutzerführung datenbasiert",
        "Wir fokussieren uns auf Conversion-Optimierung an allen kritischen Touchpoints"
      ],
      link: "/webdesign"
    },
    {
      title: "KI-Integration für Ihr Business",
      features: [
        "Ich finde konkrete KI-Anwendungsfälle für Ihr Unternehmen",
        "Wir entwickeln Automatisierungs-Strategien für effizientere Workflows",
        "Setzen AI-gestützte Content-Prozesse auf",
        "Ich schule Ihr Team im strategischen Umgang mit KI-Tools"
      ],
      link: "/ki-technologien"
    },
    {
      title: "Umsetzungsbegleitung mit Webdesign & Webentwicklung",
      features: [
        "Ich koordiniere Ihr Team und externe Partner als zentraler Ansprechpartner",
        "Wir stellen sicher, dass alle am gleichen Strang ziehen – von Design bis zur technischen Entwicklung",
        "Definieren klare Qualitäts-Standards und Erfolgskriterien",
        "Ich begleite Sie strategisch von der Planung bis zum erfolgreichen Go-Live"
      ],
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
              <h3 className="text-xl font-bold mb-6 text-foreground">{service.title}</h3>
              <ul className="space-y-3 flex-1 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to={service.link}>
                <Button variant="outline" className="w-full">
                  Mehr erfahren
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
