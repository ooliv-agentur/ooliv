import React from 'react';
import Reveal from '@/components/animations/Reveal';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServiceRecommendation = () => {
  const handleBookCall = () => {
    window.dispatchEvent(new CustomEvent('open-lead-form', { 
      detail: { mode: 'strategy' } 
    }));
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="bg-card rounded-2xl border border-border overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left: Image */}
              <div className="aspect-square md:aspect-auto">
                <img
                  src="/lovable-uploads/43cb7284-8e75-4a51-9784-67c81a6fe8c6.png"
                  alt="Uli Schönleber"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right: Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <MessageCircle className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  Nicht sicher, welcher Service passt?
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Lassen Sie uns 15 Minuten sprechen – ich sage Ihnen ehrlich, was Sie wirklich brauchen und wo Sie anfangen sollten.
                </p>
                <p className="text-sm text-muted-foreground mb-8">
                  Keine Verkaufsgespräche, keine vorgefertigten Lösungen. Nur eine ehrliche Einschätzung Ihrer Situation und konkrete erste Schritte.
                </p>
                <Button 
                  onClick={handleBookCall}
                  size="lg"
                  className="w-full md:w-auto"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Kurz-Call vereinbaren
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ServiceRecommendation;
