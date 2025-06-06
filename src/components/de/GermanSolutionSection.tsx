
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
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-medico-darkGreen leading-tight">
              Von der Strategie bis zum GoLive – alles aus einer Hand.
            </h2>
            <p className="text-xl text-medico-darkGreen max-w-4xl mx-auto leading-relaxed mb-8">
              Ob <Link to="/de/webdesign" className="text-medico-turquoise hover:underline font-medium">Website-Relaunch</Link>, <Link to="/de/google-ads" className="text-medico-turquoise hover:underline font-medium">Google Ads</Link> oder <Link to="/de/content-erstellung" className="text-medico-turquoise hover:underline font-medium">Content-Erstellung</Link>: Wir begleiten Sie von der Strategie bis zum GoLive. Unsere Projekte basieren auf klaren Prozessen, erprobten Tools – und auf echtem Interesse an Ihrem Erfolg.
            </p>
            <p className="text-xl text-medico-darkGreen max-w-4xl mx-auto leading-relaxed">
              Unser Leistungsspektrum umfasst <Link to="/strategie" className="text-medico-turquoise hover:underline font-medium">Strategie & UX</Link>, <Link to="/de/webdesign" className="text-medico-turquoise hover:underline font-medium">Webdesign</Link>, <Link to="/de/webentwicklung" className="text-medico-turquoise hover:underline font-medium">Webentwicklung</Link>, <Link to="/de/content-erstellung" className="text-medico-turquoise hover:underline font-medium">Content-Erstellung</Link>, <Link to="/de/seo-optimierung" className="text-medico-turquoise hover:underline font-medium">SEO-Optimierung</Link>, <Link to="/de/google-ads" className="text-medico-turquoise hover:underline font-medium">Google Ads</Link> und <Link to="/de/ki-technologien" className="text-medico-turquoise hover:underline font-medium">KI-Technologien</Link>.
            </p>
            <div className="mt-10">
              <Button variant="outline" className="group" asChild>
                <Link to="/de/ueber-ooliv">
                  Mehr über den Ablauf erfahren
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
