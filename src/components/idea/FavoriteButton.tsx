'use client';
import { Heart } from 'lucide-react';
import { useFavorites } from '@/hooks/useFavorites';
export default function FavoriteButton({ id }: { id: string }) {
  const { toggle, isFavorite } = useFavorites();
  const favorited = isFavorite(id);
  return (
    <button onClick={() => toggle(id)} className='flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium transition-all' style={{ backgroundColor: favorited ? 'var(--primary)' : 'transparent', borderColor: favorited ? 'var(--primary)' : 'var(--border)', color: favorited ? 'white' : 'var(--foreground)' }}>
      <Heart className='w-4 h-4' fill={favorited ? 'currentColor' : 'none'} />
      {favorited ? 'お気に入り済み' : 'お気に入りに追加'}
    </button>
  );
}
