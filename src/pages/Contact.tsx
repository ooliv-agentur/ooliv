
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { 
  Mail, 
  Phone,
  MessageCircle,
  Send,
  ArrowRight,
  MapPin,
  Clock,
  CheckCircle
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
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  const [showAuditForm, setShowAuditForm] = useState(false);
  
  const handleRequestAudit = () => {
    setShowAuditForm(true);
  };

  return (
    <PageLayout>
      <PageHero
        badge="ooliv"
        title="Let's Talk About Your Website Project"
        subtitle="We work with businesses across Europe — always with a clear focus and fast personal communication."
      />

      {/* Meet Lisa Section - Modern Layout */}
      <section className="section-standard py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-full order-2 md:order-1">
              <div className="relative w-full max-w-md mx-auto md:ml-0 overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src="/lovable-uploads/d6e07e0a-df41-43bb-b48a-c83c9f0e5c91.png" 
                  alt="Lisa, Content & First Touch at ooliv" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 rounded-2xl shadow-inner bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 md:-right-10 hidden md:block">
                <div className="bg-brand-primary text-white rounded-full p-4 shadow-lg">
                  <MessageCircle size={32} className="animate-pulse" />
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-6">
                Meet Lisa – Your First Contact
              </h2>
              <p className="text-lg text-brand-text mb-6">
                Lisa is the first person you'll talk to at ooliv. She handles every inquiry personally, makes things easy, and ensures your message reaches Uli — the founder and CEO — without delay.
              </p>
              <blockquote className="border-l-4 border-brand-primary pl-5 py-2 italic my-6 bg-gray-50 rounded-r-lg shadow-sm">
                "You don't need to fill out long forms. Just reach out — we'll take it from there."
                <footer className="text-sm mt-2 font-medium">– Lisa, Content & First Touch</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section - Modern Design */}
      <section className="section-standard py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-gray-100 to-transparent opacity-70"></div>
        
        <div className="section-container relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">Get in Touch</h2>
            <p className="text-lg text-brand-text max-w-2xl mx-auto">
              Choose the communication method that works best for you — we're available across all channels.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <Card className="bg-white border border-gray-200 hover:border-brand-primary transition-all hover:shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-blue-100 rounded-full p-4 mb-4">
                  <MessageCircle size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Start Chat</h3>
                <p className="text-gray-600 mb-4">Direct live chat with our team</p>
                <Button variant="outline" className="w-full mt-auto group">
                  <span>Open Chat</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-gray-200 hover:border-brand-primary transition-all hover:shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-green-100 rounded-full p-4 mb-4">
                  <Send size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Send Inquiry</h3>
                <p className="text-gray-600 mb-4">Share project details via our form</p>
                <Button variant="outline" className="w-full mt-auto group">
                  <span>Submit Inquiry</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-gray-200 hover:border-brand-primary transition-all hover:shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-amber-100 rounded-full p-4 mb-4">
                  <Mail size={32} className="text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">Write directly to our inbox</p>
                <Button variant="outline" className="w-full mt-auto group" asChild>
                  <a href="mailto:info@ooliv.de">
                    <span>Compose Email</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-gray-200 hover:border-brand-primary transition-all hover:shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-purple-100 rounded-full p-4 mb-4">
                  <Phone size={32} className="text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Direct conversation with our team</p>
                <Button variant="outline" className="w-full mt-auto group" asChild>
                  <a href="tel:+4961316367801">
                    <span>+49 6131 – 63 67 801</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-10 text-center">
            <blockquote className="border-l-4 border-brand-primary pl-5 py-3 italic mx-auto inline-block text-lg bg-gray-50 rounded-r-lg shadow-sm">
              No middlemen. No delays. Your message goes straight to our core team.
            </blockquote>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Modern Design */}
      <section className="section-standard py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">Why Work With Us?</h2>
            <p className="text-lg text-brand-text max-w-2xl mx-auto">
              Our approach is different from traditional agencies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-brand-primary transition-all hover:shadow-md">
              <div className="flex items-start mb-4">
                <CheckCircle className="text-brand-primary mr-3 mt-1 flex-shrink-0" />
                <h3 className="font-bold text-lg">Direct Communication</h3>
              </div>
              <p className="text-gray-600">Direct contact with our CEO, no intermediaries</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-brand-primary transition-all hover:shadow-md">
              <div className="flex items-start mb-4">
                <CheckCircle className="text-brand-primary mr-3 mt-1 flex-shrink-0" />
                <h3 className="font-bold text-lg">Fast Response Times</h3>
              </div>
              <p className="text-gray-600">Transparent processes and quick decisions</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-brand-primary transition-all hover:shadow-md">
              <div className="flex items-start mb-4">
                <CheckCircle className="text-brand-primary mr-3 mt-1 flex-shrink-0" />
                <h3 className="font-bold text-lg">No Project Managers</h3>
              </div>
              <p className="text-gray-600">No middlemen slowing things down</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-brand-primary transition-all hover:shadow-md">
              <div className="flex items-start mb-4">
                <CheckCircle className="text-brand-primary mr-3 mt-1 flex-shrink-0" />
                <h3 className="font-bold text-lg">Results-Focused</h3>
              </div>
              <p className="text-gray-600">Focus on business results, not just design</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Details - Modern Card Design */}
      <section className="section-standard py-16 bg-gray-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="grid md:grid-cols-2">
                <div className="bg-brand-primary text-white p-8">
                  <h2 className="text-2xl font-bold mb-6">Contact Details</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium mb-1">Address</h3>
                        <p>Mombacher Str. 25<br />55122 Mainz, Germany</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium mb-1">Phone</h3>
                        <p>+49 6131 – 63 67 801</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium mb-1">Email</h3>
                        <a href="mailto:info@ooliv.de" className="hover:underline">info@ooliv.de</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium mb-1">Office Hours</h3>
                        <p>Mon-Fri: 9:00 AM - 5:00 PM</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-white/20">
                    <p className="italic">
                      Regionally reachable. Remotely efficient.
                    </p>
                  </div>
                </div>
                
                <div className="p-8 bg-white">
                  <h2 className="text-2xl font-bold mb-6 text-brand-heading">Quick Contact</h2>
                  <p className="text-gray-600 mb-6">
                    Send us a quick message and we'll get back to you promptly.
                  </p>
                  
                  <div className="space-y-4">
                    <Button 
                      variant="default" 
                      className="w-full justify-start" 
                      onClick={() => window.open('mailto:info@ooliv.de')}
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      <span>Send Email</span>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={handleRequestAudit}
                    >
                      <Send className="mr-2 h-4 w-4" />
                      <span>Request Website Audit</span>
                    </Button>
                  </div>
                  
                  <Separator className="my-6" />
                  
                  <div className="text-center">
                    <h3 className="font-medium mb-2">Follow Us</h3>
                    <div className="flex justify-center space-x-4">
                      {/* Social Media Buttons - Placeholder */}
                      <Button size="icon" variant="ghost" className="rounded-full">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                        </svg>
                      </Button>
                      <Button size="icon" variant="ghost" className="rounded-full">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                      </Button>
                      <Button size="icon" variant="ghost" className="rounded-full">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                        </svg>
                      </Button>
                      <Button size="icon" variant="ghost" className="rounded-full">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79zM6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 9.94v-8.37H5.5v8.37h2.77z" clipRule="evenodd"></path>
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section - Modern Design */}
      <section className="section-standard py-16 bg-white">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">Contact FAQs</h2>
            <p className="text-lg text-brand-text max-w-2xl mx-auto">
              Answers to the most commonly asked questions about our contact options
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto mt-8 bg-white rounded-xl border border-gray-200 shadow-sm divide-y">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-gray-200 last:border-0">
                <AccordionTrigger className="text-left font-medium text-lg px-6 py-4 hover:no-underline hover:bg-gray-50">
                  Will I speak to someone directly?
                </AccordionTrigger>
                <AccordionContent className="text-base px-6 pb-4 text-gray-600">
                  Yes — you'll first speak with Lisa, then directly with Uli, our founder and CEO. We don't have project managers as intermediaries.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-b border-gray-200 last:border-0">
                <AccordionTrigger className="text-left font-medium text-lg px-6 py-4 hover:no-underline hover:bg-gray-50">
                  How soon will I hear back?
                </AccordionTrigger>
                <AccordionContent className="text-base px-6 pb-4 text-gray-600">
                  Usually within a few hours — often faster. We understand that time is valuable in the digital space.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border-b border-gray-200 last:border-0">
                <AccordionTrigger className="text-left font-medium text-lg px-6 py-4 hover:no-underline hover:bg-gray-50">
                  Do you work with international clients?
                </AccordionTrigger>
                <AccordionContent className="text-base px-6 pb-4 text-gray-600">
                  Yes — most of our clients are based across Europe. We're easily reachable, regardless of location. Our expertise lies in digital collaboration.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border-b border-gray-200 last:border-0">
                <AccordionTrigger className="text-left font-medium text-lg px-6 py-4 hover:no-underline hover:bg-gray-50">
                  What happens after I contact you?
                </AccordionTrigger>
                <AccordionContent className="text-base px-6 pb-4 text-gray-600">
                  After your inquiry, we'll promptly get in touch to discuss your requirements. You'll then receive a tailored proposal for your project.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <ContactForm 
        open={showAuditForm} 
        onOpenChange={setShowAuditForm} 
        formType="audit" 
      />
    </PageLayout>
  );
};

export default Contact;
