
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Reusing the case studies data from the Testimonials section
const caseStudies = [
  {
    id: 'scheurich',
    title: 'Scheurich: Ceramic Brand Transformation',
    description: "How we increased organic traffic by 120% for Germany's leading ceramic manufacturer",
    category: 'Web Design • SEO',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    stats: [
      { value: '+120%', label: 'Organic Traffic' },
      { value: '+45%', label: 'Conversion Rate' },
      { value: '2x', label: 'Lead Generation' }
    ]
  },
  {
    id: 'cobus',
    title: 'COBUS: ERP Solutions',
    description: 'Lead generation improved by 80% with a new website & conversion strategy',
    category: 'Web Design • Lead Generation',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    stats: [
      { value: '+80%', label: 'More Leads' },
      { value: '3x', label: 'Website Traffic' },
      { value: '-40%', label: 'Bounce Rate' }
    ]
  },
  {
    id: 'weisenburger',
    title: 'Weisenburger: Real Estate',
    description: 'Seamless CRM integration & scalable web infrastructure for property development',
    category: 'Web Development • CRM',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    stats: [
      { value: '+95%', label: 'Faster Load Time' },
      { value: '+60%', label: 'More Inquiries' },
      { value: '4.9/5', label: 'User Satisfaction' }
    ]
  },
  {
    id: 'popbird',
    title: 'PopBird: E-Commerce & Retail',
    description: '35% sales growth in 6 months through emotional storytelling',
    category: 'Brand Development • E-Commerce',
    image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284',
    stats: [
      { value: '+35%', label: 'Sales Growth' },
      { value: '+42%', label: 'Average Order Value' },
      { value: '+60%', label: 'Customer Retention' }
    ]
  },
  {
    id: 'greentech',
    title: 'GreenTech: Renewable Energy',
    description: '200+ qualified leads per month with targeted SEO & content strategy',
    category: 'SEO • Content Strategy',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea',
    stats: [
      { value: '200+', label: 'Monthly Leads' },
      { value: 'Top', label: 'Search Rankings' },
      { value: '-68%', label: 'Acquisition Cost' }
    ]
  }
];

// Partner logos placeholders
const partnerLogos = [
  { id: 'bikesde', name: 'BikesDE' },
  { id: 'aok', name: 'AOK' },
  { id: 'apcoa', name: 'APCOA' },
  { id: 'sbi', name: 'SBI' },
  { id: 'poppybird', name: 'PoppyBird' }
];

const CaseStudies = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Hero Section with Intro Content */}
        <div className="py-24 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg text-brand-primary font-medium mb-4">Made with love.</h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Success stories you can touch.</h1>
            <p className="text-xl mb-10">
              Behind every project lies a story with an introduction, climax, and happy ending. Only one question remains: Which success story do we want to write together?
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button size="lg" asChild>
                <Link to="/contact">Let's talk</Link>
              </Button>
              <Button variant="outline" size="lg">
                Discover cases
              </Button>
            </div>

            <p className="text-brand-primary font-medium mt-6">
              Limited spots currently available.
            </p>
          </div>
        </div>
        
        {/* Partner Logos */}
        <div className="py-12 border-t border-b border-gray-200">
          <div className="text-center mb-8">
            <div className="flex justify-center flex-wrap gap-12 mb-8">
              {partnerLogos.map((logo) => (
                <div key={logo.id} className="grayscale hover:grayscale-0 transition-all">
                  <img 
                    src={`/placeholder.svg`} 
                    alt={`${logo.name} logo`} 
                    className="h-12 md:h-16"
                  />
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-600">
              Partnerships that inspire and have a lasting impact.
            </p>
          </div>
        </div>
        
        {/* Strategy Text */}
        <div className="py-16 text-center">
          <p className="text-xl max-w-4xl mx-auto">
            Strategy meets storytelling: We transform brands into scalable success stories. With individual roadmaps, proven systems, and creative strategies, we implement sustainable growth in your business. But see for yourself…
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-200">
                  <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{study.category}</div>
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="mb-4">
                    {study.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="block font-bold text-brand-primary">{study.stats[0].value}</span>
                      <span className="text-sm text-gray-500">{study.stats[0].label}</span>
                    </div>
                    <Button variant="ghost" className="p-0 h-auto">
                      View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 bg-brand-backgroundAlt rounded-lg p-10 text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Ready to Become Our Next Success Story?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Let's discuss how we can help your business achieve similar results
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default CaseStudies;
