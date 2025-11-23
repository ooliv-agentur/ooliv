import React from 'react';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { H3, LargeParagraph, Caption } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

interface BudgetSectionProps {
  title: string;
  description: string | React.ReactNode;
  badge?: string;
  className?: string;
}

const BudgetSection = ({
  title,
  description,
  badge,
  className
}: BudgetSectionProps) => {
  return (
    <Section spacing="medium">
      <Container size="narrow">
        <div className={cn("bg-primary/10 p-8 rounded-lg text-center", className)}>
          <H3 className="mb-4" alignment="center">
            {title}
          </H3>
          
          <LargeParagraph className="mb-4" alignment="center" color="secondary">
            {description}
          </LargeParagraph>
          
          {badge && (
            <div className="inline-block bg-background px-4 py-2 rounded-full text-sm font-semibold text-primary border-2 border-primary">
              {badge}
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};

export default BudgetSection;
