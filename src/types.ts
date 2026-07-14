export type FlowerType = 'lily' | 'tulip';

export type GalleryItemType = 'chocolate' | FlowerType | 'teddy';

export interface GalleryItem {
  type: GalleryItemType;
  title: string;
}

export type MoreCardType = GalleryItemType;

export interface MoreCardData {
  id: number;
  frontType: MoreCardType;
  message: string;
}
