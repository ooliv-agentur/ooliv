
import React from 'react';
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AiTechBenefits = () => {
  const benefits = [
    {
      problem: "Not artificial. Just intelligent.",
      solution: "We use AI tools to speed up production, elevate quality, and explore creative ideas faster. Always guided by strategy. Always controlled by people."
    }
  ];

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
          <h2 className="text-3xl font-bold mb-4">How We Use AI to Accelerate Results</h2>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-6 mb-12">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{item.problem}</h3>
                      <p className="text-gray-700">{item.solution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-6">Human Expertise First. AI Second.</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            AI helps us move faster—but never without strategic oversight. Every ooliv project is led by senior experts who know when to use AI, and when to go full human.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center gap-2">
              <Check className="text-green-500 h-5 w-5 flex-shrink-0" />
              <p className="text-gray-700">We never outsource creativity</p>
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-green-500 h-5 w-5 flex-shrink-0" />
              <p className="text-gray-700">Your data is protected</p>
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-green-500 h-5 w-5 flex-shrink-0" />
              <p className="text-gray-700">We measure what matters</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiTechBenefits;
