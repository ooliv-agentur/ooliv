
import React from 'react';
import { Link } from 'react-router-dom';

const SEOTextSectionEN = () => {
  return (
    <section className="bg-[#f7fafa] pt-12 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none text-[17px] leading-relaxed text-gray-700">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Web Design Agency in Mainz for Businesses Ready to Grow</h2>
          <p className="mb-4">
            At ooliv, we create websites that do more than just look good—they drive measurable business results. Since 2008, our Mainz-based team has specialized in developing high-performance websites that improve your Google visibility, generate qualified leads, and strengthen your brand position.
          </p>
          <p className="mb-4">
            Our services include strategic <Link to="/en/webdesign" className="text-brand-primary hover:underline">web design</Link>, <Link to="/en/webdevelopment" className="text-brand-primary hover:underline">web development</Link>, <Link to="/en/content-creation" className="text-brand-primary hover:underline">content creation</Link>, <Link to="/en/seo" className="text-brand-primary hover:underline">search engine optimization</Link>, and <Link to="/en/google-ads" className="text-brand-primary hover:underline">Google Ads management</Link>, all with a focus on clear strategy and measurable outcomes.
          </p>
          <p>
            Whether you're a startup looking to establish your online presence or an established business needing a digital refresh, our expert team delivers websites that blend strategic thinking, user-focused design, and technical excellence.
          </p>
          
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">Why Choose ooliv as Your Web Design Partner?</h3>
          <p className="mb-4">
            Our approach combines the expertise of a specialized agency with the personal touch of a boutique studio. Every project begins with understanding your business goals, target audience, and competitive landscape before moving into design and development.
          </p>
          <p className="mb-4">
            What sets us apart is our commitment to results-driven design. We don't just build websites—we create digital assets that work hard for your business, with clear metrics to track success. Our clients value our transparent communication, structured process, and focus on long-term business impact.
          </p>
          <p>
            Ready to discuss how a strategic website can drive your business forward? <Link to="/en/contact" className="text-brand-primary hover:underline">Contact our team</Link> today to schedule a consultation.
          </p>
        </article>
      </div>
    </section>
  );
};

export default SEOTextSectionEN;
