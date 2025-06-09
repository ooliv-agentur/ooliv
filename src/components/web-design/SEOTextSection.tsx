
import React from 'react';
import { seoTextStyles } from '@/styles/seo-text-styles';

const SEOTextSection = () => {
  const handleOpenLeadForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  return (
    <section className={seoTextStyles.container}>
      <div className={seoTextStyles.innerContainer}>
        <article className={seoTextStyles.articleWrapper}>
          <h2 className={seoTextStyles.mainHeading}>Webdesign Mainz – individuelles Design, strategischer Aufbau, rechtliche Sicherheit</h2>
          
          <p className={seoTextStyles.paragraph}>
            Als Webdesign-Agentur in Mainz entwickeln wir Websites, die nicht nur gut aussehen, sondern funktionieren: technisch, inhaltlich, rechtlich und strategisch. 
            Unsere Kunden kommen zu uns, wenn Templates nicht mehr reichen, wenn Ladezeiten zu lang sind oder wenn ein Relaunch mehr braucht als nur ein neues Screendesign.
          </p>
          
          <p className={seoTextStyles.paragraph}>
            Mit einem systematischen Ansatz schaffen wir individuelle Websites, die Ihre Marke sichtbar machen, messbar performen und langfristig wachsen können. 
            Von der Konzeptvorstellung bis zur technischen Umsetzung liefern wir WordPress-Webdesign-Lösungen, die strukturiert, sicher und suchmaschinenfreundlich sind.
          </p>
          
          <h3 className={seoTextStyles.sectionHeading}>Individuelle Website statt Baukasten – warum Standardlösungen nicht ausreichen</h3>
          
          <p className={seoTextStyles.paragraph}>
            Viele Unternehmen starten mit Themes oder Baukastensystemen – und scheitern bei Skalierung, Sicherheit oder Markenwirkung. 
            Unsere Antwort: maßgeschneidertes Webdesign mit Konzept, intuitiver Benutzerführung und sauberem Codeaufbau.
          </p>
          
          <p className={seoTextStyles.paragraph}>Wir berücksichtigen:</p>
          
          <ul className={seoTextStyles.unorderedList}>
            <li className={seoTextStyles.listItem}>Ihre Markenidentität und Zielgruppe</li>
            <li className={seoTextStyles.listItem}>Ihre technischen Anforderungen (z. B. Corporate Website mit CRM-Anbindung)</li>
            <li className={seoTextStyles.listItem}>Ihre bestehende Infrastruktur (Hosting, CMS, Domain)</li>
            <li className={seoTextStyles.listItem}>Ihre Online-Marketing-Ziele (Leads, Sichtbarkeit, Conversion)</li>
          </ul>
          
          <p className={seoTextStyles.paragraph}>Dabei achten wir auf eine durchgängige Designlogik, strukturierte Inhaltsmodelle und vollständige SEO-Integration.</p>
          
          <h3 className={seoTextStyles.sectionHeading}>Der Webdesign-Prozess: von der Analyse bis zum Launch</h3>
          
          <p className={seoTextStyles.paragraph}>
            Unser bewährter Ablauf garantiert einen reibungslosen Projektverlauf – auch bei komplexen Websites, 
            internationalen Rollouts oder anspruchsvollen SEO-Zielen.
          </p>
          
          <p className={seoTextStyles.paragraph}>Unser Prozess umfasst:</p>
          
          <p className={seoTextStyles.paragraph}>
            <strong className={seoTextStyles.highlightedText}>Anamnesegespräch & Recherche- und Planungsphase</strong><br />
            – Zieldefinition, Ist-Analyse, Projektumfang<br />
            – Mitbewerberanalyse, Keyword-Recherche, Zielgruppenanalyse
          </p>
          
          <p className={seoTextStyles.paragraph}>
            <strong className={seoTextStyles.highlightedText}>Wireframes & Screendesign & Layout</strong><br />
            – Strukturierung aller Seiten & Navigationspfade<br />
            – UX-Optimierung, Mobile-First-Ansatz, Conversion-Ziele
          </p>
          
          <p className={seoTextStyles.paragraph}>
            <strong className={seoTextStyles.highlightedText}>Technische Seite einer Website</strong><br />
            – CMS-Setup (z. B. WordPress), HTML/CSS, Webentwicklung<br />
            – Integration von Plugins, Tracking-Tools, Formularen
          </p>
          
          <p className={seoTextStyles.paragraph}>
            <strong className={seoTextStyles.highlightedText}>Relaunch- und Redesign-Service</strong><br />
            – Übernahme und Optimierung bestehender Inhalte<br />
            – Weiterleitungskonzepte, technische Migration
          </p>
          
          <p className={seoTextStyles.paragraph}>
            <strong className={seoTextStyles.highlightedText}>Launch & Full Service für Webprojekte</strong><br />
            – Qualitätssicherung, Ladezeitenprüfung, Responsivität<br />
            – Optional: Betreuung, Wartung, Weiterentwicklung
          </p>
          
          <p className={seoTextStyles.paragraph}>Jede Phase ist dokumentiert, abgestimmt und strukturiert – mit direkter Kommunikation über Basecamp und klaren Timelines.</p>
          
          <h3 className={seoTextStyles.sectionHeading}>Webtechnik, CMS & Benutzerfreundlichkeit</h3>
          
          <p className={seoTextStyles.paragraph}>
            Wir arbeiten mit zeitgemäßer Webtechnik, die skalierbar, wartbar und zukunftssicher ist. 
            Ob Sie auf WordPress, TYPO3 oder ein individuelles HTML-Setup setzen – wir entwickeln CMS-basierte Websites, 
            die Inhalte einfach aktualisieren, strukturieren und erweitern lassen.
          </p>
          
          <p className={seoTextStyles.paragraph}>Highlights:</p>
          
          <ul className={seoTextStyles.unorderedList}>
            <li className={seoTextStyles.listItem}>Intuitives WordPress CMS für Corporate Websites, Landingpages & Portale</li>
            <li className={seoTextStyles.listItem}>Integration mit Joomla oder TYPO3, wenn projektspezifisch sinnvoll</li>
            <li className={seoTextStyles.listItem}>Strukturierte Inhaltsmodelle mit klarer Benutzerführung</li>
            <li className={seoTextStyles.listItem}>Erstellung und Editieren von Inhalten im Live-Editor</li>
            <li className={seoTextStyles.listItem}>Rechtemanagement, Mehrsprachigkeit, Medienverwaltung</li>
          </ul>
          
          <p className={seoTextStyles.paragraph}>So bleibt Ihre Seite auch nach dem Launch lebendig – ohne laufende Abhängigkeit von Entwicklerteams.</p>
          
          <h3 className={seoTextStyles.sectionHeading}>Datenschutz, DSGVO und technische Sicherheit</h3>
          
          <p className={seoTextStyles.paragraph}>
            Rechtliche Sicherheit ist nicht verhandelbar. Unsere Weblösungen erfüllen die Anforderungen der DSGVO – vom Schutz personenbezogener Daten 
            bis zur vollständigen technischen Absicherung.
          </p>
          
          <p className={seoTextStyles.paragraph}>Unsere Standards:</p>
          
          <ul className={seoTextStyles.unorderedList}>
            <li className={seoTextStyles.listItem}>Cookie-Banner mit aktiver Einwilligung (Consent Management)</li>
            <li className={seoTextStyles.listItem}>SSL-Verschlüsselung und Hosting in der EU</li>
            <li className={seoTextStyles.listItem}>Sicheres Kontaktformular mit Double Opt-in</li>
            <li className={seoTextStyles.listItem}>Datenschutzerklärung, Impressum, Opt-Out-Logik</li>
            <li className={seoTextStyles.listItem}>Barrierearme Gestaltung für mehr Zugänglichkeit</li>
          </ul>
          
          <p className={seoTextStyles.paragraph}>So schützen Sie Ihre Besucher und Ihre Marke – ganz ohne Kompromisse beim Design.</p>
          
          <h3 className={seoTextStyles.sectionHeading}>SEO & Online-Marketing: Sichtbarkeit als Strategie</h3>
          
          <p className={seoTextStyles.paragraph}>
            Jede Website ist nur so gut wie ihre Auffindbarkeit. Deshalb gehört Suchmaschinenoptimierung (SEO) bei uns zum Webdesign-Prozess – 
            und wird durch ergänzende Online-Marketing-Maßnahmen ergänzt.
          </p>
          
          <p className={seoTextStyles.paragraph}>Unsere SEO-Strategie:</p>
          
          <ul className={seoTextStyles.unorderedList}>
            <li className={seoTextStyles.listItem}>Keyword-Strategie auf Basis von Suchvolumen & Wettbewerb</li>
            <li className={seoTextStyles.listItem}>OnPage-Optimierung: Titles, Meta, H1-H6, ALT-Texte</li>
            <li className={seoTextStyles.listItem}>Technisches SEO: Pagespeed, Crawling, saubere URL-Struktur</li>
            <li className={seoTextStyles.listItem}>Lokale SEO: für regionale Sichtbarkeit (z. B. „Webdesign Mainz")</li>
            <li className={seoTextStyles.listItem}>Linkaufbau & Content Seeding nach dem Launch</li>
            <li className={seoTextStyles.listItem}>Erweiterbar durch: Google-AdWords (SEM) & Performance-Kampagnen</li>
          </ul>
          
          <p className={seoTextStyles.paragraph}>Ob SEO-ready Webseiten, Conversion-Funnel oder datenbasiertes Kampagnen-Setup – wir bauen Websites, die sichtbar sind und bleiben.</p>
          
          <h3 className={seoTextStyles.sectionHeading}>Referenzen & Kundenstimmen – Projekte, die Ergebnisse liefern</h3>
          
          <p className={seoTextStyles.paragraph}>
            Webdesign ist keine Spielwiese – es ist ein strategischer Prozess, der Kompetenz, Struktur und Erfahrung erfordert. 
            Unsere Kund:innen vertrauen ooliv, weil wir aus Ideen konkrete, messbare Ergebnisse machen. 
            Von der ersten Beratung über die technische Umsetzung bis zur langfristigen Betreuung stehen wir für Klarheit, Qualität und Wirkung.
          </p>
          
          <p className={seoTextStyles.paragraph}>
            Unsere Projekte umfassen Unternehmensseiten, Portale, Shops und Relaunches – für Kunden aus Beratung, Industrie, Tech und Handel. 
            Dabei verzichten wir bewusst auf Fertig-Templates: Jedes Projekt basiert auf einer individuellen Strategie, passenden Themes, 
            maßgeschneiderten Strukturen und einem klaren Projektumfang.
          </p>
          
          <p className={seoTextStyles.paragraph}>Auswahl realisierter Kundenprojekte:</p>
          
          <p className={seoTextStyles.paragraph}>
            <strong className={seoTextStyles.strongText}>Klaiber Steuerberatung:</strong> Webdesign & SEO-Relaunch mit strukturierter Seitenarchitektur und lokalem SEO für mehrere Standorte.
          </p>
          
          <p className={seoTextStyles.paragraph}>
            <strong className={seoTextStyles.strongText}>COBUS Industries:</strong> UX-Redesign mit Produktkommunikation für internationale Märkte – Umsetzung auf WordPress-Basis mit Fokus auf Performance.
          </p>
          
          <p className={seoTextStyles.paragraph}>
            <strong className={seoTextStyles.strongText}>SPEZ AG:</strong> Markteinführung & Corporate Website mit lokalem SEM und SEO – inkl. Logo, Tonalität und regionaler Landingpages.
          </p>
          
          <p className={seoTextStyles.paragraph}>
            <strong className={seoTextStyles.strongText}>IconPro GmbH:</strong> KI-Software trifft Design – animierte Website-Module, technische Inhalte und UX-Optimierung.
          </p>
          
          <p className={seoTextStyles.paragraph}>
            <strong className={seoTextStyles.strongText}>Quartier am Kliff:</strong> HTML-basierter Immobilienauftritt – umgesetzt als visuell starke, performante Verkaufsseite mit klarer Nutzerführung.
          </p>
          
          <p className={seoTextStyles.paragraph}>Kundenerfahrungen & Erfahrungsberichte:</p>
          
          <blockquote className="border-l-4 border-brand-primary pl-4 my-6">
            <em className={seoTextStyles.quote}>„Unsere neue Website repräsentiert endlich, was uns als Beratung ausmacht: Klarheit, Vertrauen und Dynamik. 
            Die Zusammenarbeit mit ooliv war strukturiert und zielführend."</em><br />
            <span className={seoTextStyles.quoteAuthor}>– Katharina Klaiber, Geschäftsführung, Klaiber Steuerberatung</span>
          </blockquote>
          
          <blockquote className="border-l-4 border-brand-primary pl-4 my-6">
            <em className={seoTextStyles.quote}>„Mit ooliv konnten wir SPEZ sichtbar machen. Die neue Marke überzeugt technisch und emotional – und generiert seit dem Launch konstant qualifizierte Anfragen."</em><br />
            <span className={seoTextStyles.quoteAuthor}>– Sandro Z., Geschäftsführer, SPEZ AG</span>
          </blockquote>
          
          <blockquote className="border-l-4 border-brand-primary pl-4 my-6">
            <em className={seoTextStyles.quote}>„Dank ooliv wirkt unsere Website jetzt genauso wie unsere Software: durchdacht, strukturiert und visuell überzeugend. 
            Besonders Illustrationen und Animationen bringen komplexe Themen auf den Punkt."</em><br />
            <span className={seoTextStyles.quoteAuthor}>– Benjamin R., Head of Product, IconPro GmbH</span>
          </blockquote>
          
          <p className={seoTextStyles.paragraph}>Unsere Expertise:</p>
          
          <ul className={seoTextStyles.unorderedList}>
            <li className={seoTextStyles.listItem}>Projektberatung mit klarem Ablauf – vom Kick-off bis zum GoLive</li>
            <li className={seoTextStyles.listItem}>Betreuung nach dem Launch – technisch, strategisch und redaktionell</li>
            <li className={seoTextStyles.listItem}>Erfahrung aus über 100 Webprojekten – mit Fokus auf B2B und erklärungsbedürftige Produkte</li>
            <li className={seoTextStyles.listItem}>Transparente Kommunikation – direkt über Basecamp und persönliche Ansprechpartner</li>
          </ul>
          
          <p className={seoTextStyles.paragraph}>
            Alle Projekte folgen unserem Prinzip: Individuell mit System. Keine Templates, keine unklaren Absprachen – sondern strukturierte Umsetzung, 
            datenbasierte Entscheidungen und kontinuierliche Betreuung.
          </p>
          
          <h3 className={seoTextStyles.sectionHeading}>Fazit: Webdesign Mainz mit Tiefe, Struktur und Wirkung</h3>
          
          <p className={seoTextStyles.paragraph}>
            Unsere Kunden erhalten kein Theme, sondern ein System. Kein Bauchgefühl, sondern eine Strategie. 
            Kein One-Size-Fits-All, sondern individuelles Webdesign mit messbarem Effekt.
          </p>
          
          <p className={seoTextStyles.paragraph}>Mit ooliv profitieren Sie von:</p>
          
          <ul className={seoTextStyles.unorderedList}>
            <li className={seoTextStyles.listItem}>maßgeschneiderten Webdesign-Lösungen, die technisch und rechtlich sauber sind</li>
            <li className={seoTextStyles.listItem}>einem strukturierten Projektablauf mit klarer Betreuung</li>
            <li className={seoTextStyles.listItem}>CMS-Systemen, die Sie selbst pflegen können</li>
            <li className={seoTextStyles.listItem}>einer SEO-Strategie, die auf Sichtbarkeit und Conversion einzahlt</li>
            <li className={seoTextStyles.listItem}>einem Team, das kreative Ideen mit technischer Tiefe verbindet</li>
          </ul>
          
          <p className={seoTextStyles.paragraph}>
            <button
              onClick={handleOpenLeadForm}
              className={seoTextStyles.ctaButton}
            >
              👉 Starten wir gemeinsam Ihr Webprojekt – mit Strategie, Struktur und Substanz.
            </button>
          </p>
        </article>
      </div>
    </section>
  );
};

export default SEOTextSection;
