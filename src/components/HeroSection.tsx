

import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Music, Star, Heart } from 'lucide-react';
interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className }: HeroSectionProps) => {
  return (
    <section className={cn('relative overflow-hidden h-[100vh] max-h-[100dvh]', className)} style={{backgroundColor: '#050a30'}}>
      {/* Background image */}
      <div className="absolute inset-0 z-10 flex items-start justify-center pt-0">
        <img
          src="/img/01.png"
          alt=""
          className="w-full h-auto max-h-[100vh] object-contain"
          aria-hidden="true"
        />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-magic-100 rounded-full blur-3xl opacity-70 animate-pulse-soft z-10"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-energy-300/20 rounded-full blur-3xl opacity-70 animate-pulse-soft z-10"></div>
      
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
        <div className="max-w-3xl mx-auto text-center relative z-10 h-full flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-cursive mb-6 md:mb-8 text-white animate-glow mt-12">
            Песни Силы
          </h1>
          
          <div className="mt-[40vh]">
            <p className="text-lg md:text-xl mb-8 md:mb-10 leading-relaxed text-white/90 animate-scale-in">
              Ты — особенный, и в этом мире точно есть песня, написанная специально для тебя — она только ждет своего часа, чтобы родиться. В этом ей помогаю я — Настя Чудеса, создатель проекта «Песни Cилы».
            </p>
          </div>
          
          <Button className="bg-energy-300 hover:bg-energy-500 text-white px-8 py-6 text-lg rounded-full animate-pulse-soft shadow-lg">
            Хочу Песню СИЛЫ
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
