import { Camera, Gift, Heart, Sparkles, Star } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface AppRoute {
  path: string;
  label: string;
  icon: LucideIcon;
}

export const appRoutes: AppRoute[] = [
  { path: '/', label: 'Home', icon: Heart },
  { path: '/message', label: 'Message', icon: Sparkles },
  { path: '/gallery', label: 'Gallery', icon: Camera },
  { path: '/fun', label: 'Fun', icon: Star },
  { path: '/more', label: 'More', icon: Gift },
];
