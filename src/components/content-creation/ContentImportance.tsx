
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
          <h2 className="text-3xl font-bold mb-6 text-brand-heading">
            {isGerman 
              ? "Warum Content entscheidend ist"
              : "Why Content is Crucial"
            }
          </h2>
          
          {isGerman ? (
            <>
              <h3 className="text-xl font-medium mb-8 text-brand-heading max-w-4xl mx-auto">
                Content ist mehr als nur Worte und Bilder. Er ist der Schlüssel zu Vertrauen, Sichtbarkeit und nachhaltigem Wachstum. In einer digitalen Welt, in der Informationen überall verfügbar sind, entscheidet hochwertiger Content darüber, ob Ihre Marke sichtbar ist und Ihre Botschaften ankommen.
              </h3>
              
              <div className="text-lg text-left max-w-4xl mx-auto space-y-6 text-brand-text">
                <p>
                  Viele Unternehmen investieren in Websites, SEO und Social Media – aber ohne strategisch durchdachte Inhalte bleibt das volle Potenzial oft ungenutzt. Content ist der Hebel, der Ihre Marke unverwechselbar macht, Ihre Zielgruppe erreicht und sie Schritt für Schritt durch die Customer Journey führt.
                </p>
                
                <p>
                  Er sorgt für Reichweite, schafft Vertrauen und verwandelt Interessenten in Kunden. Mit strategischem Content-Marketing erreichen Sie messbare Ergebnisse und positionieren Ihr Unternehmen als Thought Leader in Ihrer Branche.
                </p>
              </div>
            </>
          ) : (
            <>
              <h3 className="text-xl font-medium mb-8 text-brand-heading max-w-4xl mx-auto">
                Content is more than just words and images. It is the key to trust, visibility and sustainable growth. In a digital world where information is available everywhere, high-quality content determines whether your brand is visible and your messages resonate.
              </h3>
              
              <div className="text-lg text-left max-w-4xl mx-auto space-y-6 text-brand-text">
                <p>
                  Many companies invest in websites, SEO and social media – but without strategically designed content, the full potential often remains untapped. Content is the lever that makes your brand distinctive, reaches your target audience and guides them step by step through the customer journey.
                </p>
                
                <p>
                  It creates reach, builds trust and turns prospects into customers. With strategic content marketing, you achieve measurable results and position your company as a thought leader in your industry.
                </p>
              </div>
            </>
          )}
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
        
        {/* Optional scroll indicator */}
        <div className="flex justify-center mt-12">
          <div className="w-1 h-8 bg-gradient-to-b from-medico-turquoise/50 to-medico-turquoise/80 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default ContentImportance;
