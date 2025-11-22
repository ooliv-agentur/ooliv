import React from 'react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';
import { MessageSquare, Image, TrendingUp, FolderKanban, Zap, TestTube, Puzzle, GraduationCap } from 'lucide-react';

interface Technology {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const TechnologiesSection = () => {
  const technologies: Technology[] = [
    {
      name: "ChatGPT / LLMs",
      description: "Ideen strukturieren, komplexe Zusammenhänge analysieren, Inhalte vorbereiten — immer von Menschen finalisiert.",
      icon: <MessageSquare className="h-12 w-12 text-muted-foreground/40" strokeWidth={1.5} />
    },
    {
      name: "Midjourney & Image-AI",
      description: "Visuelle Konzepte, Bildwelten und schnelle Prototypen ohne generische Stock-Optik.",
      icon: <Image className="h-12 w-12 text-muted-foreground/40" strokeWidth={1.5} />
    },
    {
      name: "Ahrefs & Daten-Tools",
      description: "Suchverhalten verstehen, Wettbewerb analysieren, Chancen datenbasiert erkennen.",
      icon: <TrendingUp className="h-12 w-12 text-muted-foreground/40" strokeWidth={1.5} />
    },
    {
      name: "Basecamp, Notion & Prozess-Tools",
      description: "Klare Strukturen, transparente Kommunikation und effiziente Projektsteuerung.",
      icon: <FolderKanban className="h-12 w-12 text-muted-foreground/40" strokeWidth={1.5} />
    },
    {
      name: "KI-gestützte Workflows",
      description: "Automatisierte Abläufe für Content, SEO und interne Prozesse — messbar effizienter.",
      icon: <Zap className="h-12 w-12 text-muted-foreground/40" strokeWidth={1.5} />
    },
    {
      name: "Tool-Evaluierung & Auswahl",
      description: "Wir testen, vergleichen und wählen Tools, die wirklich Ergebnisse liefern — nicht nur Hype.",
      icon: <TestTube className="h-12 w-12 text-muted-foreground/40" strokeWidth={1.5} />
    },
    {
      name: "Implementierung in Unternehmen",
      description: "Neue Tools passgenau integrieren, ohne bestehende Strukturen zu stören.",
      icon: <Puzzle className="h-12 w-12 text-muted-foreground/40" strokeWidth={1.5} />
    },
    {
      name: "Team-Enablement & Schulung",
      description: "Wir machen Teams fit im Umgang mit modernen KI-Prozessen und Workflows.",
      icon: <GraduationCap className="h-12 w-12 text-muted-foreground/40" strokeWidth={1.5} />
    }
  ];

  return (
    <section className="py-24 bg-secondary/5">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Reveal>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 text-foreground leading-tight">
              Werkzeuge mit Verstand eingesetzt.
            </h3>
            <p className="text-base md:text-lg text-center text-muted-foreground max-w-4xl mx-auto mb-16 font-normal leading-relaxed">
              Technologie ist kein Selbstzweck. Wir nutzen KI, Datenanalyse und moderne Tools genau dort, wo sie Prozesse beschleunigen, Qualität sichern und bessere Entscheidungen ermöglichen.
            </p>
          </Reveal>
          
          <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-border/50 transition-all duration-300 hover:border-border hover:shadow-sm h-full flex flex-col">
                <div className="flex justify-center mb-6">
                  {tech.icon}
                </div>
                <h3 className="text-lg font-bold text-center mb-4 text-foreground">{tech.name}</h3>
                <p className="text-muted-foreground text-center text-sm leading-relaxed flex-grow font-normal">{tech.description}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
