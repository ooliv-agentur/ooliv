
import React from 'react';
import FAQ from '@/components/FAQ';

const StrategieFAQ = () => {
  const strategieFaqs = [
    {
      question: "Für welche Unternehmen ist das geeignet?",
      answer: "Ich arbeite hauptsächlich mit B2B-Unternehmen aus dem DACH-Raum, die ihre digitale Präsenz strategisch weiterentwickeln wollen. Typischerweise Geschäftsführer oder Marketing-Verantwortliche von Mittelständlern, Tech-Startups oder Dienstleistern, die merken, dass ihre aktuelle digitale Strategie nicht die gewünschten Ergebnisse bringt."
    },
    {
      question: "Wie läuft eine Zusammenarbeit ab?",
      answer: "Wir starten mit einem kostenlosen Erstgespräch (30 Minuten), in dem wir Ihre Situation analysieren. Danach bekommen Sie eine ehrliche Einschätzung und einen konkreten Vorschlag, wie wir vorgehen können. Je nach Bedarf arbeiten wir in Workshop-Format, als längerfristiger Sparringspartner oder mit konkreter Umsetzung."
    },
    {
      question: "Was brauchen Sie von mir für den Start?",
      answer: "Vor allem Ihre Zeit und Offenheit. Für ein effektives Erstgespräch hilft es, wenn Sie Ihre aktuellen Herausforderungen grob umreißen können: Was funktioniert nicht? Wo sehen Sie Potenzial? Konkrete Zahlen (Website-Besucher, Anfragen, etc.) sind hilfreich, aber kein Muss. Wichtiger ist, dass Sie bereit sind, ehrlich über Ihre Situation zu sprechen."
    },
    {
      question: "Arbeiten Sie nur beratend oder setzen Sie auch um?",
      answer: "Beides! Ich kann rein strategisch beraten und Ihnen klare Handlungsempfehlungen geben – oder die komplette Umsetzung koordinieren: Von Design über Entwicklung bis zum Launch. Sie entscheiden, wie viel Unterstützung Sie brauchen."
    },
    {
      question: "Wie messen wir den Erfolg?",
      answer: "Mit klaren, nachvollziehbaren Kennzahlen: Mehr qualifizierte Anfragen über die Website, bessere Lead-Qualität, höhere Conversion-Raten, schnellere Entscheidungsprozesse. Keine Vanity-Metriken – wir tracken, was für Ihr Business wirklich zählt. Typische Verbesserungen liegen bei +180% Lead-Qualität und +240% Conversion-Rate."
    },
    {
      question: "Arbeiten Sie nur remote oder auch vor Ort?",
      answer: "Beides ist möglich. Die meisten Projekte laufen remote ab – das funktioniert hervorragend und spart allen Zeit. Für strategische Workshops oder wichtige Kickoffs komme ich aber auch gerne zu Ihnen ins Büro, besonders in der DACH-Region (Mainz, Frankfurt, deutschlandweit, Schweiz). Wir finden gemeinsam die beste Arbeitsweise."
    },
    {
      question: "Was unterscheidet Sie von anderen Agenturen?",
      answer: "Sie arbeiten direkt mit mir – einem erfahrenen Digital-Berater mit 16+ Jahren Praxis, nicht mit Junior-Mitarbeitern. Ich sage Ihnen offen, wenn etwas keinen Sinn macht, statt einfach nur zu verkaufen. Sie bekommen messbare Strategien statt schöner PowerPoints und maßgeschneiderte Ansätze statt Standard-Agentur-Lösungen."
    },
    {
      question: "Was kostet eine Zusammenarbeit?",
      answer: "Das hängt vom Umfang ab. Ein strategisches Erstgespräch ist kostenlos. Strategie-Workshops starten im mittleren vierstelligen Bereich, komplette Transformationsprojekte im fünfstelligen Bereich. Sie erhalten vorab ein transparentes Angebot mit klaren Leistungen – keine versteckten Kosten."
    }
  ];

  return (
    <FAQ 
      customFaqs={strategieFaqs}
      customTitle="Häufig gestellte Fragen"
      customSubtitle="Hier finden Sie Antworten auf die wichtigsten Fragen zu meiner Arbeitsweise und strategischen Digitalberatung."
      customCtaText="Weitere Fragen? Lassen Sie uns sprechen"
      useLeadForm={true}
    />
  );
};

export default StrategieFAQ;
