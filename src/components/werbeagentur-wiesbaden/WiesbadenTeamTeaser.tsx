
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Reveal from '@/components/animations/Reveal';

const WiesbadenTeamTeaser = () => {
  return (
    <section className="py-20 bg-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold text-center text-brand-heading mb-12">
            Unser Team: Kreativ & engagiert
          </h2>
        </Reveal>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Uli */}
          <Reveal className="flex flex-col items-center text-center">
            <div className="w-36 h-36 rounded-full overflow-hidden mb-4">
              <img 
                src="/lovable-uploads/Uli.jpg" 
                alt="Uli Schönleber" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-brand-heading">Uli Schönleber</h3>
            <p className="text-brand-primary mb-2">Founder & Creative Director</p>
            <p className="text-brand-text">
              Hinter ooliv steht ein achtköpfiges Team aus Designern, Entwicklern und Marketing-Experten. Unter der Leitung von Uli Schönleber setzen wir Projekte schnell, professionell und zuverlässig um.
            </p>
          </Reveal>
          
          {/* Lisa */}
          <Reveal className="flex flex-col items-center text-center">
            <div className="w-36 h-36 rounded-full overflow-hidden mb-4">
              <img 
                src="/lovable-uploads/Lisa.jpg" 
                alt="Lisa Großmann" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-brand-heading">Lisa Großmann</h3>
            <p className="text-brand-primary mb-2">Design Lead & UX Expert</p>
            <p className="text-brand-text">
              Gemeinsam verfolgen wir das Ziel, unseren Kunden aus Wiesbaden und Umgebung außergewöhnliche Ergebnisse zu liefern, die begeistern und messbare Erfolge erzielen.
            </p>
          </Reveal>
        </div>
        
        <div className="flex justify-center mt-12">
          <Button variant="outline" asChild>
            <Link to="/ueber-ooliv">
              Mehr über unser Team <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WiesbadenTeamTeaser;
