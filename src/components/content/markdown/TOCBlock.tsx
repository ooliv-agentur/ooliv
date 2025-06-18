
import React from 'react';

interface TOCItem {
  text: string;
  anchor: string;
  level: number;
}

interface TOCBlockProps {
  items: TOCItem[];
}

const TOCBlock = ({ items }: TOCBlockProps) => {
  if (items.length === 0) return null;

  // Group items by their parent H3 sections
  const groupedItems: Array<{
    h3Item: TOCItem;
    h4Items: TOCItem[];
  }> = [];

  let currentH3Group: { h3Item: TOCItem; h4Items: TOCItem[] } | null = null;

  items.forEach((item) => {
    if (item.level === 3) {
      // New H3 section
      if (currentH3Group) {
        groupedItems.push(currentH3Group);
      }
      currentH3Group = {
        h3Item: item,
        h4Items: []
      };
    } else if (item.level === 4 && currentH3Group) {
      // H4 item belongs to current H3
      currentH3Group.h4Items.push(item);
    }
  });

  // Don't forget the last group
  if (currentH3Group) {
    groupedItems.push(currentH3Group);
  }

  const handleLinkClick = (anchor: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(`Attempting to scroll to anchor: ${anchor}`);
    const target = document.getElementById(anchor);
    if (target) {
      const offsetTop = target.offsetTop - 100;
      console.log(`Scrolling to element at offset: ${offsetTop}`);
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    } else {
      console.warn(`Anchor target not found: ${anchor}`);
      const allIds = Array.from(document.querySelectorAll('[id]')).map(el => el.id);
      console.log('Available IDs:', allIds);
    }
  };

  return (
    <div className="toc-container mb-12">
      <ul className="space-y-2 font-satoshi list-none">
        {groupedItems.map((group, groupIndex) => (
          <li key={`h3-${groupIndex}`} className="leading-relaxed font-satoshi">
            {/* H3 item - main chapter */}
            <a 
              href={`#${group.h3Item.anchor}`}
              className="text-medico-turquoise hover:text-medico-darkGreen underline decoration-medico-turquoise/40 hover:decoration-medico-darkGreen transition-colors font-bold font-satoshi text-lg mt-4 first:mt-0"
              onClick={handleLinkClick(group.h3Item.anchor)}
            >
              {group.h3Item.text}
            </a>
            
            {/* Nested H4 items if they exist */}
            {group.h4Items.length > 0 && (
              <ul className="mt-2 space-y-1 list-none">
                {group.h4Items.map((h4Item, h4Index) => (
                  <li key={`h4-${groupIndex}-${h4Index}`} className="leading-relaxed font-satoshi pl-4">
                    <a 
                      href={`#${h4Item.anchor}`}
                      className="text-medico-turquoise hover:text-medico-darkGreen underline decoration-medico-turquoise/40 hover:decoration-medico-darkGreen transition-colors font-normal font-satoshi text-base"
                      onClick={handleLinkClick(h4Item.anchor)}
                    >
                      {h4Item.text}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TOCBlock;
