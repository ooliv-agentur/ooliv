
import React from 'react';
import { GraduationCap, Code, Zap, BarChart, Palette, Globe } from 'lucide-react';

const UliEducationSkills = () => {
  const toolCategories = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "LLMs & AI",
      tools: ["ChatGPT (Advanced)", "Claude", "Perplexity", "Midjourney", "RunwayML", "Sora", "Make/Zapier"]
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Web/UX",
      tools: ["Figma", "LOVABLE (Expert)", "Adobe Suite", "Wireframing Tools"]
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Marketing/Data",
      tools: ["Ahrefs", "Google Analytics", "Google Search Console", "SEO Tools"]
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Sales/Outreach",
      tools: ["Apollo.io", "LinkedIn Automation", "CRM Systems"]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Education Section */}
          <div>
            <div className="flex items-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mr-4">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Ausbildung
              </h2>
            </div>

            <div className="bg-card rounded-2xl border border-border p-8 mb-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Palette className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    Diploma (BA equivalent)
                  </h3>
                  <p className="text-primary font-semibold mb-2">
                    Design, Media & Communication
                  </p>
                  <p className="text-muted-foreground">
                    Kölner Design Akademie (KDA)
                  </p>
                </div>
              </div>
              
              <div className="border-t border-border pt-4 mt-4">
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                  Fokus
                </h4>
                <ul className="space-y-2">
                  {[
                    "UX Principles & User-Centered Design",
                    "Information Architecture",
                    "Digital Communication Strategies",
                    "Visual Design & Brand Identity"
                  ].map((focus, idx) => (
                    <li 
                      key={idx}
                      className="flex items-start text-muted-foreground text-sm"
                    >
                      <span className="text-primary mr-2">•</span>
                      {focus}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-muted/30 rounded-xl p-6 border border-border">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                Zusätzliche Qualifikationen
              </h4>
              <ul className="space-y-2">
                {[
                  "16+ Jahre praktische Erfahrung in Digital Strategy",
                  "Self-taught: AI/ML Strategy & LLM Integration",
                  "Self-taught: Product Management & UX Strategy",
                  "Kontinuierliche Weiterbildung in AI-Tools & Technologies"
                ].map((qual, idx) => (
                  <li 
                    key={idx}
                    className="flex items-start text-muted-foreground text-sm"
                  >
                    <span className="text-primary mr-2">✓</span>
                    {qual}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tools & Technologies Section */}
          <div>
            <div className="flex items-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mr-4">
                <Code className="h-6 w-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Tools & Technologies
              </h2>
            </div>

            <div className="space-y-6">
              {toolCategories.map((category, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary mr-3">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool, idx) => (
                      <span 
                        key={idx}
                        className="inline-flex items-center px-3 py-1.5 bg-muted rounded-full text-sm text-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              <div className="bg-muted/30 rounded-xl p-6 border border-border">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">50+ AI Tools</strong> getestet und in Workflows integriert für Productivity, Automation, Prototyping und strategische AI-Integration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UliEducationSkills;
