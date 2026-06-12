import { Component, OnInit, inject, HostListener } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';
import { ServicesComponent } from './components/services/services.component';
import { WhyChooseComponent } from './components/why-choose/why-choose.component';
import { AdvantageBannerComponent } from './components/advantage-banner/advantage-banner.component';
import { PhoenixMajanComponent } from './components/phoenix-majan/phoenix-majan.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroComponent,
    WhoWeAreComponent,
    ServicesComponent,
    WhyChooseComponent,
    AdvantageBannerComponent,
    PhoenixMajanComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private readonly themeService = inject(ThemeService);

  ngOnInit(): void {
    this.themeService.init();
  }

  @HostListener('document:click')
  onDocumentClick(): void {
    // Mobile menu closes via header navigation; document click handled in header if needed
  }
}
