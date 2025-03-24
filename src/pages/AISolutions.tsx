
import React from 'react';
import PageLayout from '@/components/PageLayout';
import PageHero from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { Bot, Brain, Cpu, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

const aiServices = [
  { 
    icon: Bot,
    title: 'AI Chatbots',
    description: 'Intelligent conversational agents that engage with your customers 24/7'
  },
  { 
    icon: Brain,
    title: 'Machine Learning',
    description: 'Custom ML models that learn from your data and improve over time'
  },
  { 
    icon: Sparkles,
    title: 'AI Content',
    description: 'Content generation and optimization powered by advanced AI models'
  },
  { 
    icon: Cpu,
    title: 'AI Integration',
    description: 'Seamless integration of AI technologies into your existing systems'
  }
];

// Custom FAQ items for AI Solutions page
const aiFaqs = [
  {
    question: "How can AI improve my business operations?",
    answer: "AI can automate repetitive tasks, analyze large datasets for insights, personalize customer experiences, and optimize decision-making processes for significant productivity and revenue gains."
  },
  {
    question: "Is my data safe when using AI solutions?",
    answer: "Absolutely. We implement robust security measures, data encryption, and strict privacy protocols to ensure your data remains protected throughout the AI implementation process."
  },
  {
    question: "How long does AI implementation typically take?",
    answer: "Implementation timelines vary based on project complexity, but most solutions can be deployed within 4-12 weeks, with initial results visible much sooner."
  },
  {
    question: "Do I need technical expertise to use your AI solutions?",
    answer: "No. We design our AI solutions with user-friendly interfaces and provide comprehensive training to ensure your team can leverage the technology effectively without specialized expertise."
  }
];

const AISolutions = () => {
  return (
    <PageLayout className="overflow-x-hidden">
      <PageHero 
        badge="AI-Powered Solutions"
        title="Harness AI to Transform Your Business Operations"
        subtitle="Our AI-powered solutions help you automate processes, gain deeper insights, and create personalized experiences for your customers—driving efficiency and growth."
        primaryCta={{
          text: "Explore AI Solutions",
          link: "/contact"
        }}
        secondaryCta={{
          text: "Learn How It Works",
          link: "#ai-services"
        }}
      />
      
      <section className="section-gradient">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Cutting-Edge AI for Modern Businesses</h2>
              <p className="text-lg mb-6">
                Our AI-powered solutions help you automate processes, gain deeper insights, 
                and create personalized experiences for your customers.
              </p>
              <ul className="space-y-4">
                {[
                  'AI-driven content creation and optimization',
                  'Smart chatbots and virtual assistants',
                  'Predictive analytics and business intelligence',
                  'Personalization engines for user experiences'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-brand-primary mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-8 button-primary" size="lg" asChild>
                <Link to="/contact">
                  Get Started with AI
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 h-[400px] flex items-center justify-center">
              <p className="text-gray-500">AI Technology Image</p>
            </div>
          </div>
        </div>
      </section>

      <section id="ai-services" className="section-standard">
        <div className="section-container">
          <h2 className="heading-standard">Our AI Services</h2>
          <p className="subheading-standard">
            Comprehensive AI solutions designed to drive efficiency and growth for your business
          </p>
          
          <div className="grid-standard">
            {aiServices.map((service, index) => (
              <div key={index} className="card-standard hover:shadow-lg transition-shadow">
                <div className="icon-standard">
                  <service.icon className="h-6 w-6 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-brand-text">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ customFaqs={aiFaqs} />
      
      <CTA 
        title="Ready to Leverage AI for Your Business?"
        subtitle="Let's discuss how our AI-powered solutions can help you stay ahead of the competition"
        primaryCta="Schedule a Demo"
        secondaryCta="Request Pricing Information"
      />
    </PageLayout>
  );
};

export default AISolutions;
