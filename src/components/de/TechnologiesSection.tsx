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
  const aiResearchTools: Technology[] = [
    {
      name: "ChatGPT / LLMs",
      description: "Ideen strukturieren, komplexe Zusammenhänge analysieren, Inhalte vorbereiten — immer von Menschen finalisiert.",
      icon: <MessageSquare className="h-12 w-12 text-[#7A7A7A]" strokeWidth={1.5} />
    },
    {
      name: "Midjourney & Image-AI",
      description: "Visuelle Konzepte, Bildwelten und schnelle Prototypen ohne generische Stock-Optik.",
      icon: <Image className="h-12 w-12 text-[#7A7A7A]" strokeWidth={1.5} />
    },
    {
      name: "Ahrefs & Research Tools",
      description: "Suchverhalten verstehen, Wettbewerb analysieren, Chancen datenbasiert erkennen.",
      icon: <TrendingUp className="h-12 w-12 text-[#7A7A7A]" strokeWidth={1.5} />
    },
    {
      name: "AI Adoption",
      description: "Strategische Einführung von KI-Tools in bestehende Unternehmensprozesse.",
      icon: <Zap className="h-12 w-12 text-[#7A7A7A]" strokeWidth={1.5} />
    }
  ];

  const processTools: Technology[] = [
    {
      name: "Basecamp, Notion & Prozess-Tools",
      description: "Klare Strukturen, transparente Kommunikation und effiziente Projektsteuerung.",
      icon: <FolderKanban className="h-12 w-12 text-[#7A7A7A]" strokeWidth={1.5} />
    },
    {
      name: "KI-gestützte Workflows",
      description: "Automatisierte Abläufe für Content, SEO und interne Prozesse — messbar effizienter.",
      icon: <Zap className="h-12 w-12 text-[#7A7A7A]" strokeWidth={1.5} />
    },
    {
      name: "Tool-Evaluierung & Auswahl",
      description: "Wir testen, vergleichen und wählen Tools, die wirklich Ergebnisse liefern — nicht nur Hype.",
      icon: <TestTube className="h-12 w-12 text-[#7A7A7A]" strokeWidth={1.5} />
    },
    {
      name: "Implementierung in Unternehmen",
      description: "Neue Tools passgenau integrieren, ohne bestehende Strukturen zu stören.",
      icon: <Puzzle className="h-12 w-12 text-[#7A7A7A]" strokeWidth={1.5} />
    },
    {
      name: "Team-Enablement & Schulung",
      description: "Wir machen Teams fit im Umgang mit modernen KI-Prozessen und Workflows.",
      icon: <GraduationCap className="h-12 w-12 text-[#7A7A7A]" strokeWidth={1.5} />
    },
    {
      name: "Digitale Effizienz",
      description: "Optimierung digitaler Workflows und Ressourcennutzung für nachhaltige Produktivität.",
      icon: <TrendingUp className="h-12 w-12 text-[#7A7A7A]" strokeWidth={1.5} />
    },
    {
      name: "KI-gestützte Produktionsprozesse",
      description: "Automatisierung und Intelligenz in der Content- und Produkt-Erstellung.",
      icon: <MessageSquare className="h-12 w-12 text-[#7A7A7A]" strokeWidth={1.5} />
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
          
          {/* Two-Column Layout for AI & Research vs Processes */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* AI & Research Section */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-[#0D0D0D]">AI & Research</h4>
              <StaggerReveal className="grid gap-6">
                {aiResearchTools.map((tech, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl border border-border/50 transition-all duration-300 hover:border-border hover:shadow-sm flex flex-col">
                    <div className="flex justify-center mb-4">
                      {tech.icon}
                    </div>
                    <h5 className="text-base font-bold text-center mb-3 text-foreground">{tech.name}</h5>
                    <p className="text-muted-foreground text-center text-sm leading-relaxed flex-grow font-normal">{tech.description}</p>
                  </div>
                ))}
              </StaggerReveal>
            </div>
            
            {/* Processes & Implementation Section */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-[#0D0D0D]">Prozesse & Implementierung</h4>
              <StaggerReveal className="grid gap-6">
                {processTools.map((tech, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl border border-border/50 transition-all duration-300 hover:border-border hover:shadow-sm flex flex-col">
                    <div className="flex justify-center mb-4">
                      {tech.icon}
                    </div>
                    <h5 className="text-base font-bold text-center mb-3 text-foreground">{tech.name}</h5>
                    <p className="text-muted-foreground text-center text-sm leading-relaxed flex-grow font-normal">{tech.description}</p>
                  </div>
                ))}
              </StaggerReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
