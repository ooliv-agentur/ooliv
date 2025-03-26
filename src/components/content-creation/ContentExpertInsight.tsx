
import React from 'react';
import { Bot, Image, Video, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContentExpertInsight = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  return (
    <section className="py-24 bg-gradient-to-br from-brand-background via-white to-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-brand-heading text-center md:text-left">
            {isGerman 
              ? "Wir nutzen KI nicht nur – wir trainieren sie" 
              : "We Don't Just Use AI — We Train It"
            }
          </h2>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <p className="text-lg mb-6 text-brand-text">
              {isGerman
                ? "Bei ooliv entwickeln wir individuelle GPTs für jedes Projekt – abgestimmt auf Tonalität, Zielgruppe und Markt. Unsere Tools lernen durch aktives Training und liefern markengerechte Ergebnisse."
                : "At ooliv, we build custom GPTs for each client — designed to match your voice, business goals, and market. We teach our tools through deep research and active guidance, so every output is tailored for your business."
              }
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="flex items-start gap-3">
                <Bot className="h-6 w-6 text-brand-primary mt-1" />
                <div>
                  <h3 className="font-bold mb-1 text-brand-heading">ChatGPT</h3>
                  <p className="text-sm text-brand-text">
                    {isGerman
                      ? "Für intelligente, markenkonforme Texte"
                      : "For intelligent, brand-aligned text"
                    }
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Image className="h-6 w-6 text-brand-primary mt-1" />
                <div>
                  <h3 className="font-bold mb-1 text-brand-heading">Midjourney</h3>
                  <p className="text-sm text-brand-text">
                    {isGerman 
                      ? "Für markengerechte Bildsprache" 
                      : "For brand-aligned images"
                    }
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Video className="h-6 w-6 text-brand-primary mt-1" />
                <div>
                  <h3 className="font-bold mb-1 text-brand-heading">Sora</h3>
                  <p className="text-sm text-brand-text">
                    {isGerman 
                      ? "Für dynamische Videoinhalte" 
                      : "For dynamic video creation"
                    }
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-brand-primary mt-1" />
              <p className="text-brand-text">
                <strong>
                  {isGerman
                    ? "Alle Inhalte werden von unserem Team geprüft und finalisiert."
                    : "Every piece of content is refined, reviewed, and finalized by our team."
                  }
                </strong>{' '}
                {isGerman
                  ? "KI ist ein Werkzeug – kein Ersatz für unsere Expertise."
                  : "We don't rely on AI blindly — we make sure everything works for your brand."
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentExpertInsight;
