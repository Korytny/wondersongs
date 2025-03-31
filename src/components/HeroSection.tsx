
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Music, Star, Heart } from 'lucide-react';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className }: HeroSectionProps) => {
  return (
    <section className={cn('relative overflow-hidden py-20 md:py-32', className)}>
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-magic-100 rounded-full blur-3xl opacity-70 animate-pulse-soft"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-energy-300/20 rounded-full blur-3xl opacity-70 animate-pulse-soft"></div>
      
      {/* Floating musical notes and stars */}
      <div className="absolute top-20 left-[10%] text-magic-300 animate-float opacity-70">
        <Music size={28} className="animate-spin-slow" />
      </div>
      <div className="absolute top-40 right-[15%] text-magic-500 animate-float opacity-70" style={{ animationDelay: "1s" }}>
        <Star size={24} className="animate-spin-slow" style={{ animationDelay: "0.5s" }} />
      </div>
      <div className="absolute bottom-32 left-[20%] text-energy-300 animate-float opacity-70" style={{ animationDelay: "1.5s" }}>
        <Heart size={22} className="animate-spin-slow" style={{ animationDelay: "1s" }} />
      </div>
      
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-cursive mb-6 md:mb-8 gradient-text animate-glow">
            Песни Силы
          </h1>
          
          <p className="text-lg md:text-xl mb-8 md:mb-10 leading-relaxed animate-scale-in">
            Ты — особенный, и в этом мире точно есть песня, написанная специально для тебя — она только ждет своего часа, чтобы родиться. В этом ей помогаю я — Настя Чудеса, создатель проекта «Песни Cилы».
          </p>
          
          <Button className="bg-energy-300 hover:bg-energy-500 text-white px-8 py-6 text-lg rounded-full animate-pulse-soft">
            Хочу Песню СИЛЫ
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
