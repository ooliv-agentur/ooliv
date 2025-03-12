
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Careers = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="text-center mb-16 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore opportunities to grow your career with us
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Work With Us?</h2>
            <p className="text-lg mb-6">
              At ooliv, we're building a team of passionate and talented individuals who are 
              excited about creating digital experiences that make a difference.
            </p>
            <p className="text-lg mb-6">
              We offer a collaborative and innovative environment where you can grow professionally, 
              work on exciting projects, and make a meaningful impact.
            </p>
            <div className="space-y-4">
              {[
                'Flexible remote work options',
                'Competitive compensation and benefits',
                'Continuous learning and development',
                'Collaborative and supportive work environment'
              ].map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-brand-primary mr-2">✓</span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg p-8 h-[400px] flex items-center justify-center">
            <p className="text-gray-500">Team Culture Image</p>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Open Positions</h2>
          <div className="space-y-6">
            {[
              {
                title: 'Frontend Developer',
                location: 'Remote',
                type: 'Full-time'
              },
              {
                title: 'UI/UX Designer',
                location: 'Remote',
                type: 'Full-time'
              },
              {
                title: 'SEO Specialist',
                location: 'Remote',
                type: 'Full-time'
              },
              {
                title: 'Digital Marketing Manager',
                location: 'Remote',
                type: 'Full-time'
              }
            ].map((job, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                    <div className="text-gray-500 flex flex-wrap gap-4">
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <Button className="mt-4 md:mt-0">
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-brand-backgroundAlt rounded-lg p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See a Perfect Fit?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            We're always looking for talented individuals to join our team. Send us your resume!
          </p>
          <Button size="lg">Submit Open Application</Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default Careers;
