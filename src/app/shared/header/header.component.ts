import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  activeLang: string = 'en';
  isMenuOpen: boolean = false;

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  useLanguage(language: string): void {
    this.translate.use(language).subscribe(() => {
      this.activeLang = language;
    }, (error) => {
      console.error(`Error switching to language ${language}:`, error);
    });
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    console.log('Menu is now', this.isMenuOpen ? 'open' : 'closed');
  }
}