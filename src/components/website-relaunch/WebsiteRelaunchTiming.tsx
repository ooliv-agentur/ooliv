import React from 'react';
import { Calendar, TrendingDown, Zap } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const WebsiteRelaunchTiming = () => {
  const reasons = [
    {
      icon: Calendar,
      title: "Veraltetes Design",
      description: "Ihre Website wirkt veraltet oder spiegelt Ihre Marke nicht mehr wider."
    },
    {
      icon: TrendingDown,
      title: "Wenige Anfragen",
      description: "Ihre Inhalte oder Struktur führen zu wenigen Anfragen."
    },
    {
      icon: Zap,
      title: "Neue Technologien",
      description: "Sie möchten auf neue Technologien oder bessere Performance umsteigen."
    }
  ];

  return (
    <AnimatedSection className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Wann ist der richtige Zeitpunkt für Ihren Website-Relaunch?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default WebsiteRelaunchTiming;
