import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Search, Rocket, RefreshCw } from 'lucide-react';

const EngagementModelsTeaser = () => {
  const models = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Strategic Discovery Package",
      investment: "€15k–25k",
      duration: "4–6 Wochen",
      description: "Comprehensive Strategic Discovery – User Research, Business Model Validation, Technical Architecture, Strategic Roadmap.",
      outcomes: ["Clear Strategic Direction", "+60% avg. Conversion Rate", "Risk Mitigation"]
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "End-to-End Product & UX Transformation",
      investment: "€40k–80k",
      duration: "3–6 Monate",
      description: "Full Digital Transformation – Strategic Discovery, UX Strategy, Technical Implementation, Launch & Optimization.",
      outcomes: ["Complete Transformation", "+140% avg. Conversion Rate", "Market Leadership"]
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Strategic Retainer",
      investment: "€8k–15k/Monat",
      duration: "12+ Monate",
      description: "Ongoing C-Level Strategic Advisory – Continuous Optimization, AI Integration, Innovation Leadership.",
      outcomes: ["Continuous Innovation", "Long-term Partnership", "Competitive Advantage"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Strategic Investment Models
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Drei Engagement-Modelle für verschiedene Transformations-Phasen – von Strategic Discovery bis Long-term Strategic Partnership.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {models.map((model, index) => (
            <div 
              key={index}
              className="bg-muted/30 p-8 rounded-lg border border-border hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                {model.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{model.title}</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-2xl font-bold text-primary">{model.investment}</span>
                <span className="text-sm text-muted-foreground">· {model.duration}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{model.description}</p>
              <div className="space-y-2">
                {model.outcomes.map((outcome, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm text-foreground">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/investition">
            <Button size="lg" className="text-lg px-8">
              Explore Investment Models & Pricing
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EngagementModelsTeaser;
