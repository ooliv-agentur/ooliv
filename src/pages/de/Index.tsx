
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
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const GermanIndex = () => {
  const { setLanguage } = useLanguage();
  
  // Set language to German when this page is loaded
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  return (
    <PageLayout className="overflow-x-hidden">
      <Hero 
        title="ooliv Werbeagentur Mainz – Hochleistungs-Websites für SEO, Konversionen & Wachstum"
        subtitle="Bei ooliv erstellen wir Websites, die besser ranken, mehr konvertieren und messbaren Geschäftserfolg bringen."
        description="Wir erstellen leistungsstarke Websites, die Leads generieren, besser ranken und Besucher in Kunden verwandeln. Ob Relaunch oder neue Website, wir sorgen dafür, dass Ihre Website messbaren Geschäftserfolg bringt."
        startProjectText="Projekt starten"
        seeWorkText="Unsere Arbeiten ansehen"
      />
      <AboutSection 
        title="Über ooliv"
        description="Wir sind eine spezialisierte Digitalagentur in Mainz, die seit 2008 hochwertige Websites und digitale Lösungen für anspruchsvolle Kunden entwickelt. Unser Team verbindet strategisches Denken mit technischer Expertise und kreativem Flair."
        values={[
          "Strategie vor Design",
          "Qualität vor Quantität",
          "Ergebnisse vor Ästhetik"
        ]}
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
        title="Ihre Website sollte für Sie arbeiten – nicht gegen Sie."
        description="Viele Unternehmen kämpfen mit Websites, die nicht performant sind – sei es, weil sie veraltet, zu langsam sind oder noch gar nicht existieren. Eine Website, die keine Leads generiert, kein Vertrauen aufbaut oder bei Google nicht gut rankt, ist eine verpasste Chance."
        challenges={[
          "Veraltetes Design, das nicht mehr den aktuellen Standards entspricht",
          "Langsame Ladezeiten, die Besucher frustrieren und zur Abwanderung führen",
          "Mangelnde Mobile-Optimierung trotz steigender mobiler Nutzung",
          "Fehlende Conversion-Elemente, die Besucher zu Kunden machen",
          "Schlechtes Ranking bei Google durch technische SEO-Probleme",
          "Fehlende Strategie, die Ihre Geschäftsziele unterstützt"
        ]}
      />
      <div className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-brand-heading">Sehen Sie den Unterschied einer strategischen Website</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
            Ziehen Sie den Schieberegler, um veraltete Designs mit modernen, konversionsorientierten Websites zu vergleichen, die echte Geschäftsergebnisse liefern.
          </p>
          <BeforeAfterSlider />
        </div>
      </div>
      <Solution 
        title="Wir erstellen Websites, die Ihr Unternehmen voranbringen—"
        subtitle="Mit Strategie, Expertise & intelligenter Technologie"
        description="Ob Sie ein neues Unternehmen gründen oder eine veraltete Website aktualisieren, unser Expertenteam kombiniert strategisches Denken, nutzerorientiertes Design und modernste Tools, um leistungsstarke digitale Erlebnisse zu schaffen. KI verbessert die Effizienz – aber Kreativität, Erfahrung und datengestützte Entscheidungen stehen im Mittelpunkt unseres Ansatzes."
        solutions={[
          "Strategiegeleitete Website-Entwicklung, die Ihre Geschäftsziele unterstützt",
          "Nutzerorientiertes Design, das Besucher zu Kunden konvertiert",
          "Technisch optimierte Websites für schnelle Ladezeiten und SEO-Erfolg",
          "Maßgeschneiderte Content-Strategien, die Ihre Zielgruppe ansprechen",
          "Kontinuierliche Analyse und Optimierung für messbaren Erfolg"
        ]}
        learnMoreText="Mehr über unseren Prozess erfahren"
      />
      <TeamTeaser />
      <ClientLogos 
        title="Vertrauen Sie uns, wie diese Unternehmen"
        description="Wir sind stolz auf unsere langjährigen Kundenbeziehungen mit namhaften Unternehmen verschiedener Branchen."
      />
      <Testimonials 
        title="Wir erstellen Websites, die"
        subtitle="echte Geschäftsergebnisse liefern."
        testimonials={[
          {
            quote: "ooliv hat uns nicht nur eine neue Website geliefert, sondern einen echten Wachstumsmotor für unser Geschäft. Die Conversion-Rate ist um 40% gestiegen.",
            author: "Michael Schmidt",
            role: "Geschäftsführer, TechSolutions GmbH"
          },
          {
            quote: "Endlich eine Agentur, die nicht nur über Strategie spricht, sondern diese auch liefert. Unsere neue Website generiert dreimal so viele qualifizierte Leads wie die alte.",
            author: "Sabine Müller",
            role: "Marketing Direktorin, Innovate AG"
          },
          {
            quote: "Die Zusammenarbeit mit ooliv war unkompliziert und effizient. Das Ergebnis ist eine Website, die perfekt zu unserem Unternehmen passt und unsere Vertriebsziele unterstützt.",
            author: "Thomas Weber",
            role: "Vertriebsleiter, ProService GmbH"
          }
        ]}
      />
      <FAQ 
        title="Häufig gestellte Fragen"
        faqs={[
          {
            question: "Wie läuft ein typisches Website-Projekt bei der Werbeagentur ooliv in Mainz ab?",
            answer: "Unsere Projekte beginnen mit einem Strategiegespräch, gefolgt von einer Konzeptphase. Nach Ihrer Freigabe gestalten und entwickeln wir die Website schrittweise mit regelmäßigem Feedback. Als Werbeagentur in Mainz legen wir Wert auf transparente Prozesse und klare Kommunikation vom ersten Gespräch bis zum Launch."
          },
          {
            question: "Wie lange dauert die Entwicklung einer Website mit eurer Werbeagentur?",
            answer: "Die meisten Projekte werden innerhalb von 8-12 Wochen abgeschlossen, abhängig vom Umfang und der Komplexität. Als erfahrene Werbeagentur in Mainz arbeiten wir effizient und strukturiert, um Ihre Website zeitnah zu launchen."
          },
          {
            question: "Was kostet eine Website von der Werbeagentur ooliv?",
            answer: "Die Investition hängt von Ihren spezifischen Anforderungen ab. Unsere Projekte beginnen typischerweise bei 8.000 € für kleinere Websites und können je nach Funktionsumfang und Komplexität variieren. Als seriöse Werbeagentur in Mainz bieten wir faire, transparente Preise ohne versteckte Kosten."
          },
          {
            question: "Was unterscheidet ooliv von anderen Werbeagenturen in Mainz?",
            answer: "Anders als viele Werbeagenturen arbeiten Sie bei uns direkt mit dem Gründer zusammen, während ein spezialisiertes Team im Hintergrund für exzellente Umsetzung sorgt. Wir kombinieren strategisches Denken mit technischer Expertise und setzen KI-Tools sinnvoll ein, um bessere Ergebnisse zu erzielen."
          },
          {
            question: "Bietet die Werbeagentur ooliv auch laufende Betreuung nach dem Launch?",
            answer: "Ja, wir bieten verschiedene Wartungs- und Betreuungspakete an, um Ihre Website aktuell, sicher und leistungsstark zu halten. Als zuverlässige Werbeagentur in Mainz stehen wir für langfristige Partnerschaften und kontinuierliche Unterstützung."
          },
          {
            question: "Arbeitet eure Werbeagentur auch mit bestehenden Websites?",
            answer: "Absolut. Wir übernehmen Relaunches, Redesigns und Optimierungen bestehender Websites. Als erfahrene Werbeagentur in Mainz analysieren wir Ihre aktuelle Präsenz und entwickeln maßgeschneiderte Lösungen, um Ihre Online-Ziele zu erreichen."
          }
        ]}
      />
      <CTA 
        title="Bereit, Ihre digitale Präsenz zu transformieren?"
        subtitle="Lassen Sie uns besprechen, wie unser Team Ihrem Unternehmen helfen kann, seine Online-Ziele zu erreichen."
        primaryCta="Projekt starten"
        secondaryCta="Unsere Arbeiten ansehen"
      />
    </PageLayout>
  );
};

export default GermanIndex;
