
import React from 'react';
import { seoTextStyles } from '@/styles/seo-text-styles';

const KiSEOText = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <section className={`${seoTextStyles.container} ${seoTextStyles.containerBackground}`}>
      <div className={seoTextStyles.innerContainer}>
        <article className={seoTextStyles.articleWrapper} style={{ color: '#FFFFFF' }}>
          <h2 className={seoTextStyles.mainHeading} style={{ color: '#FFFFFF' }}>Ihre KI Agentur Mainz für Webdesign, Content und digitale Strategien</h2>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Als spezialisierte KI Agentur in Mainz nutzen wir künstliche Intelligenz, um Webdesigns schneller umzusetzen, Content zielgerichteter zu erstellen und Marketingstrategien datenbasiert zu optimieren. Unsere KI-gestützten Prozesse kombinieren Geschwindigkeit, Präzision und kreative Qualität – immer geführt von menschlicher Expertise.
          </p>

          <h3 className={seoTextStyles.sectionHeading} style={{ color: '#FFFFFF' }}>Warum KI-Technologien bei ooliv?</h3>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            <strong className={seoTextStyles.strongText}>✓ Beschleunigte Prozesse, ohne Qualitätsverlust</strong><br />
            Durch KI-Tools verkürzen wir Recherche, Entwurfs- und Produktionszeiten erheblich – bei gleichbleibend hoher Qualität.
          </p>

          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            <strong className={seoTextStyles.strongText}>✓ Menschliche Kreativität bleibt unverzichtbar</strong><br />
            Strategieentwicklung, Ideenfindung und Storytelling entstehen immer durch erfahrene Spezialisten – unterstützt, aber nicht ersetzt durch KI.
          </p>

          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            <strong className={seoTextStyles.strongText}>✓ Skalierbarkeit und Präzision</strong><br />
            Mit KI optimieren wir Strukturen, Content-Varianten und Visuals für maximale Skalierbarkeit Ihrer digitalen Projekte.
          </p>

          <h3 className={seoTextStyles.sectionHeading} style={{ color: '#FFFFFF' }}>So integrieren wir KI in unsere Dienstleistungen</h3>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            <strong className={seoTextStyles.strongText}>Text & Content-Erstellung mit ChatGPT</strong>
          </p>
          <ul className={seoTextStyles.unorderedList} style={{ color: '#F4F4F4' }}>
            <li>SEO-optimierte Texte auf Basis fundierter Briefings</li>
            <li>Multilinguale Outlines und Messaging-Frameworks</li>
            <li>Redaktionelle Prüfung durch unsere Content-Spezialisten</li>
          </ul>

          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            <strong className={seoTextStyles.strongText}>Visuals & Motion Design mit Midjourney und Sora</strong>
          </p>
          <ul className={seoTextStyles.unorderedList} style={{ color: '#F4F4F4' }}>
            <li>Individuelle Illustrationen statt Stockfotos</li>
            <li>Animierte Videoelemente für Websites und Social Media</li>
            <li>Markenspezifische Gestaltung, angepasst an Ihr Corporate Design</li>
          </ul>

          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            <strong className={seoTextStyles.strongText}>Entwicklung & Prototyping mit KI-Tools</strong>
          </p>
          <ul className={seoTextStyles.unorderedList} style={{ color: '#F4F4F4' }}>
            <li>Schnellere Erstellung von Prototypen und Mockups</li>
            <li>Code-Optimierung unter Kontrolle unserer erfahrenen Entwickler</li>
          </ul>

          <h3 className={seoTextStyles.sectionHeading} style={{ color: '#FFFFFF' }}>KI-Technologien bei ooliv: Unterstützung, keine Automatisierung</h3>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Unsere Philosophie als KI Agentur Mainz: Künstliche Intelligenz unterstützt unsere Arbeit – sie ersetzt sie nicht.
          </p>
          <ul className={seoTextStyles.unorderedList} style={{ color: '#F4F4F4' }}>
            <li>Strategische Entscheidungen bleiben menschlich: Kein automatisierter Aktionismus.</li>
            <li>Kreative Exzellenz bleibt unser Anspruch: KI liefert Impulse, keine fertigen Lösungen.</li>
            <li>Messbare Ergebnisse durch KI-gestützte Prozesse: Geschwindigkeit, Skalierbarkeit, Effizienz.</li>
          </ul>

          <h3 className={seoTextStyles.sectionHeading} style={{ color: '#FFFFFF' }}>Echte Ergebnisse mit KI-gestützten Strategien</h3>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Unsere Kunden profitieren von:
          </p>
          <ul className={seoTextStyles.unorderedList} style={{ color: '#F4F4F4' }}>
            <li>+120 % schnellerer Projektumsetzung durch optimierte Workflows</li>
            <li>-30 % niedrigere Content-Produktionskosten bei gleichbleibender Qualität</li>
            <li>+60 % bessere Conversion-Raten durch präzisere Zielgruppenansprache und personalisierte Inhalte</li>
          </ul>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Diese Ergebnisse basieren auf intelligent integrierten KI-Technologien – stets geführt durch erfahrene Projektteams.
          </p>

          <h3 className={seoTextStyles.sectionHeading} style={{ color: '#FFFFFF' }}>Branchenreferenzen und Kundenstimmen</h3>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            <strong className={seoTextStyles.strongText}>Erfolgsgeschichten mit KI-Unterstützung</strong>
          </p>
          <div className={seoTextStyles.blockquote}>
            <p className={seoTextStyles.quoteText}>
              "Mit ooliv konnten wir unseren Website-Relaunch doppelt so schnell realisieren – ohne Kompromisse bei der Qualität. Besonders die KI-gestützten Prozesse haben uns beeindruckt."
            </p>
            <p className={seoTextStyles.quoteAuthor}>– Geschäftsführer eines IT-Unternehmens</p>
          </div>
          <div className={seoTextStyles.blockquote}>
            <p className={seoTextStyles.quoteText}>
              "Die strategische Integration von KI in Content- und Webdesign-Workflows hat uns nicht nur Zeit, sondern auch erheblich Budget gespart."
            </p>
            <p className={seoTextStyles.quoteAuthor}>– Marketingleitung eines B2B-Dienstleisters</p>
          </div>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Unsere Referenzen zeigen: Der richtige Einsatz von KI schafft echte Wettbewerbsvorteile – messbar und nachhaltig.
          </p>

          <h3 className={seoTextStyles.sectionHeading} style={{ color: '#FFFFFF' }}>FAQ zur KI Agentur Mainz</h3>
          <div className="space-y-4 mt-4 mb-6">
            <div>
              <p style={{ color: '#F4F4F4' }}><strong style={{ color: '#FFFFFF' }}>Wie integriert ooliv KI in bestehende Marketingprozesse?</strong><br />
              Wir nutzen KI-Tools zur Effizienzsteigerung – z. B. durch bessere Content-Briefings, schnellere Visual-Entwicklung und präzisere SEO-Strukturen, immer eingebettet in menschliche Projektsteuerung.</p>
            </div>
            <div>
              <p style={{ color: '#F4F4F4' }}><strong style={{ color: '#FFFFFF' }}>Bleiben KI-erstellte Inhalte im rechtlichen Rahmen?</strong><br />
              Ja. Wir prüfen alle KI-gestützten Inhalte auf Urheberrecht, DSGVO-Konformität und rechtliche Sicherheit, bevor sie live gehen.</p>
            </div>
            <div>
              <p style={{ color: '#F4F4F4' }}><strong style={{ color: '#FFFFFF' }}>Welche konkreten ROI-Vorteile bringt KI im Marketing?</strong><br />
              KI ermöglicht schnellere Go-Lives, präzisere Zielgruppenansprache und personalisierten Content – mit oft 20–30 % höherer Marketingeffizienz.</p>
            </div>
            <div>
              <p style={{ color: '#F4F4F4' }}><strong style={{ color: '#FFFFFF' }}>Ist die Qualität von KI-generiertem Content wirklich gut?</strong><br />
              Ja – wenn KI richtig eingesetzt wird. Bei ooliv erfolgt immer eine menschliche Qualitätskontrolle, um kreative und sprachliche Exzellenz sicherzustellen.</p>
            </div>
            <div>
              <p style={{ color: '#F4F4F4' }}><strong style={{ color: '#FFFFFF' }}>Welche KI-Tools setzt ooliv in Projekten ein?</strong><br />
              Wir arbeiten unter anderem mit ChatGPT für Content-Generierung, Midjourney für Visuals und Sora für Videocontent – kombiniert mit eigenen, projektspezifischen Tools.</p>
            </div>
          </div>

          <h3 className={seoTextStyles.sectionHeading} style={{ color: '#FFFFFF' }}>Beratung, Schulungen und Seminare rund um KI-Technologien</h3>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Als erfahrene KI Agentur Mainz bieten wir individuelle Beratung, Schulungen und Seminare an, um Unternehmen optimal auf die Integration von KI-Technologien vorzubereiten.
          </p>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Unsere Angebote:
          </p>
          <ul className={seoTextStyles.unorderedList} style={{ color: '#F4F4F4' }}>
            <li>Workshops zu CRM-Aktivitäten und KI-gestütztem Leadmanagement</li>
            <li>Trainings zu Microsoft Office Automation für Word, Excel und PowerPoint</li>
            <li>Einführung in Natural Language Processing (NLP), Classification und Recommender Systems</li>
            <li>Schulungen zur Nutzung von KI-Tools in Webentwicklung (z. B. WordPress, TYPO3)</li>
            <li>Beratung zu neuen Marketing-Aktivitäten im Zeitalter der KI</li>
          </ul>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Wir vermitteln praxisnahe Best Practices und helfen Ihnen, die disruptive Kraft von KI für Ihr Unternehmen strategisch zu nutzen.
          </p>

          <h3 className={seoTextStyles.sectionHeading} style={{ color: '#FFFFFF' }}>Praxisbeispiele: So nutzen Unternehmen KI erfolgreich</h3>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Unsere Projekte zeigen, wie KI-Anwendungsbeispiele konkrete Mehrwerte schaffen:
          </p>
          <ul className={seoTextStyles.unorderedList} style={{ color: '#F4F4F4' }}>
            <li>Chatbots für optimierte Kundenkommunikation und schnellere Antwortzeiten</li>
            <li>Automatisierte Prozesse für schlankere Arbeitsabläufe und reduzierte Fehlerquoten</li>
            <li>Leadmanagement mit KI-Unterstützung, um Conversion-Raten zu steigern</li>
            <li>Prozessverschlankung entlang von Wertschöpfungsketten für mehr Effizienz</li>
            <li>Strategien zur nachhaltigen Wertschöpfung im ESG-Kontext</li>
          </ul>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Durch den gezielten Einsatz von KI-Methoden verbessern unsere Kunden ihre Performance und verkürzen Projektlaufzeiten deutlich.
          </p>

          <h3 className={seoTextStyles.sectionHeading} style={{ color: '#FFFFFF' }}>KI-Integration in Geschäftsprozesse: Maßgeschneiderte Lösungen</h3>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Die erfolgreiche KI-Integration erfordert mehr als nur Technologie – sie verlangt individuelle Anpassung an Ihre Ziele.
          </p>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Unsere Integrationsansätze:
          </p>
          <ul className={seoTextStyles.unorderedList} style={{ color: '#F4F4F4' }}>
            <li>Entwicklung von Custom Software und individuellen KI-SaaS-Lösungen</li>
            <li>Umsetzung moderner KI-Funktionalitäten wie Computer Vision, Natural Language Processing (NLP) und Question Answering</li>
            <li>Prozessoptimierung durch intelligente Automatisierung von Geschäftsabläufen</li>
            <li>Anpassung bestehender Systeme für reibungslose KI-Implementierung</li>
          </ul>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Mit ooliv als KI Agentur Mainz gelingt die Integration zuverlässig, sicher und zukunftsorientiert.
          </p>

          <h3 className={seoTextStyles.sectionHeading} style={{ color: '#FFFFFF' }}>Personalisierte Nutzererlebnisse durch KI</h3>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Moderne digitale Erlebnisse entstehen durch KI-gestützte Personalisierung entlang aller digitalen Touchpoints:
          </p>
          <ul className={seoTextStyles.unorderedList} style={{ color: '#F4F4F4' }}>
            <li>Onpage-Personalisierung basierend auf Echtzeit-Daten</li>
            <li>Individuelle Content-Ausspielung zur Steigerung der Kaufentscheidung</li>
            <li>3D Experience und emotionale Ansprache durch intelligente Inszenierung</li>
            <li>Entwicklung von personalisierter User Experience für internationale Premiummarken</li>
          </ul>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Unsere Lösungen kombinieren Technologie, Emotion und Conversion – für digitale Auftritte, die begeistern.
          </p>

          <h3 className={seoTextStyles.sectionHeading} style={{ color: '#FFFFFF' }}>Technologische Partnerschaften und Sicherheit bei KI-Projekten</h3>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Als verlässliche KI Agentur Mainz legen wir höchsten Wert auf Datenschutz, Sicherheit und Qualität.
          </p>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Unsere Standards:
          </p>
          <ul className={seoTextStyles.unorderedList} style={{ color: '#F4F4F4' }}>
            <li>Umsetzung aller Projekte nach DSGVO- und Informationssicherheits-Richtlinien</li>
            <li>Entwicklung sicherer Prototypen und produktiver KI-Anwendungen</li>
            <li>Partnerschaften mit führenden Technologieanbietern für maximale Innovationskraft</li>
            <li>Expertise in Standards wie dem VDA-Standard im Bereich Automotive KI-Lösungen</li>
            <li>Regelmäßige Schulungen und Zertifizierungen unserer Technologie- und Prozess-Experten</li>
          </ul>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Mit ooliv erhalten Sie KI-Lösungen, die nicht nur innovativ, sondern auch sicher und compliance-konform sind.
          </p>

          <h3 className={seoTextStyles.sectionHeading} style={{ color: '#FFFFFF' }}>Standort Mainz und Teamkompetenz bei ooliv</h3>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Als KI Agentur aus Mainz sind wir regional verankert und digital weltweit aktiv.
            Unser interdisziplinäres Team aus KI-Spezialisten, Webentwicklern, Designern und Content-Experten entwickelt maßgeschneiderte Lösungen für Unternehmen im gesamten DACH-Raum.
          </p>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Unsere Kompetenzbereiche:
          </p>
          <ul className={seoTextStyles.unorderedList} style={{ color: '#F4F4F4' }}>
            <li>KI-Technologien: Chatbots, Natural Language Processing, Automatisierung</li>
            <li>Webentwicklung: WordPress, TYPO3, individuelle Softwarelösungen</li>
            <li>Content und Marketing: Multilinguale Outlines, personalisierte Nutzererlebnisse</li>
            <li>Strategie und Beratung: CRM-Aktivitäten, Leadmanagement, Prozessoptimierung</li>
          </ul>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Durch unsere Kombination aus regionaler Präsenz in Mainz und internationaler Projekt-Expertise unterstützen wir Unternehmen jeder Größe auf dem Weg zu digitaler Exzellenz.
          </p>

          <h3 className={seoTextStyles.sectionHeading} style={{ color: '#FFFFFF' }}>KI-gestützte Marketinglösungen für Ihr Unternehmen</h3>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            Mit ooliv als Ihrer KI Agentur in Mainz erreichen Sie schneller Ihre digitalen Ziele: mit intelligenter Content-Erstellung, effizienter Webentwicklung und datenbasierter Strategie.
          </p>
          <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
            <span 
              className={seoTextStyles.ctaButton}
              onClick={handleStartProject}
            >
              👉 Jetzt KI-Potenzialanalyse anfordern und digitales Wachstum beschleunigen.
            </span>
          </p>
        </article>
      </div>
    </section>
  );
};

export default KiSEOText;
