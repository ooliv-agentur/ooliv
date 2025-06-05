
import React from 'react';
import { Target, FileText, Code, MessageSquare } from 'lucide-react';
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
          <div className="bg-white border border-gray-100 p-6 rounded-lg hover:shadow-lg transition-all duration-300 group">
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
              <Target className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 leading-tight">Strategie & UX</h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              Klare Struktur, datenbasierte Entscheidungen, B2B-ready.
            </p>
            <div>
              <Button 
                variant="link" 
                className="text-teal-600 hover:text-teal-700 p-0 h-auto font-medium text-sm" 
                asChild
              >
                <Link to="/strategie">
                  Mehr erfahren
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="bg-white border border-gray-100 p-6 rounded-lg hover:shadow-lg transition-all duration-300 group">
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 leading-tight">Content & SEO</h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              Keyword-getrieben, mehrsprachig, KI-gestützt.
            </p>
            <div>
              <Button 
                variant="link" 
                className="text-teal-600 hover:text-teal-700 p-0 h-auto font-medium text-sm" 
                asChild
              >
                <Link to="/content-erstellung">
                  Mehr erfahren
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="bg-white border border-gray-100 p-6 rounded-lg hover:shadow-lg transition-all duration-300 group">
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
              <Code className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 leading-tight">Design & Development</h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              Custom-coded, konversionsstark, skalierbar.
            </p>
            <div>
              <Button 
                variant="link" 
                className="text-teal-600 hover:text-teal-700 p-0 h-auto font-medium text-sm" 
                asChild
              >
                <Link to="/webentwicklung">
                  Mehr erfahren
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="bg-white border border-gray-100 p-6 rounded-lg hover:shadow-lg transition-all duration-300 group">
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
              <MessageSquare className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 leading-tight">Direkte Kommunikation</h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              Sie sprechen immer direkt mit dem CEO – ohne Umwege.
            </p>
            <div>
              <Button 
                variant="link" 
                className="text-teal-600 hover:text-teal-700 p-0 h-auto font-medium text-sm" 
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
