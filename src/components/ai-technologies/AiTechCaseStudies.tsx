
import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

const AiTechCaseStudies = () => {
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
          <h2 className="text-3xl font-bold mb-2">🚀 Coming Soon: AI Use Cases</h2>
          <p className="text-lg text-gray-600">
            We're preparing detailed case studies that show how AI helped us reduce project timelines, scale multilingual content, and improve UX. Stay tuned.
          </p>
        </motion.div>

        <div className="flex justify-center mt-8">
          <Button asChild variant="outline" size="lg" className="px-6 font-medium">
            <Link to="/case-studies">
              Explore Case Studies <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AiTechCaseStudies;
