
import React from 'react';
import { Palette, Code2, Search, BarChart3, Megaphone, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const WiesbadenSolutionSection = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  const services = [
    {
      icon: <Palette className="w-8 h-8 text-medico-turquoise" />,
      title: "Professionelles Webdesign",
      description: "Individuelle Gestaltung, die Ihre Marke stärkt und Nutzer überzeugt",
      features: ["Responsive Design", "User Experience", "Corporate Design"]
    },
    {
      icon: <Code2 className="w-8 h-8 text-medico-turquoise" />,
      title: "Technische Entwicklung",
      description: "Maßgeschneiderte Programmierung für optimale Performance und Skalierbarkeit",
      features: ["Custom Development", "CMS-Integration", "Performance-Optimierung"]
    },
    {
      icon: <Search className="w-8 h-8 text-medico-turquoise" />,
      title: "Suchmaschinenoptimierung",
      description: "Strategische SEO für bessere Sichtbarkeit und mehr qualifizierte Besucher",
      features: ["Keyword-Analyse", "Content-Optimierung", "Technical SEO"]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-medico-turquoise" />,
      title: "Performance Marketing",
      description: "Datengetriebene Kampagnen für messbaren ROI und nachhaltige Erfolge",
      features: ["Google Ads", "Social Media Ads", "Conversion-Tracking"]
    },
    {
      icon: <Megaphone className="w-8 h-8 text-medico-turquoise" />,
      title: "Content & Kommunikation",
      description: "Strategische Inhalte, die Ihre Zielgruppe erreichen und zum Handeln bewegen",
      features: ["Content-Strategie", "Texterstellung", "Social Media"]
    },
    {
      icon: <Brain className="w-8 h-8 text-medico-turquoise" />,
      title: "KI-gestützte Lösungen",
      description: "Innovative Technologien für effizientere Prozesse und bessere Ergebnisse",
      features: ["Automatisierung", "Datenanalyse", "Smart Solutions"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-medico-darkGreen mb-6">
              Umfassende Lösungen aus einer Hand
            </h2>
            <p className="text-xl text-medico-darkGreen max-w-3xl mx-auto">
              Als Full-Service Werbeagentur bieten wir alle Leistungen für Ihren digitalen Erfolg. 
              Von der strategischen Planung bis zur technischen Umsetzung und laufenden Betreuung.
            </p>
          </div>
        </Reveal>

        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-medico-darkGreen mb-4">
                {service.title}
              </h3>
              <p className="text-medico-darkGreen mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-medico-darkGreen">
                    <div className="w-1.5 h-1.5 bg-medico-turquoise rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </StaggerReveal>

        <Reveal>
          <div className="text-center">
            <Button 
              size="lg" 
              onClick={handleStartProject}
              className="group font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ 
                backgroundColor: '#FFD700', 
                color: '#003347',
                border: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#FFC700';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFD700';
              }}
            >
              Beratungsgespräch vereinbaren
              <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default WiesbadenSolutionSection;
