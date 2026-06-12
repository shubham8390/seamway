import { Component, HostListener, inject, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { ContentService } from '../../core/services/content.service';
import { ThemeService } from '../../core/services/theme.service';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, ThemeToggleComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  readonly content = inject(ContentService);
  readonly themeService = inject(ThemeService);

  readonly mobileMenuOpen = signal(false);
  readonly scrolled = signal(false);
  readonly activeSection = signal('home');

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
    this.updateActiveSection();
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  navigateTo(fragment: string): void {
    this.closeMobileMenu();
    const el = document.getElementById(fragment);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  private updateActiveSection(): void {
    const sections = this.content.navLinks.map((l) => l.fragment);
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el && el.getBoundingClientRect().top <= 120) {
        this.activeSection.set(sections[i]);
        return;
      }
    }
  }
}
