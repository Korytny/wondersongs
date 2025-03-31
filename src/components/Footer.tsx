
import React from 'react';
import { cn } from '@/lib/utils';
import { Music, Heart, Star } from 'lucide-react';

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn('py-10 relative bg-magic-100/30 backdrop-blur-sm', className)}>
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="text-magic-500 animate-pulse-soft">
              <Music size={24} />
            </div>
            <h3 className="text-xl font-cursive gradient-text">Песни Силы</h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <a href="#about" className="text-magic-700 hover:text-magic-900 transition-colors">О проекте</a>
            <a href="#song-types" className="text-magic-700 hover:text-magic-900 transition-colors">Виды песен</a>
            <a href="#examples" className="text-magic-700 hover:text-magic-900 transition-colors">Примеры</a>
            <a href="#testimonials" className="text-magic-700 hover:text-magic-900 transition-colors">Отзывы</a>
            <a href="#contact" className="text-magic-700 hover:text-magic-900 transition-colors">Связаться</a>
          </div>
          
          <div className="flex items-center gap-1 text-magic-700">
            <span>С любовью</span>
            <Heart size={16} className="fill-energy-300 text-energy-300" />
            <span>Настя Чудеса</span>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-magic-300/20 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Песни Силы. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
