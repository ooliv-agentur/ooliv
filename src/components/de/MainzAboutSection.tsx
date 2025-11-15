import React from 'react';
import { Grid2X2, Sparkles, Code2, Phone, ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const MainzAboutSection = () => {
  const services = [
    {
      title: "Webdesign Mainz",
      description: "Professionelle Websites, die Ihre Mainzer Zielgruppe überzeugen und Vertrauen schaffen.",
      icon: <Grid2X2 className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/webdesign"
    },
    {
      title: "SEO Mainz",
      description: "Bessere Sichtbarkeit in Mainz und dem Rhein-Main-Gebiet für mehr qualifizierte Anfragen.",
      icon: <Code2 className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/seo-optimierung"
    },
    {
      title: "Google Ads",
      description: "Gezielte Kampagnen für sofortige Reichweite und messbare Ergebnisse in Ihrer Region.",
      icon: <Sparkles className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/google-ads"
    },
    {
      title: "Content Marketing",
      description: "Überzeugende Inhalte, die Ihre Expertise zeigen und Vertrauen bei Kunden aufbauen.",
      icon: <Phone className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/content-erstellung"
    }
  ];

  return (
    <section className="py-20 bg-white font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-16 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="h-6 w-6 text-accent-primary" />
              <span className="text-accent-primary font-semibold text-lg">Vor Ort in Mainz seit 2008</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-medico-darkGreen mb-6 leading-tight">
              Werbeagentur Mainz – für messbare Erfolge
            </h2>
            <p className="text-xl text-accent-primary max-w-4xl mx-auto mb-6" style={{ lineHeight: '1.5' }}>
              Als Werbeagentur in Mainz entwickeln wir digitale Lösungen, die Ihr Unternehmen nachhaltig voranbringen
            </p>
            <p className="text-xl text-medico-darkGreen max-w-4xl mx-auto mb-8" style={{ lineHeight: '1.5' }}>
              Wir sind eine inhabergeführte Werbeagentur mit Sitz in Mainz und entwickeln strategische Online-Auftritte für B2B-Unternehmen. Keine Remote-Agentur, keine Zwischenstellen – nur direkte Kommunikation und messbare Resultate für Mainzer Unternehmen und das gesamte Rhein-Main-Gebiet.
            </p>
            
            {/* Single CTA Button */}
            <div className="flex justify-center">
              <Button 
                variant="primary"
                size="lg" 
                className="group"
                asChild
              >
                <Link to="/strategie">
                  Unsere Leistungen
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
        
        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
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

        {/* Why Local Section */}
        <Reveal>
          <div className="mt-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-medico-darkGreen mb-8 text-center">
              Warum eine lokale Werbeagentur in Mainz?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h4 className="text-xl font-semibold mb-3 text-medico-darkGreen">Persönlicher Service</h4>
                <p className="text-gray-600">
                  Kurze Wege, schnelle Entscheidungen. Treffen Sie uns auf einen Kaffee in Mainz und lernen Sie uns persönlich kennen.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🏢</div>
                <h4 className="text-xl font-semibold mb-3 text-medico-darkGreen">Inhabergeführt seit 2008</h4>
                <p className="text-gray-600">
                  Keine Konzern-Strukturen, keine Zwischenstellen. Direkte Kommunikation mit den Entscheidern.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📍</div>
                <h4 className="text-xl font-semibold mb-3 text-medico-darkGreen">Kenntnis der Region</h4>
                <p className="text-gray-600">
                  Seit 2008 in Mainz verwurzelt. Wir kennen die lokale Wirtschaft und Ihre Zielgruppe.
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
