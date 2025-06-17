
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
      <div className="prose prose-lg max-w-none">
        <div 
          className="markdown-content leading-relaxed"
          dangerouslySetInnerHTML={{ 
            __html: article.content_md
              .split('\n')
              .map(line => {
                // Enhanced markdown parsing with brand colors
                line = line.replace(/^### (.+)$/gm, '<h3 class="text-xl font-semibold mt-8 mb-4 text-medico-darkGreen border-l-4 border-medico-turquoise pl-4">$1</h3>');
                line = line.replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold mt-10 mb-6 text-medico-darkGreen">$1</h2>');
                line = line.replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold mt-12 mb-8 text-medico-darkGreen">$1</h1>');
                line = line.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-medico-darkGreen">$1</strong>');
                line = line.replace(/\*(.+?)\*/g, '<em class="italic text-medico-darkGreen">$1</em>');
                line = line.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-medico-turquoise hover:text-medico-darkGreen underline decoration-medico-turquoise/30 hover:decoration-medico-darkGreen transition-colors font-medium" target="_blank" rel="noopener noreferrer">$1</a>');
                
                // Handle images - convert markdown images to HTML with proper styling
                line = line.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="w-full max-w-2xl mx-auto my-8 rounded-lg shadow-md border border-medico-turquoise/20" loading="lazy" />');
                
                // Handle lists
                if (line.match(/^- /)) {
                  return `<li class="mb-2 text-gray-700 leading-relaxed ml-4">${line.replace(/^- /, '')}</li>`;
                }
                
                if (line.trim() === '') return '<br class="mb-4">';
                if (!line.includes('<h') && !line.includes('<br>') && !line.includes('<li>') && !line.includes('<img')) {
                  return `<p class="mb-6 text-gray-700 leading-relaxed text-lg">${line}</p>`;
                }
                return line;
              })
              .join('')
          }}
        />
      </div>
    );
  } else if (article.content_html) {
    return (
      <div 
        className="prose prose-lg max-w-none article-content"
        dangerouslySetInnerHTML={{ __html: article.content_html }}
      />
    );
  } else {
    return (
      <Paragraph color="muted" className="italic text-center py-8">
        Kein Inhalt verfügbar
      </Paragraph>
    );
  }
};

export default ArticleContent;
