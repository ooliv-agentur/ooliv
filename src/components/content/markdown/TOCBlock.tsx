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
  console.log('[TOCBlock] Rendering items:', items);
  
  if (items.length === 0) return null;

  const renderNestedTOC = (tocItems: TOCItem[]): JSX.Element[] => {
    const result: JSX.Element[] = [];
    let i = 0;

    while (i < tocItems.length) {
      const item = tocItems[i];
      
      if (item.level === 3) {
        // H3 - main section (bold, prominent)
        const h3Children: JSX.Element[] = [];
        let j = i + 1;
        
        // Collect all H4 items that follow this H3
        while (j < tocItems.length && tocItems[j].level === 4) {
          const h4Item = tocItems[j];
          h3Children.push(
            <li key={`h4-${j}`} className="pl-6 font-normal text-base leading-relaxed text-medico-darkGreen/80">
              <a 
                href={`#${h4Item.anchor}`}
                className="text-medico-turquoise/90 hover:text-medico-darkGreen transition-colors font-medium font-satoshi"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById(h4Item.anchor);
                  if (target) {
                    const offsetTop = target.offsetTop - 100;
                    window.scrollTo({
                      top: offsetTop,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                {h4Item.text}
              </a>
            </li>
          );
          j++;
        }

        // Render H3 with nested H4s
        result.push(
          <li key={`h3-${i}`} className="font-bold text-lg leading-relaxed mt-4 first:mt-0">
            <a 
              href={`#${item.anchor}`}
              className="text-medico-darkGreen hover:text-medico-turquoise transition-colors font-bold font-satoshi"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById(item.anchor);
                if (target) {
                  const offsetTop = target.offsetTop - 100;
                  window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              {item.text}
            </a>
            {h3Children.length > 0 && (
              <ul className="mt-3 space-y-2 list-none">
                {h3Children}
              </ul>
            )}
          </li>
        );
        
        i = j; // Skip processed H4 items
      } else if (item.level === 4) {
        // Standalone H4 (without preceding H3)
        result.push(
          <li key={`h4-standalone-${i}`} className="pl-6 font-normal text-base leading-relaxed text-medico-darkGreen/80">
            <a 
              href={`#${item.anchor}`}
              className="text-medico-turquoise/90 hover:text-medico-darkGreen transition-colors font-medium font-satoshi"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById(item.anchor);
                if (target) {
                  const offsetTop = target.offsetTop - 100;
                  window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              {item.text}
            </a>
          </li>
        );
        i++;
      } else {
        // Other levels (fallback)
        result.push(
          <li key={`other-${i}`} className="font-normal text-base leading-relaxed">
            <a 
              href={`#${item.anchor}`}
              className="text-medico-turquoise hover:text-medico-darkGreen transition-colors font-medium font-satoshi"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById(item.anchor);
                if (target) {
                  const offsetTop = target.offsetTop - 100;
                  window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                  });
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

    return result;
  };

  return (
    <div className="toc-container mb-12 bg-medico-mint/30 rounded-2xl p-6 border border-medico-turquoise/20">
      <ul className="space-y-1 font-satoshi list-none">
        {renderNestedTOC(items)}
      </ul>
    </div>
  );
};

export default TOCBlock;
