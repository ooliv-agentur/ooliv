
import React from 'react';
import { Paragraph } from '@/components/ui/typography';

interface ContentPost {
  id: number;
  title: string;
  meta_description: string | null;
  content_html: string | null;
  content_md: string | null;
  language_code: string | null;
  public_url: string | null;
  slug: string | null;
  created_at: string;
}

interface ArticleContentProps {
  article: ContentPost;
}

const ArticleContent = ({ article }: ArticleContentProps) => {
  if (article.content_md) {
    return (
      <article className="prose prose-lg max-w-none">
        <div 
          className="markdown-content leading-relaxed font-satoshi"
          dangerouslySetInnerHTML={{ 
            __html: article.content_md
              .split('\n')
              .map(line => {
                // Enhanced markdown parsing with ooliv brand colors and Satoshi font
                line = line.replace(/^### (.+)$/gm, '<h3 id="' + '$1'.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '" class="text-2xl md:text-3xl font-bold mt-16 mb-10 text-medico-darkGreen border-l-4 border-medico-turquoise pl-8 font-satoshi">$1</h3>');
                line = line.replace(/^## (.+)$/gm, '<h2 id="' + '$1'.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '" class="text-3xl md:text-4xl font-bold mt-20 mb-12 text-medico-darkGreen font-satoshi">$1</h2>');
                line = line.replace(/^# (.+)$/gm, '<h1 id="' + '$1'.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '" class="text-4xl md:text-5xl font-bold mt-24 mb-16 text-medico-darkGreen font-satoshi">$1</h1>');
                line = line.replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-medico-darkGreen font-satoshi">$1</strong>');
                line = line.replace(/\*(.+?)\*/g, '<em class="italic text-medico-darkGreen font-satoshi">$1</em>');
                
                // Handle anchor links - first process internal anchor links, then external links
                line = line.replace(/\[(.+?)\]\(#(.+?)\)/g, '<a href="#$2" class="text-medico-turquoise hover:text-medico-darkGreen underline decoration-medico-turquoise/40 hover:decoration-medico-darkGreen transition-colors font-semibold font-satoshi">$1</a>');
                
                // Handle links to other articles with anchors - convert to relative anchors only
                line = line.replace(/\[(.+?)\]\(https?:\/\/[^\/]+\/artikel\/[^\/]+#([^)]+)\)/g, '<a href="#$2" class="text-medico-turquoise hover:text-medico-darkGreen underline decoration-medico-turquoise/40 hover:decoration-medico-darkGreen transition-colors font-semibold font-satoshi">$1</a>');
                
                // Handle other external links
                line = line.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-medico-turquoise hover:text-medico-darkGreen underline decoration-medico-turquoise/40 hover:decoration-medico-darkGreen transition-colors font-semibold font-satoshi" target="_blank" rel="noopener noreferrer">$1</a>');
                
                // Handle images - convert markdown images to HTML with proper styling
                line = line.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<figure class="my-16"><img src="$2" alt="$1" class="w-full max-w-6xl mx-auto rounded-3xl shadow-xl" loading="lazy" /><figcaption class="text-center text-lg text-gray-600 mt-8 italic font-satoshi font-light">$1</figcaption></figure>');
                
                // Handle lists with better styling
                if (line.match(/^- /)) {
                  return `<li class="mb-6 text-medico-darkGreen leading-relaxed ml-8 marker:text-medico-turquoise font-satoshi text-lg font-light">${line.replace(/^- /, '')}</li>`;
                }
                
                // Handle numbered lists
                if (line.match(/^\d+\. /)) {
                  return `<li class="mb-6 text-medico-darkGreen leading-relaxed ml-8 marker:text-medico-turquoise marker:font-bold font-satoshi text-lg font-light">${line.replace(/^\d+\. /, '')}</li>`;
                }
                
                if (line.trim() === '') return '<div class="mb-10"></div>';
                if (!line.includes('<h') && !line.includes('<div>') && !line.includes('<li>') && !line.includes('<figure')) {
                  return `<p class="mb-10 text-medico-darkGreen leading-relaxed text-lg font-satoshi font-light">${line}</p>`;
                }
                return line;
              })
              .join('')
              // Wrap consecutive list items
              .replace(/(<li[^>]*>.*?<\/li>)(\s*<li[^>]*>.*?<\/li>)+/g, (match) => {
                return `<ul class="list-disc ml-12 mb-16 space-y-4 font-satoshi">${match}</ul>`;
              })
          }}
        />
      </article>
    );
  } else if (article.content_html) {
    return (
      <article 
        className="prose prose-lg max-w-none article-content font-satoshi"
        dangerouslySetInnerHTML={{ __html: article.content_html }}
      />
    );
  } else {
    return (
      <div className="text-center py-20">
        <Paragraph color="muted" className="italic font-satoshi text-xl font-light">
          Kein Inhalt verfügbar
        </Paragraph>
      </div>
    );
  }
};

export default ArticleContent;
