
import { marked } from 'marked';
import { generateAnchor } from '@/utils/anchorUtils';

export interface TOCItem {
  text: string;
  anchor: string;
  level: number;
}

export const extractTOCFromMarkdown = (markdown: string): TOCItem[] => {
  try {
    // Use marked.lexer to get structured tokens
    const tokens = marked.lexer(markdown);
    const tocItems: TOCItem[] = [];
    
    tokens.forEach(token => {
      if (token.type === 'heading' && (token.depth === 3 || token.depth === 4)) {
        // Extract text from heading token
        const text = token.text || '';
        
        // Skip "Inhaltsverzeichnis" headings
        if (text.toLowerCase() === 'inhaltsverzeichnis' || 
            text.toLowerCase() === 'inhalt' || 
            text.toLowerCase() === 'table of contents') {
          return;
        }
        
        const anchor = generateAnchor(text);
        console.log(`TOC item extracted: "${text}" -> anchor: "${anchor}" (level: ${token.depth})`);
        
        tocItems.push({
          text,
          anchor,
          level: token.depth
        });
      }
    });
    
    console.log('Extracted TOC items:', tocItems);
    return tocItems;
  } catch (error) {
    console.error('Error extracting TOC from markdown:', error);
    return [];
  }
};
