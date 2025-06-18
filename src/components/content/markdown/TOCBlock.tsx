
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
    
    for (let i = 0; i < tocItems.length; i++) {
      const item = tocItems[i];
      
      if (item.level === 3) {
        // H3 - main category
        const h3Item = (
          <li key={`h3-${i}`} className="mb-3">
            <a 
              href={`#${item.anchor}`}
              className="text-medico-turquoise hover:text-medico-darkGreen underline decoration-medico-turquoise/40 hover:decoration-medico-darkGreen transition-colors font-bold text-lg font-satoshi"
              onClick={(e) => {
                e.preventDefault();
                console.log(`Scrolling to H3 anchor: ${item.anchor}`);
                const target = document.getElementById(item.anchor);
                if (target) {
                  const offsetTop = target.offsetTop - 100;
                  window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                  });
                } else {
                  console.warn(`H3 anchor target not found: ${item.anchor}`);
                }
              }}
            >
              {item.text}
            </a>
            
            {/* Look for H4 children */}
            {(() => {
              const h4Children: JSX.Element[] = [];
              let j = i + 1;
              
              while (j < tocItems.length && tocItems[j].level === 4) {
                const h4Item = tocItems[j];
                h4Children.push(
                  <li key={`h4-${j}`} className="mb-2">
                    <a 
                      href={`#${h4Item.anchor}`}
                      className="text-medico-turquoise hover:text-medico-darkGreen underline decoration-medico-turquoise/40 hover:decoration-medico-darkGreen transition-colors font-normal text-base font-satoshi"
                      onClick={(e) => {
                        e.preventDefault();
                        console.log(`Scrolling to H4 anchor: ${h4Item.anchor}`);
                        const target = document.getElementById(h4Item.anchor);
                        if (target) {
                          const offsetTop = target.offsetTop - 100;
                          window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                          });
                        } else {
                          console.warn(`H4 anchor target not found: ${h4Item.anchor}`);
                        }
                      }}
                    >
                      {h4Item.text}
                    </a>
                  </li>
                );
                j++;
              }
              
              // Skip processed H4 items in main loop
              i = j - 1;
              
              return h4Children.length > 0 ? (
                <ul className="mt-2 pl-4 space-y-1 list-none">
                  {h4Children}
                </ul>
              ) : null;
            })()}
          </li>
        );
        
        result.push(h3Item);
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
