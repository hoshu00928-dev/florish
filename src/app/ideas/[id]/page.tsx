import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, MapPin, Wrench } from 'lucide-react';
import { ideas } from '@/data/ideas';
import { CATEGORY_LABELS, THEME_LABELS, DIFFICULTY_LABELS } from '@/types';
import FavoriteButton from '@/components/idea/FavoriteButton';
import ShareButton from '@/components/idea/ShareButton';
import ProductLinks from '@/components/idea/ProductLinks';

const difficultyColor: Record<string, string> = { easy: '#BBF7D0', medium: '#FEF08A', hard: '#FECACA' };

export async function generateStaticParams() {
  return ideas.map(idea => ({ id: idea.id }));
}

export default async function IdeaPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const idea = ideas.find(i => i.id === id);
  if (!idea) notFound();
  return (
    <div className='max-w-2xl mx-auto px-4 py-6'>
      <Link href='/' className='inline-flex items-center gap-1.5 text-sm mb-6 hover:opacity-70 transition-opacity' style={{ color: 'var(--muted-foreground)' }}>
        <ArrowLeft className='w-4 h-4' />アイデア一覧へ
      </Link>
      <div className='rounded-2xl overflow-hidden mb-6'>
        <Image src={idea.image} alt={idea.title} width={800} height={600} className='w-full object-cover' style={{ maxHeight: 480 }} unoptimized priority />
      </div>
      <div className='mb-4'>
        <div className='flex flex-wrap items-center gap-2 mb-2'>
          <span className='text-xs px-2.5 py-1 rounded-full' style={{ backgroundColor: 'var(--secondary)', color: 'var(--secondary-foreground)' }}>{CATEGORY_LABELS[idea.category]}</span>
          {idea.themes.map(t => <span key={t} className='text-xs px-2.5 py-1 rounded-full' style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-foreground)' }}>{THEME_LABELS[t]}</span>)}
        </div>
        <h1 className='text-2xl font-light leading-snug' style={{ color: 'var(--foreground)' }}>{idea.title}</h1>
      </div>
      <div className='flex flex-wrap gap-2 mb-6'>
        <FavoriteButton id={idea.id} />
        <ShareButton title={idea.title} />
      </div>
      <div className='grid grid-cols-2 gap-3 p-4 rounded-2xl mb-6' style={{ backgroundColor: 'var(--secondary)' }}>
        <div><p className='text-xs mb-0.5' style={{ color: 'var(--muted-foreground)' }}>予算目安</p><p className='text-sm font-medium' style={{ color: 'var(--foreground)' }}>{idea.budget.label}</p></div>
        <div><p className='text-xs mb-0.5' style={{ color: 'var(--muted-foreground)' }}>再現難易度</p><span className='text-sm font-medium px-2 py-0.5 rounded-full inline-block' style={{ backgroundColor: difficultyColor[idea.difficulty], color: '#1a1a1a' }}>{DIFFICULTY_LABELS[idea.difficulty]}</span></div>
        <div><p className='text-xs mb-0.5' style={{ color: 'var(--muted-foreground)' }}>DIY</p><p className='text-sm font-medium' style={{ color: 'var(--foreground)' }}>{idea.isDIY ? '✓ 自分で作れる' : 'オーダー推奨'}</p></div>
      </div>
      <div className='mb-6'><p className='text-sm leading-relaxed' style={{ color: 'var(--foreground)' }}>{idea.description}</p></div>
      <div className='mb-6'>
        <h2 className='text-base font-medium mb-3 flex items-center gap-2' style={{ color: 'var(--foreground)' }}><Wrench className='w-4 h-4' />必要なアイテム</h2>
        <ul className='space-y-2'>{idea.items.map((item, i) => <li key={i} className='flex items-center gap-2 text-sm' style={{ color: 'var(--foreground)' }}><span className='w-1.5 h-1.5 rounded-full flex-shrink-0' style={{ backgroundColor: 'var(--primary)' }} />{item}</li>)}</ul>
      </div>
      <ProductLinks links={idea.productLinks} />
      {idea.venueNote && (
        <div className='p-4 rounded-2xl mb-6 flex gap-3' style={{ backgroundColor: '#FEF9EC' }}>
          <MapPin className='w-4 h-4 flex-shrink-0 mt-0.5' style={{ color: '#C9A96E' }} />
          <div><p className='text-xs font-medium mb-1' style={{ color: '#8B6914' }}>式場持ち込み注意</p><p className='text-sm' style={{ color: '#5C4A1E' }}>{idea.venueNote}</p></div>
        </div>
      )}
      <p className='text-xs' style={{ color: 'var(--muted-foreground)' }}>画像提供:{' '}{idea.credit.url ? <a href={idea.credit.url} target='_blank' rel='noopener noreferrer' className='underline'>{idea.credit.source}</a> : idea.credit.source}</p>
    </div>
  );
}
