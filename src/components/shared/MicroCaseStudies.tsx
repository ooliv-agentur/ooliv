import React from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { H2, H3, Paragraph } from '@/components/ui/typography';
import { ExternalLink } from 'lucide-react';
import { getMicroCases } from '@/data/microCasesData';
import { cn } from '@/lib/utils';

interface MicroCaseStudiesProps {
  cases: string[];
  title?: string;
  showTitle?: boolean;
  className?: string;
}

export const MicroCaseStudies: React.FC<MicroCaseStudiesProps> = ({
  cases,
  title = 'Ausgewählte Projekte',
  showTitle = true,
  className
}) => {
  const selectedCases = getMicroCases(cases);

  if (selectedCases.length === 0) {
    return null;
  }

  return (
    <Section background="white" spacing="large" className={className}>
      <Container>
        {showTitle && (
          <div className="text-center mb-12 md:mb-16">
            <H2 color="primary" alignment="center">
              {title}
            </H2>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {selectedCases.map((caseStudy) => (
            <div
              key={caseStudy.id}
              className={cn(
                "bg-white rounded-2xl border border-[#E5E8E8]",
                "p-4 sm:p-6 lg:p-8",
                "hover:shadow-lg transition-all duration-300",
                "flex flex-col"
              )}
            >
              {/* Logo */}
              <div className="mb-6 h-12 flex items-center">
                <img
                  src={caseStudy.logoPath}
                  alt={`${caseStudy.clientName} Logo`}
                  className="max-h-12 w-auto object-contain"
                  loading="lazy"
                />
              </div>

              {/* Industry Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-[#F5F7F7] text-[#555555] text-sm rounded-full">
                  {caseStudy.industry}
                </span>
              </div>

              {/* Result - Large Turquoise Number */}
              <div className="mb-4">
                <div className="text-3xl sm:text-4xl font-bold text-[#32b2ab]">
                  {caseStudy.result}
                </div>
              </div>

              {/* Description - Max 14 words */}
              <Paragraph color="secondary" className="mb-6 flex-grow">
                {caseStudy.description}
              </Paragraph>

              {/* Link to Website */}
              <a
                href={caseStudy.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-2",
                  "text-[#32b2ab] hover:text-[#289690]",
                  "font-medium transition-colors duration-200",
                  "group"
                )}
              >
                <span>Zur Website</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
