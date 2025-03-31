
import React from 'react';
import { cn } from '@/lib/utils';
import AudioPlayer from './AudioPlayer';

interface SongExamplesSectionProps {
  className?: string;
}

const songs = [
  {
    title: 'Влюблённая',
    subtitle: 'Песня для ребенка',
    lyrics: '«Я — мой самый главный в жизни человек, Веселая и целеустремленная. Жизнерадостная, смелая, В себя и в мир влюбленная!»',
    audioSrc: '#', // Replace with actual audio source
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    title: 'Бессмертный',
    subtitle: 'Реквием',
    lyrics: '«Я в тебе, ты во мне — Мы едины навеки. Я бессмертный, Я здесь и сейчас, человеки. Навеки!»',
    audioSrc: '#', // Replace with actual audio source
    image: 'https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    title: 'Вездесущая',
    subtitle: 'Для себя',
    lyrics: '«А я у меня есть, А я у меня — здесь. Самодостаточна, Собой довольна В полной мере»',
    audioSrc: '#', // Replace with actual audio source
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    title: 'Любовь Морковь',
    subtitle: 'Семейной паре',
    lyrics: '«А у нас всё замечтательно, Что намечтали, то и прожили. Мы мыслим только позитивное, Да и фантазия хорошая!»',
    audioSrc: '#', // Replace with actual audio source
    image: 'https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    title: 'Ом Намо',
    subtitle: 'Для себя',
    lyrics: '«Божественный танец творца: Исцеляю, радую, наслаждаюсь, праздную. Женщина прекрасная С блаженством и спокойствием Счастливого лица»',
    audioSrc: '#', // Replace with actual audio source
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  }
];

const SongExamplesSection = ({ className }: SongExamplesSectionProps) => {
  return (
    <section className={cn('py-20 relative', className)} id="examples">
      <div className="absolute -top-40 left-20 w-80 h-80 bg-magic-100/20 rounded-full blur-3xl"></div>
      
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-cursive mb-10 text-white text-center">
          Слушать Песни Силы
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {songs.map((song, index) => (
            <div key={index} className="magic-card flex flex-col gap-4 overflow-hidden">
              <div className="h-48 -mx-6 -mt-6 mb-2 overflow-hidden">
                <img 
                  src={song.image} 
                  alt={song.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <AudioPlayer 
                title={song.title} 
                subtitle={song.subtitle} 
                audioSrc={song.audioSrc} 
              />
              
              <div className="mt-4">
                <p className="italic text-white">{song.lyrics}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SongExamplesSection;
