
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { 
  Building, 
  Mail, 
  Phone,
  MessageCircle,
  Send,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';

const Contact = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <PageHero
        badge="ooliv"
        title="Contact ooliv for Your Next Website Project"
        subtitle="Let's talk about your goals. Whether you're planning a relaunch or need expert support to move faster — we'll help you turn ideas into results."
        primaryCta={{
          text: "Start Your Project",
          link: "#"
        }}
        secondaryCta={{
          text: "Book a Strategy Call",
          link: "#"
        }}
      />

      {/* Meet Lisa - Your First Point of Contact */}
      <section className="section-standard bg-gray-50">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image column */}
            <div className="relative h-full flex justify-center md:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <img 
                  src="/lovable-uploads/996a7b08-e2fe-4996-8254-2af3eded918c.png" 
                  alt="Lisa, Content & First Touch at ooliv" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute inset-0 rounded-lg shadow-inner pointer-events-none"></div>
              </div>
            </div>
            
            {/* Text column */}
            <div className="flex flex-col justify-center space-y-4 md:pl-8">
              <h2 className="text-3xl font-bold text-brand-heading">Meet Lisa – Your First Point of Contact</h2>
              <p className="text-lg text-brand-text">
                Lisa is the first person you'll hear from at ooliv. She'll guide your inquiry through our process and make sure nothing gets missed — fast, friendly, and personal.
              </p>
              <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
                "Your first message sets the tone. We make sure it lands exactly where it needs to — with care and clarity."
                <footer className="text-sm mt-2 font-medium">– Lisa, Content & First Touch</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Choose How to Reach Us - Icon stack */}
      <section className="section-standard relative overflow-hidden">
        {/* Soft wave divider top */}
        <div className="absolute top-0 left-0 w-full h-8 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-primary to-transparent"></div>
        
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8 items-center py-4">
            {/* Left column: Icon stack */}
            <div className="flex flex-col items-center md:items-start justify-center space-y-6">
              <div className="bg-blue-100 rounded-full p-4 shadow-sm">
                <MessageCircle size={32} className="text-blue-600" />
              </div>
              <div className="bg-green-100 rounded-full p-4 shadow-sm">
                <Send size={32} className="text-green-600" />
              </div>
              <div className="bg-amber-100 rounded-full p-4 shadow-sm">
                <Mail size={32} className="text-amber-600" />
              </div>
              <div className="bg-purple-100 rounded-full p-4 shadow-sm">
                <Phone size={32} className="text-purple-600" />
              </div>
            </div>
            
            {/* Right column: Copy */}
            <div className="flex flex-col justify-center space-y-5">
              <h2 className="text-3xl font-bold text-brand-heading">Choose How to Reach Us</h2>
              <p className="text-lg text-brand-text">
                We don't use long forms or slow processes. Our sidebar gives you everything you need:
              </p>
              
              <div className="mt-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span>💬</span>
                    <span>Chatbot</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>📝</span>
                    <span>Step-by-step Inquiry Form</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>✉️</span>
                    <span>Email</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>📞</span>
                    <span>Phone</span>
                  </li>
                </ul>
              </div>
              
              <p className="mt-2">Pick what works best for you — and we'll be in touch fast.</p>
            </div>
          </div>
        </div>
        
        {/* Soft wave divider bottom */}
        <div className="absolute bottom-0 left-0 w-full h-8 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-primary to-transparent"></div>
      </section>

      {/* Why ooliv? Section */}
      <section className="section-standard bg-gray-50">
        <div className="section-container">
          <h2 className="section-title text-center">Why ooliv?</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-3 text-center">
              <li className="flex items-center justify-center gap-2">
                <span className="text-brand-primary font-bold">✓</span>
                <span>Clear communication and fast turnaround</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-brand-primary font-bold">✓</span>
                <span>Strategic thinking, not just implementation</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-brand-primary font-bold">✓</span>
                <span>Focus on measurable results</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-brand-primary font-bold">✓</span>
                <span>Built by experts who understand business</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="section-standard">
        <div className="section-container">
          <h2 className="section-title text-center">Contact Details</h2>
          <div className="max-w-3xl mx-auto text-center">
            <Card className="inline-block">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">ooliv GmbH</h3>
                <p className="mb-4">
                  Mombacher Str. 25<br />
                  55122 Mainz, Germany
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-3">
                    <Phone className="h-5 w-5 text-brand-primary" />
                    <span>06131 – 63 67 801</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Mail className="h-5 w-5 text-brand-primary" />
                    <a href="mailto:info@ooliv.de" className="hover:underline">info@ooliv.de</a>
                  </div>
                </div>
                
                <p className="mt-4 italic text-sm">Your project will always be handled by the person who leads it: our founder and CEO, Uli.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-standard bg-gray-50">
        <div className="section-container">
          <h2 className="section-title">Contact FAQs</h2>
          
          <div className="max-w-3xl mx-auto mt-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-medium text-lg">
                  Who will I speak with at ooliv?
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  Once your inquiry is received, you'll speak directly with Uli — no handoffs or account managers.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-medium text-lg">
                  How soon will I hear back?
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  Usually within 24 hours. Often much faster.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-medium text-lg">
                  Do you work with companies outside of Germany?
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  Yes. We work with clients in Germany, across Europe, and beyond.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-standard">
        <div className="section-container text-center">
          <h2 className="section-title">Let's Talk About What's Next</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Start a project with a team that works fast, communicates clearly, and delivers results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group" asChild>
              <Link to="#">
                Start Your Website Project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="group"
              asChild
            >
              <Link to="#">
                Book a Strategy Call
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
