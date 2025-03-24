
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Mail, MapPin, Phone } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    location: '',
    interest: '',
    message: '',
    privacy: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, interest: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, privacy: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.privacy) {
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
      toast({
        title: "Message sent!",
        description: "We'll get back to you soon.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        location: '',
        interest: '',
        message: '',
        privacy: false
      });
    }, 1000);
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="text-center mb-16 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Talk About Your Next Project</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Whether you already have a clear vision or don't know where to start—<strong>we're here to listen, guide, and build something valuable together.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" asChild>
              <Link to="#contact-form">Start Your Project</Link>
            </Button>
            <Button variant="outline" size="lg">
              Request a Callback
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">Prefer Phone or Email? Just Reach Out.</h2>
            <p className="text-lg mb-8">
              We love clear communication. You can reach us directly—no waiting loops, no contact forms if you don't want them.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-brand-primary flex-shrink-0 mt-1 animate-pulse" />
                <div>
                  <h3 className="font-bold text-lg">Call Us</h3>
                  <p className="text-gray-600">+49 176 80 16 76 41</p>
                  <p className="text-gray-600">06131 – 63 67 801</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-brand-primary flex-shrink-0 mt-1 animate-pulse" />
                <div>
                  <h3 className="font-bold text-lg">Email Us</h3>
                  <p className="text-gray-600">info@ooliv.de</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-brand-primary flex-shrink-0 mt-1 animate-pulse" />
                <div>
                  <h3 className="font-bold text-lg">Visit Us</h3>
                  <p className="text-gray-600">
                    Mombacher Str. 25<br />
                    55122 Mainz
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div id="contact-form">
            <h2 className="text-3xl font-bold mb-6">Or Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
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
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input 
                    id="location" 
                    name="location" 
                    value={formData.location} 
                    onChange={handleChange} 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="interest">What are you interested in? *</Label>
                <Select 
                  value={formData.interest} 
                  onValueChange={handleSelectChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web-design">Web Design</SelectItem>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="content-creation">Content Creation</SelectItem>
                    <SelectItem value="seo">SEO Optimization</SelectItem>
                    <SelectItem value="lead-generation">Lead Generation</SelectItem>
                    <SelectItem value="ai-solutions">AI Solutions</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Your message</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  className="min-h-[150px]" 
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
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-6 text-center">We Work Remotely—But You Can Find Us Here</h2>
          <p className="text-lg max-w-3xl mx-auto mb-10 text-center">
            Our base is in Mainz, but we collaborate with clients across Germany, Switzerland, and Mallorca. No matter where you're based—<strong>ooliv is just one message away.</strong>
          </p>
          
          <div className="h-[400px] bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Map goes here</p>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-6 text-center">What Happens After You Reach Out?</h2>
          <p className="text-lg max-w-3xl mx-auto mb-10 text-center">
            You'll hear from us within a few hours. First, we'll schedule a quick call to understand your goals and challenges. Then we'll define the best way forward—whether that's a strategy session, website audit, or project proposal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline">
              Request a Free Website Audit
            </Button>
            <Button size="lg">
              Book a 15-Min Call
            </Button>
          </div>
        </div>

        <div className="mb-24 bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Want to Work With Us?</h2>
          <p className="text-lg max-w-3xl mx-auto mb-6 text-center">
            We're always on the lookout for creative thinkers and technical minds. If you're passionate about web, design, or AI—send us your portfolio. Let's see if we're a match.
          </p>
          <p className="text-md max-w-3xl mx-auto mb-10 text-center italic">
            Note: Due to our fully remote setup, internships aren't currently available.
          </p>
          
          <div className="flex justify-center">
            <Button asChild>
              <Link to="/careers">Submit Your Application →</Link>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
