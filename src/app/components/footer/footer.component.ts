import { Component, inject } from '@angular/core';
import { ContentService } from '../../core/services/content.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  readonly content = inject(ContentService);
  readonly year = new Date().getFullYear();
}
