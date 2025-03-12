
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    id: 'scheurich',
    title: 'Scheurich: Ceramic Brand Transformation',
    description: 'How we increased organic traffic by 120% for Germany's leading ceramic manufacturer',
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
    id: 'immowelt',
    title: 'Immowelt: Real Estate Platform',
    description: '150 qualified leads in 10 days after 8 weeks of testing and optimization',
    category: 'Lead Generation • Advertising',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
    stats: [
      { value: '150', label: 'Qualified Leads' },
      { value: '10', label: 'Days Timeframe' },
      { value: '+200%', label: 'ROI Increase' }
    ]
  },
  {
    id: 'biertisch',
    title: 'Biertisch Plane: Product Innovation',
    description: 'Launching a new product line with strategic digital marketing campaigns',
    category: 'Brand Development • E-Commerce',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    stats: [
      { value: '+350%', label: 'Online Sales' },
      { value: '12K', label: 'Newsletter Signups' },
      { value: '+85%', label: 'Brand Awareness' }
    ]
  },
  {
    id: 'aok',
    title: 'AOK: Healthcare Provider',
    description: 'Digital transformation strategy for Germany's largest health insurance provider',
    category: 'Digital Transformation • UX Design',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
    stats: [
      { value: '-35%', label: 'Processing Time' },
      { value: '+70%', label: 'Digital Adoption' },
      { value: '4.8/5', label: 'Customer Rating' }
    ]
  }
];

const CaseStudies = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="text-center mb-16 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore how we've helped businesses achieve remarkable results
          </p>
        </div>

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
                  <Button variant="ghost" className="p-0 h-auto" asChild>
                    <Link to={`/case-studies/${study.id}`}>
                      View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg">Load More Case Studies</Button>
        </div>

        <div className="mt-24 bg-brand-backgroundAlt rounded-lg p-10 text-center">
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
