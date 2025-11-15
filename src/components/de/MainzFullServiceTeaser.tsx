import React from 'react';
import { Globe, Search, MousePointerClick, FileText, Zap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const MainzFullServiceTeaser = () => {
  const services = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Webdesign & Entwicklung",
      description: "Professionelle Websites für Mainzer Unternehmen – responsive, schnell und conversion-optimiert.",
      link: "/webdesign"
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "SEO & Local SEO",
      description: "Bessere Sichtbarkeit in Mainz und dem Rhein-Main-Gebiet für mehr organische Reichweite.",
      link: "/seo-optimierung"
    },
    {
      icon: <MousePointerClick className="h-6 w-6" />,
      title: "Google Ads",
      description: "Performance-Marketing mit messbaren Ergebnissen – gezielt und kosteneffizient.",
      link: "/google-ads"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Content Marketing",
      description: "Strategische Inhalte, die Ihre Expertise zeigen und Vertrauen bei Kunden aufbauen.",
      link: "/content-erstellung"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Marketing Automation",
      description: "Effiziente Prozesse für Lead-Nurturing und Kundenbindung.",
      link: "/ki-technologien"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Digital Strategy",
      description: "Datenbasierte Strategien, die Ihre Geschäftsziele erreichen.",
      link: "/strategie"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-medico-darkGreen to-medico-darkGreen/90 text-white font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Full-Service Werbeagentur in Mainz
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Von der Strategie über die Umsetzung bis zur Optimierung – wir decken alle digitalen Bereiche ab
            </p>
          </div>
        </Reveal>

        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link 
              key={index} 
              to={service.link}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 group border border-white/20"
            >
              <div className="text-accent-primary mb-4 bg-white rounded-full w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </StaggerReveal>

        <Reveal>
          <div className="mt-16 text-center">
            <p className="text-xl text-white/90 mb-6">
              Alle Services aus einer Hand – für konsistente Ergebnisse
            </p>
            <Link 
              to="/strategie"
              className="inline-block bg-white text-medico-darkGreen px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent-primary hover:text-white transition-all duration-300 shadow-lg"
            >
              Unsere Leistungen im Detail
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default MainzFullServiceTeaser;
