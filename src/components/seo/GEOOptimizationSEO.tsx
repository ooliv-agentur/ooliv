
import React from 'react';
import { RegisteredIcon } from '@/components/ui/registered-icon';

const GEOOptimizationSEO = () => {
  const llmPlatforms = [
    {
      name: "ChatGPT",
      icon: "bot" as const,
      description: "OpenAI's führende KI für natürliche Konversationen"
    },
    {
      name: "Gemini",
      icon: "sparkles" as const,
      description: "Googles multimodaler KI-Assistent"
    },
    {
      name: "Claude",
      icon: "brain" as const,
      description: "Anthropics KI für komplexe Analysen"
    },
    {
      name: "Perplexity",
      icon: "search" as const,
      description: "KI-gestützte Antwort-Suchmaschine"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center mb-6">
            <RegisteredIcon 
              name="brainCircuit" 
              size="xl"
              className="text-medico-darkGreen"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-medico-darkGreen">
            GEO: Optimierung für KI-Suchmaschinen
          </h2>
          <p className="text-lg md:text-xl text-medico-darkGreen max-w-3xl mx-auto leading-relaxed">
            Suchmaschinen sind nicht mehr die einzige Quelle für Antworten. KI-Modelle wie ChatGPT, Gemini, Claude und Perplexity werden zunehmend für Recherchen genutzt. Wir optimieren Ihre Inhalte gezielt für diese Generative Engines – mit strukturierten Daten, semantischer Optimierung und faktenbasierter Content-Architektur.
          </p>
        </div>

        {/* LLM Platforms Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {llmPlatforms.map((platform, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-medico-darkGreen transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-medico-darkGreen flex items-center justify-center mb-4">
                  <RegisteredIcon 
                    name={platform.icon}
                    size="lg"
                    className="text-white"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-medico-darkGreen">
                  {platform.name}
                </h3>
                <p className="text-sm text-medico-darkGreen/80">
                  {platform.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg text-medico-darkGreen leading-relaxed">
            <strong className="font-semibold">Zukunftssichere Sichtbarkeit:</strong> Mit unserem GEO-Ansatz kombinieren wir klassisches SEO mit Optimierung für KI-basierte Antwortmaschinen – für maximale Reichweite heute und morgen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GEOOptimizationSEO;
