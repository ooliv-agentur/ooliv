import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

interface Technology {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const TechnologiesSection = () => {
  const technologies: Technology[] = [
    {
      name: "ChatGPT",
      description: "Texte schneller entwickeln, Ideen strukturieren, dynamische Video-Snippets generieren – alles KI-gestützt, aber von Menschen finalisiert.",
      icon: <img src="/lovable-uploads/ac2faaf0-3c11-47bd-a829-aafb0bd09f24.png" alt="ChatGPT Logo" className="h-12 w-12" />
    },
    {
      name: "Midjourney",
      description: "Einzigartige Bilder statt Stock-Optik – visuell passend zu Ihrer Marke.",
      icon: <img src="/lovable-uploads/c2e2bd92-40a4-4a70-a1bd-6a3d5d936f87.png" alt="Midjourney Logo" className="h-12 w-12" />
    },
    {
      name: "Ahrefs",
      description: "Suchverhalten analysieren, Chancen erkennen, Wettbewerb verstehen.",
      icon: <img src="/lovable-uploads/db6a0e7f-92b8-4ebb-bf06-c9b9930fba55.png" alt="Ahrefs Logo" className="h-12 w-12" />
    },
    {
      name: "Basecamp",
      description: "Klarer Projektverlauf, direkte Kommunikation – alles an einem Ort.",
      icon: <img src="/lovable-uploads/a58c92c6-bfd7-4602-acaa-db2fba947360.png" alt="Basecamp Logo" className="h-12 w-12" />
    }
  ];

  return (
    <section className="py-20 bg-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-heading mb-4">
              Webdesign, SEO & mehr – alles aus einer Hand.
            </h2>
            <p className="text-xl text-brand-text max-w-3xl mx-auto">
              Ob <Link to="/webentwicklung" className="text-brand-primary hover:underline">Website-Relaunch</Link>, <Link to="/google-ads" className="text-brand-primary hover:underline">Google Ads</Link> oder <Link to="/content-erstellung" className="text-brand-primary hover:underline">Content-Erstellung</Link>: Wir begleiten Sie von der Strategie bis zum GoLive. Unsere Projekte basieren auf klaren Prozessen, erprobten Tools – und auf echtem Interesse an Ihrem Erfolg.
            </p>
            <div className="mt-8">
              <Button variant="outline" size="lg" className="group" asChild>
                <Link to="/webdesign">
                  Mehr über den Ablauf erfahren
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
        
        <div className="mt-16 mb-12">
          <Reveal>
            <h3 className="text-2xl font-bold text-center mb-4 text-brand-heading">
              Technologie ist kein Selbstzweck – sondern Mittel zum Ziel.
            </h3>
            <p className="text-lg text-center text-brand-text max-w-3xl mx-auto mb-12">
              Wir setzen auf leistungsstarke Tools, die unsere Arbeit unterstützen – nicht ersetzen. KI, Analyse und Projektkommunikation: Alles mit klarem Menschenverstand eingesetzt.
            </p>
          </Reveal>
          
          <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                <div className="flex justify-center mb-4">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold text-center mb-3">{tech.name}</h3>
                <p className="text-brand-text text-center">{tech.description}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>

        <div className="mt-12 text-center border-t border-gray-100 pt-10">
          <p className="text-brand-text italic max-w-3xl mx-auto">
            KI ist ein Werkzeug. Die Verantwortung bleibt bei uns.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
