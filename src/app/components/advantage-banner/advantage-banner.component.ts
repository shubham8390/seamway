import { Component, inject } from '@angular/core';
import { ContentService } from '../../core/services/content.service';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-advantage-banner',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './advantage-banner.component.html',
})
export class AdvantageBannerComponent {
  readonly content = inject(ContentService);
}
