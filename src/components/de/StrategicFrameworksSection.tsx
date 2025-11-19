import React from 'react';
import { FileText, Workflow, Target, Lightbulb } from 'lucide-react';

const StrategicFrameworksSection = () => {
  const frameworks = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Product Discovery Canvas",
      description: "Systematischer Framework für Strategic Discovery Phase – User Research, Business Model Validation, Opportunity Mapping."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "UX Strategy Framework",
      description: "End-to-End UX Strategy Methodology – von User Journey Mapping bis Conversion Optimization mit messbaren KPIs."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "AI Integration Methodology",
      description: "Strategic AI Integration Framework – von Use Case Identification bis Production Deployment mit Business Impact Tracking."
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Digital Transformation Roadmap",
      description: "Multi-Phase Transformation Planning – Strategic Discovery, Implementation Roadmap, Change Management, Success Metrics."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Strategic Frameworks statt Ad-hoc Tactics
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Bewährte Methodologien aus 16+ Jahren Digital Strategy Leadership – keine Templates, sondern individuell angepasste Strategic Frameworks.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {frameworks.map((framework, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg border border-border hover:shadow-lg transition-all group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                {framework.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">{framework.title}</h3>
              <p className="text-sm text-muted-foreground">{framework.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Mehr über unsere Strategic Methodology: <a href="/methodik" className="text-primary hover:underline font-semibold">Discovery → Strategy → Implementation</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default StrategicFrameworksSection;
