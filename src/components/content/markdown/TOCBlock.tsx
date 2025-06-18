
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

  const renderNestedTOC = (tocItems: TOCItem[]): JSX.Element => {
    const result: JSX.Element[] = [];
    let i = 0;

    while (i < tocItems.length) {
      const item = tocItems[i];
      
      if (item.level === 3) {
        // H3 item - check for following H4 items
        const h4Items: TOCItem[] = [];
        let j = i + 1;
        
        // Collect all H4 items that follow this H3
        while (j < tocItems.length && tocItems[j].level === 4) {
          h4Items.push(tocItems[j]);
          j++;
        }
        
        // Render H3 with optional nested H4 items
        result.push(
          <li key={`h3-${i}`} className="mb-4">
            <a 
              href={`#${item.anchor}`}
              className="text-medico-turquoise hover:text-medico-darkGreen underline decoration-medico-turquoise/40 hover:decoration-medico-darkGreen transition-colors font-bold font-satoshi text-lg"
              onClick={(e) => {
                e.preventDefault();
                console.log(`TOC: Scrolling to H3 anchor: ${item.anchor}`);
                const target = document.getElementById(item.anchor);
                if (target) {
                  const offsetTop = target.offsetTop - 100;
                  window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                  });
                } else {
                  console.warn(`TOC: H3 anchor target not found: ${item.anchor}`);
                }
              }}
            >
              {item.text}
            </a>
            {h4Items.length > 0 && (
              <ul className="mt-2 space-y-1">
                {h4Items.map((h4Item, h4Index) => (
                  <li key={`h4-${i}-${h4Index}`} className="pl-4">
                    <a 
                      href={`#${h4Item.anchor}`}
                      className="text-medico-turquoise hover:text-medico-darkGreen underline decoration-medico-turquoise/40 hover:decoration-medico-darkGreen transition-colors font-semibold font-satoshi text-base"
                      onClick={(e) => {
                        e.preventDefault();
                        console.log(`TOC: Scrolling to H4 anchor: ${h4Item.anchor}`);
                        const target = document.getElementById(h4Item.anchor);
                        if (target) {
                          const offsetTop = target.offsetTop - 100;
                          window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                          });
                        } else {
                          console.warn(`TOC: H4 anchor target not found: ${h4Item.anchor}`);
                        }
                      }}
                    >
                      {h4Item.text}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
        
        i = j; // Skip to next non-H4 item
      } else {
        // Handle other levels (though we mainly expect H3/H4)
        result.push(
          <li key={`other-${i}`} className="mb-2">
            <a 
              href={`#${item.anchor}`}
              className="text-medico-turquoise hover:text-medico-darkGreen underline decoration-medico-turquoise/40 hover:decoration-medico-darkGreen transition-colors font-semibold font-satoshi"
              onClick={(e) => {
                e.preventDefault();
                console.log(`TOC: Scrolling to anchor: ${item.anchor}`);
                const target = document.getElementById(item.anchor);
                if (target) {
                  const offsetTop = target.offsetTop - 100;
                  window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                  });
                } else {
                  console.warn(`TOC: Anchor target not found: ${item.anchor}`);
                }
              }}
            >
              {item.text}
            </a>
          </li>
        );
        i++;
      }
    }

    return <ul className="space-y-2 font-satoshi list-none">{result}</ul>;
  };

  return (
    <div className="toc-container mb-12">
      {renderNestedTOC(items)}
    </div>
  );
};

export default TOCBlock;
