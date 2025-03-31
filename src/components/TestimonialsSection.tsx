
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

interface TestimonialsSectionProps {
  className?: string;
}

const testimonials = [
  {
    name: 'Мария К.',
    text: 'Моя Песня Силы стала для меня настоящим откровением. С первых нот я почувствовала, что она действительно моя, словно Настя заглянула в самое сердце и вытащила оттуда все мои мечты и стремления. Теперь слушаю ее каждое утро для настроя на день!',
    rating: 5
  },
  {
    name: 'Александр и Елена',
    text: 'Заказали песню для нашей пары, чтобы укрепить отношения в непростой период. Результат превзошел все ожидания! Песня словно отражает всю глубину наших чувств и напоминает, почему мы вместе. Спасибо за такой волшебный подарок нашей любви!',
    rating: 5
  },
  {
    name: 'Оксана В.',
    text: 'Заказала Песню Силы для своего бизнеса. Теперь она звучит в нашем офисе и настраивает команду на позитивный лад. Клиенты тоже оценили - часто спрашивают, что это за волшебная мелодия играет! Творчество Насти - это настоящее волшебство.',
    rating: 5
  },
  {
    name: 'Дмитрий Л.',
    text: 'Скептически относился к идее персональной песни, но решил попробовать. Теперь не представляю свою жизнь без нее! Она помогает мне сосредоточиться и настроиться на нужный лад в сложные моменты. Настя, ты действительно умеешь находить нужные слова и звуки!',
    rating: 5
  }
];

const TestimonialsSection = ({ className }: TestimonialsSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className={cn('py-20 relative overflow-hidden', className)} id="testimonials">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute -bottom-40 left-0 w-80 h-80 bg-magic-100/20 rounded-full blur-3xl"></div>
      <div className="absolute top-40 right-0 w-60 h-60 bg-energy-300/10 rounded-full blur-3xl"></div>
      
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-cursive mb-10 gradient-text text-center">
          Отзывы о Песнях Силы
        </h2>
        
        <div className="relative max-w-3xl mx-auto">
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute top-1/2 -left-4 z-10 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
            onClick={prevSlide}
          >
            &lt;
          </Button>
          
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="magic-card text-center h-full">
                    <div className="flex justify-center mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="text-energy-300 fill-energy-300" size={20} />
                      ))}
                    </div>
                    
                    <p className="italic mb-4">{testimonial.text}</p>
                    <p className="font-bold text-magic-700">{testimonial.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute top-1/2 -right-4 z-10 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
            onClick={nextSlide}
          >
            &gt;
          </Button>
          
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-magic-500' : 'bg-magic-100'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
