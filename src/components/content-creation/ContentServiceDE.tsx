
import React from 'react';
import { FileText, Image, LayoutList } from 'lucide-react';

const ContentServiceDE = () => {
  return (
    <section className="py-20 bg-medico-mint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-brand-heading">
            Mehr als Text – Inhalte, die überzeugen, gefunden werden und verkaufen
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Texte & SEO-Inhalte */}
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-medico-mint/20 mb-4">
                <FileText className="h-8 w-8 text-accent-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-brand-heading">
                  Texte & SEO-Inhalte
                </h3>
                <p className="text-brand-text">
                  Wir erstellen suchmaschinenoptimierte Texte für alle relevanten Seiten – von Startseiten über Leistungsseiten bis hin zu FAQs. Dabei achten wir auf eine klare, markenspezifische Sprache, die genau Ihre Zielgruppe anspricht.
                </p>
              </div>
            </div>
          </div>
          
          {/* Bilder, Videos & Visuals */}
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-medico-mint/20 mb-4">
                <Image className="h-8 w-8 text-accent-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-brand-heading">
                  Bilder, Videos & Visuals
                </h3>
                <p className="text-brand-text">
                  Wir integrieren vorhandenes Foto- und Videomaterial und ergänzen es bei Bedarf durch professionelle Shootings oder KI-Visuals (z. B. mit Midjourney). Für eine durchgängige Bildsprache, die Ihre Marke stärkt.
                </p>
              </div>
            </div>
          </div>
          
          {/* Struktur & Content-Flow */}
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-medico-mint/20 mb-4">
                <LayoutList className="h-8 w-8 text-accent-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-brand-heading">
                  Struktur & Content-Flow
                </h3>
                <p className="text-brand-text">
                  Wir liefern nicht nur Texte, sondern eine strukturierte Inhaltsarchitektur – inklusive Storytelling-Elementen, mehr Anfragen generieren und Multilingualität (sofern gewünscht).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentServiceDE;
