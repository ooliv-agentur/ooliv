
import React from 'react';
import { FileText, Image, LayoutList, Video } from 'lucide-react';

const ContentServicesUnified = () => {
  return (
    <section className="py-20 bg-medico-mint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-brand-heading">
            Unsere Leistungen als Content Agentur Mainz
          </h2>
          <p className="text-lg text-brand-text max-w-3xl mx-auto">
            Mehr als Text – Inhalte, die überzeugen, gefunden werden und verkaufen
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Strategie & Texte */}
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-medico-mint/20 mb-4">
                <FileText className="h-8 w-8 text-medico-turquoise" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-brand-heading">
                  Strategie & Texte
                </h3>
                <p className="text-brand-text mb-4">
                  Wir erstellen suchmaschinenoptimierte Texte für alle relevanten Seiten – von Startseiten über Leistungsseiten bis hin zu FAQs. Dabei achten wir auf eine klare, markenspezifische Sprache, die genau Ihre Zielgruppe anspricht.
                </p>
                <ul className="text-sm text-brand-text/80 text-left space-y-1">
                  <li>• Headlines, CTAs, Blog-Artikel</li>
                  <li>• SEO-optimierte Inhaltsstruktur</li>
                  <li>• Conversion-fokussiertes Copywriting</li>
                  <li>• Konsistente Markensprache</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Visueller Content */}
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-medico-mint/20 mb-4">
                <Image className="h-8 w-8 text-medico-turquoise" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-brand-heading">
                  Visueller Content
                </h3>
                <p className="text-brand-text mb-4">
                  Wir integrieren vorhandenes Foto- und Videomaterial und ergänzen es bei Bedarf durch professionelle Shootings oder KI-Visuals (z. B. mit Midjourney). Für eine durchgängige Bildsprache, die Ihre Marke stärkt.
                </p>
                <ul className="text-sm text-brand-text/80 text-left space-y-1">
                  <li>• Bildästhetik passend zur Marke</li>
                  <li>• Individuelle Fotobriefings</li>
                  <li>• KI-gestützte Bildgenerierung</li>
                  <li>• Icons, Logos, visuelle Assets</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Struktur & Optimierung */}
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-medico-mint/20 mb-4">
                <LayoutList className="h-8 w-8 text-medico-turquoise" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-brand-heading">
                  Struktur & Optimierung
                </h3>
                <p className="text-brand-text mb-4">
                  Wir liefern nicht nur Texte, sondern eine strukturierte Inhaltsarchitektur – inklusive Storytelling-Elementen, Conversion-Optimierung und Multilingualität (sofern gewünscht).
                </p>
                <ul className="text-sm text-brand-text/80 text-left space-y-1">
                  <li>• Durchdachte Inhaltsarchitektur</li>
                  <li>• Storytelling-Struktur</li>
                  <li>• Conversion-Optimierung</li>
                  <li>• Mehrsprachige Inhalte</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Video & Animation */}
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-medico-mint/20 mb-4">
                <Video className="h-8 w-8 text-medico-turquoise" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-brand-heading">
                  Video & Animation
                </h3>
                <p className="text-brand-text mb-4">
                  Erklärvideos, Animationen u. Social Clips — erstellt mit modernsten Tools wie Sora. Für Hero-Hintergrundvideos und Produkt- & Prozessvisualisierung.
                </p>
                <ul className="text-sm text-brand-text/80 text-left space-y-1">
                  <li>• Erklärvideos, Animationen</li>
                  <li>• Hero-Hintergrundvideos</li>
                  <li>• Produkt- & Prozessvisualisierung</li>
                  <li>• Erstellung mit Tools wie Sora</li>
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
