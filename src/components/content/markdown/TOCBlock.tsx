
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

  const renderNestedTOC = (tocItems: TOCItem[]): JSX.Element[] => {
    const result: JSX.Element[] = [];
    let i = 0;

    while (i < tocItems.length) {
      const item = tocItems[i];
      
      if (item.level === 3) {
        // H3 - main section
        const h3Children: JSX.Element[] = [];
        let j = i + 1;
        
        // Collect all H4 items that follow this H3
        while (j < tocItems.length && tocItems[j].level === 4) {
          const h4Item = tocItems[j];
          h3Children.push(
            <li key={`h4-${j}`} className="font-normal text-base pl-4">
              <a 
                href={`#${h4Item.anchor}`}
                className="text-medico-turquoise hover:text-medico-darkGreen underline decoration-medico-turquoise/40 hover:decoration-medico-darkGreen transition-colors font-semibold font-satoshi"
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
          <li key={`h3-${i}`} className="font-bold text-lg mt-4 first:mt-0">
            <a 
              href={`#${item.anchor}`}
              className="text-medico-turquoise hover:text-medico-darkGreen underline decoration-medico-turquoise/40 hover:decoration-medico-darkGreen transition-colors font-semibold font-satoshi"
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
              <ul className="mt-2 space-y-1">
                {h3Children}
              </ul>
            )}
          </li>
        );
        
        i = j; // Skip processed H4 items
      } else {
        // Handle other levels (H4 without preceding H3, etc.)
        result.push(
          <li key={`other-${i}`} className={item.level === 4 ? "font-normal text-base pl-4" : "font-normal text-base"}>
            <a 
              href={`#${item.anchor}`}
              className="text-medico-turquoise hover:text-medico-darkGreen underline decoration-medico-turquoise/40 hover:decoration-medico-darkGreen transition-colors font-semibold font-satoshi"
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
    <div className="toc-container mb-12">
      <ul className="space-y-2 font-satoshi list-none">
        {renderNestedTOC(items)}
      </ul>
    </div>
  );
};

export default TOCBlock;
