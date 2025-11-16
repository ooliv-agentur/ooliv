import React from 'react';
import { Grid2X2, Sparkles, Code2, Phone, ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const MainzAboutSection = () => {
  const services = [
    {
      title: "Webdesign & Entwicklung",
      description: "Moderne, schnelle Websites mit klarer Positionierung und überzeugenden Inhalten.",
      icon: <Grid2X2 className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/webdesign"
    },
    {
      title: "SEO & Local SEO Mainz",
      description: "Mehr Sichtbarkeit für regionale Suchanfragen, technische Optimierung und nachhaltige Rankings.",
      icon: <Code2 className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/seo-optimierung"
    },
    {
      title: "Google Ads",
      description: "Gezielte Kampagnen für qualifizierte Anfragen aus Mainz und Umgebung.",
      icon: <Sparkles className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/google-ads"
    },
    {
      title: "Content-Erstellung",
      description: "Strukturierte, fachlich präzise Inhalte, die Interessenten in Kunden verwandeln.",
      icon: <Phone className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/content-erstellung"
    },
    {
      title: "Marketing Automation & KI",
      description: "Automatisierte Lead-Prozesse, Reporting und digitale Workflows für effizientes Wachstum.",
      icon: <Sparkles className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/ki-technologien"
    }
  ];

  return (
    <section className="py-20 bg-white font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-medico-darkGreen mb-6 leading-tight">
              Ihre Digitalagentur in Mainz
            </h2>
            <p className="text-xl text-medico-darkGreen max-w-4xl mx-auto mb-8" style={{ lineHeight: '1.5' }}>
              Wir entwickeln Websites und digitale Strategien für Unternehmen aus Mainz und dem Rhein-Main-Gebiet. Unser Fokus liegt auf klaren Strukturen, einer verständlichen Nutzerführung und messbaren Ergebnissen. Als inhabergeführte Agentur arbeiten wir persönlich, direkt und mit Verantwortung.
            </p>
            
            {/* SEO-optimierte Typewriter-Sätze als statischer Text */}
            <div className="mt-6 mb-8 space-y-3 text-center max-w-3xl mx-auto">
              <p className="text-lg font-semibold text-accent-primary">
                → Websites, die Kunden gewinnen.
              </p>
              <p className="text-lg font-semibold text-accent-primary">
                → SEO, das in Mainz sichtbar macht.
              </p>
              <p className="text-lg font-semibold text-accent-primary">
                → Digitale Ergebnisse für Mainzer Unternehmen.
              </p>
            </div>
            
            {/* Single CTA Button */}
            <div className="flex justify-center">
              <Button 
                variant="primary"
                size="lg" 
                className="group"
                asChild
              >
                <Link to="/strategie">
                  Mehr über unsere Arbeitsweise
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
        
        <h3 className="text-3xl md:text-4xl font-bold text-medico-darkGreen mb-12 text-center">Leistungen für Mainzer Unternehmen</h3>
        
        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-accent-primary flex items-center justify-center mb-6 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-base" style={{ lineHeight: '1.5' }}>
                {service.description}
              </p>
              <div>
                <Link 
                  to={service.link}
                  className="text-accent-primary hover:text-medico-darkGreen underline transition-colors duration-300 font-bold text-lg"
                >
                  Mehr erfahren
                </Link>
              </div>
            </div>
          ))}
        </StaggerReveal>

        {/* Für wen wir arbeiten Section */}
        <Reveal>
          <div className="mt-20 mb-16 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-medico-darkGreen mb-6">
              Für wen wir arbeiten
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Wir unterstützen Unternehmen aus Mainz und Rhein-Main in verschiedenen Bereichen
            </p>
            <div className="max-w-3xl mx-auto">
              <ul className="grid md:grid-cols-2 gap-4 text-left text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-accent-primary mt-1">•</span>
                  <span>Beratung und Professional Services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-primary mt-1">•</span>
                  <span>Industrie und Produktion</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-primary mt-1">•</span>
                  <span>SaaS- und Software-Unternehmen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-primary mt-1">•</span>
                  <span>Handwerk und regionale Dienstleister</span>
                </li>
                <li className="flex items-start gap-3 md:col-span-2 justify-center">
                  <span className="text-accent-primary mt-1">•</span>
                  <span>Immobilien, Bau und technische Gewerke</span>
                </li>
              </ul>
              <p className="text-lg text-gray-600 mt-8 italic">
                Jede Branche erhält eine individuell abgestimmte digitale Strategie.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Why Local Section */}
        <Reveal>
          <div className="mt-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-medico-darkGreen mb-8 text-center">
              Warum eine lokale Werbeagentur in Mainz?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="text-xl font-semibold mb-3 text-medico-darkGreen">Direkte Abstimmung</h4>
                <p className="text-gray-600">
                  Kurze Wege und schnelle Entscheidungen – persönlich in Mainz oder per Videocall.
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold mb-3 text-medico-darkGreen">Kenntnis der Region</h4>
                <p className="text-gray-600">
                  Wir kennen den Markt, die lokale Konkurrenz und die Besonderheiten des Rhein-Main-Gebiets.
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold mb-3 text-medico-darkGreen">Erfahrung seit 2008</h4>
                <p className="text-gray-600">
                  Langjährige Betreuung mittelständischer Unternehmen aus der Region.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default MainzAboutSection;
