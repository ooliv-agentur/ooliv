
import React from 'react';
import { BarChart2, Code, LineChart } from 'lucide-react';

const SEOProcessDE = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-heading mb-6">Unser SEO-Prozess</h2>
        </div>

        {/* Desktop Version */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-1/2"></div>

          <div className="space-y-12 relative">
            {/* Step 1 */}
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
              <div className="md:text-right pb-8 md:pb-0 order-1 md:pr-12">
                <div className="inline-block p-3 rounded-full bg-brand-primary text-white mb-4">
                  <BarChart2 className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-brand-heading mb-2">1. Analyse & Strategie</h3>
                <p className="text-brand-text">
                  Audit, Keyword-Recherche, Maßnahmenplan erstellen
                </p>
              </div>
              
              <div className="hidden md:block order-2"></div>
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                <div className="bg-white rounded-full h-8 w-8 border-4 border-brand-primary"></div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
              <div className="hidden md:block order-1"></div>
              
              <div className="md:pl-12 pb-8 md:pb-0 order-2">
                <div className="inline-block p-3 rounded-full bg-brand-primary text-white mb-4">
                  <Code className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-brand-heading mb-2">2. Optimierung & Content</h3>
                <p className="text-brand-text">
                  Technische Basis schaffen, Inhalte optimieren, Rankings aufbauen
                </p>
              </div>
              
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                <div className="bg-white rounded-full h-8 w-8 border-4 border-brand-primary"></div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
              <div className="md:text-right pb-8 md:pb-0 order-1 md:pr-12">
                <div className="inline-block p-3 rounded-full bg-brand-primary text-white mb-4">
                  <LineChart className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-brand-heading mb-2">3. Monitoring & Anpassung</h3>
                <p className="text-brand-text">
                  Rankings tracken, Strategie anpassen, kontinuierlich verbessern
                </p>
              </div>
              
              <div className="hidden md:block order-2"></div>
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                <div className="bg-white rounded-full h-8 w-8 border-4 border-brand-primary"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile and Tablet Version */}
        <div className="md:hidden">
          <div className="overflow-x-auto">
            <div className="flex gap-6 pb-4 min-w-max">
              {[
                { icon: BarChart2, title: "1. Analyse & Strategie", desc: "Audit, Keyword-Recherche, Maßnahmenplan erstellen" },
                { icon: Code, title: "2. Optimierung & Content", desc: "Technische Basis schaffen, Inhalte optimieren, Rankings aufbauen" },
                { icon: LineChart, title: "3. Monitoring & Anpassung", desc: "Rankings tracken, Strategie anpassen, kontinuierlich verbessern" }
              ].map((step, index) => (
                <div key={index} className="flex-shrink-0 w-80 bg-white rounded-lg p-6 shadow-sm">
                  <div className="inline-block p-3 rounded-full bg-brand-primary text-white mb-4">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-heading mb-2">{step.title}</h3>
                  <p className="text-brand-text">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOProcessDE;
