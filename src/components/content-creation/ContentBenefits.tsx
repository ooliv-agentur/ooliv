
import React from 'react';
import { Target, Video, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContentBenefits = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  const challengeGroups = isGerman ? [
    {
      icon: Target,
      title: 'Strategie & Content-Erstellung',
      germanTitle: 'Strategie & Content-Erstellung',
      challenges: [
        'Fehlende Strategie und Zielgruppenanalyse',
        'Unklare Botschaften ohne Markenidentität',
        'Fehlende SEO-Optimierung',
        'Inhalte ohne Storytelling',
        'Zu wenige Website-Inhalte'
      ]
    },
    {
      icon: Video,
      title: 'Visuals & Video',
      germanTitle: 'Visuals & Video',
      challenges: [
        'Keine einheitliche visuelle Sprache',
        'Schwache Visuals (Stockfotos)',
        'Keine Integration von Bildern und Videos'
      ]
    }
  ] : [
    {
      icon: Target,
      title: 'Strategy & Content Creation',
      germanTitle: 'Strategy & Content Creation',
      challenges: [
        'Missing strategy and target group analysis',
        'Unclear messages without brand identity',
        'Missing SEO optimization',
        'Content without storytelling',
        'Too few website content'
      ]
    },
    {
      icon: Video,
      title: 'Visuals & Video',
      germanTitle: 'Visuals & Video',
      challenges: [
        'No consistent visual language',
        'Weak visuals (stock photos)',
        'No integration of images and videos'
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-brand-heading">
            {isGerman 
              ? "Typische Content-Herausforderungen — und wie wir sie lösen"
              : "Typical Content Challenges — And How We Solve Them"
            }
          </h2>
          
          <p className="text-lg text-center max-w-4xl mx-auto mb-12 text-brand-text">
            {isGerman 
              ? "Hier sind die häufigsten Stolpersteine, die Unternehmen beim digitalen Wachstum bremsen – und wie wir als Content Agentur Mainz sie gemeinsam überwinden."
              : "Here are the most common stumbling blocks that slow down companies' digital growth – and how we overcome them together as a Content Agency."
            }
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {challengeGroups.map((group, index) => (
            <div 
              key={index}
              className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 ${
                index === 0 
                  ? 'bg-gradient-to-br from-medico-mint to-white md:-mt-4' 
                  : 'bg-gradient-to-br from-blue-50 to-white md:mt-4'
              }`}
              style={{
                boxShadow: '0 8px 25px rgba(0, 51, 71, 0.08)'
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-medico-turquoise flex items-center justify-center mb-6 shadow-md">
                  <group.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-6 text-brand-heading">
                    {isGerman ? group.germanTitle : group.title}
                  </h3>
                  <ul className="text-brand-text text-left space-y-4">
                    {group.challenges.map((challenge, challengeIndex) => (
                      <li key={challengeIndex} className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-medico-turquoise flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                          <CheckCircle className="h-3 w-3 text-white" />
                        </div>
                        <span className="leading-relaxed">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Transition text to next section */}
        <div className="text-center mt-16">
          <p className="text-lg text-brand-text max-w-3xl mx-auto leading-relaxed">
            {isGerman 
              ? "Als Content Agentur Mainz entwickeln wir Lösungen, die Ihre Marke nachhaltig stärken."
              : "As a Content Agency, we develop solutions that sustainably strengthen your brand."
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentBenefits;
