
import React from 'react';
import { Bot, Target, TrendingDown, AlertTriangle } from 'lucide-react';

const KlickbetrugExplanation = () => {
  const bulletPoints = [
    {
      icon: <Bot className="h-6 w-6 text-medico-turquoise" />,
      title: "Künstlicher Traffic:",
      description: "Klicks ohne echtes Nutzerinteresse"
    },
    {
      icon: <Target className="h-6 w-6 text-medico-turquoise" />,
      title: "Wettbewerbsmanipulation:",
      description: "Konkurrenten leeren Ihr Tagesbudget"
    },
    {
      icon: <TrendingDown className="h-6 w-6 text-medico-turquoise" />,
      title: "Unnütze Ausgaben:",
      description: "Kein ROI, trotz hoher Klickzahlen"
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-medico-turquoise" />,
      title: "Verfälschte Daten:",
      description: "Conversion-Raten und KPIs verlieren Aussagekraft"
    }
  ];

  return (
    <section id="explanation" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-medico-darkGreen">
            Was ist Klickbetrug – und warum betrifft er auch Ihre Kampagnen?
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-medico-darkGreen leading-relaxed">
              Klickbetrug (englisch „Click Fraud") bezeichnet künstlich erzeugte Klicks auf Ihre Google Ads – meist ohne echtes Interesse an Ihrem Angebot. Diese Klicks stammen von Bots, Konkurrenten oder Klickfarmen und treiben Ihre Werbekosten in die Höhe, ohne dass daraus Kunden werden. Das Problem: Google erkennt diese Angriffe nur unzureichend – und Sie bezahlen trotzdem.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bulletPoints.map((point, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-gray-100 p-4 rounded-full mb-4">
                {point.icon}
              </div>
              <h3 className="font-bold text-medico-darkGreen mb-2">{point.title}</h3>
              <p className="text-medico-darkGreen/80">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KlickbetrugExplanation;
