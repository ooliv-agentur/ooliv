
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';

const AboutUs = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="text-center mb-16 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're a team of digital experts passionate about helping businesses succeed online
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg mb-6">
              Founded in 2015, ooliv has been at the forefront of digital transformation, 
              helping businesses of all sizes establish and grow their online presence.
            </p>
            <p className="text-lg mb-6">
              What began as a small web design studio has evolved into a full-service 
              digital agency offering comprehensive solutions for businesses looking to 
              thrive in the digital landscape.
            </p>
            <p className="text-lg">
              Our mission is to empower businesses with innovative digital solutions that 
              drive growth, enhance brand visibility, and create memorable user experiences.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-8 h-[400px] flex items-center justify-center">
            <p className="text-gray-500">Team Photo</p>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: 'Innovation',
                description: 'We stay at the cutting edge of technology and digital trends.'
              },
              { 
                title: 'Excellence',
                description: 'We strive for excellence in everything we do, from design to development.'
              },
              { 
                title: 'Integrity',
                description: 'We build relationships based on trust, transparency, and honesty.'
              },
              { 
                title: 'Results',
                description: 'We focus on delivering measurable results that impact your bottom line.'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="text-center">
                <div className="h-64 w-64 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold">Team Member {item}</h3>
                <p className="text-gray-500">Position</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-brand-backgroundAlt rounded-lg p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Let's discuss how our team can help your business achieve its digital goals
          </p>
          <Button size="lg">Contact Us Today</Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutUs;
