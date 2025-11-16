import React from 'react';
import { Grid2X2, Sparkles, Code2, Phone } from 'lucide-react';
import LocationServicesSection from '@/components/location/LocationServicesSection';
import Reveal from '@/components/animations/Reveal';

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
    <LocationServicesSection
      location="Mainz"
      headline="Ihre Digitalagentur vor Ort"
      description="In der Gutenberg-Stadt verbinden wir Mainzer Tradition mit moderner Technologie. Als lokale Digitalagentur entwickeln wir Websites und Online-Strategien für Dienstleister, Medienunternehmen und B2B-Firmen – direkt vor Ort, mit regionalem Know-how und messbaren Resultaten für die Landeshauptstadt und das Rhein-Main-Gebiet."
      services={services}
      ctaText="Mehr über unsere Arbeitsweise"
      ctaLink="/strategie"
      servicesHeadline="Leistungen für Mainzer Unternehmen"
      gridCols={3}
    >
      {/* Target Audience Section */}
      <Reveal>
        <div className="mt-20 text-center">
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
    </LocationServicesSection>
  );
};

export default MainzAboutSection;
