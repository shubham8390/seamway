import { Component, inject } from '@angular/core';
import { ContentService } from '../../core/services/content.service';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-why-choose',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './why-choose.component.html',
})
export class WhyChooseComponent {
  readonly content = inject(ContentService);
}
