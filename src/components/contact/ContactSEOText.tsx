
import React from 'react';

const ContactSEOText = () => {
  const handleOpenLeadForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  return (
    <section className="bg-[#0A1E2C] pt-12 pb-16 font-satoshi">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none text-[17px] leading-relaxed" style={{ color: '#FFFFFF' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6" style={{ color: '#FFFFFF' }}>Kontakt ooliv – Ihre Digitalagentur aus Mainz</h2>
          
          <p className="my-4" style={{ color: '#F4F4F4' }}>
            Sie möchten mit ooliv, Ihrer Digitalagentur aus Mainz, zusammenarbeiten? Wir freuen uns auf Ihre Nachricht!
            Als inhabergeführte Agentur stehen wir für klare Kommunikation, schnelle Reaktionszeiten und individuelle Lösungen rund um Webdesign, SEO und digitales Marketing.
          </p>
          
          <p className="my-4" style={{ color: '#F4F4F4' }}>
            Ob neue Website, Online-Marketing-Strategie oder Relaunch-Projekt – bei ooliv haben Sie immer einen festen Ansprechpartner an Ihrer Seite.
            Wir betreuen Unternehmen aus Mainz, dem gesamten DACH-Raum und darüber hinaus – digital, persönlich und effizient.
          </p>
          
          <p className="my-4" style={{ color: '#F4F4F4' }}>
            Vergleichen Sie uns gerne mit anderen Anbietern:
            Als zertifizierter Google-Partner und ausgewiesener Branchenexperte für Suchmaschinenmarketing, SEO und individuelles Webdesign kombinieren wir Erfahrung, Strategie und modernste Tools. Unsere transparente Arbeitsweise und die persönliche Betreuung machen den Unterschied.
          </p>
          
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4" style={{ color: '#FFFFFF' }}>Unsere Kunden schätzen insbesondere:</h3>
          
          <ul className="list-disc pl-6 my-4 space-y-2" style={{ color: '#F4F4F4' }}>
            <li>Schnelle Reaktionszeiten und direkte Ansprechpartner</li>
            <li>Maßgeschneiderte Strategien statt Standardlösungen</li>
            <li>Hervorragende Bewertungen und langjährige Erfahrungen im Online-Marketing</li>
          </ul>
          
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4" style={{ color: '#FFFFFF' }}>Über ooliv:</h3>
          <p className="my-4" style={{ color: '#F4F4F4' }}>
            Gegründet 2008 in Mainz, entwickeln wir unter eigenem Firmennamen maßgeschneiderte Unternehmenswebseiten, Online-Shops und digitale Lösungen.
            Unser Schwerpunkt liegt auf Webdesign, SEO, Marketingmaterialien und Content-Entwicklung für wachstumsorientierte Unternehmen im DACH-Raum.
          </p>
          
          <p className="my-4" style={{ color: '#F4F4F4' }}>
            Nutzen Sie einfach unser Kontaktformular, schreiben Sie uns eine E-Mail oder rufen Sie uns an.
            Ihre Anfrage landet direkt bei unserem Team – ohne Zwischenstellen, ohne Warteschleifen.
          </p>
          
          <p className="my-4" style={{ color: '#F4F4F4' }}>
            Kontaktieren Sie ooliv jetzt und lassen Sie uns gemeinsam Ihre digitalen Ziele erreichen.
          </p>
          
          <p className="my-6">
            <button 
              onClick={handleOpenLeadForm}
              className="text-medico-yellow hover:text-yellow-300 hover:underline cursor-pointer inline-block font-bold text-lg"
            >
              👉 Jetzt Projekt starten
            </button>
          </p>
        </article>
      </div>
    </section>
  );
};

export default ContactSEOText;
