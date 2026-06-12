import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appCountUp]',
  standalone: true,
})
export class CountUpDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);

  @Input({ required: true }) appCountUp!: number;
  @Input() countUpDuration = 2000;
  @Input() countUpSuffix = '+';

  private observer?: IntersectionObserver;
  private animationId?: number;
  private hasAnimated = false;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.setValue(this.appCountUp);
      return;
    }

    this.setValue(0);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      this.setValue(this.appCountUp);
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.hasAnimated = true;
            this.startAnimation();
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }

  private startAnimation(): void {
    const target = this.appCountUp;
    const duration = this.countUpDuration;
    const startTime = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      this.setValue(current);

      if (progress < 1) {
        this.animationId = requestAnimationFrame(step);
      } else {
        this.setValue(target);
      }
    };

    this.animationId = requestAnimationFrame(step);
  }

  private setValue(value: number): void {
    this.el.nativeElement.textContent = `${value}${this.countUpSuffix}`;
  }
}
