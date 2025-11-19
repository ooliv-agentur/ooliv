import React from 'react';
import { Search, Lightbulb, Zap, Rocket, TrendingUp } from 'lucide-react';

const ProcessTimeline = () => {
  const phases = [
    {
      number: "01",
      icon: <Search className="h-8 w-8" />,
      title: "Strategic Discovery",
      duration: "2-4 Wochen",
      color: "primary"
    },
    {
      number: "02",
      icon: <Lightbulb className="h-8 w-8" />,
      title: "UX & Product Strategy",
      duration: "2-3 Wochen",
      color: "primary"
    },
    {
      number: "03",
      icon: <Zap className="h-8 w-8" />,
      title: "AI Integration",
      duration: "1-2 Wochen",
      color: "primary"
    },
    {
      number: "04",
      icon: <Rocket className="h-8 w-8" />,
      title: "Implementation Leadership",
      duration: "4-12 Wochen",
      color: "primary"
    },
    {
      number: "05",
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Optimization",
      duration: "Kontinuierlich",
      color: "primary"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            End-to-End Transformation in 5 Phasen
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Strukturierter, messbarer Prozess von der ersten Discovery bis zur kontinuierlichen Optimierung
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Timeline Line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-border">
            <div className="h-full bg-primary/30 w-full"></div>
          </div>

          <div className="grid grid-cols-5 gap-8 relative">
            {phases.map((phase, index) => (
              <div key={index} className="text-center">
                {/* Icon Circle */}
                <div className="relative z-10 mx-auto mb-6 w-16 h-16 rounded-full bg-card border-4 border-primary shadow-lg flex items-center justify-center text-primary">
                  {phase.icon}
                </div>
                
                {/* Phase Number */}
                <div className="text-4xl font-bold text-primary/20 mb-2">
                  {phase.number}
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold mb-2 text-foreground">
                  {phase.title}
                </h3>
                
                {/* Duration */}
                <p className="text-sm text-muted-foreground">
                  {phase.duration}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {phases.map((phase, index) => (
            <div key={index} className="flex gap-6">
              {/* Left: Icon & Line */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-card border-4 border-primary shadow-lg flex items-center justify-center text-primary flex-shrink-0">
                  {phase.icon}
                </div>
                {index < phases.length - 1 && (
                  <div className="w-1 h-full bg-border mt-4"></div>
                )}
              </div>
              
              {/* Right: Content */}
              <div className="flex-1 pb-8">
                <div className="text-2xl font-bold text-primary/20 mb-1">
                  {phase.number}
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {phase.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {phase.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
