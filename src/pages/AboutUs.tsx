import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Link } from 'react-router-dom';
import CTA from '@/components/CTA';
import PageHero from '@/components/PageHero';
import TeamSection from '@/components/TeamSection';
import { Users, Target, Briefcase, Globe, Award, CheckCircle } from 'lucide-react';

const AboutUs = () => {
  return (
    <PageLayout>
      {/* Hero Section using PageHero component */}
      <PageHero 
        badge="About ooliv"
        title="The Agency Behind Your Digital Growth"
        subtitle="From local roots to 100+ successful projects: Discover how ooliv blends creativity, strategy, and tech to build websites that move businesses forward."
        primaryCta={{
          text: "Let's Talk",
          link: "/contact"
        }}
        secondaryCta={{
          text: "View Case Studies",
          link: "/case-studies"
        }}
      />

      {/* Our Story Section - UPDATED */}
      <section className="section-standard">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Where Passion Meets Performance</h2>
            <div className="flex justify-center mb-6">
              <Globe className="h-8 w-8 text-brand-primary opacity-70" />
            </div>
            <p className="text-lg mb-6">
              What started with a bold opportunity became a long-term success story. In 2008, after a leading Mainz agency closed its doors, a handful of loyal clients asked:
              <br /><em className="font-medium">"Can you continue on your own?"</em>
              <br />That moment sparked the beginning of ooliv.
            </p>
            <p className="text-lg">
              Since then, we've grown into a remote-first, tight-knit team — designers, strategists, developers, and content creators based across different parts of the world.
              <br />United by one mindset:
              <br /><strong>Every website should create real business value.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* What Drives Us Section */}
      <section className="section-gradient">
        <div className="section-container">
          <h2 className="section-title mb-8">A Digital Partner, Not Just a Service Provider</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <AspectRatio ratio={4/3}>
                <div className="h-full w-full flex items-center justify-center">
                  <p className="text-gray-500">Office Environment</p>
                </div>
              </AspectRatio>
            </div>
            <div>
              <ul className="space-y-6">
                {[
                  'We listen before we build',
                  'We simplify complexity',
                  'We merge design with strategy',
                  'We embrace tech without losing the human touch',
                  'We stay curious, precise, and brutally honest'
                ].map((point, index) => (
                  <li key={index} className="flex items-center">
                    <span className="h-10 w-10 flex items-center justify-center bg-brand-primary/10 rounded-full mr-4">
                      <CheckCircle className="h-5 w-5 text-brand-primary" />
                    </span>
                    <span className="text-lg">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="section-standard">
        <div className="section-container">
          <h2 className="section-title">Custom. Thoughtful. Measurable.</h2>
          <p className="section-subtitle">
            No templates. No fluff. We develop tailor-made websites based on your specific goals, audience, and growth stage. 
            Whether you're a B2B SaaS player, a manufacturing brand, or a regional service provider—<strong>we build digital experiences that convert</strong>.
          </p>
          <p className="text-lg max-w-4xl mx-auto mb-12 text-center">
            From the first concept to post-launch support, we work with transparency, strategic foresight, and high design standards.
          </p>
          <div className="card-layout max-w-3xl mx-auto bg-brand-backgroundAlt">
            <blockquote className="text-xl italic text-center">
              "We don't just deliver websites. We build digital assets that perform."
              <footer className="mt-4 font-medium">– Uli, Founder</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="section-alt">
        <div className="section-container">
          <h2 className="section-title">6 Experts. One Shared Vision.</h2>
          <p className="section-subtitle">
            We're small by design—and proud of it. You always work directly with the people who shape your website:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'UX & UI Designers', icon: Users },
              { title: 'Web Developers (WordPress & Headless)', icon: Briefcase },
              { title: 'SEO & Content Strategists', icon: Target },
              { title: 'Motion Designers & Illustrators', icon: Award },
              { title: 'Copywriters powered by ChatGPT', icon: Target },
              { title: 'Logo Designers', icon: Award }
            ].map((role, index) => (
              <div key={index} className="card-layout group">
                <div className="icon-background text-brand-primary">
                  <role.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium mb-1">{role.title}</h3>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Button variant="outline" size="lg" className="button-secondary">
              Meet the Team
            </Button>
          </div>
        </div>
      </section>

      {/* Full Team Section - NEW */}
      <TeamSection />

      {/* What We Offer Section */}
      <section className="section-standard">
        <div className="section-container">
          <h2 className="section-title">Digital. But Not Only.</h2>
          <p className="section-subtitle">
            Our core strength is digital strategy and web development—but our work doesn't stop at the screen. 
            We also support clients with visual branding, offline materials, and content across formats.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'Conversion-optimized websites',
              'Brand-aligned logos and icons',
              'Texts, photos, and videos for web and social',
              'Printed brochures, business cards & more'
            ].map((service, index) => (
              <div key={index} className="card-layout">
                <p className="text-base font-medium">{service}</p>
              </div>
            ))}
          </div>
          <div className="card-layout mt-10 max-w-2xl mx-auto bg-brand-backgroundAlt">
            <p className="text-center text-lg">
              We master AI tools like <strong>ChatGPT</strong>, <strong>Midjourney</strong>, and <strong>Sora</strong> to enhance—but not replace—our human creativity.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="section-gradient">
        <div className="section-container">
          <h2 className="section-title">For Businesses That Want to Move Forward</h2>
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div className="card-layout">
              <p className="text-lg mb-6 font-medium">We help:</p>
              <ul className="space-y-4">
                {[
                  'B2B companies with complex offerings',
                  'Mid-sized brands needing a relaunch',
                  'Startups scaling fast',
                  'Niche market leaders with global reach',
                  'Local service providers ready for the next step'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="h-8 w-8 flex items-center justify-center bg-brand-primary/10 rounded-full mr-3">
                      <CheckCircle className="h-4 w-4 text-brand-primary" />
                    </span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-layout">
              <p className="text-xl font-medium mb-6">Typical Industries:</p>
              <div className="grid grid-cols-2 gap-4">
                {['SaaS', 'Manufacturing', 'Consulting', 'Legal', 'Healthcare'].map((industry, index) => (
                  <div key={index} className="bg-brand-backgroundAlt p-4 rounded-md text-center">
                    {industry}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="section-standard">
        <div className="section-container">
          <h2 className="section-title">Based in Mainz. Active Across DACH and Beyond.</h2>
          <p className="section-subtitle">
            While our HQ is in Mainz, we collaborate with clients in Germany, Switzerland, and Mallorca. 
            Digital-first, location-flexible—and always responsive.
          </p>
          <div className="mt-12 bg-brand-backgroundAlt rounded-xl p-8 shadow-sm h-[300px] flex items-center justify-center">
            <p className="text-gray-500">Map Placeholder</p>
          </div>
        </div>
      </section>

      {/* What's Next Section */}
      <section className="section-alt">
        <div className="section-container">
          <h2 className="section-title">Let's Build Something Great Together</h2>
          <p className="section-subtitle mb-10">
            Whether you're planning a relaunch, a new website, or need help turning complexity into clarity—let's explore your next step together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="button-primary" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button variant="outline" size="lg" className="button-secondary" asChild>
              <Link to="/contact">Book a Call</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA 
        title="Ready to transform your digital presence?"
        subtitle="Let's discuss how our team can help your business achieve its online goals."
        primaryCta="Start Your Project"
        secondaryCta="Book a Strategy Call"
      />
    </PageLayout>
  );
};

export default AboutUs;
