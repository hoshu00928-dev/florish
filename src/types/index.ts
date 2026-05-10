export type Category = 'welcome' | 'place-card' | 'profile-book' | 'high-seat' | 'gift';
export type Theme = 'natural' | 'classic' | 'modern' | 'vintage' | 'botanical' | 'romantic';
export type Difficulty = 'easy' | 'medium' | 'hard';
export type Platform = 'amazon' | 'rakuten' | 'minne' | 'creema' | 'canva';

export interface ProductLink { platform: Platform; label: string; url: string; }

export interface Idea {
  id: string; title: string; image: string; category: Category;
  themes: Theme[]; budget: { min: number; max: number; label: string };
  isDIY: boolean; difficulty: Difficulty; items: string[];
  productLinks: ProductLink[]; venueNote: string | null;
  credit: { source: string; url?: string }; description: string;
}

export const CATEGORY_LABELS: Record<Category, string> = {
  'welcome': 'ウェルカムスペース', 'place-card': '席札・席次表',
  'profile-book': 'プロフィールブック', 'high-seat': '高砂装飾', 'gift': 'プチギフト',
};
export const THEME_LABELS: Record<Theme, string> = {
  natural: 'ナチュラル', classic: 'クラシック', modern: 'モダン',
  vintage: 'ヴィンテージ', botanical: 'ボタニカル', romantic: 'ロマンティック',
};
export const DIFFICULTY_LABELS: Record<Difficulty, string> = { easy: '簡単', medium: '普通', hard: 'こだわり' };
export const PLATFORM_LABELS: Record<Platform, string> = {
  amazon: 'Amazonで探す', rakuten: '楽天で探す', minne: 'minneで探す', creema: 'Creemaで探す', canva: 'Canvaで作る',
};
