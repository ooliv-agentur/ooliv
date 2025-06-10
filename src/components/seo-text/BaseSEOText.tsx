
import React from 'react';
import { seoTextStyles } from '@/styles/seo-text-styles';

interface BaseSEOTextProps {
  children: React.ReactNode;
}

const BaseSEOText = ({ children }: BaseSEOTextProps) => {
  return (
    <section className={`${seoTextStyles.containerBackground} ${seoTextStyles.container}`}>
      <div className={seoTextStyles.innerContainer}>
        <article 
          className={seoTextStyles.articleWrapper} 
          style={{ color: '#FFFFFF' }}
        >
          {children}
        </article>
      </div>
    </section>
  );
};

export default BaseSEOText;
