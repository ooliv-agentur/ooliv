
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Reveal from '@/components/animations/Reveal';

const GermanSolutionSection = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <section className="py-24 bg-medico-white font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-medico-darkGreen leading-tight">
              Kennen Sie diese Probleme?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
              <div className="bg-medico-mint p-6 rounded-lg">
                <h3 className="font-semibold text-medico-darkGreen mb-2">
                  Website generiert keine Anfragen
                </h3>
                <p className="text-medico-darkGreen text-sm">
                  Viel Traffic, aber wenig Leads? Das frustriert.
                </p>
              </div>
              <div className="bg-medico-mint p-6 rounded-lg">
                <h3 className="font-semibold text-medico-darkGreen mb-2">
                  Bei Google nicht auffindbar
                </h3>
                <p className="text-medico-darkGreen text-sm">
                  Ihre Konkurrenz steht auf Seite 1, Sie nicht.
                </p>
              </div>
              <div className="bg-medico-mint p-6 rounded-lg">
                <h3 className="font-semibold text-medico-darkGreen mb-2">
                  Komplizierte Agentur-Zusammenarbeit
                </h3>
                <p className="text-medico-darkGreen text-sm">
                  Endlose Meetings, aber wenig Fortschritt.
                </p>
              </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-medico-darkGreen">
              Wir lösen sie pragmatisch und nachhaltig.
            </h3>
            
            <p className="text-lg md:text-xl text-medico-darkGreen max-w-4xl mx-auto mb-8" style={{ lineHeight: '1.6' }}>
              Von der <Link to="/webdesign" className="text-accent-primary hover:underline font-medium">Website-Entwicklung</Link> über 
              <Link to="/seo-optimierung" className="text-accent-primary hover:underline font-medium"> SEO-Optimierung</Link> bis hin zu 
              <Link to="/content-erstellung" className="text-accent-primary hover:underline font-medium"> Content-Marketing</Link> – 
              alles koordiniert aus einer Hand.
            </p>
            <p className="text-lg md:text-xl text-medico-darkGreen max-w-4xl mx-auto mb-8" style={{ lineHeight: '1.6' }}>
              Modernste <Link to="/ki-technologien" className="text-accent-primary hover:underline font-medium">KI-Integration</Link>, 
              strategische <Link to="/google-ads" className="text-accent-primary hover:underline font-medium">Google Ads Betreuung</Link> und 
              <Link to="/webentwicklung" className="text-accent-primary hover:underline font-medium"> professionelle Entwicklung</Link> 
              runden unser Angebot ab.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary"
                size="lg" 
                className="group"
                onClick={handleStartProject}
              >
                Lassen Sie uns über Ihr Projekt sprechen
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default GermanSolutionSection;
