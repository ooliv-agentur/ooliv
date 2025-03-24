
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="text-center mb-16 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with our team to discuss your project or ask any questions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Subject" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Your message" 
                  className="min-h-[150px]" 
                />
              </div>
              
              <div className="flex items-start space-x-2">
                <Checkbox id="privacy" />
                <Label 
                  htmlFor="privacy" 
                  className="text-sm leading-normal cursor-pointer"
                >
                  I agree to the processing of my data in accordance with the privacy policy
                </Label>
              </div>
              
              <Button type="submit" size="lg">Send Message</Button>
            </form>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-brand-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg">Email Us</h3>
                  <p className="text-gray-600">info@ooliv.com</p>
                  <p className="text-gray-600">support@ooliv.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-brand-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg">Call Us</h3>
                  <p className="text-gray-600">+1 (123) 456-7890</p>
                  <p className="text-gray-600">Monday - Friday, 9AM - 5PM</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-brand-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg">Visit Us</h3>
                  <p className="text-gray-600">
                    123 Digital Avenue<br />
                    Tech District<br />
                    City, State 12345
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 h-[300px] bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Map goes here</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
