'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import type { Idea } from '@/types';
import { CATEGORY_LABELS, DIFFICULTY_LABELS } from '@/types';
import { useFavorites } from '@/hooks/useFavorites';
const difficultyColor: Record<string, string> = { easy: '#86EFAC', medium: '#FCD34D', hard: '#FCA5A5' };
export default function IdeaCard({ idea }: { idea: Idea }) {
  const { toggle, isFavorite } = useFavorites();
  const favorited = isFavorite(idea.id);
  return (
    <div className='masonry-item'>
      <div className='rounded-2xl overflow-hidden group cursor-pointer relative' style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}>
        <Link href={`/ideas/${idea.id}`}>
          <div className='relative overflow-hidden'>
            <Image src={idea.image} alt={idea.title} width={400} height={500} className='w-full object-cover group-hover:scale-105 transition-transform duration-500' style={{ height: 'auto', minHeight: 160 }} unoptimized />
            {idea.isDIY && <span className='absolute top-2 left-2 text-xs px-2 py-0.5 rounded-full font-medium' style={{ backgroundColor: 'rgba(255,255,255,0.9)', color: 'var(--foreground)' }}>DIY可</span>}
          </div>
          <div className='p-3'>
            <p className='text-xs mb-1' style={{ color: 'var(--muted-foreground)' }}>{CATEGORY_LABELS[idea.category]}</p>
            <h3 className='text-sm font-medium leading-snug mb-2' style={{ color: 'var(--foreground)' }}>{idea.title}</h3>
            <div className='flex items-center justify-between'>
              <span className='text-xs' style={{ color: 'var(--muted-foreground)' }}>{idea.budget.label}</span>
              <span className='text-xs px-2 py-0.5 rounded-full' style={{ backgroundColor: difficultyColor[idea.difficulty], color: '#1a1a1a' }}>{DIFFICULTY_LABELS[idea.difficulty]}</span>
            </div>
          </div>
        </Link>
        <button onClick={(e) => { e.preventDefault(); toggle(idea.id); }} className='absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center transition-all' style={{ backgroundColor: favorited ? 'var(--primary)' : 'rgba(255,255,255,0.9)', color: favorited ? 'white' : 'var(--muted-foreground)' }} aria-label={favorited ? 'お気に入りを外す' : 'お気に入りに追加'}>
          <Heart className='w-4 h-4' fill={favorited ? 'currentColor' : 'none'} />
        </button>
      </div>
    </div>
  );
}
