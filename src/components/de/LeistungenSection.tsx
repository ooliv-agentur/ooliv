import React from 'react';
import { Target, Layout, Palette, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const LeistungenSection = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  const services = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Strategie & Positionierung",
      items: [
        "Value Proposition & Differenzierung",
        "Customer Journey Mapping",
        "KPI-Definition & Erfolgssysteme",
        "Wettbewerbsanalyse & strategische Leitlinien"
      ]
    },
    {
      icon: <Layout className="h-6 w-6" />,
      title: "UX-Konzept & Struktur",
      items: [
        "Informationsarchitektur",
        "Wireframes & Prototyping",
        "Funnel-Design",
        "User Testing & Conversion-Optimierung"
      ]
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Design & Umsetzung",
      items: [
        "Interface-Design (mobil & desktop)",
        "WordPress-Entwicklung",
        "Performance-optimierter Launch",
        "Markenintegration & visuelle Konsistenz"
      ]
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "SEO & Performance + AI-gestützte Prozesse",
      items: [
        "Technisches SEO-Setup",
        "Onpage-Optimierung",
        "AI-Boosts in Recherche, Content & Workflows",
        "Tracking, Reporting & kontinuierliche Verbesserung"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-text mb-6 leading-tight">
              Unsere Kernleistungen
            </h2>
            <p className="text-xl text-teal max-w-3xl mx-auto font-medium leading-relaxed">
              Klar definiert. Ohne Umwege. Auf Ergebnisse ausgerichtet.
            </p>
          </div>
        </Reveal>
        
        <StaggerReveal className="grid md:grid-cols-2 gap-8 mt-16 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-[#F4F7F7] p-8 rounded-[20px] border border-gray-100 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="w-12 h-12 rounded-full bg-teal flex items-center justify-center mb-6 text-white">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary-text">{service.title}</h3>
              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li key={idx} className="text-muted-foreground text-base flex items-start font-normal">
                    <span className="text-teal mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </StaggerReveal>

        <div className="flex justify-center mt-12">
          <Button 
            variant="primary"
            size="lg" 
            className="group"
            onClick={handleStartProject}
            aria-label="Kostenlose Strategie-Session buchen"
          >
            Kostenlose Strategie-Session buchen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LeistungenSection;
