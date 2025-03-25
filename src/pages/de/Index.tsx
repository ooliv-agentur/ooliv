import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TeamImpactSection from "@/components/TeamImpactSection";
import Challenge from "@/components/Challenge";
import Solution from "@/components/Solution";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import ClientLogos from "@/components/ClientLogos";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const GermanIndex = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  return (
    <PageLayout className="overflow-x-hidden">
      <Hero 
        startProjectText="Projekt starten"
        seeWorkText="Arbeiten ansehen"
      />
      <AboutSection 
        title="Klein, fokussiert, effektiv – Ihre Webagentur aus Mainz."
        description="ooliv ist keine anonyme Full-Service-Agentur, sondern ein eingespieltes Expertenteam mit klarer Spezialisierung: Strategie, Webdesign, Entwicklung, SEO und Content – alles aus einer Hand. Sie kommunizieren direkt mit dem Gründer. Wir liefern Ergebnisse, keine Buzzwords."
        values={[
          "Strategie vor Design",
          "Qualität vor Quantität",
          "Ergebnisse vor Ästhetik"
        ]}
        additionalText="Was das für Sie bedeutet: Kurze Wege, tiefes Verständnis, maßgeschneiderte Lösungen."
      />
      <TeamImpactSection
        title="Klein, aber schlagkräftig"
        subtitle="Unser Team besteht aus Spezialisten mit langjähriger Erfahrung"
        description="Bei ooliv arbeiten Sie direkt mit dem Gründer zusammen, während ein spezialisiertes Team im Hintergrund für exzellente Umsetzung sorgt. Dieser Ansatz garantiert kurze Kommunikationswege, tiefgreifendes Verständnis für Ihre Ziele und hochwertige Ergebnisse ohne Reibungsverluste."
        stats={[
          { value: "16+", label: "Jahre Erfahrung" },
          { value: "100+", label: "zufriedene Kunden" },
          { value: "200+", label: "erfolgreiche Projekte" }
        ]}
      />
      <Challenge 
        title="Ihre Website ist online – aber sie arbeitet nicht für Sie?"
        description="Viele Unternehmen kämpfen mit Webseiten, die gut aussehen, aber nichts bringen. Wir zeigen, woran es liegt – und wie wir es besser machen."
        challenges={[
          "Veraltetes Design",
          "Langsame Ladezeiten",
          "Schlechte Sichtbarkeit bei Google",
          "Fehlende Mobile-Optimierung",
          "Keine Conversion-Elemente",
          "Kein strategischer Aufbau"
        ]}
        solutions={[
          "Zielgruppengerechte Gestaltung mit klarer Markenbotschaft",
          "Technisch optimierte Entwicklung mit Fokus auf Performance",
          "Technische & inhaltliche SEO-Strategie mit lokalem Fokus",
          "Mobile-first Design für alle Endgeräte",
          "Durchdachte UX mit klaren Calls-to-Action",
          "Struktur & Inhalte nach Nutzerverhalten und Suchintention"
        ]}
      />
      <div className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-brand-heading">
            Sehen Sie den Unterschied: Strategie statt Kosmetik
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
            Ziehen Sie den Regler und vergleichen Sie selbst: So verwandeln wir veraltete, nicht performante Webseiten in digitale Vertriebsmaschinen – mit mehr Sichtbarkeit, mehr Leads und besserer Nutzerführung.
          </p>
          <BeforeAfterSlider />
        </div>
      </div>
      <Solution 
        title="Wir entwickeln Websites, die Ihre Unternehmensziele unterstützen."
        subtitle="Mit Strategie, Expertise & intelligenter Technologie"
        description={
          <>
            Ob Start-up, Mittelstand oder B2B-Unternehmen – wir liefern keine Templates, sondern maßgeschneiderte Lösungen, die Ihre Zielgruppe erreichen. 
            Vertrauen Sie auf unsere Expertise in <Link to="/de/webdesign" className="text-brand-primary hover:underline">Webdesign</Link>, 
            <Link to="/de/webentwicklung" className="text-brand-primary hover:underline"> Webentwicklung</Link>, 
            <Link to="/de/content-erstellung" className="text-brand-primary hover:underline"> Content-Erstellung</Link>, 
            <Link to="/de/seo-optimierung" className="text-brand-primary hover:underline"> SEO-Optimierung</Link>, 
            <Link to="/de/google-ads" className="text-brand-primary hover:underline"> Google Ads</Link> und 
            <Link to="/de/ki-technologien" className="text-brand-primary hover:underline"> KI-Technologien</Link>.
          </>
        }
        solutions={[
          "Strategisch durchdacht",
          "Für Menschen & Maschinen optimiert",
          "Technisch auf dem neuesten Stand",
          "Entwickelt für Wachstum – nicht für kurzfristige Trends"
        ]}
        process={[
          {
            title: "Strategie & Analyse",
            description: "Zielgruppen, Märkte, Suchverhalten – wir starten mit datenbasierten Erkenntnissen statt Bauchgefühl."
          },
          {
            title: "Content & SEO",
            description: "Wir erstellen Inhalte, die nicht nur gut klingen, sondern auch gefunden werden – in mehreren Sprachen, bei Bedarf KI-gestützt."
          },
          {
            title: "UX & Webdesign",
            description: "Visuelles Konzept, Benutzerführung & Conversion – perfekt abgestimmt auf Ihre Marke und Ihre Ziele."
          },
          {
            title: "Technische Umsetzung",
            description: "Programmierung mit HTML, CSS und JavaScript – ohne CMS, wenn Sie volle Kontrolle und Geschwindigkeit wünschen. Oder mit WordPress, wenn redaktionelle Pflege gefragt ist."
          },
          {
            title: "Launch, Tracking & Support",
            description: "Wir begleiten Sie über den Launch hinaus: mit sauberem Tracking, kontinuierlicher Optimierung und klarer Betreuung – ohne Reibungsverluste."
          }
        ]}
        learnMoreText="Mehr über unseren Prozess erfahren"
      />
      
      {/* Custom Team Section - shows only Uli and Lisa */}
      <section className="section-alt py-24">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-title">Das Team hinter ooliv</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Bei ooliv arbeiten Sie direkt mit dem Gründer und seiner Partnerin zusammen. Uli und Lisa Schönleber vereinen strategisches Denken und kreative Umsetzung – für Websites, die Wirkung zeigen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {/* Uli Schönleber */}
            <div className="flex flex-col items-center text-center">
              <div className="h-28 w-28 mb-4 border-2 border-brand-primary/20 rounded-full flex items-center justify-center bg-brand-primary/10 text-brand-primary text-xl">
                US
              </div>
              <h3 className="text-xl font-semibold mb-1">Uli Schönleber</h3>
              <p className="text-sm text-brand-text/80">CEO – Ihr direkter Ansprechpartner</p>
            </div>
            
            {/* Lisa Schönleber */}
            <div className="flex flex-col items-center text-center">
              <div className="h-28 w-28 mb-4 border-2 border-brand-primary/20 rounded-full flex items-center justify-center bg-brand-primary/10 text-brand-primary text-xl">
                LS
              </div>
              <h3 className="text-xl font-semibold mb-1">Lisa Schönleber</h3>
              <p className="text-sm text-brand-text/80">Content</p>
            </div>
          </div>
        </div>
      </section>
      
      <ClientLogos />
      
      {/* Show all 5 case studies with no limitation */}
      <CaseStudiesSection showAll={true} showCta={true} />
      
      <FAQ 
        title="Häufig gestellte Fragen – zur Werbeagentur ooliv in Mainz"
        customFaqs={[
          {
            question: "Was macht ooliv als Werbeagentur in Mainz besonders?",
            answer: "Als Werbeagentur in Mainz arbeiten wir strategisch, sprechen Klartext und liefern messbare Ergebnisse – ohne Umwege über Zwischenebenen. Sie sprechen direkt mit dem Gründer und erhalten maßgeschneiderte Lösungen für Ihre spezifischen Ziele."
          },
          {
            question: "Für wen ist ooliv die richtige Agentur?",
            answer: "Für B2B-Unternehmen, Start-ups oder Mittelstand, die Wert auf Performance, SEO und einen professionellen Webauftritt legen. Unsere Werbeagentur in Mainz ist spezialisiert auf Kunden, die konkrete Geschäftsziele mit ihrer Website erreichen wollen."
          },
          {
            question: "Wie lange dauert ein typisches Projekt?",
            answer: "Je nach Umfang 4 bis 10 Wochen – mit klaren Meilensteinen und transparenter Planung."
          },
          {
            question: "Arbeitet ihr mit WordPress oder ohne CMS?",
            answer: "Beides – je nach Ziel. Für maximale Kontrolle programmieren wir direkt mit HTML, CSS, JS. Für redaktionelle Flexibilität setzen wir auf WordPress."
          },
          {
            question: "Bietet ihr auch SEO-Optimierung an?",
            answer: "Ja, von Keyword-Recherche über technische Optimierung bis hin zu Content-Strategie. SEO ist integraler Bestandteil aller Projekte."
          },
          {
            question: "Wie funktioniert die Kommunikation während eines Projekts?",
            answer: "Strukturiert und transparent. Wir haben wöchentliche Check-ins und bieten schnelle Antworten per E-Mail oder Telefon."
          },
          {
            question: "Was kostet eine Website bei ooliv?",
            answer: "Unsere Projekte starten ab ca. 6.000 € netto. Der genaue Preis hängt vom Umfang und der gewünschten Funktionalität ab."
          },
          {
            question: "Welche Branchen betreut ooliv hauptsächlich?",
            answer: "Wir arbeiten mit Startups, Mittelständlern und B2B-Unternehmen aus Branchen wie Industrie, IT, Bau, Lifestyle, Energie und Handel."
          },
          {
            question: "Bietet ooliv auch Unterstützung nach dem Website-Launch?",
            answer: "Ja – wir begleiten Sie mit Tracking, Optimierung und Support über einen definierten Zeitraum hinweg."
          },
          {
            question: "Wie sorgt ooliv für Sichtbarkeit bei Google?",
            answer: "Durch klare Seitenstruktur, gezielte Keyword-Strategien, technische SEO und bei Bedarf durch lokale Suchmaschinenoptimierung."
          },
          {
            question: "Was unterscheidet ooliv von anderen Werbeagenturen in Mainz?",
            answer: "Direkte Kommunikation mit dem Gründer, ein fokussiertes Spezialisten-Team, und messbare Ergebnisse ohne Buzzwords."
          }
        ]}
      />
      <CTA 
        title="Bereit für eine Website, die Ihr Unternehmen voranbringt?"
        subtitle="Lassen Sie uns gemeinsam eine Lösung entwickeln, die zu Ihren Zielen passt und messbare Ergebnisse liefert."
        primaryCta="Projekt starten"
        secondaryCta="Kostenlose Website-Prüfung anfordern"
      />
    </PageLayout>
  );
};

export default GermanIndex;
