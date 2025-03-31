
import React from 'react';
import { cn } from '@/lib/utils';
import SongCard from './SongCard';
import { Heart, Users, Gift, Calendar, Headphones, MessageSquare, FileMusic, FileVideo } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

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
  return (
    <section className={cn('py-20 relative overflow-hidden', className)} id="song-types">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute -bottom-40 right-0 w-80 h-80 bg-energy-300/10 rounded-full blur-3xl"></div>
      
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-cursive mb-10 text-white text-center">
          Для кого и какие бывают Песни Силы
        </h2>
        
        {/* Mobile and desktop carousel */}
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {songTypes.map((type, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <SongCard 
                    title={type.title} 
                    description={type.description} 
                    icon={type.icon}
                    className="h-64"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center mt-6">
            <CarouselPrevious className="relative static mr-2 bg-primary/20 hover:bg-primary/30" />
            <CarouselNext className="relative static ml-2 bg-primary/20 hover:bg-primary/30" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default SongTypesSection;
