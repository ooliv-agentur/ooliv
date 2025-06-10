
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
        'Fehlende SEO-Optimierung (Keywords, Meta, Struktur)',
        'Unstrukturierte Inhalte ohne Storytelling',
        'Keine oder zu wenige Website-Inhalte'
      ]
    },
    {
      icon: Video,
      title: 'Visuals & Video',
      germanTitle: 'Visuals & Video',
      challenges: [
        'Visuelle Inkonsistenz (kein einheitliches visuelles Konzept)',
        'Schwache Visuals (nur Stock-Fotos)',
        'Fehlende Integration von Videos und Bildern in den Content-Flow'
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
        'Missing SEO optimization (keywords, meta, structure)',
        'Unstructured content without storytelling',
        'No or too few website content'
      ]
    },
    {
      icon: Video,
      title: 'Visuals & Video',
      germanTitle: 'Visuals & Video',
      challenges: [
        'Visual inconsistency (no cohesive visual concept)',
        'Weak visuals (only stock photos)',
        'Lack of integration of videos and images into content flow'
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
              ? "Viele Unternehmen investieren viel Zeit und Budget in Content – und doch bleiben die Ergebnisse oft hinter den Erwartungen zurück. Warum? Weil Content ohne Strategie, klare Botschaften und eine starke visuelle Umsetzung oft wirkungslos bleibt. Als Content Agentur Mainz kennen wir die größten Stolpersteine, die Unternehmen beim digitalen Wachstum bremsen. Hier zeigen wir Ihnen, wie wir gemeinsam Content-Herausforderungen meistern."
              : "Many companies invest a lot of time and budget in content – yet the results often fall short of expectations. Why? Because content without strategy, clear messages and strong visual implementation often remains ineffective. As a Content Agency in Mainz, we know the biggest stumbling blocks that slow down companies' digital growth. Here we show you how we master content challenges together."
            }
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {challengeGroups.map((group, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-card hover:shadow-cardHover transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-medico-mint flex items-center justify-center mb-6">
                  <group.icon className="h-6 w-6 text-medico-turquoise" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-brand-heading">
                    {isGerman ? group.germanTitle : group.title}
                  </h3>
                  <ul className="text-brand-text text-left space-y-3">
                    {group.challenges.map((challenge, challengeIndex) => (
                      <li key={challengeIndex} className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-medico-mint flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                          <CheckCircle className="h-3 w-3 text-medico-turquoise" />
                        </div>
                        <span>{challenge}</span>
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
          <p className="text-lg text-brand-text max-w-4xl mx-auto leading-relaxed">
            {isGerman 
              ? "Als Content Agentur Mainz helfen wir Ihnen, diese Herausforderungen zu meistern – mit einem ganzheitlichen Ansatz, der Strategie, Kreativität und messbare Ergebnisse vereint. Lassen Sie uns gemeinsam Lösungen entwickeln, die Ihre Marke nachhaltig stärken."
              : "As a Content Agency in Mainz, we help you master these challenges – with a holistic approach that combines strategy, creativity and measurable results. Let us develop solutions together that sustainably strengthen your brand."
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentBenefits;
