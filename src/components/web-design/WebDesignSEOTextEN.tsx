
import React from 'react';

const WebDesignSEOTextEN = () => {
  const handleOpenLeadForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  return (
    <section className="bg-[#f7fafa] pt-12 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none text-[17px] leading-relaxed text-gray-700">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Webdesign Agency Mainz – Custom Websites for Business Growth</h2>
          
          <p className="my-4">
            At ooliv, we create tailor-made websites that combine creative vision, technical excellence, and measurable results. With over 16 years of experience, we build scalable WordPress and Shopify solutions that deliver strong performance, SEO readiness, and outstanding user experience.
          </p>
          
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">Why ooliv? – Your Professional Web Design Partner</h3>
          
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Custom CMS Solutions: WordPress and Shopify, based on your business goals.</li>
            <li>Transparent Pricing: Clear fixed prices or custom quotes, depending on project complexity.</li>
            <li>Strategic Development: SEO, UX, and conversion-focused technical implementation.</li>
            <li>Full-Service Support: Hosting, maintenance, security, and performance monitoring.</li>
            <li>Direct Expert Access: You work directly with our CEO and development team – no intermediaries.</li>
          </ul>
          
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">Our Web Design and Digital Services</h3>
          
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Web Design & UX Design: Fast-loading, user-centered, conversion-optimized.</li>
            <li>Custom WordPress Development: SEO-ready, scalable CMS structures.</li>
            <li>Technical Implementation: GDPR-compliant, secure coding practices.</li>
            <li>E-Commerce Solutions: Tailor-made online stores with WordPress (WooCommerce) and Shopify.</li>
            <li>SEO & Google Ads: Complete on-page SEO and high-performance PPC campaigns.</li>
            <li>Ongoing Support: Flexible maintenance packages and reliable hosting.</li>
          </ul>
          
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">Ease of Use and Accessibility</h3>
          
          <p className="my-4">
            Our WordPress CMS solutions are designed with intuitive drag-and-drop tools and a user-friendly visual interface, ensuring fast publishing workflows and easy collaboration for your marketing or content teams.
          </p>
          
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">Inspiration and Resources</h3>
          
          <p className="my-4">
            During the design phase, we work with curated styling combinations and dynamic content elements. Each project results in inspiring website designs, tailored through custom code to bring your brand vision to life.
          </p>
          
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">Website Builders and Platforms</h3>
          
          <p className="my-4">
            Unlike rigid site builder tools, we create scalable web presences using composable CMS architectures, custom code, and mobile-friendly templates that ensure maximum flexibility and performance.
          </p>
          
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">Transparent Pricing for Web Design Projects</h3>
          
          <p className="my-4">Every project is unique. We offer:</p>
          
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Fixed-Price Packages: For clear, defined scopes.</li>
            <li>Custom Quotes: Based on complexity, technical needs, and SEO goals.</li>
            <li>Maintenance Packages: Ongoing monthly support and updates.</li>
          </ul>
          
          <p className="my-4">
            You receive a detailed development plan, continuous consulting, and measurable milestones right from the beginning.
          </p>
          
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">Why Choose a Professional Web Design Agency?</h3>
          
          <p className="my-4">Working with ooliv ensures:</p>
          
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Faster Online Visibility through SEO-ready structures.</li>
            <li>Better Website Performance with speed and usability in mind.</li>
            <li>Higher Security Standards with GDPR compliance and reliable hosting.</li>
            <li>Sustainable Growth by focusing on measurable conversions, leads, and brand visibility.</li>
          </ul>
          
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">Ready to Launch Your Website?</h3>
          
          <p className="my-4">
            Let's discuss how ooliv can create a high-performance website that drives real business growth.
          </p>
          
          <p className="my-4">
            <button 
              onClick={handleOpenLeadForm}
              className="text-brand-primary hover:text-brand-primaryHover hover:underline cursor-pointer inline-block"
            >
              👉 Start Your Project Today
            </button>
          </p>
        </article>
      </div>
    </section>
  );
};

export default WebDesignSEOTextEN;
