
import React from 'react';
import ReactMarkdown from 'react-markdown';
import TOCBlock from './TOCBlock';
import { generateAnchor } from '../../../utils/anchorUtils';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  // Remove the first H1 from markdown content since it's already handled by ArticleHeader
  let processedMarkdown = content;
  
  const firstH1Match = processedMarkdown.match(/^#\s+[^\n]*\n*/);
  if (firstH1Match) {
    processedMarkdown = processedMarkdown.replace(firstH1Match[0], '');
  }
  
  // Extract TOC items from markdown - only H3 and H4
  const extractTOCItems = (markdown: string) => {
    const headingRegex = /^(#{3,4})\s+(.+)$/gm;
    const tocItems: Array<{text: string, anchor: string, level: number}> = [];
    let match;
    
    while ((match = headingRegex.exec(markdown)) !== null) {
      const level = match[1].length;
      const text = match[2].trim();
      
      // Skip "Inhaltsverzeichnis" heading from TOC
      if (text.toLowerCase() === 'inhaltsverzeichnis' || text.toLowerCase() === 'inhalt' || text.toLowerCase() === 'table of contents') {
        continue;
      }
      
      const anchor = generateAnchor(text);
      console.log(`[TOC] Extracted item: "${text}" -> anchor: "${anchor}" (level: ${level})`);
      tocItems.push({ text, anchor, level });
    }
    
    console.log('[TOC] All extracted items:', tocItems);
    return tocItems;
  };

  const tocItems = extractTOCItems(processedMarkdown);

  // Remove TOC content from markdown after "## Inhaltsverzeichnis" until next H2 or end
  const removeTOCContent = (markdown: string): string => {
    console.log('[Markdown] Before TOC cleanup:', markdown.substring(0, 500) + '...');
    
    // Match "## Inhaltsverzeichnis" and everything until the next ## heading or end of content
    const tocContentRegex = /^##\s+Inhaltsverzeichnis\s*\n([\s\S]*?)(?=\n##|\n#(?!#)|$)/m;
    const cleanedMarkdown = markdown.replace(tocContentRegex, '## Inhaltsverzeichnis\n');
    
    console.log('[Markdown] After TOC cleanup:', cleanedMarkdown.substring(0, 500) + '...');
    return cleanedMarkdown;
  };

  processedMarkdown = removeTOCContent(processedMarkdown);

  // Custom components for react-markdown
  const components = {
    // Custom heading renderer with consistent anchor generation
    h1: ({ children, ...props }: any) => {
      const text = typeof children === 'string' ? children : children?.toString() || '';
      const id = generateAnchor(text);
      console.log(`H1 Heading: "${text}" -> id: "${id}"`);
      return (
        <h1 
          id={id} 
          className="font-satoshi text-medico-darkGreen font-bold text-4xl md:text-5xl mt-24 mb-16"
          {...props}
        >
          {children}
        </h1>
      );
    },
    
    h2: ({ children, ...props }: any) => {
      const text = typeof children === 'string' ? children : children?.toString() || '';
      const id = generateAnchor(text);
      console.log(`H2 Heading: "${text}" -> id: "${id}"`);
      return (
        <h2 
          id={id} 
          className="font-satoshi text-medico-darkGreen font-bold text-3xl md:text-4xl mt-20 mb-12"
          {...props}
        >
          {children}
        </h2>
      );
    },
    
    h3: ({ children, ...props }: any) => {
      const text = typeof children === 'string' ? children : children?.toString() || '';
      const id = generateAnchor(text);
      console.log(`H3 Heading: "${text}" -> id: "${id}"`);
      return (
        <h3 
          id={id} 
          className="font-satoshi text-medico-darkGreen font-bold text-2xl md:text-3xl mt-16 mb-10 border-l-4 border-medico-turquoise pl-8"
          {...props}
        >
          {children}
        </h3>
      );
    },
    
    h4: ({ children, ...props }: any) => {
      const text = typeof children === 'string' ? children : children?.toString() || '';
      const id = generateAnchor(text);
      console.log(`H4 Heading: "${text}" -> id: "${id}"`);
      return (
        <h4 
          id={id} 
          className="font-satoshi text-medico-darkGreen font-bold text-xl md:text-2xl mt-12 mb-8"
          {...props}
        >
          {children}
        </h4>
      );
    },
    
    h5: ({ children, ...props }: any) => {
      const text = typeof children === 'string' ? children : children?.toString() || '';
      const id = generateAnchor(text);
      return (
        <h5 
          id={id} 
          className="font-satoshi text-medico-darkGreen font-bold text-lg md:text-xl mt-10 mb-6"
          {...props}
        >
          {children}
        </h5>
      );
    },
    
    h6: ({ children, ...props }: any) => {
      const text = typeof children === 'string' ? children : children?.toString() || '';
      const id = generateAnchor(text);
      return (
        <h6 
          id={id} 
          className="font-satoshi text-medico-darkGreen font-bold text-base md:text-lg mt-8 mb-4"
          {...props}
        >
          {children}
        </h6>
      );
    },
    
    // Custom paragraph renderer
    p: ({ children, ...props }: any) => (
      <p className="mb-10 text-medico-darkGreen leading-relaxed text-lg font-satoshi font-light" {...props}>
        {children}
      </p>
    ),
    
    // Custom link renderer with smooth scrolling for anchors
    a: ({ href, children, ...props }: any) => {
      if (href && href.startsWith('#')) {
        const anchor = href.substring(1);
        return (
          <a 
            href={href}
            className="text-medico-turquoise hover:text-medico-darkGreen underline decoration-medico-turquoise/40 hover:decoration-medico-darkGreen transition-colors font-semibold font-satoshi"
            onClick={(e) => {
              e.preventDefault();
              const target = document.getElementById(anchor);
              if (target) {
                const offsetTop = target.offsetTop - 100;
                window.scrollTo({
                  top: offsetTop,
                  behavior: 'smooth'
                });
              }
            }}
            {...props}
          >
            {children}
          </a>
        );
      }
      
      const target = href?.startsWith('http') ? '_blank' : undefined;
      const rel = target === '_blank' ? 'noopener noreferrer' : undefined;
      
      return (
        <a 
          href={href}
          target={target}
          rel={rel}
          className="text-medico-turquoise hover:text-medico-darkGreen underline decoration-medico-turquoise/40 hover:decoration-medico-darkGreen transition-colors font-semibold font-satoshi"
          {...props}
        >
          {children}
        </a>
      );
    },
    
    // Custom list renderers
    ul: ({ children, ...props }: any) => (
      <ul className="list-none mb-12 space-y-2 font-satoshi" {...props}>
        {children}
      </ul>
    ),
    
    ol: ({ children, ...props }: any) => (
      <ol className="list-none mb-12 space-y-2 font-satoshi" {...props}>
        {children}
      </ol>
    ),
    
    li: ({ children, ...props }: any) => (
      <li className="mb-4 text-medico-darkGreen leading-relaxed relative pl-8 font-satoshi text-lg font-light before:content-['•'] before:absolute before:left-0 before:text-medico-turquoise before:font-bold before:text-xl" {...props}>
        {children}
      </li>
    ),
    
    // Custom table renderer
    table: ({ children, ...props }: any) => (
      <div className="my-12 overflow-x-auto rounded-xl border border-medico-turquoise/20 shadow-lg">
        <table className="w-full min-w-full bg-white" {...props}>
          {children}
        </table>
      </div>
    ),
    
    thead: ({ children, ...props }: any) => (
      <thead {...props}>
        {children}
      </thead>
    ),
    
    tbody: ({ children, ...props }: any) => (
      <tbody {...props}>
        {children}
      </tbody>
    ),
    
    tr: ({ children, ...props }: any) => (
      <tr className="hover:bg-medico-mint/10 transition-colors duration-200" {...props}>
        {children}
      </tr>
    ),
    
    th: ({ children, ...props }: any) => (
      <th className="px-6 py-4 text-left text-medico-darkGreen font-bold font-satoshi bg-medico-mint/20 border-b-2 border-medico-turquoise" {...props}>
        {children}
      </th>
    ),
    
    td: ({ children, ...props }: any) => (
      <td className="px-6 py-4 text-medico-darkGreen font-satoshi font-light border-b border-medico-turquoise/20" {...props}>
        {children}
      </td>
    ),
    
    blockquote: ({ children, ...props }: any) => (
      <blockquote className="border-l-4 border-medico-turquoise pl-8 my-12 italic text-medico-darkGreen bg-medico-mint/10 rounded-r-xl py-6 text-xl font-satoshi font-light leading-relaxed" {...props}>
        {children}
      </blockquote>
    ),
    
    pre: ({ children, ...props }: any) => (
      <div className="my-12 rounded-xl overflow-hidden border border-medico-turquoise/20 shadow-lg">
        <pre className="bg-medico-darkGreen text-medico-mint p-6 overflow-x-auto font-mono text-sm leading-relaxed" {...props}>
          {children}
        </pre>
      </div>
    ),
    
    code: ({ children, className, ...props }: any) => {
      const isInline = !className;
      
      if (isInline) {
        return (
          <code className="bg-medico-mint/30 text-medico-darkGreen px-2 py-1 rounded font-mono text-sm font-medium" {...props}>
            {children}
          </code>
        );
      }
      
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
    
    img: ({ src, alt, title, ...props }: any) => (
      <figure className="my-16">
        <img 
          src={src} 
          alt={alt}
          title={title}
          className="w-full max-w-6xl mx-auto rounded-3xl shadow-xl" 
          loading="lazy"
          {...props}
        />
      </figure>
    ),
    
    strong: ({ children, ...props }: any) => (
      <strong className="font-bold text-medico-darkGreen font-satoshi" {...props}>
        {children}
      </strong>
    ),
    
    em: ({ children, ...props }: any) => (
      <em className="italic text-medico-darkGreen font-satoshi" {...props}>
        {children}
      </em>
    ),
    
    hr: ({ ...props }: any) => (
      <hr className="my-16 border-0 h-px bg-gradient-to-r from-transparent via-medico-turquoise to-transparent" {...props} />
    ),
  };

  // Check if we need to split content for TOC insertion
  const inhaltsverzeichnisRegex = /^##\s+Inhaltsverzeichnis\s*$/m;
  const match = processedMarkdown.match(inhaltsverzeichnisRegex);
  
  if (match && tocItems.length > 0) {
    console.log('[TOC] Inserting TOCBlock at position:', match.index);
    const beforeTOC = processedMarkdown.substring(0, match.index! + match[0].length);
    const afterTOC = processedMarkdown.substring(match.index! + match[0].length);
    
    return (
      <article className="prose prose-lg max-w-none">
        <div className="markdown-content leading-relaxed font-satoshi">
          <ReactMarkdown
            components={components}
          >
            {beforeTOC}
          </ReactMarkdown>
        </div>
        <TOCBlock items={tocItems} />
        <div className="markdown-content leading-relaxed font-satoshi">
          <ReactMarkdown
            components={components}
          >
            {afterTOC}
          </ReactMarkdown>
        </div>
      </article>
    );
  }
  
  return (
    <article className="prose prose-lg max-w-none">
      {tocItems.length > 0 && <TOCBlock items={tocItems} />}
      <div className="markdown-content leading-relaxed font-satoshi">
        <ReactMarkdown
          components={components}
        >
          {processedMarkdown}
        </ReactMarkdown>
      </div>
    </article>
  );
};

export default MarkdownRenderer;
