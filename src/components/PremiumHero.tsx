import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { cn } from '@/lib/utils';

const PremiumHero = () => {
  const handlePrimaryCTA = () => {
    window.dispatchEvent(new CustomEvent('open-lead-form', { 
      detail: { source: 'PremiumHero', variant: 'project' } 
    }));
  };

  const handleSecondaryCTA = () => {
    // Scroll to "Warum ooliv" or services section
    const targetSection = document.querySelector('#warum-ooliv');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Fade-up animation variants - very subtle
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 6, willChange: 'transform, opacity' },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      willChange: 'auto',
      transition: {
        duration: 0.35,
        delay: delay * 0.04,
        ease: [0.25, 0.1, 0.25, 1]
      }
    })
  };

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 py-16 sm:py-20 lg:py-28 items-center min-h-[calc(100vh-80px)]">
          
          {/* Left Column - Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="space-y-8 lg:space-y-10"
          >
            {/* Main Headline */}
            <motion.h1 
              custom={0}
              variants={fadeUpVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-[#0D0D0D]"
            >
              Digitale Klarheit,{' '}
              <span className="text-[#2DAEAA]">die verkauft.</span>
            </motion.h1>

            {/* Subline */}
            <motion.p 
              custom={1}
              variants={fadeUpVariants}
              className="text-lg sm:text-xl lg:text-2xl text-[#333333] leading-relaxed max-w-2xl"
            >
              Wir entwickeln Strategien, UX-Konzepte und Websites, die messbar mehr Leads generieren — ohne Agentur-Theater und ohne endlose Meetings.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              custom={2}
              variants={fadeUpVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={handlePrimaryCTA}
                variant="default"
                size="lg"
                data-button-style="primary"
                className="group text-sm sm:text-base md:text-lg px-6 sm:px-8 py-6 h-auto"
                aria-label="Kostenloses Konzept sichern"
              >
                <span className="hidden sm:inline">Kostenloses Konzept sichern</span>
                <span className="sm:hidden">Konzept sichern</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Button>
              
              <Button
                onClick={handleSecondaryCTA}
                variant="outline"
                size="lg"
                data-button-style="secondary"
                className="text-sm sm:text-base md:text-lg px-6 sm:px-8 py-6 h-auto group"
                aria-label="Arbeitsweise ansehen"
              >
                <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" aria-hidden="true" />
                <span className="hidden sm:inline">Arbeitsweise ansehen</span>
                <span className="sm:hidden">Arbeitsweise</span>
              </Button>
            </motion.div>

            {/* Trust Line */}
            <motion.div 
              custom={3}
              variants={fadeUpVariants}
              className="flex items-center gap-3 text-sm sm:text-base text-[#666666] pt-4"
            >
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#2DAEAA] border-2 border-white flex items-center justify-center text-white text-xs font-semibold">
                  ✓
                </div>
                <div className="w-8 h-8 rounded-full bg-[#2DAEAA] border-2 border-white flex items-center justify-center text-white text-xs font-semibold">
                  ✓
                </div>
                <div className="w-8 h-8 rounded-full bg-[#2DAEAA] border-2 border-white flex items-center justify-center text-white text-xs font-semibold">
                  ✓
                </div>
              </div>
              <span>
                <strong className="text-[#0D0D0D]">100+ erfolgreiche Projekte</strong> · Geführt von einem Senior-Strategen
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column - Abstract UX Wireframe Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            {/* Abstract Wireframe Container */}
            <div className="relative w-full aspect-[4/5] max-w-lg mx-auto">
              {/* Browser Window Frame */}
              <div className="absolute inset-0 rounded-2xl border-2 border-[#E5E5E5] bg-white shadow-2xl overflow-hidden">
                {/* Browser Chrome */}
                <div className="h-10 bg-[#F5F5F5] border-b border-[#E5E5E5] flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#28CA42]"></div>
                  </div>
                  <div className="flex-1 h-6 bg-white rounded ml-3 flex items-center px-3">
                    <div className="h-1 w-16 bg-[#E5E5E5] rounded"></div>
                  </div>
                </div>

                {/* Wireframe Content */}
                <div className="p-8 space-y-6">
                  {/* Header */}
                  <div className="space-y-3">
                    <div className="h-8 w-32 bg-[#E5E5E5] rounded"></div>
                    <div className="h-4 w-full bg-[#F0F0F0] rounded"></div>
                    <div className="h-4 w-3/4 bg-[#F0F0F0] rounded"></div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-3">
                    <div className="h-12 flex-1 bg-[#2DAEAA] bg-opacity-20 rounded-lg border-2 border-[#2DAEAA] border-opacity-30"></div>
                    <div className="h-12 w-12 bg-[#E5E5E5] rounded-lg"></div>
                  </div>

                  {/* Content Blocks */}
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="space-y-2">
                      <div className="h-16 bg-[#F5F5F5] rounded-lg border border-[#E5E5E5]"></div>
                      <div className="h-3 w-3/4 bg-[#E5E5E5] rounded"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 bg-[#F5F5F5] rounded-lg border border-[#E5E5E5]"></div>
                      <div className="h-3 w-3/4 bg-[#E5E5E5] rounded"></div>
                    </div>
                  </div>

                  {/* Feature List */}
                  <div className="space-y-3 pt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#2DAEAA] bg-opacity-20 flex-shrink-0"></div>
                      <div className="h-3 flex-1 bg-[#E5E5E5] rounded"></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#2DAEAA] bg-opacity-20 flex-shrink-0"></div>
                      <div className="h-3 flex-1 bg-[#E5E5E5] rounded"></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#2DAEAA] bg-opacity-20 flex-shrink-0"></div>
                      <div className="h-3 w-4/5 bg-[#E5E5E5] rounded"></div>
                    </div>
                  </div>

                  {/* Bottom Image Placeholder */}
                  <div className="h-32 bg-gradient-to-br from-[#F0F0F0] to-[#E5E5E5] rounded-lg relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 border-4 border-white border-opacity-50 rounded-lg rotate-12"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#2DAEAA] bg-opacity-10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#2DAEAA] bg-opacity-10 rounded-full blur-3xl"></div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Subtle background gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F7F8FC] to-transparent opacity-50 pointer-events-none -z-10"></div>
    </section>
  );
};

export default PremiumHero;
