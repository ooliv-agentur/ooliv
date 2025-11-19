
import React from 'react';
import FAQ from '@/components/FAQ';

const StrategieFAQ = () => {
  const strategieFaqs = [
    {
      question: "Was kostet eine strategische Digitalberatung?",
      answer: "Ein Strategie-Workshop mit Konzept startet bei €15.000–25.000. Umfassende Transformationsprojekte mit Umsetzung liegen bei €30.000–80.000. Für kontinuierliche Begleitung bieten wir monatliche Retainer ab €8.000/Monat. Sie erhalten vorab ein transparentes Angebot mit klaren Leistungen."
    },
    {
      question: "Wie lange dauert so eine strategische Begleitung?",
      answer: "Die erste Strategie-Phase dauert 3–6 Wochen: Wir analysieren Ihre Situation, entwickeln ein Konzept und definieren konkrete nächste Schritte. Bei kompletten Projekten planen wir 3–5 Monate ein. Sie erhalten einen detaillierten Zeitplan vor Projektstart."
    },
    {
      question: "Was genau bekomme ich am Ende?",
      answer: "Keine abstrakten PowerPoint-Präsentationen, sondern: Klare Handlungsempfehlungen, eine priorisierte Roadmap, konkrete Maßnahmen mit Zeitplan und Budget, plus direkter Austausch mit mir. Optional übernehme ich auch die komplette Umsetzung mit meinem Team."
    },
    {
      question: "Lohnt sich das für mein Unternehmen?",
      answer: "Wenn Ihre Website keine Anfragen bringt, Sie vor einer digitalen Neuausrichtung stehen, oder ein wichtiges Projekt sichern wollen – dann ja. Meine Kunden berichten von durchschnittlich +180% mehr qualifizierten Anfragen nach der Umsetzung unserer Empfehlungen."
    },
    {
      question: "Arbeiten Sie nur beratend oder setzen Sie auch um?",
      answer: "Beides! Ich kann rein strategisch beraten – oder die komplette Umsetzung mit koordinieren: Von Design über Entwicklung bis zum Launch. Sie entscheiden, wie viel Unterstützung Sie brauchen."
    },
    {
      question: "Was unterscheidet Sie von klassischen Agenturen?",
      answer: "Sie arbeiten direkt mit mir – einem erfahrenen Digital-Berater mit 16+ Jahren Erfahrung. Keine Junior-Berater, keine Agentur-Hierarchien, keine Bullshit-Bingo. Dafür ehrliche Beratung, klare Ansagen und messbare Ergebnisse."
    },
    {
      question: "Können Sie auch laufende Projekte retten?",
      answer: "Ja! Ich helfe regelmäßig bei Projekten, die feststecken oder in die falsche Richtung laufen. Nach einem Quick-Check (1–2 Wochen) gebe ich Ihnen klare Empfehlungen – und unterstütze bei Bedarf bei der Korrektur."
    },
    {
      question: "Wie messen wir den Erfolg?",
      answer: "Mit klaren, nachvollziehbaren Kennzahlen: Mehr Anfragen über die Website, bessere Qualität der Leads, höhere Conversion-Raten, schnellere Entscheidungsprozesse. Keine Vanity-Metriken – wir tracken, was für Ihr Business wirklich zählt."
    },
    {
      question: "Brauchen wir regelmäßige Meetings?",
      answer: "In der Strategie-Phase: Ja, wir sprechen wöchentlich. Bei laufender Betreuung reichen oft 2–4 Meetings pro Monat. Ich bin aber jederzeit per E-Mail oder Slack erreichbar – kurze Abstimmungen gehen schnell und unkompliziert."
    },
    {
      question: "Was passiert nach dem Projekt?",
      answer: "Das entscheiden Sie: Entweder übergebe ich alles vollständig an Ihr Team – oder wir vereinbaren eine kontinuierliche Begleitung. Viele Kunden nutzen einen monatlichen Retainer für laufende Optimierung und strategische Beratung."
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
