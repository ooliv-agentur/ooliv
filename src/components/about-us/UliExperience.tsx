
import React from 'react';
import { Building2, Rocket, Calendar } from 'lucide-react';

const UliExperience = () => {
  const experiences = [
    {
      icon: <Building2 className="h-6 w-6" />,
      period: "2008 – heute",
      role: "Founder & Digital Strategy Lead",
      company: "ooliv Digital Consultancy",
      description: "Strategic Advisory für B2B-Unternehmen: Strategic Discovery, Product & UX Strategy, AI Integration und Implementation Leadership. Direkte Zusammenarbeit mit C-Level bei digitalen Transformationen mit messbaren Business Outcomes.",
      achievements: [
        "100+ Digital Transformationen geleitet (+240% Avg. Conversion Rate)",
        "Product Strategy Frameworks für B2B Scale-ups entwickelt",
        "AI-enabled Workflows strategisch integriert",
        "Multidisziplinäre internationale Teams koordiniert"
      ]
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      period: "2020 – 2024",
      role: "Founder & Product Strategy Lead",
      company: "Mallorca.ai / Property Guys",
      description: "End-to-End Product Leadership für AI/NLP Real-Estate Data Platform: Product Vision & Roadmap, Multi-Team Orchestration, R&D Strategy und ML Pipeline Design. Strategische Führung von Discovery bis Scale.",
      achievements: [
        "AI/NLP Platform Strategy: Von 0 zu Production-Scale",
        "Product Discovery Framework & Opportunity Validation",
        "Cross-functional Team Leadership (Dev, ML, Data)",
        "R&D Funding Strategy & Compliance (BSFZ)"
      ]
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Track Record & Erfahrung
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            16+ Jahre Digital Strategy Leadership mit nachweisbaren Business Outcomes – von Strategic Discovery bis Implementation
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl border border-border p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Icon & Period */}
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    {exp.icon}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {exp.period}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-primary font-semibold mb-4">
                    {exp.company}
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                      Key Achievements
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li 
                          key={idx}
                          className="flex items-start text-muted-foreground"
                        >
                          <span className="text-primary mr-2 mt-1">✓</span>
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UliExperience;
