import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '@/lib/site';
const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE_NAME} — 結婚式のアイデアを見つけよう`, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  openGraph: { type: 'website', siteName: SITE_NAME, title: `${SITE_NAME} — 結婚式のアイデアを見つけよう`, description: SITE_DESCRIPTION, locale: 'ja_JP' },
  twitter: { card: 'summary_large_image', title: `${SITE_NAME} — 結婚式のアイデアを見つけよう`, description: SITE_DESCRIPTION },
};
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
