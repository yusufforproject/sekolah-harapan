import React, { useState, useEffect } from 'react';
import { Book, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <Book className={`h-8 w-8 ${isScrolled ? 'text-teal-600' : 'text-white'}`} />
            <span className={`ml-2 font-bold text-xl ${isScrolled ? 'text-teal-600' : 'text-white'}`}>
              Sekolah Harapan
            </span>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'About', 'Programs', 'Faculty', 'News', 'Events', 'Admission', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className={`font-medium transition-colors duration-200 hover:text-teal-500 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              {['Home', 'About', 'Programs', 'Faculty', 'News', 'Events', 'Admission', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-800 font-medium transition-colors duration-200 hover:text-teal-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;