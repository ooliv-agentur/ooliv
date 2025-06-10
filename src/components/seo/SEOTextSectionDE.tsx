
import React from 'react';

const SEOTextSectionDE = () => {
  const handleOpenLeadForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  return (
    <section className="bg-[#0A1E2C] pt-12 pb-16 font-satoshi">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none text-[17px] leading-relaxed" style={{ color: '#FFFFFF' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#FFFFFF' }}>SEO Agentur Mainz – Sichtbarkeit, die wächst</h2>
          
          <p className="my-6" style={{ color: '#F4F4F4' }}>
            Als spezialisierte SEO Agentur Mainz verwandeln wir Ihre Website in einen nachhaltigen Wachstumstreiber. Mit klarer SEO-Strategie, technischer Präzision und Content-Fokus steigern wir Ihre Rankings, gewinnen qualifizierte Anfragen und stärken Ihre Marktposition – in Mainz und darüber hinaus.
          </p>
          
          <p className="my-6">
            <button 
              onClick={handleOpenLeadForm}
              className="text-medico-yellow hover:text-yellow-300 hover:underline cursor-pointer inline-block font-bold text-lg"
            >
              👉 Jetzt SEO-Strategie starten
            </button>
            {" → "}
            <button 
              onClick={handleOpenLeadForm}
              className="text-medico-yellow hover:text-yellow-300 hover:underline cursor-pointer inline-block font-bold"
            >
              Kostenloses SEO-Audit anfordern
            </button>
          </p>
          
          <h3 className="text-2xl md:text-3xl font-bold mt-12 mb-6" style={{ color: '#FFFFFF' }}>SEO-Probleme, die Umsatz kosten – wir lösen sie</h3>
          
          <p className="my-6" style={{ color: '#F4F4F4' }}>
            Unsere SEO-Dienstleistungen adressieren typische Schwachstellen und schaffen messbare Ergebnisse:
          </p>
          
          <ul className="list-disc pl-6 my-6 space-y-2" style={{ color: '#F4F4F4' }}>
            <li><strong className="font-bold">Traffic, aber keine Leads:</strong> Optimierung für Suchintention & Conversion.</li>
            <li><strong className="font-bold">SEO dauert zu lange:</strong> Kombination aus schnellen Erfolgen und nachhaltigem Wachstum.</li>
            <li><strong className="font-bold">Veraltete Inhalte & schlechte Struktur:</strong> UX-Optimierung und Content-Aktualisierung.</li>
            <li><strong className="font-bold">Technische Fehler bremsen Rankings:</strong> Analyse von Ladezeiten, Indexierung, Core Web Vitals.</li>
          </ul>
          
          <p className="my-6">
            <a href="/content-erstellung" className="text-medico-yellow hover:text-yellow-300 hover:underline">
              Mehr zu Content-Erstellung und Webentwicklung →
            </a>
          </p>
          
          <h3 className="text-2xl md:text-3xl font-bold mt-12 mb-6" style={{ color: '#FFFFFF' }}>Unsere SEO-Leistungen im Überblick</h3>
          
          <p className="my-6" style={{ color: '#F4F4F4' }}>
            <strong className="font-bold">Keyword-Strategie:</strong><br />
            Branchenspezifische Recherche und Keyword-Mapping für maximale Relevanz.
          </p>
          
          <p className="my-6" style={{ color: '#F4F4F4' }}>
            <strong className="font-bold">On-Page-Optimierung:</strong><br />
            Metadaten, Überschriften, URLs und strukturierte Content-Architektur.
          </p>
          
          <p className="my-6" style={{ color: '#F4F4F4' }}>
            <strong className="font-bold">Technische SEO:</strong><br />
            Website-Speed, Core Web Vitals, saubere Indexierung und Mobiloptimierung.
          </p>
          
          <p className="my-6" style={{ color: '#F4F4F4' }}>
            <strong className="font-bold">Content-Optimierung:</strong><br />
            Erstellung und Pflege hochwertiger Inhalte für Nutzer und Suchmaschinen.
          </p>
          
          <p className="my-6" style={{ color: '#F4F4F4' }}>
            <strong className="font-bold">Link-Strategie:</strong><br />
            Interne Verlinkung und nachhaltiger Backlink-Aufbau für Autorität und Trust.
          </p>
          
          <p className="my-6" style={{ color: '#F4F4F4' }}>
            <strong className="font-bold">Lokale SEO:</strong><br />
            Sichtbarkeit in Mainz und Rhein-Main durch Google Business, lokale Verzeichnisse und regionale SEO.
          </p>
          
          <blockquote className="border-l-4 border-medico-turquoise pl-6 my-8 italic text-medico-mint bg-opacity-10 bg-medico-turquoise rounded-r-lg py-4">
            <p className="text-medico-mint italic text-lg leading-relaxed">
              Tools als Unterstützung – Strategie als Grundlage: Wir arbeiten mit Ahrefs, Google Search Console, ChatGPT, Midjourney und Sora – doch was zählt, ist unsere Erfahrung.
            </p>
          </blockquote>
          
          <h3 className="text-2xl md:text-3xl font-bold mt-12 mb-6" style={{ color: '#FFFFFF' }}>Branchenspezifische SEO-Strategien für Ihren Erfolg</h3>
          
          <p className="my-6" style={{ color: '#F4F4F4' }}>
            Wir bieten maßgeschneiderte SEO-Lösungen für verschiedene Branchen:
          </p>
          
          <ul className="list-disc pl-6 my-6 space-y-2" style={{ color: '#F4F4F4' }}>
            <li><strong className="font-bold">Immobilien-SEO:</strong> Lokale Optimierung für Makler und Immobilienprojekte.</li>
            <li><strong className="font-bold">Handwerks-SEO:</strong> Sichtbarkeit für Handwerksbetriebe und spezialisierte Dienstleistungen.</li>
            <li><strong className="font-bold">Gesundheitswesen-SEO:</strong> Datenschutzkonformes SEO für Arztpraxen und Kliniken.</li>
            <li><strong className="font-bold">E-Commerce-SEO:</strong> Optimierte Produktseiten, Performance-Steigerung und Conversion-Optimierung.</li>
            <li><strong className="font-bold">Gastronomie-SEO:</strong> Mobile First SEO und Voice-Search-Optimierung für Restaurants und Eventlocations.</li>
          </ul>
          
          <p className="my-6" style={{ color: '#F4F4F4' }}>
            <strong className="font-bold">Maßnahmen je Branche:</strong><br />
            Content Creation, SEO-Checks Mainz, On-Page & Off-Page Optimierung, mobiles SEO, individuelle Handlungsempfehlungen.
          </p>
          
          <blockquote className="border-l-4 border-medico-turquoise pl-6 my-8 italic text-medico-mint bg-opacity-10 bg-medico-turquoise rounded-r-lg py-4">
            <p className="text-medico-mint italic text-lg leading-relaxed">
              Ihr Vorteil: Maßgeschneiderte Strategien – keine 08/15 SEO-Pakete.
            </p>
          </blockquote>
          
          <h3 className="text-2xl md:text-3xl font-bold mt-12 mb-6" style={{ color: '#FFFFFF' }}>Unser SEO-Prozess – transparent und datengetrieben</h3>
          
          <p className="my-6" style={{ color: '#F4F4F4' }}>
            <strong className="font-bold">Strategie & Analyse:</strong> Initiales Audit, Zieldefinition und Roadmap-Erstellung.
          </p>
          
          <p className="my-6" style={{ color: '#F4F4F4' }}>
            <strong className="font-bold">Fix & Struktur:</strong> Technische Korrekturen und Aufbau einer skalierbaren Architektur.
          </p>
          
          <p className="my-6" style={{ color: '#F4F4F4' }}>
            <strong className="font-bold">Keywords & Content:</strong> Entwicklung relevanter Seiten und Optimierung bestehender Inhalte.
          </p>
          
          <p className="my-6" style={{ color: '#F4F4F4' }}>
            <strong className="font-bold">Autorität aufbauen:</strong> Interne Verlinkung und gezielte Backlink-Kampagnen.
          </p>
          
          <p className="my-6" style={{ color: '#F4F4F4' }}>
            <strong className="font-bold">Tracking & Skalierung:</strong> Monitoring, Reportings und datengetriebene Optimierungen.
          </p>
          
          <blockquote className="border-l-4 border-medico-turquoise pl-6 my-8 italic text-medico-mint bg-opacity-10 bg-medico-turquoise rounded-r-lg py-4">
            <p className="text-medico-mint italic text-lg leading-relaxed">
              Ihre Website wird zum nachhaltigen Wachstumsmotor.
            </p>
          </blockquote>
          
          <h3 className="text-2xl md:text-3xl font-bold mt-12 mb-6" style={{ color: '#FFFFFF' }}>Erfolgskontrolle & Reporting</h3>
          
          <p className="my-6" style={{ color: '#F4F4F4' }}>
            Unsere SEO-Arbeit ist messbar:
          </p>
          
          <ul className="list-disc pl-6 my-6 space-y-2" style={{ color: '#F4F4F4' }}>
            <li><strong className="font-bold">SEO-Dashboards und monatliche Reportings:</strong> Alle KPIs auf einen Blick.</li>
            <li><strong className="font-bold">Keyword-Tracking:</strong> Monitoring relevanter Rankings und Suchbegriffe.</li>
            <li><strong className="font-bold">Conversion-Tracking:</strong> Erfolgsmessung auf Lead- und Umsatzbasis.</li>
            <li><strong className="font-bold">Kontinuierliche Betreuung:</strong> Laufende Optimierung basierend auf echten Daten.</li>
          </ul>
          
          <blockquote className="border-l-4 border-medico-turquoise pl-6 my-8 italic text-medico-mint bg-opacity-10 bg-medico-turquoise rounded-r-lg py-4">
            <p className="text-medico-mint italic text-lg leading-relaxed">
              Daten statt Bauchgefühl – für nachhaltigen SEO-Erfolg.
            </p>
          </blockquote>
          
          <h3 className="text-2xl md:text-3xl font-bold mt-12 mb-6" style={{ color: '#FFFFFF' }}>Beratung, Workshops & Zusammenarbeit</h3>
          
          <p className="my-6" style={{ color: '#F4F4F4' }}>
            Neben klassischer SEO-Beratung bieten wir:
          </p>
          
          <ul className="list-disc pl-6 my-6 space-y-2" style={{ color: '#F4F4F4' }}>
            <li><strong className="font-bold">SEO-Erstberatung:</strong> Kostenfreie Analyse und Strategiegespräch.</li>
            <li><strong className="font-bold">SEO-Workshops:</strong> Wissenstransfer für Marketing- und Content-Teams.</li>
            <li><strong className="font-bold">Wissensvermittlung:</strong> Transparente Kommunikation aller Maßnahmen.</li>
            <li><strong className="font-bold">Individuelle Betreuung:</strong> Monatliche Meetings und direkte Ansprechpartner.</li>
          </ul>
          
          <blockquote className="border-l-4 border-medico-turquoise pl-6 my-8 italic text-medico-mint bg-opacity-10 bg-medico-turquoise rounded-r-lg py-4">
            <p className="text-medico-mint italic text-lg leading-relaxed">
              SEO bei ooliv bedeutet: fair, offen, partnerschaftlich.
            </p>
          </blockquote>
          
          <h3 className="text-2xl md:text-3xl font-bold mt-12 mb-6" style={{ color: '#FFFFFF' }}>SEO als Investition in nachhaltigen Erfolg</h3>
          
          <p className="my-6" style={{ color: '#F4F4F4' }}>
            Suchmaschinenoptimierung ist keine Ausgabe, sondern eine gezielte Investition in messbares Wachstum. Durch transparente Kostenstrukturen, klare Zieldefinitionen und datenbasierte Optimierung schaffen wir echten Mehrwert für Ihr Business. Unsere Leistungen umfassen:
          </p>
          
          <ul className="list-disc pl-6 my-6 space-y-2" style={{ color: '#F4F4F4' }}>
            <li>SEO-Audits zur Identifikation von Optimierungspotenzialen</li>
            <li>Ladezeiten- und Mobiloptimierung für bessere User Experience</li>
            <li>Conversion-Optimierung für höhere Abschlussraten</li>
            <li>Keyword-Tracking und Monitoring für kontinuierliche Performance-Analyse</li>
            <li>Klar strukturierte Reportings für volle Transparenz</li>
          </ul>
          
          <p className="my-6" style={{ color: '#F4F4F4' }}>
            Mit einem klar kalkulierten Werbebudget und individuell zugeschnittenen Veränderungsmaßnahmen maximieren wir den Return on Investment (ROI) Ihrer SEO-Strategie – effizient, nachhaltig, planbar.
          </p>
          
          <h3 className="text-2xl md:text-3xl font-bold mt-12 mb-6" style={{ color: '#FFFFFF' }}>Häufige Fragen zur SEO Agentur Mainz</h3>
          
          <p className="my-6 font-bold" style={{ color: '#F4F4F4' }}>
            Wie lange dauert SEO?
          </p>
          <p className="my-6" style={{ color: '#F4F4F4' }}>
            Erste Ergebnisse nach 2–4 Monaten, nachhaltige Rankings nach 6–12 Monaten.
          </p>
          
          <p className="my-6 font-bold" style={{ color: '#F4F4F4' }}>
            Was macht eure SEO besonders?
          </p>
          <p className="my-6" style={{ color: '#F4F4F4' }}>
            Verzahnung aus Content, Technik und Lokaler SEO – ohne Tricks, dafür mit Substanz.
          </p>
          
          <p className="my-6 font-bold" style={{ color: '#F4F4F4' }}>
            Bietet ihr nur lokale SEO in Mainz an?
          </p>
          <p className="my-6" style={{ color: '#F4F4F4' }}>
            Nein, wir betreuen Kunden deutschlandweit und im gesamten DACH-Raum.
          </p>
          
          <p className="my-6 font-bold" style={{ color: '#F4F4F4' }}>
            Gehört Linkbuilding bei euch dazu?
          </p>
          <p className="my-6" style={{ color: '#F4F4F4' }}>
            Ja, aber nachhaltig – keine Spam-Backlinks.
          </p>
          
          <p className="my-6 font-bold" style={{ color: '#F4F4F4' }}>
            Wie garantiert ihr aktuelle technische Standards?
          </p>
          <p className="my-6" style={{ color: '#F4F4F4' }}>
            Durch regelmäßige Audits, Core Web Vitals Optimierung und neueste SEO-Technologien.
          </p>
          
          <h3 className="text-2xl md:text-3xl font-bold mt-12 mb-6" style={{ color: '#FFFFFF' }}>SEO, das wirkt – lokal & skalierbar</h3>
          
          <p className="my-6" style={{ color: '#F4F4F4' }}>
            SEO ist kein Projekt, sondern ein strategischer Wachstumshebel. Lassen Sie uns gemeinsam das volle Potenzial Ihrer Website entfalten.
          </p>
          
          <p className="my-6">
            <button 
              onClick={handleOpenLeadForm}
              className="text-medico-yellow hover:text-yellow-300 hover:underline cursor-pointer inline-block font-bold text-lg"
            >
              👉 Jetzt Beratungsgespräch anfordern
            </button>
          </p>
          
          <ul className="list-none my-6 space-y-2" style={{ color: '#F4F4F4' }}>
            <li>✅ SEO-Strategie entwickeln</li>
            <li>✅ Rankings steigern</li>
            <li>✅ Geschäftserfolg messbar machen</li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default SEOTextSectionDE;
