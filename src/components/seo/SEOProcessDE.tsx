
import React from 'react';
import { BarChart2, Search, Code, Link2, LineChart } from 'lucide-react';

const SEOProcessDE = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-heading mb-6">Unser SEO-Prozess – von Audit bis Autorität</h2>
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
                <h3 className="text-xl font-bold text-brand-heading mb-2">1. Strategie & Analyse</h3>
                <p className="text-brand-text">
                  Initiales SEO-Audit + Roadmap abgestimmt auf Ihre Ziele
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
                <h3 className="text-xl font-bold text-brand-heading mb-2">2. Fix & Struktur</h3>
                <p className="text-brand-text">
                  Technische Probleme beheben, saubere Architektur schaffen
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
                  <Search className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-brand-heading mb-2">3. Keywords & Content</h3>
                <p className="text-brand-text">
                  Gezielte Inhalte für relevante Suchbegriffe aufbauen oder optimieren
                </p>
              </div>
              
              <div className="hidden md:block order-2"></div>
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                <div className="bg-white rounded-full h-8 w-8 border-4 border-brand-primary"></div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
              <div className="hidden md:block order-1"></div>
              
              <div className="md:pl-12 pb-8 md:pb-0 order-2">
                <div className="inline-block p-3 rounded-full bg-brand-primary text-white mb-4">
                  <Link2 className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-brand-heading mb-2">4. Autorität aufbauen</h3>
                <p className="text-brand-text">
                  Verlinkungsstrategie intern + Backlink-Kampagnen koordinieren
                </p>
              </div>
              
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                <div className="bg-white rounded-full h-8 w-8 border-4 border-brand-primary"></div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
              <div className="md:text-right pb-8 md:pb-0 order-1 md:pr-12">
                <div className="inline-block p-3 rounded-full bg-brand-primary text-white mb-4">
                  <LineChart className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-brand-heading mb-2">5. Tracking & Skalierung</h3>
                <p className="text-brand-text">
                  Performance überwachen & Strategie datenbasiert anpassen
                </p>
              </div>
              
              <div className="hidden md:block order-2"></div>
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                <div className="bg-white rounded-full h-8 w-8 border-4 border-brand-primary"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile and Tablet Version with native scrolling */}
        <div className="md:hidden">
          <div className="overflow-x-auto">
            <div className="flex gap-6 pb-4 min-w-max">
              {[
                { icon: BarChart2, title: "1. Strategie & Analyse", desc: "Initiales SEO-Audit + Roadmap abgestimmt auf Ihre Ziele" },
                { icon: Code, title: "2. Fix & Struktur", desc: "Technische Probleme beheben, saubere Architektur schaffen" },
                { icon: Search, title: "3. Keywords & Content", desc: "Gezielte Inhalte für relevante Suchbegriffe aufbauen oder optimieren" },
                { icon: Link2, title: "4. Autorität aufbauen", desc: "Verlinkungsstrategie intern + Backlink-Kampagnen koordinieren" },
                { icon: LineChart, title: "5. Tracking & Skalierung", desc: "Performance überwachen & Strategie datenbasiert anpassen" }
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
