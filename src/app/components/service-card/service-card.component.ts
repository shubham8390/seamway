import { Component, Input } from '@angular/core';
import { ServiceCategory } from '../../core/services/content.service';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './service-card.component.html',
})
export class ServiceCardComponent {
  @Input({ required: true }) service!: ServiceCategory;
  @Input() index = 0;
}
