
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUsCTA = () => {
  const handleOpenLeadForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <section className="py-16 bg-medico-mint font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-medico-darkGreen leading-tight">
            Lassen Sie uns gemeinsam etwas Großartiges aufbauen
          </h2>
          <p className="text-lg mb-8 text-medico-darkGreen leading-relaxed">
            Ob Sie einen Relaunch planen, eine neue Website benötigen oder Hilfe dabei brauchen, Komplexität in Klarheit zu verwandeln – lassen Sie uns gemeinsam Ihren nächsten Schritt erkunden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="group bg-medico-yellow text-medico-darkGreen hover:bg-yellow-400 font-bold py-3 px-6 rounded-full text-base shadow-lg hover:shadow-xl transition-all duration-300" 
              onClick={handleOpenLeadForm}
            >
              Projekt starten
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="group bg-white text-medico-darkGreen hover:bg-gray-50 border-2 border-medico-darkGreen hover:border-medico-turquoise font-bold py-3 px-6 rounded-full text-base shadow-lg hover:shadow-xl transition-all duration-300" 
              asChild
            >
              <Link to="/kontakt">
                Strategiegespräch buchen
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <p className="text-center text-sm text-medico-darkGreen/60 mt-8">
            100+ erfolgreich umgesetzte Projekte • Vertraut von führenden Unternehmen • KI-Strategien, die menschlich und messbar sind
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsCTA;
