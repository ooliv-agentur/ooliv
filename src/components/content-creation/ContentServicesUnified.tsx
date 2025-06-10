
import React from 'react';
import { FileText, LayoutList } from 'lucide-react';

const ContentServicesUnified = () => {
  return (
    <section className="py-20 bg-medico-mint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-brand-heading">
            Content, der wirkt — von Text bis Visuals
          </h2>
          <p className="text-lg text-brand-text max-w-3xl mx-auto">
            ooliv als Content Agentur Mainz entwickelt Content-Formate, die Ihre Marke stark machen und für SEO, Conversion und Wiedererkennung sorgen.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Text & Visual Content */}
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-medico-mint/20 mb-4">
                <FileText className="h-8 w-8 text-medico-turquoise" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-brand-heading">
                  Text & Visual Content
                </h3>
                <p className="text-brand-text mb-4">
                  Wir erstellen zielgruppengerechte und suchmaschinenoptimierte Inhalte, die Ihre Expertise unterstreichen und Vertrauen aufbauen.
                </p>
                <ul className="text-sm text-brand-text/80 text-left space-y-1">
                  <li>• SEO-optimierte Texte</li>
                  <li>• Blog-Artikel</li>
                  <li>• Bilder, Illustrationen, Videos</li>
                  <li>• Technische & B2B-Inhalte</li>
                  <li>• Konsistenter Markenstil</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Struktur & Storytelling */}
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-medico-mint/20 mb-4">
                <LayoutList className="h-8 w-8 text-medico-turquoise" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-brand-heading">
                  Struktur & Storytelling
                </h3>
                <p className="text-brand-text mb-4">
                  Wir strukturieren Ihre Inhalte strategisch und entwickeln überzeugende Narratives, die Ihre Zielgruppe erreichen.
                </p>
                <ul className="text-sm text-brand-text/80 text-left space-y-1">
                  <li>• Content-Architektur</li>
                  <li>• Storytelling-Struktur</li>
                  <li>• Conversion-Funnel-Unterstützung</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentServicesUnified;
