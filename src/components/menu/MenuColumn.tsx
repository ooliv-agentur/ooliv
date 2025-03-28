
import React from 'react';
import { Link } from 'react-router-dom';

interface MenuLink {
  title: string;
  path: string;
}

interface MenuColumnProps {
  title: string;
  links: MenuLink[];
  onLinkClick: () => void;
}

const MenuColumn = ({ title, links, onLinkClick }: MenuColumnProps) => {
  return (
    <div>
      <h3 className="text-white/80 text-sm font-medium mb-6">{title}</h3>
      <ul className="space-y-5">
        {links.map((link, index) => (
          <li key={index}>
            <Link 
              to={link.path}
              onClick={onLinkClick}
              className="text-white text-xl md:text-2xl font-medium hover:text-blue-300 transition-colors block"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuColumn;
