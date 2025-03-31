
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Music } from 'lucide-react';

interface NavBarProps {
  className?: string;
}

const NavBar = ({ className }: NavBarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5',
        className
      )}
    >
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            <div className={cn(
              "text-magic-500 transition-all duration-300 group-hover:scale-110",
              isScrolled ? "" : "animate-pulse-soft"
            )}>
              <Music size={28} />
            </div>
            <h1 className={cn(
              "font-cursive text-2xl",
              isScrolled ? "text-magic-900" : "gradient-text"
            )}>
              Песни Силы
            </h1>
          </a>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-magic-700 hover:text-magic-900 transition-colors">О проекте</a>
            <a href="#song-types" className="text-magic-700 hover:text-magic-900 transition-colors">Виды песен</a>
            <a href="#examples" className="text-magic-700 hover:text-magic-900 transition-colors">Примеры</a>
            <a href="#testimonials" className="text-magic-700 hover:text-magic-900 transition-colors">Отзывы</a>
            <a href="#contact" className="text-magic-700 hover:text-magic-900 transition-colors">Связаться</a>
            
            <Button className="bg-magic-gradient hover:opacity-90 text-white">
              Хочу Песню Силы
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-magic-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white mt-4 rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col">
              <a 
                href="#about" 
                className="px-4 py-3 hover:bg-magic-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                О проекте
              </a>
              <a 
                href="#song-types" 
                className="px-4 py-3 hover:bg-magic-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Виды песен
              </a>
              <a 
                href="#examples" 
                className="px-4 py-3 hover:bg-magic-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Примеры
              </a>
              <a 
                href="#testimonials" 
                className="px-4 py-3 hover:bg-magic-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Отзывы
              </a>
              <a 
                href="#contact" 
                className="px-4 py-3 hover:bg-magic-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Связаться
              </a>
              <div className="px-4 py-3">
                <Button 
                  className="w-full bg-magic-gradient hover:opacity-90 text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Хочу Песню Силы
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default NavBar;
