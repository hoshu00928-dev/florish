'use client';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { useFavorites } from '@/hooks/useFavorites';
export default function Header() {
  const { favorites } = useFavorites();
  return (
    <header className='sticky top-0 z-50 border-b' style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}>
      <div className='max-w-6xl mx-auto px-4 h-14 flex items-center justify-between'>
        <Link href='/' className='text-xl font-light tracking-widest' style={{ color: 'var(--foreground)' }}>Florish</Link>
        <Link href='/favorites' className='flex items-center gap-1.5 text-sm hover:opacity-70 transition-opacity' style={{ color: 'var(--muted-foreground)' }}>
          <Heart className='w-4 h-4' />
          <span>お気に入り</span>
          {favorites.length > 0 && (
            <span className='text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium' style={{ backgroundColor: 'var(--primary)', color: 'white' }}>{favorites.length}</span>
          )}
        </Link>
      </div>
    </header>
  );
}
