import React from 'react';
import { Target, Layout, Palette, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CoreServicesSection = () => {
  const services = [
    {
      icon: Target,
      title: "Digitale Transformation & Strategie",
      items: [
        "Value Proposition & Differenzierung",
        "Customer Journey Mapping",
        "KPI-Systeme & Priorisierung",
        "Wettbewerbsanalyse"
      ]
    },
    {
      icon: Layout,
      title: "UX-Konzept & Struktur",
      items: [
        "Informationsarchitektur",
        "Wireframes & Prototypen",
        "Funnel-Design",
        "Conversion-Optimierung"
      ]
    },
    {
      icon: Palette,
      title: "Design & Umsetzung",
      items: [
        "Interface-Design (mobil & desktop)",
        "WordPress-Entwicklung",
        "Performance-optimierter Launch",
        "Markeneinbindung"
      ]
    },
    {
      icon: Search,
      title: "SEO, Performance & AI-Workflows",
      items: [
        "Technisches SEO + Onpage",
        "AI-gestützte Recherche & Content",
        "Monitoring & Optimierung"
      ]
    }
  ];

  const handleCTA = () => {
    window.dispatchEvent(new CustomEvent('open-lead-form', { 
      detail: { source: 'CoreServicesSection', variant: 'strategy' } 
    }));
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-[#F7F8FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D0D0D] mb-4">
            Unsere Kernleistungen
          </h2>
          <p className="text-lg sm:text-xl text-[#666666] max-w-3xl mx-auto">
            Klar definiert. Auf digitale Transformation ausgerichtet.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-[#E5E5E5] hover:border-[#0BC3C3] group h-full flex flex-col"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#0BC3C3] bg-opacity-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent 
                      className="w-7 h-7 text-[#0BC3C3]"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#0D0D0D] mb-6">
                  {service.title}
                </h3>

                {/* Service Items */}
                <ul className="space-y-3 flex-grow">
                  {service.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex}
                      className="flex items-start text-[15px] text-[#666666] leading-relaxed"
                    >
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0BC3C3] mt-2 mr-3 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Button
            onClick={handleCTA}
            variant="default"
            size="lg"
            className="group text-base sm:text-lg px-8 py-6 h-auto"
            aria-label="Kostenlose Strategie-Session buchen"
          >
            Kostenlose Strategie-Session buchen
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreServicesSection;
