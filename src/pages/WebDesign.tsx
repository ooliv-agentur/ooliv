
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Monitor, Code, Paintbrush, Smartphone, ArrowRight, CheckCircle2, FileSpreadsheet, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTA from '@/components/CTA';
import FAQ from '@/components/FAQ';

const WebDesign = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-brand-heading">Professional Web Design & Development for B2B Companies</h1>
          <p className="text-xl max-w-3xl mx-auto mb-6 text-brand-text">
            Custom websites designed for growth, performance, and measurable results.
          </p>
          <p className="max-w-3xl mx-auto mb-8 text-brand-text">
            At ooliv, we create high-performing, visually appealing, and responsive websites tailored specifically to your business objectives. Whether you're looking for a modern WordPress solution, a seamless Shopify store, or custom-coded HTML development, we provide the perfect foundation for your digital success.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>

        {/* Benefits Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-8 text-center text-brand-heading">Why Choose ooliv for Web Design & Development?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Responsive & Mobile-First',
                description: 'Your website works flawlessly on any device, ensuring you capture every potential lead.'
              },
              {
                title: 'Intuitive User Experience',
                description: 'We focus on user-friendly navigation and design to enhance customer satisfaction.'
              },
              {
                title: 'Speed & Performance',
                description: 'Fast-loading, optimized websites to increase conversions and SEO rankings.'
              },
              {
                title: 'Security & Scalability',
                description: 'Robust and secure websites designed for growth and peace of mind.'
              }
            ].map((benefit, index) => (
              <div key={index} className="flex items-start p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <CheckCircle2 className="h-6 w-6 text-brand-primary flex-shrink-0 mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-brand-heading">{benefit.title}</h3>
                  <p className="text-brand-text">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-8 text-center text-brand-heading">Custom Web Services Tailored to Your Needs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Monitor className="h-12 w-12 mb-4 text-brand-primary" />,
                title: 'Web Design',
                description: 'Visually engaging websites that showcase your brand and resonate with your target audience.'
              },
              { 
                icon: <Code className="h-12 w-12 mb-4 text-brand-primary" />,
                title: 'Web Development',
                description: 'Flexible development solutions, including WordPress, Shopify, and custom HTML, tailored to your business processes.'
              },
              { 
                icon: <Paintbrush className="h-12 w-12 mb-4 text-brand-primary" />,
                title: 'UI/UX Optimization',
                description: 'User-centric designs that improve engagement, reduce bounce rates, and drive conversions.'
              },
              { 
                icon: <Smartphone className="h-12 w-12 mb-4 text-brand-primary" />,
                title: 'Responsive Websites',
                description: 'Optimized layouts ensuring seamless experiences on smartphones, tablets, and desktops.'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-center text-brand-heading">{service.title}</h3>
                <p className="text-center text-brand-text">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-24 bg-brand-backgroundAlt rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-brand-heading">How We Create Websites That Drive Results</h2>
          <div className="space-y-6">
            {[
              {
                number: "01",
                title: "Strategy & Planning",
                description: "We align your business goals with strategic web solutions, selecting the optimal platform for your needs."
              },
              {
                number: "02",
                title: "Custom Design & UX",
                description: "User-centric designs that capture attention, simplify navigation, and increase conversions."
              },
              {
                number: "03",
                title: "Tailored Development",
                description: "Robust, secure, and scalable website builds customized for your business workflows."
              },
              {
                number: "04",
                title: "Quality Assurance & Testing",
                description: "Comprehensive testing to ensure flawless functionality across all devices and browsers."
              },
              {
                number: "05",
                title: "Launch & Ongoing Support",
                description: "Continuous support and optimization to keep your website performing at its best."
              }
            ].map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center text-xl font-bold mr-4">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-brand-heading">{step.title}</h3>
                  <p className="text-brand-text">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cross-Linking Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-8 text-center text-brand-heading">Explore Our Specialized Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "SEO Optimization",
                description: "Boost visibility and rankings with our data-driven SEO strategies.",
                link: "/seo-performance-optimization",
                icon: <FileSpreadsheet className="h-10 w-10 text-brand-primary" />
              },
              {
                title: "AI-Powered Solutions",
                description: "Leverage AI technology to automate processes and enhance performance.",
                link: "/ai-solutions",
                icon: <FileSpreadsheet className="h-10 w-10 text-brand-primary" />
              },
              {
                title: "Lead Generation",
                description: "Convert website visitors into qualified leads with proven strategies.",
                link: "/lead-generation",
                icon: <FileSpreadsheet className="h-10 w-10 text-brand-primary" />
              }
            ].map((service, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-brand-heading">{service.title}</h3>
                <p className="mb-4 text-brand-text">{service.description}</p>
                <Button variant="link" className="p-0 text-brand-primary" asChild>
                  <Link to={service.link}>
                    Learn More <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-8 text-center text-brand-heading">Successful Web Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                client: "Scheurich – Lifestyle Brand",
                result: "120% increase in organic traffic through strategic redesign.",
                image: "bg-gray-100" // Placeholder for actual image
              },
              {
                client: "COBUS – ERP Solutions",
                result: "80% more leads through targeted web optimization.",
                image: "bg-gray-100" // Placeholder for actual image
              }
            ].map((study, index) => (
              <div key={index} className={`rounded-lg overflow-hidden shadow-md ${study.image} h-64 relative`}>
                <div className="absolute inset-0 bg-black bg-opacity-60 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold mb-2 text-white">{study.client}</h3>
                  <p className="text-white mb-4">{study.result}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/case-studies">
                View All Case Studies <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-8 text-center text-brand-heading">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                question: "Which website platform is best for my business?",
                answer: "We help you choose between WordPress, Shopify, or custom HTML solutions based on your specific business goals, budget, and scalability requirements."
              },
              {
                question: "How long does a web project take?",
                answer: "Most projects range from 8-12 weeks, depending on complexity. We'll provide a clear timeline tailored to your needs."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Absolutely—we offer ongoing website maintenance, updates, and support to ensure consistent performance."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2 text-brand-heading">{faq.question}</h3>
                <p className="text-brand-text">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-brand-backgroundAlt rounded-lg p-10 mb-24 text-center">
          <h2 className="text-3xl font-bold mb-4 text-brand-heading">Ready to Upgrade Your Web Presence?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-brand-text">
            Discuss your web design & development project with our expert team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Schedule Your Free Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Contact Us Directly</Link>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default WebDesign;
