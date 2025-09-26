
import React from 'react';
import FAQ from '@/components/FAQ';

const StrategieFAQ = () => {
  const strategieFaqs = [
    {
      question: "Was ist ein Webkonzept?",
      answer: "Ein Webkonzept beschreibt den Plan für Ihre Website. Es enthält die Zielgruppenbestimmung, die Sitemap, die Inhaltsplanung und erste Seitenentwürfe – alles, was Ihre Website erfolgreich macht."
    },
    {
      question: "Warum ist ein Webkonzept so wichtig?",
      answer: "Ohne Webkonzept fehlt Ihrer Website die Basis. Nur mit einer durchdachten Struktur und Strategie kann Ihre Website später erfolgreich Leads generieren und Ihre Marke stärken."
    },
    {
      question: "Wie entwickelt ooliv ein Webkonzept für mein Unternehmen?",
      answer: "Wir starten mit einer Analyse Ihrer Zielgruppe und des Wettbewerbs. Daraus entwickeln wir eine Sitemap, Inhaltsplanung und Seitenentwürfe. So entsteht ein individuelles Webkonzept, das genau zu Ihrem Unternehmen passt."
    },
    {
      question: "Was genau ist ein strategisches Webkonzept?",
      answer: "Ein strategisches Webkonzept ist die durchdachte Planung Ihrer Website vor der Umsetzung. Es umfasst Zielgruppendefinition, Seitenaufbau, Inhaltsplanung und wie Sie mehr Anfragen generieren. So entstehen Websites, die wirklich funktionieren und Ihre Geschäftsziele erreichen."
    },
    {
      question: "Warum brauche ich eine Strategieberatung für meine Website?",
      answer: "Ohne Strategie entstehen Websites, die zwar schön aussehen, aber nicht konvertieren. Eine professionelle Strategieberatung sorgt für klare Zielgruppendefinition, optimierte Nutzerführung und messbare Erfolge. Das spart langfristig Zeit und Geld."
    },
    {
      question: "Wie läuft die Strategieentwicklung bei ooliv ab?",
      answer: "Wir arbeiten in strukturierten Workshops: Analyse Ihrer Ziele und Zielgruppe, Entwicklung der Informationsarchitektur, Content-Planung und UX-Konzeption. Sie sind aktiv eingebunden und erhalten am Ende ein detailliertes Strategiedokument."
    },
    {
      question: "Was kostet eine professionelle Strategieberatung?",
      answer: "Die Kosten hängen vom Projektumfang ab. Eine Basis-Strategieberatung für kleinere Websites beginnt bei etwa 2.500€. Für umfangreichere B2B-Projekte oder E-Commerce-Strategien kalkulieren wir individuell. Sie erhalten immer ein transparentes Angebot."
    },
    {
      question: "Wie lange dauert die Strategieentwicklung?",
      answer: "Je nach Komplexität 2-6 Wochen. Einfache Unternehmenswebsites benötigen meist 2-3 Wochen, komplexere Projekte mit mehreren Stakeholdern entsprechend länger. Wir erstellen einen klaren Zeitplan als Teil unseres Angebots."
    },
    {
      question: "Können Sie auch bestehende Websites strategisch optimieren?",
      answer: "Absolut! Wir analysieren Ihre aktuelle Website, identifizieren Schwachstellen und entwickeln eine Optimierungsstrategie. Oft lassen sich mit gezielten strategischen Änderungen deutliche Verbesserungen bei Conversion und Nutzererfahrung erreichen."
    },
    {
      question: "Welche Branchen betreuen Sie in der Strategieberatung?",
      answer: "Wir entwickeln Strategien für alle Branchen: B2B-Unternehmen, E-Commerce, Dienstleister, Gesundheitswesen, Start-ups und mehr. Jede Branche hat ihre Besonderheiten – unsere Strategien berücksichtigen das von Anfang an."
    },
    {
      question: "Übernehmen Sie auch die Umsetzung der Strategie?",
      answer: "Ja, das ist unser Vorteil! Wir entwickeln nicht nur die Strategie, sondern setzen sie auch um: Webdesign, Entwicklung, Content-Erstellung und SEO-Optimierung. So können Sie sicher sein, dass die Strategie auch wirklich umgesetzt wird."
    }
  ];

  return (
    <FAQ 
      customFaqs={strategieFaqs}
      customTitle="Häufig gestellte Fragen"
      customSubtitle="Hier finden Sie Antworten auf die wichtigsten Fragen rund um strategische Webkonzepte."
      customCtaText="Weitere Fragen? Sprechen Sie mit uns"
      useLeadForm={true}
    />
  );
};

export default StrategieFAQ;
