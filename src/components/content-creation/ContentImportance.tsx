
import React from 'react';
import { TrendingUp, Users, Search } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContentImportance = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  const benefits = isGerman ? [
    {
      icon: TrendingUp,
      title: 'Vertrauen und Glaubwürdigkeit',
      description: 'Hochwertiger Content positioniert Sie als Experte in Ihrer Branche und baut Vertrauen bei potenziellen Kunden auf.'
    },
    {
      icon: Users,
      title: 'Zielgruppenansprache',
      description: 'Strategischer Content spricht Ihre idealen Kunden direkt an und führt sie durch den gesamten Kaufprozess.'
    },
    {
      icon: Search,
      title: 'Sichtbarkeit & SEO',
      description: 'Optimierter Content verbessert Ihre Google-Rankings und macht Sie für Ihre Zielgruppe auffindbar.'
    }
  ] : [
    {
      icon: TrendingUp,
      title: 'Trust and Credibility',
      description: 'High-quality content positions you as an expert in your industry and builds trust with potential customers.'
    },
    {
      icon: Users,
      title: 'Target Audience Engagement',
      description: 'Strategic content speaks directly to your ideal customers and guides them through the entire buying process.'
    },
    {
      icon: Search,
      title: 'Visibility & SEO',
      description: 'Optimized content improves your Google rankings and makes you discoverable to your target audience.'
    }
  ];

  return (
    <section className="py-20 bg-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-brand-heading">
            {isGerman 
              ? "Warum Content entscheidend ist"
              : "Why Content is Crucial"
            }
          </h2>
          <p className="text-lg text-center max-w-3xl mx-auto text-brand-text">
            {isGerman 
              ? "In einer digitalen Welt, die von Inhalten überflutet wird, entscheidet die Qualität Ihres Contents über Erfolg oder Misserfolg Ihres Unternehmens."
              : "In a digital world flooded with content, the quality of your content determines the success or failure of your business."
            }
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-card hover:shadow-cardHover transition-shadow duration-300 border border-gray-100 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-medico-mint flex items-center justify-center mx-auto mb-6">
                  <Icon className="h-6 w-6 text-medico-turquoise" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-brand-heading">
                  {benefit.title}
                </h3>
                <p className="text-brand-text">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContentImportance;
