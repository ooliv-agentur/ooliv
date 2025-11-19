import React from 'react';
import LandingPageLayout from '@/components/landing-page/LandingPageLayout';
import LPHero from '@/components/landing-page/LPHero';
import LPSocialProof from '@/components/landing-page/LPSocialProof';
import LPProblemSolution from '@/components/landing-page/LPProblemSolution';
import LPHowItWorks from '@/components/landing-page/LPHowItWorks';
import LPAboutUli from '@/components/landing-page/LPAboutUli';
import LPFAQ from '@/components/landing-page/LPFAQ';
import LPFinalCTA from '@/components/landing-page/LPFinalCTA';

const SEOOptimierungLanding = () => {
  const testimonial = {
    quote: "Innerhalb von 6 Monaten haben wir unseren Organic Traffic verdreifacht. Die Rankings für unsere wichtigsten Keywords sind deutlich gestiegen und wir bekommen endlich qualifizierte Anfragen über Google.",
    author: "Jennifer Klein",
    role: "Head of Marketing",
    company: "Enterprise Solutions AG"
  };

  const problems = [
    "Ihre Website wird bei Google nicht gefunden und Traffic bleibt aus?",
    "Ihre Konkurrenz rankt für wichtige Keywords vor Ihnen?",
    "Sie investieren in SEO, sehen aber keine messbaren Ergebnisse?",
    "Ihre Website hat technische SEO-Probleme die Sie nicht identifizieren können?"
  ];

  const solutions = [
    "Technisches SEO-Audit deckt alle Performance- und Crawling-Probleme auf",
    "Strategische Keyword-Recherche zeigt Ihnen die lukrativsten Ranking-Chancen",
    "Content-Optimierung bringt bestehende Seiten auf Top-Positionen",
    "Laufende Optimierung und Monitoring für kontinuierliches Wachstum"
  ];

  const steps = [
    {
      title: "SEO-Audit & Strategie",
      description: "Umfassende Analyse Ihrer Website, Wettbewerb und Keyword-Potenziale. Sie erhalten eine priorisierte SEO-Roadmap mit Quick Wins und langfristigen Maßnahmen."
    },
    {
      title: "Technische Optimierung",
      description: "Wir beheben alle technischen Issues: Ladezeiten, Mobile-Optimierung, Crawlability, strukturierte Daten. Inklusive detailliertem Reporting und Monitoring-Setup."
    },
    {
      title: "Content & Link-Building",
      description: "Strategische Content-Optimierung für Ihre wichtigsten Keywords, neue SEO-Landingpages und nachhaltiger Linkaufbau. Mit monatlichem Performance-Reporting."
    }
  ];

  const faqs = [
    {
      question: "Wie lange dauert es bis ich Ergebnisse sehe?",
      answer: "Erste technische Verbesserungen wirken sofort. Für spürbare Ranking-Verbesserungen rechnen Sie mit 3-6 Monaten. SEO ist ein Marathon, kein Sprint – aber einer der sich langfristig am meisten lohnt. Wir tracken kontinuierlich Fortschritt und passen die Strategie an."
    },
    {
      question: "Was ist wichtiger: technisches SEO oder Content?",
      answer: "Beides ist wichtig. Ohne technische Basis kann auch der beste Content nicht ranken. Ohne guten Content wird Google Sie nicht Top-Positionen geben. Wir starten mit dem technischen Fundament und bauen dann die Content-Strategie auf."
    },
    {
      question: "Garantieren Sie bestimmte Rankings?",
      answer: "Seriöse SEO-Arbeit garantiert keine spezifischen Positionen – Google's Algorithmus ist komplex und ändert sich ständig. Ich garantiere aber: transparente Arbeit, messbare Verbesserungen in Traffic und Sichtbarkeit, und ROI-fokussierte Strategie."
    },
    {
      question: "Was kostet professionelle SEO-Optimierung?",
      answer: "Einmaliges SEO-Audit & Strategie: 2.000-4.000€. Laufende SEO-Betreuung: 1.500-3.000€/Monat je nach Umfang. Für lokale oder sehr nischige Businesses können wir auch mit kleineren Budgets starten."
    },
    {
      question: "Arbeiten Sie auch mit bestehenden Marketing-Teams?",
      answer: "Ja, sehr gerne. Ich kann als SEO-Experte Ihr internes Team unterstützen, externe Dienstleister koordinieren oder die komplette SEO-Verantwortung übernehmen. Flexibel nach Ihren Bedürfnissen."
    }
  ];

  return (
    <LandingPageLayout
      title="SEO-Optimierung für B2B-Unternehmen | ooliv"
      description="Professionelle SEO-Optimierung für mehr Organic Traffic und qualifizierte Leads. Von technischem SEO bis Content-Strategie. Messbare Ergebnisse. Jetzt starten!"
      canonicalUrl="https://ooliv.de/lp/seo-optimierung"
      keywords="SEO-Optimierung, Suchmaschinenoptimierung, Google Rankings, Organic Traffic, B2B SEO"
    >
      <LPHero
        headline="SEO-Optimierung, die Traffic und Leads bringt – nicht nur Rankings"
        subheadline="Werden Sie bei Google gefunden von Kunden, die aktiv nach Ihren Lösungen suchen. Mit strategischem SEO, technischer Exzellenz und Content der konvertiert."
        benefits={["Mehr Organic Traffic", "Bessere Rankings", "ROI-fokussiert"]}
      />

      <LPSocialProof testimonial={testimonial} />

      <LPProblemSolution problems={problems} solutions={solutions} />

      <LPHowItWorks steps={steps} />

      <LPAboutUli />

      <LPFAQ faqs={faqs} />

      <LPFinalCTA
        headline="Bereit für mehr Sichtbarkeit bei Google?"
        subheadline="Lassen Sie uns in einem kostenlosen SEO-Audit besprechen, welche Quick Wins Ihre Rankings sofort verbessern können."
      />
    </LandingPageLayout>
  );
};

export default SEOOptimierungLanding;
