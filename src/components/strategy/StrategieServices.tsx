
import React from 'react';
import { CheckCircle } from 'lucide-react';

const StrategieServices = () => {
  const services = [
    {
      title: "Website-Strategieberatung",
      features: [
        "Zielgruppenanalyse und Personas",
        "Konkurrenzanalyse und Marktpositionierung", 
        "Content-Strategie und Informationsarchitektur",
        "Conversion-Optimierung und Nutzerführung"
      ]
    },
    {
      title: "UX/UI Konzeption",
      features: [
        "User Journey Mapping",
        "Wireframing und Prototyping",
        "Responsive Design Konzepte",
        "Accessibility und Usability"
      ]
    },
    {
      title: "SEO-Strategieentwicklung", 
      features: [
        "Keyword-Research und Content-Planung",
        "Technische SEO-Optimierung",
        "Local SEO für regionale Unternehmen",
        "Performance-Monitoring und Reporting"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-medico-darkGreen" style={{ lineHeight: '1.3' }}>
            Unsere Strategie-Leistungen
          </h2>
          <div className="w-20 h-1 bg-medico-turquoise mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-medico-darkGreen/80 max-w-3xl mx-auto" style={{ lineHeight: '1.6' }}>
            Umfassende Beratung und Konzeption für Ihren digitalen Erfolg
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-medico-mint/20 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-medico-darkGreen">{service.title}</h3>
              <ul className="space-y-4">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-medico-turquoise mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-medico-darkGreen/90 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategieServices;
