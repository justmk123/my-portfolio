import React from 'react';
import { Bird } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import ShuffleText from './ShuffleText';

const Header: React.FC = () => {
  return (
    <header className="w-full py-8 px-8 md:px-16 flex justify-between items-center fixed top-0 left-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="flex items-center gap-2 select-none cursor-pointer group">
        <Bird className="w-6 h-6 text-white group-hover:text-brand-blue transition-colors duration-300" />
        <span className="font-futuristic font-bold text-xl tracking-widest shiny-text">
          <ShuffleText content="JUSTMK" />
        </span>
      </div>

      <nav>
        <ul className="flex space-x-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a 
                href={item.href} 
                className="font-rajdhani font-semibold text-lg text-gray-400 hover:text-white transition-colors tracking-wide uppercase"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;