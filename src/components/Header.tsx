import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#hero" 
          className={`text-xl font-bold transition-colors duration-300 ${
            scrolled ? 'text-blue-900' : 'text-white'
          }`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
        >
          {personalInfo.name.split(' ')[0]}
          <span className="text-blue-500">.</span>
        </a>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['about', 'projects', 'experience', 'skills', 'contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={`transition-colors duration-300 capitalize hover:text-blue-500 ${
                    scrolled ? 'text-gray-800' : 'text-white'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a
                href={personalInfo.resumeUrl}
                className="flex items-center text-white bg-blue-600 hover:bg-blue-700 px-4 py-1.5 rounded-full transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={16} className="mr-1.5" />
                Resume
              </a>
            </li>
          </ul>
        </nav>

        <button
          className="md:hidden z-50 text-gray-800"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} className={scrolled ? 'text-gray-800' : 'text-white'} />}
        </button>

        {/* Mobile menu */}
        <div 
          className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <div className="flex flex-col h-full justify-center items-center">
            <ul className="flex flex-col space-y-8 text-center">
              {['about', 'projects', 'experience', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="text-xl font-medium text-gray-800 capitalize hover:text-blue-500 transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item);
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={personalInfo.resumeUrl}
                  className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download size={18} className="mr-2" />
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;