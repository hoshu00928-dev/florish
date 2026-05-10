'use client';
import { Share2, Check } from 'lucide-react';
import { useState } from 'react';
export default function ShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);
  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) { try { await navigator.share({ title, url }); } catch {} }
    else { await navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 2000); }
  };
  return (
    <button onClick={handleShare} className='flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium transition-all hover:opacity-80' style={{ borderColor: 'var(--border)', color: 'var(--foreground)' }}>
      {copied ? <Check className='w-4 h-4' /> : <Share2 className='w-4 h-4' />}
      {copied ? 'URLをコピーしました' : 'シェアする'}
    </button>
  );
}
