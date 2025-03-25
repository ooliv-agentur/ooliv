import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    website: '',
    message: '',
    budget: '',
    timeline: '',
    source: '',
    privacy: false
  });
  const [showAuditForm, setShowAuditForm] = useState(false);
  const [showCallForm, setShowCallForm] = useState(false);
  const [showWorkForm, setShowWorkForm] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, privacy: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.privacy) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields and accept the privacy policy.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowThankYou(true);
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        website: '',
        message: '',
        budget: '',
        timeline: '',
        source: '',
        privacy: false
      });
    }, 1000);
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <PageHero
        title="Contact ooliv for Your Next Website Project"
        subtitle="Let's talk about your goals. Whether you're planning a relaunch or need expert support to move faster — we'll help you turn ideas into results."
        primaryCta={{
          text: "Start Your Project",
          link: "#contact-form"
        }}
        secondaryCta={{
          text: "Book a Strategy Call",
          link: "#"
        }}
      />

      {/* Contact Form Section */}
      <section className="section-standard">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 mb-24">
            {/* Direct Contact Details Section */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Prefer to Speak Directly?</h2>
              <p className="text-lg mb-8">
                All communication is handled directly by our CEO — fast, strategic, and personal.
              </p>
              
              <div className="space-y-8">
                <Card className="card-layout group hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="icon-background text-brand-primary">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">ooliv GmbH</h3>
                        <p className="text-gray-600">
                          Mombacher Str. 25<br />
                          55122 Mainz, Germany
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="card-layout group hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="icon-background text-brand-primary">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Call Us</h3>
                        <p className="text-gray-600">06131 – 63 67 801</p>
                        <p className="text-gray-600">+49 176 80 16 76 41</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="card-layout group hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="icon-background text-brand-primary">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Email Us</h3>
                        <p className="text-gray-600">info@ooliv.de</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Contact Form */}
            <div id="contact-form">
              {!showThankYou ? (
                <>
                  <h2 className="text-3xl font-bold mb-6">Tell Us About Your Project</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First name *</Label>
                        <Input 
                          id="firstName" 
                          name="firstName" 
                          value={formData.firstName} 
                          onChange={handleChange} 
                          required 
                          className="bg-brand-background/50 border-brand-primary/20 focus:border-brand-primary"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last name *</Label>
                        <Input 
                          id="lastName" 
                          name="lastName" 
                          value={formData.lastName} 
                          onChange={handleChange} 
                          required 
                          className="bg-brand-background/50 border-brand-primary/20 focus:border-brand-primary"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        className="bg-brand-background/50 border-brand-primary/20 focus:border-brand-primary"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input 
                          id="company" 
                          name="company" 
                          value={formData.company} 
                          onChange={handleChange} 
                          className="bg-brand-background/50 border-brand-primary/20 focus:border-brand-primary"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="website">Website (optional)</Label>
                        <Input 
                          id="website" 
                          name="website" 
                          value={formData.website} 
                          onChange={handleChange} 
                          className="bg-brand-background/50 border-brand-primary/20 focus:border-brand-primary"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget range</Label>
                        <Select 
                          value={formData.budget} 
                          onValueChange={(value) => handleSelectChange('budget', value)}
                        >
                          <SelectTrigger className="bg-brand-background/50 border-brand-primary/20 focus:border-brand-primary">
                            <SelectValue placeholder="Select a budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5k-10k">€5,000 - €10,000</SelectItem>
                            <SelectItem value="10k-20k">€10,000 - €20,000</SelectItem>
                            <SelectItem value="20k-50k">€20,000 - €50,000</SelectItem>
                            <SelectItem value="50k+">€50,000+</SelectItem>
                            <SelectItem value="not-sure">Not sure yet</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="timeline">Timeline</Label>
                        <Select 
                          value={formData.timeline} 
                          onValueChange={(value) => handleSelectChange('timeline', value)}
                        >
                          <SelectTrigger className="bg-brand-background/50 border-brand-primary/20 focus:border-brand-primary">
                            <SelectValue placeholder="Select a timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">ASAP</SelectItem>
                            <SelectItem value="4-6-weeks">4-6 weeks</SelectItem>
                            <SelectItem value="2-3-months">2-3 months</SelectItem>
                            <SelectItem value="later">Later</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="source">How did you hear about us?</Label>
                      <Select 
                        value={formData.source} 
                        onValueChange={(value) => handleSelectChange('source', value)}
                      >
                        <SelectTrigger className="bg-brand-background/50 border-brand-primary/20 focus:border-brand-primary">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="google">Google Search</SelectItem>
                          <SelectItem value="referral">Referral</SelectItem>
                          <SelectItem value="social">Social Media</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Your message / project idea</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        className="min-h-[150px] bg-brand-background/50 border-brand-primary/20 focus:border-brand-primary" 
                      />
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Checkbox 
                        id="privacy" 
                        checked={formData.privacy} 
                        onCheckedChange={handleCheckboxChange} 
                        required 
                      />
                      <Label 
                        htmlFor="privacy" 
                        className="text-sm leading-normal cursor-pointer"
                      >
                        By submitting this form, you agree that we may store and process your data to respond to your inquiry. You may revoke your consent at any time.
                      </Label>
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full md:w-auto" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                          Sending...
                        </span>
                      ) : 'Send & Start'}
                    </Button>
                  </form>
                </>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <h2 className="text-2xl font-bold text-green-700 mb-4">Thank You for Reaching Out!</h2>
                  <p className="text-lg mb-6">We'll be in touch within 24 hours.</p>
                  <Button 
                    onClick={() => setShowThankYou(false)} 
                    variant="outline"
                  >
                    Send Another Message
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Removed as per new design */}

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
                  You'll speak directly with our founder and CEO — no handovers, no project managers.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-medium text-lg">
                  How soon will I hear back?
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  We respond to all project inquiries within 24 hours.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-medium text-lg">
                  Do you work with companies outside of Germany?
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  Yes. We support B2B clients across Europe and beyond — fully remote and fast.
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
        </div>
      </section>

      {/* Contact Form Dialogs */}
      <ContactForm 
        open={showAuditForm} 
        onOpenChange={setShowAuditForm} 
        formType="audit" 
      />
      
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
