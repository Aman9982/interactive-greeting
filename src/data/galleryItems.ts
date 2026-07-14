export type GalleryItemType = 'chocolate' | 'tulip' | 'lily' | 'teddy';

export interface GalleryItem {
  type: GalleryItemType;
  title: string;
}

export const galleryItems: GalleryItem[] = [
  { type: 'chocolate', title: 'Sweetness' },
  { type: 'tulip', title: 'Beauty' },
  { type: 'lily', title: 'Elegance' },
  { type: 'teddy', title: 'Cuteness' },
  { type: 'lily', title: 'Grace' },
  { type: 'teddy', title: 'Hugs' },
  { type: 'tulip', title: 'Charm' },
  { type: 'chocolate', title: 'Joy' },
];
