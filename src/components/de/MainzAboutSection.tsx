import React from 'react';
import { Target, Lightbulb, Rocket, Zap } from 'lucide-react';
import LocationServicesSection from '@/components/location/LocationServicesSection';
import Reveal from '@/components/animations/Reveal';

const MainzAboutSection = () => {
  const services = [
    {
      title: "Strategic Discovery",
      description: "4-6 Wochen intensive Discovery Phase – User Research, Business Model Validation, Strategic Roadmap.",
      icon: <Target className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/strategie"
    },
    {
      title: "Product & UX Strategy",
      description: "End-to-End Product Strategy – von User Journey Mapping bis Conversion Optimization mit messbaren KPIs.",
      icon: <Lightbulb className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/produkt-ux-strategie"
    },
    {
      title: "AI Integration",
      description: "Strategic AI Integration Advisory – von Use Case Identification bis Production Deployment.",
      icon: <Zap className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/ki-technologien"
    },
    {
      title: "Strategic Retainer",
      description: "Langfristige C-Level Advisory Partnership für kontinuierliche Digital Transformation.",
      icon: <Rocket className="h-6 w-6" style={{ color: 'black' }} />,
      link: "/investition"
    }
  ];

  return (
    <LocationServicesSection
      location="Mainz"
      headline="Strategic Digital Advisory in Mainz"
      description="Von unserem Standort in Mainz aus führen wir Digital Transformationen für B2B-Unternehmen im gesamten DACH-Raum. 16+ Jahre Track Record in Strategic Discovery, AI Integration und Product & UX Strategy – kein klassisches Agentur-Modell, sondern C-Level Strategic Leadership."
      services={services}
      ctaText="Strategiegespräch vereinbaren"
      ctaLink="/kontakt"
      servicesHeadline="Strategic Advisory Services"
      gridCols={4}
    >
      {/* Target Audience Section */}
      <Reveal>
        <div className="mt-20 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-medico-darkGreen mb-6">
            Für wen wir transformieren
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            B2B-Unternehmen im DACH-Raum, die digitale Transformation ernst nehmen
          </p>
          <div className="max-w-3xl mx-auto">
            <ul className="grid md:grid-cols-2 gap-4 text-left text-lg text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-accent-primary mt-1">•</span>
                <span>Tech-Startups mit Product-Market Fit Challenges</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-primary mt-1">•</span>
                <span>Mittelstand vor Digital Transformation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-primary mt-1">•</span>
                <span>SaaS-Unternehmen mit UX Optimization Needs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-primary mt-1">•</span>
                <span>Etablierte Unternehmen mit Innovation Gaps</span>
              </li>
              <li className="flex items-start gap-3 md:col-span-2 justify-center">
                <span className="text-accent-primary mt-1">•</span>
                <span>B2B-Firmen mit komplexen Strategic Challenges</span>
              </li>
            </ul>
            <p className="text-lg text-gray-600 mt-8 italic">
              Investment-Range: €15k–80k für Transformations-Projekte, €8k–15k/Monat für Strategic Retainer.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Why Mainz Section */}
      <Reveal>
        <div className="mt-20 bg-gray-50 rounded-2xl p-12">
          <h3 className="text-3xl md:text-4xl font-bold text-medico-darkGreen mb-6 text-center">
            Warum Mainz als Standort?
          </h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed text-center">
            Mainz bietet die perfekte Balance: Direkt an der Rhein-Main-Achse mit Nähe zu Frankfurt, Wiesbaden und Darmstadt, aber ohne Großstadt-Overhead. Seit 2008 entwickeln wir von hier aus Strategic Frameworks für B2B-Unternehmen im gesamten DACH-Raum. Persönliche Vor-Ort-Termine möglich, Remote-Work als Standard – maximale Flexibilität für C-Level Strategic Advisory.
          </p>
        </div>
      </Reveal>
    </LocationServicesSection>
  );
};

export default MainzAboutSection;
