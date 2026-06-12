import { Injectable, signal, computed, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly storageKey = 'seamway-theme';

  readonly theme = signal<Theme>('light');

  readonly isDark = computed(() => this.theme() === 'dark');

  readonly wideLogo = computed(() =>
    this.isDark()
      ? '/images/logos/Dark_wide_logo-removebg-preview.png'
      : '/images/logos/Light_wide_logo-removebg-preview.png'
  );

  readonly squareLogo = computed(() =>
    this.isDark()
      ? '/images/logos/Dark_square_logo-removebg-preview.png'
      : '/images/logos/Light_Square_logo-removebg-preview.png'
  );

  init(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const stored = localStorage.getItem(this.storageKey) as Theme | null;
    const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    this.applyTheme(stored ?? preferred);
  }

  toggleTheme(): void {
    this.applyTheme(this.theme() === 'light' ? 'dark' : 'light');
  }

  private applyTheme(theme: Theme): void {
    this.theme.set(theme);

    if (!isPlatformBrowser(this.platformId)) return;

    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem(this.storageKey, theme);
  }
}
