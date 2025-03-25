
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layout, FileText, Target, PenTool } from 'lucide-react';

const WebDesignStructureFirst = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
          Structure Before Style — That's Step One
        </h2>
        
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
          Good websites don't start with colors — they start with structure. We help you define what goes where, what to say, and how to guide your visitors toward action.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-brand-backgroundAlt">
                <Layout className="h-6 w-6 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-brand-heading">
                  Sitemap & Page Structure
                </h3>
                <p className="text-brand-text">Clearly mapped user journeys and navigation flow for intuitive browsing.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-brand-backgroundAlt">
                <FileText className="h-6 w-6 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-brand-heading">
                  Content First Approach
                </h3>
                <p className="text-brand-text">Keyword research and content strategy that speaks directly to your target audience.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-brand-backgroundAlt">
                <Target className="h-6 w-6 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-brand-heading">
                  Conversion-Focused Wireframes
                </h3>
                <p className="text-brand-text">Strategic layouts designed to guide visitors toward the actions that matter most.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-brand-backgroundAlt p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h4 className="text-lg font-bold text-brand-heading mb-2">Also included in this phase:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <li className="flex items-center text-brand-text">
                  <div className="h-1.5 w-1.5 rounded-full bg-brand-primary mr-2"></div>
                  Wireframes for layout clarity
                </li>
                <li className="flex items-center text-brand-text">
                  <div className="h-1.5 w-1.5 rounded-full bg-brand-primary mr-2"></div>
                  Keyword-based content planning
                </li>
                <li className="flex items-center text-brand-text">
                  <div className="h-1.5 w-1.5 rounded-full bg-brand-primary mr-2"></div>
                  Conversion copy that fits your tone
                </li>
                <li className="flex items-center text-brand-text">
                  <div className="h-1.5 w-1.5 rounded-full bg-brand-primary mr-2"></div>
                  Visual storytelling elements
                </li>
              </ul>
            </div>
            <Link 
              to="/content-creation" 
              className="inline-flex items-center text-brand-primary hover:underline font-medium"
            >
              Learn more about our content creation process
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDesignStructureFirst;
