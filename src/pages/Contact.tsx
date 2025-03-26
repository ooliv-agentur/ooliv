
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
        title="Let's Get Your Website Moving"
        subtitle="Whether you're starting from scratch or planning a relaunch — this is where momentum begins."
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
                  src="/lovable-uploads/8906f535-ee94-4493-8cd8-3a8a6a70ebd9.png" 
                  alt="Lisa, Content & First Touch at ooliv" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute inset-0 rounded-lg shadow-inner pointer-events-none"></div>
              </div>
            </div>
            
            {/* Text column */}
            <div className="flex flex-col justify-center space-y-4 md:pl-8">
              <h2 className="text-3xl font-bold text-brand-heading">Lisa Will Be the First to Say Hi</h2>
              <p className="text-lg text-brand-text">
                At ooliv, we don't hide behind forms or funnels. You'll start by talking to Lisa — who'll make sure your inquiry lands right where it belongs: with Uli, our CEO.
              </p>
              <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
                "I take every inquiry seriously — because most people already know what they need. They just want someone to finally move things forward."
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
              <h2 className="text-3xl font-bold text-brand-heading">How to Reach Us (in 10 Seconds or Less)</h2>
              <p className="text-lg text-brand-text">
                Use the sidebar. No extra clicks. No gatekeeping.
              </p>
              
              <div className="mt-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span>💬</span>
                    <span>Chat (for quick check-ins)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>📝</span>
                    <span>Inquiry Form (for detailed briefings)</span>
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
              
              <p className="mt-2">We'll get back to you — personally, quickly, and with clarity.</p>
            </div>
          </div>
        </div>
        
        {/* Soft wave divider bottom */}
        <div className="absolute bottom-0 left-0 w-full h-8 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-primary to-transparent"></div>
      </section>

      {/* Why ooliv? Section */}
      <section className="section-standard bg-gray-50">
        <div className="section-container">
          <h2 className="section-title text-center">Why Clients Work With ooliv</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-3 text-center">
              <li className="flex items-center justify-center gap-2">
                <span className="text-brand-primary font-bold">✓</span>
                <span>You'll speak directly with Uli — no account managers, no friction</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-brand-primary font-bold">✓</span>
                <span>You'll move fast — we remove bottlenecks from day one</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-brand-primary font-bold">✓</span>
                <span>You'll get answers, not "we'll look into it"</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-brand-primary font-bold">✓</span>
                <span>You'll get results — measurable, strategic, and on point</span>
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
                
                <p className="mt-4 italic text-sm">Uli, our founder and CEO, will lead your project — from kickoff to delivery.</p>
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
                  Will I speak with the CEO?
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  Yes. Every project is managed directly by Uli — no layers in between.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-medium text-lg">
                  How fast do you respond?
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  Usually the same day. Sometimes within the hour.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-medium text-lg">
                  Do you work internationally?
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  Yes. We support clients across Europe and beyond.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-standard">
        <div className="section-container text-center">
          <h2 className="section-title">What Happens Next?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            You reach out. We reply. And together we turn your idea into something that works.
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
