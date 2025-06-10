
import React from 'react';
import { Search, Lightbulb, PenTool, Rocket } from 'lucide-react';

const StrategieProcess = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Analyse & Webkonzept",
      description: "Wir prüfen Ist-Zustand, Zielgruppen, Wettbewerb und entwickeln ein individuelles Webkonzept mit Sitemap und ersten Wireframes."
    },
    {
      icon: Lightbulb,
      number: "02", 
      title: "Strategie & Planung",
      description: "Wir definieren messbare Ziele, planen Maßnahmen und erstellen einen Projektplan auf Basis Ihres Webkonzepts."
    },
    {
      icon: PenTool,
      number: "03",
      title: "Design-Übergabe & Umsetzung",
      description: "Nach der Designfreigabe startet die Webentwicklung – sauber, performant und individuell."
    },
    {
      icon: Rocket,
      number: "04",
      title: "Optimierung & Reporting",
      description: "Nach dem Go-Live definieren wir KPIs, messen den Erfolg und optimieren kontinuierlich."
    }
  ];

  return (
    <section className="py-24 bg-medico-mint/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-medico-darkGreen" style={{ lineHeight: '1.3' }}>
            Unser strategischer Ansatz – von der Analyse bis zum Webkonzept und zur Umsetzung
          </h2>
          <div className="w-20 h-1 bg-medico-turquoise mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-medico-darkGreen/80 max-w-3xl mx-auto" style={{ lineHeight: '1.6' }}>
            Wir begleiten Sie Schritt für Schritt: von der Analyse Ihrer aktuellen Website über das Webkonzept bis zur erfolgreichen Umsetzung.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-medico-turquoise/20 rounded-full p-4 relative">
                    <step.icon className="h-8 w-8 text-medico-turquoise" />
                    <div className="absolute -top-2 -right-2 bg-medico-turquoise text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
                      {step.number}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-medico-darkGreen text-center">{step.title}</h3>
                <p className="text-medico-darkGreen/80 leading-relaxed text-center">{step.description}</p>
              </div>
              
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-medico-turquoise/30 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategieProcess;
