
import React from 'react';
import { CheckCircle } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const StrategieServices = () => {
  const services = [
    {
      title: "Analyse & Strategie-Entwicklung",
      features: [
        "Ich schaue mir Ihre aktuelle Situation an (Website, Daten, Wettbewerb)",
        "Identifiziere die größten Potenziale für Verbesserungen",
        "Entwickle eine klare Strategie mit priorisierten Maßnahmen",
        "Erstelle einen konkreten Umsetzungsplan für 6-12 Monate"
      ]
    },
    {
      title: "Roadmap & Prioritäten setzen",
      features: [
        "Wir legen fest, was als erstes angegangen wird",
        "Definiere klare KPIs, damit Sie Erfolg messen können",
        "Plane Budget und Ressourcen realistisch",
        "Setze realistische Meilensteine und Timelines"
      ]
    },
    {
      title: "UX-Optimierung & Customer Journeys",
      features: [
        "Ich entwickle User Journeys, die aus Besuchern Kunden machen",
        "Optimiere die Website-Struktur für bessere Conversions",
        "Verbessere die Navigation und Nutzerführung",
        "Fokus auf Conversion-Optimierung an allen wichtigen Punkten"
      ]
    },
    {
      title: "KI-Integration für Ihr Business",
      features: [
        "Finde konkrete KI-Anwendungsfälle für Ihr Unternehmen",
        "Entwickle Automatisierungs-Strategien für effizientere Workflows",
        "Setze AI-gestützte Content-Prozesse auf",
        "Schule Ihr Team im Umgang mit KI-Tools"
      ]
    },
    {
      title: "Strategische Beratung & Begleitung",
      features: [
        "Sie haben mich als Sparringspartner für wichtige Entscheidungen",
        "Ich helfe bei der Business-Case-Entwicklung",
        "Minimiere Risiken durch strategische Beratung",
        "Regelmäßige Reviews und Updates"
      ]
    },
    {
      title: "Umsetzungs-Begleitung",
      features: [
        "Ich koordiniere Ihr Team und externe Partner",
        "Stelle sicher, dass alle am gleichen Strang ziehen",
        "Definiere klare Qualitäts-Standards",
        "Optimiere Performance und Geschwindigkeit"
      ]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Wie ich Ihnen helfe
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Von der Analyse Ihrer Situation bis zur erfolgreichen Umsetzung – mit klaren Schritten und messbaren Ergebnissen.
            </p>
          </div>
        </Reveal>
        
        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-6 text-foreground">{service.title}</h3>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </StaggerReveal>

        <div className="mt-16 bg-muted/30 p-8 rounded-xl border border-border text-center">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Was Sie am Ende haben
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Eine klare Strategie mit konkreten nächsten Schritten, messbare KPIs zur Erfolgskontrolle und – wenn gewünscht – Begleitung bei der Umsetzung bis zum Go-Live.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StrategieServices;
