
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { ChevronLeft, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';

// Sample case study data
const caseStudiesData = {
  immowelt: {
    title: "150 passende Leads in 10 Tagen nach 8 Wochen Testing",
    client: "Immowelt",
    industry: "Real Estate Platform",
    logo: "/placeholder.svg",
    headerImage: "public/lovable-uploads/8557fac8-591b-485b-86bf-fb6988027711.png",
    deviceImage: "public/lovable-uploads/65264916-5b20-4c20-9f95-88a5bc7f2b53.png",
    challenge: "Immowelt needed to generate qualified leads for their real estate platform but was struggling with their existing marketing approach.",
    solution: "We developed a multi-phase marketing strategy with targeted Meta Ads, expanding to a comprehensive content strategy.",
    results: [
      "8 Wochen testeten wir, bis wir die richtige Lead-Qualität erreicht haben - daraufhin generierten wir 150 qualifizierte Leads in 10 Tagen",
      "Der Fahrplan: Mehrstufige Ansprache der Zielgruppe über Meta Ads. Zunächst emotional, daraufhin Erweiterung durch den „Neubauwelt-Guide"",
      "Das Neubau-Sales-Team hat nun volle Terminkalender, gibt uns stetig Rückmeldung und wir optimieren den Fahrplan weiter."
    ],
    nextProject: "biertisch"
  },
  scheurich: {
    title: "120% mehr organischen Traffic durch komplette Website-Optimierung",
    client: "Scheurich",
    industry: "Ceramic & Lifestyle Brand",
    logo: "/placeholder.svg",
    headerImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    deviceImage: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb",
    challenge: "Scheurich's website was outdated, not mobile-responsive, and had poor search engine visibility, limiting their digital presence.",
    solution: "Complete website redesign with SEO optimization, content strategy, and user experience improvements.",
    results: [
      "120% increase in organic traffic within 6 months of launch",
      "45% higher conversion rate from website visitors to leads",
      "Dramatic improvement in mobile user engagement with 60% more mobile users"
    ],
    nextProject: "cobus"
  },
  cobus: {
    title: "Lead generation improved by 80% with new website & conversion strategy",
    client: "COBUS",
    industry: "ERP & IT Solutions",
    logo: "/placeholder.svg",
    headerImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    deviceImage: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f",
    challenge: "COBUS wasn't effectively communicating their ERP solutions online, resulting in low lead generation despite high-quality products.",
    solution: "Strategic website redesign with clear messaging, industry-specific landing pages, and optimized conversion paths.",
    results: [
      "80% increase in qualified leads within the first quarter",
      "3x website traffic through targeted SEO and content marketing",
      "40% lower bounce rate with improved user experience and content relevance"
    ],
    nextProject: "weisenburger"
  },
  weisenburger: {
    title: "Seamless CRM integration & scalable web infrastructure",
    client: "Weisenburger",
    industry: "Construction & Real Estate",
    logo: "/placeholder.svg",
    headerImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    deviceImage: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6",
    challenge: "Weisenburger needed a robust digital ecosystem to manage their growing property development portfolio and improve customer engagement.",
    solution: "Custom website with integrated CRM, property management systems, and automated customer journey flows.",
    results: [
      "95% faster load times improving user experience and SEO performance",
      "60% increase in qualified property inquiries through optimized forms",
      "4.9/5 customer satisfaction rating due to improved digital communication"
    ],
    nextProject: "immowelt"
  },
  biertisch: {
    title: "Biertisch Plane: Product Innovation & Digital Marketing",
    client: "Biertisch Plane",
    industry: "Event & Hospitality",
    logo: "/placeholder.svg",
    headerImage: "public/lovable-uploads/425a5fbc-0d75-4d89-8066-ebd4ff45b2fc.png",
    deviceImage: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
    challenge: "Launching a new product category in a competitive market with no established online presence.",
    solution: "Comprehensive digital strategy including brand development, e-commerce website, and multi-channel marketing.",
    results: [
      "Successful product launch with 350% higher sales than projected",
      "Built an email list of 12,000 subscribers within the first year",
      "Established brand recognition in a niche market with 85% awareness among target audience"
    ],
    nextProject: "aok"
  },
  aok: {
    title: "Digital transformation strategy for healthcare provider",
    client: "AOK",
    industry: "Healthcare & Insurance",
    logo: "/placeholder.svg",
    headerImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    deviceImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    challenge: "AOK needed to modernize their digital services to meet evolving customer expectations and streamline internal processes.",
    solution: "End-to-end digital transformation including UX redesign, process automation, and digital service development.",
    results: [
      "35% reduction in processing time for insurance claims",
      "70% increase in digital channel adoption among members",
      "4.8/5 average user rating for the new digital services"
    ],
    nextProject: "scheurich"
  }
};

const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const caseStudy = id ? caseStudiesData[id as keyof typeof caseStudiesData] : null;

  if (!caseStudy) {
    return (
      <PageLayout>
        <div className="container mx-auto py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
          <p className="mb-8">The case study you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/case-studies">Back to Case Studies</Link>
          </Button>
        </div>
      </PageLayout>
    );
  }

  const nextStudy = caseStudiesData[caseStudy.nextProject as keyof typeof caseStudiesData];

  return (
    <PageLayout>
      {/* Back Button */}
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" className="group" asChild>
          <Link to="/case-studies">
            <ChevronLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Case Studies
          </Link>
        </Button>
      </div>
      
      {/* Hero Section */}
      <div className="w-full bg-brand-text text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="md:w-1/2 space-y-6">
              <div className="bg-white inline-block p-3 rounded-lg">
                <img 
                  src={caseStudy.logo} 
                  alt={`${caseStudy.client} logo`}
                  className="h-12 w-auto"
                />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold">{caseStudy.title}</h1>
              <p className="text-xl opacity-90">{caseStudy.client} • {caseStudy.industry}</p>
            </div>
            <div className="md:w-1/2">
              <img 
                src={caseStudy.headerImage}
                alt={caseStudy.title}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Challenge</h2>
              <p className="text-gray-700">{caseStudy.challenge}</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Solution</h2>
              <p className="text-gray-700">{caseStudy.solution}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Results</h2>
              <ul className="space-y-4">
                {caseStudy.results.map((result, index) => (
                  <li key={index} className="flex">
                    <CheckCircle className="text-green-600 h-6 w-6 flex-shrink-0 mr-3" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={caseStudy.deviceImage}
              alt="Device mockup"
              className="w-full h-auto rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-8 -right-8 bg-brand-backgroundAlt p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-4">
                <div className="text-5xl font-bold text-brand-primary">3x</div>
                <div className="text-lg">
                  <div>Return on</div>
                  <div>Investment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-brand-background to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">Ready for Similar Results?</h2>
            <p className="text-xl">
              Let's discuss how we can help your business achieve extraordinary growth through strategic digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://maps.app.goo.gl/AkPnsohm5MnBfXtf8" target="_blank" rel="noopener noreferrer">
                  Read Client Reviews
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Next Case Study */}
      <div className="container mx-auto px-4 py-16">
        <div className="border-t pt-16">
          <div className="text-center mb-8">
            <h3 className="text-xl text-gray-500">Next Case Study</h3>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img 
                  className="h-48 w-full object-cover md:w-48" 
                  src={nextStudy.headerImage} 
                  alt={nextStudy.title} 
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-brand-primary font-semibold">
                  {nextStudy.client} • {nextStudy.industry}
                </div>
                <h4 className="block mt-1 text-lg leading-tight font-medium text-black">
                  {nextStudy.title}
                </h4>
                <p className="mt-2 text-gray-500">
                  {nextStudy.challenge.substring(0, 100)}...
                </p>
                <Button variant="ghost" className="mt-4 group" asChild>
                  <Link to={`/case-studies/${caseStudy.nextProject}`}>
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CaseStudyDetail;
