
import React from 'react';
import { FileText, Image, LayoutList } from 'lucide-react';

const ContentServiceDE = () => {
  return (
    <section className="py-20 bg-white">
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
              <div className="p-3 rounded-full bg-brand-backgroundAlt mb-4">
                <FileText className="h-8 w-8 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-brand-heading">
                  Texte & SEO-Inhalte
                </h3>
                <p className="text-brand-text">
                  Wir erstellen suchmaschinenoptimierte Texte für Startseite, Leistungsseiten, Calls-to-Action und FAQs – maßgeschneidert auf Ihre Tonalität und Zielgruppe.
                </p>
              </div>
            </div>
          </div>
          
          {/* Bilder & Visuals */}
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-brand-backgroundAlt mb-4">
                <Image className="h-8 w-8 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-brand-heading">
                  Bilder & Visuals
                </h3>
                <p className="text-brand-text">
                  Wir integrieren Ihr vorhandenes Foto- und Videomaterial und ergänzen es bei Bedarf mit Illustrationen oder KI-Visuals (z. B. über Midjourney).
                </p>
              </div>
            </div>
          </div>
          
          {/* Struktur & Content-Flow */}
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-brand-backgroundAlt mb-4">
                <LayoutList className="h-8 w-8 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-brand-heading">
                  Struktur & Content-Flow
                </h3>
                <p className="text-brand-text">
                  Wir liefern keine losen Textblöcke, sondern eine durchdachte Inhaltsarchitektur – inklusive Layout-Vorschlägen, Storytelling-Struktur und ggf. Mehrsprachigkeit.
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
