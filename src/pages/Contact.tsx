
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { 
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
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  const [showAuditForm, setShowAuditForm] = useState(false);
  
  const handleRequestAudit = () => {
    setShowAuditForm(true);
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <PageHero
        badge="ooliv"
        title="Let's Talk About Your Website Project"
        subtitle="We work with businesses across Europe — always with a clear focus and fast personal communication."
        primaryCta={{
          text: "Start Your Project",
          link: "#"
        }}
        secondaryCta={{
          text: "Book a Strategy Call",
          link: "#"
        }}
      />

      {/* Meet Lisa - Your First Contact */}
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
              <h2 className="text-3xl font-bold text-brand-heading">Meet Lisa – Your First Contact</h2>
              <p className="text-lg text-brand-text">
                Lisa is the first person you'll talk to at ooliv. She handles every inquiry personally, makes things easy, and ensures your message reaches Uli — the founder and CEO — without delay.
              </p>
              <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
                "You don't need to fill out long forms. Just reach out — we'll take it from there."
                <footer className="text-sm mt-2 font-medium">– Lisa, Content & First Touch</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch - Icon stack */}
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
              <h2 className="text-3xl font-bold text-brand-heading">Get in Touch</h2>
              <p className="text-lg text-brand-text">
                Use the sidebar — or just click what works best for you:
              </p>
              
              <div className="mt-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span>💬</span>
                    <span>Start Chat</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>📝</span>
                    <span>Send Inquiry</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>✉️</span>
                    <span>Email Us</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>📞</span>
                    <span>Call Us</span>
                  </li>
                </ul>
              </div>
              
              <blockquote className="border-l-4 border-brand-primary pl-4 italic my-4">
                No middlemen. No delays. Your message goes straight to our core team.
              </blockquote>
            </div>
          </div>
        </div>
        
        {/* Soft wave divider bottom */}
        <div className="absolute bottom-0 left-0 w-full h-8 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-primary to-transparent"></div>
      </section>

      {/* Why Work With Us? Section */}
      <section className="section-standard bg-gray-50">
        <div className="section-container">
          <h2 className="section-title text-center">Why Work With Us?</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-3 text-center">
              <li className="flex items-center justify-center gap-2">
                <span className="text-brand-primary font-bold">✓</span>
                <span>Direct communication with our CEO</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-brand-primary font-bold">✓</span>
                <span>Fast response times and clear decisions</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-brand-primary font-bold">✓</span>
                <span>No project managers slowing things down</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-brand-primary font-bold">✓</span>
                <span>Focus on results — not just design</span>
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
                    <span>+49 6131 – 63 67 801</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Mail className="h-5 w-5 text-brand-primary" />
                    <a href="mailto:info@ooliv.de" className="hover:underline">info@ooliv.de</a>
                  </div>
                </div>
                
                <p className="mt-4 italic text-sm">Regionally reachable. Remotely efficient.</p>
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
                  Will I speak to someone directly?
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  Yes — you'll first speak with Lisa, then directly with Uli, our founder and CEO.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-medium text-lg">
                  How soon will I hear back?
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  Usually within a few hours — often faster.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-medium text-lg">
                  Do you work with international clients?
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  Yes — most of our clients are based across Europe. We're easily reachable, wherever you are.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-standard">
        <div className="section-container text-center">
          <h2 className="section-title">Ready to Start?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            We move fast, communicate clearly, and focus on strategy — let's launch something great together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group" asChild>
              <Link to="#">
                Start Your Project
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

      {/* Contact Form Dialogs */}
      <ContactForm 
        open={showAuditForm} 
        onOpenChange={setShowAuditForm} 
        formType="audit" 
      />
    </PageLayout>
  );
};

export default Contact;
