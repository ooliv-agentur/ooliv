
import React from 'react';
import { BarChart2, Code, Database, TestTube, Rocket } from 'lucide-react';

const WebDevProcessNew = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-heading mb-6">Our Web Development Process</h2>
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
                <h3 className="text-xl font-bold text-brand-heading mb-2">1. Strategy & Setup</h3>
                <p className="text-brand-text">
                  Technical goals, platform selection, feature planning – all based on your business model.
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
                <h3 className="text-xl font-bold text-brand-heading mb-2">2. Development</h3>
                <p className="text-brand-text">
                  Structured, scalable, SEO-ready code.
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
                <h3 className="text-xl font-bold text-brand-heading mb-2">3. CMS or Backend (if needed)</h3>
                <p className="text-brand-text">
                  As a WordPress development agency, we offer flexible CMS setups – or we go backend-free for maximum performance.
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
                <h3 className="text-xl font-bold text-brand-heading mb-2">4. Testing & QA</h3>
                <p className="text-brand-text">
                  Speed, stability, SEO – across all devices.
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
                <h3 className="text-xl font-bold text-brand-heading mb-2">5. Launch & Support</h3>
                <p className="text-brand-text">
                  Go-live with tracking setup, technical support, and ongoing optimization.
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
