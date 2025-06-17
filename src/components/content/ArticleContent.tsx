
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
          className="markdown-content leading-relaxed"
          dangerouslySetInnerHTML={{ 
            __html: article.content_md
              .split('\n')
              .map(line => {
                // Enhanced markdown parsing with ooliv brand colors
                line = line.replace(/^### (.+)$/gm, '<h3 class="text-xl font-semibold mt-10 mb-6 text-medico-darkGreen border-l-4 border-medico-turquoise pl-4">$1</h3>');
                line = line.replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold mt-12 mb-8 text-medico-darkGreen">$1</h2>');
                line = line.replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold mt-16 mb-10 text-medico-darkGreen">$1</h1>');
                line = line.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-medico-darkGreen">$1</strong>');
                line = line.replace(/\*(.+?)\*/g, '<em class="italic text-medico-darkGreen">$1</em>');
                line = line.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-medico-turquoise hover:text-medico-darkGreen underline decoration-medico-turquoise/40 hover:decoration-medico-darkGreen transition-colors font-medium" target="_blank" rel="noopener noreferrer">$1</a>');
                
                // Handle images - convert markdown images to HTML with proper styling
                line = line.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<figure class="my-10"><img src="$2" alt="$1" class="w-full max-w-4xl mx-auto rounded-lg shadow-lg border border-medico-turquoise/20" loading="lazy" /><figcaption class="text-center text-sm text-gray-600 mt-4 italic">$1</figcaption></figure>');
                
                // Handle lists with better styling
                if (line.match(/^- /)) {
                  return `<li class="mb-3 text-gray-700 leading-relaxed ml-4 marker:text-medico-turquoise">${line.replace(/^- /, '')}</li>`;
                }
                
                // Handle numbered lists
                if (line.match(/^\d+\. /)) {
                  return `<li class="mb-3 text-gray-700 leading-relaxed ml-4 marker:text-medico-turquoise marker:font-semibold">${line.replace(/^\d+\. /, '')}</li>`;
                }
                
                if (line.trim() === '') return '<div class="mb-6"></div>';
                if (!line.includes('<h') && !line.includes('<div>') && !line.includes('<li>') && !line.includes('<figure')) {
                  return `<p class="mb-6 text-gray-700 leading-relaxed text-lg">${line}</p>`;
                }
                return line;
              })
              .join('')
              // Wrap consecutive list items
              .replace(/(<li[^>]*>.*?<\/li>)(\s*<li[^>]*>.*?<\/li>)+/g, (match) => {
                return `<ul class="list-disc ml-6 mb-8 space-y-2">${match}</ul>`;
              })
          }}
        />
      </article>
    );
  } else if (article.content_html) {
    return (
      <article 
        className="prose prose-lg max-w-none article-content"
        dangerouslySetInnerHTML={{ __html: article.content_html }}
      />
    );
  } else {
    return (
      <div className="text-center py-12">
        <Paragraph color="muted" className="italic">
          Kein Inhalt verfügbar
        </Paragraph>
      </div>
    );
  }
};

export default ArticleContent;
