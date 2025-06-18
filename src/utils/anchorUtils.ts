
export const generateAnchor = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[äöüß]/g, (char) => {
      const map: Record<string, string> = { 'ä': 'ae', 'ö': 'oe', 'ü': 'ue', 'ß': 'ss' };
      return map[char] || char;
    })
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
};

export const preprocessMarkdown = (content: string): string => {
  let processedMarkdown = content;
  
  // Remove the first H1 (# title) from the markdown content
  const firstH1Match = processedMarkdown.match(/^#\s+[^\n]*\n*/);
  if (firstH1Match) {
    processedMarkdown = processedMarkdown.replace(firstH1Match[0], '');
  }
  
  // Remove duplicate "Inhaltsverzeichnis" headers
  processedMarkdown = processedMarkdown.replace(/^##\s+(Inhaltsverzeichnis|Inhalt|Table of Contents)\s*\n*/gim, '');
  
  // Clean up mixed format issues - ensure proper spacing after headers
  processedMarkdown = processedMarkdown.replace(/^(#{2,6})\s*([^\n]+)\n*(?=\s*[-*+]\s)/gm, '$1 $2\n\n');
  
  return processedMarkdown;
};
