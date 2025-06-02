
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Reveal from '@/components/animations/Reveal';

const GermanSolutionSection = () => {
  return (
    <section className="py-24 bg-medico-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-medico-navy">
              Wir entwickeln Websites, die Ihr Business voranbringen
            </h2>
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-medico max-w-5xl mx-auto">
              <p className="text-xl text-medico-navyLight mb-8 leading-relaxed">
                Unsere Leistungen umfassen: 
                <Link to="/de/webdesign" className="text-medico-mint hover:text-medico-mintDark font-semibold transition-colors"> Webdesign</Link>, 
                <Link to="/de/webentwicklung" className="text-medico-mint hover:text-medico-mintDark font-semibold transition-colors"> Webentwicklung</Link>, 
                <Link to="/de/content-erstellung" className="text-medico-mint hover:text-medico-mintDark font-semibold transition-colors"> Content-Erstellung</Link>, 
                <Link to="/de/seo-optimierung" className="text-medico-mint hover:text-medico-mintDark font-semibold transition-colors"> SEO-Optimierung</Link>, 
                <Link to="/de/google-ads" className="text-medico-mint hover:text-medico-mintDark font-semibold transition-colors"> Google Ads</Link> und 
                <Link to="/de/ki-technologien" className="text-medico-mint hover:text-medico-mintDark font-semibold transition-colors"> KI-Technologien</Link>.
              </p>
              <div className="flex justify-center">
                <Button variant="mint" size="lg" className="group" asChild>
                  <Link to="/de/ueber-ooliv">
                    Mehr über den Ablauf erfahren
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default GermanSolutionSection;
