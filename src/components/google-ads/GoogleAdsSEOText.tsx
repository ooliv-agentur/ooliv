
import React from 'react';
import { seoTextStyles } from '@/styles/seo-text-styles';

const GoogleAdsSEOText = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <section className={`${seoTextStyles.container} ${seoTextStyles.containerBackground}`}>
      <div className={seoTextStyles.innerContainer}>
        <article className={seoTextStyles.articleWrapper} style={{ color: '#FFFFFF' }}>
          <h2 className={seoTextStyles.mainHeading} style={{ color: '#FFFFFF' }}>Ihre Google Ads Agentur Mainz für nachhaltige Lead-Generierung</h2>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Als spezialisierte Google Ads Agentur in Mainz entwickeln wir Kampagnen, die mehr sind als bloße Sichtbarkeit: Wir generieren qualifizierte Leads, optimieren Conversions und schaffen nachhaltiges Wachstum. Mit strategischer Planung, KI-gestützter Kampagnenoptimierung und transparentem Reporting verwandeln wir Werbebudget in messbare Ergebnisse.
          </p>
          
          <h3 className={seoTextStyles.sectionHeading} style={{ color: '#FFFFFF' }}>Unsere Leistungen: Google Ads für Unternehmen mit Wachstumspotenzial</h3>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            <strong className={seoTextStyles.strongText}>✓ Zielgerichtete Google Ads Kampagnen</strong><br />
            Ob Search, Display oder Performance Max – wir entwickeln Kampagnenstrukturen, die perfekt auf Ihre Zielgruppen und Customer Journeys abgestimmt sind. Unser Fokus liegt auf einer Conversion-orientierten Gestaltung aller Anzeigengruppen.
          </p>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            <strong className={seoTextStyles.strongText}>✓ Keyword-Management und Anzeigenoptimierung</strong><br />
            Durch fundierte Keyword-Recherche und kreative, Conversion-optimierte Anzeigentexte verbessern wir Ihre Klickrate (CTR) und erhöhen die Relevanz Ihrer Anzeigen. Jede Kampagne basiert auf fundierter Analyse und wird kontinuierlich durch A/B-Tests optimiert.
          </p>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            <strong className={seoTextStyles.strongText}>✓ Conversion-Tracking und Analytics</strong><br />
            Wir implementieren präzises Conversion-Tracking über Google Analytics und individuelle Tracking-Setups. Ereignisse, Kaufabschlüsse und Leads werden zuverlässig gemessen und in Echtzeit ausgewertet.
          </p>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            <strong className={seoTextStyles.strongText}>✓ Performance-Optimierung mit KI</strong><br />
            Unsere Optimierungsansätze nutzen KI-gestützte Algorithmen, Predictive Targeting und Smart Bidding für maximale Performance bei gleichzeitig effizienter Budgetverwaltung.
          </p>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            <strong className={seoTextStyles.strongText}>✓ Schutz durch Click-Fraud-Technologien</strong><br />
            Wir überwachen Ihre Kampagnen kontinuierlich und verhindern betrügerische Klicks, um Ihr Budget bestmöglich zu schützen.
          </p>

          <h3 className={seoTextStyles.sectionHeading} style={{ color: '#FFFFFF' }}>Erfahrung, Spezialisierung und Zertifizierungen</h3>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Als zertifizierte Google Ads Spezialisten mit umfangreicher Erfahrung im B2B- und B2C-Bereich sind wir Ihr Partner für komplexe Kampagnenarchitekturen. Unsere Experten verfügen über:
          </p>
          <ul className={seoTextStyles.unorderedList} style={{ color: '#F4F4F4' }}>
            <li>Google Ads Zertifizierungen (Search, Display, Shopping, Video, Apps)</li>
            <li>Teilnahme an Skillshop Prüfungen und Google Ads Konferenzen</li>
            <li>Aktuelle Kenntnisse über Google Displaynetzwerk und Google Shopping Ads</li>
            <li>Zugang zu exklusiven Beta-Programmen als Google Premium Partner</li>
          </ul>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Unser Anspruch: Bewährte Strategien, Best Practices und kontinuierliche Weiterentwicklung für Ihre Kampagnenerfolge.
          </p>

          <h3 className={seoTextStyles.sectionHeading} style={{ color: '#FFFFFF' }}>Kampagnenoptimierung und kontinuierliche Betreuung</h3>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            <strong className={seoTextStyles.strongText}>Laufende Optimierung</strong><br />
            Wir optimieren Ihre Kampagnen fortlaufend durch:
          </p>
          <ul className={seoTextStyles.unorderedList} style={{ color: '#F4F4F4' }}>
            <li>Gebotsoptimierung (CPC, CPA, Ziel-ROAS)</li>
            <li>Keyword-Management (Erweiterung, Ausschluss, Neuausrichtung)</li>
            <li>PMax-Optimierung (Performance Max Kampagnen für B2B und E-Commerce)</li>
            <li>Feed Management (für Produktanzeigen und Shopping-Kampagnen)</li>
            <li>Cross-Plattform Dashboards zur Überwachung von ROAS und Budgeteffizienz</li>
          </ul>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Unsere Optimierungen basieren auf echten Daten, nicht auf Annahmen – für nachhaltiges Umsatzwachstum.
          </p>

          <h3 className={seoTextStyles.sectionHeading} style={{ color: '#FFFFFF' }}>Branchenreferenzen und echte Erfolgsgeschichten</h3>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Unsere Projekte sprechen für sich:
          </p>
          <ul className={seoTextStyles.unorderedList} style={{ color: '#F4F4F4' }}>
            <li>+3x qualifizierte Leads bei B2B-Unternehmen durch strategisches Keyword-Targeting</li>
            <li>-40% Absprungrate durch Conversion-optimierte Landingpages und UX-Optimierungen</li>
            <li>+70% höhere CTR durch datengetriebene Anzeigentexte und strukturiertes Kampagnenmanagement</li>
          </ul>

          <h3 className={seoTextStyles.sectionHeading} style={{ color: '#FFFFFF' }}>Kundenstimmen</h3>
          <div className={seoTextStyles.blockquote}>
            <p className={seoTextStyles.quoteText}>
              "Dank ooliv konnten wir die Leadqualität signifikant steigern und unser Werbebudget effizienter nutzen. Besonders die Transparenz und die regelmäßigen Reports überzeugen uns."
            </p>
            <p className={seoTextStyles.quoteAuthor}>– Geschäftsführer einer B2B-Agentur</p>
          </div>
          <div className={seoTextStyles.blockquote}>
            <p className={seoTextStyles.quoteText}>
              "Mit ooliv haben wir nicht nur Kampagnen optimiert, sondern auch unsere gesamte Customer Journey verbessert."
            </p>
            <p className={seoTextStyles.quoteAuthor}>– Marketingleiter eines SaaS-Unternehmens</p>
          </div>

          <h3 className={seoTextStyles.sectionHeading} style={{ color: '#FFFFFF' }}>Preisgestaltung: Transparent, fair, erfolgsorientiert</h3>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Unsere Preisstruktur ist klar und nachvollziehbar:
          </p>
          <ul className={seoTextStyles.unorderedList} style={{ color: '#F4F4F4' }}>
            <li>Setup-Pauschale (abhängig von Umfang und Kampagnenanzahl)</li>
            <li>Laufendes Kampagnenmanagement (monatliche Pauschale ab 500 € netto)</li>
            <li>Mediabudget: wird direkt bei Google Ads verwaltet, keine Aufschläge</li>
            <li>Optionaler Erfolgsbonus: bei definierten Lead- oder Umsatzsteigerungen</li>
          </ul>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Kostentransparenz und keine versteckten Gebühren sind für uns selbstverständlich.
          </p>

          <h3 className={seoTextStyles.sectionHeading} style={{ color: '#FFFFFF' }}>Strategieentwicklung: Maßgeschneiderte Kampagnen für Ihr Wachstum</h3>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Wir entwickeln individuelle SEA-Strategien basierend auf:
          </p>
          <ul className={seoTextStyles.unorderedList} style={{ color: '#F4F4F4' }}>
            <li>Zielgruppenspezifischem Targeting</li>
            <li>Customer Journey Mapping</li>
            <li>Keyword-Recherche und Kampagnenstruktur</li>
            <li>Return on Ad Spend (ROAS)-Zielen</li>
            <li>Performance-orientiertem Klickbudget-Management</li>
          </ul>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Unsere Strategien sind nicht statisch – sie passen sich dynamisch an Marktentwicklungen und neue Chancen an.
          </p>

          <h3 className={seoTextStyles.sectionHeading} style={{ color: '#FFFFFF' }}>Transparenz, Reporting und Erfolgskontrolle</h3>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Mit Monitoring- und Berichtstools liefern wir Ihnen volle Transparenz:
          </p>
          <ul className={seoTextStyles.unorderedList} style={{ color: '#F4F4F4' }}>
            <li>Echtzeit-Berichte über Klicks, Conversions und Impressionen</li>
            <li>Conversion-Rate Tracking zur Erfolgsmessung Ihrer Landingpages</li>
            <li>Google Analytics Dashboards für umfassende Datenanalysen</li>
            <li>Individuelle Kampagnenberichte inklusive Empfehlungen zur Optimierung</li>
          </ul>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Wir machen nicht nur Erfolge sichtbar – wir zeigen auch Optimierungspotenziale auf.
          </p>

          <h3 className={seoTextStyles.sectionHeading} style={{ color: '#FFFFFF' }}>FAQ: Häufige Fragen zu Google Ads und der Zusammenarbeit mit ooliv</h3>
          <div className="space-y-4 mt-4 mb-6">
            <div>
              <p style={{ color: '#F4F4F4' }}><strong style={{ color: '#FFFFFF' }}>Wie unterscheidet sich ooliv von klassischen SEA-Agenturen?</strong><br />Wir kombinieren strategische Kampagnenarchitektur mit Conversion-Optimierung und transparenter Erfolgsmessung – und denken jede Kampagne als Performance-Funnel.</p>
            </div>
            <div>
              <p style={{ color: '#F4F4F4' }}><strong style={{ color: '#FFFFFF' }}>Ist Google Ads sinnvoll, wenn SEO bereits erfolgreich läuft?</strong><br />Ja, Ads bieten zusätzliche Sichtbarkeit für neue Keywords, schnelle Markteinführungen und saisonale Aktionen – unabhängig von organischen Rankings.</p>
            </div>
            <div>
              <p style={{ color: '#F4F4F4' }}><strong style={{ color: '#FFFFFF' }}>Welche Optimierungsansätze verfolgt ooliv?</strong><br />Unsere Optimierungsansätze umfassen Smart Bidding, A/B-Tests, Anzeigenerweiterungen, Conversiontracking und die kontinuierliche Anpassung der Gebotsstrategien.</p>
            </div>
            <div>
              <p style={{ color: '#F4F4F4' }}><strong style={{ color: '#FFFFFF' }}>Wie hoch sollte unser Werbebudget sein?</strong><br />Für B2B-Kampagnen empfehlen wir ein Mindestbudget von ca. 1.000 € pro Monat, abhängig von Branche und Wettbewerbssituation.</p>
            </div>
            <div>
              <p style={{ color: '#F4F4F4' }}><strong style={{ color: '#FFFFFF' }}>Wie schnell liefert eine Google Ads Kampagne Ergebnisse?</strong><br />Erste Conversions und Anfragen entstehen oft innerhalb der ersten 2–4 Wochen. Der ROI wird durch laufende Optimierungen weiter verbessert.</p>
            </div>
            <div>
              <p style={{ color: '#F4F4F4' }}><strong style={{ color: '#FFFFFF' }}>Bietet ooliv Unterstützung bei der Landingpage-Erstellung und dem Conversion-Tracking?</strong><br />Ja, Landingpages und Tracking-Setups sind integraler Bestandteil unserer Google Ads Services.</p>
            </div>
          </div>

          <h3 className={seoTextStyles.sectionHeading} style={{ color: '#FFFFFF' }}>Branchenreferenzen, Kundenstimmen und messbare Wettbewerbsvorteile</h3>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Unsere Arbeit als Google Ads Agentur in Mainz basiert auf bewährten Strategien, datengetriebenen Entscheidungen und transparentem Reporting.
            Hier zeigen wir, wie Unternehmen aus verschiedenen Branchen mit ooliv erfolgreich wachsen.
          </p>

          <h4 className="text-lg font-bold mt-6 mb-3" style={{ color: '#FFFFFF' }}>Leistungskennzahlen, die überzeugen</h4>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Unsere Kunden erreichen mit maßgeschneiderten Google Ads Kampagnen nachhaltiges Umsatzwachstum und klare Wettbewerbsvorteile:
          </p>
          <ul className={seoTextStyles.unorderedList} style={{ color: '#F4F4F4' }}>
            <li>+150 % Umsatzsteigerung bei einem B2B-SaaS-Unternehmen durch Conversion-optimiertes Kampagnenmanagement und optimierte Produktdaten.</li>
            <li>-35 % niedrigere Kosten pro Lead für einen E-Commerce-Shop durch systematische A/B-Tests und gezielte Keyword-Optimierung.</li>
            <li>+65 % höhere Conversion-Rate im Dienstleistungssektor dank präziser Zielgruppenansprache und verbesserten Landingpages.</li>
          </ul>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Alle Erfolge basieren auf fundierten Leistungskennzahlen aus individuellen Kampagnenberichten.
          </p>

          <h4 className="text-lg font-bold mt-6 mb-3" style={{ color: '#FFFFFF' }}>Best Practices und bewährte Strategien aus über 100 Projekten</h4>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Unsere Best Practices basieren auf der kontinuierlichen Auswertung von Branchen Benchmarks und eigenen Kampagnenerfahrungen:
          </p>
          <ul className={seoTextStyles.unorderedList} style={{ color: '#F4F4F4' }}>
            <li>Smarte Anzeigengruppenstrukturen nach Customer Journey Phasen</li>
            <li>Conversion-fokussierte Anzeigentexte basierend auf realen Nutzerintentionen</li>
            <li>Dynamisches Budgetmanagement abgestimmt auf saisonale Online-Marketing Trends</li>
            <li>Einsatz aktueller Produktdaten in Google Shopping und Performance Max Kampagnen</li>
          </ul>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Diese bewährten Strategien helfen unseren Kunden, nachhaltige Wettbewerbsvorteile aufzubauen und zu verteidigen.
          </p>

          <h4 className="text-lg font-bold mt-6 mb-3" style={{ color: '#FFFFFF' }}>Reale Kundenstimmen über ooliv</h4>
          <div className={seoTextStyles.blockquote}>
            <p className={seoTextStyles.quoteText}>
              "Mit ooliv haben wir endlich eine Agentur gefunden, die Kampagnen nicht nur betreut, sondern nachhaltig skaliert. Besonders die strukturierte Analyse der Produktdaten und die branchenspezifische Umsetzung beeindrucken uns."
            </p>
            <p className={seoTextStyles.quoteAuthor}>– CEO eines Maschinenbau-Unternehmens</p>
          </div>
          <div className={seoTextStyles.blockquote}>
            <p className={seoTextStyles.quoteText}>
              "Durch die konsequente Ausrichtung auf branchenübliche Benchmarks und die transparente Kommunikation unserer Ansprechpartner bei ooliv haben wir eine deutlich höhere Performance erzielt."
            </p>
            <p className={seoTextStyles.quoteAuthor}>– Marketing-Leitung eines Software-Anbieters</p>
          </div>

          <h4 className="text-lg font-bold mt-6 mb-3" style={{ color: '#FFFFFF' }}>Unser Ansprechpartner-Prinzip</h4>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Bei ooliv erhalten Sie immer einen festen Ansprechpartner, der Ihre Kampagnenstrategie, Optimierungsansätze und Reporting persönlich betreut.
            Wir legen Wert auf direkte Kommunikation und partnerschaftliche Zusammenarbeit – ohne wechselnde Projektteams.
          </p>

          <h3 className={seoTextStyles.sectionHeading} style={{ color: '#FFFFFF' }}>Warum Branchenbenchmarks und Trends entscheidend sind</h3>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Unsere Optimierungsansätze basieren nicht nur auf internen Tests, sondern auf dem aktiven Abgleich mit aktuellen Branchen Benchmarks und Online-Marketing Trends.
          </p>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Das bedeutet:
          </p>
          <ul className={seoTextStyles.unorderedList} style={{ color: '#F4F4F4' }}>
            <li>Früherkennung neuer Kanäle und Formate</li>
            <li>Bessere Budgetallokation basierend auf aktuellen Entwicklungen</li>
            <li>Schnellere Skalierung erfolgreicher Kampagnen</li>
            <li>Nutzung aktueller Conversion-Daten und Produktentwicklungen</li>
          </ul>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            So sichern Sie sich echte Wettbewerbsvorteile in Ihrem Marktumfeld.
          </p>

          <h3 className={seoTextStyles.sectionHeading} style={{ color: '#FFFFFF' }}>Transparente Preisgestaltung und faire Vergütungsmodelle</h3>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Bei ooliv setzen wir auf vollständige Kostentransparenz und klare Preisstrukturen, damit Sie genau wissen, wofür Sie investieren. Unser Abrechnungsmodell ist einfach, nachvollziehbar und flexibel an Ihre Unternehmensziele anpassbar.
          </p>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Unsere Preisstruktur auf einen Blick:
          </p>
          <ul className={seoTextStyles.unorderedList} style={{ color: '#F4F4F4' }}>
            <li>Einmaliges Setup-Fee für die strategische Konzeption und den Aufbau Ihrer Google Ads Kampagnen</li>
            <li>Monatliches Management-Fee zur kontinuierlichen Betreuung, Optimierung und Skalierung</li>
            <li>Flexible Budgetverwaltung: Sie bestimmen das Mediabudget – wir sorgen für maximale Performance</li>
          </ul>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Auf Wunsch bieten wir auch Modelle mit erfolgsabhängiger Vergütung an: So profitieren Sie noch stärker von der Performance Ihrer Kampagnen.
          </p>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Transparente Preisgestaltung bedeutet für uns:
          </p>
          <ul className={seoTextStyles.unorderedList} style={{ color: '#F4F4F4' }}>
            <li>Keine versteckten Gebühren</li>
            <li>Klare Aufschlüsselung aller Leistungen</li>
            <li>Laufende Abstimmung bei Budgetanpassungen</li>
          </ul>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Unsere Philosophie: Eine faire Preisstruktur, die sowohl Ihre Investitionssicherheit als auch unsere Leistungsbereitschaft garantiert.
          </p>

          <h3 className={seoTextStyles.sectionHeading} style={{ color: '#FFFFFF' }}>Leistungen und Vorteile unserer Google Ads Agentur in Mainz</h3>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Als erfahrene SEA Agentur bieten wir ein umfassendes Leistungsspektrum für Unternehmen, die Google Ads strategisch für ihr Wachstum nutzen wollen.
          </p>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Unser Google Ads Leistungsangebot:
          </p>
          <ul className={seoTextStyles.unorderedList} style={{ color: '#F4F4F4' }}>
            <li>Suchmaschinenmarketing (SEA): Erhöhung der Sichtbarkeit in Google-Suchergebnissen durch gezielte Kampagnen</li>
            <li>Google Ads Kampagnen Management: Erstellung, Verwaltung und Optimierung von Search-, Display- und Google Shopping Ads</li>
            <li>Zielgruppenanalyse und Targeting: Ansprache relevanter Nutzer basierend auf fundierter Datenanalyse</li>
            <li>Conversion Tracking und Optimierung: Volle Nachverfolgbarkeit von Leads, Anfragen und Transaktionen</li>
            <li>Budgetverwaltung und Optimierung: Effizienter Einsatz Ihres Werbebudgets auf Basis von Performance-Daten</li>
            <li>Reporting und Analyse: Transparente Berichte über Klicks, Conversions, CTR, ROAS und Qualitätsfaktor</li>
          </ul>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Als zertifizierter Partner setzen wir auf höchste Standards beim Qualitätsfaktor Ihrer Anzeigen und arbeiten kontinuierlich an der Steigerung Ihrer Kampagnenleistung.
          </p>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Unsere Vorgehensweise basiert auf einem klaren Abrechnungsmodell und der dauerhaften Optimierung Ihrer Performance-Kennzahlen.
          </p>

          <h3 className={seoTextStyles.sectionHeading} style={{ color: '#FFFFFF' }}>Branchen Benchmarks und bewährte Strategien für Ihren Erfolg</h3>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Unsere Arbeit als Google Ads Agentur basiert nicht nur auf internen Daten, sondern auf der aktiven Analyse von Branchen Benchmarks und aktuellen Online-Marketing Trends.
            Durch den systematischen Abgleich von Kampagnenberichten, Produktdaten und Conversion-Analysen entwickeln wir bewährte Strategien, die Unternehmen zu echtem Umsatzwachstum verhelfen.
          </p>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Ihre Vorteile:
          </p>
          <ul className={seoTextStyles.unorderedList} style={{ color: '#F4F4F4' }}>
            <li>Vergleich Ihrer Leistungskennzahlen mit branchenspezifischen Benchmarks</li>
            <li>Frühzeitige Identifikation von Trends und Optimierungschancen</li>
            <li>Aufbau nachhaltiger Wettbewerbsvorteile durch datenbasierte Kampagnenarchitektur</li>
          </ul>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Unser Ansatz: Kombinierte Expertise aus Google Ads Management, Conversion-Optimierung und strategischer Wettbewerbsanalyse.<br />
            Ihr Erfolg: Wachstum, das messbar und skalierbar ist.
          </p>

          <h3 className={seoTextStyles.sectionHeading} style={{ color: '#FFFFFF' }}>Jetzt Google Ads Performance neu denken</h3>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Mehr Leads, effizientere Budgets und klare Skalierung: Mit ooliv als Google Ads Agentur in Mainz bauen Sie Ihren Online-Erfolg messbar und nachhaltig auf.
          </p>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            <span 
              className={seoTextStyles.ctaButton}
              onClick={handleStartProject}
            >
              👉 Jetzt kostenlose Analyse anfordern und Projekt starten.
            </span>
          </p>
        </article>
      </div>
    </section>
  );
};

export default GoogleAdsSEOText;
