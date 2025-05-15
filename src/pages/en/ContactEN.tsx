import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Mail, 
  Phone,
  MessageCircle,
  Send,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHero from '@/components/PageHero';
import { 
  Card, 
  CardHeader, 
  CardContent, 
  CardFooter, 
  CardTitle,
  CardDescription 
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import FAQ from '@/components/FAQ';
import ContactSEOTextEN from '@/components/contact/ContactSEOTextEN';

const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  color,
  title,
  description,
  buttonText,
  onClick,
  href
}) => {
  const colorClasses = {
    blue: 'bg-blue-50',
    green: 'bg-green-50',
    amber: 'bg-amber-50',
    purple: 'bg-purple-50'
  };

  const ButtonElement = () => (
    <Button 
      variant="outline" 
      className="w-full justify-between group"
      onClick={onClick}
      asChild={Boolean(href)}
    >
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          <span>{buttonText}</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </a>
      ) : (
        <>
          <span>{buttonText}</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </>
      )}
    </Button>
  );

  return (
    <Card className="overflow-hidden h-full transition-all hover:shadow-md border border-gray-100 hover:border-brand-primary/50">
      <CardHeader className="pb-2">
        <div className={cn("rounded-full w-12 h-12 flex items-center justify-center mb-2", colorClasses[color])}>
          {icon}
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-3">
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <ButtonElement />
      </CardFooter>
    </Card>
  );
};

const EnglishContact = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  const handleOpenSidebarForm = () => {
    document.dispatchEvent(new CustomEvent('open-lead-form'));
  };

  return (
    <PageLayout 
      className="overflow-x-hidden"
      seoText={<ContactSEOTextEN />}
    >
      <Helmet>
        <title>Contact Us | ooliv</title>
        <meta name="description" content="Get in touch with our team to discuss your project." />
      </Helmet>

      <PageHero
        badge="ooliv"
        title="Let's talk about your project"
        subtitle="We serve businesses across Europe – with personal support and clear communication."
      />
      
      {/* Adjusted spacing - increased margin from -mt-16 to -mt-8 to create more space */}
      <section className="relative -mt-8 z-10 pb-24 pt-8">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-5 gap-0">
              <div className="md:col-span-2 relative h-full overflow-hidden bg-gradient-to-br from-brand-background to-brand-backgroundAlt">
                <img 
                  src="/lovable-uploads/Uli.jpg" 
                  alt="Uli, Founder & CEO at ooliv" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-heading mb-4">
                  Uli – Your Direct Contact at ooliv
                </h2>
                <p className="text-base md:text-lg text-brand-text mb-6">
                  Uli is the founder and CEO of ooliv – and your first point of contact. He personally handles all inquiries, ensures a clear process, and helps develop a strategy that aligns with your business goals.
                </p>
                <blockquote className="border-l-4 border-brand-primary pl-5 py-3 italic bg-gray-50 rounded-r-lg">
                  "No sales pressure, no intermediaries – just an honest conversation about your project."
                  <footer className="text-sm mt-2 font-medium">– Uli, Founder & CEO</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-brand-heading mb-3">How to reach us</h2>
              <p className="text-lg text-brand-text max-w-3xl mx-auto">
                Choose the communication method that suits you best – we're available on all channels.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              <ContactCard 
                icon={<MessageCircle className="h-6 w-6 text-blue-600" />} 
                color="blue"
                title="WhatsApp Chat"
                description="Direct WhatsApp chat"
                buttonText="Open WhatsApp"
                href="http://wa.me/+4917680167641"
              />
              
              <ContactCard 
                icon={<Send className="h-6 w-6 text-green-600" />} 
                color="green"
                title="Send Request"
                description="Share project details through our form"
                buttonText="Open Form"
                onClick={handleOpenSidebarForm}
              />
              
              <ContactCard 
                icon={<Mail className="h-6 w-6 text-amber-600" />} 
                color="amber"
                title="Send Email"
                description="Write directly to our inbox"
                buttonText="Compose Email"
                href="mailto:info@ooliv.de"
              />
              
              <ContactCard 
                icon={<Phone className="h-6 w-6 text-purple-600" />} 
                color="purple"
                title="Call Us"
                description="Direct conversation with our team"
                buttonText="06131 - 63 67 801"
                href="tel:+4961316367801"
              />
            </div>
            
            <div className="mt-10 text-center">
              <div className="inline-block bg-gray-50 border border-gray-100 rounded-lg px-6 py-3 shadow-sm">
                <p className="text-brand-text font-medium">
                  No intermediaries. No waiting queues. Your message goes directly to the team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="shadow-lg border-0 overflow-hidden">
              <div className="bg-brand-primary text-white p-8">
                <CardTitle className="text-2xl font-bold mb-6">Contact Information</CardTitle>
                
                <div className="grid md:grid-cols-3 gap-6">
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
                      <p>06131 – 63 67 801</p>
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
                    Regional roots. Global reach.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-brand-heading mb-3">Why Work With Us?</h2>
              <p className="text-lg text-brand-text max-w-3xl mx-auto">
                Our approach differs from traditional agencies
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureCard 
                icon={<CheckCircle className="text-brand-primary" />}
                title="Direct Communication"
                description="No project manager as intermediary"
              />
              
              <FeatureCard 
                icon={<CheckCircle className="text-brand-primary" />}
                title="Fast Response Times"
                description="Transparent processes and quick decisions"
              />
              
              <FeatureCard 
                icon={<CheckCircle className="text-brand-primary" />}
                title="Streamlined Processes"
                description="No project management overhead"
              />
              
              <FeatureCard 
                icon={<CheckCircle className="text-brand-primary" />}
                title="Result-Oriented"
                description="Focus on measurable results, not just design"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Use consistent FAQ component */}
      <FAQ 
        customTitle="Frequently Asked Contact Questions"
        customFaqs={[
          {
            question: "Will I speak directly with someone?",
            answer: "Yes – first with Uli, our founder and CEO. We have no project managers as intermediaries."
          },
          {
            question: "How quickly will I get a response?",
            answer: "Usually within a few hours – often faster. We understand that time is valuable in the digital space."
          },
          {
            question: "Do you work internationally?",
            answer: "Yes – we handle projects from all over Europe. Regionally accessible, but location-independent implementation. Our core competence lies in digital collaboration."
          },
          {
            question: "What happens after my inquiry?",
            answer: "After your inquiry, we will contact you promptly to discuss your requirements. Afterward, you will receive a customized offer for your project."
          }
        ]}
        hideCTA={true}
      />
    </PageLayout>
  );
};

interface ContactCardProps {
  icon: React.ReactNode;
  color: 'blue' | 'green' | 'amber' | 'purple';
  title: string;
  description: string;
  buttonText: string;
  onClick?: () => void;
  href?: string;
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-brand-primary/50 transition-all hover:shadow-md">
      <div className="flex items-start mb-4">
        {icon}
        <h3 className="font-bold text-lg ml-3">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default EnglishContact;
