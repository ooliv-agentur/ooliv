
import React from 'react';
import { FileText, Image, LayoutList } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContentService = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-brand-heading">
            {isGerman 
              ? "Mehr als Text – Inhalte, die überzeugen, gefunden werden und verkaufen" 
              : "More than text – content that speaks, ranks, and converts"
            }
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Text & SEO Copy */}
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-medico-mint/20 mb-4">
                <FileText className="h-8 w-8 text-accent-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-brand-heading">
                  {isGerman ? "Texte & SEO-Inhalte" : "Text & SEO Copy"}
                </h3>
                <p className="text-brand-text">
                  {isGerman
                    ? "Wir erstellen suchmaschinenoptimierte Texte für Startseiten, Leistungsseiten, Calls-to-Action und FAQs – in Ihrer Tonalität, für Ihre Zielgruppe."
                    : "We write conversion-optimized copy – for your homepage, service pages, CTAs, and FAQs. All content is keyword-driven and tailored to your brand voice."
                  }
                </p>
              </div>
            </div>
          </div>
          
          {/* Images & Visuals */}
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-medico-mint/20 mb-4">
                <Image className="h-8 w-8 text-accent-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-brand-heading">
                  {isGerman ? "Bilder & Visuals" : "Images & Visuals"}
                </h3>
                <p className="text-brand-text">
                  {isGerman
                    ? "Wir integrieren vorhandenes Foto- und Videomaterial und ergänzen es bei Bedarf mit Illustrationen oder KI-Visuals (z. B. via Midjourney)."
                    : "We work with your existing photo and video assets, and supplement with custom illustrations or AI-enhanced visuals (via Midjourney) if needed."
                  }
                </p>
              </div>
            </div>
          </div>
          
          {/* Structure & Flow */}
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-medico-mint/20 mb-4">
                <LayoutList className="h-8 w-8 text-accent-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-brand-heading">
                  {isGerman ? "Struktur & Content-Flow" : "Structure & Flow"}
                </h3>
                <p className="text-brand-text">
                  {isGerman
                    ? "Wir liefern keine losen Textblöcke, sondern durchdachte Inhaltsarchitekturen – inkl. Storytelling, Layout-Vorschlägen und ggf. Mehrsprachigkeit."
                    : "We don't just deliver blocks of text. We define layout, content hierarchy, and the full content architecture for your website – including multilingual setup."
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentService;
