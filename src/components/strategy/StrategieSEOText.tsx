
import React from 'react';
import BaseSEOText from '@/components/seo-text/BaseSEOText';
import { seoTextStyles } from '@/styles/seo-text-styles';

const StrategieSEOText = () => {
  const handleOpenLeadForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  return (
    <BaseSEOText>
      <h2 className={seoTextStyles.mainHeading} style={{ color: '#FFFFFF' }}>
        Webkonzept & Strategie – Klar. Strukturiert. Erfolgreich.
      </h2>
      
      <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
        ooliv ist Ihr Partner für durchdachte Digitalstrategien und individuelle Webkonzepte, die Ihre Marke im Netz erfolgreich machen. Wir entwickeln Websites nicht nur optisch ansprechend, sondern auf Basis von Daten, Analysen und Zielgruppenverständnis – für maximale Sichtbarkeit, mehr Leads und eine nachhaltige Marktposition.
      </p>
      
      <h3 className={seoTextStyles.sectionHeading} style={{ color: '#FFFFFF' }}>
        Warum Ihre Website ein Webkonzept braucht
      </h3>
      
      <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
        Eine Website ohne Strategie ist wie ein Haus ohne Fundament. Viele Unternehmen investieren in ein schönes Design, ohne zu wissen, wer ihre Zielgruppe ist, wie ihre Nutzer ticken oder welche Inhalte überzeugen. Mit einem durchdachten Webkonzept sorgen wir dafür, dass Ihre Website nicht nur gut aussieht, sondern auch strategisch funktioniert – von der Zielgruppenanalyse über die Sitemap bis zu ersten Wireframes.
      </p>
      
      <h3 className={seoTextStyles.sectionHeading} style={{ color: '#FFFFFF' }}>
        Individuelle Webkonzepte – keine Lösungen von der Stange
      </h3>
      
      <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
        Jedes Unternehmen ist einzigartig – genau wie jedes Webprojekt. Deshalb entwickeln wir Webkonzepte, die Ihre Marke stärken, Ihre Zielgruppe abholen und Ihre Geschäftsziele unterstützen. Keine Templates, keine Baukastensysteme, sondern maßgeschneiderte Strategien, die wirken.
      </p>
      
      <h3 className={seoTextStyles.sectionHeading} style={{ color: '#FFFFFF' }}>
        Unser Ansatz – strategisch, partnerschaftlich, transparent
      </h3>
      
      <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
        <strong className={seoTextStyles.strongText}>Analyse & Webkonzept:</strong> Wir starten mit einer tiefgehenden Analyse Ihrer aktuellen Website, Ihrer Zielgruppen und Ihres Wettbewerbs. Daraus entwickeln wir Ihr individuelles Webkonzept – inklusive Sitemap, Content-Strategie, Wireframes und Conversion-Logik.
      </p>
      
      <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
        <strong className={seoTextStyles.strongText}>Strategie & Planung:</strong> Gemeinsam definieren wir Ihre Ziele und KPIs, planen alle Maßnahmen und erstellen eine Roadmap, damit Sie jederzeit wissen, wo Ihr Projekt steht.
      </p>
      
      <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
        <strong className={seoTextStyles.strongText}>Design-Übergabe:</strong> Ihr Webkonzept bildet die Grundlage für das Screendesign. Hier gestalten wir die visuelle Identität Ihrer Marke – mobiloptimiert, benutzerfreundlich und ästhetisch überzeugend.
      </p>
      
      <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
        <strong className={seoTextStyles.strongText}>Technische Umsetzung:</strong> Nach dem Design startet die Webentwicklung: performant, sicher und skalierbar – für eine Website, die heute und morgen funktioniert.
      </p>
      
      <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
        <strong className={seoTextStyles.strongText}>Optimierung & Betreuung:</strong> Wir sind auch nach dem Go-Live für Sie da. Mit kontinuierlichem Monitoring, regelmäßigen Analysen und datenbasierten Empfehlungen, damit Ihr Webkonzept langfristig erfolgreich bleibt.
      </p>
      
      <h3 className={seoTextStyles.sectionHeading} style={{ color: '#FFFFFF' }}>
        Erfolgsgeschichten – unsere Projekte als strategischer Erfolgsfaktor
      </h3>
      
      <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
        Unsere Kundenreferenzen sind mehr als nur Lob – sie sind Belege für unsere strategische Exzellenz und Innovationskraft. Jede Referenz zeigt, wie wir komplexe Herausforderungen individuell lösen, Projekte strukturiert begleiten und gemeinsam mit unseren Kunden messbare Ergebnisse erzielen.
      </p>
      
      <p className={`${seoTextStyles.paragraph} ${seoTextStyles.strongText}`} style={{ color: '#F4F4F4' }}>
        Gärtnerei Zech (Mittelstand, E-Commerce)
      </p>
      <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
        <strong className={seoTextStyles.strongText}>Ausgangslage:</strong> Fehlende Sichtbarkeit und geringe Online-Bestellungen.<br />
        <strong className={seoTextStyles.strongText}>Unser Ansatz:</strong> Zielgruppenanalyse, individuelles Webkonzept mit SEO-Integration und Conversion-Optimierung.<br />
        <strong className={seoTextStyles.strongText}>Ergebnis:</strong> +150 % Online-Bestellungen, Top-Rankings bei Google, Website-Link auf Anfrage.
      </p>
      
      <blockquote className={seoTextStyles.blockquote}>
        <p className={seoTextStyles.quoteText}>
          „Dank ooliv haben wir endlich ein Webkonzept, das unsere Zielgruppe perfekt abholt. Die Workshops waren klasse, wir wurden professionell begleitet. Das Ergebnis: mehr Umsatz und eine Website, die überzeugt."
        </p>
      </blockquote>
      
      <p className={`${seoTextStyles.paragraph} ${seoTextStyles.strongText}`} style={{ color: '#F4F4F4' }}>
        IT-Startup Frankfurt
      </p>
      <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
        <strong className={seoTextStyles.strongText}>Ausgangslage:</strong> Unscharfe Markenbotschaft, wenig Struktur.<br />
        <strong className={seoTextStyles.strongText}>Unser Ansatz:</strong> Zielgruppenanalyse, klare Markenpositionierung, maßgeschneidertes Webkonzept.<br />
        <strong className={seoTextStyles.strongText}>Ergebnis:</strong> 3x mehr Leads, nachhaltige Markenwahrnehmung.
      </p>
      
      <blockquote className={seoTextStyles.blockquote}>
        <p className={seoTextStyles.quoteText}>
          „Wir hatten anfangs kein klares Konzept, nur eine grobe Idee. ooliv hat uns strategisch abgeholt und die Zielgruppenanalyse war ein echter Augenöffner."
        </p>
      </blockquote>
      
      <p className={`${seoTextStyles.paragraph} ${seoTextStyles.strongText}`} style={{ color: '#F4F4F4' }}>
        B2B-Unternehmen Mainz
      </p>
      <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
        <strong className={seoTextStyles.strongText}>Ausgangslage:</strong> Geringe Conversion, veraltetes CMS.<br />
        <strong className={seoTextStyles.strongText}>Unser Ansatz:</strong> Analyse, neue Sitemap, Conversion-Optimierung, individuelles Webkonzept.<br />
        <strong className={seoTextStyles.strongText}>Ergebnis:</strong> +200 % Online-Anfragen, gesteigerte Kundenbindung.
      </p>
      
      <blockquote className={seoTextStyles.blockquote}>
        <p className={seoTextStyles.quoteText}>
          „Vor dem Relaunch waren wir kaum sichtbar. ooliv hat unser Webkonzept von Grund auf neu gedacht und uns eine klare Strategie gegeben."
        </p>
      </blockquote>
      
      <h3 className={seoTextStyles.sectionHeading} style={{ color: '#FFFFFF' }}>
        Langfristige Zusammenarbeit – Vertrauen, das bleibt
      </h3>
      
      <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
        Viele unserer Kunden kommen nach dem ersten Projekt wieder oder beauftragen uns direkt mit Folgeprojekten. Unsere strategische Herangehensweise und transparente Kommunikation schaffen Vertrauen und sorgen für langfristige Partnerschaften.
      </p>
      
      <h3 className={seoTextStyles.sectionHeading} style={{ color: '#FFFFFF' }}>
        Kundenfeedback aus Expertensicht – unsere Arbeitsweise im Spiegel
      </h3>
      
      <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
        Unsere Kunden schätzen besonders:
      </p>
      
      <ul className={seoTextStyles.unorderedList} style={{ color: '#F4F4F4' }}>
        <li>Die Kombination aus Strategie und Kreativität – das Webkonzept als tragendes Fundament.</li>
        <li>Die partnerschaftliche Zusammenarbeit in Workshops und persönlichen Meetings.</li>
        <li>Die Transparenz im gesamten Projektablauf – von Analyse über Design bis zur Webentwicklung.</li>
        <li>Die nachhaltigen Erfolge: mehr Sichtbarkeit, mehr Leads, mehr Umsatz.</li>
      </ul>
      
      <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
        Diese Rückmeldungen sind für uns mehr als nur Lob – sie bestätigen unseren Anspruch, Thought Leadership im Bereich Webkonzept und Digitalstrategie zu übernehmen.
      </p>
      
      <h3 className={seoTextStyles.sectionHeading} style={{ color: '#FFFFFF' }}>
        Warum ooliv?
      </h3>
      
      <ul className={seoTextStyles.unorderedList} style={{ color: '#F4F4F4' }}>
        <li>Individuelle Webkonzepte, die Ihre Marke strategisch stärken</li>
        <li>Branchenübergreifende Erfahrung – B2B, E-Commerce, Start-ups</li>
        <li>Messbare Ergebnisse mit klar definierten KPIs</li>
        <li>Persönliche Ansprechpartner, Workshops & Kick-offs</li>
        <li>Langfristige Betreuung – für nachhaltigen Erfolg</li>
      </ul>
      
      <h3 className={seoTextStyles.sectionHeading} style={{ color: '#FFFFFF' }}>
        Jetzt starten – Webkonzept & Strategie aus einer Hand
      </h3>
      
      <p className={seoTextStyles.paragraph} style={{ color: '#F4F4F4' }}>
        Lassen Sie uns gemeinsam Ihre digitale Erfolgsgeschichte schreiben. Buchen Sie jetzt Ihr kostenloses Strategiegespräch und starten Sie mit einem Webkonzept, das wirkt.
      </p>
      
      <p className={seoTextStyles.paragraph}>
        <button 
          onClick={handleOpenLeadForm}
          className={seoTextStyles.ctaButton}
        >
          👉 Jetzt Strategiegespräch vereinbaren
        </button>
      </p>
    </BaseSEOText>
  );
};

export default StrategieSEOText;
