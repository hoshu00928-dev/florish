import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='max-w-md mx-auto px-4 py-24 text-center'>
      <p className='text-4xl mb-4' style={{ color: 'var(--primary)' }}>404</p>
      <h1 className='text-xl font-light mb-2' style={{ color: 'var(--foreground)' }}>ページが見つかりませんでした</h1>
      <p className='text-sm mb-8' style={{ color: 'var(--muted-foreground)' }}>お探しのアイデアは削除されたか、URLが間違っている可能性があります。</p>
      <Link href='/' className='inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium' style={{ backgroundColor: 'var(--primary)', color: 'white' }}>アイデア一覧へ戻る</Link>
    </div>
  );
}
