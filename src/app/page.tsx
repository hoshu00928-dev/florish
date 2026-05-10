'use client';
import { useState, useMemo } from 'react';
import IdeaCard from '@/components/gallery/IdeaCard';
import FilterBar, { type FilterState } from '@/components/gallery/FilterBar';
import { ideas } from '@/data/ideas';
const init: FilterState = { category: '', theme: '', budget: '', isDIY: '', difficulty: '' };
function matchesBudget(min: number, max: number, b: FilterState['budget']) {
  if (!b) return true;
  if (b === 'under5k') return min < 5000;
  if (b === '5k-15k') return min >= 5000 && max <= 15000;
  if (b === 'over15k') return max > 15000;
  return true;
}
export default function HomePage() {
  const [filters, setFilters] = useState<FilterState>(init);
  const filtered = useMemo(() => ideas.filter(idea => {
    if (filters.category && idea.category !== filters.category) return false;
    if (filters.theme && !idea.themes.includes(filters.theme as never)) return false;
    if (filters.budget && !matchesBudget(idea.budget.min, idea.budget.max, filters.budget)) return false;
    if (filters.isDIY !== '' && idea.isDIY !== (filters.isDIY === 'true')) return false;
    if (filters.difficulty && idea.difficulty !== filters.difficulty) return false;
    return true;
  }), [filters]);
  return (
    <div className='max-w-6xl mx-auto px-4 py-8'>
      <div className='text-center mb-10'>
        <h1 className='text-3xl sm:text-4xl font-light tracking-wide mb-3' style={{ color: 'var(--foreground)' }}>あなたの式を、もっと素敵に。</h1>
        <p className='text-sm sm:text-base' style={{ color: 'var(--muted-foreground)' }}>飾り付け・演出アイデアを探して、保存して、再現しよう。</p>
      </div>
      <div className='mb-6'><FilterBar filters={filters} onChange={setFilters} /></div>
      <p className='text-xs mb-4' style={{ color: 'var(--muted-foreground)' }}>{filtered.length}件のアイデア</p>
      {filtered.length > 0 ? (
        <div className='masonry-grid'>{filtered.map(idea => <IdeaCard key={idea.id} idea={idea} />)}</div>
      ) : (
        <div className='text-center py-20' style={{ color: 'var(--muted-foreground)' }}>
          <p className='text-lg mb-2'>該当するアイデアが見つかりませんでした</p>
          <button onClick={() => setFilters(init)} className='text-sm underline underline-offset-2'>フィルターをリセット</button>
        </div>
      )}
    </div>
  );
}
