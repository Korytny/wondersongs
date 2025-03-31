
import React from 'react';
import { cn } from '@/lib/utils';
import { CirclePlay } from 'lucide-react';

interface SongCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

const SongCard = ({ title, description, icon, className }: SongCardProps) => {
  return (
    <div className={cn('magic-card h-full flex flex-col', className)}>
      <div className="flex items-start gap-4 mb-4">
        <div className="rounded-full p-3 bg-primary/20 text-primary-foreground">
          {icon || <CirclePlay size={24} />}
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      
      <p className="text-muted-foreground flex-1">{description}</p>
    </div>
  );
};

export default SongCard;
