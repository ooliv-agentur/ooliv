
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const WiesbadenCaseStudies = () => {
  const caseStudies = [
    {
      title: "B2B Software Unternehmen",
      description: "Komplette Website-Modernisierung mit strategischer Neuausrichtung für bessere Lead-Generierung.",
      results: ["300% mehr qualifizierte Anfragen", "Verbesserte Conversion Rate", "Moderne, vertrauensvolle Präsenz"],
      image: "/lovable-uploads/0ac94ae2-4b93-4958-bbb4-76df1bd8c6d6.png",
      tags: ["Webdesign", "SEO", "Lead Generation"]
    },
    {
      title: "Regionale Beratung",
      description: "Strategische Online-Präsenz für lokale Marktführerschaft in Wiesbaden und Umgebung.",
      results: ["Lokale Sichtbarkeit gesteigert", "Neue Kundengewinnung", "Professionelle Markenwahrnehmung"],
      image: "/lovable-uploads/22a1721c-dd5f-47a8-871b-a42c2ea29458.png",
      tags: ["Local SEO", "Branding", "Content"]
    },
    {
      title: "Technologie-Startup",
      description: "Von der Idee zur professionellen Website mit Fokus auf Investoren und Kunden.",
      results: ["Erfolgreiche Markteinführung", "Investoren überzeugt", "Skalierbare Plattform"],
      image: "/lovable-uploads/343738d2-5fa7-4ca5-a4db-58f6726d3609.png",
      tags: ["Startup", "Technology", "Growth"]
    }
  ];

  return (
    <section className="py-20 bg-white font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-medico-darkGreen mb-6">
              Erfolgsgeschichten aus Wiesbaden
            </h2>
            <p className="text-xl text-medico-turquoise max-w-4xl mx-auto" style={{ lineHeight: '1.6' }}>
              Wie wir Unternehmen in Wiesbaden zu digitalem Erfolg verholfen haben
            </p>
          </div>
        </Reveal>

        <StaggerReveal className="grid md:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden group">
              <div className="aspect-video bg-gradient-to-br from-medico-mint to-medico-turquoise/20 p-6 flex items-center justify-center">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover rounded-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#D8F4E3', color: '#003347' }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-medico-turquoise transition-colors">
                  {study.title}
                </h3>
                <p className="text-gray-600 mb-4" style={{ lineHeight: '1.6' }}>
                  {study.description}
                </p>
                <div className="space-y-2 mb-6">
                  {study.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full mr-3" style={{ backgroundColor: '#32b1ab' }}></div>
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </StaggerReveal>

        <Reveal>
          <div className="text-center">
            <Button variant="primary" size="lg" className="group" asChild>
              <Link to="/referenzen">
                Alle Referenzen ansehen
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default WiesbadenCaseStudies;
