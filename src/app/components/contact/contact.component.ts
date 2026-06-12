import { Component, inject } from '@angular/core';
import { ContentService } from '../../core/services/content.service';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ScrollAnimateDirective, ContactFormComponent],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  readonly content = inject(ContentService);

  phoneHref(phone: string): string {
    return 'tel:' + phone.replace(/\s/g, '');
  }
}
