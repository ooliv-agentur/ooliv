
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Reveal from '@/components/animations/Reveal';

const GermanSolutionSection = () => {
  return (
    <section className="py-24 bg-medico-white font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-medico-darkGreen leading-tight">
              Von der Strategie bis zum GoLive – alles aus einer Hand.
            </h2>
            <p className="text-lg md:text-xl text-medico-darkGreen max-w-4xl mx-auto mb-8" style={{ lineHeight: '1.6' }}>
              Ob <Link to="/webdesign" className="text-medico-turquoise hover:underline font-medium">Website-Relaunch</Link>, <Link to="/google-ads" className="text-medico-turquoise hover:underline font-medium">Google Ads</Link> oder <Link to="/content-erstellung" className="text-medico-turquoise hover:underline font-medium">Content-Erstellung</Link>: Wir begleiten Sie von der Strategie bis zum GoLive. Unsere Projekte basieren auf klaren Prozessen, erprobten Tools – und auf echtem Interesse an Ihrem Erfolg.
            </p>
            <p className="text-lg md:text-xl text-medico-darkGreen max-w-4xl mx-auto" style={{ lineHeight: '1.6' }}>
              Unser Leistungsspektrum umfasst <Link to="/strategie" className="text-medico-turquoise hover:underline font-medium">Strategie & UX</Link>, <Link to="/webdesign" className="text-medico-turquoise hover:underline font-medium">Webdesign</Link>, <Link to="/webentwicklung" className="text-medico-turquoise hover:underline font-medium">Webentwicklung</Link>, <Link to="/content-erstellung" className="text-medico-turquoise hover:underline font-medium">Content-Erstellung</Link>, <Link to="/seo-optimierung" className="text-medico-turquoise hover:underline font-medium">SEO-Optimierung</Link>, <Link to="/google-ads" className="text-medico-turquoise hover:underline font-medium">Google Ads</Link> und <Link to="/ki-technologien" className="text-medico-turquoise hover:underline font-medium">KI-Technologien</Link>.
            </p>
            <div className="mt-10">
              <Button variant="outline" className="group" asChild>
                <Link to="/kontakt">
                  Jetzt Kontakt aufnehmen
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default GermanSolutionSection;
