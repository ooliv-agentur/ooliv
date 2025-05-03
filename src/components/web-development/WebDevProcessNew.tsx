
import React from 'react';
import { BarChart2, Code, Database, TestTube, Rocket } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WebDevProcessNew = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-heading mb-6">
            {isGerman 
              ? "Unser Webentwicklungs-Prozess – von der Idee bis zum Livegang" 
              : "Our Web Development Process – from Idea to Launch"}
          </h2>
        </div>

        <div className="relative">
          {/* Process Timeline */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-1/2"></div>

          {/* Process Steps */}
          <div className="space-y-12 relative">
            {/* Step 1 */}
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
              <div className="md:text-right pb-8 md:pb-0 order-1 md:pr-12">
                <div className="inline-block p-3 rounded-full bg-brand-primary text-white mb-4">
                  <BarChart2 className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-brand-heading mb-2">
                  {isGerman ? "1. Strategie & Setup" : "1. Strategy & Setup"}
                </h3>
                <p className="text-brand-text">
                  {isGerman 
                    ? "Technische Ziele, Plattformwahl, Feature-Definition – auf Basis Ihres Geschäftsmodells." 
                    : "Technical goals, platform selection, feature planning – all based on your business model."}
                </p>
              </div>
              
              <div className="md:hidden w-full flex justify-center">
                <div className="w-0.5 h-8 bg-gray-300"></div>
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
                <h3 className="text-xl font-bold text-brand-heading mb-2">
                  {isGerman ? "2. Entwicklung" : "2. Development"}
                </h3>
                <p className="text-brand-text">
                  {isGerman 
                    ? "Klar strukturierter Code – skalierbar, SEO-ready, sauber programmiert." 
                    : "Structured, scalable, SEO-ready code."}
                </p>
              </div>
              
              <div className="md:hidden w-full flex justify-center">
                <div className="w-0.5 h-8 bg-gray-300"></div>
              </div>
              
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                <div className="bg-white rounded-full h-8 w-8 border-4 border-brand-primary"></div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
              <div className="md:text-right pb-8 md:pb-0 order-1 md:pr-12">
                <div className="inline-block p-3 rounded-full bg-brand-primary text-white mb-4">
                  <Database className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-brand-heading mb-2">
                  {isGerman ? "3. CMS oder Backend (wenn nötig)" : "3. CMS or Backend (if needed)"}
                </h3>
                <p className="text-brand-text">
                  {isGerman 
                    ? "Als WordPress Agentur in Mainz setzen wir Ihr CMS so auf, dass Sie Inhalte flexibel pflegen können – oder wir entwickeln eine backendfreie Lösung mit klarem Code und maximaler Performance." 
                    : "As a WordPress development agency, we offer flexible CMS setups – or we go backend-free for maximum performance."}
                </p>
              </div>
              
              <div className="md:hidden w-full flex justify-center">
                <div className="w-0.5 h-8 bg-gray-300"></div>
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
                  <TestTube className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-brand-heading mb-2">
                  {isGerman ? "4. Testing & Qualitätssicherung" : "4. Testing & QA"}
                </h3>
                <p className="text-brand-text">
                  {isGerman 
                    ? "Speed, SEO, Stabilität – auf allen Geräten." 
                    : "Speed, stability, SEO – across all devices."}
                </p>
              </div>
              
              <div className="md:hidden w-full flex justify-center">
                <div className="w-0.5 h-8 bg-gray-300"></div>
              </div>
              
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                <div className="bg-white rounded-full h-8 w-8 border-4 border-brand-primary"></div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
              <div className="md:text-right pb-8 md:pb-0 order-1 md:pr-12">
                <div className="inline-block p-3 rounded-full bg-brand-primary text-white mb-4">
                  <Rocket className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-brand-heading mb-2">
                  {isGerman ? "5. Launch & Betreuung" : "5. Launch & Support"}
                </h3>
                <p className="text-brand-text">
                  {isGerman 
                    ? "Go-live mit Setup von Tracking, Support & laufender Optimierung." 
                    : "Go-live with tracking setup, technical support, and ongoing optimization."}
                </p>
              </div>
              
              <div className="hidden md:block order-2"></div>
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                <div className="bg-white rounded-full h-8 w-8 border-4 border-brand-primary"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevProcessNew;
