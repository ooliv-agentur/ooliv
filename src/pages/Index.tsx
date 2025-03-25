
import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TeamImpactSection from "@/components/TeamImpactSection";
import Challenge from "@/components/Challenge";
import Solution from "@/components/Solution";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import TeamTeaser from "@/components/TeamTeaser";
import ClientLogos from "@/components/ClientLogos";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const Index = () => {
  return (
    <PageLayout className="overflow-x-hidden">
      <Hero />
      <AboutSection />
      <TeamImpactSection />
      <Challenge />
      <div className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-brand-heading">See the Difference a Strategic Website Makes</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
            Drag the slider to compare outdated designs with modern, conversion-focused websites that drive real business results.
          </p>
          <BeforeAfterSlider />
        </div>
      </div>
      <Solution 
        description={
          <>
            We create high-performance websites that rank higher, convert better, and drive measurable business success. Our expertise spans 
            <Link to="/web-design" className="text-brand-primary hover:underline"> Web Design</Link>, 
            <Link to="/web-development" className="text-brand-primary hover:underline"> Web Development</Link>, 
            <Link to="/content-creation" className="text-brand-primary hover:underline"> Content Creation</Link>, 
            <Link to="/seo-optimization" className="text-brand-primary hover:underline"> SEO Optimization</Link>, 
            <Link to="/google-ads" className="text-brand-primary hover:underline"> Google Ads</Link>, and 
            <Link to="/ai-technologies" className="text-brand-primary hover:underline"> AI Technologies</Link>.
          </>
        }
      />
      <TeamTeaser />
      <ClientLogos />
      
      {/* Standardized Case Studies Section */}
      <section className="py-20 bg-gradient-to-br from-brand-background to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-6 font-sans">
              We Create Websites That Deliver <span className="text-brand-primary">Real Business Results</span>
            </h2>
            <p className="text-xl text-brand-text max-w-3xl mx-auto mb-8 font-sans">
              Real results from real clients. See how we've helped businesses like yours achieve measurable growth through strategic web design and development.
            </p>
          </div>
          
          <div className="space-y-20">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-full md:w-1/2">
                <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      <img src="/placeholder.svg" alt="Scheurich logo" className="h-10 w-auto" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-heading">Scheurich</h3>
                      <p className="text-sm text-gray-500">Ceramic & Lifestyle Brand</p>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-medium mb-6">
                    120% more organic traffic through complete website optimization
                  </h4>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <div className="mr-3 mt-1 text-brand-primary">
                        <Check className="h-5 w-5" />
                      </div>
                      <p className="text-sm text-gray-600">120% more organic traffic after full website optimization</p>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-3 mt-1 text-brand-primary">
                        <Check className="h-5 w-5" />
                      </div>
                      <p className="text-sm text-gray-600">45% higher conversion rate with improved user experience</p>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-3 mt-1 text-brand-primary">
                        <Check className="h-5 w-5" />
                      </div>
                      <p className="text-sm text-gray-600">2x lead generation through strategic conversion points</p>
                    </div>
                  </div>
                  
                  <blockquote className="italic text-gray-600 text-sm border-l-4 border-brand-primary pl-4 my-6">
                    "Thanks to ooliv, our website is now a growth engine. The process was seamless, and the results speak for themselves."
                  </blockquote>
                  
                  <div className="flex items-center mt-6 pt-4 border-t border-gray-100">
                    <div className="mr-3">
                      <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-xs">
                        MS
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Michael Schmidt</p>
                      <p className="text-xs text-gray-500">Marketing Director, Scheurich</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                    alt="Scheurich case study" 
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
              <div className="w-full md:w-1/2">
                <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      <img src="/placeholder.svg" alt="COBUS logo" className="h-10 w-auto" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-heading">COBUS</h3>
                      <p className="text-sm text-gray-500">ERP & IT Solutions</p>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-medium mb-6">
                    Lead generation improved by 80% with a new website & conversion strategy
                  </h4>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <div className="mr-3 mt-1 text-brand-primary">
                        <Check className="h-5 w-5" />
                      </div>
                      <p className="text-sm text-gray-600">80% more leads through targeted conversion strategy</p>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-3 mt-1 text-brand-primary">
                        <Check className="h-5 w-5" />
                      </div>
                      <p className="text-sm text-gray-600">3x website traffic with improved visibility and content</p>
                    </div>
                    <div className="flex items-start">
                      <div className="mr-3 mt-1 text-brand-primary">
                        <Check className="h-5 w-5" />
                      </div>
                      <p className="text-sm text-gray-600">40% lower bounce rate with enhanced user experience</p>
                    </div>
                  </div>
                  
                  <blockquote className="italic text-gray-600 text-sm border-l-4 border-brand-primary pl-4 my-6">
                    "Professional, strategic, and results-driven. They understood exactly what our business needed."
                  </blockquote>
                  
                  <div className="flex items-center mt-6 pt-4 border-t border-gray-100">
                    <div className="mr-3">
                      <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-xs">
                        TW
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Thomas Weber</p>
                      <p className="text-xs text-gray-500">CEO, COBUS</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                    alt="COBUS case study" 
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Testimonials />
      <FAQ />
      <CTA 
        title="Ready to transform your digital presence?"
        subtitle="Let's discuss how our team can help your business achieve its online goals."
        primaryCta="Start Your Website Project"
        secondaryCta="See Our Work"
      />
    </PageLayout>
  );
};

export default Index;
