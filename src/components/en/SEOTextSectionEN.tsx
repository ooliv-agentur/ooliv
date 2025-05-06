
import React from 'react';

const SEOTextSectionEN = () => {
  const handleOpenLeadForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  return (
    <section className="bg-[#f7fafa] pt-12 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none text-[17px] leading-relaxed text-gray-700">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Web Design Agency Mainz – Tailored Digital Solutions for Business Growth</h2>
          
          <p className="my-4">
            At ooliv, we are your specialized Web Design Agency in Mainz, creating websites that go beyond visual appeal — they deliver measurable results.
            With over 16 years of experience, we combine strategic thinking, technical excellence, and creative design to develop websites that convert, rank, and scale.
          </p>
          
          <p className="my-4">
            We specialize in WordPress CMS development, while also offering custom solutions on Shopify, Shopware, and other e-commerce platforms — always optimized for SEO, speed, and user experience.
          </p>
          
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">Why ooliv? – Your Partner for Professional Web Projects</h3>
          
          <p className="my-4">
            ✓ Custom CMS Solutions: WordPress, Shopify, and scalable e-commerce platforms — selected based on your project goals.<br />
            ✓ Transparent Pricing Models: Clear cost structures aligned with project complexity — no hidden fees.<br />
            ✓ Strategic Web Development: Technical execution based on SEO, UX, and conversion rate optimization.<br />
            ✓ Full-Service Support: Hosting, security monitoring, updates, and performance optimization.<br />
            ✓ Direct Access to Experts: No middlemen — you work directly with our CEO and senior developers.
          </p>
          
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">Our Services – Web Design, Development & Digital Strategy</h3>
          
          <p className="my-3">
            <strong>Web Design & UX</strong><br />
            User-centric, responsive, conversion-optimized designs tailored to your audience.
          </p>
          
          <p className="my-3">
            <strong>Custom WordPress Development</strong><br />
            Flexible CMS solutions built with SEO best practices, speed, and scalability in mind.
          </p>
          
          <p className="my-3">
            <strong>Technical Implementation</strong><br />
            Secure coding, GDPR compliance, fast loading times, and mobile optimization.
          </p>
          
          <p className="my-3">
            <strong>E-Commerce Solutions</strong><br />
            Online stores built on Shopify and WooCommerce, or fully custom platforms.
          </p>
          
          <p className="my-3">
            <strong>SEO & Google Ads Integration</strong><br />
            On-page SEO structures, keyword strategies, and optional SEA (Google Ads) campaigns.
          </p>
          
          <p className="my-3">
            <strong>Support & Hosting Packages</strong><br />
            Optional monthly support for updates, hosting, backups, and technical optimization.
          </p>
          
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">Transparent Pricing for Web Projects</h3>
          
          <p className="my-4">Every project is unique — so is its pricing. We offer:</p>
          
          <p className="my-3">
            <strong>Fixed-Price Packages:</strong> For well-defined scopes (e.g., landing pages, company websites, e-commerce sites).
          </p>
          
          <p className="my-3">
            <strong>Custom Quotes:</strong> Based on project complexity, functionality needs, and SEO goals.
          </p>
          
          <p className="my-3">
            <strong>Monthly Maintenance Options:</strong> Flexible support packages after launch.
          </p>
          
          <p className="my-4">
            You receive a detailed project plan, clear milestones, and full visibility from the initial consultation to the final deployment.
          </p>
          
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">Why Professional Web Design Matters</h3>
          
          <p className="my-4">Choosing an experienced web design agency like ooliv ensures:</p>
          
          <p className="my-3">
            <strong>Faster Visibility:</strong> SEO-optimized websites that rank and perform.
          </p>
          
          <p className="my-3">
            <strong>Better User Experience:</strong> Mobile-first, responsive, and user-centered designs.
          </p>
          
          <p className="my-3">
            <strong>Higher Security and Reliability:</strong> GDPR compliance and secure hosting environments.
          </p>
          
          <p className="my-3">
            <strong>Measurable Business Growth:</strong> Websites designed to generate leads, conversions, and brand authority.
          </p>
          
          <p className="my-4">
            Your website becomes a strategic asset — not just an online brochure.
          </p>
          
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">Ready to Build Your High-Performance Website?</h3>
          
          <p className="my-4">
            Let's discuss how ooliv, your trusted Web Design Agency in Mainz, can deliver a website that drives real business growth.
          </p>
          
          <p className="my-4">
            <button 
              onClick={handleOpenLeadForm}
              className="text-brand-primary hover:text-brand-primaryHover hover:underline cursor-pointer inline-block"
            >
              👉 Start Your Website Project Today
            </button>
          </p>
        </article>
      </div>
    </section>
  );
};

export default SEOTextSectionEN;
