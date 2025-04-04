
import React from 'react';
import { cn } from '@/lib/utils';
import { Music } from 'lucide-react';

interface AboutSectionProps {
  className?: string;
}

const AboutSection = ({ className }: AboutSectionProps) => {
  return (
    <section className={cn('py-20 relative', className)} id="about" style={{backgroundColor: '#050a30'}}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute -top-10 left-1/4 w-40 h-40 bg-magic-100/30 rounded-full blur-3xl"></div>
      
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
          <div className="w-full md:w-1/2 md:translate-x-20 flex justify-center">
            <div className="relative">
              <div className="w-96 h-96 md:w-120 md:h-120 rounded-full bg-magic-gradient p-1 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                  <img src="/img/im1.png" alt="" className="w-full h-full object-contain animate-pulse-soft" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-energy-300/20 rounded-full blur-2xl"></div>
            </div>
          </div>
          
          <div className="md:w-1/2 md:mr-16">
            <h2 className="text-3xl md:text-4xl font-cursive mb-6 gradient-text">
              Что это за песни такие?
            </h2>
            
            <div className="space-y-6 text-lg">
              <p className="animate-slide-in" style={{ animationDelay: "0.1s" }}>
                Песня Силы — это волшебная песня для тебя, твоего близкого человека или ребёнка, сотканная из позитивных аффирмаций. Она работает как персональная мантра, которая сопровождает вас на протяжении всей жизни.
              </p>
              
              <p className="animate-slide-in" style={{ animationDelay: "0.3s" }}>
                <span className="italic">«Песня Силы уже есть в каждом из нас. Я беру смыслы и запросы с твоих слов и сплетаю их в поэтические кружева, превращая в позитивные аффирмации — так получается песня»</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
