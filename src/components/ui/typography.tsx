
import React from 'react';
import { cn } from '@/lib/utils';
import { 
  typographyStyles, 
  getHeadingClasses, 
  getBodyClasses,
  type HeadingLevel,
  type BodySize,
  type TextColor,
  type TextAlignment
} from '@/styles/typography';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  color?: TextColor;
  alignment?: TextAlignment;
}

interface HeadingProps extends TypographyProps {
  level: HeadingLevel;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

interface BodyProps extends TypographyProps {
  size: BodySize;
  as?: 'p' | 'span' | 'div';
}

// Heading component with consistent styling
export const Heading: React.FC<HeadingProps> = ({ 
  level, 
  as, 
  children, 
  className, 
  color = 'primary', 
  alignment = 'left' 
}) => {
  const Component = as || level;
  const classes = getHeadingClasses(level, color, alignment);
  
  return (
    <Component className={cn(classes, className)}>
      {children}
    </Component>
  );
};

// Body text component with consistent styling
export const Body: React.FC<BodyProps> = ({ 
  size, 
  as = 'p', 
  children, 
  className, 
  color = 'primary', 
  alignment = 'left' 
}) => {
  const Component = as;
  const classes = getBodyClasses(size, color, alignment);
  
  return (
    <Component className={cn(classes, className)}>
      {children}
    </Component>
  );
};

// Shorthand components for common use cases
export const H1: React.FC<Omit<HeadingProps, 'level'>> = (props) => (
  <Heading level="h1" as="h1" {...props} />
);

export const H2: React.FC<Omit<HeadingProps, 'level'>> = (props) => (
  <Heading level="h2" as="h2" {...props} />
);

export const H3: React.FC<Omit<HeadingProps, 'level'>> = (props) => (
  <Heading level="h3" as="h3" {...props} />
);

export const H4: React.FC<Omit<HeadingProps, 'level'>> = (props) => (
  <Heading level="h4" as="h4" {...props} />
);

export const H5: React.FC<Omit<HeadingProps, 'level'>> = (props) => (
  <Heading level="h5" as="h5" {...props} />
);

export const H6: React.FC<Omit<HeadingProps, 'level'>> = (props) => (
  <Heading level="h6" as="h6" {...props} />
);

export const Paragraph: React.FC<Omit<BodyProps, 'size'>> = (props) => (
  <Body size="base" as="p" {...props} />
);

export const LargeParagraph: React.FC<Omit<BodyProps, 'size'>> = (props) => (
  <Body size="large" as="p" {...props} />
);

export const SmallText: React.FC<Omit<BodyProps, 'size'>> = (props) => (
  <Body size="small" as="span" {...props} />
);

export const Caption: React.FC<Omit<BodyProps, 'size'>> = (props) => (
  <Body size="caption" as="span" {...props} />
);
