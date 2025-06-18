import React from 'react';
import { marked } from 'marked';
import TOCBlock from './TOCBlock';
import { preprocessMarkdown, generateAnchor } from '@/utils/anchorUtils';
import { extractTOCFromMarkdown } from './TOCExtractor';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  // Preprocess markdown to clean up formatting issues
  const processedMarkdown = preprocessMarkdown(content);
  
  // Extract TOC items using marked.lexer for clean parsing
  const tocItems = extractTOCFromMarkdown(processedMarkdown);

  // Configure marked with custom renderer
  const renderer = new marked.Renderer();
  
  // Enhanced heading renderer with consistent ID generation
  renderer.heading = function({ tokens, depth }) {
    const text = this.parser.parseInline(tokens);
    const id = generateAnchor(text);
    console.log(`Rendering heading: "${text}" -> id: "${id}" (depth: ${depth})`);
      
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
  
  // Fixed listitem renderer with proper error handling
  renderer.listitem = function({ text, task, checked, tokens }) {
    let parsedText = text;
    
    // Skip if this is the "Inhaltsverzeichnis" title itself
    if (text && (text.trim() === 'Inhaltsverzeichnis' || text.trim() === 'Inhalt' || text.trim() === 'Table of Contents')) {
      return '';
    }
    
    // Safe token parsing with proper fallback
    try {
      if (tokens && Array.isArray(tokens) && tokens.length > 0) {
        // Validate tokens before parsing
        const validTokens = tokens.filter(token => token && typeof token === 'object' && token.type);
        if (validTokens.length > 0) {
          parsedText = this.parser.parseInline(validTokens);
        } else {
          // Fallback: manually parse markdown links in text
          parsedText = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, linkText, href) => {
            if (href.startsWith('#')) {
              return `<a href="${href}" class="text-medico-turquoise hover:text-medico-darkGreen underline decoration-medico-turquoise/40 hover:decoration-medico-darkGreen transition-colors font-semibold font-satoshi">${linkText}</a>`;
            }
            return `<a href="${href}" class="text-medico-turquoise hover:text-medico-darkGreen underline decoration-medico-turquoise/40 hover:decoration-medico-darkGreen transition-colors font-semibold font-satoshi">${linkText}</a>`;
          });
        }
      } else {
        // Direct fallback to text with manual markdown parsing
        parsedText = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, linkText, href) => {
          if (href.startsWith('#')) {
            return `<a href="${href}" class="text-medico-turquoise hover:text-medico-darkGreen underline decoration-medico-turquoise/40 hover:decoration-medico-darkGreen transition-colors font-semibold font-satoshi">${linkText}</a>`;
          }
          return `<a href="${href}" class="text-medico-turquoise hover:text-medico-darkGreen underline decoration-medico-turquoise/40 hover:decoration-medico-darkGreen transition-colors font-semibold font-satoshi">${linkText}</a>`;
        });
      }
    } catch (error) {
      console.warn('Token parsing failed, using fallback text processing:', error);
      // Safe fallback: use original text with manual markdown link parsing
      parsedText = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, linkText, href) => {
        if (href.startsWith('#')) {
          return `<a href="${href}" class="text-medico-turquoise hover:text-medico-darkGreen underline decoration-medico-turquoise/40 hover:decoration-medico-darkGreen transition-colors font-semibold font-satoshi">${linkText}</a>`;
        }
        return `<a href="${href}" class="text-medico-turquoise hover:text-medico-darkGreen underline decoration-medico-turquoise/40 hover:decoration-medico-darkGreen transition-colors font-semibold font-satoshi">${linkText}</a>`;
      });
    }
    
    // Return empty string if this was a skipped item
    if (!parsedText || parsedText.trim() === '') {
      return '';
    }
    
    if (task) {
      const checkedAttr = checked ? 'checked' : '';
      return `<li class="mb-4 text-medico-darkGreen leading-relaxed relative pl-8 font-satoshi text-lg font-light"><input type="checkbox" ${checkedAttr} disabled class="absolute left-0 top-2 accent-medico-turquoise"> ${parsedText}</li>`;
    }
    
    // Check if this list item contains anchor links (TOC items)
    if (parsedText.includes('href="#')) {
      return '';
    }
    
    return `<li class="mb-4 text-medico-darkGreen leading-relaxed relative pl-8 font-satoshi text-lg font-light before:content-['•'] before:absolute before:left-0 before:text-medico-turquoise before:font-bold before:text-xl">${parsedText}</li>`;
  };
  
  // Enhanced list styling
  renderer.list = function(token) {
    const type = token.ordered ? 'ol' : 'ul';
    
    const items = token.items.map(item => {
      return this.listitem(item);
    }).join('').replace(/\n\s*\n/g, '\n');
    
    // Remove empty items
    const cleanedItems = items.replace(/<li[^>]*>\s*<\/li>/g, '').trim();
    
    // Check if this was a TOC list (all items were removed)
    if (!cleanedItems || cleanedItems.length === 0) {
      return '';
    }
    
    const listClass = token.ordered ? 'list-none' : 'list-none';
    return `<${type} class="${listClass} mb-12 space-y-2 font-satoshi">${cleanedItems}</${type}>`;
  };
  
  // Custom table renderer with ooliv styling
  renderer.table = function({ header, rows }) {
    const headerCells = header.map(cell => {
      const text = this.parser.parseInline(cell.tokens);
      return `<th class="px-6 py-4 text-left text-medico-darkGreen font-bold font-satoshi bg-medico-mint/20 border-b-2 border-medico-turquoise">${text}</th>`;
    }).join('');
    
    const bodyRows = rows.map(row => {
      const cells = row.map(cell => {
        const text = this.parser.parseInline(cell.tokens);
        return `<td class="px-6 py-4 text-medico-darkGreen font-satoshi font-light border-b border-medico-turquoise/20">${text}</td>`;
      }).join('');
      return `<tr class="hover:bg-medico-mint/10 transition-colors duration-200">${cells}</tr>`;
    }).join('');
    
    return `<div class="my-12 overflow-x-auto rounded-xl border border-medico-turquoise/20 shadow-lg">
      <table class="w-full min-w-full bg-white">
        <thead>
          <tr>${headerCells}</tr>
        </thead>
        <tbody>
          ${bodyRows}
        </tbody>
      </table>
    </div>`;
  };
  
  // Custom blockquote renderer
  renderer.blockquote = function({ tokens }) {
    const text = this.parser.parseInline(tokens);
    return `<blockquote class="border-l-4 border-medico-turquoise pl-8 my-12 italic text-medico-darkGreen bg-medico-mint/10 rounded-r-xl py-6 text-xl font-satoshi font-light leading-relaxed">${text}</blockquote>`;
  };
  
  // Custom code block renderer
  renderer.code = function({ text, lang }) {
    const language = lang ? ` language-${lang}` : '';
    return `<div class="my-12 rounded-xl overflow-hidden border border-medico-turquoise/20 shadow-lg">
      <pre class="bg-medico-darkGreen text-medico-mint p-6 overflow-x-auto font-mono text-sm leading-relaxed"><code class="${language}">${text}</code></pre>
    </div>`;
  };
  
  // Custom inline code renderer
  renderer.codespan = function({ text }) {
    return `<code class="bg-medico-mint/30 text-medico-darkGreen px-2 py-1 rounded font-mono text-sm font-medium">${text}</code>`;
  };
  
  // Enhanced link renderer with smooth scrolling for anchors
  renderer.link = function({ href, title, tokens }) {
    const text = this.parser.parseInline(tokens);
    
    // Handle anchor links with smooth scrolling
    if (href && href.startsWith('#')) {
      const anchor = href.substring(1);
      return `<a href="#${anchor}" class="text-medico-turquoise hover:text-medico-darkGreen underline decoration-medico-turquoise/40 hover:decoration-medico-darkGreen transition-colors font-semibold font-satoshi toc-link" onclick="document.getElementById('${anchor}')?.scrollIntoView({behavior: 'smooth'}); return false;">${text}</a>`;
    }
    
    // Handle anchor links - convert full URLs with anchors to relative anchors
    if (href && href.includes('#')) {
      const anchorMatch = href.match(/#(.+)$/);
      if (anchorMatch && (href.includes('/artikel/') || href.startsWith('#'))) {
        const anchor = anchorMatch[1];
        return `<a href="#${anchor}" class="text-medico-turquoise hover:text-medico-darkGreen underline decoration-medico-turquoise/40 hover:decoration-medico-darkGreen transition-colors font-semibold font-satoshi" onclick="document.getElementById('${anchor}')?.scrollIntoView({behavior: 'smooth'}); return false;">${text}</a>`;
      }
    }
    
    // External links
    const target = href?.startsWith('http') ? ' target="_blank" rel="noopener noreferrer"' : '';
    const titleAttr = title ? ` title="${title}"` : '';
    return `<a href="${href}"${titleAttr} class="text-medico-turquoise hover:text-medico-darkGreen underline decoration-medico-turquoise/40 hover:decoration-medico-darkGreen transition-colors font-semibold font-satoshi"${target}>${text}</a>`;
  };
  
  // Custom image renderer - NO CAPTIONS for German articles
  renderer.image = function({ href, title, text }) {
    const titleAttr = title ? ` title="${title}"` : '';
    return `<figure class="my-16"><img src="${href}" alt="${text}"${titleAttr} class="w-full max-w-6xl mx-auto rounded-3xl shadow-xl" loading="lazy" /></figure>`;
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
  
  // Custom horizontal rule renderer
  renderer.hr = function() {
    return `<hr class="my-16 border-0 h-px bg-gradient-to-r from-transparent via-medico-turquoise to-transparent" />`;
  };
  
  // Configure marked options
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    breaks: true
  });
  
  // Convert markdown to HTML
  const htmlContent = marked.parse(processedMarkdown) as string;
  
  // Split content at "Inhaltsverzeichnis" to insert TOC in correct position
  const inhaltsverzeichnisRegex = /<h2[^>]*id="inhaltsverzeichnis"[^>]*>.*?<\/h2>/i;
  const match = htmlContent.match(inhaltsverzeichnisRegex);
  
  if (match && tocItems.length > 0) {
    const beforeTOC = htmlContent.substring(0, match.index! + match[0].length);
    const afterTOC = htmlContent.substring(match.index! + match[0].length);
    
    return (
      <article className="prose prose-lg max-w-none">
        <div 
          className="markdown-content leading-relaxed font-satoshi"
          dangerouslySetInnerHTML={{ __html: beforeTOC }}
        />
        <TOCBlock items={tocItems} />
        <div 
          className="markdown-content leading-relaxed font-satoshi"
          dangerouslySetInnerHTML={{ __html: afterTOC }}
        />
      </article>
    );
  }
  
  return (
    <article className="prose prose-lg max-w-none">
      {tocItems.length > 0 && <TOCBlock items={tocItems} />}
      <div 
        className="markdown-content leading-relaxed font-satoshi"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </article>
  );
};

export default MarkdownRenderer;
