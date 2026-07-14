export interface MoreCardData {
  id: number;
  frontType: 'tulip' | 'lily' | 'chocolate' | 'teddy';
  message: string;
}

export const moreCards: MoreCardData[] = [
  { id: 0, frontType: 'tulip', message: 'You are blooming beautiful!' },
  { id: 1, frontType: 'chocolate', message: 'Sweetest Malkin ever!' },
  { id: 2, frontType: 'lily', message: 'Pure elegance!' },
  { id: 3, frontType: 'teddy', message: 'Sending warm hugs!' },
  { id: 4, frontType: 'tulip', message: 'Just for Devi ji!' },
  { id: 5, frontType: 'chocolate', message: 'A treat for my bestie!' },
  { id: 6, frontType: 'teddy', message: 'So cute!' },
  { id: 7, frontType: 'lily', message: 'Sparkling always ✨' },
];
