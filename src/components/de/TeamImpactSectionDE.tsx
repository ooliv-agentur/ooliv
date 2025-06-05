
import React from 'react';
import { Check, Target, FileText, Code, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const TeamImpactSectionDE = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-heading mb-6">
            Kleine Agentur, große Wirkung.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-medico-mint p-8 rounded-lg hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-medico-turquoise rounded-full flex items-center justify-center mb-4 mx-auto">
              <Target className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center text-medico-darkGreen">Strategie & UX</h3>
            <p className="text-center text-medico-darkGreen mb-4 text-sm leading-relaxed">
              Klare Struktur, datenbasierte Entscheidungen, B2B-ready.
            </p>
            <div className="text-center">
              <Button 
                variant="link" 
                className="text-medico-turquoise hover:text-medico-turquoise/80 p-0 h-auto font-medium" 
                asChild
              >
                <Link to="/strategie">
                  Mehr erfahren
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="bg-medico-mint p-8 rounded-lg hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-medico-turquoise rounded-full flex items-center justify-center mb-4 mx-auto">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center text-medico-darkGreen">Content & SEO</h3>
            <p className="text-center text-medico-darkGreen mb-4 text-sm leading-relaxed">
              Keyword-getrieben, mehrsprachig, KI-gestützt.
            </p>
            <div className="text-center">
              <Button 
                variant="link" 
                className="text-medico-turquoise hover:text-medico-turquoise/80 p-0 h-auto font-medium" 
                asChild
              >
                <Link to="/content-erstellung">
                  Mehr erfahren
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="bg-medico-mint p-8 rounded-lg hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-medico-turquoise rounded-full flex items-center justify-center mb-4 mx-auto">
              <Code className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center text-medico-darkGreen">Design & Development</h3>
            <p className="text-center text-medico-darkGreen mb-4 text-sm leading-relaxed">
              Custom-coded, konversionsstark, skalierbar.
            </p>
            <div className="text-center">
              <Button 
                variant="link" 
                className="text-medico-turquoise hover:text-medico-turquoise/80 p-0 h-auto font-medium" 
                asChild
              >
                <Link to="/webentwicklung">
                  Mehr erfahren
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="bg-medico-mint p-8 rounded-lg hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-medico-turquoise rounded-full flex items-center justify-center mb-4 mx-auto">
              <MessageSquare className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center text-medico-darkGreen">Direkte Kommunikation</h3>
            <p className="text-center text-medico-darkGreen mb-4 text-sm leading-relaxed">
              Sie sprechen immer direkt mit dem CEO – ohne Umwege.
            </p>
            <div className="text-center">
              <Button 
                variant="link" 
                className="text-medico-turquoise hover:text-medico-turquoise/80 p-0 h-auto font-medium" 
                asChild
              >
                <Link to="/kontakt">
                  Mehr erfahren
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamImpactSectionDE;
