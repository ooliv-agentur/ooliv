
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const AiTechHero = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              AI Technologies That Power Our Work
            </h1>
            <p className="text-xl font-medium text-gray-600">
              Real tools. Real results. No hype.
            </p>
            <p className="text-lg text-gray-700 max-w-xl">
              We integrate powerful AI technologies into your website projects—not to replace expertise, but to scale it. From fast content production to dynamic design and video, our AI stack supports the creative process without compromising quality.
            </p>
            <p className="text-lg font-medium text-brand-primary">
              🎯 Perfect for B2B companies that want scalable solutions with a human touch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button asChild size="lg" className="px-6 font-medium">
                <Link to="/contact">
                  Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-6 font-medium">
                <Link to="/case-studies">
                  View Case Studies
                </Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] flex items-center justify-center"
          >
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4">
              <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center">
                <img src="/chatgpt-logo.svg" alt="ChatGPT" className="h-16 w-16 mb-2" />
                <span className="text-sm font-medium">ChatGPT</span>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center">
                <img src="/midjourney-logo.svg" alt="Midjourney" className="h-16 w-16 mb-2" />
                <span className="text-sm font-medium">Midjourney</span>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center">
                <img src="/sora-logo.svg" alt="Sora" className="h-16 w-16 mb-2" />
                <span className="text-sm font-medium">Sora</span>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center justify-center">
                <div className="h-16 w-16 mb-2 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center text-gray-400">+</div>
                <span className="text-sm font-medium">More Tools</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AiTechHero;
