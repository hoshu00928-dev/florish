'use client';
import { CATEGORY_LABELS, THEME_LABELS, DIFFICULTY_LABELS } from '@/types';
import type { Category, Theme, Difficulty } from '@/types';
export interface FilterState { category: Category | ''; theme: Theme | ''; budget: '' | 'under5k' | '5k-15k' | 'over15k'; isDIY: '' | 'true' | 'false'; difficulty: Difficulty | ''; }
const s = 'text-sm rounded-xl border px-3 py-1.5 appearance-none focus:outline-none transition-colors';
const st = { backgroundColor: 'var(--card)', borderColor: 'var(--border)', color: 'var(--foreground)' };
export default function FilterBar({ filters, onChange }: { filters: FilterState; onChange: (f: FilterState) => void }) {
  const set = <K extends keyof FilterState>(key: K, value: FilterState[K]) => onChange({ ...filters, [key]: value });
  const active = filters.category || filters.theme || filters.budget || filters.isDIY || filters.difficulty;
  return (
    <div className='flex flex-wrap gap-2 items-center'>
      <select value={filters.category} onChange={e => set('category', e.target.value as Category | '')} className={s} style={st}>
        <option value=''>すべてのカテゴリ</option>
        {(Object.keys(CATEGORY_LABELS) as Category[]).map(k => <option key={k} value={k}>{CATEGORY_LABELS[k]}</option>)}
      </select>
      <select value={filters.theme} onChange={e => set('theme', e.target.value as Theme | '')} className={s} style={st}>
        <option value=''>すべてのテーマ</option>
        {(Object.keys(THEME_LABELS) as Theme[]).map(k => <option key={k} value={k}>{THEME_LABELS[k]}</option>)}
      </select>
      <select value={filters.budget} onChange={e => set('budget', e.target.value as FilterState['budget'])} className={s} style={st}>
        {[['', 'すべての予算'], ['under5k', '〜¥5,000'], ['5k-15k', '¥5,000〜¥15,000'], ['over15k', '¥15,000〜']].map(([v, l]) => <option key={v} value={v}>{l}</option>)}
      </select>
      <select value={filters.isDIY} onChange={e => set('isDIY', e.target.value as FilterState['isDIY'])} className={s} style={st}>
        <option value=''>DIY・オーダー問わず</option><option value='true'>DIYできる</option><option value='false'>オーダーのみ</option>
      </select>
      <select value={filters.difficulty} onChange={e => set('difficulty', e.target.value as Difficulty | '')} className={s} style={st}>
        <option value=''>すべての難易度</option>
        {(Object.keys(DIFFICULTY_LABELS) as Difficulty[]).map(k => <option key={k} value={k}>{DIFFICULTY_LABELS[k]}</option>)}
      </select>
      {active && <button onClick={() => onChange({ category: '', theme: '', budget: '', isDIY: '', difficulty: '' })} className='text-sm underline underline-offset-2 hover:opacity-70' style={{ color: 'var(--muted-foreground)' }}>リセット</button>}
    </div>
  );
}
