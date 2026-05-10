import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });
export const metadata: Metadata = { title: 'Florish — 結婚式のアイデアを見つけよう', description: '結婚式の飾り付け・演出アイデアを探す・保存する・再現するためのWebサービス' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja' className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className='min-h-full flex flex-col antialiased'>
        <Header />
        <main className='flex-1'>{children}</main>
        <footer className='mt-16 pb-8 text-center text-sm' style={{ color: 'var(--muted-foreground)' }}><p>© 2026 Florish</p></footer>
      </body>
    </html>
  );
}
