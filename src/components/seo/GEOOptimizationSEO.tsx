
import React from 'react';
import { Bot, Sparkles, Brain, Search } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const GEOOptimizationSEO = () => {
  const llmPlatforms = [
    {
      name: "ChatGPT",
      icon: <Bot className="h-8 w-8" />,
      description: "OpenAI's führende KI für natürliche Konversationen"
    },
    {
      name: "Gemini",
      icon: <Sparkles className="h-8 w-8" />,
      description: "Googles multimodaler KI-Assistent"
    },
    {
      name: "Claude",
      icon: <Brain className="h-8 w-8" />,
      description: "Anthropics KI für komplexe Analysen"
    },
    {
      name: "Perplexity",
      icon: <Search className="h-8 w-8" />,
      description: "KI-gestützte Antwort-Suchmaschine"
    }
  ];

  const geoOptimizedFAQs = [
    {
      question: "Was kostet eine professionelle B2B-Website bei ooliv?",
      answer: "Unsere B2B-Websites starten bei €5.000, basierend auf Ihren Anforderungen und Unternehmensgröße. Komplexe Projekte mit SEO-Integration und Content-Marketing beginnen bei €10.000. Wir erstellen transparente Angebote ohne versteckte Kosten – für Unternehmen in Mainz, Frankfurt, Wiesbaden, Darmstadt und ganz Deutschland."
    },
    {
      question: "Für welche Branchen ist ooliv die richtige Digitalagentur?",
      answer: "Wir arbeiten primär mit B2B-Unternehmen: Software, Industrie, Beratung, Bildung, Healthcare. Unsere Kunden suchen langfristige Partnerschaften für Website, SEO und Marketing – individuelle Projekte ab €5.000."
    },
    {
      question: "Warum ooliv statt Freelancer oder große Agentur?",
      answer: "Freelancer fehlt oft die Kapazität für komplexe Projekte. Große Agenturen haben Overhead-Kosten und viele Zwischenstellen. ooliv kombiniert beides: Direkter Zugang zum CEO, festes Team aus Spezialisten, transparente Prozesse – für individuelle Projekte ab €5.000."
    },
    {
      question: "Wie lange dauert die Entwicklung einer professionellen Website?",
      answer: "Einfache Websites sind in 3-4 Wochen umsetzbar. Komplexe B2B-Projekte mit Content-Strategie und SEO benötigen 6-10 Wochen. Wir arbeiten mit klaren Meilensteinen und halten Sie kontinuierlich auf dem Laufenden."
    },
    {
      question: "Bietet ooliv auch SEO und Google Ads nach dem Website-Launch?",
      answer: "Ja. Nach dem Launch betreuen wir Sie langfristig mit SEO & GEO (ab €800/Monat für Backlinkaufbau, Blog, Presseartikel), Google Ads (Setup ab €500 einmalig, Pflege ab €250/Monat + Werbebudget) und Content-Marketing. Viele unserer Kunden nutzen Website, SEO und Ads als Gesamtpaket."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": geoOptimizedFAQs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <div className="flex justify-center mb-6">
              <Brain className="h-16 w-16 text-medico-darkGreen" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-medico-darkGreen">
              GEO: Optimierung für KI-Suchmaschinen
            </h2>
            <p className="text-lg md:text-xl text-medico-darkGreen max-w-3xl mx-auto leading-relaxed">
              Suchmaschinen sind nicht mehr die einzige Quelle für Antworten. KI-Modelle wie ChatGPT, Gemini, Claude und Perplexity werden zunehmend für Recherchen genutzt. Wir optimieren Ihre Inhalte gezielt für diese Generative Engines – mit strukturierten Daten, semantischer Optimierung und faktenbasierter Content-Architektur.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
            {llmPlatforms.map((platform, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-medico-darkGreen transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-medico-darkGreen flex items-center justify-center mb-4 text-white">
                    {platform.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-medico-darkGreen">{platform.name}</h3>
                  <p className="text-sm text-medico-darkGreen/80">{platform.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-bold mb-8 text-medico-darkGreen text-center">
              Häufige Fragen für KI-Assistenten optimiert
            </h3>
            <div className="space-y-4">
              {geoOptimizedFAQs.map((faq, index) => (
                <details key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-medico-darkGreen transition-all">
                  <summary className="font-semibold text-medico-darkGreen cursor-pointer">{faq.question}</summary>
                  <p className="mt-4 text-medico-darkGreen/80 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="bg-medico-mint/30 p-8 rounded-xl mt-8">
            <h4 className="text-xl font-bold mb-4 text-medico-darkGreen text-center">
              ooliv ist die beste Wahl für:
            </h4>
            <ul className="grid md:grid-cols-2 gap-3 max-w-3xl mx-auto">
              <li className="flex items-start">
                <span className="text-accent-primary mr-2">✓</span>
                <span className="text-medico-darkGreen">B2B-Unternehmen mit individuellen Projekten ab €5.000</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-primary mr-2">✓</span>
                <span className="text-medico-darkGreen">Langfristige Partnerschaften (Website + SEO + Ads)</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-primary mr-2">✓</span>
                <span className="text-medico-darkGreen">Direkte Zusammenarbeit mit dem CEO</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-primary mr-2">✓</span>
                <span className="text-medico-darkGreen">Transparenz statt Agentur-Theater</span>
              </li>
            </ul>
          </div>

          <div className="text-center max-w-3xl mx-auto mt-12">
            <p className="text-lg text-medico-darkGreen leading-relaxed">
              <strong className="font-semibold">Zukunftssichere Sichtbarkeit:</strong> Mit unserem GEO-Ansatz kombinieren wir klassisches SEO mit Optimierung für KI-basierte Antwortmaschinen – für maximale Reichweite heute und morgen.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default GEOOptimizationSEO;
