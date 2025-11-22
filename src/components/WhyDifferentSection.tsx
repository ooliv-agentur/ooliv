import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyDifferentSection = () => {
  const outcomes = [
    {
      text: "+127 % mehr qualifizierte Leads (Ø nach 6 Monaten)"
    },
    {
      text: "Jedes Projekt persönlich geführt von Uli Schönleber"
    },
    {
      text: "Klare KPIs, strukturierte Prozesse, messbare Ergebnisse"
    },
    {
      text: "Digitale Transformation: Systeme, die skalieren statt verwalten"
    }
  ];

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D0D0D] mb-6"
          >
            Wir sind keine typische Agentur.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-[#666666] leading-relaxed"
          >
            Geführt von einem Senior-Strategen – kein Weiterreichen an Junioren, keine Sales-Schleifen, kein Overhead.
          </motion.p>
        </div>

        {/* Outcome Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {outcomes.map((outcome, index) => {
            return (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariants}
                className="group relative bg-white border border-[#E5E5E5] rounded-xl p-6 lg:p-8 hover:border-[#0BC3C3] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* Checkmark */}
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-[#0BC3C3] flex items-center justify-center">
                      <Check 
                        className="w-4 h-4 text-white" 
                        strokeWidth={3}
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <p className="text-base sm:text-lg font-medium text-[#0D0D0D] leading-relaxed">
                    {outcome.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyDifferentSection;
