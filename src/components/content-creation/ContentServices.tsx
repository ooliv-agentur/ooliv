
import React from 'react';
import { FileText, Image, PenTool, Video, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: FileText,
    title: 'Text & Messaging',
    description: 'SEO-optimized website copy, created with GPT-based workflows and refined by our editorial team.',
    features: [
      'Headlines, landing pages, FAQs, CTAs',
      'Conversion-focused copywriting',
      'SEO-optimized content structure',
      'Brand voice consistency'
    ]
  },
  {
    icon: Image,
    title: 'Photo & Imagery',
    description: 'We create custom images using Midjourney and work with your team to make sure visuals align with your brand.',
    features: [
      'Brand-aligned image aesthetics',
      'Custom photography direction',
      'AI-enhanced image creation',
      'Web-optimized formats'
    ]
  },
  {
    icon: PenTool,
    title: 'Illustration & Logo Design',
    description: 'From icons to logos, we create visual assets that reinforce your brand identity and structure.',
    features: [
      'Vector graphics & UI icons',
      'Brand identity design',
      'Website illustrations',
      'Visual system development'
    ]
  },
  {
    icon: Video,
    title: 'Video & Animation',
    description: 'Whether it\'s explainer videos, short animations, or social media clips, we create engaging video content using tools like Sora — on-brand and easy to use.',
    features: [
      'Hero section background videos',
      'Product demonstrations',
      'Process explanations',
      'Social media teasers'
    ]
  }
];

const ContentServices = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-background via-white to-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
          Web Content That Doesn't Just Fill Pages — It Moves People
        </h2>
        
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
          We deliver content that converts. Every element is created for clarity, connection, and long-term relevance.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-none md:snap-none md:overflow-visible">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 min-w-[280px] snap-center md:snap-align-none">
              <CardHeader className="pb-2">
                <div className="p-3 rounded-full bg-brand-backgroundAlt inline-flex mb-3">
                  <service.icon className="h-6 w-6 text-brand-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-brand-heading">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-text mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-baseline">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mr-2 mt-1.5 flex-shrink-0"></span>
                      <span className="text-sm text-brand-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button variant="link" className="text-brand-primary">
            Need help defining your content? Let's talk strategy →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContentServices;
