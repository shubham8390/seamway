import { Component, inject } from '@angular/core';
import { ContentService } from '../../core/services/content.service';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-phoenix-majan',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './phoenix-majan.component.html',
})
export class PhoenixMajanComponent {
  readonly content = inject(ContentService);
}
