import React from 'react';
import { LayoutDashboard, Sparkles, Shield } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const LandingpageOptimierungProblem = () => {
  const problems = [
    {
      icon: LayoutDashboard,
      title: "Unklare Struktur",
      description: "Besucher verstehen nicht, was sie tun sollen."
    },
    {
      icon: Sparkles,
      title: "Zu viel Ablenkung",
      description: "Design oder Inhalte lenken vom Ziel ab."
    },
    {
      icon: Shield,
      title: "Fehlende Vertrauenselemente",
      description: "Keine Sicherheit, kein Handlungsimpuls."
    }
  ];

  return (
    <AnimatedSection className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Die häufigsten Conversion-Bremsen.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <problem.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default LandingpageOptimierungProblem;
