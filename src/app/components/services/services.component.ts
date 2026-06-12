import { Component, inject } from '@angular/core';
import { ContentService } from '../../core/services/content.service';
import { ServiceCardComponent } from '../service-card/service-card.component';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServiceCardComponent, ScrollAnimateDirective],
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  readonly content = inject(ContentService);
}
