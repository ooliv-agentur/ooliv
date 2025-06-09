
import React from 'react';
import { CheckCircle, Users, Palette, Code, Rocket } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const WebDesignProcess = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  const translations = {
    en: {
      title: "Our Webdesign Process",
      subtitle: "From concept to launch – structured, transparent, and focused on your success.",
      steps: [
        {
          icon: Users,
          title: "Discovery & Strategy",
          description: "We analyze your goals, target audience, and competitive landscape to create a solid foundation."
        },
        {
          icon: Palette,
          title: "Design & User Experience",
          description: "Creating wireframes and visual designs that align with your brand and convert visitors."
        },
        {
          icon: Code,
          title: "Development & Implementation",
          description: "Clean, efficient code that's optimized for performance, SEO, and user experience."
        },
        {
          icon: Rocket,
          title: "Launch & Optimization",
          description: "Going live with thorough testing, plus ongoing support to ensure continued success."
        }
      ]
    },
    de: {
      title: "Unser Webdesign-Prozess",
      subtitle: "Von der Konzeption bis zum Launch – strukturiert, transparent und auf Ihren Erfolg fokussiert.",
      steps: [
        {
          icon: Users,
          title: "Analyse & Strategie",
          description: "Wir analysieren Ihre Ziele, Zielgruppe und Wettbewerb für ein solides Fundament."
        },
        {
          icon: Palette,
          title: "Design & Nutzererfahrung",
          description: "Wireframes und visuelle Designs, die zu Ihrer Marke passen und Besucher konvertieren."
        },
        {
          icon: Code,
          title: "Entwicklung & Umsetzung",
          description: "Sauberer, effizienter Code, optimiert für Performance, SEO und Benutzererfahrung."
        },
        {
          icon: Rocket,
          title: "Launch & Optimierung",
          description: "Live-Gang mit gründlichen Tests plus laufender Support für nachhaltigen Erfolg."
        }
      ]
    }
  };
  
  const t = isGerman ? translations.de : translations.en;

  return (
    <section className="py-24" style={{ backgroundColor: '#0A1E2C' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold text-center mb-4" style={{ color: '#FFFFFF' }}>
            {t.title}
          </h2>
          
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto" style={{ color: '#F4F4F4' }}>
            {t.subtitle}
          </p>
        </Reveal>
        
        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300" style={{ backgroundColor: '#003347', border: '1px solid rgba(255, 229, 0, 0.2)' }}>
                <div className="flex flex-col items-center text-center">
                  <div className="relative">
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#FFE500', color: '#003347' }}>
                      {index + 1}
                    </div>
                    <div className="p-3 rounded-full mb-4" style={{ backgroundColor: 'rgba(255, 229, 0, 0.1)' }}>
                      <step.icon className="h-6 w-6" style={{ color: '#FFE500' }} />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#FFFFFF' }}>{step.title}</h3>
                  <p className="text-sm" style={{ color: '#F4F4F4' }}>{step.description}</p>
                </div>
              </div>
              
              {/* Connecting line */}
              {index < t.steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5" style={{ backgroundColor: 'rgba(255, 229, 0, 0.3)' }}>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full" style={{ backgroundColor: '#FFE500' }}></div>
                </div>
              )}
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default WebDesignProcess;
