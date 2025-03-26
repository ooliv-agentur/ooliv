
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutCompactFAQ = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  const faqItems = isGerman ? [
    {
      question: "Mit wem kommuniziere ich während des Projekts?",
      answer: "Sie sprechen direkt mit unserem Gründer und CEO – vom ersten Anruf bis zum endgültigen Launch."
    },
    {
      question: "Wo ist das Team ansässig?",
      answer: "Wir sind remote-first mit Basis in Mainz. Unser Team ist über Deutschland, Mallorca und die Schweiz verteilt."
    },
    {
      question: "Werden Dienstleistungen ausgelagert?",
      answer: "Nein. Alle Strategie-, Design-, Content- und Entwicklungsarbeiten werden intern erledigt."
    }
  ] : [
    {
      question: "Who will I communicate with during the project?",
      answer: "You'll speak directly with our founder and CEO—from first call to final launch."
    },
    {
      question: "Where is the team based?",
      answer: "We're remote-first with a base in Mainz. Our team spans Germany, Mallorca, and Switzerland."
    },
    {
      question: "Do you outsource any services?",
      answer: "No. All strategy, design, content, and development are done in-house."
    }
  ];

  return (
    <section className="section-standard">
      <div className="section-container">
        <h2 className="section-title mb-12">
          {isGerman ? "Zusammenarbeit mit ooliv – was Sie erwartet" : "Working With ooliv — What to Expect"}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {faqItems.map((item, index) => (
            <Card key={index} className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-brand-heading">{item.question}</h3>
                <p className="text-brand-text">{item.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCompactFAQ;
