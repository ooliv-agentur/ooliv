import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getSectionClasses, getContainerClasses } from '@/styles/spacing';

const AboutUsFAQNew = () => {
  const faqs = [
    {
      question: "Wie läuft ein Projektstart ab?",
      answer: "Jedes Projekt beginnt mit einem intensiven Kick-off: Ziele definieren, Zielgruppen analysieren, Wettbewerber verstehen, technische Anforderungen klären. Daraus entwickeln wir eine klare Roadmap mit Meilensteinen, KPIs und Zeitplan. Sie wissen von Anfang an, was wann passiert."
    },
    {
      question: "Wer ist mein Ansprechpartner?",
      answer: "Sie arbeiten direkt mit dem CEO und Gründer Uli Schönleber zusammen — unterstützt vom Kernteam aus UX, Design, Entwicklung und SEO. Keine wechselnden Projektmanager, keine Sales-Zwischenschicht. Eine Person koordiniert alles und hat den Überblick."
    },
    {
      question: "Wie arbeitet euer hybrides Team zusammen?",
      answer: "Unser Team arbeitet nicht sequentiell, sondern parallel. Strategie, UX, Design, Content und Entwicklung greifen ineinander — keine Silos, keine Wartezeiten. Das macht uns schneller und sorgt für bessere Ergebnisse, weil alle Disziplinen von Anfang an mitdenken."
    },
    {
      question: "Wie integriert ihr AI in eure Prozesse?",
      answer: "AI unterstützt uns bei Recherche, Content-Strukturierung, Copywriting, Bildgenerierung und Prozessoptimierung. Wir nutzen AI-Tools für Effizienz und Qualität — aber nie als Ersatz für strategisches Denken oder kreative Entscheidungen. AI erweitert unsere Fähigkeiten, ersetzt sie nicht."
    },
    {
      question: "Mit welchen Branchen arbeitet ihr besonders erfolgreich?",
      answer: "Unsere Expertise liegt bei B2B-Unternehmen, Software-Anbietern, mittelständischen Unternehmen und innovativen Dienstleistern. Gemeinsam: Sie haben ambitionierte digitale Ziele, wollen messbare Ergebnisse und brauchen einen Partner, der strategisch mitdenkt — nicht nur umsetzt."
    }
  ];

  return (
    <section className={getSectionClasses('large', 'white')}>
      <div className={getContainerClasses('narrow')}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
            Häufige Fragen zur Zusammenarbeit mit unserer Digitalagentur
          </h2>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-brand-text leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default AboutUsFAQNew;
