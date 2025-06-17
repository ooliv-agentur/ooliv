
import React from 'react';
import { Paragraph } from '@/components/ui/typography';
import { marked } from 'marked';

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
    // Configure marked with custom renderer for ooliv styling
    const renderer = new marked.Renderer();
    
    // Custom heading renderer with ooliv styling and IDs
    renderer.heading = function({ tokens, depth }) {
      const text = this.parser.parseInline(tokens);
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const baseClasses = "font-satoshi text-medico-darkGreen font-bold";
      
      switch(depth) {
        case 1:
          return `<h1 id="${id}" class="${baseClasses} text-4xl md:text-5xl mt-24 mb-16">${text}</h1>`;
        case 2:
          return `<h2 id="${id}" class="${baseClasses} text-3xl md:text-4xl mt-20 mb-12">${text}</h2>`;
        case 3:
          return `<h3 id="${id}" class="${baseClasses} text-2xl md:text-3xl mt-16 mb-10 border-l-4 border-medico-turquoise pl-8">${text}</h3>`;
        case 4:
          return `<h4 id="${id}" class="${baseClasses} text-xl md:text-2xl mt-12 mb-8">${text}</h4>`;
        case 5:
          return `<h5 id="${id}" class="${baseClasses} text-lg md:text-xl mt-10 mb-6">${text}</h5>`;
        case 6:
          return `<h6 id="${id}" class="${baseClasses} text-base md:text-lg mt-8 mb-4">${text}</h6>`;
        default:
          return `<h${depth} id="${id}" class="${baseClasses}">${text}</h${depth}>`;
      }
    };
    
    // Custom paragraph renderer
    renderer.paragraph = function({ tokens }) {
      const text = this.parser.parseInline(tokens);
      return `<p class="mb-10 text-medico-darkGreen leading-relaxed text-lg font-satoshi font-light">${text}</p>`;
    };
    
    // Custom listitem renderer to style individual list items
    renderer.listitem = function({ text, task, checked }) {
      if (task) {
        const checkedAttr = checked ? 'checked' : '';
        return `<li class="mb-6 text-medico-darkGreen leading-relaxed ml-8 marker:text-medico-turquoise font-satoshi text-lg font-light"><input type="checkbox" ${checkedAttr} disabled> ${text}</li>`;
      }
      return `<li class="mb-6 text-medico-darkGreen leading-relaxed ml-8 marker:text-medico-turquoise font-satoshi text-lg font-light">${text}</li>`;
    };
    
    // Override list styling without custom parsing - let marked handle the parsing
    renderer.list = function(token) {
      const type = token.ordered ? 'ol' : 'ul';
      const listClass = token.ordered ? 'list-decimal' : 'list-disc';
      
      // Use the default parsing but apply our custom classes
      const originalList = marked.Renderer.prototype.list.call(this, token);
      
      // Replace the default class with our custom styling
      return originalList.replace(
        `<${type}>`,
        `<${type} class="${listClass} ml-12 mb-16 space-y-4 font-satoshi">`
      );
    };
    
    // Custom link renderer with ooliv styling
    renderer.link = function({ href, title, tokens }) {
      const text = this.parser.parseInline(tokens);
      
      // Handle anchor links - convert full URLs with anchors to relative anchors
      if (href && href.includes('#')) {
        const anchorMatch = href.match(/#(.+)$/);
        if (anchorMatch && (href.includes('/artikel/') || href.startsWith('#'))) {
          const anchor = anchorMatch[1];
          return `<a href="#${anchor}" class="text-medico-turquoise hover:text-medico-darkGreen underline decoration-medico-turquoise/40 hover:decoration-medico-darkGreen transition-colors font-semibold font-satoshi">${text}</a>`;
        }
      }
      
      // External links
      const target = href?.startsWith('http') ? ' target="_blank" rel="noopener noreferrer"' : '';
      const titleAttr = title ? ` title="${title}"` : '';
      return `<a href="${href}"${titleAttr} class="text-medico-turquoise hover:text-medico-darkGreen underline decoration-medico-turquoise/40 hover:decoration-medico-darkGreen transition-colors font-semibold font-satoshi"${target}>${text}</a>`;
    };
    
    // Custom image renderer
    renderer.image = function({ href, title, text }) {
      const titleAttr = title ? ` title="${title}"` : '';
      const caption = text || title || '';
      return `<figure class="my-16"><img src="${href}" alt="${text}"${titleAttr} class="w-full max-w-6xl mx-auto rounded-3xl shadow-xl" loading="lazy" />${caption ? `<figcaption class="text-center text-lg text-gray-600 mt-8 italic font-satoshi font-light">${caption}</figcaption>` : ''}</figure>`;
    };
    
    // Custom strong renderer
    renderer.strong = function({ tokens }) {
      const text = this.parser.parseInline(tokens);
      return `<strong class="font-bold text-medico-darkGreen font-satoshi">${text}</strong>`;
    };
    
    // Custom em renderer
    renderer.em = function({ tokens }) {
      const text = this.parser.parseInline(tokens);
      return `<em class="italic text-medico-darkGreen font-satoshi">${text}</em>`;
    };
    
    // Configure marked options
    marked.setOptions({
      renderer: renderer,
      gfm: true,
      breaks: true
    });
    
    const htmlContent = marked(article.content_md);
    
    return (
      <article className="prose prose-lg max-w-none">
        <div 
          className="markdown-content leading-relaxed font-satoshi"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
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
