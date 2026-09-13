import type { Idea } from '@/types';
import { ideas } from '@/data/ideas';
import IdeaCard from '@/components/gallery/IdeaCard';

function pickRelated(current: Idea, count: number): Idea[] {
  const pool = ideas.filter(i => i.id !== current.id);
  const sameCategory = pool.filter(i => i.category === current.category);
  const sameTheme = pool.filter(i => !sameCategory.includes(i) && i.themes.some(t => current.themes.includes(t)));
  return [...sameCategory, ...sameTheme].slice(0, count);
}

export default function RelatedIdeas({ current }: { current: Idea }) {
  const related = pickRelated(current, 4);
  if (related.length === 0) return null;
  return (
    <div className='mt-10 pt-8 border-t' style={{ borderColor: 'var(--border)' }}>
      <h2 className='text-base font-medium mb-4' style={{ color: 'var(--foreground)' }}>こんなアイデアも</h2>
      <div className='masonry-grid'>{related.map(idea => <IdeaCard key={idea.id} idea={idea} />)}</div>
    </div>
  );
}
