'use client';
import { useState, useEffect, useCallback } from 'react';
const STORAGE_KEY = 'florish_favorites';
export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    try { const s = localStorage.getItem(STORAGE_KEY); if (s) setFavorites(JSON.parse(s)); } catch {}
  }, []);
  const toggle = useCallback((id: string) => {
    setFavorites(prev => {
      const next = prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id];
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);
  const isFavorite = useCallback((id: string) => mounted && favorites.includes(id), [favorites, mounted]);
  return { favorites, toggle, isFavorite, mounted };
}
