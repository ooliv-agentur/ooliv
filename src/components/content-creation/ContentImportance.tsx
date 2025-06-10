
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
      description: 'Hochwertige Inhalte positionieren Sie als Experte in Ihrer Branche, schaffen Vertrauen und geben potenziellen Kunden das sichere Gefühl, mit dem richtigen Partner zusammenzuarbeiten.'
    },
    {
      icon: Users,
      title: 'Zielgruppenansprache',
      description: 'Strategische Inhalte sprechen Ihre ideale Zielgruppe an, holen sie genau dort ab, wo sie steht, und begleiten sie vom ersten Kontakt bis zur Kaufentscheidung.'
    },
    {
      icon: Search,
      title: 'Sichtbarkeit & SEO',
      description: 'Mit SEO-optimierten Inhalten verbessern Sie Ihre Sichtbarkeit in den Suchmaschinen, gewinnen mehr qualifizierte Besucher und steigern so Ihre Chancen auf nachhaltigen Unternehmenserfolg.'
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
    <section className="py-20 bg-white">
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
              ? "In einer digitalen Welt, in der täglich tausende Inhalte um Aufmerksamkeit kämpfen, entscheidet die Qualität Ihrer Inhalte über Sichtbarkeit, Vertrauen und nachhaltigen Geschäftserfolg."
              : "In a digital world where thousands of content pieces compete for attention daily, the quality of your content determines visibility, trust and sustainable business success."
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
