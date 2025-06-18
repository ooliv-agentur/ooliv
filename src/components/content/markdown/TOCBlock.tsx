
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
                  <ul key={`nested-${index}`} className="ml-4 mt-2 space-y-1">
                    {nestedItems}
                  </ul>
                ]
              });
            }
          }
          currentLevel--;
        }
      }

      // Enhanced styling based on level - H3 are main chapters, H4 are sub-items
      const isMainChapter = level === 3; // H3 sections
      const isSubChapter = level === 4;  // H4 sections
      
      const itemClasses = [
        "leading-relaxed font-satoshi",
        isMainChapter ? "font-bold text-lg mt-4 first:mt-0" : "",
        isSubChapter ? "font-normal text-base pl-4" : "",
        !isMainChapter && !isSubChapter ? "font-normal text-base" : ""
      ].filter(Boolean).join(" ");

      // Create the list item with enhanced scroll handling
      const listItem = (
        <li key={`toc-${index}`} className={itemClasses}>
          <a 
            href={`#${anchor}`} 
            className="text-medico-turquoise hover:text-medico-darkGreen underline decoration-medico-turquoise/40 hover:decoration-medico-darkGreen transition-colors font-semibold font-satoshi"
            onClick={(e) => {
              e.preventDefault();
              console.log(`Attempting to scroll to anchor: ${anchor}`);
              const target = document.getElementById(anchor);
              if (target) {
                // Scroll with offset to account for potential fixed headers and spacing
                const offsetTop = target.offsetTop - 100;
                console.log(`Scrolling to element at offset: ${offsetTop}`);
                window.scrollTo({
                  top: offsetTop,
                  behavior: 'smooth'
                });
              } else {
                console.warn(`Anchor target not found: ${anchor}`);
                // List all available IDs for debugging
                const allIds = Array.from(document.querySelectorAll('[id]')).map(el => el.id);
                console.log('Available IDs:', allIds);
              }
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
              <ul key="nested-final" className="ml-4 mt-2 space-y-1">
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
    <div className="toc-container mb-12">
      <ul className="space-y-2 font-satoshi list-none">
        {renderTOCItems(items)}
      </ul>
    </div>
  );
};

export default TOCBlock;
