import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav 
      className="fixed top-0 left-0 right-0 bg-[var(--primary-color)] z-50 
                 shadow-md py-3 px-4 md:px-8 flex justify-between items-center"
      style={{
        backgroundColor: 'var(--primary-color)',
        color: 'var(--background-color)'
      }}
    >
      <div className="flex items-center">
        <img 
          src="https://github.com/SaiGane5/codingassets/blob/main/logo.png?raw=true" 
          alt="logo" 
          className="h-12 w-12 rounded-full object-cover border-[3px]"
          style={{
            borderColor: 'var(--background-color)'
          }}
        />
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
          style={{
            color: '#FFD700'
          }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navigation Links */}
      <div className={`
        ${isOpen ? 'block' : 'hidden'} 
        md:block absolute md:relative top-full md:top-0 left-0 md:left-auto w-full md:w-auto
      `}>
        <ul 
          className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0"
          style={{
            backgroundColor: 'var(--primary-color)'
          }}
        >
          {['Tools', 'Blog', 'Contact'].map((item, index) => (
            <li key={index}>
              <a 
                href={`#${item.toLowerCase()}`} 
                className="relative pb-1 group font-semibold"
                style={{
                  color: '#D4AF37'
                }}
              >
                {item}
                <span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{
                    backgroundColor: 'var(--background-color)'
                  }}
                ></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;