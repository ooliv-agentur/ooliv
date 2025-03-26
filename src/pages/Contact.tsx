
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

      {/* Lisa – Your First Point of Contact */}
      <section className="section-standard bg-gray-50">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image column */}
            <div className="relative h-full flex justify-center md:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <img 
                  src="/public/lovable-uploads/343738d2-5fa7-4ca5-a4db-58f6726d3609.png" 
                  alt="Lisa, Content & First Touch at ooliv" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute inset-0 rounded-lg shadow-inner pointer-events-none"></div>
              </div>
            </div>
            
            {/* Text column */}
            <div className="flex flex-col justify-center space-y-4 md:pl-8">
              <h2 className="text-3xl font-bold text-brand-heading">Lisa – Your First Point of Contact</h2>
              <p className="text-lg text-brand-text">
                <strong>You'll speak with Nico — but Lisa makes the first impression.</strong>
              </p>
              <p className="text-brand-text">
                Lisa ensures that every message gets the attention it deserves. From your first inquiry to handoff, she makes sure nothing is missed.
              </p>
              <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
                "We treat every contact as the start of a partnership. That means quick replies, personal attention, and clear next steps."
                <footer className="text-sm mt-2 font-medium">– Lisa, Content & First Touch</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Contact Section */}
      <section className="section-standard">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Direct Contact, No Middlemen</h2>
            <p className="text-lg mb-10 text-center">
              All communication at ooliv is handled directly by our CEO — fast, strategic, and personal.
            </p>
            
            <div className="text-center space-y-4">
              <p>Use the sidebar to reach us via:</p>
              <ul className="inline-flex flex-col items-center space-y-2">
                <li>Chatbot</li>
                <li>Step-by-step Inquiry Form</li>
                <li>Email</li>
                <li>Phone</li>
              </ul>
              <p>You choose how we start — and we'll respond fast.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="section-standard bg-gray-50">
        <div className="section-container">
          <h2 className="section-title text-center">Why work with us?</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-3 text-center">
              <li className="flex items-center justify-center gap-2">
                <span className="text-brand-primary font-bold">✓</span>
                <span>Direct communication with our CEO</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-brand-primary font-bold">✓</span>
                <span>Fast response times and decisive action</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-brand-primary font-bold">✓</span>
                <span>Strategic thinking, not just implementation</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-brand-primary font-bold">✓</span>
                <span>Focus on business results, not just design</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section-standard">
        <div className="section-container">
          <h2 className="section-title text-center">Want to Speak Directly?</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="mb-6">We're based in Mainz — and ready to talk.</p>
            
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
                
                <p className="mt-4 italic text-sm">All communication is handled directly by our CEO — fast, strategic, and personal.</p>
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
                  You'll speak directly with our founder and CEO — no handoffs or delays.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-medium text-lg">
                  How soon will I hear back?
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  Usually within 24 hours. For urgent inquiries, just give us a call.
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
            Start a project with a team that works fast, communicates clearly, and delivers results. You'll always speak directly with the person who leads your project.
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
