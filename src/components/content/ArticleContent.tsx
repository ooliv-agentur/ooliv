
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
                line = line.replace(/^### (.+)$/gm, '<h3 class="text-2xl font-bold mt-12 mb-8 text-medico-darkGreen border-l-4 border-medico-turquoise pl-6 font-satoshi">$1</h3>');
                line = line.replace(/^## (.+)$/gm, '<h2 class="text-3xl font-bold mt-16 mb-10 text-medico-darkGreen font-satoshi">$1</h2>');
                line = line.replace(/^# (.+)$/gm, '<h1 class="text-4xl font-bold mt-20 mb-12 text-medico-darkGreen font-satoshi">$1</h1>');
                line = line.replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-medico-darkGreen font-satoshi">$1</strong>');
                line = line.replace(/\*(.+?)\*/g, '<em class="italic text-medico-darkGreen font-satoshi">$1</em>');
                line = line.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-medico-turquoise hover:text-medico-darkGreen underline decoration-medico-turquoise/40 hover:decoration-medico-darkGreen transition-colors font-semibold font-satoshi" target="_blank" rel="noopener noreferrer">$1</a>');
                
                // Handle images - convert markdown images to HTML with proper styling
                line = line.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<figure class="my-12"><img src="$2" alt="$1" class="w-full max-w-5xl mx-auto rounded-2xl shadow-xl border border-medico-turquoise/20" loading="lazy" /><figcaption class="text-center text-base text-gray-600 mt-6 italic font-satoshi">$1</figcaption></figure>');
                
                // Handle lists with better styling
                if (line.match(/^- /)) {
                  return `<li class="mb-4 text-gray-700 leading-relaxed ml-6 marker:text-medico-turquoise font-satoshi text-lg">${line.replace(/^- /, '')}</li>`;
                }
                
                // Handle numbered lists
                if (line.match(/^\d+\. /)) {
                  return `<li class="mb-4 text-gray-700 leading-relaxed ml-6 marker:text-medico-turquoise marker:font-bold font-satoshi text-lg">${line.replace(/^\d+\. /, '')}</li>`;
                }
                
                if (line.trim() === '') return '<div class="mb-8"></div>';
                if (!line.includes('<h') && !line.includes('<div>') && !line.includes('<li>') && !line.includes('<figure')) {
                  return `<p class="mb-8 text-gray-700 leading-relaxed text-lg font-satoshi">${line}</p>`;
                }
                return line;
              })
              .join('')
              // Wrap consecutive list items
              .replace(/(<li[^>]*>.*?<\/li>)(\s*<li[^>]*>.*?<\/li>)+/g, (match) => {
                return `<ul class="list-disc ml-8 mb-10 space-y-3 font-satoshi">${match}</ul>`;
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
      <div className="text-center py-16">
        <Paragraph color="muted" className="italic font-satoshi text-lg">
          Kein Inhalt verfügbar
        </Paragraph>
      </div>
    );
  }
};

export default ArticleContent;
