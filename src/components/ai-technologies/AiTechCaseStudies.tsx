
import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const AiTechCaseStudies = () => {
  const { language } = useLanguage();
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          {language === 'de' ? (
            <>
              <h2 className="text-3xl font-bold mb-2">Praxisbeispiele zum KI-Einsatz folgen in Kürze</h2>
              <p className="text-lg text-gray-600">
                Wir dokumentieren gerade, wie KI uns hilft, Produktionszeiten zu reduzieren, mehrsprachige Inhalte zu skalieren und die Web-UX zu verbessern. Case Studies folgen in Kürze.
              </p>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold mb-2">Where AI Meets Strategy – in Real Projects</h2>
              <p className="text-lg text-gray-600">
                Curious how we apply AI in real client work? Explore selected projects where AI meets results-driven strategy.
              </p>
            </>
          )}
        </motion.div>

        <div className="flex justify-center mt-8">
          <Button asChild variant="outline" size="lg" className="px-6 font-medium">
            <Link to={language === 'de' ? "/de/referenzen" : "/case-studies"}>
              {language === 'de' ? "Referenzen erkunden" : "Explore Case Studies"} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AiTechCaseStudies;
