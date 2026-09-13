import type { MetadataRoute } from 'next';
import { ideas } from '@/data/ideas';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/favorites`, changeFrequency: 'monthly', priority: 0.3 },
    ...ideas.map(idea => ({ url: `${SITE_URL}/ideas/${idea.id}`, changeFrequency: 'monthly' as const, priority: 0.7 })),
  ];
}
