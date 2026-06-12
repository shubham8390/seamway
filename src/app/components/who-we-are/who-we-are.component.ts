import { Component, inject } from '@angular/core';
import { ContentService } from '../../core/services/content.service';
import { ScrollAnimateDirective } from '../../shared/directives/scroll-animate.directive';
import { CountUpDirective } from '../../shared/directives/count-up.directive';

@Component({
  selector: 'app-who-we-are',
  standalone: true,
  imports: [ScrollAnimateDirective, CountUpDirective],
  templateUrl: './who-we-are.component.html',
})
export class WhoWeAreComponent {
  readonly content = inject(ContentService);

  /** Random stats above 50, generated once per page load */
  readonly valueStats = this.content.whoWeAre.values.map(() => this.randomStatAbove50());
  readonly globalReachStat = this.randomStatAbove50(80, 180);

  private randomStatAbove50(min = 51, max = 150): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
