
import React from 'react';

const SEOTextSection = () => {
  const handleOpenLeadForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  return (
    <section className="bg-[#f7fafa] pt-12 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none text-[17px] leading-relaxed text-gray-700">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Werbeagentur Mainz – maßgeschneiderte Websites für Ihr Unternehmen</h2>
          
          <p className="my-4">
            Als spezialisierte Werbeagentur in Mainz entwickeln wir Websites, die weit mehr leisten als gutes Design: 
            Unsere Lösungen sind technisch sauber, SEO-optimiert und strategisch ausgerichtet auf Ihre Geschäftsziele. 
            Ob Corporate Website, E-Commerce-Shop oder individuelle Webentwicklung – wir schaffen digitale Plattformen, 
            die nachhaltig konvertieren und wachsen können.
          </p>
          
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">Warum ooliv? – Ihr Partner für Webdesign und Marketing</h3>
          
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Maßgeschneiderte CMS-Lösungen: WordPress und Shopify, ausgewählt nach Ihren Unternehmenszielen.</li>
            <li>Transparente Preismodelle: Klare Festpreise oder individuelle Angebote, je nach Projektkomplexität.</li>
            <li>Strategische Entwicklung: SEO, UX und konversionsorientierte technische Umsetzung.</li>
            <li>Rundum-Support: Hosting, Wartung, Sicherheit und Performance-Monitoring.</li>
            <li>Direkter Expertenzugang: Sie arbeiten direkt mit unserem CEO und Entwicklungsteam – keine Zwischenschritte.</li>
          </ul>
          
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">Unsere Leistungen – Webdesign und digitale Strategie</h3>
          
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Webdesign & UX-Design: Schnell ladend, nutzerorientiert, konversionsoptimiert.</li>
            <li>WordPress-Entwicklung: SEO-bereite, skalierbare CMS-Strukturen.</li>
            <li>Technische Implementierung: DSGVO-konform, sichere Programmierung.</li>
            <li>E-Commerce-Lösungen: Maßgeschneiderte Online-Shops mit WordPress (WooCommerce) und Shopify.</li>
            <li>SEO & Google Ads: Umfassende On-Page-SEO und performante PPC-Kampagnen.</li>
            <li>Laufende Betreuung: Flexible Wartungspakete und zuverlässiges Hosting.</li>
          </ul>
          
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">Benutzerfreundlichkeit und Zugänglichkeit</h3>
          
          <p className="my-4">
            Unsere WordPress-CMS-Lösungen sind mit intuitiven Drag-and-Drop-Tools und einer benutzerfreundlichen 
            visuellen Oberfläche ausgestattet, die schnelle Publishing-Workflows und einfache Zusammenarbeit für 
            Ihre Marketing- oder Content-Teams gewährleisten.
          </p>
          
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">Transparente Preisgestaltung für Webdesign-Projekte</h3>
          
          <p className="my-4">Jedes Projekt ist einzigartig. Wir bieten:</p>
          
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Festpreispakete: Für klar definierte Umfänge.</li>
            <li>Individuelle Angebote: Basierend auf Komplexität, technischen Anforderungen und SEO-Zielen.</li>
            <li>Wartungspakete: Laufende monatliche Unterstützung und Updates.</li>
          </ul>
          
          <p className="my-4">
            Sie erhalten von Anfang an einen detaillierten Entwicklungsplan, kontinuierliche Beratung und messbare Meilensteine.
          </p>
          
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">Warum eine professionelle Werbeagentur wählen?</h3>
          
          <p className="my-4">Die Zusammenarbeit mit ooliv garantiert:</p>
          
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Schnellere Online-Sichtbarkeit durch SEO-bereite Strukturen.</li>
            <li>Bessere Website-Performance mit Fokus auf Geschwindigkeit und Benutzerfreundlichkeit.</li>
            <li>Höhere Sicherheitsstandards mit DSGVO-Konformität und zuverlässigem Hosting.</li>
            <li>Nachhaltiges Wachstum durch Fokussierung auf messbare Konversionen, Leads und Markenbekanntheit.</li>
          </ul>
          
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">Bereit, Ihre Website zu starten?</h3>
          
          <p className="my-4">
            Lassen Sie uns besprechen, wie ooliv eine leistungsstarke Website erstellen kann, die echtes Geschäftswachstum vorantreibt.
          </p>
          
          <p className="my-4">
            <button 
              onClick={handleOpenLeadForm}
              className="text-brand-primary hover:text-brand-primaryHover hover:underline cursor-pointer inline-block"
            >
              👉 Starten Sie Ihr Projekt noch heute
            </button>
          </p>
        </article>
      </div>
    </section>
  );
};

export default SEOTextSection;
