import type { Platform } from '@/types';
export function buildProductUrl(platform: Platform, keyword: string): string {
  const e = encodeURIComponent(keyword);
  switch (platform) {
    case 'amazon': return `https://www.amazon.co.jp/s?k=${e}`;
    case 'rakuten': return `https://search.rakuten.co.jp/search/mall/${e}/`;
    case 'minne': return `https://minne.com/search?q=${e}`;
    case 'creema': return `https://www.creema.jp/c/search?q=${e}`;
    case 'canva': return `https://www.canva.com/search/templates?q=${e}`;
  }
}
