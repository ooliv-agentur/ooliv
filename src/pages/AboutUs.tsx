
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Link } from 'react-router-dom';
import CTA from '@/components/CTA';

const AboutUs = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">The Agency Behind Your Digital Growth</h1>
          <p className="text-xl max-w-3xl mx-auto">
            From local roots to 100+ successful projects: Discover how ooliv blends creativity, strategy, and tech to build websites that move businesses forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" asChild>
              <Link to="/contact">Let's Talk</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">Where Passion Meets Performance</h2>
            <p className="text-lg mb-6">
              What started with a bold opportunity became a long-term success story. In 2008, after a leading Mainz agency closed its doors, a handful of loyal clients asked: "Can you continue on your own?" That moment sparked the beginning of ooliv.
            </p>
            <p className="text-lg">
              Since then, we've grown into a tight-knit team of 6—designers, strategists, developers, and content creators. United by a shared mindset: <strong>Every website should create real business value</strong>.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <AspectRatio ratio={16/9}>
              <div className="h-full w-full flex items-center justify-center">
                <p className="text-gray-500">Team Photo</p>
              </div>
            </AspectRatio>
          </div>
        </div>

        {/* What Drives Us Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-8 text-center">A Digital Partner, Not Just a Service Provider</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <AspectRatio ratio={4/3}>
                <div className="h-full w-full flex items-center justify-center">
                  <p className="text-gray-500">Office Environment</p>
                </div>
              </AspectRatio>
            </div>
            <div>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-brand-primary rounded-full mr-3"></span>
                  <span className="text-lg">We listen before we build</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-brand-primary rounded-full mr-3"></span>
                  <span className="text-lg">We simplify complexity</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-brand-primary rounded-full mr-3"></span>
                  <span className="text-lg">We merge design with strategy</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-brand-primary rounded-full mr-3"></span>
                  <span className="text-lg">We embrace tech without losing the human touch</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-brand-primary rounded-full mr-3"></span>
                  <span className="text-lg">We stay curious, precise, and brutally honest</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Our Philosophy Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-6 text-center">Custom. Thoughtful. Measurable.</h2>
          <p className="text-lg max-w-4xl mx-auto mb-8 text-center">
            No templates. No fluff. We develop tailor-made websites based on your specific goals, audience, and growth stage. 
            Whether you're a B2B SaaS player, a manufacturing brand, or a regional service provider—<strong>we build digital experiences that convert</strong>.
          </p>
          <p className="text-lg max-w-4xl mx-auto mb-12 text-center">
            From the first concept to post-launch support, we work with transparency, strategic foresight, and high design standards.
          </p>
          <div className="bg-brand-backgroundAlt p-8 rounded-lg max-w-3xl mx-auto">
            <blockquote className="text-xl italic text-center">
              "We don't just deliver websites. We build digital assets that perform."
              <footer className="mt-4 font-medium">– Uli, Founder</footer>
            </blockquote>
          </div>
        </div>

        {/* Our Team Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-6 text-center">6 Experts. One Shared Vision.</h2>
          <p className="text-lg max-w-3xl mx-auto mb-12 text-center">
            We're small by design—and proud of it. You always work directly with the people who shape your website:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              'UX & UI Designers',
              'Web Developers (WordPress & Headless)',
              'SEO & Content Strategists',
              'Motion Designers & Illustrators',
              'Copywriters powered by ChatGPT, guided by strategy',
              'Logo Designers who capture brand essence in one stroke'
            ].map((role, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <p className="text-lg font-medium">{role}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Button variant="outline" size="lg">
              Meet the Team
            </Button>
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-6 text-center">Digital. But Not Only.</h2>
          <p className="text-lg max-w-3xl mx-auto mb-12 text-center">
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
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <p className="text-base font-medium">{service}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-100 p-6 rounded-lg mt-10 max-w-2xl mx-auto">
            <p className="text-center text-lg">
              We master AI tools like <strong>ChatGPT</strong>, <strong>Midjourney</strong>, and <strong>Sora</strong> to enhance—but not replace—our human creativity.
            </p>
          </div>
        </div>

        {/* Who We Work With Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-6 text-center">For Businesses That Want to Move Forward</h2>
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div>
              <p className="text-lg mb-6">We help:</p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-brand-primary rounded-full mr-3"></span>
                  <span className="text-lg">B2B companies with complex offerings</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-brand-primary rounded-full mr-3"></span>
                  <span className="text-lg">Mid-sized brands needing a relaunch</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-brand-primary rounded-full mr-3"></span>
                  <span className="text-lg">Startups scaling fast</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-brand-primary rounded-full mr-3"></span>
                  <span className="text-lg">Niche market leaders with global reach</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-brand-primary rounded-full mr-3"></span>
                  <span className="text-lg">Local service providers ready for the next step</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <p className="text-xl font-medium mb-6">Typical Industries:</p>
              <div className="grid grid-cols-2 gap-4">
                {['SaaS', 'Manufacturing', 'Consulting', 'Legal', 'Healthcare'].map((industry, index) => (
                  <div key={index} className="bg-white p-4 rounded-md text-center">
                    {industry}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Locations Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-6 text-center">Based in Mainz. Active Across DACH and Beyond.</h2>
          <p className="text-lg max-w-3xl mx-auto text-center">
            While our HQ is in Mainz, we collaborate with clients in Germany, Switzerland, and Mallorca. 
            Digital-first, location-flexible—and always responsive.
          </p>
          <div className="mt-12 bg-gray-100 rounded-lg p-8 h-[300px] flex items-center justify-center">
            <p className="text-gray-500">Map Placeholder</p>
          </div>
        </div>

        {/* What's Next Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-6 text-center">Let's Build Something Great Together</h2>
          <p className="text-lg max-w-3xl mx-auto mb-10 text-center">
            Whether you're planning a relaunch, a new website, or need help turning complexity into clarity—let's explore your next step together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Book a Call</Link>
            </Button>
          </div>
        </div>

        {/* CTA Section */}
        <CTA 
          title="Ready to transform your digital presence?"
          subtitle="Let's discuss how our team can help your business achieve its online goals."
          primaryCta="Start Your Project"
          secondaryCta="Book a Strategy Call"
        />
      </div>
    </PageLayout>
  );
};

export default AboutUs;
