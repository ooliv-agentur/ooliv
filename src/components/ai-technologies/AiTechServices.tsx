
import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Image, Video, Layout } from "lucide-react";

const AiTechServices = () => {
  const services = [
    {
      icon: <MessageSquare className="h-10 w-10 text-blue-500" />,
      title: "Content Creation with ChatGPT",
      description: "We use ChatGPT to accelerate ideation and scale content production—especially for multilingual, SEO-focused, or large-scale sites.",
      features: [
        "Structured SEO outlines",
        "Multilingual content scaffolds",
        "Idea generation for messaging & blog content",
        "Always refined by human editors and strategists"
      ]
    },
    {
      icon: <Image className="h-10 w-10 text-purple-500" />,
      title: "Visuals with Midjourney",
      description: "Midjourney helps us develop brand-specific illustrations, image concepts, and design direction faster than traditional sourcing.",
      features: [
        "Custom hero visuals",
        "Illustration-based UI elements",
        "Unique brand imagery for key sections"
      ]
    },
    {
      icon: <Video className="h-10 w-10 text-red-500" />,
      title: "Motion & Video with Sora",
      description: "We use Sora and similar tools to generate short-form videos and animations for web—fast, on-brand, and impactful.",
      features: [
        "Hero animations & loop backgrounds",
        "Explainer formats for complex products",
        "Conceptual visual storytelling"
      ]
    },
    {
      icon: <Layout className="h-10 w-10 text-green-500" />,
      title: "AI for Web Components & Development",
      description: "AI accelerates technical production and testing—from UI variants to component libraries.",
      features: [
        "Faster prototyping and wireframes",
        "AI-assisted code snippets",
        "Smarter versioning for assets and design files"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How We Use AI — Our Stack</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-bold ml-3">{service.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-brand-primary mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiTechServices;
