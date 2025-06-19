
import React from 'react';
import { marked } from 'marked';
import TOCBlock from './TOCBlock';
import { processMarkdownContent, extractTOCItems } from './utils/markdownUtils';
import { createCustomRenderer, createStyledRenderers } from './config/rendererConfig';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  // Process markdown content - remove first H1 and clean TOC markers
  const processedMarkdown = processMarkdownContent(content);
  const tocItems = extractTOCItems(processedMarkdown);

  // Configure marked with custom renderer for ooliv styling
  const renderer = createCustomRenderer();
  createStyledRenderers(renderer);
  
  // Configure marked options
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    breaks: true
  });
  
  // Convert markdown to HTML string - ensure we get a string, not a promise
  const htmlContent = marked.parse(processedMarkdown) as string;
  
  // Debug: Log all heading IDs that will be rendered
  React.useEffect(() => {
    setTimeout(() => {
      const allHeadings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(h => ({
        tag: h.tagName.toLowerCase(),
        id: h.id,
        text: h.textContent?.trim()
      }));
      console.log('🔍 All rendered heading IDs in DOM:', allHeadings);
    }, 100);
  }, [htmlContent]);
  
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
