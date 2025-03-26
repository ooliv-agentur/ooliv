
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface WebDevHeroDEProps {
  pageTag?: string;
}

const WebDevHeroDE: React.FC<WebDevHeroDEProps> = ({ pageTag }) => {
  return (
    <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-b from-brand-backgroundAlt to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-block bg-brand-primary/10 rounded-full px-4 py-1.5 text-brand-primary font-medium text-sm mb-6">
            {pageTag || "Webentwicklung"}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-heading">
            Webentwicklung, die Ihre Geschäftsziele unterstützt
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-brand-text">
            Wir entwickeln Websites, die schnell laden, Besucher konvertieren und mit Ihrem Unternehmen wachsen. Unsere Entwicklung fokussiert sich auf Performance und Sicherheit.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/de/kontakt">
                Entwicklungsprojekt starten
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/de/kontakt">
                Strategiegespräch buchen
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevHeroDE;
