
import React from 'react';
import { CheckCircle, Users, Lightbulb, Bot, TrendingUp, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContentExpertInsight = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  const benefits = isGerman ? [
    {
      icon: CheckCircle,
      title: "Strategischer Content-Ansatz",
      description: "Wir entwickeln keine isolierten Inhalte, sondern denken ganzheitlich – von der ersten Idee bis zur messbaren Performance."
    },
    {
      icon: Users,
      title: "Erfahrenes Content-Team",
      description: "Unser Team vereint Content-Strategen, Designer und Texter unter einem Dach."
    },
    {
      icon: Lightbulb,
      title: "Workshops & Trendberatung",
      description: "Wir teilen unser Wissen in Workshops und beraten zu aktuellen Trends und Best Practices."
    },
    {
      icon: Bot,
      title: "KI-gestützte Effizienz",
      description: "Wir nutzen moderne KI-Tools, um effizienter zu arbeiten – ohne die menschliche Expertise zu ersetzen."
    },
    {
      icon: TrendingUp,
      title: "Messbare Ergebnisse",
      description: "Content ohne Kennzahlen ist nur Kunst. Wir tracken Performance und optimieren kontinuierlich."
    },
    {
      icon: Zap,
      title: "Schnelle Umsetzung",
      description: "Dank strukturierter Prozesse liefern wir Content schnell und in hoher Qualität."
    }
  ] : [
    {
      icon: CheckCircle,
      title: "Strategic Content Approach",
      description: "We don't create isolated content – we think holistically, from initial idea to measurable performance."
    },
    {
      icon: Users,
      title: "Experienced Content Team", 
      description: "Our team combines content strategists, SEO experts, designers, and copywriters under one roof."
    },
    {
      icon: Lightbulb,
      title: "Workshops & Trend Consulting",
      description: "We share our knowledge in content workshops and advise you on current trends and best practices."
    },
    {
      icon: Bot,
      title: "AI-Powered Efficiency",
      description: "We use cutting-edge AI tools like ChatGPT and Midjourney to work faster and more efficiently – without replacing human expertise."
    },
    {
      icon: TrendingUp,
      title: "Measurable Results",
      description: "Content without metrics is just art. We track performance and continuously optimize."
    },
    {
      icon: Zap,
      title: "Fast Implementation",
      description: "Thanks to structured processes and a well-coordinated team, we deliver content quickly and with high quality."
    }
  ];

  return (
    <section className="py-24 bg-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-heading">
            {isGerman ? "Warum ooliv als Content Agentur?" : "Why Choose ooliv for Content?"}
          </h2>
          <p className="text-lg text-brand-text max-w-3xl mx-auto">
            {isGerman 
              ? "Content ist mehr als Text und Bilder. Wir bringen Strategie, Kreativität und Technologie zusammen."
              : "Content is more than text and images. We combine strategy, creativity, and technology."
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-brand-primary" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-brand-heading">
                  {benefit.title}
                </h3>
                
                <p className="text-brand-text leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-brand-primary text-white hover:bg-brand-primaryHover"
            onClick={handleStartProject}
          >
            {isGerman ? "Content-Strategie besprechen" : "Discuss Content Strategy"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContentExpertInsight;
