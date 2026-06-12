import { Component, inject } from '@angular/core';
import { ContentService } from '../../core/services/content.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  readonly content = inject(ContentService);
}
