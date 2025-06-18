
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

  const renderTOCItems = (tocItems: TOCItem[]): JSX.Element[] => {
    const result: JSX.Element[] = [];
    let currentLevel = 2; // Start with H2
    let nestedStack: JSX.Element[][] = [[]];

    tocItems.forEach((item, index) => {
      const { text, anchor, level } = item;

      // Handle level changes
      if (level > currentLevel) {
        // Going deeper - create new nested level
        while (level > currentLevel) {
          nestedStack.push([]);
          currentLevel++;
        }
      } else if (level < currentLevel) {
        // Going back up - close nested levels
        while (level < currentLevel && nestedStack.length > 1) {
          const nestedItems = nestedStack.pop();
          if (nestedItems && nestedItems.length > 0) {
            const parentItems = nestedStack[nestedStack.length - 1];
            if (parentItems.length > 0) {
              // Add nested ul to the last parent item
              const lastParentIndex = parentItems.length - 1;
              const lastParent = parentItems[lastParentIndex];
              parentItems[lastParentIndex] = React.cloneElement(lastParent, {
                children: [
                  lastParent.props.children,
                  <ul key={`nested-${index}`} className="ml-6 mt-2 space-y-2">
                    {nestedItems}
                  </ul>
                ]
              });
            }
          }
          currentLevel--;
        }
      }

      // Create the list item
      const listItem = (
        <li key={`toc-${index}`} className="mb-2 text-medico-darkGreen leading-relaxed font-satoshi text-lg font-light">
          <a 
            href={`#${anchor}`} 
            className="text-medico-turquoise hover:text-medico-darkGreen underline decoration-medico-turquoise/40 hover:decoration-medico-darkGreen transition-colors font-semibold font-satoshi"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(anchor)?.scrollIntoView({behavior: 'smooth'});
            }}
          >
            {text}
          </a>
        </li>
      );

      // Add to current level
      nestedStack[nestedStack.length - 1].push(listItem);
    });

    // Close any remaining nested levels
    while (nestedStack.length > 1) {
      const nestedItems = nestedStack.pop();
      if (nestedItems && nestedItems.length > 0) {
        const parentItems = nestedStack[nestedStack.length - 1];
        if (parentItems.length > 0) {
          const lastParentIndex = parentItems.length - 1;
          const lastParent = parentItems[lastParentIndex];
          parentItems[lastParentIndex] = React.cloneElement(lastParent, {
            children: [
              lastParent.props.children,
              <ul key="nested-final" className="ml-6 mt-2 space-y-2">
                {nestedItems}
              </ul>
            ]
          });
        }
      }
    }

    return nestedStack[0];
  };

  return (
    <div className="toc-container bg-medico-mint/20 rounded-2xl p-8 mb-12 border-l-4 border-medico-turquoise">
      <h3 className="text-xl font-bold text-medico-darkGreen mb-6 font-satoshi">Inhaltsverzeichnis</h3>
      <ul className="space-y-2 font-satoshi">
        {renderTOCItems(items)}
      </ul>
    </div>
  );
};

export default TOCBlock;
