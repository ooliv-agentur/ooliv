
import React from 'react';

const ContactSEOTextEN = () => {
  const handleOpenLeadForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  return (
    <section className="bg-[#f7fafa] pt-12 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none text-[17px] leading-relaxed text-gray-700">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Contact ooliv – Your Digital Agency from Mainz</h2>
          
          <p>
            Looking to work with ooliv, your digital agency from Mainz? We look forward to hearing from you!
            As an owner-operated agency, we stand for clear communication, fast response times, and tailored solutions for web design, SEO, and digital marketing.
          </p>
          
          <p>
            Whether you need a new website, online marketing strategy, or relaunch project – at ooliv you'll always have a dedicated contact person by your side.
            We serve businesses from Mainz, the entire DACH region, and beyond – digital, personal, and efficient.
          </p>
          
          <p>
            Feel free to compare us with other providers:
            As a certified Google partner and industry expert for search engine marketing, SEO, and custom web design, we combine experience, strategy, and cutting-edge tools. Our transparent approach and personal support make the difference.
          </p>
          
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">Our clients particularly appreciate:</h3>
          
          <ul className="list-disc pl-6 my-4">
            <li>Fast response times and direct contacts</li>
            <li>Custom strategies instead of standard solutions</li>
            <li>Excellent reviews and years of experience in online marketing</li>
          </ul>
          
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">About ooliv:</h3>
          <p>
            Founded in 2008 in Mainz, we develop custom business websites, online shops, and digital solutions under our own brand name.
            Our focus is on web design, SEO, marketing materials, and content development for growth-oriented companies in the DACH region.
          </p>
          
          <p>
            Simply use our contact form, send us an email, or give us a call.
            Your inquiry goes directly to our team – no intermediaries, no waiting queues.
          </p>
          
          <p>
            Contact ooliv now and let's achieve your digital goals together.
          </p>
          
          <p className="my-4">
            <button
              onClick={handleOpenLeadForm}
              className="text-brand-primary hover:text-brand-primaryHover hover:underline cursor-pointer inline-block"
            >
              👉 Start your project or get in touch directly
            </button>
          </p>
        </article>
      </div>
    </section>
  );
};

export default ContactSEOTextEN;
