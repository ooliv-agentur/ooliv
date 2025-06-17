
import React from 'react';

interface TOCBlockProps {
  items: string;
}

const TOCBlock = ({ items }: TOCBlockProps) => {
  return (
    <div className="toc-container bg-medico-mint/20 rounded-2xl p-8 mb-12 border-l-4 border-medico-turquoise">
      <h3 className="text-xl font-bold text-medico-darkGreen mb-6 font-satoshi">Inhaltsverzeichnis</h3>
      <ul className="space-y-2 font-satoshi" dangerouslySetInnerHTML={{ __html: items }} />
    </div>
  );
};

export default TOCBlock;
