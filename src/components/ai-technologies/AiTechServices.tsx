
import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Image, Video, Layout } from "lucide-react";

const AiTechServices = () => {
  const services = [
    {
      icon: <MessageSquare className="h-10 w-10 text-blue-500" />,
      title: "Content Creation with ChatGPT",
      description: "We use ChatGPT to support ideation, messaging frameworks, SEO content outlines, and scalable drafts for multilingual projects. Then we refine every word with strategic copywriting.",
      features: [
        "AI-assisted blog & page drafts",
        "SEO-optimized content blueprints",
        "Multilingual copy assistance",
        "Editorial quality control by humans"
      ]
    },
    {
      icon: <Image className="h-10 w-10 text-purple-500" />,
      title: "Visuals with Midjourney",
      description: "Midjourney enables our team to create stunning, custom visuals and illustrations tailored to your brand—without the constraints of stock imagery.",
      features: [
        "Unique hero images",
        "Brand-specific graphics",
        "Visual storytelling concepts"
      ]
    },
    {
      icon: <Video className="h-10 w-10 text-red-500" />,
      title: "Motion & Video with Sora",
      description: "From explainer videos to background loops, we explore video generation through tools like Sora to bring web experiences to life—efficiently and creatively.",
      features: [
        "Short-form hero animations",
        "Product explainers",
        "Video background assets"
      ]
    },
    {
      icon: <Layout className="h-10 w-10 text-green-500" />,
      title: "AI for Web Components",
      description: "We use AI tools behind the scenes to speed up frontend production, test variations, and improve UI/UX workflows.",
      features: [
        "Component libraries assisted by AI pattern tools",
        "Faster prototyping & wireframes",
        "Smarter asset versioning"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
