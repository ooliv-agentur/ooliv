
// Enhanced anchor generation function - properly handles HTML entities
export const generateAnchor = (text: string) => {
  return text
    .toLowerCase()
    // First decode HTML entities like &amp; to &
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    // Handle German umlauts
    .replace(/[äöüß]/g, (char) => {
      const map: Record<string, string> = { 'ä': 'ae', 'ö': 'oe', 'ü': 'ue', 'ß': 'ss' };
      return map[char] || char;
    })
    // Remove all special characters except spaces and hyphens
    .replace(/[^a-z0-9\s-]/g, '') 
    // Replace spaces with hyphens
    .replace(/\s+/g, '-') 
    // Replace multiple hyphens with single
    .replace(/-+/g, '-') 
    // Remove leading/trailing hyphens
    .replace(/^-|-$/g, '');
};

// Extract TOC items from markdown with improved anchor generation
export const extractTOCItems = (markdown: string) => {
  const headingRegex = /^(#{2,6})\s+(.+)$/gm;
  const tocItems: Array<{text: string, anchor: string, level: number}> = [];
  let match;
  
  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length; // Number of # characters
    const text = match[2].trim();
    
    // Skip "Inhaltsverzeichnis" heading from TOC
    if (text.toLowerCase() === 'inhaltsverzeichnis' || text.toLowerCase() === 'inhalt' || text.toLowerCase() === 'table of contents') {
      continue;
    }
    
    const anchor = generateAnchor(text);
    console.log(`TOC item: "${text}" -> anchor: "${anchor}" (level: ${level})`);
    tocItems.push({ text, anchor, level });
  }
  
  console.log('Extracted TOC items:', tocItems);
  return tocItems;
};

// Process markdown content - remove first H1 and clean TOC markers
export const processMarkdownContent = (content: string) => {
  let processedMarkdown = content;
  
  // Remove the first H1 (# title) from the markdown content
  const firstH1Match = processedMarkdown.match(/^#\s+[^\n]*\n*/);
  if (firstH1Match) {
    processedMarkdown = processedMarkdown.replace(firstH1Match[0], '');
  }
  
  // Improved TOC marker detection - look for <!-- toc --> or markdown list patterns
  const hasTOCMarker = processedMarkdown.includes('<!-- toc -->') || 
                       (processedMarkdown.includes('- [') && processedMarkdown.includes('](#'));
  
  // Remove existing TOC lists from markdown if they exist
  if (hasTOCMarker) {
    // Remove markdown TOC lists (lines that start with - [ and contain ](#)
    processedMarkdown = processedMarkdown.replace(/^- \[.*\]\(#.*\)$/gm, '');
    // Remove <!-- toc --> markers
    processedMarkdown = processedMarkdown.replace(/<!-- toc -->/g, '');
    // Clean up empty lines left by removed TOC items
    processedMarkdown = processedMarkdown.replace(/\n\s*\n\s*\n/g, '\n\n');
  }
  
  return processedMarkdown;
};

// Fallback text parsing function for handling markdown links
export const fallbackParseText = (text: string) => {
  if (!text) return '';
  
  // Manually parse markdown links in text
  return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, linkText, href) => {
    if (href.startsWith('#')) {
      return `<a href="${href}" class="text-medico-turquoise hover:text-medico-darkGreen underline decoration-medico-turquoise/40 hover:decoration-medico-darkGreen transition-colors font-semibold font-satoshi toc-link" onclick="document.getElementById('${href.substring(1)}')?.scrollIntoView({behavior: 'smooth'}); return false;">${linkText}</a>`;
    }
    return `<a href="${href}" class="text-medico-turquoise hover:text-medico-darkGreen underline decoration-medico-turquoise/40 hover:decoration-medico-darkGreen transition-colors font-semibold font-satoshi">${linkText}</a>`;
  });
};
