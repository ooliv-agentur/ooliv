import React from 'react';
import { TrendingUp, User, Target, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyDifferentSection = () => {
  const outcomes = [
    {
      icon: TrendingUp,
      text: "+127 % mehr qualifizierte Leads (Ø nach 6 Monaten)"
    },
    {
      icon: User,
      text: "Jedes Projekt persönlich geführt von Uli Schönleber"
    },
    {
      icon: Target,
      text: "Klare KPIs, strukturierte Prozesse, messbare Ergebnisse"
    },
    {
      icon: Zap,
      text: "Digitale Systeme, die skalieren statt verwalten"
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
            Geführt von einem Senior-Strategen — keine Junioren, kein Weiterreichen, kein Sales-Vorlauf.
          </motion.p>
        </div>

        {/* Outcome Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {outcomes.map((outcome, index) => {
            const IconComponent = outcome.icon;
            
            return (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariants}
                className="group relative bg-white border-2 border-[#E5E5E5] rounded-2xl p-8 lg:p-10 hover:border-[#2DAEAA] transition-all duration-300 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#2DAEAA] bg-opacity-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent 
                      className="w-7 h-7 text-[#2DAEAA]" 
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Text */}
                <p className="text-base sm:text-lg font-medium text-[#0D0D0D] leading-relaxed">
                  {outcome.text}
                </p>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#2DAEAA] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-xl"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyDifferentSection;
