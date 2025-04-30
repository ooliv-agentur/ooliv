
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const benefits = [
  {
    title: "User-Focused Design",
    description: "Intuitive interfaces that guide visitors through your site, providing clear paths toward conversion and reducing friction points.",
    icon: "/lovable-uploads/3a13a1f1-b92a-4c00-a174-8788747be4d8.png",
  },
  {
    title: "Conversion Strategy",
    description: "Strategic placement of calls-to-action, testimonials, and trust signals to transform visitors into leads or customers.",
    icon: "/lovable-uploads/53a8740e-7040-4fd8-8c2d-4476d7aea912.png",
  },
  {
    title: "SEO-Ready Code",
    description: "Clean, efficient code that provides a strong foundation for search engine visibility and sustainable rankings.",
    icon: "/lovable-uploads/5f09a7f9-6e7f-4a8e-b087-d2d250bc591e.png",
  },
  {
    title: "Brand-Focused Design",
    description: "A unique visual identity that reflects your company values and resonates with your target audience.",
    icon: "/lovable-uploads/35bef0c2-85ae-4280-ac53-b37e5b5df6fa.png",
  },
  {
    title: "Mobile-First Approach",
    description: "Websites that look and perform perfectly on all devices, from desktops to smartphones.",
    icon: "/lovable-uploads/455b2c4e-3a9c-4fa8-914d-4368b126b1a7.png",
  },
  {
    title: "Result Measurement",
    description: "Built-in analytics and conversion tracking to measure and optimize your website's performance continually.",
    icon: "/lovable-uploads/8557fac8-591b-485b-86bf-fb6988027711.png",
  }
];

const WebDesignBenefitsEN = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-brand-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What Makes Our Web Design Unique
          </motion.h2>
          <motion.p 
            className="text-xl text-brand-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            ooliv's advertising agency Mainz approach combines aesthetic excellence with strategic thinking to deliver websites that perform for your business.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className={cn(
                "bg-[#f7fafa] p-8 rounded-lg border border-gray-100 hover:shadow-md transition-shadow duration-300",
              )}
              variants={itemVariants}
            >
              <div className="h-14 w-14 mb-6 flex items-center justify-center">
                <img src={benefit.icon} alt={`${benefit.title} icon - by ooliv advertising agency Mainz`} className="h-12 w-12 object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-heading">{benefit.title}</h3>
              <p className="text-brand-text">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WebDesignBenefitsEN;
