
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
                <h3 className="text-xl font-bold mb-4 text-brand-heading">
                  Text & Visual Content
                </h3>
                <p className="text-brand-text mb-6 text-base leading-relaxed">
                  Wir erstellen zielgruppengerechte und suchmaschinenoptimierte Inhalte, die Ihre Expertise unterstreichen und Vertrauen aufbauen.
                </p>
                <div className="text-left space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-medico-turquoise rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-brand-text font-medium">SEO-optimierte Texte</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-medico-turquoise rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-brand-text font-medium">Blog-Artikel</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-medico-turquoise rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-brand-text font-medium">Bilder, Illustrationen, Videos</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-medico-turquoise rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-brand-text font-medium">Technische & B2B-Inhalte</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-medico-turquoise rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-brand-text font-medium">Konsistenter Markenstil</span>
                  </div>
                </div>
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
                <h3 className="text-xl font-bold mb-4 text-brand-heading">
                  Struktur & Storytelling
                </h3>
                <p className="text-brand-text mb-6 text-base leading-relaxed">
                  Wir strukturieren Ihre Inhalte strategisch und entwickeln überzeugende Narratives, die Ihre Zielgruppe erreichen.
                </p>
                <div className="text-left space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-medico-turquoise rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-brand-text font-medium">Content-Architektur</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-medico-turquoise rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-brand-text font-medium">Storytelling-Struktur</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-medico-turquoise rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-brand-text font-medium">Conversion-Funnel-Unterstützung</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentServicesUnified;
