
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import SongCard from './SongCard';
import { Heart, Users, Gift, Calendar, Headphones, MessageSquare, FileMusic, FileVideo } from 'lucide-react';

interface SongTypesProps {
  className?: string;
}

const songTypes = [
  {
    title: 'Себе любимому',
    description: 'Личная позитивная аффирмация для реализации мечты, поддержки качеств характера или состояния сознания.',
    icon: <Heart size={24} />
  },
  {
    title: 'Паре влюблённых',
    description: 'Позитивная установка на совместное счастливое бытие.',
    icon: <Users size={24} />
  },
  {
    title: 'Для призыва ребёночка или для ребёнка в животике',
    description: 'Песня, написанная со слов родителей, сопровождает и поддерживает ребенка всю его жизнь.',
    icon: <Calendar size={24} />
  },
  {
    title: 'Семейной паре',
    description: 'Песня-оберег семьи, которая поможет помнить, ради чего вместе.',
    icon: <Users size={24} />
  },
  {
    title: 'Ребёнку любого возраста',
    description: 'Добрые и ненавязчивые советы и поддержка на всю жизнь от мамы и папы.',
    icon: <Headphones size={24} />
  },
  {
    title: 'Бизнесу',
    description: 'Аудио-визитка для благостного проекта о его ценностях и миссии в мире.',
    icon: <FileMusic size={24} />
  },
  {
    title: 'Друзьям и любимым',
    description: 'Как лучший подарок на всю жизнь, поддержка и опора в сложных ситуациях и самых прекрасных моментах.',
    icon: <Gift size={24} />
  },
  {
    title: 'Людям, покинувшим нас',
    description: 'Песня Силы – реквием как вечная память.',
    icon: <MessageSquare size={24} />
  }
];

const SongTypesSection = ({ className }: SongTypesProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextSlide = () => {
    setActiveIndex((prev) => (prev === songTypes.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? songTypes.length - 1 : prev - 1));
  };

  return (
    <section className={cn('py-20 relative overflow-hidden', className)} id="song-types">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute -bottom-40 right-0 w-80 h-80 bg-energy-300/10 rounded-full blur-3xl"></div>
      
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-cursive mb-10 gradient-text text-center">
          Для кого и какие бывают Песни Силы
        </h2>
        
        {/* Mobile carousel */}
        <div className="md:hidden relative">
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute top-1/2 -left-3 z-10 bg-background/80 backdrop-blur-sm"
            onClick={prevSlide}
          >
            &lt;
          </Button>
          
          <div className="overflow-hidden px-4">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {songTypes.map((type, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <SongCard 
                    title={type.title} 
                    description={type.description} 
                    icon={type.icon}
                    className="h-64"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute top-1/2 -right-3 z-10 bg-background/80 backdrop-blur-sm"
            onClick={nextSlide}
          >
            &gt;
          </Button>
          
          <div className="flex justify-center gap-1 mt-4">
            {songTypes.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === activeIndex ? 'bg-magic-500' : 'bg-magic-100'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
        
        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {songTypes.map((type, index) => (
            <SongCard 
              key={index}
              title={type.title} 
              description={type.description} 
              icon={type.icon}
              className="h-64"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SongTypesSection;
