
import React from 'react';

const WiesbadenSEOTextSection = () => {
  const handleOpenLeadForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  return (
    <section className="bg-[#f7fafa] pt-12 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none text-[17px] leading-relaxed text-gray-700">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Werbeagentur Wiesbaden: Kreative Lösungen mit ooliv</h2>
          
          <p className="my-4">
            Die Werbeagentur ooliv steht für innovative und digitale Lösungen im Raum Wiesbaden-Mainz. 
            Seit über einem Jahrzehnt gestalten wir beeindruckende Webauftritte und unterstützen Unternehmen 
            mit individuellen Strategien, um ihre Marken nachhaltig zu stärken.
          </p>
          
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">Employer Branding: Starke Arbeitgebermarken für Wiesbaden</h3>
          
          <p className="my-4">
            Eine starke Arbeitgebermarke ist heute wichtiger denn je. Als Werbeagentur in Wiesbaden unterstützen 
            wir Unternehmen dabei, ihre Werte, Kultur und Vision authentisch darzustellen. Unsere Employer Branding 
            Strategien helfen dabei, potenzielle Talente zu erreichen und bestehende Mitarbeiter langfristig zu binden.
          </p>
          
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">Unsere Leistungen im Überblick</h3>
          
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Individuelle WordPress Websites</li>
            <li>Responsive Webdesigns</li>
            <li>Entwicklung von Markenstrategien</li>
            <li>Logo- und Namensfindung</li>
            <li>Online-Marketing-Konzepte</li>
          </ul>
          
          <p className="my-4">
            Unsere Projekte zeichnen sich durch klare Zielorientierung, ästhetisches Design und modernste 
            Technologien aus. Dabei legen wir großen Wert auf eine enge Zusammenarbeit mit unseren Kunden, 
            um sicherzustellen, dass jedes Projekt Ihre individuellen Anforderungen optimal erfüllt.
          </p>
          
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">Unsere Leistungen im Bereich Employer Branding:</h3>
          
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Erstellung von Employer Branding Strategien, die Ihre Unternehmenskultur widerspiegeln</li>
            <li>Entwicklung von visuell ansprechenden Konzepten, die Ihre Arbeitgebermarke stärken</li>
          </ul>
          
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">Das Internet ist ein unverzichtbares Werkzeug</h3>
          
          <p className="my-4">
            Das Internet ist ein unverzichtbares Werkzeug für moderne Unternehmen, um ihre Zielgruppe zu erreichen 
            und sich im Wettbewerb zu behaupten. Eine starke Website bildet die Grundlage für Ihren Erfolg – und 
            genau hier kommen wir ins Spiel. Mit ooliv erhalten Sie eine Werbeagentur in Wiesbaden, die Ihre Vision 
            versteht und in beeindruckende digitale Projekte umsetzt.
          </p>
          
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">Starte dein Projekt mit ooliv – Werbeagentur Wiesbaden</h3>
          
          <p className="my-4">
            Egal, ob Webdesign, Online-Marketing oder Employer Branding – wir sind deine Partner für digitale Projekte. 
            Kontaktiere uns jetzt und lass uns gemeinsam deine Vision verwirklichen!
          </p>
          
          <p className="my-4">
            <button 
              onClick={handleOpenLeadForm}
              className="text-brand-primary hover:text-brand-primaryHover hover:underline cursor-pointer inline-block"
            >
              👉 Starte dein Projekt noch heute
            </button>
          </p>
        </article>
      </div>
    </section>
  );
};

export default WiesbadenSEOTextSection;
