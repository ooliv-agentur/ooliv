
import React from 'react';
import { Grid2X2, Sparkles, Code, Phone } from 'lucide-react';
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-gray-200 p-8 rounded-xl hover:shadow-lg transition-all duration-300 group">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <Grid2X2 className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Strategie & UX</h3>
            <p className="text-gray-600 mb-6 text-base leading-relaxed">
              Klare Struktur, datenbasierte Entscheidungen, B2B-ready.
            </p>
            <div>
              <Button 
                variant="link" 
                className="text-green-600 hover:text-green-700 p-0 h-auto font-medium" 
                asChild
              >
                <Link to="/strategie">
                  Mehr erfahren
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 p-8 rounded-xl hover:shadow-lg transition-all duration-300 group">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <Sparkles className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Content & SEO</h3>
            <p className="text-gray-600 mb-6 text-base leading-relaxed">
              Keyword-getrieben, mehrsprachig, KI-gestützt.
            </p>
            <div>
              <Button 
                variant="link" 
                className="text-green-600 hover:text-green-700 p-0 h-auto font-medium" 
                asChild
              >
                <Link to="/content-erstellung">
                  Mehr erfahren
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 p-8 rounded-xl hover:shadow-lg transition-all duration-300 group">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <Code className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Design & Development</h3>
            <p className="text-gray-600 mb-6 text-base leading-relaxed">
              Custom-coded, konversionsstark, skalierbar.
            </p>
            <div>
              <Button 
                variant="link" 
                className="text-green-600 hover:text-green-700 p-0 h-auto font-medium" 
                asChild
              >
                <Link to="/webentwicklung">
                  Mehr erfahren
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 p-8 rounded-xl hover:shadow-lg transition-all duration-300 group">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <Phone className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Direkte Kommunikation</h3>
            <p className="text-gray-600 mb-6 text-base leading-relaxed">
              Sie sprechen immer direkt mit dem CEO – ohne Umwege.
            </p>
            <div>
              <Button 
                variant="link" 
                className="text-green-600 hover:text-green-700 p-0 h-auto font-medium" 
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
