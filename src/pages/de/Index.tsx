
import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TeamImpactSection from "@/components/TeamImpactSection";
import Challenge from "@/components/Challenge";
import Solution from "@/components/Solution";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import TeamTeaser from "@/components/TeamTeaser";
import ClientLogos from "@/components/ClientLogos";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import WebDesignCaseStudies from "@/components/web-design/WebDesignCaseStudies";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const GermanIndex = () => {
  const { setLanguage } = useLanguage();
  
  // Set language to German when this page is loaded
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
            description: "Wir begleiten Sie über den Launch hinaus: mit sauberem Tracking, kontinuierlicher Optimierung und klarer Betreuung über Basecamp."
          }
        ]}
        learnMoreText="Mehr über unseren Prozess erfahren"
      />
      <TeamTeaser />
      <ClientLogos />
      
      {/* Added WebDesignCaseStudies component */}
      <section className="py-20 bg-gradient-to-br from-brand-background to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-6 font-sans">
              Wir erstellen Websites, die <span className="text-brand-primary">echte Geschäftsergebnisse liefern.</span>
            </h2>
            <p className="text-xl text-brand-text max-w-3xl mx-auto mb-8 font-sans">
              Echte Ergebnisse von echten Kunden. Sehen Sie, wie wir Unternehmen wie Ihres zu messbarem Wachstum durch strategisches Webdesign und -entwicklung verholfen haben.
            </p>
          </div>
          <WebDesignCaseStudies />
        </div>
      </section>
      
      <Testimonials 
        title="Was unsere Kunden sagen:"
        testimonials={[
          {
            quote: "ooliv hat unsere alte Website in einen Wachstumsmotor verwandelt. Die Conversion-Rate ist um 40 % gestiegen.",
            author: "Michael Schmidt",
            role: "TechSolutions GmbH"
          },
          {
            quote: "Endlich eine Agentur, die wirklich strategisch arbeitet. Wir generieren dreimal so viele qualifizierte Leads wie vorher.",
            author: "Sabine Müller",
            role: "Innovate AG"
          },
          {
            quote: "Unkompliziert, effizient und auf den Punkt. Das Ergebnis passt exakt zu unserem Vertrieb.",
            author: "Thomas Weber",
            role: "ProService GmbH"
          }
        ]}
      />
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
            answer: "Je nach Umfang 4 bis 10 Wochen – mit klaren Meilensteinen und transparenter Planung über Basecamp."
          },
          {
            question: "Arbeitet ihr mit WordPress oder ohne CMS?",
            answer: "Beides – je nach Ziel. Für maximale Kontrolle programmieren wir direkt mit HTML, CSS, JS. Für redaktionelle Flexibilität setzen wir auf WordPress."
          },
          {
            question: "Bietet ihr auch SEO-Optimierung an?",
            answer: "Ja, von Keyword-Recherche über technische Onpage-Optimierung bis zu lokalem SEO in Mainz. Als Werbeagentur verstehen wir, dass Sichtbarkeit der Schlüssel zum Erfolg ist."
          },
          {
            question: "Wie läuft die Zusammenarbeit ab?",
            answer: "Klar strukturiert über Basecamp – mit festem Zeitplan, klarer Kommunikation und direkter Ansprechpartnerin: dem Gründer."
          },
          {
            question: "Was kostet eine Website bei euch?",
            answer: "Unsere Projekte starten bei ca. 5.000 €. Final hängt der Preis vom Umfang, CMS-Wunsch und Funktionsumfang ab."
          },
          {
            question: "Kann ich auch Google Ads mit euch umsetzen?",
            answer: "Ja. Wir bieten professionelle Kampagnensteuerung über Google Ads – inklusive Landingpages und Conversion-Tracking."
          },
          {
            question: "Arbeitet ihr auch mit externen Designern oder Partnern?",
            answer: "Nein – alle Leistungen entstehen intern, abgestimmt im Team, gesteuert vom Gründer."
          },
          {
            question: "Was bringt mir eine Zusammenarbeit mit einer lokalen Werbeagentur in Mainz?",
            answer: "Kurze Wege, regionale Marktkenntnis und ein Team, das wirklich versteht, was Sie brauchen. Eine Werbeagentur vor Ort in Mainz ermöglicht persönlichen Kontakt, besseres Verständnis des lokalen Marktes und schnellere Reaktionszeiten."
          },
          {
            question: "Wie sorgt ooliv als Werbeagentur in Mainz für lokale Sichtbarkeit bei Google?",
            answer: "Wir kombinieren lokale Keyword-Strategien mit technischer Optimierung und hochwertigen Inhalten – damit Sie dort gefunden werden, wo Ihre Zielgruppe sucht."
          }
        ]}
      />
      <CTA 
        title="Bereit, mit einer echten Werbeagentur in Mainz durchzustarten?"
        subtitle="Lassen Sie uns in einem kostenfreien Gespräch besprechen, wie wir Ihre Website zum Wachstumstreiber machen."
        primaryCta="Projekt starten"
        secondaryCta="Unsere Arbeiten ansehen"
      />
    </PageLayout>
  );
};

export default GermanIndex;
