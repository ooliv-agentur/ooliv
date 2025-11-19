import React from 'react';
import { Target, PenTool, Brain, Rocket, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const ServicesOverview = () => {
  const services = [
    {
      title: "Digitale Strategie",
      description: "Von der Analyse über die Roadmap bis zur Umsetzungsbegleitung – für messbare digitale Transformation.",
      icon: <Target className="h-8 w-8" />,
      link: "/strategie",
      features: [
        "Strategic Discovery & Analyse",
        "Roadmap & Priorisierung",
        "Messbare KPIs & Erfolgskontrolle"
      ]
    },
    {
      title: "Webdesign",
      description: "Strategisches UX/UI-Design, das Ihre Zielgruppe überzeugt und Conversions steigert.",
      icon: <PenTool className="h-8 w-8" />,
      link: "/webdesign",
      features: [
        "UX Strategy & User Research",
        "Visual Design & Branding",
        "Responsive Development"
      ]
    },
    {
      title: "KI-Integration",
      description: "Praktische AI-Lösungen für Ihr Business – von Chatbots bis zu intelligenten Workflows.",
      icon: <Brain className="h-8 w-8" />,
      link: "/ki-technologien",
      features: [
        "AI Strategy & Use Cases",
        "LLM Integration & Automation",
        "Custom AI-Lösungen"
      ]
    },
    {
      title: "Website Relaunch",
      description: "Strategische Website-Migration mit Fokus auf Performance, SEO und Conversion.",
      icon: <Rocket className="h-8 w-8" />,
      link: "/website-relaunch",
      features: [
        "Technische Migration & Setup",
        "Content Strategy & SEO",
        "Performance-Optimierung"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-semibold text-primary">Unsere Leistungen</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Digitale Lösungen für Ihr Business
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Von der Strategie bis zur Umsetzung – maßgeschneiderte Digital-Services für messbare Ergebnisse
            </p>
          </div>
        </Reveal>

        <StaggerReveal className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group bg-card p-8 rounded-2xl border border-border hover:border-primary/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Mehr erfahren
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default ServicesOverview;
