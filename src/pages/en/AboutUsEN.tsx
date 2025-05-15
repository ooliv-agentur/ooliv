
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Link } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import TeamSection from '@/components/TeamSection';
import AboutCompactFAQ from '@/components/AboutCompactFAQ';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Users, Target, Briefcase, Globe, Award, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Separator } from '@/components/ui/separator';
import AboutUsSEOTextEN from '@/components/about-us/AboutUsSEOTextEN';

const EnglishAboutUs = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  const handleOpenLeadForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  const industries = [
    'Technology / Software',
    'Retail / E-Commerce',
    'Finance / Banking',
    'Health / Medical',
    'Education / Training',
    'Manufacturing / Industry',
    'Hospitality / Tourism',
    'Construction / Real Estate',
    'Food / Restaurant',
    'Consulting / Services'
  ];

  const faqItems = [
    {
      question: "What sets ooliv apart from other marketing agencies in Mainz?",
      answer: "As a specialized marketing agency in Mainz, we combine strategic thinking with practical implementation. With us, you work directly with the founder, which guarantees short decision-making paths and a deep understanding of your goals."
    },
    {
      question: "What services does ooliv offer as a marketing agency?",
      answer: "We provide a complete package of digital marketing services – from web design and development to SEO and content creation to Google Ads and AI technologies. As a marketing agency in Mainz, we focus on measurable results and long-term business success."
    },
    {
      question: "Which industries does your marketing agency in Mainz work with?",
      answer: "We have particular expertise in B2B areas such as SaaS, manufacturing, consulting, legal, and healthcare. As a marketing agency based in Mainz, we support both local businesses and clients throughout the DACH region."
    },
    {
      question: "What is the typical project process with your marketing agency?",
      answer: "Every project begins with a strategic conversation, followed by customized planning. Our team in Mainz then develops concepts, implements them, and continuously optimizes. As a full-service marketing agency, we accompany you from the initial idea to long-term support."
    },
    {
      question: "Do you work with AI tools as a marketing agency?",
      answer: "Yes, we use state-of-the-art AI tools to increase efficiency. As a forward-thinking marketing agency in Mainz, we focus on a sensible balance between technological innovation and human creativity."
    }
  ];

  return (
    <PageLayout 
      className="overflow-x-hidden" 
      seoText={<AboutUsSEOTextEN />}
    >
      <Helmet>
        <title>Marketing Agency Mainz – Strategy, SEO & Growth | ooliv</title>
        <meta name="description" content="Your marketing agency Mainz for websites, SEO, SEA, and content. Customized strategies for real growth. Get your consultation now!" />
      </Helmet>

      <PageHero 
        badge="About ooliv"
        title="Marketing Agency Mainz"
        subtitle="We combine creativity, strategy, and technology to create websites that drive business growth. You always work directly with our founder."
        primaryCta={{
          text: "Start Project",
          link: "/en/contact"
        }}
        secondaryCta={{
          text: "View Case Studies",
          link: "/en/case-studies"
        }}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-brand-heading">More than a web agency – your strategic sparring partner</h2>
            <p className="text-lg mb-10 text-brand-text">
              Creative, technically precise, and collaborative. No hierarchies, no buzzwords – with a genuine focus on results.
            </p>
            
            <div className="bg-brand-background rounded-xl p-8 shadow-sm mb-10">
              <ul className="space-y-4 text-left">
                {[
                  'Founded in 2008 by Uli Schönleber',
                  'Located in Mainz, clients across Europe',
                  'Owner-managed studio with focused expert team',
                  'Communication directly with the founder – from start to go-live',
                  'Clear project workflow via Basecamp (feedback, tasks, files all in one place)'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="h-8 w-8 flex items-center justify-center bg-brand-primary/10 rounded-full mr-3 flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-brand-primary" />
                    </span>
                    <span className="text-brand-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Button size="lg" className="group bg-brand-primary hover:bg-brand-primary/90 text-white" asChild>
              <Link to="/en/contact">
                Let's work together
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-brand-heading">Where Passion Meets Performance</h2>
            <div className="flex justify-center mb-6">
              <div className="h-16 w-16 bg-brand-primary/10 rounded-full flex items-center justify-center">
                <Globe className="h-8 w-8 text-brand-primary" />
              </div>
            </div>
            <p className="text-lg mb-6 text-brand-text">
              What began with a bold opportunity became a long-term success story. In 2008, when a leading agency in Mainz closed its doors, several loyal clients asked:
            </p>
            <p className="text-xl italic mb-6 text-brand-heading">
              "Can you continue working with us?"
            </p>
            <p className="text-lg mb-6 text-brand-text">
              That was the beginning of ooliv.
            </p>
            <p className="text-lg text-brand-text">
              Since then, we've evolved into a remote-first agency with a highly qualified, regionally distributed team – united by a single mindset:
            </p>
            <p className="text-xl font-bold mt-4 text-brand-heading">
              Every website should create real business value.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-brand-heading">Why We Consciously Stay Small</h2>
            <div className="bg-brand-background rounded-xl p-8 shadow-sm">
              <p className="text-lg mb-6 text-brand-text">
                At ooliv, every client works directly with the founder and CEO. In the background, our compact team covers all areas of strategy, design, content, and development.
              </p>
              <p className="text-lg mb-6 text-brand-text">
                This structure means less friction, faster progress, and better results – delivered by the people who are actually building your website.
              </p>
              <blockquote className="bg-white p-6 rounded-xl shadow-sm text-xl italic text-center border-l-4 border-brand-primary">
                "One point of contact. One focused team. One shared goal."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-brand-heading">A Digital Partner, Not Just a Service Provider</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <AspectRatio ratio={4/3}>
                <img 
                  src="/lovable-uploads/b1bdd6f6-0801-4a5d-ba2f-cad413494d55.png" 
                  alt="Modern work environment" 
                  className="h-full w-full object-cover"
                />
              </AspectRatio>
            </div>
            <div>
              <ul className="space-y-6">
                {[
                  'We listen before we build',
                  'We simplify complexity',
                  'We connect design with strategy',
                  'We use technology without losing the human aspect',
                  'We remain curious, precise, and brutally honest'
                ].map((point, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-10 w-10 flex items-center justify-center bg-brand-primary/10 rounded-full mr-4 flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-brand-primary" />
                    </div>
                    <span className="text-lg text-brand-text">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-brand-heading">Individual. Well-thought-out. Measurable.</h2>
            <p className="text-lg mb-8 text-brand-text">
              No templates. No frills. We develop customized websites based on your specific goals, your target audience, and your growth stage.
              Whether B2B SaaS provider, manufacturing company, or regional service provider – <strong>we create digital experiences that convert</strong>.
            </p>
            <p className="text-lg mb-10 text-brand-text">
              From the initial concept to post-launch support, we work with transparency, strategic foresight, and high design standards.
            </p>
            <div className="bg-brand-background rounded-xl p-8 shadow-sm">
              <blockquote className="text-xl italic text-center text-brand-heading">
                "We don't just deliver websites. We build digital assets that perform."
                <footer className="mt-4 font-medium text-brand-text">– Uli, Founder</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold mb-6 text-center text-brand-heading">Small Team. Full Capability.</h2>
          <p className="text-lg mb-12 text-center max-w-3xl mx-auto text-brand-text">
            You work with the CEO – but your project is shaped by a dedicated team of specialists who work synchronously in these areas:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'UX & UI Design', icon: Users },
              { title: 'WordPress & Headless Development', icon: Briefcase },
              { title: 'SEO Optimization', icon: Target },
              { title: 'Motion Design & Illustration', icon: Award },
              { title: 'AI-assisted Copywriting', icon: Sparkles },
              { title: 'Branding & Visual Identity', icon: Award }
            ].map((role, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm transform transition-transform hover:translate-y-[-5px]">
                <div className="mb-4 h-12 w-12 flex items-center justify-center bg-brand-primary/10 rounded-full">
                  <role.icon className="h-6 w-6 text-brand-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2 text-brand-heading">{role.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="team">
        <TeamSection />
      </div>

      <AboutCompactFAQ />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-brand-heading">Digital. But Not Only.</h2>
            <p className="text-lg mb-12 text-brand-text">
              Our core competency is digital strategy and web development – but our work doesn't stop at the screen.
              We also support clients with visual branding, offline materials, and content in various formats.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              'Conversion-optimized Websites',
              'Brand-aligned Logos and Icons',
              'Text, Photos, and Videos for Web and Social Media',
              'Printed Brochures, Business Cards & More'
            ].map((service, index) => (
              <div key={index} className="bg-brand-background rounded-xl p-6 shadow-sm h-full flex items-center justify-center text-center">
                <p className="text-lg font-medium text-brand-heading">{service}</p>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto mt-12">
            <div className="bg-brand-background rounded-xl p-8 shadow-sm text-center">
              <p className="text-lg text-brand-text">
                We master AI tools like <strong>ChatGPT</strong>, <strong>Midjourney</strong>, and <strong>Sora</strong> to augment our human creativity – not replace it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-brand-heading">For Businesses That Want to Progress</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <p className="text-xl font-medium mb-6 text-brand-heading">We help:</p>
              <ul className="space-y-4">
                {[
                  'B2B companies with complex offerings',
                  'Mid-sized brands that need a relaunch',
                  'Fast-growing startups',
                  'Niche market leaders with global reach',
                  'Local service providers ready for the next step'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="h-8 w-8 flex items-center justify-center bg-brand-primary/10 rounded-full mr-3 flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-brand-primary" />
                    </span>
                    <span className="text-brand-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <p className="text-xl font-medium mb-6 text-brand-heading">Typical Industries:</p>
              <div className="grid grid-cols-2 gap-4">
                {industries.slice(0, 10).map((industry, index) => (
                  <div 
                    key={index} 
                    className="bg-brand-background p-4 rounded-md text-center text-brand-text hover:bg-brand-background/80 transition-colors duration-300"
                  >
                    {industry.split('/')[0].trim()}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-brand-heading">Headquartered in Mainz. Active in the DACH Region and Beyond.</h2>
            <p className="text-lg text-brand-text">
              While our headquarters are in Mainz, we work with clients in Germany, Switzerland, and Mallorca.
              Digital-first, location-flexible – and always responsive.
            </p>
          </div>
          <div className="bg-brand-background rounded-xl p-6 shadow-sm h-[500px] flex items-center justify-center max-w-4xl mx-auto">
            <img 
              src="/lovable-uploads/cfb33e9a-d195-4aee-a3f5-649636005e5b.png" 
              alt="Ooliv office building in Mainz with modern glass architecture" 
              className="h-full w-full object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-brand-heading">Let's Build Something Great Together</h2>
            <p className="text-lg mb-10 text-brand-text">
              Whether you're planning a relaunch, need a new website, or need help turning complexity into clarity – let's explore your next step together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="group bg-brand-primary hover:bg-brand-primary/90 text-white" 
                onClick={handleOpenLeadForm}
              >
                Start Project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="group" asChild>
                <Link to="/en/contact">
                  Book Strategy Call
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <p className="text-center text-sm text-gray-600 mt-10">
              100+ successfully implemented projects • Trusted by leading companies • AI strategies that are human and measurable
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-brand-heading">Frequently Asked Questions</h2>
            <p className="text-lg max-w-2xl mx-auto text-brand-text">
              Answers to the most important questions about our services as a marketing agency in Mainz
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqItems.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <h3 className="text-lg font-medium text-brand-heading text-left">{faq.question}</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-brand-text">
                    <Separator className="mb-4" />
                    <p>{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default EnglishAboutUs;
