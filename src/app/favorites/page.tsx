'use client';
import Link from 'next/link';
import { ArrowLeft, Heart, Share2 } from 'lucide-react';
import { useState } from 'react';
import { useFavorites } from '@/hooks/useFavorites';
import { ideas } from '@/data/ideas';
import IdeaCard from '@/components/gallery/IdeaCard';
export default function FavoritesPage() {
  const { favorites, mounted } = useFavorites();
  const [copied, setCopied] = useState(false);
  const fav = ideas.filter(i => favorites.includes(i.id));
  if (!mounted) return null;
  return (
    <div className='max-w-6xl mx-auto px-4 py-8'>
      <Link href='/' className='inline-flex items-center gap-1.5 text-sm mb-6 hover:opacity-70' style={{ color: 'var(--muted-foreground)' }}><ArrowLeft className='w-4 h-4' />アイデア一覧へ</Link>
      <div className='flex items-center justify-between mb-6'>
        <div>
          <h1 className='text-2xl font-light' style={{ color: 'var(--foreground)' }}>お気に入り</h1>
          <p className='text-sm mt-1' style={{ color: 'var(--muted-foreground)' }}>{fav.length}件のアイデアを保存中</p>
        </div>
        {fav.length > 0 && <button onClick={async () => { await navigator.clipboard.writeText(window.location.href); setCopied(true); setTimeout(() => setCopied(false), 2000); }} className='flex items-center gap-2 px-4 py-2 rounded-full border text-sm hover:opacity-80' style={{ borderColor: 'var(--border)', color: 'var(--foreground)' }}><Share2 className='w-4 h-4' />{copied ? 'コピーしました' : 'リストを共有'}</button>}
      </div>
      {fav.length > 0 ? (
        <div className='masonry-grid'>{fav.map(idea => <IdeaCard key={idea.id} idea={idea} />)}</div>
      ) : (
        <div className='text-center py-24'>
          <Heart className='w-10 h-10 mx-auto mb-4' style={{ color: 'var(--border)' }} />
          <p className='text-lg mb-2' style={{ color: 'var(--muted-foreground)' }}>まだお気に入りがありません</p>
          <Link href='/' className='inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium' style={{ backgroundColor: 'var(--primary)', color: 'white' }}>アイデアを探す</Link>
        </div>
      )}
    </div>
  );
}
