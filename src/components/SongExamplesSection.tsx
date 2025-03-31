
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
    audioSrc: '#' // Replace with actual audio source
  },
  {
    title: 'Бессмертный',
    subtitle: 'Реквием',
    lyrics: '«Я в тебе, ты во мне — Мы едины навеки. Я бессмертный, Я здесь и сейчас, человеки. Навеки!»',
    audioSrc: '#' // Replace with actual audio source
  },
  {
    title: 'Вездесущая',
    subtitle: 'Для себя',
    lyrics: '«А я у меня есть, А я у меня — здесь. Самодостаточна, Собой довольна В полной мере»',
    audioSrc: '#' // Replace with actual audio source
  },
  {
    title: 'Любовь Морковь',
    subtitle: 'Семейной паре',
    lyrics: '«А у нас всё замечтательно, Что намечтали, то и прожили. Мы мыслим только позитивное, Да и фантазия хорошая!»',
    audioSrc: '#' // Replace with actual audio source
  },
  {
    title: 'Ом Намо',
    subtitle: 'Для себя',
    lyrics: '«Божественный танец творца: Исцеляю, радую, наслаждаюсь, праздную. Женщина прекрасная С блаженством и спокойствием Счастливого лица»',
    audioSrc: '#' // Replace with actual audio source
  }
];

const SongExamplesSection = ({ className }: SongExamplesSectionProps) => {
  return (
    <section className={cn('py-20 relative', className)} id="examples">
      <div className="absolute -top-40 left-20 w-80 h-80 bg-magic-100/20 rounded-full blur-3xl"></div>
      
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-cursive mb-10 gradient-text text-center">
          Слушать Песни Силы
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {songs.map((song, index) => (
            <div key={index} className="flex flex-col gap-4">
              <AudioPlayer 
                title={song.title} 
                subtitle={song.subtitle} 
                audioSrc={song.audioSrc} 
              />
              <div className="magic-card">
                <p className="italic text-muted-foreground">{song.lyrics}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SongExamplesSection;
