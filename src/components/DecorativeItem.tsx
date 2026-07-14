import { Flower2, Gift, Heart, Sparkles } from 'lucide-react';
import type { GalleryItemType } from '../types';

interface DecorativeItemProps {
  variant: GalleryItemType;
  className?: string;
  delay?: number;
}

export function DecorativeItem({ variant, className, delay = 0 }: DecorativeItemProps) {
  const baseClass = `flex items-center justify-center rounded-[1.5rem] border border-white/15 bg-gradient-to-br from-white/20 to-white/5 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.35)] backdrop-blur-xl ${className ?? ''}`;

  if (variant === 'chocolate') {
    return (
      <div className={baseClass} style={{ animationDelay: `${delay}s` }}>
        <Gift className="h-8 w-8 text-amber-200" />
      </div>
    );
  }

  if (variant === 'teddy') {
    return (
      <div className={baseClass} style={{ animationDelay: `${delay}s` }}>
        <Heart className="h-8 w-8 text-rose-200" />
      </div>
    );
  }

  return (
    <div className={baseClass} style={{ animationDelay: `${delay}s` }}>
      {variant === 'lily' ? <Sparkles className="h-8 w-8 text-cyan-200" /> : <Flower2 className="h-8 w-8 text-emerald-200" />}
    </div>
  );
}
