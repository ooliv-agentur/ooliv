
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { 
  Building, 
  Mail, 
  Phone,
  MessageCircle,
  Send
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
import { useState } from 'react';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  const [showCallForm, setShowCallForm] = useState(false);
  const [showWorkForm, setShowWorkForm] = useState(false);

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

      {/* Direct Contact Section */}
      <section className="section-standard">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Direct Contact, No Middlemen</h2>
            <p className="text-lg mb-10 text-center">
              All communication at ooliv is handled directly by our CEO — fast, strategic, and personal.
            </p>
            
            <div className="grid md:grid-cols-2 gap-10">
              {/* Contact Methods Section */}
              <div>
                <p className="mb-6">You can get in touch via sidebar:</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="bg-blue-600 text-white p-1 rounded">🟦</span>
                    <span>Chatbot</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="bg-green-600 text-white p-1 rounded">🟩</span>
                    <span>Inquiry Step Form</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-brand-primary" />
                    <span>Email: <a href="mailto:info@ooliv.de" className="font-medium hover:underline">info@ooliv.de</a></span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-brand-primary" />
                    <span>Phone: 06131 – 63 67 801 or +49 176 80 16 76 41</span>
                  </li>
                </ul>
                <p>Or just use the button that fits your preferred contact method.</p>
                
                <div className="flex flex-wrap gap-4 mt-6">
                  <Button
                    onClick={() => console.log('Chatbot clicked')}
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Start Chat
                  </Button>
                  <Button
                    onClick={() => setWorkForm(true)}
                    className="flex items-center gap-2"
                  >
                    <Send className="h-4 w-4" />
                    Send Inquiry
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.location.href = 'mailto:info@ooliv.de'}
                    className="flex items-center gap-2"
                  >
                    <Mail className="h-4 w-4" />
                    Email Us
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.location.href = 'tel:+4961316367801'}
                    className="flex items-center gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    Call Us
                  </Button>
                </div>
              </div>
              
              {/* Why Work With Us Section */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Why work with us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-primary font-bold">✓</span>
                    <span>Direct communication with our CEO</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-primary font-bold">✓</span>
                    <span>Fast response times and decisive action</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-primary font-bold">✓</span>
                    <span>Strategic thinking, not just implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-primary font-bold">✓</span>
                    <span>Focus on business results, not just design</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-alt">
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
                  Usually within 24 hours. For urgent inquiries, call us directly.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-medium text-lg">
                  Do you work with companies outside of Germany?
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  Yes. We work with clients across Europe and internationally.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="section-standard">
        <div className="section-container">
          <h2 className="section-title">Contact Details</h2>
          
          <div className="max-w-3xl mx-auto mt-8">
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-bold mb-3">ooliv GmbH</h3>
                    <p className="mb-6">
                      Mombacher Str. 25<br />
                      55122 Mainz, Germany
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-brand-primary" />
                        <span>06131 – 63 67 801</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-brand-primary" />
                        <span>+49 176 80 16 76 41</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-brand-primary" />
                        <a href="mailto:info@ooliv.de" className="hover:underline">info@ooliv.de</a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-standard">
        <div className="section-container text-center">
          <h2 className="section-title">Let's Talk About What's Next</h2>
          <p className="section-subtitle">
            Start a project with a team that works fast, communicates clearly, and delivers results. You'll always speak directly with the person who leads your project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => setShowWorkForm(true)}
            >
              Start Your Website Project
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => setShowCallForm(true)}
            >
              Book a Strategy Call
            </Button>
          </div>
          
          <p className="mt-8 text-sm text-center text-gray-600">
            100+ successfully completed projects • Trusted by leading companies • AI strategies that are human and measurable
          </p>
        </div>
      </section>

      {/* Contact Form Dialogs */}
      <ContactForm 
        open={showCallForm} 
        onOpenChange={setShowCallForm} 
        formType="call" 
      />
      
      <ContactForm 
        open={showWorkForm} 
        onOpenChange={setShowWorkForm} 
        formType="work" 
      />
    </PageLayout>
  );
};

export default Contact;
