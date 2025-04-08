import React, { useEffect } from 'react';
import PageLayout from "@/components/PageLayout";
import DeutscherHero from "@/components/de/DeutscherHero";
import AIChallengeDE from "@/components/de/AIChallengeDE";
import AISolutionDE from "@/components/de/AISolutionDE";
import AIProcessDE from "@/components/de/AIProcessDE";
import PricingCards from "@/components/PricingCards";
import ClientLogos from "@/components/ClientLogos";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const GermanAITech = () => {
  const { setLanguage } = useLanguage();

  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  useEffect(() => {
    document.title = "KI-Agentur Mainz: KI-Lösungen & KI-Beratung | ooliv";
  }, []);

  const pricingCardsData = [
    {
      title: "KI-Strategie-Workshop",
      price: "ab 2.500 €",
      features: [
        "Analyse Ihrer Geschäftsprozesse",
        "Identifizierung von KI-Anwendungsfällen",
        "Entwicklung einer KI-Roadmap",
        "Priorisierung der nächsten Schritte"
      ],
      buttonText: "Strategiegespräch vereinbaren",
      buttonLink: "/de/kontakt"
    },
    {
      title: "KI-Prototyp-Entwicklung",
      price: "ab 7.500 €",
      features: [
        "Konzeption und Design des Prototyps",
        "Entwicklung eines funktionsfähigen Prototyps",
        "Test und Optimierung des Prototyps",
        "Präsentation der Ergebnisse"
      ],
      buttonText: "Prototyp entwickeln lassen",
      buttonLink: "/de/kontakt"
    },
    {
      title: "KI-Implementierung",
      price: "Individuell",
      features: [
        "Integration von KI-Lösungen in Ihre bestehende IT-Infrastruktur",
        "Schulung Ihrer Mitarbeiter",
        "Laufende Wartung und Support",
        "Skalierung Ihrer KI-Lösungen"
      ],
      buttonText: "KI-Lösung implementieren",
      buttonLink: "/de/kontakt"
    }
  ];

  const simplifiedFaqs = [
    {
      question: "Was sind die Vorteile von KI für mein Unternehmen?",
      answer: "KI kann Ihnen helfen, Ihre Geschäftsprozesse zu automatisieren, Ihre Entscheidungen zu verbessern und neue Produkte und Dienstleistungen zu entwickeln. KI kann Ihnen auch helfen, Ihre Kunden besser zu verstehen und Ihre Marketingkampagnen zu optimieren."
    },
    {
      question: "Welche KI-Lösungen bietet ooliv an?",
      answer: "ooliv bietet eine breite Palette von KI-Lösungen an, darunter KI-Strategieberatung, KI-Prototyp-Entwicklung und KI-Implementierung. Wir helfen Ihnen, die richtigen KI-Lösungen für Ihre Bedürfnisse zu finden und diese erfolgreich in Ihrem Unternehmen einzusetzen."
    },
    {
      question: "Wie viel kostet eine KI-Lösung?",
      answer: "Die Kosten für eine KI-Lösung hängen von Ihren individuellen Bedürfnissen ab. Wir bieten Ihnen gerne ein individuelles Angebot an."
    },
    {
      question: "Wie lange dauert die Implementierung einer KI-Lösung?",
      answer: "Die Dauer der Implementierung einer KI-Lösung hängt von der Komplexität der Lösung ab. Wir arbeiten eng mit Ihnen zusammen, um sicherzustellen, dass die Implementierung so schnell und reibungslos wie möglich verläuft."
    },
    {
      question: "Wie kann ich mit ooliv zusammenarbeiten?",
      answer: "Sie können uns gerne kontaktieren, um ein unverbindliches Beratungsgespräch zu vereinbaren. Wir freuen uns darauf, mehr über Ihre Bedürfnisse zu erfahren und Ihnen zu zeigen, wie wir Ihnen helfen können."
    }
  ];

  return (
    <>
      <Helmet>
        <title>KI-Agentur Mainz: KI-Lösungen & KI-Beratung | ooliv</title>
        <meta
          name="description"
          content="Entdecken Sie die Möglichkeiten von KI mit ooliv, Ihrer KI-Agentur in Mainz. Wir bieten KI-Strategieberatung, KI-Prototyp-Entwicklung und KI-Implementierung."
        />
      </Helmet>
      <PageLayout className="overflow-x-hidden">
        <DeutscherHero
          title="KI-Agentur Mainz: KI-Lösungen & KI-Beratung"
          subtitle="Wir helfen Ihnen, die Möglichkeiten von KI für Ihr Unternehmen zu nutzen."
          image="/ai-hero.webp"
          imageAlt="KI-Agentur Mainz"
        />

        <AIChallengeDE />

        <AISolutionDE />

        <AIProcessDE />

        <PricingCards
          title="KI-Lösungen für Ihr Unternehmen"
          subtitle="Wir bieten Ihnen eine breite Palette von KI-Lösungen an, die auf Ihre individuellen Bedürfnisse zugeschnitten sind."
          cardsData={pricingCardsData}
        />

        <ClientLogos />

        <FAQ
          customFaqs={simplifiedFaqs}
          customTitle="Häufig gestellte Fragen zu KI"
          customCtaText="Weitere Fragen? Kontaktieren Sie uns"
        />

        <CTA
          title="Bereit, KI für Ihr Unternehmen zu nutzen?"
          subtitle="Lassen Sie uns besprechen, wie unser Team bei der Implementierung von KI-Lösungen helfen kann, die echte Ergebnisse liefern."
          primaryCta="Starten Sie Ihr KI-Projekt"
        >
          <p className="mt-8 text-sm text-brand-text/80 font-semibold">
            KI-Strategien, die messbar und menschlich sind • 100+ erfolgreiche Projekte umgesetzt • Vertrauenspartner führender Unternehmen
          </p>
          <div className="mt-4 flex justify-center">
            <Link to="/case-studies" className="text-brand-text hover:text-white underline">
              Fallstudien ansehen
            </Link>
          </div>
        </CTA>
      </PageLayout>
    </>
  );
};

export default GermanAITech;
