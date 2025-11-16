import React from 'react';
import { Grid2X2, Sparkles, Code2, Phone } from 'lucide-react';
import LocationServicesSection from '@/components/location/LocationServicesSection';

const DarmstadtAboutSection = () => {
  const services = [
    {
      title: "Webdesign",
      description: "Professionelle Websites für Tech-Unternehmen und wissenschaftsnahe Branchen in Darmstadt.",
      icon: <Grid2X2 className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/webdesign"
    },
    {
      title: "Entwicklung",
      description: "Technisch fundierte Lösungen für B2B-Unternehmen im TU-Umfeld.",
      icon: <Sparkles className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/webentwicklung"
    },
    {
      title: "SEO",
      description: "Bessere Sichtbarkeit in Darmstadt und dem Rhein-Main-Gebiet für qualifizierte Anfragen.",
      icon: <Code2 className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/seo-optimierung"
    },
    {
      title: "Strategie",
      description: "Datenbasierte B2B-Strategien, die Ihre Position in wissenschaftsnahen Märkten stärken.",
      icon: <Phone className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/strategie"
    }
  ];

  return (
    <LocationServicesSection
      location="Darmstadt"
      headline="ooliv in Darmstadt – für messbare Erfolge"
      description="Darmstadt ist Europas Tech-Hub mit TU, Forschungsinstituten und Innovation. Wir sprechen die Sprache technisch anspruchsvoller Unternehmen: wissenschaftsnahe B2B-Firmen, Hightech-Startups und Engineering-Dienstleister erhalten von uns Websites, die technische Kompetenz digital sichtbar machen."
      services={services}
      ctaText="Mehr erfahren"
      ctaLink="/strategie"
      gridCols={4}
    />
  );
};

export default DarmstadtAboutSection;
