
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, PhoneCall, CheckCircle } from 'lucide-react';

const AboutCompactFAQ = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  const faqItems = isGerman ? [
    {
      question: "Mit wem kommuniziere ich während des Projekts?",
      answer: "Sie sprechen direkt mit unserem Gründer und CEO – vom ersten Anruf bis zum endgültigen Launch.",
      icon: <PhoneCall className="h-5 w-5 text-brand-primary" />
    },
    {
      question: "Wo ist das Team ansässig?",
      answer: "Wir sind remote-first mit Basis in Mainz. Unser Team ist über Deutschland, Mallorca und die Schweiz verteilt.",
      icon: <MapPin className="h-5 w-5 text-brand-primary" />
    },
    {
      question: "Werden Dienstleistungen ausgelagert?",
      answer: "Nein. Alle Strategie-, Design-, Content- und Entwicklungsarbeiten werden intern erledigt.",
      icon: <CheckCircle className="h-5 w-5 text-brand-primary" />
    }
  ] : [
    {
      question: "Who will I communicate with during the project?",
      answer: "You'll speak directly with our founder and CEO—from first call to final launch.",
      icon: <PhoneCall className="h-5 w-5 text-brand-primary" />
    },
    {
      question: "Where is the team based?",
      answer: "We're remote-first with a base in Mainz. Our team spans Germany, Mallorca, and Switzerland.",
      icon: <MapPin className="h-5 w-5 text-brand-primary" />
    },
    {
      question: "Do you outsource any services?",
      answer: "No. All strategy, design, content, and development are done in-house.",
      icon: <CheckCircle className="h-5 w-5 text-brand-primary" />
    }
  ];

  return (
    <section className="py-20 bg-brand-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-heading mb-4">
            {isGerman ? "Zusammenarbeit mit ooliv – was Sie erwartet" : "Working With ooliv — What to Expect"}
          </h2>
          <p className="text-lg text-brand-text max-w-3xl mx-auto">
            {isGerman 
              ? "Klare Abläufe, direkte Kommunikation und transparente Prozesse sorgen für eine reibungslose Zusammenarbeit."
              : "Clear workflows, direct communication, and transparent processes ensure smooth collaboration."}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="mb-4 h-12 w-12 flex items-center justify-center bg-brand-primary/10 rounded-full">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-heading">{item.question}</h3>
              <p className="text-brand-text">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCompactFAQ;
