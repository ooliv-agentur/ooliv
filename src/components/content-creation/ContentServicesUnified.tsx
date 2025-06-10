
import React from 'react';
import { FileText, LayoutList, CheckCircle } from 'lucide-react';

const ContentServicesUnified = () => {
  return (
    <section className="py-20 bg-medico-mint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-lg text-brand-text max-w-3xl mx-auto mb-6">
            ooliv als Content Agentur Mainz bietet maßgeschneiderte Lösungen für all diese Herausforderungen.
          </p>
          <h2 className="text-3xl font-bold mb-4 text-brand-heading">
            Content, der wirkt — von Text bis Visuals
          </h2>
          <p className="text-lg text-brand-text max-w-3xl mx-auto">
            ooliv als Content Agentur Mainz entwickelt Content-Formate, die Ihre Marke stark machen und für SEO, Conversion und Wiedererkennung sorgen.
          </p>
        </div>
        
        {/* Two-column grid layout like startpage/webdesign */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Left Column - Text & Visual Content */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-medico-mint flex items-center justify-center mr-4">
                <FileText className="h-6 w-6 text-medico-turquoise" />
              </div>
              <h3 className="text-xl font-bold text-brand-heading">
                Text & Visual Content
              </h3>
            </div>
            
            <p className="text-brand-text mb-6 leading-relaxed">
              Wir erstellen zielgruppengerechte und suchmaschinenoptimierte Inhalte, die Ihre Expertise unterstreichen und Vertrauen aufbauen.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-5 h-5 rounded-full bg-medico-mint flex items-center justify-center mr-3 flex-shrink-0">
                  <CheckCircle className="h-3 w-3 text-medico-turquoise" />
                </div>
                <span className="text-brand-text">SEO-optimierte Texte</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 rounded-full bg-medico-mint flex items-center justify-center mr-3 flex-shrink-0">
                  <CheckCircle className="h-3 w-3 text-medico-turquoise" />
                </div>
                <span className="text-brand-text">Blog-Artikel</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 rounded-full bg-medico-mint flex items-center justify-center mr-3 flex-shrink-0">
                  <CheckCircle className="h-3 w-3 text-medico-turquoise" />
                </div>
                <span className="text-brand-text">Bilder, Illustrationen, Videos</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 rounded-full bg-medico-mint flex items-center justify-center mr-3 flex-shrink-0">
                  <CheckCircle className="h-3 w-3 text-medico-turquoise" />
                </div>
                <span className="text-brand-text">Technische & B2B-Inhalte</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 rounded-full bg-medico-mint flex items-center justify-center mr-3 flex-shrink-0">
                  <CheckCircle className="h-3 w-3 text-medico-turquoise" />
                </div>
                <span className="text-brand-text">Konsistenter Markenstil</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Struktur & Storytelling */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-medico-mint flex items-center justify-center mr-4">
                <LayoutList className="h-6 w-6 text-medico-turquoise" />
              </div>
              <h3 className="text-xl font-bold text-brand-heading">
                Struktur & Storytelling
              </h3>
            </div>
            
            <p className="text-brand-text mb-6 leading-relaxed">
              Wir strukturieren Ihre Inhalte strategisch und entwickeln überzeugende Narratives, die Ihre Zielgruppe erreichen.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-5 h-5 rounded-full bg-medico-mint flex items-center justify-center mr-3 flex-shrink-0">
                  <CheckCircle className="h-3 w-3 text-medico-turquoise" />
                </div>
                <span className="text-brand-text">Content-Architektur</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 rounded-full bg-medico-mint flex items-center justify-center mr-3 flex-shrink-0">
                  <CheckCircle className="h-3 w-3 text-medico-turquoise" />
                </div>
                <span className="text-brand-text">Storytelling-Struktur</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 rounded-full bg-medico-mint flex items-center justify-center mr-3 flex-shrink-0">
                  <CheckCircle className="h-3 w-3 text-medico-turquoise" />
                </div>
                <span className="text-brand-text">Conversion-Funnel-Unterstützung</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentServicesUnified;
