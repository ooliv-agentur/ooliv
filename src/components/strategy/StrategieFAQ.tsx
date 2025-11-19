
import React from 'react';
import FAQ from '@/components/FAQ';

const StrategieFAQ = () => {
  const strategieFaqs = [
    {
      question: "Was bedeutet Strategic Discovery konkret?",
      answer: "Strategic Discovery ist der strukturierte Prozess zur Identifikation strategischer Opportunities. Durch Stakeholder Interviews, Competitive Analysis und Value Hypothesis Development schaffen wir strategische Klarheit – mit validiertem Business Case und klarer Roadmap."
    },
    {
      question: "Wie unterscheidet sich UX Strategy von normalem Design?",
      answer: "UX Strategy ist mehr als Design – es ist die strategische Übersetzung von User Needs in Business Value. Durch User Research, Journey Mapping und Conversion-fokussierte Konzepte schaffen wir messbare Business Outcomes: +180% Lead Quality, +240% Conversion."
    },
    {
      question: "Was beinhaltet Implementation Leadership?",
      answer: "Als Implementation Leader koordiniere ich internationale Teams (Design, Development, Content), sichere Qualität durch Requirements Engineering und QA, und garantiere messbare Outcomes. Von Sprint Planning bis Performance Optimization – on-time, on-budget."
    },
    {
      question: "Für welche Unternehmen ist diese Strategic Advisory relevant?",
      answer: "Für B2B-Unternehmen im DACH-Raum, die digitale Transformation strategisch angehen wollen – mit C-Level Involvement, Budget €50k+, und dem Anspruch auf messbare Business Outcomes statt nur 'schöne Websites'."
    },
    {
      question: "Wie lange dauert eine Strategic Discovery Phase?",
      answer: "Je nach Scope 3-6 Wochen. Einfache Discovery-Workshops benötigen 3-4 Wochen, komplexere Transformationsprojekte mit mehreren Stakeholdern 5-6 Wochen. Sie erhalten einen klaren Zeitplan als Teil des Proposals."
    },
    {
      question: "Was kostet Strategic Discovery und Advisory?",
      answer: "Strategic Discovery startet bei €15.000-25.000 für umfassende Stakeholder Interviews, Competitive Analysis und Strategic Roadmap. End-to-End Transformation Projekte werden individuell kalkuliert. Strategic Retainer €8.000-15.000/Monat für kontinuierliche Advisory."
    },
    {
      question: "Arbeiten Sie nur strategisch oder auch in der Umsetzung?",
      answer: "Beides! Als Implementation Leader übernehme ich nicht nur Strategic Discovery und UX Strategy, sondern koordiniere auch die komplette Umsetzung mit internationalen Teams – von der ersten User Story bis zum Launch."
    },
    {
      question: "Wie messen Sie den Erfolg der Digital Transformation?",
      answer: "Mit klaren KPI-Frameworks: Lead Quality, Conversion Rates, Time-to-Market, Performance Metrics. Keine Vanity Metrics – wir definieren Business Outcomes und tracken sie kontinuierlich. Beispiel: +180% Lead Quality, +240% Traffic für reale Kunden."
    },
    {
      question: "Was unterscheidet Ihre Strategic Advisory von klassischen Agenturen?",
      answer: "Kein Agentur-Overhead, keine Junior-Berater. Sie sprechen direkt mit dem Digital Strategy Lead mit 16+ Jahren Erfahrung. Fokus auf messbare Business Outcomes statt nur Deliverables. Strategic Thinking + Hands-on Implementation."
    },
    {
      question: "Können Sie auch bei laufenden Projekten als Strategic Advisor einsteigen?",
      answer: "Ja! Ich unterstütze als Strategic Advisor bei Rescue-Projekten, optimiere bestehende Roadmaps, oder übernehme Implementation Leadership für Teams, die strategische Führung brauchen. Quick Assessment + Strategic Recommendations innerhalb 2 Wochen."
    }
  ];

  return (
    <FAQ 
      customFaqs={strategieFaqs}
      customTitle="Häufig gestellte Fragen zu Digital Strategy & Transformation"
      customSubtitle="Hier finden Sie Antworten auf die wichtigsten Fragen rund um Strategic Discovery, UX Strategy und Implementation Leadership."
      customCtaText="Weitere Fragen? Sprechen Sie mit uns"
      useLeadForm={true}
    />
  );
};

export default StrategieFAQ;
