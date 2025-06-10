
import React from 'react';
import { FileText, LayoutList, CheckCircle } from 'lucide-react';

const ContentServicesUnified = () => {
  return (
    <section className="py-20 bg-medico-mint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-brand-heading">
            Content, der wirkt — von Text bis Visuals
          </h2>
          <p className="text-lg text-brand-text max-w-3xl mx-auto">
            ooliv als Content Agentur Mainz entwickelt Content-Formate, die Ihre Marke stark machen und für SEO, Conversion und Wiedererkennung sorgen.
          </p>
        </div>
        
        {/* Single centered card with horizontal layout */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              
              {/* Left Column - Text & Visual Content */}
              <div className="space-y-6">
                <div className="flex items-center mb-6">
                  <div className="p-4 rounded-xl bg-medico-mint mr-4">
                    <FileText className="h-6 w-6 text-medico-turquoise" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-heading">
                    Text & Visual Content
                  </h3>
                </div>
                
                <p className="text-brand-text text-lg leading-relaxed mb-8">
                  Wir erstellen zielgruppengerechte und suchmaschinenoptimierte Inhalte, die Ihre Expertise unterstreichen und Vertrauen aufbauen.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center group">
                    <CheckCircle className="h-5 w-5 text-medico-turquoise mr-3 flex-shrink-0" />
                    <span className="text-brand-text font-medium text-lg group-hover:text-medico-turquoise transition-colors">SEO-optimierte Texte</span>
                  </div>
                  <div className="flex items-center group">
                    <CheckCircle className="h-5 w-5 text-medico-turquoise mr-3 flex-shrink-0" />
                    <span className="text-brand-text font-medium text-lg group-hover:text-medico-turquoise transition-colors">Blog-Artikel</span>
                  </div>
                  <div className="flex items-center group">
                    <CheckCircle className="h-5 w-5 text-medico-turquoise mr-3 flex-shrink-0" />
                    <span className="text-brand-text font-medium text-lg group-hover:text-medico-turquoise transition-colors">Bilder, Illustrationen, Videos</span>
                  </div>
                  <div className="flex items-center group">
                    <CheckCircle className="h-5 w-5 text-medico-turquoise mr-3 flex-shrink-0" />
                    <span className="text-brand-text font-medium text-lg group-hover:text-medico-turquoise transition-colors">Technische & B2B-Inhalte</span>
                  </div>
                  <div className="flex items-center group">
                    <CheckCircle className="h-5 w-5 text-medico-turquoise mr-3 flex-shrink-0" />
                    <span className="text-brand-text font-medium text-lg group-hover:text-medico-turquoise transition-colors">Konsistenter Markenstil</span>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Struktur & Storytelling */}
              <div className="space-y-6">
                <div className="flex items-center mb-6">
                  <div className="p-4 rounded-xl bg-medico-mint mr-4">
                    <LayoutList className="h-6 w-6 text-medico-turquoise" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-heading">
                    Struktur & Storytelling
                  </h3>
                </div>
                
                <p className="text-brand-text text-lg leading-relaxed mb-8">
                  Wir strukturieren Ihre Inhalte strategisch und entwickeln überzeugende Narratives, die Ihre Zielgruppe erreichen.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center group">
                    <CheckCircle className="h-5 w-5 text-medico-turquoise mr-3 flex-shrink-0" />
                    <span className="text-brand-text font-medium text-lg group-hover:text-medico-turquoise transition-colors">Content-Architektur</span>
                  </div>
                  <div className="flex items-center group">
                    <CheckCircle className="h-5 w-5 text-medico-turquoise mr-3 flex-shrink-0" />
                    <span className="text-brand-text font-medium text-lg group-hover:text-medico-turquoise transition-colors">Storytelling-Struktur</span>
                  </div>
                  <div className="flex items-center group">
                    <CheckCircle className="h-5 w-5 text-medico-turquoise mr-3 flex-sharp-0" />
                    <span className="text-brand-text font-medium text-lg group-hover:text-medico-turquoise transition-colors">Conversion-Funnel-Unterstützung</span>
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
