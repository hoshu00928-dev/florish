'use client';
import type { ProductLink } from '@/types';
import { PLATFORM_LABELS } from '@/types';
const icons: Record<string, string> = { amazon: '🛒', rakuten: '🛍️', minne: '🎨', creema: '✂️', canva: '🖌️' };
export default function ProductLinks({ links }: { links: ProductLink[] }) {
  if (links.length === 0) return null;
  return (
    <div className='mb-6'>
      <h2 className='text-base font-medium mb-3' style={{ color: 'var(--foreground)' }}>商品を探す</h2>
      <div className='flex flex-wrap gap-2'>
        {links.map((link, i) => (
          <a key={i} href={link.url} target='_blank' rel='noopener noreferrer' className='flex items-center gap-2 px-4 py-2 rounded-full text-sm border transition-all hover:opacity-80' style={{ borderColor: 'var(--border)', backgroundColor: 'var(--card)', color: 'var(--foreground)' }}>
            <span>{icons[link.platform]}</span>{PLATFORM_LABELS[link.platform]}
          </a>
        ))}
      </div>
    </div>
  );
}
