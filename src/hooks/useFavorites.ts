'use client';
import { useCallback, useSyncExternalStore } from 'react';
const STORAGE_KEY = 'florish_favorites';
const CHANGE_EVENT = 'florish-favorites-change';

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);
  window.addEventListener(CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener(CHANGE_EVENT, callback);
  };
}

function getSnapshot(): string {
  return localStorage.getItem(STORAGE_KEY) ?? '[]';
}

function getServerSnapshot(): string {
  return '[]';
}

function parse(raw: string): string[] {
  try { return JSON.parse(raw); } catch { return []; }
}

export function useFavorites() {
  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const favorites = parse(raw);
  const toggle = useCallback((id: string) => {
    const current = parse(getSnapshot());
    const next = current.includes(id) ? current.filter(f => f !== id) : [...current, id];
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      window.dispatchEvent(new Event(CHANGE_EVENT));
    } catch {}
  }, []);
  const isFavorite = useCallback((id: string) => favorites.includes(id), [favorites]);
  return { favorites, toggle, isFavorite };
}
