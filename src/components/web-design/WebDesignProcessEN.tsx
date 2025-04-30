
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Discovery & Research",
    description: "We start by understanding your business goals, target audience, and competitive landscape to develop a strategic direction.",
    items: [
      "Stakeholder interviews",
      "Target audience analysis",
      "Competitive benchmarking",
      "Technical requirements gathering",
      "Content inventory and planning"
    ]
  },
  {
    number: "02",
    title: "Planning & Strategy",
    description: "Next, we develop the site architecture and user flows, ensuring clear pathways to conversion.",
    items: [
      "Information architecture",
      "User journey mapping",
      "Content strategy",
      "Technical specifications",
      "Project timeline"
    ]
  },
  {
    number: "03",
    title: "Design & Prototyping",
    description: "We create visual designs and interactive prototypes that bring your brand to life and ensure usability.",
    items: [
      "Wireframing",
      "UI design concepts",
      "Responsive layouts",
      "Interactive prototypes",
      "Client review and feedback"
    ]
  },
  {
    number: "04",
    title: "Development & Testing",
    description: "Our development team brings the designs to life with clean, efficient code that performs across all devices.",
    items: [
      "Front-end development",
      "Back-end integration",
      "CMS implementation (if applicable)",
      "Cross-browser/device testing",
      "Performance optimization"
    ]
  },
  {
    number: "05",
    title: "Launch & Growth",
    description: "After thorough testing, we launch your site and provide ongoing support to ensure continuous improvement.",
    items: [
      "Pre-launch checklist",
      "SEO optimization",
      "Analytics setup",
      "Post-launch monitoring",
      "Continuous improvement plan"
    ]
  }
];

const WebDesignProcessEN = () => {
  return (
    <section className="py-24 bg-[#f7fafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-heading">
            Our Web Design Process
          </h2>
          <p className="text-xl text-brand-text">
            ooliv advertising agency Mainz follows a structured, collaborative approach to web design that delivers results and minimizes surprises.
          </p>
        </motion.div>
        
        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="lg:col-span-1">
                <div className="w-14 h-14 rounded-full bg-[#004d51] text-white flex items-center justify-center text-xl font-bold">
                  {step.number}
                </div>
              </div>
              
              <div className="lg:col-span-3">
                <h3 className="text-2xl font-bold mb-2 text-brand-heading">{step.title}</h3>
                <p className="text-brand-text">{step.description}</p>
              </div>
              
              <div className="lg:col-span-8">
                <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
                  <h4 className="font-medium mb-4 text-brand-heading">What happens in this phase:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-[#b1b497] mr-2"></div>
                        <span className="text-brand-text">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDesignProcessEN;
